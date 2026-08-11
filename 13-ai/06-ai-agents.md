# Chapter 82 — AI Agents & MCP

## 📖 Definition

An **agent** is an LLM running in a loop with tools, deciding its own next step until a goal is met. A **workflow** is the opposite: *you* decide the steps in code and the model fills in specific slots.

## 🔍 Explanation

Reach for the simplest tier that solves the problem:

| Tier | Shape | Use when |
|---|---|---|
| **Single call** | one request, one response | classify, summarize, extract, answer |
| **Workflow** | your code orchestrates several calls and tools | the steps are known in advance |
| **Agent** | the model chooses the steps and tools | the path cannot be specified up front |

**Before building an agent, check four things:** the task is genuinely open-ended; the outcome justifies higher cost and latency; the model is actually capable at it; and errors are recoverable (tests, review, rollback). If any answer is no, drop a tier. Most "agent" projects that fail should have been workflows.

### Common workflow patterns (all deterministic, all cheaper than an agent)

- **Chaining** — output of step N is input to step N+1 (outline → draft → edit).
- **Routing** — a cheap classifier picks the specialist prompt or model.
- **Parallelization** — fan out independent subtasks, then merge.
- **Evaluator–optimizer** — generate, critique with a second call, revise (Chapter 85).

### Designing an agent's tool surface

Start with broad tools (`bash`, `read`, `write`) for reach, then **promote an action to a dedicated tool** when you need to gate it, render it in UI, audit it, or parallelize it safely. Your harness cannot approve `bash -c "curl -X POST ..."` intelligently; it can approve `send_email({ to, subject })`.

### Context management over long runs

Long agent runs die of context exhaustion. Three tools:

- **Context editing** — clear stale tool results and thinking blocks (prune).
- **Compaction** — summarize earlier turns server-side when nearing the window (summarize).
- **Memory** — write learnings to files so they survive across sessions.

### MCP (Model Context Protocol)

MCP is an open protocol that standardizes how models connect to tools and data sources. Instead of writing a bespoke integration per client, you expose a server once (GitHub, Linear, your internal API) and any MCP-aware client can use it. It matters in interviews as the answer to "how do you avoid rewriting the same integration for every AI product?"

## 💻 Code Example — A Workflow (Not an Agent)

```ts
// Router: cheap model picks a lane, expensive model does the work
const ROUTE = {
  type: "object",
  properties: { lane: { type: "string", enum: ["billing", "technical", "sales"] } },
  required: ["lane"],
  additionalProperties: false,
} as const;

async function handleTicket(ticket: string) {
  const routed = await client.messages.create({
    model: "claude-haiku-4-5",
    max_tokens: 100,
    output_config: { format: { type: "json_schema", schema: ROUTE } },
    messages: [{ role: "user", content: ticket }],
  });

  const { lane } = JSON.parse(textOf(routed));

  return client.messages.create({
    model: lane === "technical" ? "claude-opus-5" : "claude-sonnet-5",
    max_tokens: 4000,
    system: PROMPTS[lane],
    messages: [{ role: "user", content: ticket }],
  });
}
```

## 💻 Code Example — A Bounded Agent Loop

```ts
type Budget = { maxTurns: number; maxToolCalls: number; deadlineMs: number };

async function agent(goal: string, budget: Budget) {
  const started = Date.now();
  const messages: any[] = [{ role: "user", content: goal }];
  let toolCalls = 0;

  for (let turn = 0; turn < budget.maxTurns; turn++) {
    if (Date.now() - started > budget.deadlineMs) return stop("deadline");
    if (toolCalls >= budget.maxToolCalls) return stop("tool budget");

    const res = await client.messages.create({
      model: "claude-opus-5",
      max_tokens: 32000,
      thinking: { type: "adaptive" },
      output_config: { effort: "high" },
      system: AGENT_SYSTEM,
      tools,
      messages,
    });

    if (res.stop_reason === "refusal") return stop("refused");
    if (res.stop_reason === "end_turn") return textOf(res);

    messages.push({ role: "assistant", content: res.content });

    const calls = res.content.filter((b: any) => b.type === "tool_use");
    toolCalls += calls.length;

    const results = await Promise.all(calls.map((c: any) => runTool(c)));
    messages.push({ role: "user", content: results });
  }

  return stop("turn limit");
}
```

