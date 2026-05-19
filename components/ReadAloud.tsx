"use client";

import { useEffect, useRef, useState } from "react";

type Status = "idle" | "playing" | "paused";

const getSynth = () =>
  typeof window !== "undefined" && "speechSynthesis" in window
    ? window.speechSynthesis
    : null;

// Extract readable text from the article, skipping code blocks.
function collectChunks(root: HTMLElement): string[] {
  const clone = root.cloneNode(true) as HTMLElement;
  clone.querySelectorAll("pre, .copy-btn").forEach((n) => n.remove());

  const out: string[] = [];
  clone.querySelectorAll("h1, h2, h3, h4, p, li, blockquote").forEach((el) => {
    const text = (el.textContent || "").replace(/\s+/g, " ").trim();
    if (text) out.push(text);
  });
  return out;
}

export default function ReadAloud() {
  const [status, setStatus] = useState<Status>("idle");
  const chunksRef = useRef<string[]>([]);
  const indexRef = useRef(0);

  useEffect(() => {
    return () => {
      getSynth()?.cancel();
    };
  }, []);

  const onPlay = () => {
    const synth = getSynth();
    if (!synth) return;
    if (status === "paused") {
      synth.resume();
      setStatus("playing");
      return;
    }
    const article = document.querySelector<HTMLElement>("article.md");
    if (!article) return;
    const chunks = collectChunks(article);
    if (chunks.length === 0) return;

    synth.cancel();
    chunksRef.current = chunks;
    indexRef.current = 0;
    setStatus("playing");

    const playFrom = (i: number) => {
      if (i >= chunks.length) {
        setStatus("idle");
        indexRef.current = 0;
        return;
      }
      const u = new SpeechSynthesisUtterance(chunks[i]);
      u.rate = 1;
      u.pitch = 1;
      u.onend = () => {
        indexRef.current = i + 1;
        playFrom(i + 1);
      };
      u.onerror = () => setStatus("idle");
      synth.speak(u);
    };
    playFrom(0);
  };

  const onPause = () => {
    const synth = getSynth();
    if (!synth || status !== "playing") return;
    synth.pause();
    setStatus("paused");
  };

  const onStop = () => {
    getSynth()?.cancel();
    chunksRef.current = [];
    indexRef.current = 0;
    setStatus("idle");
  };

  const isPlaying = status === "playing";
  const isPaused = status === "paused";

  return (
    <div className="read-aloud" role="toolbar" aria-label="Read aloud">
      <button
        type="button"
        className="icon-btn read-aloud-btn"
        onClick={onPlay}
        aria-label={isPaused ? "Resume reading" : "Read aloud"}
        disabled={isPlaying}
        title={isPaused ? "Resume" : "Read aloud"}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M8 5v14l11-7z" fill="currentColor" stroke="none" />
        </svg>
        <span className="read-aloud-label">
          {isPaused ? "Resume" : "Read"}
        </span>
      </button>
      <button
        type="button"
        className="icon-btn read-aloud-btn"
        onClick={onPause}
        aria-label="Pause reading"
        disabled={!isPlaying}
        title="Pause"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="6" y="5" width="4" height="14" fill="currentColor" stroke="none" />
          <rect x="14" y="5" width="4" height="14" fill="currentColor" stroke="none" />
        </svg>
      </button>
      <button
        type="button"
        className="icon-btn read-aloud-btn"
        onClick={onStop}
        aria-label="Stop reading"
        disabled={status === "idle"}
        title="Stop"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="6" y="6" width="12" height="12" fill="currentColor" stroke="none" />
        </svg>
      </button>
      {isPlaying && <span className="read-aloud-status">Reading…</span>}
      {isPaused && <span className="read-aloud-status">Paused</span>}
    </div>
  );
}
