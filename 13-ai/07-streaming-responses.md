# Chapter 83 — Streaming Responses

## 📖 Definition

**Streaming** delivers the model's output token-by-token as it is generated, using Server-Sent Events (SSE), instead of waiting for the whole response. It cuts perceived latency from "seconds of nothing" to "text appearing immediately".

## 🔍 Explanation

Streaming is not only a UX nicety — it is a correctness requirement. Non-streaming requests with a large `max_tokens` hit HTTP timeouts, and the SDK will refuse requests it estimates cannot finish in time. Rule of thumb: stream anything above roughly 16K output tokens.

**Event sequence per response:**

| Event | Meaning |
|---|---|
| `message_start` | metadata, initial usage |
| `content_block_start` | a new block begins (`text`, `thinking`, `tool_use`) |
| `content_block_delta` | incremental chunk (`text_delta`, `thinking_delta`, `input_json_delta`) |
| `content_block_stop` | block finished |
| `message_delta` | `stop_reason` and final usage |
| `message_stop` | done |

**Transport choice for the browser:**

| Option | Use when |
|---|---|
| **SSE** (`text/event-stream`) | One-way server→client token stream. The default choice. |
| **WebSocket** | You need bidirectional traffic (voice, live interrupts, collaboration). |
| **Fetch + ReadableStream** | You need POST semantics; `EventSource` only does GET. |

**Things that break streaming in production:**

- **Buffering proxies.** Nginx must have `proxy_buffering off` on the route, and you should send `X-Accel-Buffering: no`.
- **Client disconnects.** Abort the upstream call on `req.on("close")`, or you keep paying for tokens nobody reads.
- **Partial responses.** A dropped stream leaves half an answer — persist incrementally and mark the row complete only at `message_stop`.
- **Errors mid-stream.** Headers are already sent, so you cannot change the status code. Emit an `error` event in the stream instead.

## 💻 Code Example — Express SSE Endpoint

```ts
app.post("/api/chat", async (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache, no-transform");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("X-Accel-Buffering", "no");   // stop nginx buffering
  res.flushHeaders();

  const controller = new AbortController();
  req.on("close", () => controller.abort());  // stop billing when the tab closes

  const send = (event: string, data: unknown) =>
    res.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`);

  const heartbeat = setInterval(() => res.write(": ping\n\n"), 15_000);

  try {
    const stream = client.messages.stream(
      {
        model: "claude-opus-5",
        max_tokens: 64000,
        messages: req.body.messages,
      },
      { signal: controller.signal },
    );

    for await (const event of stream) {
      if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
        send("token", { text: event.delta.text });
      }
    }

    const final = await stream.finalMessage();  // full message, usage, stop_reason
    await saveAssistantTurn(final);
    send("done", { usage: final.usage, stop_reason: final.stop_reason });
  } catch (err: any) {
    if (err.name !== "AbortError") send("error", { message: "Generation failed" });
  } finally {
    clearInterval(heartbeat);
    res.end();
  }
});
```

## 💻 Code Example — React Client (Fetch + ReadableStream)

```tsx
function useChatStream() {
  const [text, setText] = useState("");
  const [streaming, setStreaming] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  const send = useCallback(async (messages: Turn[]) => {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setText("");
    setStreaming(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages }),
      signal: controller.signal,
    });

    const reader = res.body!.pipeThrough(new TextDecoderStream()).getReader();
    let buffer = "";

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      buffer += value;
      const frames = buffer.split("\n\n");
      buffer = frames.pop() ?? "";              // keep the incomplete frame

      for (const frame of frames) {
        const event = frame.match(/^event: (.*)$/m)?.[1];
        const data = frame.match(/^data: (.*)$/m)?.[1];
        if (!data) continue;                    // comment/heartbeat line

        if (event === "token") setText((t) => t + JSON.parse(data).text);
        if (event === "error") setText((t) => t + "\n[stream failed]");
      }
    }

    setStreaming(false);
  }, []);

  return { text, streaming, send, stop: () => abortRef.current?.abort() };
}
```

Splitting on `\n\n` and keeping the remainder is the part people get wrong: a chunk boundary can land in the middle of an SSE frame.

## 💻 Code Example — Next.js Route Handler (Web Streams)

```ts
// app/api/chat/route.ts
export const runtime = "nodejs";

export async function POST(req: Request) {
  const { messages } = await req.json();
  const encoder = new TextEncoder();

  const body = new ReadableStream({
    async start(controller) {
      const stream = client.messages.stream({
        model: "claude-sonnet-5",
        max_tokens: 32000,
        messages,
      });

      for await (const event of stream) {
        if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(event.delta.text)}\n\n`));
        }
      }
      controller.close();
    },
    cancel() {
      /* client disconnected — the stream is GC'd; abort upstream work here too */
    },
  });

  return new Response(body, {
    headers: { "Content-Type": "text/event-stream", "Cache-Control": "no-cache, no-transform" },
  });
}
```

## 💻 Code Example — Streaming with Thinking Blocks

```ts
for await (const event of stream) {
  if (event.type === "content_block_start") {
    if (event.content_block.type === "thinking") send("phase", { phase: "thinking" });
    if (event.content_block.type === "text") send("phase", { phase: "answer" });
  }
  if (event.type === "content_block_delta") {
    if (event.delta.type === "thinking_delta") send("thinking", { text: event.delta.thinking });
    if (event.delta.type === "text_delta") send("token", { text: event.delta.text });
  }
}
```

On current models `thinking.display` defaults to `"omitted"`, so thinking blocks stream with empty text — which looks like a long stall before the answer. Pass `display: "summarized"` when you show reasoning progress in the UI.

## 🌍 Real-World Uses

- **Chat UIs** — the baseline expectation; non-streaming chat feels broken.
- **Long generation** — reports, migrations, and code output above ~16K tokens *must* stream.
- **Agent progress feeds** — surface tool calls and interim updates as they happen.
- **Voice assistants** — pipe text deltas into TTS sentence by sentence.

## 🎯 Likely Interview Questions

1. **Why stream at all?** — Perceived latency, and it avoids HTTP timeouts on large outputs.
2. **SSE vs WebSocket?** — SSE for one-way token streams (simpler, auto-reconnect, plain HTTP); WebSocket when the client must also push mid-generation.
3. **Why not `EventSource` in the browser?** — It is GET-only with no custom headers; use `fetch` with a `ReadableStream` to POST the conversation.
4. **The stream works locally but arrives all at once in production. Why?** — A buffering reverse proxy or CDN. Disable buffering on that route and send `no-transform`.
5. **How do you handle a client disconnect?** — Listen for `close`, abort the upstream request via `AbortController`; otherwise you keep generating and paying.
6. **How do you report an error after streaming has begun?** — You cannot change the status code; emit an in-stream `error` event and have the client render a failure state.
7. **How do you save the assistant message when streaming?** — Accumulate deltas, or call `stream.finalMessage()` at the end, and only then mark the record complete; write partials as incomplete so a dropped connection is recoverable.

---

[← AI Agents & MCP](06-ai-agents.md) | [Index](../README.md) | [Next: RAG vs Fine-Tuning →](08-rag-vs-finetuning.md)
