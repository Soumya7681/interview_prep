import type { RoadmapTrack } from "@/lib/roadmaps";

/**
 * Web & Mobile tracks.
 *
 * Type-only import of RoadmapTrack, so there is no runtime cycle with
 * lib/roadmaps.ts even though that module imports this array.
 *
 * Node ids are the localStorage progress key and must stay unique across every
 * track in the catalogue — hence the per-track prefix on each one.
 */
export const WEB_MOBILE_TRACKS: RoadmapTrack[] = [
  {
    slug: "frontend-engineer",
    title: "Frontend Engineer",
    shortTitle: "Frontend",
    category: "Web & Mobile",
    mark: "FE",
    tagline:
      "Build the part of the product people actually touch: accessible, fast, and correct on every device you cannot test on.",
    market:
      "The largest single hiring pool in web development. Every product company, agency, and enterprise IT department hires for it, and the ceiling is high once you own performance and accessibility rather than just components.",
    timeline: "5-8 months part-time",
    entryBar: "HTML, CSS and JavaScript at working level. No degree expected.",
    updated: "2026-08-31",
    prerequisites: [
      "HTML and CSS you can write without copying",
      "JavaScript fundamentals: closures, promises, array methods",
      "Git and a deployed personal site",
    ],
    stages: [
      {
        id: "fe-s1",
        title: "The language under the framework",
        duration: "4-6 weeks",
        goal: "Interviewers probe JavaScript, not React. Fix the foundation before the framework.",
        build:
          "A vanilla JS single-page app with client-side routing and no build step. No framework allowed.",
        nodes: [
          {
            id: "fe-js-core",
            label: "JavaScript deep dive",
            summary:
              "The questions that decide frontend interviews are almost always plain JavaScript, asked about framework code.",
            topics: [
              "Closures, scope chains and the module pattern",
              "Prototypes, `this` binding, call/apply/bind",
              "Event loop: microtasks vs macrotasks",
              "Immutability, structural sharing, and why it matters to React",
            ],
            ref: { href: "/01-javascript/01-closures", label: "Ch 1 — Closures" },
          },
          {
            id: "fe-dom",
            label: "DOM and events",
            summary:
              "Frameworks are a layer over the DOM. Knowing the layer underneath is what separates senior from mid.",
            topics: [
              "Event delegation, bubbling and capture",
              "Reflow vs repaint, and what triggers layout",
              "MutationObserver, IntersectionObserver, ResizeObserver",
              "Shadow DOM and custom elements",
            ],
          },
          {
            id: "fe-css-arch",
            label: "Modern CSS and layout",
            summary:
              "Flexbox and grid are table stakes. Container queries and cascade layers are the current interview edge.",
            topics: [
              "Grid and flexbox: when each is the right answer",
              "Container queries and `:has()`",
              "Cascade layers, custom properties, specificity",
              "Logical properties and writing-mode-safe layout",
            ],
          },
          {
            id: "fe-typescript",
            label: "TypeScript for UI code",
            summary:
              "Almost every frontend job posting now assumes TypeScript. Generics over component props are the usual test.",
            topics: [
              "Structural typing, unions, narrowing",
              "Generics in component props and hooks",
              "Discriminated unions for UI state",
              "`unknown` vs `any`, and typing third-party data",
            ],
          },
          {
            id: "fe-http",
            label: "The browser as a client",
            summary:
              "How a request actually reaches your component, and everything that can go wrong on the way.",
            topics: [
              "HTTP caching headers and the browser cache",
              "CORS, preflight, and credentialed requests",
              "Cookies: SameSite, Secure, HttpOnly",
              "AbortController and request cancellation",
            ],
          },
        ],
      },
      {
        id: "fe-s2",
        title: "React in depth",
        duration: "5-7 weeks",
        goal: "Move past 'I can build a to-do app' to reasoning about renders, state ownership and data flow.",
        build:
          "A dashboard with server data, optimistic updates, and a table that stays smooth at 10,000 rows.",
        nodes: [
          {
            id: "fe-react-model",
            label: "The rendering model",
            summary:
              "Why a component re-rendered is the single most common React interview question.",
            topics: [
              "Reconciliation, keys, and list identity",
              "When memo, useMemo and useCallback actually help",
              "Referential identity and the dependency array",
              "Batching and transitions",
            ],
            ref: { href: "/02-react/01-functional-components", label: "Ch — Functional Components" },
          },
          {
            id: "fe-state",
            label: "State architecture",
            summary:
              "Most React bugs are state in the wrong place. Interviewers ask you to move it.",
            topics: [
              "Local vs lifted vs global state",
              "Server state vs client state",
              "Reducers and state machines for complex flows",
              "Context: what it costs and when to avoid it",
            ],
          },
          {
            id: "fe-data",
            label: "Data fetching patterns",
            summary:
              "Caching, revalidation and race conditions — the parts a useEffect fetch gets wrong.",
            topics: [
              "TanStack Query: cache keys, staleness, invalidation",
              "Optimistic updates and rollback",
              "Race conditions and stale responses",
              "Suspense and streaming",
            ],
          },
          {
            id: "fe-forms",
            label: "Forms and validation",
            kind: "recommended",
            summary:
              "Every real product is mostly forms. Controlled vs uncontrolled is a standing interview question.",
            topics: [
              "Controlled vs uncontrolled inputs",
              "Schema validation with Zod",
              "Server-side validation and error mapping",
              "Accessible error messaging",
            ],
          },
          {
            id: "fe-ssr",
            label: "SSR, SSG and the server boundary",
            summary:
              "Next.js and friends moved the interview from 'client only' to 'where does this code run'.",
            topics: [
              "Server vs client components",
              "Hydration and hydration mismatches",
              "Static, incremental and dynamic rendering",
              "Data loading on the server, and what leaks to the client",
            ],
          },
        ],
      },
      {
        id: "fe-s3",
        title: "Performance and accessibility",
        duration: "4-5 weeks",
        goal: "The two areas that separate a frontend engineer from someone who can use a framework.",
        build:
          "Take a slow page to green Core Web Vitals and a clean axe audit. Publish the before and after numbers.",
        nodes: [
          {
            id: "fe-vitals",
            label: "Core Web Vitals",
            summary:
              "LCP, INP and CLS are the vocabulary hiring managers use. Know what moves each one.",
            topics: [
              "LCP: the critical request chain",
              "INP: long tasks and input delay",
              "CLS: reserved space and font swapping",
              "Field data vs lab data",
            ],
          },
          {
            id: "fe-bundle",
            label: "Bundles and loading",
            summary:
              "Shipping less JavaScript is the highest-leverage performance work in most codebases.",
            topics: [
              "Code splitting and route-level chunks",
              "Tree shaking and side-effect flags",
              "Preload, prefetch, and priority hints",
              "Image formats, sizing and lazy loading",
            ],
          },
          {
            id: "fe-render-perf",
            label: "Runtime performance",
            summary:
              "Profiling a janky list under time pressure is a common live exercise.",
            topics: [
              "Chrome performance profiler and flame charts",
              "Virtualised lists and windowing",
              "Debounce, throttle, and scheduling work",
              "Web workers for expensive computation",
            ],
          },
          {
            id: "fe-a11y",
            label: "Accessibility",
            summary:
              "Increasingly a hard requirement rather than a nice-to-have, especially in public sector and enterprise.",
            topics: [
              "Semantic HTML and the accessibility tree",
              "Keyboard navigation and focus management",
              "ARIA: roles, states, and when not to use it",
              "WCAG 2.2 AA and colour contrast",
            ],
          },
          {
            id: "fe-i18n",
            label: "Internationalisation",
            kind: "optional",
            summary:
              "Matters at any company with users outside one country. Often a differentiator, rarely a blocker.",
            topics: [
              "Message catalogues and pluralisation",
              "Intl APIs for dates, numbers and currency",
              "RTL layout with logical properties",
              "Locale-aware routing",
            ],
          },
        ],
      },
      {
        id: "fe-s4",
        title: "Testing and tooling",
        duration: "3-4 weeks",
        goal: "Prove your code works without clicking through it, and keep the build honest.",
        build:
          "Add a test suite to an existing project: unit, component and one end-to-end happy path, running in CI.",
        nodes: [
          {
            id: "fe-testing",
            label: "Testing the UI",
            summary:
              "Testing Library's 'test what the user sees' philosophy is the expected answer in interviews.",
            topics: [
              "Testing Library queries and user-event",
              "Mocking the network with MSW",
              "What to unit test vs what to end-to-end test",
              "Snapshot tests and why they rot",
            ],
          },
          {
            id: "fe-e2e",
            label: "End-to-end testing",
            summary:
              "Playwright has become the default answer. Flakiness management is the real skill.",
            topics: [
              "Playwright selectors and auto-waiting",
              "Test isolation and fixtures",
              "Visual regression testing",
              "Running against preview deployments",
            ],
          },
          {
            id: "fe-build",
            label: "Build tooling",
            summary:
              "You will be asked why the build is slow and what you would do about it.",
            topics: [
              "Vite, esbuild and the dev/prod split",
              "Source maps and debugging production",
              "Monorepos: workspaces and task caching",
              "Dependency hygiene and bundle analysis",
            ],
          },
          {
            id: "fe-ci",
            label: "CI and preview deploys",
            summary:
              "Shipping safely is part of the job description at every level above junior.",
            topics: [
              "GitHub Actions for lint, test and build",
              "Preview environments per pull request",
              "Bundle size budgets in CI",
              "Feature flags and safe rollout",
            ],
          },
          {
            id: "fe-errors",
            label: "Monitoring in production",
            kind: "recommended",
            summary:
              "'How would you find out this broke for users?' is a standard senior question.",
            topics: [
              "Error boundaries and error reporting",
              "Source-mapped stack traces",
              "Real user monitoring",
              "Session replay and privacy trade-offs",
            ],
          },
        ],
      },
      {
        id: "fe-s5",
        title: "Interview and portfolio",
        duration: "3-4 weeks",
        goal: "Frontend interviews have their own shape: a machine-coding round and a UI system design round.",
        build:
          "Two polished projects with a written README covering the architecture decisions and the trade-offs you rejected.",
        nodes: [
          {
            id: "fe-machine-coding",
            label: "Machine coding rounds",
            summary:
              "Build a working component in 60-90 minutes. Practised candidates pass; unpractised ones run out of time.",
            topics: [
              "Autocomplete with debounce and cancellation",
              "Infinite scroll and virtualisation",
              "Modal, tabs and accordion with full keyboard support",
              "Star rating, carousel, drag-and-drop list",
            ],
          },
          {
            id: "fe-ui-design",
            label: "Frontend system design",
            summary:
              "Design a feed, a chat, or a design system. Component boundaries and data flow are what is scored.",
            topics: [
              "Component API design and composition",
              "Client caching and pagination strategy",
              "Real-time updates: polling, SSE, WebSocket",
              "Design tokens and theming",
            ],
          },
          {
            id: "fe-dsa",
            label: "DSA for frontend",
            summary:
              "Lighter than backend interviews, but arrays, strings, trees and recursion still appear.",
            topics: [
              "Arrays, strings, hash maps",
              "Tree traversal (the DOM is a tree)",
              "Recursion and memoisation",
              "Complexity analysis in plain language",
            ],
            ref: { href: "/11-dsa-coding-questions", label: "DSA Coding Questions" },
          },
          {
            id: "fe-portfolio",
            label: "Portfolio that survives review",
            summary:
              "Two deep projects beat ten tutorials. Reviewers open the repo before they open the site.",
            topics: [
              "README with architecture and trade-offs",
              "Live deployment with real data",
              "Lighthouse and axe scores in the README",
              "Commit history that shows iteration",
            ],
          },
          {
            id: "fe-behavioural",
            label: "Behavioural round",
            summary:
              "Frontend roles sit next to design and product. Collaboration stories carry real weight.",
            topics: [
              "Disagreeing with a design decision",
              "Shipping under a deadline with known debt",
              "Explaining a technical trade-off to a non-engineer",
              "A bug you caused and what you changed after",
            ],
          },
        ],
      },
    ],
    tools: [
      "TypeScript",
      "React",
      "Next.js",
      "Vite",
      "TanStack Query",
      "Playwright",
      "Testing Library",
      "Lighthouse",
      "axe",
    ],
    proofOfWork: [
      "A deployed app with green Core Web Vitals, numbers shown in the README",
      "A component library with keyboard and screen-reader support documented",
      "A before/after performance case study with real measurements",
      "A machine-coding repo: ten components built to interview time limits",
    ],
  },

  {
    slug: "backend-engineer",
    title: "Backend Engineer",
    shortTitle: "Backend",
    category: "Web & Mobile",
    mark: "BE",
    tagline:
      "Own the data, the contracts and the failure modes: APIs that stay correct under load and under partial failure.",
    market:
      "Consistently the deepest hiring pool alongside frontend, and the usual route into distributed systems and platform work. Node, Java, Python, Go and .NET all hire heavily.",
    timeline: "6-9 months part-time",
    entryBar: "One language at working level and comfort with SQL basics.",
    updated: "2026-08-31",
    prerequisites: [
      "One backend language: Node/TypeScript, Python, Java or Go",
      "SQL: joins, indexes, and reading a query plan",
      "Git, Linux command line, and HTTP fundamentals",
    ],
    stages: [
      {
        id: "be-s1",
        title: "APIs that hold up",
        duration: "4-6 weeks",
        goal: "Design and build an API a second team could consume without asking you questions.",
        build:
          "A REST API with authentication, pagination, validation, and an OpenAPI spec generated from the code.",
        nodes: [
          {
            id: "be-http",
            label: "HTTP and REST properly",
            summary:
              "Most candidates know the verbs. Fewer can explain idempotency or correct status codes under failure.",
            topics: [
              "Verbs, status codes, and idempotency",
              "Caching headers, ETags and conditional requests",
              "Content negotiation and versioning strategies",
              "Pagination: offset vs cursor",
            ],
            ref: { href: "/03-nodejs/01-event-loop", label: "Ch — Node.js Event Loop" },
          },
          {
            id: "be-validation",
            label: "Validation and contracts",
            summary:
              "The boundary between your service and the world is where most production bugs enter.",
            topics: [
              "Schema validation at the edge",
              "OpenAPI / JSON Schema as the contract",
              "Error shapes and problem+json",
              "Backwards-compatible API evolution",
            ],
          },
          {
            id: "be-auth",
            label: "Authentication and authorisation",
            summary:
              "Asked in almost every backend interview, and answered badly in most of them.",
            topics: [
              "Sessions vs JWT, and when each is wrong",
              "OAuth 2.1 and OIDC flows",
              "Refresh token rotation and revocation",
              "RBAC vs ABAC, and enforcing it in one place",
            ],
          },
          {
            id: "be-graphql",
            label: "GraphQL and gRPC",
            kind: "recommended",
            summary:
              "Knowing when not to use REST is a senior signal. Both appear in job specs regularly.",
            topics: [
              "GraphQL schema design and the N+1 problem",
              "DataLoader and batching",
              "gRPC, protobuf and streaming",
              "Choosing between REST, GraphQL and RPC",
            ],
          },
          {
            id: "be-layering",
            label: "Application structure",
            summary:
              "Layering and dependency direction are what code review actually catches you on.",
            topics: [
              "Controllers, services and repositories",
              "Dependency injection and testability",
              "Domain modelling basics",
              "Configuration and the twelve-factor app",
            ],
          },
        ],
      },
      {
        id: "be-s2",
        title: "Databases in anger",
        duration: "5-7 weeks",
        goal: "The single highest-value backend skill: knowing why a query is slow and what to do about it.",
        build:
          "Load ten million rows, find the slow queries, and fix them with indexes and schema changes. Document the plans before and after.",
        nodes: [
          {
            id: "be-sql",
            label: "SQL beyond SELECT",
            summary:
              "Window functions and CTEs come up constantly once you are past the junior filter.",
            topics: [
              "Joins, subqueries and CTEs",
              "Window functions for ranking and running totals",
              "Aggregations and GROUP BY semantics",
              "NULL behaviour and three-valued logic",
            ],
            ref: { href: "/05-mongodb/01-mongoose-schemas", label: "Ch — Mongoose Schemas" },
          },
          {
            id: "be-indexing",
            label: "Indexing and query plans",
            summary:
              "'This query is slow, here is the plan, what would you do?' is a standard live exercise.",
            topics: [
              "B-tree, composite and covering indexes",
              "Reading EXPLAIN ANALYZE",
              "Selectivity, cardinality and index choice",
              "When an index makes things worse",
            ],
          },
          {
            id: "be-transactions",
            label: "Transactions and isolation",
            summary:
              "Isolation levels are where interviews separate people who have run production databases from people who have not.",
            topics: [
              "ACID and the four isolation levels",
              "Lost updates, phantom reads, write skew",
              "Optimistic vs pessimistic locking",
              "Deadlocks: causes and avoidance",
            ],
          },
          {
            id: "be-modelling",
            label: "Data modelling",
            summary:
              "Normalisation, and the deliberate decision to denormalise, with reasons.",
            topics: [
              "Normal forms and when to break them",
              "Soft deletes, audit trails, temporal data",
              "Migrations that run against live traffic",
              "Document vs relational trade-offs",
            ],
          },
          {
            id: "be-nosql",
            label: "NoSQL and caching stores",
            summary:
              "Picking the right store, and being able to defend the choice, is the actual test.",
            topics: [
              "MongoDB document design and indexing",
              "Redis data structures and eviction policies",
              "Cache invalidation strategies",
              "Search engines: when you need one",
            ],
          },
        ],
      },
      {
        id: "be-s3",
        title: "Distributed behaviour",
        duration: "5-6 weeks",
        goal: "Systems that keep working when a dependency is slow, down, or lying to you.",
        build:
          "Split one service in two, connect them with a queue, and make the flow survive a consumer crash without losing or duplicating work.",
        nodes: [
          {
            id: "be-queues",
            label: "Queues and async work",
            summary:
              "Background jobs are in nearly every backend codebase and nearly every backend interview.",
            topics: [
              "Producer/consumer with Kafka, SQS or RabbitMQ",
              "At-least-once delivery and idempotent consumers",
              "Dead letter queues and poison messages",
              "Ordering guarantees and partitioning",
            ],
          },
          {
            id: "be-resilience",
            label: "Failure and resilience",
            summary:
              "Retries without backoff are how one slow service takes down four others.",
            topics: [
              "Timeouts, retries and exponential backoff with jitter",
              "Circuit breakers and bulkheads",
              "Graceful degradation and fallbacks",
              "Backpressure and load shedding",
            ],
          },
          {
            id: "be-consistency",
            label: "Consistency and coordination",
            summary:
              "The vocabulary senior interviews expect: CAP, eventual consistency, and the saga pattern.",
            topics: [
              "CAP and PACELC in practical terms",
              "Eventual consistency and read-your-writes",
              "Sagas and compensating transactions",
              "Outbox pattern for reliable publishing",
            ],
          },
          {
            id: "be-caching",
            label: "Caching strategy",
            summary:
              "Where to cache, how to invalidate, and how to avoid a stampede when it expires.",
            topics: [
              "Cache-aside, write-through, write-behind",
              "TTL choice and cache stampede prevention",
              "CDN and edge caching",
              "Cache key design and hot keys",
            ],
          },
          {
            id: "be-observability",
            label: "Observability",
            summary:
              "'The API is slow' — walk me through how you find out why. Expect this question.",
            topics: [
              "Structured logging with correlation ids",
              "RED and USE metrics",
              "Distributed tracing with OpenTelemetry",
              "Alerting on symptoms, not causes",
            ],
          },
        ],
      },
      {
        id: "be-s4",
        title: "Running it in production",
        duration: "4-5 weeks",
        goal: "Backend engineers are expected to own deployment and operations, not hand them over.",
        build:
          "Containerise a service, deploy it with zero-downtime rollout, and add a dashboard plus one meaningful alert.",
        nodes: [
          {
            id: "be-containers",
            label: "Containers and deployment",
            summary:
              "Docker literacy is assumed. Multi-stage builds and small images are the differentiator.",
            topics: [
              "Dockerfiles and multi-stage builds",
              "Health checks and graceful shutdown",
              "Rolling, blue/green and canary deploys",
              "Configuration and secrets injection",
            ],
          },
          {
            id: "be-security",
            label: "Backend security",
            summary:
              "OWASP Top 10 questions appear in most backend loops and almost all of them in fintech.",
            topics: [
              "Injection, SSRF, IDOR and mass assignment",
              "Password storage and rate limiting",
              "Secrets management and key rotation",
              "Dependency and supply-chain scanning",
            ],
          },
          {
            id: "be-perf",
            label: "Performance and load",
            summary:
              "Numbers beat adjectives. Being able to produce a load test result is a strong signal.",
            topics: [
              "Load testing with k6 and interpreting results",
              "Connection pooling and pool sizing",
              "Profiling CPU and memory",
              "N+1 queries and batch loading",
            ],
          },
          {
            id: "be-testing",
            label: "Testing backends",
            summary:
              "Testcontainers changed the standard answer: test against the real database.",
            topics: [
              "Unit vs integration vs contract tests",
              "Testcontainers for real dependencies",
              "Contract testing between services",
              "Seeding and test data management",
            ],
          },
          {
            id: "be-cost",
            label: "Cost awareness",
            kind: "recommended",
            summary:
              "Increasingly asked at senior level: what does your design cost to run?",
            topics: [
              "Cost of egress, storage and compute",
              "Right-sizing and autoscaling",
              "Query cost and read replicas",
              "Build vs buy for infrastructure",
            ],
          },
        ],
      },
      {
        id: "be-s5",
        title: "System design and interviews",
        duration: "4-6 weeks",
        goal: "The round that decides your level and your offer band.",
        build:
          "Write three design documents for systems you have not built, each with capacity estimates and a rejected alternative.",
        nodes: [
          {
            id: "be-sysdesign",
            label: "System design round",
            summary:
              "Structure beats brilliance. A repeatable method is what interviewers are scoring.",
            topics: [
              "Requirements, scale estimates, and constraints first",
              "API design, then data model, then bottleneck",
              "Sharding, replication and read scaling",
              "Trade-off articulation and rejected options",
            ],
            ref: { href: "/07-system-design/02-scalable-apis", label: "Ch — Scalable APIs" },
          },
          {
            id: "be-dsa",
            label: "DSA for backend",
            summary:
              "Heavier than frontend interviews. Graphs and heaps do appear at product companies.",
            topics: [
              "Arrays, hash maps, two pointers, sliding window",
              "Trees, graphs, BFS and DFS",
              "Heaps and priority queues",
              "Time and space complexity under pressure",
            ],
            ref: { href: "/11-dsa-coding-questions", label: "DSA Coding Questions" },
          },
          {
            id: "be-lld",
            label: "Low-level design",
            summary:
              "Very common in Indian product and service company loops: design classes for a real problem.",
            topics: [
              "SOLID applied to a real feature",
              "Common patterns: strategy, factory, observer",
              "Designing for testability",
              "Concurrency in object design",
            ],
          },
          {
            id: "be-debug",
            label: "Production debugging round",
            summary:
              "An increasingly common format: here is an incident, find the cause.",
            topics: [
              "Reading logs, traces and metrics together",
              "Bisecting a regression",
              "Reproducing under load",
              "Writing the postmortem",
            ],
          },
          {
            id: "be-behavioural",
            label: "Behavioural and ownership",
            summary:
              "Backend interviews weight ownership stories heavily — you are being trusted with data.",
            topics: [
              "An incident you owned end to end",
              "A migration you ran without downtime",
              "Pushing back on an unsafe deadline",
              "Mentoring and code review stories",
            ],
          },
        ],
      },
    ],
    tools: [
      "TypeScript / Python / Go",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "Docker",
      "OpenTelemetry",
      "k6",
      "Testcontainers",
    ],
    proofOfWork: [
      "An API with an OpenAPI spec, auth, and a published rate limit policy",
      "A query optimisation write-up with EXPLAIN plans before and after",
      "A service that survives a chaos test: killed consumer, no lost messages",
      "Three system design documents with capacity estimates",
    ],
  },

  {
    slug: "full-stack-engineer",
    title: "Full-Stack Engineer",
    shortTitle: "Full-Stack",
    category: "Web & Mobile",
    mark: "FS",
    tagline:
      "Own a feature from database to pixel. The default hire at startups and the most common job title in the market.",
    market:
      "The broadest job title in software. Startups hire almost exclusively for it, and agencies and product teams treat it as the baseline. Breadth gets you hired; one deep spike gets you levelled.",
    timeline: "8-12 months part-time",
    entryBar: "Comfortable in JavaScript or Python and willing to be uncomfortable in the other half.",
    updated: "2026-08-31",
    prerequisites: [
      "JavaScript and one backend language",
      "HTML, CSS and basic SQL",
      "Git, GitHub, and a deployed project",
    ],
    stages: [
      {
        id: "fs-s1",
        title: "One vertical slice",
        duration: "5-7 weeks",
        goal: "Ship one feature through every layer before widening. Depth first, then breadth.",
        build:
          "An authenticated CRUD app: database, API, UI, deployed with a real domain and HTTPS.",
        nodes: [
          {
            id: "fs-js-ts",
            label: "JavaScript and TypeScript",
            summary:
              "The shared language across both halves of the stack, and the one interviewers probe hardest.",
            topics: [
              "Closures, promises, async/await",
              "TypeScript generics and narrowing",
              "Module systems and bundling",
              "Error handling across async boundaries",
            ],
            ref: { href: "/01-javascript/01-closures", label: "Ch 1 — Closures" },
          },
          {
            id: "fs-react",
            label: "React fundamentals",
            summary:
              "Component model, state and effects — enough to build product UI without fighting the framework.",
            topics: [
              "Components, props and composition",
              "State, effects and the dependency array",
              "Lists, keys and conditional rendering",
              "Routing and layouts",
            ],
          },
          {
            id: "fs-api",
            label: "Building the API",
            summary:
              "REST, validation and errors. The contract between your two halves.",
            topics: [
              "REST design and status codes",
              "Request validation and error shapes",
              "Middleware, logging and request context",
              "OpenAPI documentation",
            ],
          },
          {
            id: "fs-db",
            label: "Database and ORM",
            summary:
              "Schema design and migrations, plus enough SQL to escape the ORM when it fails you.",
            topics: [
              "Schema design and relationships",
              "Migrations and rollback",
              "ORM query patterns and their SQL output",
              "Indexes and the N+1 problem",
            ],
          },
          {
            id: "fs-auth",
            label: "Auth end to end",
            summary:
              "Sessions or tokens, on both sides of the wire. The most common full-stack take-home.",
            topics: [
              "Session cookies vs JWT",
              "Password hashing and reset flows",
              "Protected routes on client and server",
              "OAuth social login",
            ],
          },
        ],
      },
      {
        id: "fs-s2",
        title: "Production quality",
        duration: "5-6 weeks",
        goal: "The difference between a demo and something a team would let you deploy on a Friday.",
        build:
          "Add tests, CI, error tracking and a staging environment to the app from stage 1.",
        nodes: [
          {
            id: "fs-testing",
            label: "Testing both halves",
            summary:
              "Full-stack testing means knowing what to test at which layer, and not testing everything twice.",
            topics: [
              "Component tests with Testing Library",
              "API integration tests against a real database",
              "One end-to-end happy path with Playwright",
              "Test data and fixtures",
            ],
          },
          {
            id: "fs-cicd",
            label: "CI/CD and environments",
            summary:
              "Being the person who set up the pipeline is a strong signal at startup interviews.",
            topics: [
              "GitHub Actions: lint, test, build, deploy",
              "Staging vs production configuration",
              "Database migrations in the pipeline",
              "Rollback plan",
            ],
          },
          {
            id: "fs-observability",
            label: "Logging and error tracking",
            summary:
              "Knowing something broke before your users tell you.",
            topics: [
              "Structured logs with request ids",
              "Error tracking on client and server",
              "Uptime checks and alerting",
              "Basic dashboards",
            ],
          },
          {
            id: "fs-security",
            label: "Security basics",
            summary:
              "XSS, CSRF, injection and secrets. Enough to not be the reason for the breach.",
            topics: [
              "OWASP Top 10 in practice",
              "CSRF protection and SameSite cookies",
              "Input sanitisation and output encoding",
              "Secrets and environment configuration",
            ],
          },
          {
            id: "fs-perf",
            label: "Performance across the stack",
            summary:
              "The full-stack advantage: you can tell whether the problem is the query or the bundle.",
            topics: [
              "Core Web Vitals on the frontend",
              "Query profiling on the backend",
              "Caching at both layers",
              "Image and asset optimisation",
            ],
          },
        ],
      },
      {
        id: "fs-s3",
        title: "Framework depth",
        duration: "5-6 weeks",
        goal: "Pick one modern full-stack framework and know it properly, including where it runs your code.",
        build:
          "Rebuild your stage 1 app in a server-rendered framework with streaming and server-side data loading.",
        nodes: [
          {
            id: "fs-nextjs",
            label: "Server-rendered React",
            summary:
              "The server/client boundary is the defining full-stack question of the current stack.",
            topics: [
              "Server components vs client components",
              "Data loading and caching on the server",
              "Server actions and mutations",
              "Streaming and Suspense boundaries",
            ],
          },
          {
            id: "fs-nest",
            label: "A structured backend framework",
            summary:
              "NestJS, Django or Rails — one opinionated framework you can defend in interview.",
            topics: [
              "Modules, providers and dependency injection",
              "Guards, interceptors and pipes",
              "Background jobs and scheduling",
              "Framework testing utilities",
            ],
            ref: { href: "/04-express-nestjs/01-express-vs-nestjs", label: "Ch — Express vs NestJS" },
          },
          {
            id: "fs-realtime",
            label: "Real-time features",
            kind: "recommended",
            summary:
              "Chat, notifications and live updates come up in almost every product take-home now.",
            topics: [
              "WebSockets vs SSE vs polling",
              "Presence and reconnection handling",
              "Scaling sockets across instances",
              "Optimistic UI with rollback",
            ],
          },
          {
            id: "fs-files",
            label: "Files, uploads and media",
            summary:
              "Every product needs it, and doing it correctly with presigned URLs is a good signal.",
            topics: [
              "Presigned uploads to object storage",
              "Image resizing and CDN delivery",
              "Virus scanning and content type checks",
              "Large file and resumable uploads",
            ],
          },
          {
            id: "fs-payments",
            label: "Payments and third-party integrations",
            kind: "recommended",
            summary:
              "Webhook handling and idempotency are the parts candidates get wrong.",
            topics: [
              "Stripe checkout and webhooks",
              "Idempotency keys and replay safety",
              "Reconciliation and failed payments",
              "PCI scope awareness",
            ],
          },
        ],
      },
      {
        id: "fs-s4",
        title: "Architecture and scale",
        duration: "4-5 weeks",
        goal: "Answer 'what happens when this has a hundred times the traffic' without hand-waving.",
        build:
          "Take one endpoint to 1,000 requests per second on a load test, and write up what you changed.",
        nodes: [
          {
            id: "fs-sysdesign",
            label: "System design for product engineers",
            summary:
              "Full-stack loops ask product-shaped design questions: design Instagram stories, not design Kafka.",
            topics: [
              "Requirements and scale estimation",
              "Data model and access patterns",
              "Caching and CDN strategy",
              "Identifying the bottleneck",
            ],
            ref: { href: "/07-system-design/02-scalable-apis", label: "Ch — Scalable APIs" },
          },
          {
            id: "fs-caching",
            label: "Caching everywhere",
            summary:
              "Browser, CDN, application and database. Knowing which layer to fix is the skill.",
            topics: [
              "HTTP caching and CDN rules",
              "Redis application cache",
              "Query result caching and invalidation",
              "Stale-while-revalidate patterns",
            ],
          },
          {
            id: "fs-queues",
            label: "Background processing",
            summary:
              "Anything slow belongs off the request path. Interviewers check you know which things.",
            topics: [
              "Job queues and workers",
              "Scheduled and recurring jobs",
              "Retries and dead letter handling",
              "Email, export and report generation",
            ],
          },
          {
            id: "fs-multitenancy",
            label: "Multi-tenancy and permissions",
            kind: "recommended",
            summary:
              "Nearly every B2B product needs it, and getting isolation wrong is a security incident.",
            topics: [
              "Row-level vs schema-level isolation",
              "Role and permission modelling",
              "Tenant-scoped queries by default",
              "Admin impersonation done safely",
            ],
          },
          {
            id: "fs-ai",
            label: "Adding AI features",
            kind: "recommended",
            summary:
              "In 2026 most product roles expect you to wire an LLM into a feature competently.",
            topics: [
              "Calling an LLM API with streaming",
              "Retrieval over your own data",
              "Cost, latency and caching",
              "Evaluating output quality",
            ],
            ref: { href: "/13-ai/04-rag", label: "Ch — RAG" },
          },
        ],
      },
      {
        id: "fs-s5",
        title: "Interview and evidence",
        duration: "4-6 weeks",
        goal: "Full-stack loops mix a take-home, a system design round, and DSA. Prepare all three.",
        build:
          "One flagship product, deployed, with real users if you can get them, and a written architecture document.",
        nodes: [
          {
            id: "fs-takehome",
            label: "The take-home",
            summary:
              "The most common full-stack filter. Scope control and a good README beat extra features.",
            topics: [
              "Reading the brief for the real requirements",
              "Scoping to the time limit deliberately",
              "README: decisions, trade-offs, what you skipped",
              "Tests that demonstrate judgement",
            ],
          },
          {
            id: "fs-dsa",
            label: "DSA preparation",
            summary:
              "Still a gate at most product companies, even for product-focused roles.",
            topics: [
              "Arrays, strings and hash maps",
              "Two pointers and sliding window",
              "Trees, recursion and BFS/DFS",
              "Complexity analysis",
            ],
            ref: { href: "/11-dsa-coding-questions", label: "DSA Coding Questions" },
          },
          {
            id: "fs-codereview",
            label: "Code review round",
            summary:
              "Increasingly common: review a pull request out loud and say what you would block on.",
            topics: [
              "Spotting security and correctness issues",
              "Distinguishing blocking from nit",
              "Giving feedback that lands",
              "Reading unfamiliar code quickly",
            ],
          },
          {
            id: "fs-portfolio",
            label: "Portfolio and README craft",
            summary:
              "Reviewers spend three minutes. Make the first screen of the README do the work.",
            topics: [
              "Problem, architecture, trade-offs, screenshots",
              "Live demo with seeded data",
              "Setup that works from a clean clone",
              "Honest limitations section",
            ],
          },
          {
            id: "fs-behavioural",
            label: "Behavioural round",
            summary:
              "Startups probe autonomy and judgement more than process. Have stories with numbers.",
            topics: [
              "Shipping something end to end alone",
              "A trade-off you made under time pressure",
              "Working directly with users or stakeholders",
              "Learning an unfamiliar part of the stack fast",
            ],
          },
        ],
      },
    ],
    tools: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js / NestJS",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Docker",
      "Playwright",
    ],
    proofOfWork: [
      "One deployed product with authentication, payments and real data",
      "A take-home repo with a README a reviewer can follow in three minutes",
      "A load test result showing a bottleneck found and fixed",
      "An architecture document for your flagship project",
    ],
  },

  {
    slug: "react-native-engineer",
    title: "React Native Engineer",
    shortTitle: "React Native",
    category: "Web & Mobile",
    mark: "RN",
    tagline:
      "Ship one codebase to both stores, and know enough native to fix what the bridge cannot.",
    market:
      "Strong demand at startups and agencies that cannot fund two native teams. Web React experience transfers directly, which makes it the fastest route from web into mobile.",
    timeline: "5-8 months part-time",
    entryBar: "React experience. No prior mobile or native work required.",
    updated: "2026-08-31",
    prerequisites: [
      "React and JavaScript at working level",
      "A Mac for iOS builds, or a plan for cloud builds",
      "Comfort with the command line",
    ],
    stages: [
      {
        id: "rn-s1",
        title: "Mobile is not the web",
        duration: "4-5 weeks",
        goal: "Learn what changes when there is no DOM, no URL bar, and a battery to worry about.",
        build:
          "A three-screen app with navigation, list rendering and a native-feeling transition, running on a real device.",
        nodes: [
          {
            id: "rn-core",
            label: "Core components and styling",
            summary:
              "No divs, no CSS cascade. The mental model shift is the first hurdle.",
            topics: [
              "View, Text, Image, ScrollView, Pressable",
              "Flexbox-only layout and density-independent pixels",
              "Platform-specific styles and Platform.select",
              "Safe areas, notches and dynamic island",
            ],
          },
          {
            id: "rn-navigation",
            label: "Navigation",
            summary:
              "Stack, tab and modal navigation, plus deep links — asked in every React Native interview.",
            topics: [
              "React Navigation: stack, tabs, drawer",
              "Navigation state and params typing",
              "Deep linking and universal links",
              "Back handling on Android",
            ],
          },
          {
            id: "rn-lists",
            label: "Lists and performance basics",
            summary:
              "Janky lists are the number one React Native complaint and a standard debugging question.",
            topics: [
              "FlatList vs FlashList",
              "getItemLayout, keyExtractor and windowing",
              "Image caching in lists",
              "Avoiding re-renders in list items",
            ],
          },
          {
            id: "rn-platform",
            label: "Platform differences",
            summary:
              "iOS and Android disagree about almost everything. Knowing where saves you weeks.",
            topics: [
              "Keyboard avoidance behaviour",
              "Permissions models on each platform",
              "Back gesture and hardware back button",
              "Typography and elevation conventions",
            ],
          },
          {
            id: "rn-expo",
            label: "Expo and the build pipeline",
            summary:
              "Expo is now the default recommendation. Knowing when to eject is the senior question.",
            topics: [
              "Expo managed vs bare workflow",
              "EAS Build and EAS Update",
              "Config plugins and native modules",
              "Development builds vs Expo Go",
            ],
          },
        ],
      },
      {
        id: "rn-s2",
        title: "State, data and offline",
        duration: "4-6 weeks",
        goal: "Mobile networks fail. An app that assumes connectivity is not a mobile app.",
        build:
          "Make your app fully usable offline, with a queue that syncs writes when connectivity returns.",
        nodes: [
          {
            id: "rn-state",
            label: "State management",
            summary:
              "Same concepts as web React, but re-mounting and background/foreground add wrinkles.",
            topics: [
              "Local state, context and Zustand",
              "Server state with TanStack Query",
              "Persisting state across app restarts",
              "App state: active, background, inactive",
            ],
          },
          {
            id: "rn-storage",
            label: "Local storage and databases",
            summary:
              "Choosing between key-value and a real on-device database is a common design question.",
            topics: [
              "MMKV and AsyncStorage",
              "SQLite and WatermelonDB",
              "Secure storage for tokens",
              "Migration of local schemas",
            ],
          },
          {
            id: "rn-offline",
            label: "Offline-first and sync",
            summary:
              "Conflict resolution is where offline apps are actually hard, and where interviews probe.",
            topics: [
              "Optimistic writes and a mutation queue",
              "Conflict resolution strategies",
              "Detecting connectivity reliably",
              "Background sync limitations per platform",
            ],
          },
          {
            id: "rn-auth",
            label: "Authentication on mobile",
            summary:
              "Token storage and biometric unlock, with the platform keychain rather than AsyncStorage.",
            topics: [
              "Keychain and Keystore via secure storage",
              "Refresh token rotation on mobile",
              "Biometric authentication",
              "Sign in with Apple requirements",
            ],
          },
          {
            id: "rn-push",
            label: "Push notifications",
            summary:
              "Permission timing, token lifecycle and deep linking from a notification.",
            topics: [
              "APNs and FCM setup",
              "Permission prompts and opt-in timing",
              "Foreground vs background handling",
              "Notification-triggered navigation",
            ],
          },
        ],
      },
      {
        id: "rn-s3",
        title: "Native depth",
        duration: "5-6 weeks",
        goal: "The line between a mid and senior React Native engineer is comfort dropping into native code.",
        build:
          "Write one native module for each platform and publish it, or contribute a fix to an existing native library.",
        nodes: [
          {
            id: "rn-architecture",
            label: "The New Architecture",
            summary:
              "Fabric, TurboModules and JSI replaced the bridge. Expect to be asked what changed and why.",
            topics: [
              "The old bridge and its serialisation cost",
              "JSI and synchronous native calls",
              "TurboModules and lazy loading",
              "Fabric renderer and concurrent rendering",
            ],
          },
          {
            id: "rn-native-modules",
            label: "Writing native modules",
            summary:
              "Reading Swift and Kotlin well enough to bridge a native SDK is a genuine differentiator.",
            topics: [
              "Swift/Objective-C module basics",
              "Kotlin/Java module basics",
              "Passing data across the boundary",
              "Native view components",
            ],
          },
          {
            id: "rn-animation",
            label: "Animation and gestures",
            summary:
              "Reanimated on the UI thread is what makes an app feel native rather than adequate.",
            topics: [
              "Reanimated worklets and shared values",
              "Gesture Handler and composed gestures",
              "Layout animations and shared element transitions",
              "60fps discipline and dropped frames",
            ],
          },
          {
            id: "rn-perf",
            label: "Performance profiling",
            summary:
              "Startup time and frame rate, measured with real tools rather than guessed at.",
            topics: [
              "Hermes and bytecode precompilation",
              "Flipper and native profilers",
              "Startup time and bundle size",
              "Memory leaks and image memory",
            ],
          },
          {
            id: "rn-native-basics",
            label: "Native platform literacy",
            kind: "recommended",
            summary:
              "Enough Xcode and Android Studio to read a build error instead of pasting it into a search box.",
            topics: [
              "Xcode project structure and signing",
              "Gradle basics and build variants",
              "Reading native crash logs",
              "CocoaPods and Swift Package Manager",
            ],
          },
        ],
      },
      {
        id: "rn-s4",
        title: "Release and operations",
        duration: "3-4 weeks",
        goal: "Shipping to two app stores is a skill in itself, and one most candidates cannot demonstrate.",
        build:
          "Publish an app to both stores with automated builds, staged rollout and crash reporting wired up.",
        nodes: [
          {
            id: "rn-release",
            label: "Store release process",
            summary:
              "Review rejections, staged rollout and version pinning. Real operational knowledge.",
            topics: [
              "App Store and Play Console submission",
              "Common review rejection reasons",
              "Staged rollout and phased release",
              "Versioning and minimum supported OS",
            ],
          },
          {
            id: "rn-ota",
            label: "Over-the-air updates",
            summary:
              "The React Native superpower — and the store rules that constrain it.",
            topics: [
              "EAS Update and update channels",
              "What can and cannot be shipped OTA",
              "Rollback and update targeting",
              "Native version compatibility",
            ],
          },
          {
            id: "rn-cicd",
            label: "Mobile CI/CD",
            summary:
              "Automated builds for two platforms, including code signing, which is where it usually breaks.",
            topics: [
              "EAS Build or Fastlane pipelines",
              "Certificate and provisioning management",
              "Automated store uploads",
              "Preview builds for reviewers",
            ],
          },
          {
            id: "rn-crash",
            label: "Crash reporting and analytics",
            summary:
              "You cannot attach a debugger to a user's phone. Telemetry is the only visibility you get.",
            topics: [
              "Sentry or Crashlytics with source maps",
              "Symbolication for native crashes",
              "Product analytics and funnels",
              "Crash-free session rate as a target",
            ],
          },
          {
            id: "rn-testing",
            label: "Testing mobile apps",
            summary:
              "Detox or Maestro for end-to-end, plus device matrix strategy.",
            topics: [
              "Component tests with Testing Library",
              "End-to-end with Detox or Maestro",
              "Device and OS version matrix",
              "Testing offline and permission states",
            ],
          },
        ],
      },
      {
        id: "rn-s5",
        title: "Interview preparation",
        duration: "3-4 weeks",
        goal: "React Native loops mix React fundamentals, mobile specifics and a build exercise.",
        build:
          "A published app on at least one store, with a README covering architecture and native work.",
        nodes: [
          {
            id: "rn-interview-core",
            label: "React Native question bank",
            summary:
              "The recurring set: bridge vs JSI, FlatList performance, and platform differences.",
            topics: [
              "New Architecture: what changed and why",
              "List performance debugging walkthrough",
              "Navigation state and deep linking",
              "Offline and sync design",
            ],
          },
          {
            id: "rn-react-core",
            label: "React fundamentals",
            summary:
              "Half the interview is still plain React. Do not skip it because the target is mobile.",
            topics: [
              "Rendering, reconciliation and memoisation",
              "Hooks rules and custom hooks",
              "State ownership decisions",
              "TypeScript with components",
            ],
          },
          {
            id: "rn-design",
            label: "Mobile system design",
            summary:
              "Design a chat app or a feed for mobile — offline, battery and push are the extra axes.",
            topics: [
              "Local-first data architecture",
              "Sync protocol and conflict handling",
              "Media upload and caching",
              "Battery and network efficiency",
            ],
          },
          {
            id: "rn-dsa",
            label: "DSA round",
            kind: "recommended",
            summary:
              "Lighter than backend loops but present at product companies.",
            topics: [
              "Arrays, strings, hash maps",
              "Trees and recursion",
              "Complexity analysis",
              "Debugging under time pressure",
            ],
            ref: { href: "/11-dsa-coding-questions", label: "DSA Coding Questions" },
          },
          {
            id: "rn-portfolio",
            label: "Shipped app as evidence",
            summary:
              "A live store listing outranks any number of tutorial projects for this role.",
            topics: [
              "A published app with real screenshots",
              "Crash-free rate and install numbers if you have them",
              "One native module you wrote",
              "Write-up of a performance problem you fixed",
            ],
          },
        ],
      },
    ],
    tools: [
      "React Native",
      "Expo / EAS",
      "TypeScript",
      "React Navigation",
      "Reanimated",
      "TanStack Query",
      "MMKV",
      "Sentry",
      "Detox",
    ],
    proofOfWork: [
      "An app published on the App Store or Play Store",
      "One native module written in Swift or Kotlin",
      "A performance write-up: startup time or frame rate, before and after",
      "An offline-capable feature with a documented sync strategy",
    ],
  },

  {
    slug: "ios-engineer",
    title: "iOS Engineer",
    shortTitle: "iOS",
    category: "Web & Mobile",
    mark: "IO",
    tagline:
      "Swift, SwiftUI and the Apple frameworks — build apps that feel like they belong on the platform.",
    market:
      "Smaller hiring pool than web, but far less competition per role and consistently higher pay bands. Fintech, health and consumer product companies hire steadily.",
    timeline: "7-10 months part-time",
    entryBar: "Programming experience in any language, plus access to a Mac.",
    updated: "2026-08-31",
    prerequisites: [
      "A Mac running current Xcode",
      "Object-oriented programming fundamentals",
      "Willingness to read Apple's documentation directly",
    ],
    stages: [
      {
        id: "ios-s1",
        title: "Swift the language",
        duration: "5-6 weeks",
        goal: "Swift's type system and memory model are interview territory in their own right.",
        build:
          "A command-line tool and a single-screen app that exercise optionals, protocols and generics deliberately.",
        nodes: [
          {
            id: "ios-swift",
            label: "Swift fundamentals",
            summary:
              "Value semantics and optionals are the two things every iOS interview checks first.",
            topics: [
              "Optionals, unwrapping and guard",
              "Structs vs classes, value vs reference semantics",
              "Protocols and protocol-oriented design",
              "Generics and associated types",
            ],
          },
          {
            id: "ios-memory",
            label: "Memory management",
            summary:
              "ARC, retain cycles and capture lists — the classic iOS whiteboard question.",
            topics: [
              "ARC and reference counting",
              "Strong, weak and unowned",
              "Retain cycles in closures and delegates",
              "Capture lists and memory graph debugging",
            ],
          },
          {
            id: "ios-concurrency",
            label: "Swift Concurrency",
            summary:
              "async/await and actors replaced GCD as the expected answer. Data races are the interview angle.",
            topics: [
              "async/await and structured concurrency",
              "Tasks, task groups and cancellation",
              "Actors and the main actor",
              "Sendable and data race safety",
            ],
          },
          {
            id: "ios-errors",
            label: "Error handling and testing",
            summary:
              "Swift's typed error handling plus XCTest basics before you build anything large.",
            topics: [
              "throws, Result and error propagation",
              "XCTest and async test support",
              "Dependency injection for testability",
              "Test doubles without a mocking framework",
            ],
          },
          {
            id: "ios-tooling",
            label: "Xcode and tooling",
            summary:
              "Build settings and schemes are where iOS newcomers lose days.",
            topics: [
              "Targets, schemes and build configurations",
              "Swift Package Manager",
              "Debugging with LLDB and breakpoints",
              "Instruments overview",
            ],
          },
        ],
      },
      {
        id: "ios-s2",
        title: "SwiftUI and UIKit",
        duration: "6-8 weeks",
        goal: "SwiftUI for new work, UIKit because the job will involve a codebase older than SwiftUI.",
        build:
          "A multi-screen app in SwiftUI with a custom UIKit view bridged in, plus navigation and forms.",
        nodes: [
          {
            id: "ios-swiftui",
            label: "SwiftUI",
            summary:
              "Declarative UI plus the observation system. State management is where candidates struggle.",
            topics: [
              "View composition and view builders",
              "@State, @Binding, @Observable, @Environment",
              "Layout system: stacks, frames, alignment guides",
              "Navigation stack and programmatic routing",
            ],
          },
          {
            id: "ios-uikit",
            label: "UIKit",
            summary:
              "Every established iOS codebase has UIKit in it, and interviews still ask about the lifecycle.",
            topics: [
              "View controller lifecycle",
              "Auto Layout and constraints in code",
              "UITableView and UICollectionView with diffable data sources",
              "Bridging UIKit and SwiftUI both directions",
            ],
          },
          {
            id: "ios-architecture",
            label: "App architecture",
            summary:
              "MVVM is the common answer; being able to critique it is the senior answer.",
            topics: [
              "MVC, MVVM and unidirectional patterns",
              "Coordinator pattern for navigation",
              "Modularisation with Swift packages",
              "Keeping views free of business logic",
            ],
          },
          {
            id: "ios-data",
            label: "Persistence",
            summary:
              "SwiftData and Core Data, plus knowing when a plain file is the right answer.",
            topics: [
              "SwiftData models and queries",
              "Core Data stack and contexts",
              "Migrations and versioning",
              "Keychain for secrets",
            ],
          },
          {
            id: "ios-networking",
            label: "Networking",
            summary:
              "URLSession with async/await, plus caching and offline behaviour.",
            topics: [
              "URLSession and async requests",
              "Codable and decoding strategies",
              "Caching, ETags and offline fallbacks",
              "Certificate pinning basics",
            ],
          },
        ],
      },
      {
        id: "ios-s3",
        title: "Platform features",
        duration: "4-6 weeks",
        goal: "The frameworks that make an app feel native and that appear in job descriptions.",
        build:
          "Add a widget, push notifications and one system integration such as share sheet or Siri shortcut.",
        nodes: [
          {
            id: "ios-notifications",
            label: "Notifications and background work",
            summary:
              "Background execution rules on iOS are strict and frequently misunderstood.",
            topics: [
              "UserNotifications and permission flow",
              "Rich and actionable notifications",
              "Background tasks and refresh limits",
              "Silent push and its constraints",
            ],
          },
          {
            id: "ios-widgets",
            label: "Widgets and App Intents",
            summary:
              "WidgetKit, Live Activities and App Intents are current, visible surface area.",
            topics: [
              "WidgetKit timelines",
              "Live Activities and Dynamic Island",
              "App Intents and Shortcuts",
              "App groups and shared containers",
            ],
          },
          {
            id: "ios-a11y",
            label: "Accessibility",
            summary:
              "Apple takes it seriously, and so do interviewers at companies that ship to the App Store.",
            topics: [
              "VoiceOver labels, traits and rotors",
              "Dynamic Type and layout that scales",
              "Reduce Motion and contrast settings",
              "Accessibility auditing in Xcode",
            ],
          },
          {
            id: "ios-privacy",
            label: "Privacy and permissions",
            summary:
              "Privacy manifests and tracking rules are now a hard gate on App Store review.",
            topics: [
              "Permission prompts and usage descriptions",
              "Privacy manifest and required reason APIs",
              "App Tracking Transparency",
              "Data minimisation in practice",
            ],
          },
          {
            id: "ios-extras",
            label: "Media, maps and sensors",
            kind: "optional",
            summary:
              "Pick the ones your target companies use rather than learning all of them.",
            topics: [
              "AVFoundation for camera and playback",
              "MapKit and CoreLocation",
              "HealthKit or CoreMotion",
              "Vision and CoreML on device",
            ],
          },
        ],
      },
      {
        id: "ios-s4",
        title: "Performance and release",
        duration: "4-5 weeks",
        goal: "Instruments literacy and a real App Store release are strong senior signals.",
        build:
          "Profile an app with Instruments, fix one real problem, and ship a build through TestFlight to the store.",
        nodes: [
          {
            id: "ios-instruments",
            label: "Profiling with Instruments",
            summary:
              "Time Profiler, Allocations and Leaks. Being able to drive Instruments is rare and valued.",
            topics: [
              "Time Profiler and hangs",
              "Allocations and memory growth",
              "Leaks and abandoned memory",
              "Launch time and hitches",
            ],
          },
          {
            id: "ios-perf",
            label: "Performance work",
            summary:
              "App launch time and scroll smoothness are the two things users and reviewers notice.",
            topics: [
              "Cold, warm and hot launch",
              "Main thread discipline",
              "Image decoding and caching",
              "SwiftUI view identity and redraws",
            ],
          },
          {
            id: "ios-release",
            label: "Release engineering",
            summary:
              "Signing is where iOS builds break. Understanding it is a genuine differentiator.",
            topics: [
              "Certificates, provisioning profiles, capabilities",
              "TestFlight and internal distribution",
              "App Store review and common rejections",
              "Phased release and version strategy",
            ],
          },
          {
            id: "ios-ci",
            label: "CI and automation",
            summary:
              "Xcode Cloud or Fastlane, with tests running on every pull request.",
            topics: [
              "Xcode Cloud or GitHub Actions with macOS runners",
              "Fastlane lanes for build and upload",
              "Automated UI tests in CI",
              "Build time optimisation",
            ],
          },
          {
            id: "ios-crash",
            label: "Crash reporting and metrics",
            summary:
              "MetricKit and Xcode Organizer give you production truth for free.",
            topics: [
              "Xcode Organizer crash reports",
              "MetricKit for launch and hang data",
              "Symbolication and dSYM management",
              "Crash-free rate targets",
            ],
          },
        ],
      },
      {
        id: "ios-s5",
        title: "Interview preparation",
        duration: "4-5 weeks",
        goal: "iOS loops are language-heavy, framework-heavy, and increasingly include a live build.",
        build:
          "A published app plus a written note on the architecture and the trade-offs you chose.",
        nodes: [
          {
            id: "ios-questions",
            label: "The recurring question set",
            summary:
              "ARC, value vs reference, and the view controller lifecycle come up almost every time.",
            topics: [
              "Retain cycles: spot and fix",
              "Struct vs class decision with reasons",
              "SwiftUI state property wrapper choice",
              "GCD vs Swift Concurrency migration",
            ],
          },
          {
            id: "ios-livecoding",
            label: "Live coding round",
            summary:
              "Usually building a screen with networking and a list, in Xcode, while talking.",
            topics: [
              "Fetch, decode and display in 45 minutes",
              "Handling loading and error states",
              "Writing testable code under time pressure",
              "Xcode fluency without the internet",
            ],
          },
          {
            id: "ios-design",
            label: "iOS system design",
            summary:
              "Design an offline-capable feed or a photo uploader — mobile constraints are the point.",
            topics: [
              "Local persistence and sync design",
              "Image pipeline and caching",
              "Background upload strategy",
              "Modularisation for a large team",
            ],
          },
          {
            id: "ios-dsa",
            label: "DSA round",
            summary:
              "Present at product companies; usually lighter than a backend loop.",
            topics: [
              "Arrays, strings and hash maps",
              "Trees and recursion",
              "Complexity analysis",
              "Swift-specific idioms in solutions",
            ],
            ref: { href: "/11-dsa-coding-questions", label: "DSA Coding Questions" },
          },
          {
            id: "ios-portfolio",
            label: "Portfolio",
            summary:
              "One polished app on the store, with source available, beats a folder of samples.",
            topics: [
              "Published app with screenshots",
              "Open-source repo with tests",
              "Accessibility support demonstrated",
              "Written architecture rationale",
            ],
          },
        ],
      },
    ],
    tools: [
      "Swift",
      "SwiftUI",
      "UIKit",
      "Xcode",
      "Swift Concurrency",
      "SwiftData",
      "Instruments",
      "TestFlight",
      "Fastlane",
    ],
    proofOfWork: [
      "An app on the App Store with accessibility support",
      "An Instruments profiling case study with before/after numbers",
      "A Swift package published with tests and documentation",
      "A UIKit-to-SwiftUI migration write-up",
    ],
  },

  {
    slug: "android-engineer",
    title: "Android Engineer",
    shortTitle: "Android",
    category: "Web & Mobile",
    mark: "AN",
    tagline:
      "Kotlin, Compose and the Android platform — build for the widest and most fragmented device base in the world.",
    market:
      "Huge installed base and steady enterprise demand, especially in India, South-East Asia and fintech. Less crowded than web, and Kotlin skills transfer to backend work.",
    timeline: "7-10 months part-time",
    entryBar: "Programming experience in any language. Any laptop that runs Android Studio.",
    updated: "2026-08-31",
    prerequisites: [
      "Object-oriented programming fundamentals",
      "Android Studio installed with an emulator running",
      "Basic Git",
    ],
    stages: [
      {
        id: "and-s1",
        title: "Kotlin and the platform",
        duration: "5-6 weeks",
        goal: "Kotlin idioms and the Android lifecycle — the two things every interview opens with.",
        build:
          "A two-screen app that survives rotation and process death with state intact.",
        nodes: [
          {
            id: "and-kotlin",
            label: "Kotlin fundamentals",
            summary:
              "Null safety, data classes and scope functions are assumed knowledge, not bonus points.",
            topics: [
              "Null safety and platform types",
              "Data classes, sealed classes, enums",
              "Extension functions and scope functions",
              "Collections and sequences",
            ],
          },
          {
            id: "and-coroutines",
            label: "Coroutines and Flow",
            summary:
              "Structured concurrency is the single most-asked Android topic in current interviews.",
            topics: [
              "Suspend functions and coroutine scopes",
              "Dispatchers and thread confinement",
              "Flow, StateFlow and SharedFlow",
              "Cancellation and exception handling",
            ],
          },
          {
            id: "and-lifecycle",
            label: "Lifecycle and configuration changes",
            summary:
              "Rotation and process death are the classic Android trap questions.",
            topics: [
              "Activity and fragment lifecycle",
              "ViewModel and saved state",
              "Process death and restoration",
              "Configuration changes and resources",
            ],
          },
          {
            id: "and-manifest",
            label: "App fundamentals",
            summary:
              "Components, intents and permissions — the vocabulary of the platform.",
            topics: [
              "Activities, services, broadcast receivers",
              "Intents, intent filters and deep links",
              "Runtime permissions",
              "Manifest, resources and qualifiers",
            ],
          },
          {
            id: "and-gradle",
            label: "Gradle and build",
            summary:
              "Build variants and dependency management, plus why the build takes four minutes.",
            topics: [
              "Gradle Kotlin DSL and version catalogs",
              "Build types, flavours and variants",
              "R8 shrinking and ProGuard rules",
              "Build speed and modularisation",
            ],
          },
        ],
      },
      {
        id: "and-s2",
        title: "Jetpack Compose",
        duration: "5-7 weeks",
        goal: "Compose is the default for new Android work. Recomposition is the interview topic.",
        build:
          "A Compose app with lists, navigation, theming and a custom layout, supporting dark mode.",
        nodes: [
          {
            id: "and-compose",
            label: "Compose fundamentals",
            summary:
              "Declarative UI on Android, and the recomposition model that decides performance.",
            topics: [
              "Composables, state and recomposition",
              "remember, derivedStateOf, rememberSaveable",
              "Side effects: LaunchedEffect, DisposableEffect",
              "Stability and skipping",
            ],
          },
          {
            id: "and-compose-ui",
            label: "Layouts and theming",
            summary:
              "Material 3, dynamic colour and custom layouts.",
            topics: [
              "Row, Column, Box and modifiers order",
              "LazyColumn and item keys",
              "Material 3 and dynamic colour",
              "Custom layouts and measurement",
            ],
          },
          {
            id: "and-navigation",
            label: "Navigation",
            summary:
              "Type-safe navigation and deep links, plus back stack behaviour.",
            topics: [
              "Navigation Compose and typed routes",
              "Back stack and up navigation",
              "Deep links and app links",
              "Nested graphs and shared state",
            ],
          },
          {
            id: "and-views",
            label: "The View system",
            kind: "recommended",
            summary:
              "Most existing Android codebases are XML views. You will maintain them.",
            topics: [
              "XML layouts and ConstraintLayout",
              "RecyclerView and DiffUtil",
              "View binding",
              "Interop between Views and Compose",
            ],
          },
          {
            id: "and-a11y",
            label: "Accessibility and adaptive UI",
            summary:
              "Foldables, tablets and TalkBack. Increasingly part of the Play Store quality bar.",
            topics: [
              "TalkBack semantics in Compose",
              "Window size classes and adaptive layouts",
              "Font scaling and contrast",
              "Foldable and large screen support",
            ],
          },
        ],
      },
      {
        id: "and-s3",
        title: "Architecture and data",
        duration: "5-6 weeks",
        goal: "Google's recommended architecture is the expected answer; knowing its costs is the senior one.",
        build:
          "Refactor your app into data/domain/UI layers with a repository, offline cache and dependency injection.",
        nodes: [
          {
            id: "and-architecture",
            label: "App architecture",
            summary:
              "UI layer, domain layer, data layer — and unidirectional data flow throughout.",
            topics: [
              "MVVM and MVI in practice",
              "Repository pattern and data sources",
              "Use cases and the domain layer",
              "Single source of truth",
            ],
          },
          {
            id: "and-di",
            label: "Dependency injection",
            summary:
              "Hilt is the standard. Being able to explain scoping is the actual test.",
            topics: [
              "Hilt modules, components and scopes",
              "Constructor injection and testability",
              "Manual DI and when it is enough",
              "Koin as an alternative",
            ],
          },
          {
            id: "and-room",
            label: "Persistence with Room",
            summary:
              "Local database plus migrations, which is where production Android apps break.",
            topics: [
              "Room entities, DAOs and relations",
              "Flow-returning queries",
              "Migrations and destructive fallback",
              "DataStore for preferences",
            ],
          },
          {
            id: "and-network",
            label: "Networking and offline",
            summary:
              "Retrofit, OkHttp and a caching strategy that works on a train.",
            topics: [
              "Retrofit and OkHttp interceptors",
              "Serialization with kotlinx",
              "Offline-first with a single source of truth",
              "WorkManager for deferred sync",
            ],
          },
          {
            id: "and-testing",
            label: "Testing on Android",
            summary:
              "Unit tests for the domain, instrumented tests for the UI, and Turbine for flows.",
            topics: [
              "JUnit, MockK and Turbine",
              "Compose UI testing",
              "Espresso for view-based screens",
              "Test doubles for repositories",
            ],
          },
        ],
      },
      {
        id: "and-s4",
        title: "Performance and release",
        duration: "4-5 weeks",
        goal: "Android fragmentation means performance work is measured on real, cheap devices.",
        build:
          "Profile startup and jank on a low-end device, fix one issue, and ship to Play with a staged rollout.",
        nodes: [
          {
            id: "and-perf",
            label: "Performance profiling",
            summary:
              "Startup time, jank and ANRs are the Play Console vitals that gate your listing.",
            topics: [
              "Android Studio Profiler and Perfetto",
              "Baseline Profiles and startup time",
              "Jank, frame timing and ANRs",
              "Memory leaks with LeakCanary",
            ],
          },
          {
            id: "and-size",
            label: "App size and delivery",
            summary:
              "In many markets, install size decides whether the app is installed at all.",
            topics: [
              "App Bundles and dynamic delivery",
              "R8 and resource shrinking",
              "Feature modules on demand",
              "Asset optimisation",
            ],
          },
          {
            id: "and-release",
            label: "Play Store release",
            summary:
              "Tracks, staged rollout and policy compliance — real operational knowledge.",
            topics: [
              "Internal, closed, open and production tracks",
              "Staged rollout and halting a release",
              "Play policy and data safety form",
              "Signing and Play App Signing",
            ],
          },
          {
            id: "and-ci",
            label: "CI and automation",
            summary:
              "Automated builds, tests and Play uploads on every merge.",
            topics: [
              "GitHub Actions for Android",
              "Automated tests on emulators",
              "Fastlane supply for uploads",
              "Build caching",
            ],
          },
          {
            id: "and-monitoring",
            label: "Crash reporting and vitals",
            summary:
              "Play Console vitals plus Crashlytics is how you learn what a thousand device models do.",
            topics: [
              "Crashlytics and non-fatal reporting",
              "Android vitals thresholds",
              "Deobfuscation mapping files",
              "Device-specific bug triage",
            ],
          },
        ],
      },
      {
        id: "and-s5",
        title: "Interview preparation",
        duration: "4-5 weeks",
        goal: "Android loops test Kotlin, coroutines, lifecycle and architecture, plus a live build.",
        build:
          "A published Play Store app with a modular architecture and a README that explains the layering.",
        nodes: [
          {
            id: "and-questions",
            label: "The recurring question set",
            summary:
              "Coroutine scoping, lifecycle traps and recomposition come up in nearly every loop.",
            topics: [
              "viewModelScope vs lifecycleScope",
              "StateFlow vs LiveData vs SharedFlow",
              "Why did this composable recompose",
              "Handling process death correctly",
            ],
          },
          {
            id: "and-livecoding",
            label: "Live coding round",
            summary:
              "Build a screen that fetches and displays data, with loading and error states.",
            topics: [
              "Compose screen from scratch in 45 minutes",
              "Repository and ViewModel wiring",
              "Error and empty state handling",
              "Talking through decisions while coding",
            ],
          },
          {
            id: "and-design",
            label: "Android system design",
            summary:
              "Design an offline-first app, an image loader, or a sync engine.",
            topics: [
              "Offline-first architecture",
              "Image loading and caching pipeline",
              "Background sync with WorkManager",
              "Modularisation for a large team",
            ],
          },
          {
            id: "and-dsa",
            label: "DSA round",
            summary:
              "Standard at product companies and most large service companies.",
            topics: [
              "Arrays, strings and hash maps",
              "Trees, graphs and recursion",
              "Complexity analysis",
              "Kotlin idioms in solutions",
            ],
            ref: { href: "/11-dsa-coding-questions", label: "DSA Coding Questions" },
          },
          {
            id: "and-portfolio",
            label: "Portfolio",
            summary:
              "A live Play listing with a clean modular repo is the strongest possible evidence.",
            topics: [
              "Published app with screenshots",
              "Multi-module open-source repo",
              "Baseline Profile and startup numbers",
              "Accessibility support demonstrated",
            ],
          },
        ],
      },
    ],
    tools: [
      "Kotlin",
      "Jetpack Compose",
      "Coroutines & Flow",
      "Hilt",
      "Room",
      "Retrofit",
      "WorkManager",
      "Android Studio",
      "Perfetto",
    ],
    proofOfWork: [
      "An app on Google Play with staged rollout used at least once",
      "A multi-module repo following the recommended architecture",
      "A startup-time improvement backed by Baseline Profile numbers",
      "An offline-first feature with a documented sync strategy",
    ],
  },

  {
    slug: "accessibility-engineer",
    title: "Accessibility Engineer",
    shortTitle: "Accessibility",
    category: "Web & Mobile",
    mark: "A1",
    tagline:
      "Make products usable by everyone, and make the legal risk of not doing so go away.",
    market:
      "Driven by regulation as much as ethics: the European Accessibility Act, ADA litigation in the US, and public sector procurement rules. Small specialist pool, so demand outstrips supply.",
    timeline: "4-7 months part-time",
    entryBar: "Frontend experience. The specialism is learnable on top of existing web skills.",
    updated: "2026-08-31",
    prerequisites: [
      "Solid HTML and CSS",
      "JavaScript and one component framework",
      "Patience for reading specifications",
    ],
    stages: [
      {
        id: "a11y-s1",
        title: "Foundations",
        duration: "3-4 weeks",
        goal: "Understand who you are building for before learning the rules written for them.",
        build:
          "Audit a real site and write up ten issues, each with the user impact and the WCAG criterion.",
        nodes: [
          {
            id: "a11y-users",
            label: "Disability and assistive technology",
            summary:
              "The specification makes sense only once you know the behaviour it describes.",
            topics: [
              "Vision, motor, cognitive and hearing needs",
              "Screen readers, magnifiers, switch access",
              "Voice control and speech input",
              "Situational and temporary impairment",
            ],
          },
          {
            id: "a11y-semantics",
            label: "Semantic HTML",
            summary:
              "Most accessibility bugs are solved by using the correct element in the first place.",
            topics: [
              "Landmarks, headings and document outline",
              "Native controls vs div soup",
              "Lists, tables and figures",
              "Labels and form associations",
            ],
          },
          {
            id: "a11y-tree",
            label: "The accessibility tree",
            summary:
              "What the browser actually exposes, and how to inspect it.",
            topics: [
              "Role, name, value, state",
              "Accessible name computation",
              "Browser accessibility inspectors",
              "Platform accessibility APIs",
            ],
          },
          {
            id: "a11y-wcag",
            label: "WCAG 2.2 and beyond",
            summary:
              "The success criteria you will be measured against, in plain language.",
            topics: [
              "Perceivable, Operable, Understandable, Robust",
              "A, AA and AAA conformance levels",
              "New 2.2 criteria: focus appearance, target size",
              "WCAG 3 direction",
            ],
          },
          {
            id: "a11y-law",
            label: "Legal and policy context",
            summary:
              "The reason accessibility budget exists. Knowing it makes you persuasive internally.",
            topics: [
              "European Accessibility Act",
              "ADA and Section 508",
              "EN 301 549 procurement standard",
              "VPAT and accessibility conformance reports",
            ],
          },
        ],
      },
      {
        id: "a11y-s2",
        title: "Building accessible interfaces",
        duration: "4-6 weeks",
        goal: "Component-level craft: the patterns that break, and how to build them correctly.",
        build:
          "An accessible component library: modal, menu, combobox, tabs, date picker — each keyboard and screen-reader tested.",
        nodes: [
          {
            id: "a11y-keyboard",
            label: "Keyboard interaction",
            summary:
              "Every interactive component needs a keyboard model. Most custom ones ship without one.",
            topics: [
              "Tab order and roving tabindex",
              "Focus management and focus traps",
              "Skip links and bypass blocks",
              "Visible focus indicators",
            ],
          },
          {
            id: "a11y-aria",
            label: "ARIA, used correctly",
            summary:
              "The first rule of ARIA is not to use ARIA. Interviewers check that you know why.",
            topics: [
              "Roles, states and properties",
              "APG patterns as the reference",
              "Live regions and announcements",
              "Common ARIA anti-patterns",
            ],
          },
          {
            id: "a11y-forms",
            label: "Forms and errors",
            summary:
              "Forms are where accessibility failures cost real money in abandoned transactions.",
            topics: [
              "Labels, descriptions and instructions",
              "Error identification and suggestion",
              "Required fields and validation timing",
              "Grouping with fieldset and legend",
            ],
          },
          {
            id: "a11y-visual",
            label: "Visual design constraints",
            summary:
              "Contrast, spacing and motion. The part where you negotiate with designers.",
            topics: [
              "Contrast ratios for text and UI components",
              "Text resize and reflow to 320px",
              "Reduced motion and vestibular safety",
              "Not relying on colour alone",
            ],
          },
          {
            id: "a11y-mobile",
            label: "Mobile accessibility",
            kind: "recommended",
            summary:
              "VoiceOver and TalkBack behave differently from desktop screen readers.",
            topics: [
              "Touch target size and spacing",
              "VoiceOver and TalkBack gestures",
              "Dynamic Type and font scaling",
              "Native app accessibility APIs",
            ],
          },
        ],
      },
      {
        id: "a11y-s3",
        title: "Testing and auditing",
        duration: "4-5 weeks",
        goal: "Automated tools catch about a third of issues. The job is the other two thirds.",
        build:
          "A full WCAG 2.2 AA audit of a real product, delivered as a report with severity, impact and remediation.",
        nodes: [
          {
            id: "a11y-automated",
            label: "Automated testing",
            summary:
              "Fast, cheap, and limited. Knowing the limits is what stops false confidence.",
            topics: [
              "axe-core and Lighthouse",
              "Linting with eslint-plugin-jsx-a11y",
              "CI gates and regression prevention",
              "What automation cannot detect",
            ],
          },
          {
            id: "a11y-manual",
            label: "Manual testing",
            summary:
              "Keyboard-only and screen-reader passes are the core of any real audit.",
            topics: [
              "Keyboard-only walkthrough",
              "NVDA, JAWS and VoiceOver basics",
              "Zoom to 400% and reflow testing",
              "High contrast and forced colours mode",
            ],
          },
          {
            id: "a11y-audit",
            label: "Running an audit",
            summary:
              "The deliverable that gets you hired: a report a developer can act on.",
            topics: [
              "Scoping and representative page sampling",
              "Severity and user impact rating",
              "Writing reproducible issue reports",
              "Remediation guidance with code",
            ],
          },
          {
            id: "a11y-users-testing",
            label: "Testing with disabled users",
            summary:
              "The step that separates compliance from usability. Increasingly expected.",
            topics: [
              "Recruiting participants ethically",
              "Session facilitation and consent",
              "Distinguishing conformance from usability",
              "Feeding findings back into design",
            ],
          },
          {
            id: "a11y-docs",
            label: "Reporting and VPAT",
            kind: "recommended",
            summary:
              "Enterprise sales cycles need a conformance report. Writing one is a marketable skill.",
            topics: [
              "VPAT and ACR structure",
              "Honest conformance claims",
              "Accessibility statements",
              "Roadmapping remediation",
            ],
          },
        ],
      },
      {
        id: "a11y-s4",
        title: "Scaling it across an organisation",
        duration: "3-5 weeks",
        goal: "One accessible page is craft. An accessible product line is a programme.",
        build:
          "Ship an accessibility checklist, a CI gate and a component library that makes the accessible path the default.",
        nodes: [
          {
            id: "a11y-designsystem",
            label: "Accessible design systems",
            summary:
              "Fixing it once in the component beats fixing it in fifty feature branches.",
            topics: [
              "Accessible primitives and headless libraries",
              "Documenting keyboard behaviour per component",
              "Token-level contrast guarantees",
              "Preventing unsafe component APIs",
            ],
          },
          {
            id: "a11y-process",
            label: "Process and shift-left",
            summary:
              "Catching issues in design review is an order of magnitude cheaper than in QA.",
            topics: [
              "Accessibility acceptance criteria",
              "Design review checklists and annotations",
              "Definition of done",
              "Regression gates in CI",
            ],
          },
          {
            id: "a11y-training",
            label: "Training and advocacy",
            summary:
              "Much of the job is persuasion. Framing matters more than being right.",
            topics: [
              "Teaching developers and designers",
              "Building the business case",
              "Demonstrating impact with real users",
              "Handling pushback on cost",
            ],
          },
          {
            id: "a11y-content",
            label: "Content and documents",
            kind: "recommended",
            summary:
              "PDFs, video and rich text are where large organisations fail their audits.",
            topics: [
              "Accessible PDF structure",
              "Captions, transcripts and audio description",
              "Plain language and readability",
              "Rich text editor accessibility",
            ],
          },
          {
            id: "a11y-metrics",
            label: "Measuring progress",
            summary:
              "Leadership funds what it can see. Pick metrics that survive scrutiny.",
            topics: [
              "Issue density and burn-down",
              "Coverage of automated checks",
              "Time to remediation",
              "User-reported barrier tracking",
            ],
          },
        ],
      },
      {
        id: "a11y-s5",
        title: "Interview and credibility",
        duration: "2-4 weeks",
        goal: "This role hires on demonstrated work more than on credentials.",
        build:
          "A public audit write-up and an open-source accessible component library.",
        nodes: [
          {
            id: "a11y-interview",
            label: "The interview format",
            summary:
              "Usually a live audit exercise plus a discussion of trade-offs and advocacy.",
            topics: [
              "Auditing a page out loud",
              "Fixing an inaccessible component live",
              "Explaining WCAG criteria from memory",
              "Prioritising a backlog of issues",
            ],
          },
          {
            id: "a11y-cert",
            label: "Certification",
            kind: "optional",
            summary:
              "IAAP certifications carry weight in enterprise and public sector hiring.",
            topics: [
              "CPACC for breadth",
              "WAS for technical depth",
              "What certification does and does not prove",
              "Study resources and cost",
            ],
          },
          {
            id: "a11y-portfolio",
            label: "Portfolio",
            summary:
              "Published audits and fixed components are the currency of this field.",
            topics: [
              "A public audit report",
              "Open-source accessibility contributions",
              "Before/after remediation case study",
              "Conference talk or written article",
            ],
          },
          {
            id: "a11y-frontend",
            label: "Keep the frontend skills sharp",
            summary:
              "You will be asked to fix code, not just find faults in it.",
            topics: [
              "Component framework fluency",
              "CSS layout and focus styling",
              "Debugging in the browser",
              "Writing tests for accessibility behaviour",
            ],
          },
          {
            id: "a11y-behavioural",
            label: "Behavioural round",
            summary:
              "Influence without authority is the core competency they are screening for.",
            topics: [
              "Convincing a team to fix an issue",
              "Handling a launch with known barriers",
              "Balancing legal risk against delivery",
              "Working with designers on contrast",
            ],
          },
        ],
      },
    ],
    tools: [
      "axe DevTools",
      "NVDA",
      "VoiceOver",
      "JAWS",
      "Lighthouse",
      "WAVE",
      "Playwright + axe",
      "ARIA Authoring Practices Guide",
    ],
    proofOfWork: [
      "A published WCAG 2.2 AA audit report with severity ratings",
      "An open-source accessible component library",
      "A before/after remediation case study with user impact",
      "An accessibility CI gate adopted by a real project",
    ],
  },

  {
    slug: "web-performance-engineer",
    title: "Web Performance Engineer",
    shortTitle: "Web Performance",
    category: "Web & Mobile",
    mark: "WP",
    tagline:
      "Turn slow into fast, and prove it with numbers that connect to revenue.",
    market:
      "A specialism that pays because it is measurable. E-commerce, media and any business with a conversion funnel funds it directly, and Core Web Vitals made it a board-level metric.",
    timeline: "4-6 months part-time",
    entryBar: "Solid frontend experience and comfort reading a waterfall chart.",
    updated: "2026-08-31",
    prerequisites: [
      "JavaScript, HTML and CSS at working level",
      "Browser DevTools familiarity",
      "Basic understanding of HTTP",
    ],
    stages: [
      {
        id: "perf-s1",
        title: "Measurement first",
        duration: "3-4 weeks",
        goal: "You cannot optimise what you have not measured. Everything else depends on this stage.",
        build:
          "Instrument a real site with RUM, and publish a dashboard showing field vitals at the 75th percentile.",
        nodes: [
          {
            id: "perf-vitals",
            label: "Core Web Vitals",
            summary:
              "The metrics Google ranks on and executives quote. Know exactly what each one measures.",
            topics: [
              "LCP: element, phases and typical causes",
              "INP: what replaced FID and why",
              "CLS: layout instability sources",
              "Thresholds and the 75th percentile rule",
            ],
          },
          {
            id: "perf-lab-field",
            label: "Lab vs field data",
            summary:
              "The most common mistake is optimising a lab score while field users stay slow.",
            topics: [
              "Lighthouse and its limitations",
              "CrUX and real user monitoring",
              "Synthetic monitoring and alerting",
              "Sampling and percentile reasoning",
            ],
          },
          {
            id: "perf-devtools",
            label: "DevTools fluency",
            summary:
              "Reading a performance trace quickly is the core practical skill of the role.",
            topics: [
              "Performance panel and flame charts",
              "Network waterfall and priorities",
              "Coverage and unused code",
              "Throttling that matches real conditions",
            ],
          },
          {
            id: "perf-business",
            label: "Connecting speed to money",
            summary:
              "The reason this role is funded. Learn to make the argument with data.",
            topics: [
              "Conversion and bounce correlation",
              "A/B testing a performance change",
              "Performance budgets as a contract",
              "Reporting to non-engineers",
            ],
          },
          {
            id: "perf-protocol",
            label: "Network fundamentals",
            summary:
              "Latency, TLS and protocol behaviour set the floor on what is achievable.",
            topics: [
              "DNS, TCP, TLS handshake costs",
              "HTTP/2 and HTTP/3 multiplexing",
              "Compression: gzip vs brotli",
              "CDN behaviour and cache hit ratio",
            ],
          },
        ],
      },
      {
        id: "perf-s2",
        title: "Loading performance",
        duration: "4-5 weeks",
        goal: "Getting the first meaningful pixels on screen as early as physically possible.",
        build:
          "Take a real page from a 4s LCP to under 2.5s on a throttled mobile connection, documenting each change.",
        nodes: [
          {
            id: "perf-critical-path",
            label: "The critical rendering path",
            summary:
              "What blocks the first paint, and how to unblock it in the right order.",
            topics: [
              "Render-blocking CSS and JavaScript",
              "Critical CSS extraction and inlining",
              "Resource hints: preload, preconnect, prefetch",
              "Fetch priority and lazy loading",
            ],
          },
          {
            id: "perf-js",
            label: "JavaScript payload",
            summary:
              "The single largest lever on most sites: ship less script.",
            topics: [
              "Bundle analysis and dependency weight",
              "Code splitting and route-level chunks",
              "Tree shaking and side effects",
              "Polyfill strategy and differential serving",
            ],
          },
          {
            id: "perf-images",
            label: "Images and media",
            summary:
              "Usually the largest bytes on the page, and usually the easiest win.",
            topics: [
              "AVIF and WebP with fallbacks",
              "Responsive images: srcset and sizes",
              "Lazy loading and the LCP exception",
              "Video posters and streaming formats",
            ],
          },
          {
            id: "perf-fonts",
            label: "Web fonts",
            summary:
              "A classic source of both CLS and invisible text.",
            topics: [
              "font-display strategies",
              "Subsetting and unicode-range",
              "Self-hosting vs third-party",
              "Metric-compatible fallbacks",
            ],
          },
          {
            id: "perf-caching",
            label: "Caching and delivery",
            summary:
              "The fastest request is the one that never leaves the device.",
            topics: [
              "Cache-Control and immutable assets",
              "Stale-while-revalidate",
              "Service workers and offline caching",
              "Edge rendering and CDN cache keys",
            ],
          },
        ],
      },
      {
        id: "perf-s3",
        title: "Runtime performance",
        duration: "4-5 weeks",
        goal: "After it loads, keep it responsive. INP made this a first-class ranking concern.",
        build:
          "Find and fix the three worst long tasks on a real application, with trace evidence before and after.",
        nodes: [
          {
            id: "perf-inp",
            label: "Interaction responsiveness",
            summary:
              "INP is the newest and least understood vital, which makes it interview-relevant.",
            topics: [
              "Long tasks and input delay",
              "Yielding to the main thread",
              "scheduler.yield and isInputPending",
              "Event handler cost",
            ],
          },
          {
            id: "perf-rendering",
            label: "Rendering pipeline",
            summary:
              "Style, layout, paint, composite — and which properties skip which steps.",
            topics: [
              "Layout thrashing and forced synchronous layout",
              "Compositor-only animation properties",
              "will-change and content-visibility",
              "Paint areas and layer explosion",
            ],
          },
          {
            id: "perf-memory",
            label: "Memory and leaks",
            summary:
              "Long-lived single-page apps get slower over a session. Nobody tests for it.",
            topics: [
              "Heap snapshots and retained size",
              "Detached DOM nodes",
              "Listener and timer leaks",
              "Memory on low-end devices",
            ],
          },
          {
            id: "perf-framework",
            label: "Framework-level performance",
            summary:
              "Where the abstraction costs you, and what the framework gives you to fix it.",
            topics: [
              "React render profiling and memoisation",
              "Virtualisation for long lists",
              "Hydration cost and partial hydration",
              "Islands and server components",
            ],
          },
          {
            id: "perf-workers",
            label: "Offloading work",
            kind: "recommended",
            summary:
              "Web workers and WASM for the genuinely expensive cases.",
            topics: [
              "Web workers and transferable objects",
              "Comlink and worker ergonomics",
              "WebAssembly for compute-heavy paths",
              "OffscreenCanvas",
            ],
          },
        ],
      },
      {
        id: "perf-s4",
        title: "Keeping it fast",
        duration: "3-4 weeks",
        goal: "Performance regresses by default. The real job is building the ratchet.",
        build:
          "Add performance budgets and a CI gate that fails a pull request which regresses LCP or bundle size.",
        nodes: [
          {
            id: "perf-budgets",
            label: "Performance budgets",
            summary:
              "A number in CI is worth more than a wiki page nobody reads.",
            topics: [
              "Choosing budgets that bite",
              "Bundle size limits per route",
              "Lighthouse CI in the pipeline",
              "Handling justified budget breaks",
            ],
          },
          {
            id: "perf-monitoring",
            label: "Continuous monitoring",
            summary:
              "Catching a regression the day it ships, not the quarter it ships.",
            topics: [
              "RUM alerting on percentile shifts",
              "Per-release performance comparison",
              "Attribution: which change caused it",
              "Third-party script monitoring",
            ],
          },
          {
            id: "perf-thirdparty",
            label: "Third-party scripts",
            summary:
              "Usually the worst offender and the hardest political fight.",
            topics: [
              "Auditing tag manager payloads",
              "Facades for embeds and chat widgets",
              "Partytown and worker offloading",
              "Negotiating removal with marketing",
            ],
          },
          {
            id: "perf-culture",
            label: "Making it stick",
            summary:
              "Performance work that depends on one person disappears when that person leaves.",
            topics: [
              "Dashboards teams actually look at",
              "Performance review in design and PR",
              "Teaching profiling to product teams",
              "Documenting the known slow paths",
            ],
          },
          {
            id: "perf-backend",
            label: "Server-side contribution",
            kind: "recommended",
            summary:
              "TTFB is often the real problem, and it is not a frontend fix.",
            topics: [
              "Time to first byte and server rendering cost",
              "Database query time in the request path",
              "Edge caching and regional latency",
              "Streaming HTML responses",
            ],
          },
        ],
      },
      {
        id: "perf-s5",
        title: "Interview and evidence",
        duration: "2-3 weeks",
        goal: "This role hires almost entirely on demonstrated, measured results.",
        build:
          "A public case study: the site, the trace, the changes, and the field data movement afterwards.",
        nodes: [
          {
            id: "perf-audit-round",
            label: "The live audit round",
            summary:
              "Given a slow page and DevTools, find the problems out loud. The core interview.",
            topics: [
              "Systematic trace reading",
              "Prioritising by impact, not ease",
              "Explaining findings to a mixed audience",
              "Proposing a remediation order",
            ],
          },
          {
            id: "perf-design",
            label: "Performance system design",
            summary:
              "Design the delivery architecture for a large site under a latency budget.",
            topics: [
              "CDN and edge strategy",
              "Rendering mode selection per route",
              "Caching layers and invalidation",
              "Global latency and regional deployment",
            ],
          },
          {
            id: "perf-questions",
            label: "The recurring question set",
            summary:
              "A small, stable set of questions covers most performance interviews.",
            topics: [
              "What exactly is LCP measuring here",
              "How would you cut INP on this page",
              "Preload vs prefetch vs preconnect",
              "Why did CLS get worse after the fix",
            ],
          },
          {
            id: "perf-portfolio",
            label: "Case studies as portfolio",
            summary:
              "Numbers with a methodology attached. Vague claims are worse than none.",
            topics: [
              "Before and after field data",
              "Methodology and confounders declared",
              "Business impact where you can measure it",
              "Open-source contributions to tooling",
            ],
          },
          {
            id: "perf-behavioural",
            label: "Behavioural round",
            summary:
              "Most performance work is convincing other teams to change their code.",
            topics: [
              "Getting a third-party script removed",
              "Prioritising against feature deadlines",
              "Explaining a regression to leadership",
              "Teaching a team to profile",
            ],
          },
        ],
      },
    ],
    tools: [
      "Chrome DevTools",
      "Lighthouse CI",
      "WebPageTest",
      "CrUX / RUM",
      "Perfetto",
      "Bundle analysers",
      "Partytown",
      "k6",
    ],
    proofOfWork: [
      "A public case study with before/after field data",
      "A CI performance gate adopted by a real project",
      "A trace-backed write-up of a long-task fix",
      "A measured third-party script removal with impact numbers",
    ],
  },
];
