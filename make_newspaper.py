import os

page_content = """import type { Metadata } from "next";
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
"""

css_content = """
/* ============================================================
   NEWSPAPER THEME OVERRIDES FOR LANDING PAGE
   ============================================================ */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Merriweather:wght@300;400;700&display=swap');

.newspaper-wrapper {
  background-color: #f4f1ea;
  color: #2b2b2b;
  font-family: 'Merriweather', serif;
  min-height: 100vh;
  padding: 40px 20px;
}

:root[data-theme="dark"] .newspaper-wrapper {
  background-color: #1a1a1a;
  color: #e0dcd3;
}

.newspaper-container {
  max-width: 1000px;
  margin: 0 auto;
  border: 1px solid #d3d3d3;
  padding: 40px;
  background-color: #fdfcf8;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

:root[data-theme="dark"] .newspaper-container {
  background-color: #242424;
  border-color: #444;
}

.np-header {
  text-align: center;
  border-bottom: 4px solid #2b2b2b;
  padding-bottom: 20px;
  margin-bottom: 30px;
}
:root[data-theme="dark"] .np-header {
  border-bottom-color: #e0dcd3;
}

.np-meta {
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  border-top: 1px solid #2b2b2b;
  border-bottom: 1px solid #2b2b2b;
  padding: 8px 0;
  margin-bottom: 20px;
  font-family: sans-serif;
  letter-spacing: 1px;
}
:root[data-theme="dark"] .np-meta {
  border-color: #e0dcd3;
}

.np-title {
  font-family: 'Playfair Display', serif;
  font-size: 80px;
  font-weight: 900;
  margin: 0;
  line-height: 1.1;
  text-transform: uppercase;
  letter-spacing: -1px;
}
@media (max-width: 600px) {
  .np-title { font-size: 48px; }
}

.np-subtitle {
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  font-style: italic;
  font-weight: 400;
  margin: 10px 0 0 0;
}

.np-hr {
  border: 0;
  height: 2px;
  background: #2b2b2b;
  margin: 30px 0;
}
:root[data-theme="dark"] .np-hr { background: #e0dcd3; }

.np-hr-thick {
  border: 0;
  height: 4px;
  background: #2b2b2b;
  margin: 40px 0;
}
:root[data-theme="dark"] .np-hr-thick { background: #e0dcd3; }

.np-hero-article {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
@media (min-width: 768px) {
  .np-hero-article {
    flex-direction: row;
  }
}

.np-article-content {
  flex: 3;
  padding-right: 40px;
  border-right: 1px solid #d3d3d3;
}
:root[data-theme="dark"] .np-article-content { border-right-color: #444; }
@media (max-width: 767px) {
  .np-article-content { border-right: none; padding-right: 0; border-bottom: 1px solid #d3d3d3; padding-bottom: 20px; }
  :root[data-theme="dark"] .np-article-content { border-bottom-color: #444; }
}

.np-headline {
  font-family: 'Playfair Display', serif;
  font-size: 42px;
  font-weight: 700;
  margin: 0 0 10px;
  line-height: 1.1;
}

.np-author {
  font-family: sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 20px;
}

.np-text {
  font-size: 18px;
  line-height: 1.6;
  text-align: justify;
  margin-bottom: 16px;
}

.np-dropcap {
  float: left;
  font-size: 72px;
  line-height: 60px;
  padding: 4px 8px 0 0;
  font-family: 'Playfair Display', serif;
  font-weight: 900;
}

.np-cta-box {
  margin-top: 30px;
  text-align: center;
  padding: 20px;
  border: 2px dashed #2b2b2b;
}
:root[data-theme="dark"] .np-cta-box { border-color: #e0dcd3; }

.np-btn {
  display: inline-block;
  background: #2b2b2b;
  color: #fdfcf8;
  padding: 12px 24px;
  font-family: sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  border: 2px solid #2b2b2b;
  transition: all 0.2s;
  cursor: pointer;
}
.np-btn:hover {
  background: #fdfcf8;
  color: #2b2b2b;
}
:root[data-theme="dark"] .np-btn {
  background: #e0dcd3;
  color: #1a1a1a;
  border-color: #e0dcd3;
}
:root[data-theme="dark"] .np-btn:hover {
  background: #1a1a1a;
  color: #e0dcd3;
}

.np-article-sidebar {
  flex: 1;
}

.np-sidebar-title {
  font-family: sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  border-bottom: 1px solid #2b2b2b;
  padding-bottom: 5px;
  margin-bottom: 15px;
}
:root[data-theme="dark"] .np-sidebar-title { border-color: #e0dcd3; }

.np-companies-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.np-companies-list li {
  font-size: 14px;
  font-family: 'Playfair Display', serif;
  border-bottom: 1px dotted #ccc;
  padding-bottom: 4px;
}
:root[data-theme="dark"] .np-companies-list li { border-color: #555; }

.np-headline-sub {
  text-align: center;
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  margin-bottom: 30px;
}

.np-topics-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}
@media (min-width: 600px) {
  .np-topics-grid { grid-template-columns: 1fr 1fr; }
}
@media (min-width: 900px) {
  .np-topics-grid { grid-template-columns: 1fr 1fr 1fr; }
}

.np-topic-card {
  border: 1px solid #2b2b2b;
  padding: 15px;
  text-align: center;
  transition: transform 0.2s;
}
.np-topic-card:hover {
  transform: translateY(-2px);
  background: rgba(0,0,0,0.03);
}
:root[data-theme="dark"] .np-topic-card { border-color: #e0dcd3; }
:root[data-theme="dark"] .np-topic-card:hover { background: rgba(255,255,255,0.05); }

.np-topic-link {
  text-decoration: none;
  color: inherit;
}

.np-topic-title {
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  margin: 0 0 5px;
}

.np-topic-meta {
  font-family: sans-serif;
  font-size: 12px;
  text-transform: uppercase;
}

.np-practice-section {
  text-align: center;
}

.np-cta-row {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}

.np-footer {
  text-align: center;
  font-family: sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  border-top: 1px solid #2b2b2b;
  margin-top: 50px;
  padding-top: 20px;
}
:root[data-theme="dark"] .np-footer { border-color: #e0dcd3; }
"""

with open("/home/soumayaranjanrout/Desktop/Practice/interview_prep/app/page.tsx", "w") as f:
    f.write(page_content)

with open("/home/soumayaranjanrout/Desktop/Practice/interview_prep/app/globals.css", "a") as f:
    f.write(css_content)

print("Landing page rewritten to Newspaper style.")
