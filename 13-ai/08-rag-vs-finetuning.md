# Chapter 84 — RAG vs Fine-Tuning

## 📖 Definition

**Prompting** changes the instructions. **RAG** changes the facts the model can see. **Fine-tuning** changes the model's weights. They solve different problems and are frequently confused in interviews.

## 🔍 Explanation

The decision rule fits in one line: **RAG for knowledge, fine-tuning for behaviour, prompting for everything you can get away with.**

| Dimension | Prompting | RAG | Fine-tuning |
|---|---|---|---|
| Changes | instructions | available facts | weights / behaviour |
| Setup time | minutes | days | weeks |
| Cost profile | per-token | per-token + infra | training + hosting |
| Fresh data | resend the prompt | re-index (minutes) | retrain |
| Citations | no | yes | no |
| Access control | n/a | per-document filters | baked in, cannot be revoked |
| Iteration | instant | fast | slow |

### Escalate in this order

1. **Better prompt** — clearer context, examples, structured outputs. Solves most cases.
2. **RAG** — the model lacks *facts*: your docs, your database, anything after training cutoff.
3. **Long context / caching** — the corpus is small enough to fit and stable enough to cache; skip the retrieval stack entirely.
4. **Fine-tuning** — you need a *consistent form* prompting cannot pin down, or you must cut latency and cost at very high volume by moving quality into a smaller model.

### What fine-tuning is actually good at

- Rigid output format or house style you cannot get with examples alone.
- Domain tone and jargon (clinical notes, legal filings).
- Distilling a large model's behaviour on a narrow task into a smaller, cheaper model.
- Shorter prompts: instructions move into the weights.

### What fine-tuning does not fix

- **Facts.** Fine-tuning teaches patterns, not a lookup table. Facts drift the moment they change.
- **Hallucination.** It can make it worse: a confident style with no grounding.
- **Access control.** Once a document is in training data, you cannot revoke it per user.

Practical note: fine-tuning availability is provider- and platform-specific, so in an interview answer *when* you would fine-tune and what data you would need — not a specific vendor button.

### The data cost nobody mentions

Fine-tuning needs hundreds to thousands of high-quality, consistently-labelled examples plus a held-out eval set. Teams usually discover that building this dataset would have taken less time than fixing the prompt.

## 💻 Code Example — Escalation Path in Code

```ts
// Step 1: prompting — solves most format problems
const res = await client.messages.create({
  model: "claude-sonnet-5",
  max_tokens: 2000,
  system: HOUSE_STYLE_PROMPT,
  output_config: { format: { type: "json_schema", schema: NOTE_SCHEMA } },
  messages: [{ role: "user", content: transcript }],
});
```

```ts
// Step 2: RAG — needed because the answer lives in your data, not the model
const chunks = await retrieve(question, tenantId);
const grounded = await client.messages.create({
  model: "claude-sonnet-5",
  max_tokens: 2000,
  system: "Answer only from <context>. Cite [doc N]. Otherwise say you don't know.",
  messages: [{ role: "user", content: `<context>${render(chunks)}</context>\n\n${question}` }],
});
```

```ts
// Step 3: long context + caching — corpus is small and stable, so skip retrieval
const res = await client.messages.create({
  model: "claude-opus-5",
  max_tokens: 4000,
  system: [
    { type: "text", text: "You answer questions about our API." },
    { type: "text", text: ENTIRE_API_REFERENCE, cache_control: { type: "ephemeral" } },
  ],
  messages: [{ role: "user", content: question }],  // volatile part goes AFTER the cache point
});
```

## 💻 Code Example — Shaping Fine-Tuning Data (When You Do Need It)

```ts
// JSONL: one conversation per line. Consistency matters more than volume.
type Example = { messages: { role: "user" | "assistant"; content: string }[] };

const example: Example = {
  messages: [
    { role: "user", content: "Patient reports chest tightness after climbing stairs, 3 days." },
    { role: "assistant", content: "CC: Exertional chest tightness x3 days.\nHPI: ...\nA/P: ..." },
  ],
};

// Rules that decide whether the run succeeds:
// - 500+ examples for a narrow task; every one reviewed by a domain expert
// - one canonical format; inconsistent labels teach inconsistency
// - hold out 10-20% as an eval set that never enters training
// - no PII or secrets: training data cannot be un-learned per user
```

## 💻 Code Example — Distillation Instead of Hand-Labelling

```ts
// Use the expensive model to generate training data for the cheap one,
// then keep only examples that pass automated checks.
async function buildDataset(inputs: string[]) {
  const rows = [];
  for (const input of inputs) {
    const gold = await client.messages.create({
      model: "claude-opus-5",
      max_tokens: 2000,
      system: HOUSE_STYLE_PROMPT,
      messages: [{ role: "user", content: input }],
    });
    const output = textOf(gold);
    if (passesSchema(output) && passesRubric(output)) rows.push({ input, output });
  }
  return rows;   // candidate fine-tuning data — still needs human spot-checks
}
```

## 🌍 Real-World Uses

- **RAG** — support bot over your help centre; internal policy Q&A; codebase assistant.
- **Prompting only** — extraction, classification, summarization, most codegen.
- **Long context + caching** — full API reference or contract in the system prompt for every request.
- **Fine-tuning** — high-volume, narrow, format-strict tasks where a small model must hit large-model quality.

## 🎯 Likely Interview Questions

1. **RAG or fine-tuning for a company knowledge base?** — RAG. The knowledge changes, needs citations, and must respect per-user permissions; none of those survive being baked into weights.
2. **Can fine-tuning stop hallucinations?** — No, and it can worsen them. Grounding (retrieval plus a refusal contract) is the fix.
3. **When is fine-tuning the right answer?** — Consistent form or tone you cannot pin down with prompting, or distilling behaviour into a smaller model for latency and cost at high volume.
4. **Long context is 1M tokens now — is RAG obsolete?** — No. Cost scales with tokens sent, latency grows, and precision drops when you bury 4 relevant paragraphs in 900K tokens. Long context plus caching wins for small, stable corpora; RAG wins for large or changing ones.
5. **How much data do you need to fine-tune?** — Hundreds to thousands of consistently-labelled examples plus a held-out eval set; quality and consistency beat volume.
6. **Can you combine them?** — Yes, and it is common: fine-tune for form, retrieve for facts.
7. **What is the compliance risk with fine-tuning?** — Training data cannot be revoked or scoped per user, so PII or customer-specific content in the dataset becomes a deletion-request problem.

---

[← Streaming Responses](07-streaming-responses.md) | [Index](../README.md) | [Next: Evaluation & Hallucination →](09-evaluation-hallucination.md)
