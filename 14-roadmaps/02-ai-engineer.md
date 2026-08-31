# Chapter 89 — AI Engineer Roadmap

## 📖 Definition

An **AI engineer** builds products on top of foundation models. You do not train models. You own the layer around them: prompts, retrieval, tool calling, evaluation, caching, cost, latency, and failure handling. It is software engineering where one dependency is non-deterministic.

## 🔍 Market Reality

- The widest-open AI role right now, and the one a MERN or NestJS developer can reach fastest.
- Hired by product startups, SaaS companies, agencies, and enterprise innovation teams.
- No research background, no maths degree, no PhD. Backend instincts matter more than model theory.
- The title varies: *AI engineer*, *applied AI engineer*, *GenAI engineer*, *LLM engineer*, *AI application developer*. Same job.

## ✅ Before Stage 1

| Prerequisite | Why it is needed |
|---|---|
| Python or TypeScript at working level | Every SDK and example assumes one of the two |
| HTTP, REST, JSON | The model is an API call; everything else is plumbing |
| SQL basics | Retrieval and logging both land in a database |
| Git + one deploy target you have used | Stage 5 requires something actually deployed |

If you have finished the JavaScript, Node.js, and MongoDB sections of this book, you already clear this bar.

## 🗺️ The Roadmap

### Stage 1 — Model foundations (3-4 weeks)

**Goal:** stop treating the model as magic; know what it charges you and where it breaks.

| Learn | Build |
|---|---|
| Tokens, context windows, truncation | A streaming CLI chat tool that prints tokens used and rupee cost after every turn |
| Sampling and stop sequences | |
| Streaming responses | |
| Structured output with a JSON schema | |
| Cost and latency per request | |
| Model selection: capability vs price vs speed | |

Chapters [77](../13-ai/01-llm-fundamentals.md) and [83](../13-ai/07-streaming-responses.md) cover this stage's theory.

### Stage 2 — Prompting and evaluation (3-4 weeks)

**Goal:** make prompt changes measurable. This is the stage that gets you hired.

| Learn | Build |
|---|---|
| System prompt structure: role, task, constraints, format | An eval harness that scores three prompt versions across 50 labelled cases and prints a comparison table |
| Few-shot example selection | |
| Task decomposition | |
| Golden test sets and rubrics | |
| LLM-as-judge with human spot checks | |
| Prompt regression tests in CI | |

See chapters [78](../13-ai/02-prompt-engineering.md) and [85](../13-ai/09-evaluation-hallucination.md).

### Stage 3 — Retrieval / RAG (4-6 weeks)

**Goal:** ground answers in real documents and prove the grounding works.

| Learn | Build |
|---|---|
| Chunking strategies — chunk size decides quality | Document Q&A over your own PDFs that cites sources and reports retrieval hit rate |
| Embeddings and vector search | |
| pgvector, Qdrant, or a managed vector store | |
| Hybrid search: BM25 + vector | |
| Reranking | |
| Citations, and refusing when context is missing | |
| Retrieval metrics: hit rate, recall@k | |

See chapters [79](../13-ai/03-embeddings-vector-search.md), [80](../13-ai/04-rag.md), and [84](../13-ai/08-rag-vs-finetuning.md).

### Stage 4 — Tools and agents (4-6 weeks)

**Goal:** let the model act, without letting it act unchecked.

| Learn | Build |
|---|---|
| Tool / function calling and schema design | An agent that reads a support ticket, queries a real API, and drafts a reply for human approval |
| MCP servers | |
| Multi-step loops, retries, stopping conditions | |
| Sandboxed execution | |
| Human-in-the-loop approval gates | |
| Token and step budget caps | |

See chapters [81](../13-ai/05-tool-calling.md) and [82](../13-ai/06-ai-agents.md).

### Stage 5 — Ship and operate (4-6 weeks)

**Goal:** run it in production for strangers, not in a notebook for yourself.

| Learn | Build |
|---|---|
| Prompt versioning and rollout | A deployed service with a dashboard showing p95 latency, cost per request, and error rate |
| Prompt caching and response caching | |
| Rate limits, timeouts, fallback models | |
| Tracing and observability | |
| Prompt injection defence and output validation | |
| PII redaction and retention | |
| Red-teaming your own app | |

