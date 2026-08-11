# Chapter 85 — Evaluation & Hallucination

## 📖 Definition

**Hallucination** is fluent, confident output that is not supported by the input or by reality. **Evaluation (evals)** is the automated test suite that tells you whether a prompt, model, or pipeline change made your system better or worse.

## 🔍 Explanation

An LLM predicts plausible tokens; it has no built-in notion of "I do not know". You cannot eliminate hallucination, so you engineer around it: **ground it, constrain it, verify it, and give it an escape hatch.**

### Four layers of defence

1. **Grounding** — retrieval plus "answer only from the provided context" (Chapter 80).
2. **Constraints** — structured outputs and enums remove entire classes of invented output.
3. **Verification** — check claims mechanically: does the cited ID exist? does the code compile? does the SQL parse?
4. **Escape hatch** — an explicit, rewarded way to say "not in the docs". Without it, the model must invent something.

### Why you need evals, not vibes

Without evals, every prompt change is a coin flip and every model upgrade is a gamble. The minimum viable eval suite is **20–50 labelled cases** covering happy path, edge cases, and past production failures. Add every bug you fix as a new case — that is your regression suite.

### Scoring methods

| Method | Use for | Notes |
|---|---|---|
| **Exact / schema match** | classification, extraction | cheapest and most reliable; prefer it wherever possible |
| **Programmatic checks** | code, SQL, JSON, IDs, math | run the code, parse the query, look up the ID |
| **LLM-as-judge** | summaries, tone, faithfulness | needs a rubric and calibration against human labels |
| **Human review** | final gate on high-stakes output | sample, do not review everything |

**LLM-as-judge caveats:** use a strong model as judge, give it a concrete rubric with a scale, ask for a reason before the score, and spot-check its agreement with human labels. Never let the same call both generate and grade itself.

### RAG needs two separate scores

- **Retrieval** — recall@k, MRR on labelled query→document pairs.
- **Generation** — faithfulness (is every claim supported by the retrieved context?) and answer correctness.

Measuring only end-to-end quality means you cannot tell a retrieval miss from a reasoning failure — and they have completely different fixes.

## 💻 Code Example — A Minimal Eval Harness

```ts
type Case = { id: string; input: string; expected?: string; check?: (out: string) => boolean };

const cases: Case[] = [
  { id: "cls-01", input: "My card was declined twice", expected: "billing" },
  { id: "cls-02", input: "App crashes on upload", expected: "technical" },
  { id: "esc-01", input: "What is your CEO's home address?", check: (o) => o.includes("don't") },
  // every production bug becomes a case here
];

async function runEvals(variant: { name: string; run: (input: string) => Promise<string> }) {
  const results = await Promise.all(
    cases.map(async (c) => {
      const out = (await variant.run(c.input)).trim();
      const pass = c.expected ? out === c.expected : c.check!(out);
      return { id: c.id, pass, out };
    }),
  );

  const passed = results.filter((r) => r.pass).length;
  console.table(results.filter((r) => !r.pass));           // only failures are interesting
  return { variant: variant.name, score: passed / cases.length };
}

// Compare candidates against the current baseline before shipping
const scores = await Promise.all([runEvals(baseline), runEvals(candidate)]);
```

## 💻 Code Example — Faithfulness Judge for RAG

```ts
const JUDGE_SCHEMA = {
  type: "object",
  properties: {
    reasoning: { type: "string" },
    unsupported_claims: { type: "array", items: { type: "string" } },
    faithful: { type: "boolean" },
  },
  required: ["reasoning", "unsupported_claims", "faithful"],
  additionalProperties: false,
} as const;

async function judgeFaithfulness(context: string, answer: string) {
  const res = await client.messages.create({
    model: "claude-opus-5",                 // judge with a strong model
    max_tokens: 2000,
    output_config: { format: { type: "json_schema", schema: JUDGE_SCHEMA } },
    system: `Decide whether every factual claim in the answer is supported by the context.
List any claim that is not supported, even if it is true in the real world.
Reason first, then decide. Formatting and phrasing are not your concern.`,
    messages: [{
      role: "user",
      content: `<context>\n${context}\n</context>\n\n<answer>\n${answer}\n</answer>`,
    }],
  });

  return JSON.parse(textOf(res)) as {
    reasoning: string; unsupported_claims: string[]; faithful: boolean;
  };
}
```

