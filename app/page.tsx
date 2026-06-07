import type { Metadata } from "next";
import Link from "next/link";
import { MANIFEST, FLAT } from "@/lib/manifest";
import {
  COMPANIES,
  SITE_NAME,
  SITE_TAGLINE,
  SEO_KEYWORDS,
  GITHUB_REPO,
} from "@/lib/site";
import StarButton from "@/components/StarButton";
import CompilerButton from "@/components/CompilerButton";

export const metadata: Metadata = {
  title: "Full-Stack Developer Interview Prep — React, Node.js, MongoDB & DSA",
  description: SITE_TAGLINE,
  keywords: SEO_KEYWORDS,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Full-Stack Developer Interview Prep Book",
    description: SITE_TAGLINE,
    url: "/",
    type: "website",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: "Full-Stack Developer Interview Prep Book",
    description: SITE_TAGLINE,
  },
};

function firstHrefOf(folder: string, file: string) {
  const base = file.replace(/\.md$/, "").toLowerCase();
  if (!folder && base === "readme") return "/start";
  return folder ? `/${folder}/${base}` : `/${base}`;
}

export default function LandingPage() {
  const learningSections = MANIFEST.filter((s) => s.title !== "Getting Started");
  const totalChapters = FLAT.filter((f) => f.path !== "README.md").length;

  // Structured data so search engines understand this is a free learning resource.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: SITE_NAME,
    description: SITE_TAGLINE,
    educationalLevel: "Professional",
    teaches: learningSections.map((s) => s.title),
    isAccessibleForFree: true,
    keywords: SEO_KEYWORDS.join(", "),
    learningResourceType: "Interview preparation guide",
    url: GITHUB_REPO,
  };

  return (
    <div className="landing">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="lp-hero">
        <span className="lp-eyebrow">Free &amp; open-source · MERN + NestJS</span>
        <h1 className="lp-title">
          Crack your full-stack developer interview with confidence
        </h1>
        <p className="lp-sub">
          A structured, no-fluff prep book covering JavaScript, React, Node.js,
          NestJS, MongoDB, system design, machine coding, DSA, and HR rounds —
          every topic as <strong>Definition → Explanation → Code → Real-world
          use → Likely questions</strong>.
        </p>
        <div className="lp-cta-row">
          <Link href="/start" className="lp-btn lp-btn-primary">
            Start preparing →
          </Link>
          <StarButton variant="hero" />
        </div>

        <ul className="lp-stats" aria-label="What's inside">
          <li>
            <strong>{totalChapters}</strong>
            <span>topic chapters</span>
          </li>
          <li>
            <strong>200+</strong>
            <span>DSA coding questions</span>
          </li>
          <li>
            <strong>{learningSections.length}</strong>
            <span>interview rounds</span>
          </li>
          <li>
            <strong>100%</strong>
            <span>free, forever</span>
          </li>
        </ul>
      </section>

      {/* Companies — SEO + social proof */}
      <section className="lp-companies">
        <h2 className="lp-section-title">
          Prep for interviews at the companies you&apos;re targeting
        </h2>
        <p className="lp-section-sub">
          Built around the questions real panels ask at top MNCs, service
          giants, and product companies hiring full-stack developers.
        </p>
        <ul className="lp-company-grid">
          {COMPANIES.map((name) => (
            <li key={name} className="lp-company-chip">
              {name}
            </li>
          ))}
        </ul>
      </section>

      {/* Topics */}
      <section className="lp-topics">
        <h2 className="lp-section-title">Everything you need, organized by round</h2>
        <div className="lp-topic-grid">
          {learningSections.map((sec) => {
            const first = sec.chapters[0];
            if (!first) return null;
            return (
              <Link
                key={sec.title}
                href={firstHrefOf(sec.folder, first.file)}
                className="lp-topic-card"
              >
                <span className="lp-topic-title">{sec.title}</span>
                <span className="lp-topic-meta">
                  {sec.chapters.length}{" "}
                  {sec.chapters.length === 1 ? "chapter" : "chapters"}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Practice / compiler CTA */}
      <section className="lp-compiler">
        <div className="lp-compiler-inner">
          <div>
            <h2 className="lp-section-title">Don&apos;t just read — run the code</h2>
            <p className="lp-section-sub">
              Every JavaScript example is one click from a live editor. Practice
              right in your browser with the built-in online compiler — no setup.
            </p>
            <div className="lp-cta-row">
              <Link href="/playground" className="lp-btn lp-btn-primary">
                Open the playground →
              </Link>
              <CompilerButton variant="hero" label="Launch compiler ↗" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="lp-final">
        <h2 className="lp-section-title">Ready when you are</h2>
        <p className="lp-section-sub">
          Jump straight into the dashboard and track your progress — or drop a
          star to support the project and help others find it.
        </p>
        <div className="lp-cta-row lp-cta-center">
          <Link href="/start" className="lp-btn lp-btn-primary">
            Open the study dashboard →
          </Link>
          <StarButton variant="hero" />
        </div>
      </section>

      <footer className="lp-footer">
        <span>{SITE_NAME}</span>
        <a href={GITHUB_REPO} target="_blank" rel="noopener noreferrer">
          View source on GitHub
        </a>
      </footer>
    </div>
  );
}
