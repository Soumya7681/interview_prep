// Central site config — reused by metadata, the landing page, and the sitemap.
// Update SITE_URL to your real deployed domain so OG tags and the sitemap are absolute.
export const SITE_URL = "https://interview-prep-book.pages.dev";

export const GITHUB_REPO = "https://github.com/Soumya7681/interview_prep";
export const GITHUB_STARS_URL = `${GITHUB_REPO}/stargazers`;

// Online code playground used across the site (navbar, playground page,
// per-code-block "Run in compiler" links, and the landing CTA).
export const COMPILER_NAME = "Programiz JavaScript Compiler";
export const COMPILER_URL = "https://www.programiz.com/javascript/online-compiler/";

export const SITE_NAME = "Full-Stack Interview Prep Book";
export const SITE_TAGLINE =
  "Free, structured MERN / React + Node.js interview preparation — JavaScript, React, Node.js, NestJS, MongoDB, system design, DSA, and HR rounds.";

// Target employers. Surfaced on the landing page and folded into SEO keywords so
// the site is discoverable for "<company> interview preparation" queries.
export const COMPANIES: string[] = [
  "TCS",
  "Infosys",
  "Wipro",
  "Accenture",
  "Cognizant",
  "HCLTech",
  "Tech Mahindra",
  "Capgemini",
  "IBM",
  "Deloitte",
  "Google",
  "Amazon",
  "Microsoft",
  "Meta",
  "Oracle",
  "SAP",
  "Adobe",
  "Flipkart",
  "Paytm",
  "Zoho",
  "Swiggy",
  "PhonePe",
];

// Keyword list for <meta name="keywords"> and OpenGraph.
export const SEO_KEYWORDS: string[] = [
  "full stack interview preparation",
  "MERN stack interview questions",
  "React interview questions",
  "Node.js interview questions",
  "JavaScript interview questions",
  "NestJS interview questions",
  "MongoDB interview questions",
  "system design interview",
  "DSA coding questions",
  "frontend interview prep",
  "backend interview prep",
  ...COMPANIES.map((c) => `${c} interview preparation`),
];
