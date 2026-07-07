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
               {MANIFEST.find(s => s.title === "Company Specific Questions")?.chapters.map((ch) => {
                 const folder = MANIFEST.find(s => s.title === "Company Specific Questions")!.folder;
                 return (
                   <li key={ch.title}>
                     <Link 
                       href={firstHrefOf(folder, ch.file)} 
                       style={{color: "inherit", textDecoration: "none"}}
                       className="np-company-link"
                     >
                       {ch.title} →
                     </Link>
                   </li>
                 );
               })}
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
        
        
        <div className="np-hr-thick"></div>

        {/* Editorial Opinion */}
        <section className="np-hero-article">
          <div className="np-article-content" style={{borderRight: 'none', paddingRight: 0}}>
            <h3 className="np-headline">THE EDITORIAL OPINION: WHY THIS PREP BOOK?</h3>
            <p className="np-author">By The Chief Editor</p>
            <p className="np-text">
              <span className="np-dropcap">T</span>he modern job market for software engineers has never been more competitive. With the advent of artificial intelligence, tightening economic conditions, and shifting tech stacks, passing a technical interview requires more than just knowing syntax. It requires deep, fundamental understanding of system architecture, data structures, and human behavior.
            </p>
            <p className="np-text">
              This publication was established to serve as the definitive, single-source compendium for full-stack interview preparation. We bypass the trivialities and focus strictly on what hiring committees discuss behind closed doors. Whether you are navigating the intricate algorithms required by FAANG or the complex architectural questions demanded by enterprise consulting firms, our syllabus provides the rigorous blueprint necessary for success.
            </p>
          </div>
        </section>

        <div className="np-hr-thick"></div>

        {/* SEO FAQ Section */}
        <section className="np-topics-section">
          <h3 className="np-headline-sub">FREQUENTLY ASKED QUESTIONS</h3>
          <div style={{display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left', margin: '0 auto', maxWidth: '800px'}}>
            
            <div style={{borderBottom: '1px dotted var(--text-muted)', paddingBottom: '10px'}}>
              <h4 style={{fontFamily: "'Playfair Display', serif", fontSize: '20px', margin: '0 0 5px 0'}}>Is this full-stack interview prep really free?</h4>
              <p className="np-text" style={{fontSize: '16px', margin: 0}}>Yes. The entire curriculum, including over 200+ Data Structures & Algorithms questions, system design guides, and React/Node.js cheat sheets, is 100% open-source and free forever.</p>
            </div>

            <div style={{borderBottom: '1px dotted var(--text-muted)', paddingBottom: '10px'}}>
              <h4 style={{fontFamily: "'Playfair Display', serif", fontSize: '20px', margin: '0 0 5px 0'}}>Which companies are these questions meant for?</h4>
              <p className="np-text" style={{fontSize: '16px', margin: 0}}>Our curriculum is meticulously categorized into FAANG (Google, Amazon, Meta, Microsoft, Oracle) and top Service companies (TCS, Infosys, Wipro, Accenture). We track the exact questions asked in their most recent 2026 hiring cycles.</p>
            </div>

            <div style={{borderBottom: '1px dotted var(--text-muted)', paddingBottom: '10px'}}>
              <h4 style={{fontFamily: "'Playfair Display', serif", fontSize: '20px', margin: '0 0 5px 0'}}>Do I need to know both React and NestJS?</h4>
              <p className="np-text" style={{fontSize: '16px', margin: 0}}>While the book heavily features React on the frontend and Node.js/NestJS on the backend, the core architectural concepts (System Design, Microservices, Authentication, Database Indexing) apply universally across any technology stack.</p>
            </div>

          </div>
        </section>

        <div className="np-hr-thick"></div>

        {/* Testimonials */}
        <section className="np-topics-section" style={{textAlign: 'center'}}>
          <h3 className="np-headline-sub">LETTERS TO THE EDITOR</h3>
          <div className="np-topics-grid">
            <blockquote style={{border: '1px solid var(--border)', padding: '20px', fontStyle: 'italic', background: 'var(--bg-subtle)'}}>
              "The most well-organized compendium of system design knowledge I have ever encountered. I secured an E5 role thanks to this."
              <br/><br/>
              <strong>— S. Williams, Staff Engineer</strong>
            </blockquote>
            <blockquote style={{border: '1px solid var(--border)', padding: '20px', fontStyle: 'italic', background: 'var(--bg-subtle)'}}>
              "Finally, a resource that bridges the gap between generic LeetCode and actual, real-world backend architecture."
              <br/><br/>
              <strong>— R. Gupta, Backend Lead</strong>
            </blockquote>
            <blockquote style={{border: '1px solid var(--border)', padding: '20px', fontStyle: 'italic', background: 'var(--bg-subtle)'}}>
              "The 2026 AI integration trends section was exactly what my panel grilled me on. Absolutely vital reading."
              <br/><br/>
              <strong>— M. Chen, Full-Stack Dev</strong>
            </blockquote>
            <blockquote style={{border: '1px solid var(--border)', padding: '20px', fontStyle: 'italic', background: 'var(--bg-subtle)', gridColumn: '1 / -1', marginTop: '10px'}}>
              "Give me six hours to chop down a tree and I will spend the first four sharpening the axe. Preparation is the undeniable key to victory."
              <br/><br/>
              <strong>— Abraham Lincoln (Motivational Quote of the Day)</strong>
            </blockquote>
          </div>
        </section>

        <div className="np-hr"></div>

        {/* SEO JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Is this full-stack interview prep really free?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. The entire curriculum, including over 200+ Data Structures & Algorithms questions, system design guides, and React/Node.js cheat sheets, is 100% open-source and free forever."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which companies are these questions meant for?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our curriculum is meticulously categorized into FAANG (Google, Amazon, Meta, Microsoft, Oracle) and top Service companies (TCS, Infosys, Wipro, Accenture). We track the exact questions asked in their most recent 2026 hiring cycles."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need to know both React and NestJS?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "While the book heavily features React on the frontend and Node.js/NestJS on the backend, the core architectural concepts (System Design, Microservices, Authentication, Database Indexing) apply universally across any technology stack."
                  }
                }
              ]
            })
          }}
        />

        <footer className="np-footer">
          <span>{SITE_NAME}</span>
          <a href={GITHUB_REPO} target="_blank" rel="noopener noreferrer" style={{color: "inherit", marginLeft: "10px"}}>View on GitHub</a>
        </footer>
      </div>
    </div>
  );
}
