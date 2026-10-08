import type { Metadata } from "next";
import Link from "next/link";
import hljs from "highlight.js";
import { ArrowRight, ArrowUpRight, Play } from "lucide-react";
import { MANIFEST, FLAT } from "@/lib/manifest";
import { loadDsaContent } from "@/lib/dsa";
import { TRACKS, totalNodeCount } from "@/lib/roadmaps";
import {
  SITE_NAME,
  SITE_TAGLINE,
  SEO_KEYWORDS,
  GITHUB_REPO,
} from "@/lib/site";
import StarButton from "@/components/StarButton";
import CompilerButton from "@/components/CompilerButton";
import MockQuestion from "@/components/MockQuestion";

/**
 * The landing-page FAQ. The visible list and the FAQPage JSON-LD are both
 * rendered from this array, so the structured data cannot drift from the copy
 * a reader actually sees — which is what Google penalises.
 */
const FAQS: Array<{ q: string; a: string }> = [
  {
    q: "Is this full-stack interview prep really free?",
    a: "Yes. The entire curriculum, including over 200+ Data Structures & Algorithms questions, system design guides, and React/Node.js cheat sheets, is 100% open-source and free forever.",
  },
  {
    q: "Which companies are these questions meant for?",
    a: "Our curriculum is meticulously categorized into FAANG (Google, Amazon, Meta, Microsoft, Oracle) and top Service companies (TCS, Infosys, Wipro, Accenture). We track the exact questions asked in their most recent 2026 hiring cycles.",
  },
  {
    q: "Do I need to know both React and NestJS?",
    a: "While the book heavily features React on the frontend and Node.js/NestJS on the backend, the core architectural concepts (System Design, Microservices, Authentication, Database Indexing) apply universally across any technology stack.",
  },
  {
    q: "What are the career roadmaps?",
    a: `Stage-by-stage study maps for the roles hiring right now — ${TRACKS.length} tracks covering ${totalNodeCount()} topics, from AI and ML engineering to data, MLOps, and forward deployed engineering. Each one tells you what to learn, in what order, and what to build to prove it.`,
  },
  {
    q: "Do I need an account, and how is my progress saved?",
    a: "There is no account and no sign-up. Ticked topics and roadmap progress are stored in your own browser using localStorage, so nothing is uploaded and nothing is tracked. Clearing your browser data resets your progress, and it does not follow you to another device.",
  },
  {
    q: "Can I run the code examples?",
    a: "Yes. The JavaScript Playground runs your code directly in your browser inside a sandboxed frame — no server, no account, and your code never leaves your machine. Use it to tweak any example from the book and see the console output immediately.",
  },
  {
    q: "How do I report an error or contribute?",
    a: "The whole book is a public GitHub repository. Open an issue for anything that looks wrong or out of date, or send a pull request — corrections, new questions, and better explanations are all welcome.",
  },
];

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

// The book's sections grouped by the interview round they prepare for, in the
// order a typical full-stack loop runs. Titles must match MANIFEST.
const ROUNDS: Array<{ name: string; checks: string; sections: string[] }> = [
  { name: "Fundamentals", checks: "Can you explain the language, not just use it?", sections: ["JavaScript"] },
  { name: "Frontend", checks: "Hooks, rendering, and a component built live.", sections: ["React", "Machine Coding"] },
  { name: "Backend", checks: "APIs, auth, data modelling and the event loop.", sections: ["Node.js", "Express / NestJS", "MongoDB"] },
  { name: "System design", checks: "Trade-offs at scale, out loud, on a whiteboard.", sections: ["System Design", "AI / LLM Engineering"] },
  { name: "Coding", checks: "Problem solving under a timer.", sections: ["DSA & Coding"] },
  { name: "HR", checks: "Your story, conflicts, and why this company.", sections: ["HR & Behavioral"] },
];

