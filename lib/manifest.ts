export type Chapter = {
  num: string;
  file: string;   // filename within the folder, e.g. "01-closures.md"
  title: string;
};

export type Section = {
  title: string;
  folder: string; // "" for root-level files
  chapters: Chapter[];
};

export const MANIFEST: Section[] = [
  {
    title: "Getting Started",
    folder: "",
    chapters: [
      { num: "•", file: "README.md", title: "Home / Index" },
    ],
  },
  {
    title: "JavaScript",
    folder: "01-javascript",
    chapters: [
      { num: "01", file: "01-closures.md",          title: "Closures" },
      { num: "02", file: "02-hoisting.md",          title: "Hoisting" },
      { num: "03", file: "03-scope.md",             title: "Scope" },
      { num: "04", file: "04-this-keyword.md",      title: "`this` Keyword" },
      { num: "05", file: "05-prototype.md",         title: "Prototype" },
      { num: "06", file: "06-equality.md",          title: "Equality" },
      { num: "07", file: "07-event-handling.md",    title: "Event Handling" },
      { num: "08", file: "08-array-methods.md",     title: "Array Methods" },
      { num: "09", file: "09-promises.md",          title: "Promises" },
      { num: "10", file: "10-debounce-throttle.md", title: "Debounce / Throttle" },
    ],
  },
  {
    title: "React",
    folder: "02-react",
    chapters: [
      { num: "11", file: "01-functional-components.md",      title: "Functional Components" },
      { num: "12", file: "02-props-vs-state.md",             title: "Props vs State" },
      { num: "13", file: "03-useeffect.md",                  title: "useEffect" },
      { num: "14", file: "04-usememo-usecallback.md",        title: "useMemo / useCallback" },
      { num: "15", file: "05-useref.md",                     title: "useRef" },
      { num: "16", file: "06-controlled-uncontrolled.md",    title: "Controlled / Uncontrolled" },
      { num: "17", file: "07-context-api.md",                title: "Context API" },
      { num: "18", file: "08-custom-hooks.md",               title: "Custom Hooks" },
      { num: "19", file: "09-virtual-dom-reconciliation.md", title: "Virtual DOM & Reconciliation" },
      { num: "20", file: "10-performance-optimization.md",   title: "Performance Optimization" },
      { num: "21", file: "11-redux-toolkit.md",              title: "Redux Toolkit" },
    ],
  },
  {
    title: "Node.js",
    folder: "03-nodejs",
    chapters: [
      { num: "22", file: "01-event-loop.md",          title: "Event Loop" },
      { num: "23", file: "02-async-await.md",         title: "async/await" },
      { num: "24", file: "03-middleware.md",          title: "Middleware" },
      { num: "25", file: "04-jwt-auth.md",            title: "JWT Authentication" },
      { num: "26", file: "05-rest-best-practices.md", title: "REST Best Practices" },
      { num: "27", file: "06-mvc-architecture.md",    title: "MVC Architecture" },
      { num: "28", file: "07-error-handling.md",      title: "Error Handling" },
      { num: "29", file: "08-file-upload-s3.md",      title: "File Upload (S3)" },
      { num: "30", file: "09-pagination.md",          title: "Pagination" },
      { num: "31", file: "10-rate-limiting.md",       title: "Rate Limiting" },
    ],
  },
  {
    title: "Express / NestJS",
    folder: "04-express-nestjs",
    chapters: [
      { num: "32", file: "01-express-vs-nestjs.md",              title: "Express vs NestJS" },
      { num: "33", file: "02-dependency-injection.md",           title: "Dependency Injection" },
      { num: "34", file: "03-dtos-validation.md",                title: "DTOs & Validation" },
      { num: "35", file: "04-guards-middleware-interceptors.md", title: "Guards / Interceptors" },
      { num: "36", file: "05-swagger.md",                        title: "Swagger / OpenAPI" },
    ],
  },
  {
    title: "MongoDB",
    folder: "05-mongodb",
    chapters: [
      { num: "37", file: "01-mongoose-schemas.md",   title: "Mongoose Schemas" },
      { num: "38", file: "02-indexing.md",           title: "Indexing" },
      { num: "39", file: "03-aggregation.md",        title: "Aggregation Pipeline" },
      { num: "40", file: "04-populate-vs-lookup.md", title: "populate vs $lookup" },
      { num: "41", file: "05-sql-vs-nosql.md",       title: "SQL vs NoSQL" },
    ],
  },
  {
    title: "Machine Coding",
    folder: "06-machine-coding",
    chapters: [
      { num: "42", file: "01-frontend-tasks.md", title: "Frontend Tasks" },
      { num: "43", file: "02-backend-tasks.md",  title: "Backend Tasks" },
    ],
  },
  {
    title: "System Design",
    folder: "07-system-design",
    chapters: [
      { num: "44", file: "01-authentication.md",             title: "Authentication" },
      { num: "45", file: "02-scalable-apis.md",              title: "Scalable APIs" },
      { num: "46", file: "03-caching.md",                    title: "Caching" },
      { num: "47", file: "04-monolith-vs-microservices.md",  title: "Monolith vs Microservices" },
      { num: "48", file: "05-api-security.md",               title: "API Security" },
    ],
  },
  {
    title: "HR & Behavioral",
    folder: "08-hr-behavioral",
    chapters: [
      { num: "49", file: "01-self-introduction.md", title: "Self-Introduction" },
      { num: "50", file: "02-common-questions.md",  title: "Common Questions" },
    ],
  },
  {
    title: "Company Specific Questions",
    folder: "12-company-questions",
    chapters: [
      { num: "51", file: "01-tcs.md", title: "TCS" },
      { num: "52", file: "02-amazon.md", title: "Amazon" },
      { num: "53", file: "03-infosys.md", title: "Infosys" },
      { num: "54", file: "04-google.md", title: "Google" },
      { num: "55", file: "05-microsoft.md", title: "Microsoft" },
      { num: "56", file: "06-meta.md", title: "Meta" },
      { num: "57", file: "07-wipro.md", title: "Wipro" },
      { num: "58", file: "08-accenture.md", title: "Accenture" },
      { num: "59", file: "09-cognizant.md", title: "Cognizant" },
      { num: "60", file: "10-hcltech.md", title: "HCLTech" },
      { num: "61", file: "11-tech-mahindra.md", title: "Tech Mahindra" },
      { num: "62", file: "12-capgemini.md", title: "Capgemini" },
      { num: "63", file: "13-ibm.md", title: "IBM" },
      { num: "64", file: "14-deloitte.md", title: "Deloitte" },
      { num: "65", file: "15-oracle.md", title: "Oracle" },
      { num: "66", file: "16-sap.md", title: "SAP" },
      { num: "67", file: "17-adobe.md", title: "Adobe" },
      { num: "68", file: "18-flipkart.md", title: "Flipkart" },
      { num: "69", file: "19-paytm.md", title: "Paytm" },
      { num: "70", file: "20-zoho.md", title: "Zoho" },
      { num: "71", file: "21-swiggy.md", title: "Swiggy" },
      { num: "72", file: "22-phonepe.md", title: "PhonePe" },
      { num: "73", file: "23-other.md", title: "Other Companies" },
    ],
  },
  {
    title: "DSA & Coding",
    folder: "",
    chapters: [
      { num: "74", file: "11-dsa-coding-questions.md", title: "Coding Question Tracker" },
    ],
  },
  {
    title: "Reference",
    folder: "",
    chapters: [
      { num: "75", file: "09-revision-sheet.md", title: "Night-Before Revision" },
      { num: "76", file: "10-appendix.md",       title: "Documents & Q&A" },
    ],
  },
  {
    title: "AI / LLM Engineering",
    folder: "13-ai",
    chapters: [
      { num: "77", file: "01-llm-fundamentals.md",         title: "LLM Fundamentals" },
      { num: "78", file: "02-prompt-engineering.md",        title: "Prompt Engineering" },
      { num: "79", file: "03-embeddings-vector-search.md",  title: "Embeddings & Vector Search" },
      { num: "80", file: "04-rag.md",                       title: "RAG Pipeline" },
      { num: "81", file: "05-tool-calling.md",              title: "Tool / Function Calling" },
      { num: "82", file: "06-ai-agents.md",                 title: "AI Agents & MCP" },
      { num: "83", file: "07-streaming-responses.md",       title: "Streaming Responses" },
      { num: "84", file: "08-rag-vs-finetuning.md",         title: "RAG vs Fine-Tuning" },
      { num: "85", file: "09-evaluation-hallucination.md",  title: "Evaluation & Hallucination" },
      { num: "86", file: "10-ai-security.md",               title: "AI Security" },
      { num: "87", file: "11-cost-latency-optimization.md", title: "Cost & Latency Optimization" },
    ],
  },
];

// The DSA chapter is rendered as an interactive checklist instead of static
// markdown, so a few modules need to recognise it by path.
export const DSA_PATH = "11-dsa-coding-questions.md";

export type FlatChapter = Chapter & {
  section: string;
  folder: string;
  path: string;     // "01-javascript/01-closures.md" or "README.md"
  slug: string[];   // ["01-javascript", "01-closures"] or ["readme"]
};

export const FLAT: FlatChapter[] = MANIFEST.flatMap((section) =>
  section.chapters.map((ch) => {
    const path = section.folder ? `${section.folder}/${ch.file}` : ch.file;
    const base = ch.file.replace(/\.md$/, "").toLowerCase();
    const slug = section.folder
      ? [section.folder, base]
      : [base];
    return { ...ch, section: section.title, folder: section.folder, path, slug };
  }),
);

export function findBySlug(slug: string[]): FlatChapter | undefined {
  const key = slug.join("/").toLowerCase();
  return FLAT.find((f) => f.slug.join("/") === key);
}
