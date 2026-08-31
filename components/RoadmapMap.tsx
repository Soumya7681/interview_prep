"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { RoadmapNode, RoadmapStage, RoadmapTrack } from "@/lib/roadmaps";
import {
  setRoadmapNodes,
  toggleRoadmapNode,
  useRoadmapProgress,
} from "@/lib/progress";

/**
 * The roadmap.sh-style map for one track: a vertical spine of stages, with
 * nodes branching left and right off it. Clicking a node opens the detail
 * panel; the checkbox marks it studied (persisted in localStorage).
 *
 * Progress is derived, never stored per track — the single node-id set in
 * localStorage is the source of truth, so the index cards and this page can
 * never disagree.
 */
export default function RoadmapMap({ track }: { track: RoadmapTrack }) {
  const done = useRoadmapProgress();
  const [openNodeId, setOpenNodeId] = useState<string | null>(null);

  const allIds = useMemo(
    () => track.stages.flatMap((s) => s.nodes.map((n) => n.id)),
    [track],
  );
  const doneCount = allIds.filter((id) => done.has(id)).length;
  const pct = allIds.length ? Math.round((doneCount / allIds.length) * 100) : 0;

  // Plain lookup rather than a memo: the search is over a few dozen nodes and
  // only matters while the panel is open.
  const openNode = findNode(track, openNodeId);

  const close = useCallback(() => setOpenNodeId(null), []);

  // Escape closes the detail panel — it behaves as a dialog on mobile.
  useEffect(() => {
    if (!openNodeId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openNodeId, close]);

  return (
    <div className="rm">
      <header className="rm-head">
        <div className="rm-head-main">
          <span className="rm-mark" aria-hidden>
            {track.mark}
          </span>
          <div>
            <h1 className="rm-title">{track.title}</h1>
            <p className="rm-tagline">{track.tagline}</p>
          </div>
        </div>

        <dl className="rm-facts">
          <div>
            <dt>Time to job-ready</dt>
            <dd>{track.timeline}</dd>
          </div>
          <div>
            <dt>Entry bar</dt>
            <dd>{track.entryBar}</dd>
          </div>
          <div>
            <dt>Stages</dt>
            <dd>
              {track.stages.length} · {allIds.length} topics
            </dd>
          </div>
        </dl>

        <div className="rm-progress">
          <div className="rm-progress-row">
            <span>
              <strong>{doneCount}</strong> of {allIds.length} topics marked studied
            </span>
            <span className="rm-progress-pct">{pct}%</span>
          </div>
          <div
            className="pbar pbar-lg"
            role="progressbar"
            aria-valuenow={pct}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${track.title} progress`}
          >
            <div className="pbar-fill" style={{ width: `${pct}%` }} />
          </div>
        </div>

        <p className="rm-market">{track.market}</p>

        <div className="rm-head-links">
          <Link href={track.chapter.href} className="np-btn rm-btn">
            Read the full guide →
          </Link>
          <Link href="/roadmaps" className="rm-link-quiet">
            All roadmaps
          </Link>
        </div>
      </header>

      <section className="rm-prereq" aria-labelledby="rm-prereq-title">
        <h2 id="rm-prereq-title" className="rm-section-title">
          Before stage 1
        </h2>
        <ul className="rm-chiplist">
          {track.prerequisites.map((p) => (
            <li key={p} className="rm-chip">
              {p}
            </li>
          ))}
        </ul>
      </section>

      {/* ============ The map ============ */}
      <div className="rm-map">
        {track.stages.map((stage, stageIndex) => (
          <StageBlock
            key={stage.id}
            stage={stage}
            index={stageIndex}
            done={done}
            activeId={openNodeId}
            onOpen={setOpenNodeId}
          />
        ))}
        <div className="rm-spine-end" aria-hidden>
          ▼
        </div>
      </div>

      <section className="rm-after" aria-labelledby="rm-after-title">
        <h2 id="rm-after-title" className="rm-section-title">
          Tools on the CV
        </h2>
        <ul className="rm-chiplist">
          {track.tools.map((t) => (
            <li key={t} className="rm-chip rm-chip-mono">
              {t}
            </li>
          ))}
        </ul>

        <h2 className="rm-section-title rm-section-title-spaced">
          What employers ask to see
        </h2>
        <ul className="rm-proof">
          {track.proofOfWork.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>

        <p className="rm-updated">
          Content last reviewed {track.updated}. Guidance only — no institute or paid placement
          is endorsed anywhere in this book.
        </p>
      </section>

      {openNode && (
        <NodeDetail
          node={openNode.node}
          stage={openNode.stage}
          done={done.has(openNode.node.id)}
          onClose={close}
        />
      )}
    </div>
  );
}

/** Locate a node and its stage by id, or null when nothing is open. */
function findNode(track: RoadmapTrack, nodeId: string | null) {
  if (!nodeId) return null;
  for (const stage of track.stages) {
    const node = stage.nodes.find((n) => n.id === nodeId);
    if (node) return { node, stage };
  }
  return null;
}

function StageBlock({
  stage,
  index,
  done,
  activeId,
  onOpen,
}: {
  stage: RoadmapStage;
  index: number;
  done: ReadonlySet<string>;
  activeId: string | null;
  onOpen: (id: string) => void;
}) {
  const ids = stage.nodes.map((n) => n.id);
  const doneCount = ids.filter((id) => done.has(id)).length;
  const complete = doneCount === ids.length;

  return (
    <section className="rm-stage" aria-labelledby={`${stage.id}-title`}>
      <div className="rm-stage-head">
        <span className={`rm-stage-num${complete ? " is-complete" : ""}`} aria-hidden>
          {complete ? "✓" : index + 1}
        </span>
        <div className="rm-stage-headtext">
          <h2 id={`${stage.id}-title`} className="rm-stage-title">
            {stage.title}
          </h2>
          <p className="rm-stage-meta">
            {stage.duration} · {doneCount}/{ids.length} topics
          </p>
          <p className="rm-stage-goal">{stage.goal}</p>
        </div>
        <button
          type="button"
          className="rm-stage-bulk"
          onClick={() => setRoadmapNodes(ids, !complete)}
        >
          {complete ? "Untick stage" : "Tick all"}
        </button>
      </div>

      <ol className="rm-nodes">
        {stage.nodes.map((node, i) => {
          const isDone = done.has(node.id);
          const kind = node.kind ?? "core";
          return (
            <li
              key={node.id}
              className={`rm-node-row ${i % 2 === 0 ? "is-left" : "is-right"}`}
            >
              <button
                type="button"
                className={[
                  "rm-node",
                  `is-${kind}`,
                  isDone ? "is-done" : "",
                  activeId === node.id ? "is-active" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                aria-expanded={activeId === node.id}
                onClick={() => onOpen(node.id)}
              >
                <span
                  className="rm-node-tick"
                  role="checkbox"
                  aria-checked={isDone}
                  aria-label={`Mark ${node.label} studied`}
                  tabIndex={0}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleRoadmapNode(node.id);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === " " || e.key === "Enter") {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleRoadmapNode(node.id);
                    }
                  }}
                >
                  {isDone ? "✓" : ""}
                </span>
                <span className="rm-node-label">{node.label}</span>
                {kind !== "core" && <span className="rm-node-kind">{kind}</span>}
              </button>
            </li>
          );
        })}
      </ol>

      <p className="rm-stage-build">
        <span className="rm-stage-build-tag">Build</span>
        {stage.build}
      </p>
    </section>
  );
}

function NodeDetail({
  node,
  stage,
  done,
  onClose,
}: {
  node: RoadmapNode;
  stage: RoadmapStage;
  done: boolean;
  onClose: () => void;
}) {
  return (
    <>
      <div className="rm-detail-scrim" onClick={onClose} aria-hidden />
      <aside className="rm-detail" role="dialog" aria-label={node.label}>
        <div className="rm-detail-head">
          <div>
            <p className="rm-detail-stage">{stage.title}</p>
            <h3 className="rm-detail-title">{node.label}</h3>
          </div>
          <button type="button" className="rm-detail-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <button
          type="button"
          className={`rm-detail-toggle${done ? " is-done" : ""}`}
          onClick={() => toggleRoadmapNode(node.id)}
        >
          {done ? "✓ Marked studied" : "Mark as studied"}
        </button>

        {node.summary && <p className="rm-detail-summary">{node.summary}</p>}

        {node.topics && node.topics.length > 0 && (
          <>
            <p className="rm-detail-label">Learn</p>
            <ul className="rm-detail-topics">
              {node.topics.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </>
        )}

        {node.ref && (
          <>
            <p className="rm-detail-label">In this book</p>
            <Link href={node.ref.href} className="rm-detail-ref">
              {node.ref.label} →
            </Link>
          </>
        )}

        {node.links && node.links.length > 0 && (
          <>
            <p className="rm-detail-label">Free references</p>
            <ul className="rm-detail-links">
              {node.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </aside>
    </>
  );
}
