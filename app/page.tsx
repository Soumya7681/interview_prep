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
    <div className="newspaper-wrapper">
      <div className="newspaper-container">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Header */}
        <header className="np-header">
          <div className="np-meta">
            <span>Vol. I — No. 1</span>
            <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>Price: FREE</span>
          </div>
          <h1 className="np-title">THE DAILY PREP</h1>
          <h2 className="np-subtitle">THE MOST COMPREHENSIVE GUIDE FOR FULL-STACK ENGINEERS</h2>
          <div className="np-hr"></div>
        </header>

        {/* Hero Article */}
        <section className="np-hero-article">
          <div className="np-article-content">
            <h3 className="np-headline">CRACK YOUR INTERVIEW WITH CONFIDENCE!</h3>
            <p className="np-author">By The Editors</p>
            <p className="np-text">
              <span className="np-dropcap">A</span> structured, no-fluff prep book covering JavaScript, React, Node.js, NestJS, MongoDB, system design, machine coding, DSA, and HR rounds is now available to the public. Every topic is meticulously formatted as <strong>Definition → Explanation → Code → Real-world use → Likely questions</strong>.
            </p>
            <p className="np-text">
              Our reporters have scoured the industry to compile over <strong>200+</strong> Data Structure and Algorithm coding questions, alongside <strong>{totalChapters}</strong> topic chapters across <strong>{learningSections.length}</strong> intensive interview rounds. 
            </p>
            <div className="np-cta-box">
              <Link href="/start" className="np-btn">Start Reading Now →</Link>
            </div>
          </div>
          <div className="np-article-sidebar">
             <h4 className="np-sidebar-title">COMPANIES TARGETED</h4>
             <ul className="np-companies-list">
               {COMPANIES.map((name) => (
                 <li key={name}>{name}</li>
               ))}
             </ul>
          </div>
        </section>
        
        <div className="np-hr-thick"></div>

        {/* Topic Grid */}
        <section className="np-topics-section">
          <h3 className="np-headline-sub">INDEX OF SECTIONS</h3>
          <div className="np-topics-grid">
            {learningSections.map((sec) => {
              const first = sec.chapters[0];
              if (!first) return null;
              return (
                <div key={sec.title} className="np-topic-card">
                  <Link href={firstHrefOf(sec.folder, first.file)} className="np-topic-link">
                    <h5 className="np-topic-title">{sec.title}</h5>
                    <span className="np-topic-meta">{sec.chapters.length} {sec.chapters.length === 1 ? "Chapter" : "Chapters"}</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        <div className="np-hr-thick"></div>

        {/* Practice CTA */}
        <section className="np-practice-section">
          <h3 className="np-headline" style={{textAlign: "center"}}>PRACTICE RIGHT IN YOUR BROWSER</h3>
          <p className="np-text" style={{textAlign: "center"}}>
            Don't just read the ink—run the code! Every JavaScript example is one click from a live editor. No setup required.
          </p>
          <div className="np-cta-row">
            <Link href="/playground" className="np-btn">Open Playground</Link>
            <a href="https://www.programiz.com/javascript/online-compiler/" target="_blank" rel="noopener noreferrer" className="np-btn">Launch Compiler</a>
          </div>
        </section>
        
        <footer className="np-footer">
          <span>{SITE_NAME}</span>
          <a href={GITHUB_REPO} target="_blank" rel="noopener noreferrer" style={{color: "inherit", marginLeft: "10px"}}>View on GitHub</a>
        </footer>
      </div>
    </div>
  );
}
