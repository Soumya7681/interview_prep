import type { Metadata } from "next";
import Link from "next/link";
import RoadmapIndex from "@/components/RoadmapIndex";
import { ROADMAP_PRINCIPLES, TRACKS, totalNodeCount } from "@/lib/roadmaps";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Career Roadmaps — AI, ML, Prompt Engineering, FDE, Data & MLOps",
  description:
    "Interactive, stage-by-stage roadmaps for the tech roles hiring right now: AI engineer, ML engineer, prompt engineer, forward deployed engineer, data engineer and MLOps. Free, with progress tracking.",
  alternates: { canonical: "/roadmaps/" },
  openGraph: {
    title: "Career Roadmaps for Trending Tech Roles",
    description:
      "What to learn, in what order, and what to build — AI engineer, ML engineer, prompt engineer, FDE, data engineer, MLOps.",
    url: "/roadmaps/",
    type: "website",
    siteName: SITE_NAME,
  },
};

export default function RoadmapsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Career roadmaps for trending tech roles",
    itemListElement: TRACKS.map((track, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${track.title} roadmap`,
      url: `/roadmaps/${track.slug}/`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="breadcrumb">
        Career Roadmaps <span className="breadcrumb-current">· All tracks</span>
      </div>

      <header className="rmi-head">
        <p className="rmi-kicker">
          {TRACKS.length} tracks · {totalNodeCount()} topics
        </p>
        <h1 className="rmi-title">Career Roadmaps</h1>
        <p className="rmi-sub">
          What to learn, in what order, and what to build at each stage — for the tech
          roles employers are hiring for right now. Tick a topic and your progress is
          kept in this browser.
        </p>
      </header>

      <RoadmapIndex />

      <section className="rmi-rules" aria-labelledby="rmi-rules-title">
        <h2 id="rmi-rules-title" className="rm-section-title">
          Rules that apply to every track
        </h2>
        <ul className="rm-proof">
          {ROADMAP_PRINCIPLES.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p className="rmi-guide-link">
          Long-form version, with interview questions:{" "}
          <Link href="/14-roadmaps/01-how-to-use-these-roadmaps">
            Ch 88 — How to Use These Roadmaps
          </Link>
        </p>
      </section>
    </>
  );
}
