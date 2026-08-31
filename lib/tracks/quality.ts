import type { RoadmapTrack } from "@/lib/roadmaps";

/** Quality engineering and testing tracks. */
export const QUALITY_TRACKS: RoadmapTrack[] = [
  {
    slug: "qa-automation-engineer",
    title: "QA Automation Engineer",
    shortTitle: "QA Automation",
    category: "Quality & Testing",
    mark: "QA",
    tagline:
      "Replace manual regression with suites that run in minutes and are trusted enough to block a release.",
    market:
      "Steady demand across product companies, service companies and regulated industries. Manual-only testing roles are shrinking; automation skills are what keeps the career growing.",
    timeline: "4-7 months part-time",
    entryBar: "Manual testing experience or a junior development background.",
    updated: "2026-08-31",
    prerequisites: [
      "Understanding of how web applications work",
      "Willingness to write real code",
      "Basic Git",
    ],
    stages: [
      {
        id: "qa-s1",
        title: "Testing fundamentals",
        duration: "3-5 weeks",
        goal: "Automation without testing judgement just produces fast, useless tests.",
        build:
          "Write a full test plan for a real feature, including the cases you decided not to automate.",
        nodes: [
          {
            id: "qa-principles",
            label: "Testing principles",
            summary:
              "The vocabulary interviewers use, and the reasoning behind what to test.",
            topics: [
              "Test levels: unit, integration, end to end",
              "The test pyramid and its critiques",
              "Black box, white box and grey box",
              "Static versus dynamic testing",
            ],
          },
          {
            id: "qa-design",
            label: "Test case design",
            summary:
              "Systematic techniques beat 'try things and see', and are directly interviewed.",
            topics: [
              "Equivalence partitioning and boundary values",
              "Decision tables and state transitions",
              "Pairwise and combinatorial testing",
              "Risk-based prioritisation",
            ],
          },
          {
            id: "qa-exploratory",
            label: "Exploratory testing",
            summary:
              "Automation finds regressions; exploration finds the bugs nobody predicted.",
            topics: [
              "Charters and time-boxed sessions",
              "Heuristics and oracles",
              "Note-taking and reproducibility",
              "When exploration beats automation",
            ],
          },
          {
            id: "qa-bugs",
            label: "Defect reporting",
            summary:
              "A bug report nobody can reproduce is wasted work, and this is assessed in interviews.",
            topics: [
              "Reproduction steps that actually work",
              "Severity versus priority",
              "Evidence: logs, screenshots, network traces",
              "Triage and duplicate handling",
            ],
          },
          {
            id: "qa-sdlc",
            label: "Quality in the lifecycle",
            summary:
              "Testing at the end is the most expensive place to find anything.",
            topics: [
              "Shift-left and early involvement",
              "Acceptance criteria and definition of done",
              "Agile testing quadrants",
              "Release and regression strategy",
            ],
          },
        ],
      },
      {
        id: "qa-s2",
        title: "Programming for automation",
        duration: "5-6 weeks",
        goal: "Automation is software development. The code quality bar is the same.",
        build:
          "A small utility library with tests, packaged and versioned, before writing any UI automation.",
        nodes: [
          {
            id: "qa-language",
            label: "A programming language",
            summary:
              "JavaScript/TypeScript, Python or Java. Pick the one your target employers use.",
            topics: [
              "Language fundamentals and data structures",
              "Async programming and promises",
              "Error handling",
              "Package management",
            ],
          },
          {
            id: "qa-code-quality",
            label: "Writing maintainable test code",
            summary:
              "Unmaintainable suites get deleted. This is the main reason automation projects fail.",
            topics: [
              "DRY without over-abstraction",
              "Page object and screenplay patterns",
              "Configuration and environment handling",
              "Code review for tests",
            ],
          },
          {
            id: "qa-git",
            label: "Version control and collaboration",
            summary:
              "Test code lives with product code and follows the same process.",
            topics: [
              "Branching and pull requests",
              "Reviewing test changes",
              "Keeping tests alongside features",
              "Handling merge conflicts in suites",
            ],
          },
          {
            id: "qa-unit",
            label: "Unit and integration testing",
            summary:
              "Understanding what developers test stops you duplicating it at the UI level.",
            topics: [
              "Unit test frameworks and assertions",
              "Test doubles: stubs, mocks, fakes",
              "Integration test boundaries",
              "Coverage and its misuse as a target",
            ],
          },
          {
            id: "qa-data",
            label: "Test data management",
            summary:
              "Shared mutable test data is the most common cause of flaky suites.",
            topics: [
              "Fixtures and factories",
              "Isolation between tests",
              "Seeding and cleanup strategies",
              "Handling production-like data safely",
            ],
          },
        ],
      },
      {
        id: "qa-s3",
        title: "UI and API automation",
        duration: "5-7 weeks",
        goal: "Build suites that are fast, stable and worth the maintenance they demand.",
        build:
          "Automate a real application's critical journeys and get the suite under ten minutes with zero flakes.",
        nodes: [
          {
            id: "qa-playwright",
            label: "Browser automation",
            summary:
              "Playwright has become the default. Auto-waiting removed most classic flakiness.",
            topics: [
              "Locator strategies that survive refactors",
              "Auto-waiting and explicit assertions",
              "Fixtures, contexts and parallelism",
              "Trace viewer for debugging failures",
            ],
          },
          {
            id: "qa-api",
            label: "API testing",
            summary:
              "Faster, more stable and more valuable per test than UI automation.",
            topics: [
              "REST and GraphQL request testing",
              "Schema and contract validation",
              "Authentication in test suites",
              "Testing error and edge responses",
            ],
          },
          {
            id: "qa-flakiness",
            label: "Flakiness",
            summary:
              "A flaky suite is worse than no suite, and this is the most-asked interview topic.",
            topics: [
              "Root causes: timing, state, order dependence",
              "Detecting flakes systematically",
              "Quarantine policy",
              "Deterministic test design",
            ],
          },
          {
            id: "qa-mobile",
            label: "Mobile automation",
            kind: "recommended",
            summary:
              "A distinct skill set with its own tooling and device constraints.",
            topics: [
              "Appium and platform drivers",
              "Device farms and emulators",
              "Mobile-specific gestures and waits",
              "Cross-platform test reuse",
            ],
          },
          {
            id: "qa-visual",
            label: "Visual and accessibility checks",
            kind: "recommended",
            summary:
              "Automated checks for things assertions cannot express.",
            topics: [
              "Visual regression testing",
              "Baseline management and review",
              "Automated accessibility scanning",
              "Integrating checks into the suite",
            ],
          },
        ],
      },
      {
        id: "qa-s4",
        title: "CI and quality engineering",
        duration: "3-5 weeks",
        goal: "A suite that does not run automatically on every change is documentation.",
        build:
          "Wire the suite into CI with parallelism, reporting and a policy for what blocks a merge.",
        nodes: [
          {
            id: "qa-ci",
            label: "Running tests in CI",
            summary:
              "Speed and reliability decide whether teams keep the gate or bypass it.",
            topics: [
              "Pipeline stages and test selection",
              "Parallelisation and sharding",
              "Containerised test environments",
              "Feedback time targets",
            ],
          },
          {
            id: "qa-reporting",
            label: "Reporting and triage",
            summary:
              "Failures that nobody investigates train the team to ignore red builds.",
            topics: [
              "Readable failure reports",
              "Artefacts: screenshots, video, traces",
              "Trend and flake dashboards",
              "Ownership of failures",
            ],
          },
          {
            id: "qa-environments",
            label: "Test environments",
            summary:
              "Environment instability is blamed on tests more often than it deserves.",
            topics: [
              "Ephemeral environments per branch",
              "Service virtualisation and mocking",
              "Managing third-party dependencies",
              "Environment parity",
            ],
          },
          {
            id: "qa-strategy",
            label: "Test strategy",
            summary:
              "Deciding what to automate and at which level is the senior part of the role.",
            topics: [
              "Coverage of risk, not lines",
              "Cost of maintenance per test",
              "Deleting tests deliberately",
              "Balancing suite levels",
            ],
          },
          {
            id: "qa-metrics",
            label: "Quality metrics",
            kind: "recommended",
            summary:
              "Measuring quality without creating incentives to game the numbers.",
            topics: [
              "Escaped defects and severity trends",
              "Suite runtime and flake rate",
              "Coverage as a signal, not a target",
              "Reporting quality to stakeholders",
            ],
          },
        ],
      },
      {
        id: "qa-s5",
        title: "Interview preparation",
        duration: "2-4 weeks",
        goal: "QA interviews mix test design questions with a live automation exercise.",
        build:
          "A public automation framework with a README explaining the design decisions.",
        nodes: [
          {
            id: "qa-design-round",
            label: "Test design round",
            summary:
              "How would you test this. The oldest and most reliable QA question.",
            topics: [
              "Designing cases for a described feature",
              "Boundary and negative cases",
              "Prioritising under time pressure",
              "Explaining what you would not test",
            ],
          },
          {
            id: "qa-coding-round",
            label: "Coding round",
            summary:
              "Write automation live, usually against a public site or API.",
            topics: [
              "Automating a flow from scratch",
              "Handling waits correctly",
              "Structuring for reuse",
              "Basic algorithm questions",
            ],
          },
          {
            id: "qa-scenario",
            label: "Scenario round",
            summary:
              "The suite is flaky and the team stopped trusting it. What do you do.",
            topics: [
              "Diagnosing flakiness systematically",
              "Rebuilding trust in a suite",
              "Arguing for time to fix tests",
              "Handling a release with known bugs",
            ],
          },
          {
            id: "qa-tooling",
            label: "Tooling questions",
            summary:
              "Direct questions on the framework the employer uses.",
            topics: [
              "Playwright or Selenium specifics",
              "Locator strategy trade-offs",
              "Parallel execution mechanics",
              "Reporting integration",
            ],
          },
          {
            id: "qa-portfolio",
            label: "Portfolio",
            summary:
              "A public framework demonstrates code quality, which is what employers doubt.",
            topics: [
              "Public automation repository",
              "Documented design decisions",
              "CI running on every push",
              "A flakiness reduction case study",
            ],
          },
        ],
      },
    ],
    tools: [
      "Playwright",
      "TypeScript / Python",
      "Postman / REST clients",
      "GitHub Actions",
      "Appium",
      "Allure reporting",
      "Docker",
    ],
    proofOfWork: [
      "A public automation framework with CI running",
      "A suite runtime reduction with before/after numbers",
      "A flakiness investigation and fix write-up",
      "A written test strategy for a real product",
    ],
  },

  {
    slug: "sdet",
    title: "Software Development Engineer in Test",
    shortTitle: "SDET",
    category: "Quality & Testing",
    mark: "SD",
    tagline:
      "A developer who builds the tools, frameworks and infrastructure that make quality measurable at scale.",
    market:
      "Paid on the engineering scale rather than the QA scale. Product companies hire SDETs to build testing platforms rather than to execute tests.",
    timeline: "6-9 months part-time",
    entryBar: "Real development ability. This is a software engineering role.",
    updated: "2026-08-31",
    prerequisites: [
      "Strong programming in one language",
      "Data structures and algorithms basics",
      "Understanding of distributed systems",
    ],
    stages: [
      {
        id: "sdet-s1",
        title: "Engineering fundamentals",
        duration: "5-7 weeks",
        goal: "SDET interviews include the same coding rounds as developer interviews.",
        build:
          "A well-structured library with full test coverage, published and documented.",
        nodes: [
          {
            id: "sdet-programming",
            label: "Programming depth",
            summary:
              "You will be assessed as a developer, because that is what the role is.",
            topics: [
              "Language internals and idioms",
              "Concurrency and async patterns",
              "Memory and performance basics",
              "Writing libraries others consume",
            ],
          },
          {
            id: "sdet-dsa",
            label: "Data structures and algorithms",
            summary:
              "Present in most SDET loops at product companies.",
            topics: [
              "Arrays, hash maps, strings",
              "Trees, graphs and traversal",
              "Complexity analysis",
              "Problem solving under time pressure",
            ],
            ref: { href: "/11-dsa-coding-questions", label: "DSA Coding Questions" },
          },
          {
            id: "sdet-design",
            label: "Software design",
            summary:
              "Frameworks are long-lived software. Design decisions compound.",
            topics: [
              "SOLID principles applied to test code",
              "Design patterns in frameworks",
              "API design for test authors",
              "Extensibility and plugin architecture",
            ],
          },
          {
            id: "sdet-testing-theory",
            label: "Testing theory",
            summary:
              "The quality expertise that distinguishes an SDET from a generalist developer.",
            topics: [
              "Test levels and appropriate boundaries",
              "Test doubles and dependency injection",
              "Determinism and isolation",
              "Coverage models and their limits",
            ],
          },
          {
            id: "sdet-systems",
            label: "Systems knowledge",
            summary:
              "Testing distributed systems requires understanding them.",
            topics: [
              "HTTP, networking and protocols",
              "Databases and transactions",
              "Message queues and async flows",
              "Containers and orchestration",
            ],
          },
        ],
      },
      {
        id: "sdet-s2",
        title: "Building test frameworks",
        duration: "6-7 weeks",
        goal: "The core deliverable: infrastructure other engineers write tests on top of.",
        build:
          "Build a test framework from scratch with fixtures, reporting and parallel execution.",
        nodes: [
          {
            id: "sdet-framework",
            label: "Framework architecture",
            summary:
              "The design decisions that determine whether the framework survives two years.",
            topics: [
              "Runner, fixtures and lifecycle hooks",
              "Configuration and environment layering",
              "Assertion libraries and custom matchers",
              "Plugin and extension points",
            ],
          },
          {
            id: "sdet-fixtures",
            label: "Test data and fixtures",
            summary:
              "State management is the hardest part of a shared test framework.",
            topics: [
              "Factory patterns for test data",
              "Isolation and cleanup guarantees",
              "Seeding strategies at scale",
              "Deterministic randomness",
            ],
          },
          {
            id: "sdet-parallel",
            label: "Parallel execution",
            summary:
              "Suite runtime is the metric teams feel daily.",
            topics: [
              "Sharding and work distribution",
              "Resource contention and isolation",
              "Flake risk from parallelism",
              "Dynamic test selection",
            ],
          },
          {
            id: "sdet-reporting",
            label: "Reporting and diagnostics",
            summary:
              "The framework's job is to make failures obvious without investigation.",
            topics: [
              "Structured result formats",
              "Automatic artefact capture",
              "Failure clustering and deduplication",
              "Historical trend storage",
            ],
          },
          {
            id: "sdet-mocking",
            label: "Service virtualisation",
            summary:
              "Testing against unreliable third parties requires replacing them.",
            topics: [
              "Mock servers and contract fidelity",
              "Record and replay",
              "Chaos and fault injection in tests",
              "Keeping mocks honest",
            ],
          },
        ],
      },
      {
        id: "sdet-s3",
        title: "Advanced testing techniques",
        duration: "5-6 weeks",
        goal: "Techniques that find bugs example-based tests structurally cannot.",
        build:
          "Add property-based tests and contract tests to a real service and document what they caught.",
        nodes: [
          {
            id: "sdet-property",
            label: "Property-based testing",
            summary:
              "Generating inputs rather than enumerating them. A strong differentiator.",
            topics: [
              "Properties and invariants",
              "Generators and shrinking",
              "Stateful property testing",
              "When properties beat examples",
            ],
          },
          {
            id: "sdet-contract",
            label: "Contract testing",
            summary:
              "Catching integration breakage without a full integration environment.",
            topics: [
              "Consumer-driven contracts",
              "Provider verification",
              "Contract versioning",
              "Contracts versus end-to-end tests",
            ],
          },
          {
            id: "sdet-mutation",
            label: "Mutation testing",
            summary:
              "Testing the tests. Reveals coverage that asserts nothing.",
            topics: [
              "Mutation operators and scores",
              "Interpreting surviving mutants",
              "Runtime cost management",
              "Targeting critical code paths",
            ],
          },
          {
            id: "sdet-fuzz",
            label: "Fuzzing",
            kind: "recommended",
            summary:
              "Especially valuable for parsers, protocols and anything handling untrusted input.",
            topics: [
              "Coverage-guided fuzzing",
              "Corpus management",
              "Crash triage and reproduction",
              "Continuous fuzzing in CI",
            ],
          },
          {
            id: "sdet-distributed",
            label: "Testing distributed systems",
            summary:
              "Correctness under partial failure is where real systems break.",
            topics: [
              "Fault injection and network partitions",
              "Deterministic simulation testing",
              "Idempotency and retry verification",
              "Consistency assertions",
            ],
          },
        ],
      },
      {
        id: "sdet-s4",
        title: "Quality infrastructure",
        duration: "4-6 weeks",
        goal: "Owning the platform that all teams' tests run on.",
        build:
          "Build a test infrastructure service: environment provisioning, result storage and flake detection.",
        nodes: [
          {
            id: "sdet-ci",
            label: "CI at scale",
            summary:
              "Thousands of tests across many repositories needs real infrastructure.",
            topics: [
              "Build and test caching",
              "Test impact analysis and selection",
              "Runner fleets and autoscaling",
              "Cost per pipeline run",
            ],
          },
          {
            id: "sdet-environments",
            label: "Environment automation",
            summary:
              "Provisioning realistic environments on demand is a large part of the role.",
            topics: [
              "Ephemeral environments from code",
              "Data seeding at scale",
              "Dependency stubbing strategy",
              "Environment lifecycle and cost",
            ],
          },
          {
            id: "sdet-flake",
            label: "Flake detection systems",
            summary:
              "Automated detection and quarantine rather than manual triage.",
            topics: [
              "Statistical flake identification",
              "Automatic quarantine workflows",
              "Rerun policies and their risks",
              "Flake budgets per team",
            ],
          },
          {
            id: "sdet-observability",
            label: "Test observability",
            summary:
              "Treating test results as a data product with dashboards and alerts.",
            topics: [
              "Result warehousing and querying",
              "Runtime and reliability dashboards",
              "Correlating failures with changes",
              "Alerting on suite health",
            ],
          },
          {
            id: "sdet-shiftright",
            label: "Testing in production",
            kind: "recommended",
            summary:
              "Some behaviour only exists in production, and can be verified safely.",
            topics: [
              "Synthetic monitoring",
              "Canary analysis and automated rollback",
              "Feature flag testing",
              "Production smoke tests",
            ],
          },
        ],
      },
      {
        id: "sdet-s5",
        title: "Interview preparation",
        duration: "3-5 weeks",
        goal: "SDET loops are developer loops plus testing design rounds.",
        build:
          "An open-source testing tool or framework with documentation and adoption.",
        nodes: [
          {
            id: "sdet-coding-round",
            label: "Coding round",
            summary:
              "Standard algorithm and implementation questions, same bar as developers.",
            topics: [
              "Data structure problems",
              "Implementing a small utility correctly",
              "Writing tests for your own solution",
              "Complexity discussion",
            ],
          },
          {
            id: "sdet-framework-round",
            label: "Framework design round",
            summary:
              "Design a test framework or infrastructure component out loud.",
            topics: [
              "API design for test authors",
              "Parallelism and isolation design",
              "Reporting architecture",
              "Extensibility trade-offs",
            ],
          },
          {
            id: "sdet-testing-round",
            label: "Test design round",
            summary:
              "Given a system, design the testing strategy across all levels.",
            topics: [
              "Choosing test levels for a feature",
              "Testing a distributed workflow",
              "Balancing confidence against runtime",
              "Testing the untestable legacy component",
            ],
          },
          {
            id: "sdet-debug-round",
            label: "Debugging round",
            summary:
              "A test fails intermittently in CI only. Diagnose it.",
            topics: [
              "Reasoning about timing and ordering",
              "Environment versus code causes",
              "Reproducing intermittent failures",
              "Proposing a permanent fix",
            ],
          },
          {
            id: "sdet-portfolio",
            label: "Portfolio",
            summary:
              "Published tooling is the clearest evidence for this role.",
            topics: [
              "An open-source testing tool",
              "A framework with real users",
              "A CI runtime reduction case study",
              "Contributions to testing libraries",
            ],
          },
        ],
      },
    ],
    tools: [
      "TypeScript / Java / Python",
      "Playwright",
      "Pact",
      "Testcontainers",
      "Hypothesis / fast-check",
      "GitHub Actions",
      "Kubernetes",
    ],
    proofOfWork: [
      "An open-source test framework or tool",
      "A property-based or contract testing implementation",
      "A CI pipeline runtime reduction with numbers",
      "An automated flake detection system",
    ],
  },

  {
    slug: "performance-test-engineer",
    title: "Performance Test Engineer",
    shortTitle: "Performance Testing",
    category: "Quality & Testing",
    mark: "PF",
    tagline:
      "Find the breaking point before your users do, and turn the result into a specific engineering fix.",
    market:
      "Concentrated where downtime is expensive: banking, telecoms, e-commerce and ticketing. A small specialism with consistently high day rates in consultancy.",
    timeline: "4-7 months part-time",
    entryBar: "Testing, development or operations background.",
    updated: "2026-08-31",
    prerequisites: [
      "Understanding of HTTP and client/server architecture",
      "Basic scripting ability",
      "Comfort reading metrics and graphs",
    ],
    stages: [
      {
        id: "pf-s1",
        title: "Performance fundamentals",
        duration: "3-5 weeks",
        goal: "Precise vocabulary. Most performance discussions fail on confused terminology.",
        build:
          "Write a performance test plan with explicit requirements, workload model and success criteria.",
        nodes: [
          {
            id: "pf-concepts",
            label: "Core concepts",
            summary:
              "Throughput, latency, concurrency and utilisation, and how they relate.",
            topics: [
              "Latency versus throughput",
              "Concurrency, arrival rate and Little's Law",
              "Utilisation and saturation",
              "Percentiles and why averages mislead",
            ],
          },
          {
            id: "pf-types",
            label: "Test types",
            summary:
              "Load, stress, soak and spike tests answer different questions.",
            topics: [
              "Load testing to expected volume",
              "Stress testing to find the limit",
              "Soak testing for leaks and degradation",
              "Spike and scalability testing",
            ],
          },
          {
            id: "pf-requirements",
            label: "Requirements and workload modelling",
            summary:
              "A test against an invented workload proves nothing.",
            topics: [
              "Deriving requirements from business volumes",
              "Realistic user journey mixes",
              "Think time and pacing",
              "Peak versus average modelling",
            ],
          },
          {
            id: "pf-systems",
            label: "System architecture",
            summary:
              "You cannot find the bottleneck without knowing the components.",
            topics: [
              "Tiers, load balancers and caches",
              "Connection pooling and thread models",
              "Queues and asynchronous processing",
              "Cloud autoscaling behaviour",
            ],
          },
          {
            id: "pf-statistics",
            label: "Statistics for performance",
            summary:
              "Distinguishing a real regression from run-to-run variance.",
            topics: [
              "Percentiles and distribution shape",
              "Variance between runs",
              "Warm-up and steady state",
              "Sample size and confidence",
            ],
          },
        ],
      },
      {
        id: "pf-s2",
        title: "Building and running tests",
        duration: "4-6 weeks",
        goal: "Realistic, repeatable tests that produce results you can defend.",
        build:
          "Load test a real application to its breaking point and produce a report with the limiting resource identified.",
        nodes: [
          {
            id: "pf-tools",
            label: "Load testing tools",
            summary:
              "k6, JMeter or Gatling. Code-based tools are increasingly preferred.",
            topics: [
              "k6 scripting and scenarios",
              "JMeter for enterprise contexts",
              "Distributed load generation",
              "Tool selection criteria",
            ],
          },
          {
            id: "pf-scripting",
            label: "Test scripting",
            summary:
              "Realistic scripts, with correlation and parameterisation done properly.",
            topics: [
              "Correlation of dynamic values",
              "Parameterisation and test data",
              "Authentication and session handling",
              "Assertions and error handling",
            ],
          },
          {
            id: "pf-environment",
            label: "Test environments",
            summary:
              "A test on hardware unlike production produces numbers unlike production.",
            topics: [
              "Environment sizing and scaling factors",
              "Data volume representativeness",
              "Isolating from other traffic",
              "Load generator capacity",
            ],
          },
          {
            id: "pf-execution",
            label: "Execution discipline",
            summary:
              "Small procedural mistakes invalidate an entire test cycle.",
            topics: [
              "Ramp-up and steady state",
              "Monitoring during the run",
              "Recognising an invalid test",
              "Repeatability and controls",
            ],
          },
          {
            id: "pf-frontend",
            label: "Client-side performance",
            kind: "recommended",
            summary:
              "Server response time is only part of what the user experiences.",
            topics: [
              "Core Web Vitals basics",
              "Browser-based performance testing",
              "Network condition simulation",
              "Correlating client and server timing",
            ],
          },
        ],
      },
      {
        id: "pf-s3",
        title: "Analysis and bottleneck hunting",
        duration: "4-6 weeks",
        goal: "The valuable half: turning a slow result into a specific, actionable cause.",
        build:
          "Diagnose three different bottlenecks — database, thread pool and memory — with evidence for each.",
        nodes: [
          {
            id: "pf-monitoring",
            label: "Monitoring during tests",
            summary:
              "Response times tell you there is a problem; system metrics tell you where.",
            topics: [
              "CPU, memory, disk and network saturation",
              "JVM or runtime metrics",
              "Database and connection pool metrics",
              "Correlating layers on one timeline",
            ],
          },
          {
            id: "pf-profiling",
            label: "Profiling",
            summary:
              "Going from 'the service is slow' to 'this method is slow'.",
            topics: [
              "CPU profiling and flame graphs",
              "Memory profiling and leak detection",
              "Async and thread analysis",
              "Profiling overhead considerations",
            ],
          },
          {
            id: "pf-database",
            label: "Database bottlenecks",
            summary:
              "The most common root cause in application performance testing.",
            topics: [
              "Slow query identification under load",
              "Lock contention and deadlocks",
              "Connection pool exhaustion",
              "N+1 queries revealed by load",
            ],
          },
          {
            id: "pf-concurrency",
            label: "Concurrency bottlenecks",
            summary:
              "Thread pools, locks and queues that serialise under pressure.",
            topics: [
              "Thread pool sizing and starvation",
              "Lock contention",
              "Queue growth and backpressure",
              "Timeout cascades",
            ],
          },
          {
            id: "pf-reporting",
            label: "Reporting results",
            summary:
              "The deliverable, and what interviewers ask to see.",
            topics: [
              "Executive summary with the headline number",
              "Evidence-backed root cause",
              "Specific recommendations",
              "Capacity conclusions",
            ],
          },
        ],
      },
      {
        id: "pf-s4",
        title: "Continuous performance",
        duration: "3-4 weeks",
        goal: "Testing once before release finds problems too late to fix cheaply.",
        build:
          "Add automated performance tests to CI with thresholds that fail a regression.",
        nodes: [
          {
            id: "pf-ci",
            label: "Performance testing in CI",
            summary:
              "Short, targeted tests on every change rather than a big-bang cycle.",
            topics: [
              "Smoke-level performance tests",
              "Thresholds and pass/fail criteria",
              "Managing variance in CI environments",
              "Trend tracking across builds",
            ],
          },
          {
            id: "pf-benchmarks",
            label: "Microbenchmarks",
            summary:
              "Component-level measurement, with all the ways it misleads.",
            topics: [
              "Benchmark harnesses and warm-up",
              "Avoiding dead code elimination",
              "Statistical rigour in benchmarks",
              "When microbenchmarks mislead",
            ],
          },
          {
            id: "pf-production",
            label: "Production performance",
            summary:
              "Real users on real networks are the ultimate performance test.",
            topics: [
              "Real user monitoring",
              "APM and distributed tracing",
              "Comparing test results to production",
              "Capacity monitoring and alerts",
            ],
          },
          {
            id: "pf-capacity",
            label: "Capacity planning",
            summary:
              "Turning test results into infrastructure and cost decisions.",
            topics: [
              "Headroom targets",
              "Growth forecasting",
              "Autoscaling policy validation",
              "Cost per transaction",
            ],
          },
          {
            id: "pf-chaos",
            label: "Resilience under load",
            kind: "recommended",
            summary:
              "Systems behave differently when a dependency fails while under load.",
            topics: [
              "Failure injection during load tests",
              "Degradation behaviour",
              "Recovery time after overload",
              "Circuit breaker verification",
            ],
          },
        ],
      },
      {
        id: "pf-s5",
        title: "Interview preparation",
        duration: "2-3 weeks",
        goal: "Interviews are scenario-driven: given these numbers, what is wrong.",
        build:
          "A public performance test report with methodology, findings and recommendations.",
        nodes: [
          {
            id: "pf-concepts-round",
            label: "Concepts round",
            summary:
              "Precise definitions are tested, because imprecision causes bad tests.",
            topics: [
              "Explain percentiles versus averages",
              "Little's Law applied to a scenario",
              "Load versus stress versus soak",
              "Why the average response time is fine but users complain",
            ],
          },
          {
            id: "pf-scenario-round",
            label: "Analysis round",
            summary:
              "Given a graph, identify the bottleneck. The signature interview exercise.",
            topics: [
              "Reading response time and throughput curves",
              "Identifying saturation points",
              "Distinguishing client from server limits",
              "Recognising an invalid test",
            ],
          },
          {
            id: "pf-design-round",
            label: "Test design round",
            summary:
              "Design a performance test programme for a described system.",
            topics: [
              "Deriving a workload model",
              "Environment and data strategy",
              "Success criteria definition",
              "Reporting plan",
            ],
          },
          {
            id: "pf-tooling-round",
            label: "Tooling round",
            summary:
              "Scripting questions on the tool the employer uses.",
            topics: [
              "Writing a k6 or JMeter scenario",
              "Correlation and parameterisation",
              "Distributed execution setup",
              "Results integration",
            ],
          },
          {
            id: "pf-portfolio",
            label: "Portfolio",
            summary:
              "A well-written report is worth more than a certificate here.",
            topics: [
              "A public performance report",
              "Bottleneck case studies with evidence",
              "CI performance gate implementation",
              "Capacity model for a real system",
            ],
          },
        ],
      },
    ],
    tools: [
      "k6",
      "JMeter",
      "Gatling",
      "Grafana",
      "Prometheus",
      "APM tooling",
      "Async Profiler",
    ],
    proofOfWork: [
      "A published performance test report with root cause analysis",
      "A CI performance gate that catches regressions",
      "Three documented bottleneck investigations",
      "A capacity model derived from test results",
    ],
  },
];