const SERVICE_COMPANIES = new Set([
  "TCS", "Infosys", "Wipro", "Accenture", "Cognizant", "HCLTech",
  "Tech Mahindra", "Capgemini", "IBM", "Deloitte",
]);

// Real excerpt from Chapter 1, used for the annotated page.
const SAMPLE_CODE = `function createCounter() {
  let count = 0;
  return () => ++count;   // closes over count
}
const next = createCounter();
next(); // 1
next(); // 2`;

export default async function LandingPage() {
  const learningSections = MANIFEST.filter((s) => s.title !== "Getting Started");
  const totalChapters = FLAT.filter((f) => f.path !== "README.md").length;
  const dsa = await loadDsaContent();
  const companySection = MANIFEST.find((s) => s.title === "Company Specific Questions");
  const sampleHtml = hljs.highlight(SAMPLE_CODE, { language: "javascript" }).value;
  const sectionByTitle = new Map(MANIFEST.map((s) => [s.title, s]));

  const companies = companySection?.chapters ?? [];
  const service = companies.filter((c) => SERVICE_COMPANIES.has(c.title));
  const product = companies.filter((c) => !SERVICE_COMPANIES.has(c.title) && c.title !== "Other Companies");
  const other = companies.find((c) => c.title === "Other Companies");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: SITE_NAME,
    description: SITE_TAGLINE,
    educationalLevel: "Professional",
    teaches: [...learningSections.map((s) => s.title), ...TRACKS.map((t) => `${t.title} roadmap`)],
    isAccessibleForFree: true,
    keywords: SEO_KEYWORDS.join(", "),
    learningResourceType: "Interview preparation guide",
    url: GITHUB_REPO,
  };

  return (
    <div className="lp">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero: the promise on the left, a real question on the right. */}
      <section className="lp-hero lp-bg-dots">
        <div className="lp-container lp-hero-grid">
          <div className="lp-hero-copy">
            <h1 className="lp-title">
              Walk into the interview having <mark className="hl">already heard</mark> the
              questions.
            </h1>
            <p className="lp-lede">
              A full-stack prep book for JavaScript, React, Node.js, MongoDB, system design,
              DSA and HR rounds. Every chapter ends with the follow-ups interviewers actually
              ask.
            </p>
            <div className="lp-actions">
              <Link href="/start" className="btn btn-primary btn-lg">
                Start with chapter 1
                <ArrowRight aria-hidden="true" />
              </Link>
              <Link href="/11-dsa-coding-questions" className="btn btn-secondary btn-lg">
                Open the DSA tracker
              </Link>
            </div>
          </div>

          <MockQuestion />
        </div>
      </section>

      {/* Facts strip: what is in the book, at a glance. */}
      <section className="lp-strip" aria-label="What is inside">
        <dl className="lp-container lp-strip-grid">
          <div>
            <dt>chapters</dt>
            <dd>{totalChapters}</dd>
          </div>
          <div>
            <dt>DSA questions, tracked</dt>
            <dd>{dsa.total}</dd>
          </div>
          <div>
            <dt>career roadmaps</dt>
            <dd>{TRACKS.length}</dd>
          </div>
          <div>
            <dt>open source, no sign-up</dt>
            <dd>Free</dd>
          </div>
        </dl>
      </section>

      {/* The interview loop: contents grouped by round. */}
      <section className="lp-section lp-bg-lines" aria-labelledby="lp-loop">
        <div className="lp-container">
          <header className="lp-head">
            <div>
              <h2 id="lp-loop" className="lp-h2">Organised around the interview loop</h2>
              <p className="lp-sub">
                Six rounds, in the order most full-stack loops run. Each one lists what the
                interviewer is checking and the chapters that cover it.
              </p>
            </div>
          </header>

          <ol className="loop">
            {ROUNDS.map((round, i) => (
              <li key={round.name} className="loop-round">
                <div className="loop-marker" aria-hidden="true">
                  <span>{i + 1}</span>
                </div>
                <div className="loop-body">
                  <h3 className="loop-name">{round.name}</h3>
                  <p className="loop-checks">{round.checks}</p>
                  <ul className="loop-links">
                    {round.sections.map((title) => {
                      const sec = sectionByTitle.get(title);
                      const first = sec?.chapters[0];
                      if (!sec || !first) return null;
                      return (
                        <li key={title}>
                          <Link href={firstHrefOf(sec.folder, first.file)}>
                            <span>{title}</span>
                            <span className="loop-n">{sec.chapters.length}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Annotated page: the five-part chapter format, on a real chapter. */}
      <section className="lp-section lp-bg-paper" aria-labelledby="lp-format">
        <div className="lp-container">
          <header className="lp-head">
            <div>
              <h2 id="lp-format" className="lp-h2">Every chapter reads the same way</h2>
              <p className="lp-sub">
                Five parts, always in this order, so revising a topic the night before takes
                minutes. Here is chapter 1, trimmed.
              </p>
            </div>
          </header>

          <div className="anno">
            <div className="anno-row">
              <p className="anno-label"><span>1</span>Definition</p>
              <div className="anno-body">
                <p className="anno-title">Closures</p>
                <p>
                  A closure is a function that remembers the variables from the scope it was
                  created in, even after that scope has finished executing.
                </p>
              </div>
            </div>
            <div className="anno-row">
              <p className="anno-label"><span>2</span>Explanation</p>
              <div className="anno-body">
                <p>
                  Every function carries a hidden reference, <code>[[Environment]]</code>, to
                  the scope it was defined in. Call it from anywhere later and it can still
                  reach those variables.
                </p>
              </div>
            </div>
            <div className="anno-row">
              <p className="anno-label"><span>3</span>Code</p>
              <div className="anno-body">
                <pre className="anno-code">
                  <code className="hljs language-javascript" dangerouslySetInnerHTML={{ __html: sampleHtml }} />
                </pre>
              </div>
            </div>
            <div className="anno-row">
              <p className="anno-label"><span>4</span>Real-world use</p>
              <div className="anno-body">
                <p>
                  Express middleware closes over its config:{" "}
                  <code>app.use(authMiddleware(config))</code>.
                </p>
              </div>
            </div>
            <div className="anno-row">
              <p className="anno-label"><span>5</span>Likely questions</p>
              <div className="anno-body">
                <p className="anno-q">What&rsquo;s the output of the classic setTimeout loop?</p>
                <p className="anno-q">How can closures cause memory leaks?</p>
                <Link href="/01-javascript/01-closures" className="anno-more">
                  Read the full chapter
                  <ArrowRight aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies: split by hiring style, because the rounds differ. */}
      {companySection && (
        <section className="lp-section lp-bg-wash" aria-labelledby="lp-companies">
          <div className="lp-container">
            <header className="lp-head">
              <div>
                <h2 id="lp-companies" className="lp-h2">Interviewing somewhere specific?</h2>
                <p className="lp-sub">
                  Product companies and service firms run very different loops. Each page covers
                  that company&rsquo;s rounds and the questions that come up.
                </p>
              </div>
            </header>

            <div className="co">
              <div className="co-col">
                <h3 className="co-title">
                  Product companies <span>{product.length}</span>
                </h3>
                <p className="co-note">Usually weighted toward DSA and system design.</p>
                <ul className="co-list">
                  {product.map((ch) => (
                    <li key={ch.title}>
                      <Link href={firstHrefOf(companySection.folder, ch.file)}>{ch.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="co-col">
                <h3 className="co-title">
                  Service companies <span>{service.length}</span>
                </h3>
                <p className="co-note">Usually weighted toward fundamentals, projects and client scenarios.</p>
                <ul className="co-list">
                  {service.map((ch) => (
                    <li key={ch.title}>
                      <Link href={firstHrefOf(companySection.folder, ch.file)}>{ch.title}</Link>
                    </li>
                  ))}
                </ul>
                {other && (
                  <Link href={firstHrefOf(companySection.folder, other.file)} className="co-other">
                    Startups and other companies
                    <ArrowRight aria-hidden="true" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Roadmaps: a table, because people compare tracks by length. */}
      <section className="lp-section lp-bg-grid" aria-labelledby="lp-roadmaps">
        <div className="lp-container">
          <header className="lp-head">
            <div>
              <h2 id="lp-roadmaps" className="lp-h2">Thinking past the next interview?</h2>
              <p className="lp-sub">
                {TRACKS.length} career roadmaps and {totalNodeCount()} topics. Each stage says
                what to learn and which project proves you learned it.
              </p>
            </div>
          </header>

          <div className="rt">
            <div className="rt-row rt-headrow" aria-hidden="true">
              <span>Track</span>
              <span>Stages</span>
              <span>Time</span>
            </div>
            {TRACKS.slice(0, 8).map((track) => (
              <Link key={track.slug} href={`/roadmaps/${track.slug}`} className="rt-row">
                <span className="rt-name">
                  <span className="rt-mark" aria-hidden="true">{track.mark}</span>
                  {track.shortTitle}
                </span>
                <span className="rt-stages" aria-label={`${track.stages.length} stages`}>
                  {track.stages.map((st) => (
                    <i key={st.title} aria-hidden="true" />
                  ))}
                </span>
                <span className="rt-time">{track.timeline}</span>
              </Link>
            ))}
            <Link href="/roadmaps" className="rt-all">
              See all {TRACKS.length} roadmaps
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Playground: shown as a console, because that is what it is. */}
      <section className="lp-section lp-inverse" aria-labelledby="lp-playground">
        <div className="lp-container pgx">
          <div>
            <header className="lp-head lp-head-tight">
              <div>
                <h2 id="lp-playground" className="lp-h2">Change the example. Run it again.</h2>
                <p className="lp-sub">
                  The JavaScript playground runs in a sandboxed frame in your browser. No server,
                  no account, and your code never leaves your machine.
                </p>
              </div>
            </header>
            <div className="lp-actions">
              <Link href="/playground" className="btn btn-primary">
                <Play aria-hidden="true" />
                Open playground
              </Link>
              <CompilerButton variant="hero" label="Other languages" className="btn-md" />
            </div>
          </div>
          <div className="console" aria-hidden="true">
            <div className="console-bar">
              <span>playground.js</span>
              <span className="console-run">Run</span>
            </div>
            <pre className="console-code">
              <code
                className="hljs language-javascript"
                dangerouslySetInnerHTML={{
                  __html: hljs.highlight(
                    `for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i));\n}`,
                    { language: "javascript" },
                  ).value,
                }}
              />
            </pre>
            <div className="console-out">
              <span>3</span>
              <span>3</span>
              <span>3</span>
              <span className="console-hint">swap var for let and run again</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="lp-section lp-bg-subtle" aria-labelledby="lp-faq">
        <div className="lp-container">
          <header className="lp-head">
            <div>
              <h2 id="lp-faq" className="lp-h2">Before you start</h2>
              <p className="lp-sub">
                Something missing?{" "}
                <a href={GITHUB_REPO} target="_blank" rel="noopener noreferrer">
                  Open an issue on GitHub
                  <ArrowUpRight aria-hidden="true" className="inline-icon" />
                </a>
              </p>
            </div>
          </header>
          <div className="lp-faq">
            {FAQS.map((item) => (
              <details key={item.q} className="lp-faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />

      <footer className="lp-footer">
        <div className="lp-container lp-footer-inner">
          <span>{SITE_NAME} · MIT licensed</span>
          <div className="lp-footer-links">
            <Link href="/start">Book</Link>
            <Link href="/roadmaps">Roadmaps</Link>
            <Link href="/playground">Playground</Link>
            <StarButton variant="hero" className="btn-md" />
          </div>
        </div>
      </footer>
    </div>
  );
}
