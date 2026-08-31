# Chapter 87 — Cost & Latency Optimization

## 📖 Definition

Optimizing an LLM feature means reducing **tokens sent**, **tokens generated**, **calls made**, and **time to first token** — without dropping below the quality bar your evals define.

## 🔍 Explanation

The levers, roughly in order of payoff:

| Lever | Typical win | Cost |
|---|---|---|
| **Prompt caching** | up to ~90% off the cached prefix | ordering discipline |
| **Model routing** | 3–5× on the routed traffic | a classifier + evals per route |
| **Batch API** | 50% off | results are async (up to 24h) |
| **Retrieval instead of stuffing** | large, and improves accuracy | retrieval infrastructure |
| **Effort tuning** | 20–60% on thinking tokens | per-route benchmarking |
| **Semantic cache** | 100% on repeat questions | staleness risk |
| **Streaming** | no cost win, big *perceived* latency win | SSE plumbing |

### Prompt caching is a prefix match

The cache key is the exact bytes of the prompt up to each `cache_control` breakpoint, rendered in the order `tools` → `system` → `messages`. **One changed byte anywhere in the prefix invalidates everything after it.** So: stable content first, volatile content last.

Silent cache killers to grep for:

- `new Date()` / `Date.now()` / a request id interpolated into the system prompt
- `JSON.stringify` over an object with non-deterministic key order, or a `Set`
- tools built per user (`tools` render at position 0 — a per-user tool list caches for nobody)
- switching model mid-conversation (caches are per-model)
- conditional system sections (every flag combination is a distinct prefix)

Economics: cache reads cost ~0.1× input, writes cost 1.25× (5-minute TTL) or 2× (1-hour TTL). With the 5-minute TTL you break even on the second request. Minimum cacheable prefix is model-dependent (512 tokens on Claude Opus 5, higher on some older models) — below that, nothing caches and you get no error.

Verify with `usage.cache_read_input_tokens`. If it is zero across identical-prefix requests, you have an invalidator. Note that `input_tokens` reports only the *uncached remainder*: total prompt size is `input_tokens + cache_creation_input_tokens + cache_read_input_tokens`.

### Latency has three parts

1. **Time to first token** — dominated by input size and thinking. Cut with caching, smaller prompts, lower effort.
2. **Generation time** — proportional to output tokens. Cut by asking for less output (schemas, "no preamble").
3. **Round trips** — an agent doing 6 sequential tool calls costs 6 latencies. Batch independent calls in parallel.

## 💻 Code Example — Cacheable Prompt Layout

```ts
const res = await client.messages.create({
  model: "claude-opus-5",
  max_tokens: 4000,
  system: [
    { type: "text", text: STABLE_INSTRUCTIONS },                  // never changes
    { type: "text", text: PRODUCT_DOCS, cache_control: { type: "ephemeral" } }, // breakpoint
  ],
  messages: [
    ...history,
    { role: "user", content: question },                          // volatile, AFTER the breakpoint
  ],
});

console.log(res.usage.cache_read_input_tokens);  // > 0 means the cache hit
```

```ts
// ANTI-PATTERN — the timestamp sits at the front of the prefix,
// so nothing downstream of it will ever cache.
system: `You are a support agent. Current time: ${new Date().toISOString()}\n\n${PRODUCT_DOCS}`;

// FIX — move volatile facts into the message turn, after the cache breakpoint.
messages: [{ role: "user", content: `Current time: ${now}\n\n${question}` }];
```

## 💻 Code Example — Multi-Turn Caching

```ts
// Put the breakpoint on the last block of the newest turn: each request reuses
// the whole prior conversation. Max 4 breakpoints per request.
function withCache(messages: any[]) {
  const out = structuredClone(messages);
  const last = out[out.length - 1];
  const blocks = Array.isArray(last.content)
    ? last.content
    : (last.content = [{ type: "text", text: last.content }]);
  blocks[blocks.length - 1].cache_control = { type: "ephemeral" };
  return out;
}
```

## 💻 Code Example — Model Routing

```ts
const COMPLEXITY = {
  type: "object",
  properties: { tier: { type: "string", enum: ["simple", "standard", "hard"] } },
  required: ["tier"],
  additionalProperties: false,
} as const;

async function route(task: string) {
  const { tier } = JSON.parse(textOf(await client.messages.create({
    model: "claude-haiku-4-5",                    // classification costs ~nothing
    max_tokens: 50,
    output_config: { format: { type: "json_schema", schema: COMPLEXITY } },
    messages: [{ role: "user", content: task }],
  })));

  return {
    simple:   { model: "claude-haiku-4-5",  effort: "low"    },
    standard: { model: "claude-sonnet-5",   effort: "medium" },
    hard:     { model: "claude-opus-5",     effort: "high"   },
  }[tier];
}
```

