# Chapter 81 — Tool / Function Calling

## 📖 Definition

**Tool calling** (function calling) lets the model request that *your* code run a named function with structured arguments. The model never executes anything — it emits a `tool_use` block, you run the function, and you send the result back as a `tool_result`.

## 🔍 Explanation

This is how an LLM stops being a text generator and becomes an application: it can read your database, hit your APIs, do arithmetic in real code, and act on the world — under your control.

**The loop:**

```
you: messages + tools
model: stop_reason "tool_use"  → tool_use block { id, name, input }
you: execute → append assistant message → append user message with tool_result (matching tool_use_id)
repeat until stop_reason === "end_turn"
```

**Non-negotiable mechanics:**

- Append the **entire** `response.content` to history — dropping the `tool_use` block breaks the pairing.
- Every `tool_result` must carry the matching `tool_use_id`.
- **Parallel calls:** one assistant turn may contain several `tool_use` blocks. Execute them concurrently and return **all** results in a *single* user message. Splitting them across messages teaches the model to stop calling tools in parallel.
- A failed tool returns `tool_result` with `is_error: true` — never drop it.

**Tool description quality is the main lever on tool performance.** The most common defect is under-description, not over-description. Say what the tool does, *when to call it*, what each parameter means, and what it does not return. Three to four sentences minimum.

**`tool_choice`** controls invocation: `auto` (default), `any` (must use some tool), `{ type: "tool", name }` (must use this one), `none`.

**Server-side tools** need no execution loop at all — declare `web_search`, `web_fetch`, or `code_execution` and Anthropic runs them, returning results as content blocks in the same response.

## 💻 Code Example — Tool Definitions

```ts
const tools = [
  {
    name: "get_order",
    description:
      "Fetch a single order by its ID. Call this whenever the user references an order " +
      "number or asks about the status, items, or shipping of a specific order. " +
      "Returns status, line items, totals and tracking number. Does NOT return refunds — " +
      "use get_refunds for that.",
    input_schema: {
      type: "object",
      properties: {
        order_id: { type: "string", description: "Order ID, e.g. ORD-10023" },
      },
      required: ["order_id"],
      additionalProperties: false,
    },
    strict: true,   // guarantees input validates against the schema
  },
  {
    name: "issue_refund",
    description:
      "Issue a refund against an order. Only call after the user has explicitly confirmed " +
      "the amount. Amounts are in minor units (cents).",
    input_schema: {
      type: "object",
      properties: {
        order_id: { type: "string" },
        amount_cents: { type: "integer" },
        reason: { type: "string", enum: ["damaged", "late", "wrong_item", "other"] },
      },
      required: ["order_id", "amount_cents", "reason"],
      additionalProperties: false,
    },
    strict: true,
  },
];
```

## 💻 Code Example — The Agentic Loop (Manual, with Parallel Execution)

```ts
const handlers: Record<string, (input: any) => Promise<unknown>> = {
  get_order: ({ order_id }) => db.orders.findById(order_id),
  issue_refund: (input) => payments.refund(input),
};

async function run(userText: string) {
  const messages: any[] = [{ role: "user", content: userText }];

  for (let turn = 0; turn < 10; turn++) {          // always bound the loop
    const res = await client.messages.create({
      model: "claude-opus-5",
      max_tokens: 8000,
      tools,
      messages,
    });

    if (res.stop_reason === "end_turn") return textOf(res);

    messages.push({ role: "assistant", content: res.content }); // FULL content

    const calls = res.content.filter((b: any) => b.type === "tool_use");

    const results = await Promise.all(
      calls.map(async (call: any) => {
        try {
          const output = await handlers[call.name](call.input);
          return {
            type: "tool_result",
            tool_use_id: call.id,
            content: JSON.stringify(output),
          };
        } catch (err: any) {
          return {
            type: "tool_result",
            tool_use_id: call.id,
            content: `Error: ${err.message}`,
            is_error: true,                        // return it, don't swallow it
          };
        }
      }),
    );

    messages.push({ role: "user", content: results }); // ALL results, one message
  }

  throw new Error("Tool loop did not converge");
}
```

