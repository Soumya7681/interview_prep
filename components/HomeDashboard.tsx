"use client";

import Link from "next/link";
import { MANIFEST } from "@/lib/manifest";
import { useDsaProgress } from "@/lib/progress";

function firstChapterHref(folder: string, file: string) {
  const base = file.replace(/\.md$/, "").toLowerCase();
  if (!folder && base === "readme") return "/start";
  return folder ? `/${folder}/${base}` : `/${base}`;
}

export default function HomeDashboard({ dsaTotal }: { dsaTotal: number }) {
  const checked = useDsaProgress();
  const done = [...checked].filter((id) => id >= 1 && id <= dsaTotal).length;
  const pct = dsaTotal ? Math.round((done / dsaTotal) * 100) : 0;

  // Sections worth linking to (skip the single-page "Getting Started" home entry).
  const sections = MANIFEST.filter((s) => s.title !== "Getting Started");

  return (
    <section className="dash" aria-label="Study overview">
      <div className="dash-progress">
        <div className="dash-progress-head">
          <span className="dash-progress-title">DSA Coding Tracker</span>
          <span className="dash-progress-pct">{pct}%</span>
        </div>
        <div className="pbar pbar-lg" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
          <div className="pbar-fill" style={{ width: `${pct}%` }} />
        </div>
        <div className="dash-progress-foot">
          <span>
            <strong>{done}</strong> of {dsaTotal} questions solved
          </span>
          <Link href="/11-dsa-coding-questions/" className="dash-link">
            Open tracker →
          </Link>
        </div>
      </div>

      <nav className="dash-grid" aria-label="Sections">
        {sections.map((sec) => {
          const first = sec.chapters[0];
          if (!first) return null;
          return (
            <Link
              key={sec.title}
              href={firstChapterHref(sec.folder, first.file)}
              className="dash-card"
            >
              <span className="dash-card-title">{sec.title}</span>
              <span className="dash-card-meta">
                {sec.chapters.length} {sec.chapters.length === 1 ? "page" : "pages"}
              </span>
            </Link>
          );
        })}
      </nav>
    </section>
  );
}