Every production agent needs all four bounds: turns, tool calls, wall-clock deadline, and token spend.

## 💻 Code Example — Delegating to Subagents

```ts
// Fan out independent, read-heavy subtasks; keep synthesis in the main loop
async function research(question: string, subQuestions: string[]) {
  const findings = await Promise.all(
    subQuestions.map((q) =>
      client.messages.create({
        model: "claude-haiku-4-5",           // cheap model does the reading
        max_tokens: 4000,
        tools: [{ type: "web_search_20260209", name: "web_search" }],
        system: "Answer only the question given. Report findings with a source URL per claim.",
        messages: [{ role: "user", content: q }],
      }).then(textOf),
    ),
  );

  return client.messages.create({          // expensive model synthesizes
    model: "claude-opus-5",
    max_tokens: 8000,
    system: "Synthesize the findings. Flag contradictions. Keep every source attribution.",
    messages: [{ role: "user", content: `Question: ${question}\n\n${findings.join("\n\n---\n\n")}` }],
  });
}
```

Subagents keep the coordinator's context small — each one reads a lot and reports a little. But each one also re-establishes context, so delegate only when the subtask is genuinely independent and sizeable.

## 💻 Code Example — Compaction for Long Conversations

```ts
const res = await client.beta.messages.create({
  betas: ["compact-2026-01-12"],
  model: "claude-opus-5",
  max_tokens: 16000,
  messages,
  context_management: { edits: [{ type: "compact_20260112" }] },
});

// CRITICAL: append the full content array — compaction blocks must be preserved,
// or the next request loses the compacted history.
messages.push({ role: "assistant", content: res.content });
```

## 💻 Code Example — Connecting an MCP Server

```ts
const res = await client.beta.messages.create({
  betas: ["mcp-client-2025-11-20"],
  model: "claude-opus-5",
  max_tokens: 8000,
  mcp_servers: [{ type: "url", name: "linear", url: "https://mcp.linear.app/mcp" }],
  tools: [{ type: "mcp_toolset", mcp_server_name: "linear" }],  // both halves required
  messages: [{ role: "user", content: "What issues are assigned to me this sprint?" }],
});
```

## 🌍 Real-World Uses

- **Coding agents** — read the repo, edit files, run tests, open a PR.
- **Research assistants** — parallel search subagents plus a synthesis pass.
- **Ops runbooks** — inspect metrics, correlate logs, propose (not apply) a remediation.
- **Data pipelines with a judgment step** — deterministic code everywhere, one model call where the rule cannot be written.

## 🎯 Likely Interview Questions

1. **Agent vs workflow — when do you pick which?** — Workflow when the steps are knowable; agent only when they are not. Workflows are cheaper, faster, testable, and debuggable.
2. **How do you stop an agent from running away?** — Bound turns, tool calls, wall-clock time, and tokens; make write tools idempotent; require approval for destructive actions.
3. **How do you handle context growth in a long-running agent?** — Prune stale tool results (context editing), summarize when near the limit (compaction), and persist durable state to memory files or a DB.
4. **How would you debug an agent that gives a different answer every run?** — Log every request, tool call, and result with a trace ID; replay traces; then reduce nondeterminism by narrowing tools and tightening the system prompt.
5. **What is MCP and why does it matter?** — An open protocol for exposing tools and data to models; write the integration once, reuse it across every MCP-aware client instead of per-product glue.
6. **How do you decide what becomes a dedicated tool versus a bash command?** — Promote when you need to gate, render, audit, or parallelize the action; a typed tool gives your harness a hook that an opaque command string does not.
7. **How do you evaluate an agent?** — End-to-end task success rate on a fixed scenario suite, plus per-step metrics: correct tool chosen, arguments valid, recovery after an error.

---

[← Tool / Function Calling](05-tool-calling.md) | [Index](../README.md) | [Next: Streaming Responses →](07-streaming-responses.md)