## 💻 Code Example — Human Approval Before a Destructive Tool

```ts
const NEEDS_APPROVAL = new Set(["issue_refund", "delete_account", "send_email"]);

async function execute(call: { name: string; input: any }, ctx: RequestCtx) {
  if (NEEDS_APPROVAL.has(call.name)) {
    const approved = await ctx.askUser(call.name, call.input);   // blocks on real UI
    if (!approved) return "User declined this action.";          // fed back as a normal result
  }
  return handlers[call.name](call.input);
}
```

The model asking for a refund is a *request*, not an authorization. Authorization, rate limits, and ownership checks live in your handler — always.

## 💻 Code Example — Let the SDK Drive the Loop

```ts
import { betaZodTool } from "@anthropic-ai/sdk/helpers/beta/zod";
import { z } from "zod";

const getOrder = betaZodTool({
  name: "get_order",
  description: "Fetch an order by ID. Call when the user mentions an order number...",
  inputSchema: z.object({ order_id: z.string() }),
  run: async ({ order_id }) => JSON.stringify(await db.orders.findById(order_id)),
});

const runner = client.beta.messages.toolRunner({
  model: "claude-opus-5",
  max_tokens: 8000,
  tools: [getOrder],
  messages: [{ role: "user", content: "Where is ORD-10023?" }],
});

const final = await runner;   // executes tools and loops until done
```

The runner still gives you per-turn hooks for approval gates and result inspection, so "I need control" is rarely a reason to hand-write the loop.

## 💻 Code Example — Server-Side Tools (No Handler Needed)

```ts
const res = await client.messages.create({
  model: "claude-opus-5",
  max_tokens: 4000,
  tools: [
    { type: "web_search_20260209", name: "web_search" },
    { type: "web_fetch_20260209", name: "web_fetch" },
  ],
  messages: [{ role: "user", content: "Summarize this week's Node.js security releases." }],
});
// Results arrive as web_search_tool_result blocks in the same response.
// Server-tool errors come back as HTTP 200 with an error object in `content` — not a thrown exception.
```

Long server-tool turns can stop with `stop_reason: "pause_turn"` — resend the conversation to resume, and cap the number of continuations.

## 🌍 Real-World Uses

- **Support agent** — looks up orders, checks stock, drafts a refund for human approval.
- **Internal ops copilot** — "how many signups yesterday?" becomes a parameterized SQL call, not free-form SQL.
- **Deployment assistant** — reads CI status, tails logs, opens a rollback PR.
- **Booking flows** — availability lookup, hold, confirm, each as a separate audited tool.

## 🎯 Likely Interview Questions

1. **Who executes the function?** — Your code. The model only emits a structured request; nothing runs until you run it.
2. **How do you handle multiple tool calls in one response?** — Execute concurrently, return every `tool_result` in one user message, keyed by `tool_use_id`.
3. **What if a tool throws?** — Return a `tool_result` with `is_error: true` and a useful message so the model can recover or ask the user.
4. **How do you keep an agent from looping forever?** — Hard iteration cap, per-tool call budget, timeouts, and idempotency keys on write tools.
5. **How do you secure tool calling?** — Treat every call as untrusted input: validate arguments, enforce authorization in the handler against the real session, gate destructive actions behind human approval, and log every invocation.
6. **Why does tool description quality matter so much?** — It is the model's only spec. Vague descriptions and missing parameter docs cause wrong-tool selection that no amount of system-prompt text fixes.
7. **When would you use a server-side tool instead of your own?** — When the capability is generic (web search, sandboxed code execution) and you do not want to build or host the execution environment.

---

[← RAG Pipeline](04-rag.md) | [Index](../README.md) | [Next: AI Agents & MCP →](06-ai-agents.md)