See chapters [86](../13-ai/10-ai-security.md) and [87](../13-ai/11-cost-latency-optimization.md).

## 💻 Code Example — The Stage 2 Artefact (Eval Harness)

The single most portfolio-worthy thing an aspiring AI engineer can own: a script that decides between two prompts with evidence.

```ts
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

type Case = { input: string; expected: "positive" | "neutral" | "negative" };

const schema = {
  type: "object",
  properties: {
    sentiment: { type: "string", enum: ["positive", "neutral", "negative"] },
  },
  required: ["sentiment"],
  additionalProperties: false,
} as const;

async function scorePrompt(system: string, cases: Case[]) {
  let correct = 0;
  let inputTokens = 0;
  let outputTokens = 0;

  for (const c of cases) {
    const res = await client.messages.create({
      model: "claude-opus-5",
      max_tokens: 256,
      // Stable prefix first so the cache can hold it across all 50 cases.
      system: [{ type: "text", text: system, cache_control: { type: "ephemeral" } }],
      output_config: { format: { type: "json_schema", schema } },
      messages: [{ role: "user", content: `<review>${c.input}</review>` }],
    });

    const text = res.content.find((b) => b.type === "text")!.text;
    if (JSON.parse(text).sentiment === c.expected) correct++;

    inputTokens += res.usage.input_tokens;
    outputTokens += res.usage.output_tokens;
  }

  return {
    accuracy: correct / cases.length,
    inputTokens,
    outputTokens,
  };
}

// Change one variable at a time, then compare.
const baseline = await scorePrompt(PROMPT_V1, GOLDEN_SET);
const candidate = await scorePrompt(PROMPT_V2, GOLDEN_SET);

console.table({ baseline, candidate });
```

Two habits are on display here, and interviewers look for both: a **fixed golden set**, and **cost recorded alongside accuracy** — because a prompt that is 1% better and 4× more expensive is not better.

## 🧰 Tools on the CV

| Layer | Pick one |
|---|---|
| Language | TypeScript or Python |
| Model API | Anthropic SDK (`@anthropic-ai/sdk`, `anthropic`) |
| Backend | NestJS, FastAPI, or Express |
| Vector store | Postgres + pgvector, or Qdrant |
| Evaluation | Promptfoo, or your own harness |
| Tracing | Langfuse or OpenTelemetry |
| Deploy | Cloud Run, Fargate, Railway, or Vercel |

## 📁 Portfolio That Gets Replies

- Two deployed apps a stranger can use without you present.
- Published eval numbers before and after one change.
- A written post-mortem of a failure mode you fixed — hallucinated citation, prompt injection, cost spike.

## 🌍 Real-World Uses

- **Support triage** — classify, route, and draft replies with a human approving the send.
- **Internal document assistant** — RAG over policies, runbooks, and contracts with citations.
- **Data extraction pipelines** — invoices and resumes into typed rows via structured outputs.
- **Codegen guardrails** — a system prompt that encodes house style so generated code matches the repo.

## 🎯 Likely Interview Questions

1. **How do you know a prompt change improved things?** — Golden set, one variable at a time, accuracy *and* cost reported. "It felt better" fails this question.
2. **Your RAG answers are confidently wrong. Where do you look first?** — Retrieval before generation: is the right chunk even in context? Check hit rate, chunk size, hybrid search, reranking; then make refusal-on-missing-context explicit.
3. **RAG or fine-tuning?** — RAG for changing facts and citations; fine-tuning for fixed format, tone, or a narrow task. Start with RAG (chapter [84](../13-ai/08-rag-vs-finetuning.md)).
4. **How do you keep an LLM feature from tripling the bill?** — Cache the stable prefix, keep volatile content after the last breakpoint, cap output tokens, route easy traffic to a cheaper model, batch what is not interactive.
5. **A user pastes text that tells the model to ignore its instructions. What happens?** — Untrusted data stays tagged and quoted, authority lives in the system prompt, output is validated, and model output alone never triggers a privileged action.
6. **What do you do when the model returns malformed JSON?** — Use a JSON schema via structured outputs, validate server-side anyway, and treat a parse failure as a normal error path with a retry budget — not a crash.

---

[← How to Use These Roadmaps](01-how-to-use-these-roadmaps.md) | [Index](../README.md) | [Next: ML Engineer Roadmap →](03-ml-engineer.md)
