"use client";

import Link from "next/link";
import { TRACKS, trackNodeIds } from "@/lib/roadmaps";
import { clearRoadmapProgress, useRoadmapProgress } from "@/lib/progress";

/**
 * Track cards for /roadmaps. Client-side because each card shows live progress
 * from localStorage; the copy itself is static and comes from lib/roadmaps.ts.
 */
export default function RoadmapIndex() {
  const done = useRoadmapProgress();
  const totalDone = done.size;

  return (
    <>
      <div className="rmi-grid">
        {TRACKS.map((track) => {
          const ids = trackNodeIds(track);
          const doneCount = ids.filter((id) => done.has(id)).length;
          const pct = ids.length ? Math.round((doneCount / ids.length) * 100) : 0;

          return (
            <Link key={track.slug} href={`/roadmaps/${track.slug}`} className="rmi-card">
              <div className="rmi-card-head">
                <span className="rm-mark rmi-mark" aria-hidden>
                  {track.mark}
                </span>
                <div className="rmi-card-heading">
                  <h3 className="rmi-card-title">{track.title}</h3>
                  <p className="rmi-card-meta">
                    {track.stages.length} stages · {ids.length} topics · {track.timeline}
                  </p>
                </div>
              </div>

              <p className="rmi-card-tagline">{track.tagline}</p>

              <div className="rmi-card-foot">
                <div
                  className="pbar"
                  role="progressbar"
                  aria-valuenow={pct}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${track.title} progress`}
                >
                  <div className="pbar-fill" style={{ width: `${pct}%` }} />
                </div>
                <span className="rmi-card-pct">{pct}%</span>
              </div>
            </Link>
          );
        })}
      </div>

      {totalDone > 0 && (
        <p className="rmi-reset">
          {totalDone} topics marked studied across all roadmaps.{" "}
          <button type="button" className="rmi-reset-btn" onClick={clearRoadmapProgress}>
            Reset progress
          </button>
        </p>
      )}
    </>
  );
}