Reasoning before the verdict is deliberate: a schema that puts the boolean first gets a guess, then a justification for the guess.

## 💻 Code Example — Programmatic Verification Beats Judging

```ts
// Never trust a cited ID — check it
async function verifyCitations(answer: string, allowed: Set<string>) {
  const cited = [...answer.matchAll(/\[doc (\d+)\]/g)].map((m) => m[1]);
  const bogus = cited.filter((id) => !allowed.has(id));
  if (bogus.length) throw new Error(`Fabricated citations: ${bogus.join(", ")}`);
  if (cited.length === 0 && !answer.includes("don't have that")) {
    throw new Error("Grounded answer with no citation");
  }
}

// Generated SQL: parse and restrict before it ever reaches the database
function verifySql(sql: string) {
  const ast = parse(sql);                                     // real parser, not regex
  if (ast.type !== "select") throw new Error("Only SELECT allowed");
  if (!/\blimit\b/i.test(sql)) throw new Error("LIMIT required");
}
```

## 💻 Code Example — Retrieval Metrics

```ts
// recall@k: of the labelled relevant docs, how many did retrieval surface?
function recallAtK(retrieved: string[], relevant: string[], k: number) {
  const top = new Set(retrieved.slice(0, k));
  return relevant.filter((id) => top.has(id)).length / relevant.length;
}

// MRR: how high did the first relevant doc rank?
function mrr(retrieved: string[], relevant: Set<string>) {
  const rank = retrieved.findIndex((id) => relevant.has(id));
  return rank === -1 ? 0 : 1 / (rank + 1);
}
```

## 💻 Code Example — Generate, Critique, Revise

```ts
async function draftWithCritique(task: string) {
  let draft = textOf(await client.messages.create({
    model: "claude-sonnet-5", max_tokens: 4000,
    messages: [{ role: "user", content: task }],
  }));

  for (let i = 0; i < 2; i++) {
    const critique = textOf(await client.messages.create({
      model: "claude-opus-5", max_tokens: 2000,
      system: "List concrete defects against the requirements. If none, reply exactly: PASS.",
      messages: [{ role: "user", content: `Task:\n${task}\n\nDraft:\n${draft}` }],
    }));

    if (critique.trim() === "PASS") break;

    draft = textOf(await client.messages.create({
      model: "claude-sonnet-5", max_tokens: 4000,
      messages: [{ role: "user", content: `Task:\n${task}\n\nDraft:\n${draft}\n\nFix these:\n${critique}` }],
    }));
  }
  return draft;
}
```

Use a *separate* call with fresh context for the critique. Asking one call to grade its own output in the same breath mostly produces agreement.

## 🌍 Real-World Uses

- **CI gate** — evals run on every prompt PR; a score drop blocks merge.
- **Model upgrade decisions** — same suite across models decides whether the cheaper one is good enough.
- **Production monitoring** — sample live traffic, run the faithfulness judge nightly, alert on drift.
- **Regression suite** — every hallucination reported by a user becomes a permanent test case.

## 🎯 Likely Interview Questions

1. **Why do LLMs hallucinate?** — They optimize for plausible next tokens, not truth, and have no built-in signal for absent knowledge.
2. **How do you reduce hallucination in production?** — Ground with retrieval, constrain with schemas, verify claims mechanically, and give an explicit "I don't know" path.
3. **How do you test a non-deterministic system?** — A labelled eval set with programmatic scoring where possible and a rubric-driven judge where not; compare variants on the same suite instead of eyeballing single outputs.
4. **What are the risks of LLM-as-judge?** — Bias toward verbose or same-model output, and drift. Mitigate with rubrics, reason-before-score, a strong judge model, and periodic human calibration.
5. **How do you evaluate a RAG system?** — Score retrieval and generation separately: recall@k / MRR for retrieval, faithfulness and correctness for generation.
6. **Your bot fabricated a refund policy. Walk me through the fix.** — Check whether retrieval returned the policy at all; if not, fix chunking/search. If it did, tighten the grounding contract, add a citation check that fails closed, and add the case to the eval suite.
7. **How do you know a prompt change actually helped?** — The eval score moved on a suite you did not tune against, with the prompt version logged alongside production requests.

---

[← RAG vs Fine-Tuning](08-rag-vs-finetuning.md) | [Index](../README.md) | [Next: AI Security →](10-ai-security.md)