Route on measured evals per tier, not on intuition — and never downgrade a route silently to save money.

## 💻 Code Example — Batch API for Non-Urgent Work

```ts
// 50% cheaper; results within an hour typically, 24h ceiling.
const batch = await client.messages.batches.create({
  requests: rows.map((row) => ({
    custom_id: `row-${row.id}`,                   // results come back UNORDERED
    params: {
      model: "claude-haiku-4-5",
      max_tokens: 512,
      system: [{ type: "text", text: SHARED_PROMPT, cache_control: { type: "ephemeral" } }],
      messages: [{ role: "user", content: row.text }],
    },
  })),
});

// poll processing_status until "ended", then stream results and key by custom_id
for await (const r of client.messages.batches.results(batch.id)) {
  if (r.result.type === "succeeded") await save(r.custom_id, r.result.message);
}
```

## 💻 Code Example — Semantic Cache

```ts
// Exact-match cache first (free), then a similarity cache for paraphrases.
async function cachedAnswer(question: string, tenantId: string) {
  const exact = await redis.get(key(tenantId, question));
  if (exact) return JSON.parse(exact);

  const [qv] = await embed([question]);
  const near = await findSimilarQuestion(qv, tenantId, 0.95);   // tight threshold
  if (near) return near.answer;

  const answer = await generate(question, tenantId);
  await redis.set(key(tenantId, question), JSON.stringify(answer), "EX", 3600);
  await storeQuestionVector(qv, answer, tenantId);
  return answer;
}
```

Tenant must be part of every cache key, and the similarity threshold must be tight — a loose cache answers the wrong question confidently.

## 💻 Code Example — Cutting Output Tokens

```ts
// Output is ~5x the price of input. Shorter output is the cheapest optimization.
const res = await client.messages.create({
  model: "claude-sonnet-5",
  max_tokens: 800,                                  // bounded
  output_config: { format: { type: "json_schema", schema: RESULT_SCHEMA } }, // no prose padding
  system: "Respond with the result only. No preamble, no restatement of the question.",
  messages: [{ role: "user", content: task }],
});
```

## 💻 Code Example — Per-Route Spend Accounting

```ts
const PRICE = {                                    // $ per 1M tokens
  "claude-opus-5":   { in: 5, out: 25 },
  "claude-sonnet-5": { in: 3, out: 15 },
  "claude-haiku-4-5":{ in: 1, out: 5 },
} as const;

function costCents(model: keyof typeof PRICE, u: any) {
  const p = PRICE[model];
  const uncachedIn = u.input_tokens + (u.cache_creation_input_tokens ?? 0) * 1.25;
  const cachedIn = (u.cache_read_input_tokens ?? 0) * 0.1;
  return ((uncachedIn + cachedIn) * p.in + u.output_tokens * p.out) / 10_000;
}

metrics.increment("ai.cost_cents", costCents(model, res.usage), { route, promptVersion });
```

Without per-route attribution you cannot tell which feature is burning the budget, and every optimization is guesswork.

## 🌍 Real-World Uses

- **Chat with a large system prompt** — cache the prefix; per-turn cost collapses to the new turn.
- **Bulk classification / backfill** — Batch API plus Haiku plus a cached shared prompt.
- **Support autocomplete** — semantic cache absorbs the long tail of repeated questions.
- **Agent loops** — cache the tool definitions and system prompt; parallelize independent tool calls.

## 🎯 Likely Interview Questions

1. **How does prompt caching work, and how do you break it?** — Prefix match on exact bytes in `tools` → `system` → `messages` order; any earlier byte change invalidates the rest. Timestamps, per-user tool lists, and non-deterministic JSON are the usual culprits.
2. **Where do you put the cache breakpoint in a chat app?** — On the last block of the newest turn, so each request reuses the whole prior conversation; keep the system prompt frozen.
3. **How do you cut cost without hurting quality?** — Route by difficulty behind evals, cache aggressively, retrieve instead of stuffing context, cap and shorten output, batch anything not user-facing.
4. **When is the Batch API the right call?** — Backfills, evals, nightly enrichment — anything where a delay of minutes to hours is acceptable, for half the price.
5. **Why is output more expensive than input, and what follows from that?** — Output is generated serially; so bounded `max_tokens`, schemas, and "no preamble" instructions are the highest-leverage cost cuts.
6. **How do you reduce time to first token?** — Cache the prefix, shrink the input, lower `effort`, and stream so the user sees output while generation continues.
7. **Ten thousand requests share the same 50K-token prefix, fired in parallel. What happens?** — All of them miss: a cache entry is only readable once the first response begins streaming. Fire one, wait for its first token, then fan out.

---

[← AI Security](10-ai-security.md) | [Index](../README.md) | [Next: How to Use These Roadmaps →](../14-roadmaps/01-how-to-use-these-roadmaps.md)
