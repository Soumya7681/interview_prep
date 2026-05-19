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
    title: "Reference",
    folder: "",
    chapters: [
      { num: "51", file: "09-revision-sheet.md", title: "Night-Before Revision" },
      { num: "52", file: "10-appendix.md",       title: "Documents & Q&A" },
    ],
  },
];

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
