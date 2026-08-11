# Chapter 77 — LLM Fundamentals

## 📖 Definition

A **Large Language Model (LLM)** is a transformer-based neural network trained to predict the next **token** given the tokens before it. Everything an LLM does — answering, coding, summarizing, calling tools — is that one operation applied repeatedly.

## 🔍 Explanation

Four concepts explain almost every LLM API behaviour you will be asked about:

| Concept | What it means | Why it matters in an interview |
|---|---|---|
| **Token** | A chunk of text (~4 chars in English, fewer for code/other languages) | You are billed per token, and limits are in tokens, not characters |
| **Context window** | Max tokens the model can see in one request (input + output) | Long chats must be trimmed, summarized, or compacted |
| **Input vs output tokens** | Prompt tokens vs generated tokens | Output tokens cost ~5× input tokens |
| **Statelessness** | The API remembers nothing between requests | Your server owns conversation history and resends it every turn |

### Current Claude models (as of mid-2026)

| Model | ID | Context | Input $/1M | Output $/1M |
|---|---|---|---|---|
| Claude Opus 5 | `claude-opus-5` | 1M | $5 | $25 |
| Claude Sonnet 5 | `claude-sonnet-5` | 1M | $3 | $15 |
| Claude Haiku 4.5 | `claude-haiku-4-5` | 200K | $1 | $5 |

Pick per route, not per project: Haiku for classification and routing, Sonnet for high-volume production, Opus for hard reasoning and agentic work.

### The three message roles

- **`system`** — instructions, persona, constraints. Stable text, so put it first (it caches well).
- **`user`** — the request, plus tool results you send back.
- **`assistant`** — what the model produced. You append it to history to keep the conversation coherent.

## 💻 Code Example — A Single Call (Node / TypeScript)

```ts
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic(); // reads ANTHROPIC_API_KEY from env

const message = await client.messages.create({
  model: "claude-opus-5",
  max_tokens: 16000,
  system: "You are a senior Node.js reviewer. Be specific and cite line numbers.",
  messages: [{ role: "user", content: "Why is this Express route leaking memory?" }],
});

// content is an ARRAY of blocks (text, thinking, tool_use...), not a string
for (const block of message.content) {
  if (block.type === "text") console.log(block.text);
}

console.log(message.usage);       // { input_tokens, output_tokens, cache_read_input_tokens, ... }
console.log(message.stop_reason); // "end_turn" | "max_tokens" | "tool_use" | "refusal" | ...
```

## 💻 Code Example — Multi-Turn Conversation (Server Owns State)

```ts
type Turn = { role: "user" | "assistant"; content: string };

class Chat {
  private history: Turn[] = [];

  constructor(private system: string) {}

  async send(userText: string) {
    this.history.push({ role: "user", content: userText });

    const res = await client.messages.create({
      model: "claude-opus-5",
      max_tokens: 16000,
      system: this.system,
      messages: this.history,          // full history resent EVERY call
    });

    const text = res.content.find((b) => b.type === "text")?.text ?? "";
    this.history.push({ role: "assistant", content: text });
    return text;
  }
}
```

Rules the API enforces: first message must be `user`, and history grows linearly — so token cost per turn grows linearly too. That growth is why prompt caching (Chapter 87) exists.

## 💻 Code Example — Count Tokens Before You Send

```ts
const { input_tokens } = await client.messages.countTokens({
  model: "claude-opus-5",
  messages: [{ role: "user", content: bigDocument }],
});

if (input_tokens > 800_000) throw new Error("Chunk this document first");
console.log(`Estimated input cost: $${(input_tokens * 5) / 1_000_000}`);
```

Never estimate Claude tokens with `tiktoken` — that is OpenAI's tokenizer and undercounts by 15–20% (much more on code).

## 💻 Code Example — Thinking and Effort

```ts
const res = await client.messages.create({
  model: "claude-opus-5",
  max_tokens: 32000,
  thinking: { type: "adaptive", display: "summarized" }, // model decides how much to think
  output_config: { effort: "high" },                     // low | medium | high | xhigh | max
  messages: [{ role: "user", content: "Design a rate limiter for 50k rps." }],
});
```

Two things trip people up on current models:

1. **`temperature`, `top_p`, `top_k` are rejected** on Opus 5 / Sonnet 5 and return `400`. Steer behaviour with the prompt, not sampling knobs.
2. **`max_tokens` caps thinking + response together.** A tight `max_tokens` on a thinking model truncates the answer.

## 🌍 Real-World Uses

- **Support triage** — Haiku classifies the ticket, Sonnet drafts the reply, human approves.
- **Code review bot** — diff in, structured findings out, posted as PR comments.
- **Internal search** — retrieval (Chapter 80) plus an LLM to answer over the retrieved chunks.
- **Data extraction** — unstructured invoices/emails to strict JSON (Chapter 78).

## 🎯 Likely Interview Questions

1. **What is a token, and why bill per token?** — Sub-word unit the model reads and emits; compute scales with token count.
2. **What is a context window and what happens when you exceed it?** — Hard input limit; the request errors or the response stops with a context-exceeded stop reason. Fix by trimming, summarizing, or retrieving instead of stuffing.
3. **The API is stateless — how do you build a chatbot?** — Persist history server-side (DB or cache) and resend it each turn, trimming or summarizing old turns.
4. **How do you pick a model?** — Cheapest model that passes your evals for that route; benchmark per route, not globally.
5. **Why do output tokens cost more than input tokens?** — Input is processed in one parallel forward pass; output is generated one token at a time, each requiring a full pass.
6. **What are the main `stop_reason` values you must handle?** — `end_turn`, `max_tokens` (raise the cap or stream), `tool_use` (execute the tool and loop), `refusal` (surface it; do not blindly retry).

---

[← Reference: Documents & Q&A](../10-appendix.md) | [Index](../README.md) | [Next: Prompt Engineering →](02-prompt-engineering.md)
