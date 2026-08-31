import type { RoadmapTrack } from "@/lib/roadmaps";

/** Product, delivery and technical leadership tracks. */
export const PRODUCT_TRACKS: RoadmapTrack[] = [
  {
    slug: "technical-product-manager",
    title: "Technical Product Manager",
    shortTitle: "Technical PM",
    category: "Product & Delivery",
    mark: "TP",
    tagline:
      "Decide what gets built and why, close enough to the engineering to be trusted by the people building it.",
    market:
      "Named in demand surveys alongside IT project management. Platform, API and infrastructure products specifically need PMs who can hold a technical conversation.",
    timeline: "6-9 months part-time",
    entryBar: "Engineering, analytics or technical support background.",
    updated: "2026-08-31",
    prerequisites: [
      "Understanding of how software is built",
      "Clear writing",
      "Comfort with data and SQL basics",
    ],
    stages: [
      {
        id: "tpm-s1",
        title: "Discovery and problem definition",
        duration: "5-6 weeks",
        goal: "Most product failure is building the wrong thing well.",
        build:
          "Run a discovery cycle on a real problem: interviews, synthesis and a written problem statement.",
        nodes: [
          {
            id: "tpm-research",
            label: "User research",
            summary:
              "Talking to users is the input nothing else substitutes for.",
            topics: [
              "Interview technique and avoiding leading questions",
              "Synthesis and pattern finding",
              "Jobs to be done framing",
              "Distinguishing stated from revealed preference",
            ],
          },
          {
            id: "tpm-problem",
            label: "Problem framing",
            summary:
              "A well-framed problem makes the solution obvious and the scope defensible.",
            topics: [
              "Problem statements without embedded solutions",
              "Opportunity sizing",
              "Assumption identification",
              "Deciding not to solve it",
            ],
          },
          {
            id: "tpm-data",
            label: "Data-informed decisions",
            summary:
              "Technical PMs are expected to pull their own numbers.",
            topics: [
              "SQL for product questions",
              "Funnel and retention analysis",
              "Instrumentation requirements",
              "Reading experiment results critically",
            ],
          },
          {
            id: "tpm-market",
            label: "Market and competitive context",
            summary:
              "Understanding why now, and why you rather than an incumbent.",
            topics: [
              "Competitive analysis",
              "Positioning and differentiation",
              "Pricing and packaging basics",
              "Build versus buy versus partner",
            ],
          },
          {
            id: "tpm-validation",
            label: "Validation",
            summary:
              "Cheap tests before expensive builds.",
            topics: [
              "Prototypes and concept testing",
              "Fake door and demand tests",
              "Pilot design",
              "Killing an idea early and well",
            ],
          },
        ],
      },
      {
        id: "tpm-s2",
        title: "Technical fluency",
        duration: "5-7 weeks",
        goal: "The distinguishing half of the role: credibility with engineers.",
        build:
          "Write a technical specification for a real feature, including API design and failure cases.",
        nodes: [
          {
            id: "tpm-architecture",
            label: "System architecture literacy",
            summary:
              "Enough to reason about feasibility, cost and trade-offs without needing a translator.",
            topics: [
              "Services, databases and queues",
              "Latency and scale basics",
              "Trade-offs engineers actually face",
              "Reading an architecture diagram",
            ],
            ref: { href: "/07-system-design/02-scalable-apis", label: "Ch — Scalable APIs" },
          },
          {
            id: "tpm-api",
            label: "API and platform products",
            summary:
              "API products have developers as users, which changes everything about the work.",
            topics: [
              "API design principles and versioning",
              "Developer experience as a product metric",
              "Documentation as a deliverable",
              "Deprecation and migration policy",
            ],
          },
          {
            id: "tpm-debt",
            label: "Technical debt and non-functional work",
            summary:
              "Advocating for work with no visible feature is a core technical PM skill.",
            topics: [
              "Framing debt in business terms",
              "Reliability and performance as features",
              "Security and compliance requirements",
              "Balancing investment against roadmap",
            ],
          },
          {
            id: "tpm-ai",
            label: "AI product judgement",
            summary:
              "Now expected: knowing what AI can reliably do and what it cannot.",
            topics: [
              "Where probabilistic output is acceptable",
              "Evaluation and quality thresholds",
              "Cost per interaction modelling",
              "Setting user expectations honestly",
            ],
            ref: { href: "/13-ai/01-llm-fundamentals", label: "Ch — LLM Fundamentals" },
          },
          {
            id: "tpm-specs",
            label: "Writing specifications",
            summary:
              "The main artefact. Interviews frequently ask for a writing sample.",
            topics: [
              "Requirements without over-specifying design",
              "Edge cases and error states",
              "Acceptance criteria",
              "Keeping specs current as things change",
            ],
          },
        ],
      },
      {
        id: "tpm-s3",
        title: "Prioritisation and delivery",
        duration: "4-6 weeks",
        goal: "Deciding what not to do, and getting the rest shipped.",
        build:
          "Build and defend a quarterly roadmap with explicit trade-offs and things you cut.",
        nodes: [
          {
            id: "tpm-prioritisation",
            label: "Prioritisation",
            summary:
              "Frameworks are a communication tool, not a decision oracle.",
            topics: [
              "Impact, confidence and effort scoring",
              "Opportunity cost reasoning",
              "Saying no with reasons",
              "Handling executive pet projects",
            ],
          },
          {
            id: "tpm-roadmap",
            label: "Roadmapping",
            summary:
              "A roadmap is a communication artefact, not a delivery commitment.",
            topics: [
              "Outcome-based roadmaps",
              "Communicating uncertainty in dates",
              "Now, next, later framing",
              "Roadmap for different audiences",
            ],
          },
          {
            id: "tpm-scope",
            label: "Scoping and slicing",
            summary:
              "Cutting scope without cutting value is the daily craft of the role.",
            topics: [
              "Vertical slicing of features",
              "Minimum viable versus minimum lovable",
              "Phased delivery",
              "Recognising scope creep",
            ],
          },
          {
            id: "tpm-agile",
            label: "Working with engineering",
            summary:
              "The mechanics of delivery, and the anti-patterns to avoid.",
            topics: [
              "Backlog refinement that engineers value",
              "Estimation and its limits",
              "Sprint and continuous delivery models",
              "Being available without micromanaging",
            ],
          },
          {
            id: "tpm-launch",
            label: "Launch and iteration",
            summary:
              "Shipping is the start of learning, not the end of the project.",
            topics: [
              "Launch planning and rollout stages",
              "Success metrics defined beforehand",
              "Post-launch iteration",
              "Deciding to roll back or persevere",
            ],
          },
        ],
      },
      {
        id: "tpm-s4",
        title: "Influence and communication",
        duration: "3-5 weeks",
        goal: "PMs have no authority. Everything happens through persuasion and clarity.",
        build:
          "Write and present a strategy document to a real audience and act on the feedback.",
        nodes: [
          {
            id: "tpm-writing",
            label: "Writing",
            summary:
              "The highest-leverage PM skill, and increasingly assessed directly.",
            topics: [
              "Strategy and one-page documents",
              "Structuring an argument",
              "Writing for executives",
              "Concise, unambiguous requirements",
            ],
          },
          {
            id: "tpm-stakeholders",
            label: "Stakeholder management",
            summary:
              "Alignment before decisions, not after them.",
            topics: [
              "Mapping stakeholders and interests",
              "Pre-alignment before meetings",
              "Managing conflicting priorities",
              "Escalating well",
            ],
          },
          {
            id: "tpm-metrics",
            label: "Metrics and goals",
            summary:
              "Choosing the metric shapes the behaviour of the whole team.",
            topics: [
              "North star and supporting metrics",
              "OKRs that are not vanity",
              "Guardrail metrics",
              "Reporting progress honestly",
            ],
          },
          {
            id: "tpm-crossfunctional",
            label: "Cross-functional work",
            summary:
              "Design, sales, support and legal all have legitimate claims on the roadmap.",
            topics: [
              "Working with design",
              "Supporting sales without becoming sales-led",
              "Support and success feedback loops",
              "Legal and compliance constraints",
            ],
          },
          {
            id: "tpm-conflict",
            label: "Conflict and difficult decisions",
            summary:
              "Interviews probe this heavily, because it is most of the job.",
            topics: [
              "Disagreeing with engineering estimates",
              "Cutting a feature someone championed",
              "Missing a committed date",
              "Handling a failed launch",
            ],
          },
        ],
      },
      {
        id: "tpm-s5",
        title: "Interview preparation",
        duration: "4-5 weeks",
        goal: "PM loops are case-heavy: product sense, technical depth, execution and behavioural.",
        build:
          "A portfolio of two written product documents and one case study of something you shipped.",
        nodes: [
          {
            id: "tpm-product-sense",
            label: "Product sense round",
            summary:
              "Design a product for a given user. Structure is what is graded.",
            topics: [
              "Clarifying the problem and user",
              "Generating and narrowing solutions",
              "Prioritising with stated criteria",
              "Defining success metrics",
            ],
          },
          {
            id: "tpm-technical-round",
            label: "Technical round",
            summary:
              "The round that separates technical PMs from general PMs.",
            topics: [
              "Explaining a system at a whiteboard",
              "API design discussion",
              "Feasibility and trade-off reasoning",
              "Discussing failure modes",
            ],
          },
          {
            id: "tpm-analytics-round",
            label: "Analytics round",
            summary:
              "Metrics dropped. Diagnose it, with SQL if asked.",
            topics: [
              "Metric diagnosis frameworks",
              "SQL for product questions",
              "Experiment interpretation",
              "Choosing metrics for a feature",
            ],
          },
          {
            id: "tpm-execution",
            label: "Execution round",
            summary:
              "How you handle a slipping project or a scope conflict.",
            topics: [
              "Recovering a late project",
              "Prioritisation under constraint",
              "Managing a difficult stakeholder",
              "Trade-off decisions with reasoning",
            ],
          },
          {
            id: "tpm-portfolio",
            label: "Portfolio",
            summary:
              "Written artefacts and shipped outcomes with numbers.",
            topics: [
              "A published product document",
              "A case study with measured impact",
              "A technical spec you wrote",
              "Evidence of a decision you reversed",
            ],
          },
        ],
      },
    ],
    tools: [
      "SQL",
      "Amplitude / Mixpanel",
      "Figma",
      "Jira / Linear",
      "Notion",
      "Experimentation platforms",
    ],
    proofOfWork: [
      "A published product strategy document",
      "A technical specification with API design and failure cases",
      "A shipped feature case study with measured outcomes",
      "An experiment you designed and the decision it drove",
    ],
  },

  {
    slug: "engineering-manager",
    title: "Engineering Manager",
    shortTitle: "Eng Manager",
    category: "Product & Delivery",
    mark: "EM",
    tagline:
      "Build and run a team that ships well: people first, delivery second, code third.",
    market:
      "Every growing engineering organisation needs them, and good ones are scarce because the skill set barely overlaps with senior engineering.",
    timeline: "6-12 months part-time",
    entryBar: "Senior engineering experience. Almost never an external entry-level move.",
    updated: "2026-08-31",
    prerequisites: [
      "Senior-level engineering experience",
      "Some experience mentoring or leading projects",
      "Willingness to stop being the best coder in the room",
    ],
    stages: [
      {
        id: "em-s1",
        title: "The transition",
        duration: "4-6 weeks",
        goal: "The job is not senior engineering with meetings. Understanding that early prevents failure.",
        build:
          "Run a project as tech lead first: delegate the interesting work and coach rather than solve.",
        nodes: [
          {
            id: "em-role",
            label: "What the job actually is",
            summary:
              "Output is now the team's output, which requires a different definition of a good day.",
            topics: [
              "Manager versus tech lead versus staff engineer",
              "Letting go of individual output",
              "The multiplier mindset",
              "Common first-year failure modes",
            ],
          },
          {
            id: "em-oneonone",
            label: "One to ones",
            summary:
              "The core management ritual, and the one most often wasted on status.",
            topics: [
              "Structure and cadence",
              "Listening more than talking",
              "Career conversations",
              "Building trust deliberately",
            ],
          },
          {
            id: "em-feedback",
            label: "Feedback",
            summary:
              "Timely and specific, including the difficult kind.",
            topics: [
              "Giving feedback that changes behaviour",
              "Receiving feedback without defensiveness",
              "Praise in public, correct in private",
              "Documenting for review cycles",
            ],
          },
          {
            id: "em-delegation",
            label: "Delegation",
            summary:
              "Giving away work you enjoy, to people who will do it differently.",
            topics: [
              "Matching task to growth need",
              "Setting context, not instructions",
              "Accepting a worse first attempt",
              "Escalation boundaries",
            ],
          },
          {
            id: "em-time",
            label: "Managing your own time",
            summary:
              "Calendars fill instantly. Protecting thinking time is a deliberate act.",
            topics: [
              "Maker versus manager schedules",
              "Meeting hygiene and cancellation",
              "Prioritising your own work",
              "Avoiding becoming a bottleneck",
            ],
          },
        ],
      },
      {
        id: "em-s2",
        title: "Growing people",
        duration: "5-7 weeks",
        goal: "The part of the job with the longest-lasting effect and the least immediate feedback.",
        build:
          "Write growth plans for a real or hypothetical team of five, each with concrete next steps.",
        nodes: [
          {
            id: "em-career",
            label: "Career development",
            summary:
              "Engineers leave managers who cannot articulate their path.",
            topics: [
              "Levelling frameworks and expectations",
              "Growth plans with evidence",
              "Promotion cases that succeed",
              "Supporting non-linear paths",
            ],
          },
          {
            id: "em-performance",
            label: "Performance management",
            summary:
              "Including the conversations nobody wants to have.",
            topics: [
              "Setting clear expectations",
              "Addressing underperformance early",
              "Improvement plans done fairly",
              "Managing out with dignity",
            ],
          },
          {
            id: "em-hiring",
            label: "Hiring",
            summary:
              "The highest-leverage activity a manager does, and the easiest to do badly.",
            topics: [
              "Role definition and scorecards",
              "Structured interviewing",
              "Reducing bias in the process",
              "Closing candidates honestly",
            ],
          },
          {
            id: "em-onboarding",
            label: "Onboarding and retention",
            summary:
              "Time to first meaningful contribution is a measurable management outcome.",
            topics: [
              "Structured onboarding plans",
              "Buddy and mentor systems",
              "Early wins by design",
              "Understanding why people leave",
            ],
          },
          {
            id: "em-team",
            label: "Team health",
            summary:
              "Psychological safety is the strongest predictor of team performance.",
            topics: [
              "Psychological safety in practice",
              "Handling conflict between engineers",
              "Burnout detection and prevention",
              "Team rituals that are worth keeping",
            ],
          },
        ],
      },
      {
        id: "em-s3",
        title: "Delivery",
        duration: "4-6 weeks",
        goal: "Predictable shipping without turning the team into a feature factory.",
        build:
          "Introduce one delivery improvement and measure its effect over a quarter.",
        nodes: [
          {
            id: "em-planning",
            label: "Planning and estimation",
            summary:
              "Commitments you can keep, and honesty about the ones you cannot.",
            topics: [
              "Estimation and uncertainty ranges",
              "Capacity planning realistically",
              "Handling interruptions and support load",
              "Renegotiating scope early",
            ],
          },
          {
            id: "em-process",
            label: "Process design",
            summary:
              "The minimum process the team needs, and no more.",
            topics: [
              "Choosing a working model with the team",
              "Removing ceremonies that add nothing",
              "Code review and quality standards",
              "Incident and on-call processes",
            ],
          },
          {
            id: "em-metrics",
            label: "Delivery metrics",
            summary:
              "DORA metrics, used to improve the system rather than rank individuals.",
            topics: [
              "Lead time and deployment frequency",
              "Change failure rate and MTTR",
              "Avoiding individual productivity metrics",
              "Reporting to leadership",
            ],
          },
          {
            id: "em-technical",
            label: "Technical direction",
            summary:
              "Staying technical enough to make good calls, without taking the decisions away.",
            topics: [
              "Architecture decisions and who makes them",
              "Managing technical debt deliberately",
              "Reviewing designs, not just code",
              "Balancing autonomy with consistency",
            ],
          },
          {
            id: "em-stakeholders",
            label: "Managing upward and across",
            summary:
              "Protecting the team while keeping the organisation informed.",
            topics: [
              "Reporting status honestly",
              "Pushing back on unrealistic asks",
              "Negotiating with product",
              "Communicating bad news early",
            ],
          },
        ],
      },
      {
        id: "em-s4",
        title: "Scaling and strategy",
        duration: "4-6 weeks",
        goal: "Beyond one team: organisation design, strategy and managing managers.",
        build:
          "Write a team strategy document connecting engineering work to business outcomes.",
        nodes: [
          {
            id: "em-orgdesign",
            label: "Team and organisation design",
            summary:
              "Team boundaries determine architecture, whether you intend it or not.",
            topics: [
              "Team topologies and interaction modes",
              "Conway's law in practice",
              "Splitting and merging teams",
              "Ownership boundaries",
            ],
          },
          {
            id: "em-strategy",
            label: "Engineering strategy",
            summary:
              "Connecting what the team builds to why the business cares.",
            topics: [
              "Writing a team charter",
              "Investment allocation across work types",
              "Multi-quarter planning",
              "Communicating strategy repeatedly",
            ],
          },
          {
            id: "em-managers",
            label: "Managing managers",
            summary:
              "The next transition, with its own set of new failure modes.",
            topics: [
              "Coaching managers rather than teams",
              "Skip-level conversations",
              "Consistency across teams",
              "Delegating management work",
            ],
          },
          {
            id: "em-change",
            label: "Leading change",
            summary:
              "Reorganisations, migrations and layoffs are part of the role.",
            topics: [
              "Communicating change honestly",
              "Managing through uncertainty",
              "Driving a technical migration",
              "Supporting people through difficulty",
            ],
          },
          {
            id: "em-budget",
            label: "Budget and vendor decisions",
            kind: "recommended",
            summary:
              "Headcount, tooling and cloud spend become your responsibility.",
            topics: [
              "Headcount planning and justification",
              "Tooling and vendor evaluation",
              "Cloud cost ownership",
              "Making a business case",
            ],
          },
        ],
      },
      {
        id: "em-s5",
        title: "Interview preparation",
        duration: "3-5 weeks",
        goal: "EM loops are behavioural-heavy with a technical round and a people scenario round.",
        build:
          "A written management philosophy and three deeply prepared stories with outcomes.",
        nodes: [
          {
            id: "em-behavioural",
            label: "Behavioural round",
            summary:
              "The dominant round. Specific stories with outcomes beat general philosophy.",
            topics: [
              "Managing an underperformer",
              "Resolving conflict between engineers",
              "A project that failed and why",
              "Growing someone into a promotion",
            ],
            ref: { href: "/08-hr-behavioral/02-common-questions", label: "Ch — Behavioural Questions" },
          },
          {
            id: "em-people-round",
            label: "People scenario round",
            summary:
              "Live scenarios: what would you do, right now, in this situation.",
            topics: [
              "Two engineers in open conflict",
              "A star engineer behaving badly",
              "A team missing every deadline",
              "Someone resigning unexpectedly",
            ],
          },
          {
            id: "em-technical-round",
            label: "Technical round",
            summary:
              "Still assessed, because managers who cannot follow the work lose credibility.",
            topics: [
              "System design at a high level",
              "Code review discussion",
              "Technical trade-off reasoning",
              "How you stay current",
            ],
          },
          {
            id: "em-delivery-round",
            label: "Delivery round",
            summary:
              "Planning, estimation and stakeholder scenarios.",
            topics: [
              "Recovering a late project",
              "Handling an executive escalation",
              "Balancing features and debt",
              "Introducing process to a resistant team",
            ],
          },
          {
            id: "em-philosophy",
            label: "Management philosophy",
            summary:
              "Be able to state what you believe and give evidence you practise it.",
            topics: [
              "Your approach to growth and feedback",
              "How you handle disagreement",
              "What you changed your mind about",
              "How you measure your own success",
            ],
          },
        ],
      },
    ],
    tools: [
      "Jira / Linear",
      "DORA metrics tooling",
      "Notion / Confluence",
      "1:1 and growth frameworks",
      "Hiring platforms",
    ],
    proofOfWork: [
      "A written team strategy connecting work to outcomes",
      "A delivery improvement with measured before and after",
      "Evidence of people you grew into promotions",
      "A written management philosophy with examples",
    ],
  },

  {
    slug: "solutions-architect",
    title: "Solutions Architect",
    shortTitle: "Solutions Architect",
    category: "Product & Delivery",
    mark: "SS",
    tagline:
      "Translate a customer's problem into a design that can actually be built, bought and supported.",
    market:
      "Vendors, consultancies and enterprise IT. Often customer-facing and commission-adjacent, which raises the ceiling considerably.",
    timeline: "7-10 months part-time",
    entryBar: "Several years of engineering or infrastructure experience plus communication ability.",
    updated: "2026-08-31",
    prerequisites: [
      "Broad technical background across application and infrastructure",
      "Confidence presenting to people you have just met",
      "Ability to write clear documents",
    ],
    stages: [
      {
        id: "sol-s1",
        title: "Technical breadth",
        duration: "6-8 weeks",
        goal: "Breadth over depth: enough across every layer to design credibly and know when to call an expert.",
        build:
          "Design and document a complete solution spanning application, data, integration and infrastructure.",
        nodes: [
          {
            id: "sol-application",
            label: "Application architecture",
            summary:
              "Patterns and their trade-offs, expressed in terms a customer understands.",
            topics: [
              "Monolith, services and event-driven designs",
              "Integration patterns and APIs",
              "Caching and state management",
              "Common failure modes",
            ],
            ref: { href: "/07-system-design/04-monolith-vs-microservices", label: "Ch — Monolith vs Microservices" },
          },
          {
            id: "sol-infrastructure",
            label: "Infrastructure and cloud",
            summary:
              "Where solutions actually run, and what they cost to run there.",
            topics: [
              "Compute, storage and networking choices",
              "Managed services versus self-hosted",
              "High availability and disaster recovery",
              "Cost modelling",
            ],
          },
          {
            id: "sol-data",
            label: "Data and integration",
            summary:
              "Most enterprise solutions are integration problems wearing a different hat.",
            topics: [
              "Data modelling and storage selection",
              "ETL, streaming and synchronisation",
              "Master data and identity resolution",
              "Legacy system integration",
            ],
          },
          {
            id: "sol-security",
            label: "Security and compliance",
            summary:
              "The constraint set that shapes enterprise designs more than any preference.",
            topics: [
              "Identity and access design",
              "Encryption and key management",
              "Regulatory constraints by industry",
              "Security review expectations",
            ],
          },
          {
            id: "sol-nonfunctional",
            label: "Non-functional requirements",
            summary:
              "The requirements customers forget to state and then judge you on.",
            topics: [
              "Performance and scalability targets",
              "Availability and recovery objectives",
              "Operability and supportability",
              "Total cost of ownership",
            ],
          },
        ],
      },
      {
        id: "sol-s2",
        title: "Customer engagement",
        duration: "5-6 weeks",
        goal: "The half that separates a solutions architect from an internal architect.",
        build:
          "Run a full discovery-to-proposal cycle for a real or simulated customer requirement.",
        nodes: [
          {
            id: "sol-discovery",
            label: "Discovery",
            summary:
              "Customers describe solutions, not problems. Getting underneath that is the skill.",
            topics: [
              "Requirements elicitation techniques",
              "Identifying the real constraint",
              "Stakeholder mapping",
              "Current state assessment",
            ],
          },
          {
            id: "sol-presenting",
            label: "Presenting and whiteboarding",
            summary:
              "Live design in front of a customer is a routine part of the job.",
            topics: [
              "Whiteboarding a solution live",
              "Adjusting depth to the audience",
              "Handling hostile technical questions",
              "Demonstrations that land",
            ],
          },
          {
            id: "sol-proposal",
            label: "Proposals and documentation",
            summary:
              "The deliverable customers buy, and the one interviews ask to see.",
            topics: [
              "Solution design documents",
              "Options analysis with trade-offs",
              "Effort and cost estimation",
              "Assumptions and exclusions",
            ],
          },
          {
            id: "sol-objections",
            label: "Objection handling",
            summary:
              "Technical objections are often commercial or political in disguise.",
            topics: [
              "Distinguishing real from proxy objections",
              "Competitive positioning honestly",
              "Managing scepticism",
              "Knowing when to concede",
            ],
          },
          {
            id: "sol-commercial",
            label: "Commercial awareness",
            summary:
              "Solutions architects sit close to the deal, and are measured on it.",
            topics: [
              "Sales cycle and your role in it",
              "Licensing and pricing models",
              "Scoping to budget",
              "Working with account teams",
            ],
          },
        ],
      },
      {
        id: "sol-s3",
        title: "Designing for delivery",
        duration: "4-6 weeks",
        goal: "A design that cannot be delivered by the available team is a bad design.",
        build:
          "Produce a delivery plan with phases, risks and a defined handover to an implementation team.",
        nodes: [
          {
            id: "sol-feasibility",
            label: "Feasibility and risk",
            summary:
              "Honest assessment early prevents failed projects later.",
            topics: [
              "Technical risk identification",
              "Proof of concept scoping",
              "Dependency and assumption tracking",
              "Saying a requirement is not achievable",
            ],
          },
          {
            id: "sol-phasing",
            label: "Phasing and migration",
            summary:
              "Big-bang delivery is how enterprise projects fail publicly.",
            topics: [
              "Incremental delivery design",
              "Coexistence and cutover strategy",
              "Rollback planning",
              "Value delivered per phase",
            ],
          },
          {
            id: "sol-handover",
            label: "Handover to delivery",
            summary:
              "The design must survive being implemented by people who were not in the room.",
            topics: [
              "Documentation delivery teams can use",
              "Knowledge transfer sessions",
              "Staying engaged through build",
              "Handling design changes in flight",
            ],
          },
          {
            id: "sol-operability",
            label: "Designing for operations",
            summary:
              "Someone has to run this after you have moved to the next customer.",
            topics: [
              "Monitoring and support requirements",
              "Runbooks and operational documentation",
              "Skills required to operate it",
              "Managed service versus customer-run",
            ],
          },
          {
            id: "sol-governance",
            label: "Architecture governance",
            summary:
              "Enterprise designs go through review boards with their own criteria.",
            topics: [
              "Architecture review boards",
              "Standards and reference architectures",
              "Exception requests",
              "Documentation standards",
            ],
          },
        ],
      },
      {
        id: "sol-s4",
        title: "Specialisation and depth",
        duration: "5-7 weeks",
        goal: "Breadth gets you in the room; one deep specialism wins the deal.",
        build:
          "Reach certified, demonstrable depth in one platform and build a reference implementation.",
        nodes: [
          {
            id: "sol-platform",
            label: "Platform specialisation",
            summary:
              "Vendors and partners hire for specific platform depth.",
            topics: [
              "One cloud platform in depth",
              "Vendor product portfolio knowledge",
              "Competitive landscape",
              "Certification paths",
            ],
          },
          {
            id: "sol-industry",
            label: "Industry knowledge",
            summary:
              "Domain fluency shortens every conversation with a customer.",
            topics: [
              "Regulatory environment for a sector",
              "Common architectures in that industry",
              "Typical legacy estate",
              "Sector-specific vocabulary",
            ],
          },
          {
            id: "sol-ai",
            label: "AI solution design",
            summary:
              "Currently the most requested capability in enterprise conversations.",
            topics: [
              "Assessing AI use case viability",
              "Retrieval architecture for enterprise data",
              "Cost and evaluation planning",
              "Setting realistic expectations",
            ],
            ref: { href: "/13-ai/04-rag", label: "Ch — RAG" },
          },
          {
            id: "sol-poc",
            label: "Proofs of concept",
            summary:
              "Building something real, fast, to prove a point in a sales cycle.",
            topics: [
              "Scoping a POC to answer one question",
              "Building quickly without building badly",
              "Success criteria agreed up front",
              "Avoiding POC becoming production",
            ],
          },
          {
            id: "sol-handson",
            label: "Staying hands-on",
            summary:
              "Credibility erodes fast if you cannot build what you design.",
            topics: [
              "Regular building and prototyping",
              "Keeping current with platform changes",
              "Reading implementation code",
              "Home lab and experimentation",
            ],
          },
        ],
      },
      {
        id: "sol-s5",
        title: "Interview preparation",
        duration: "3-4 weeks",
        goal: "Interviews are heavily presentation-based, often with a take-home design and a pitch.",
        build:
          "A polished reference solution with a design document and a rehearsed presentation.",
        nodes: [
          {
            id: "sol-design-round",
            label: "Design round",
            summary:
              "Whiteboard a solution for a described customer scenario.",
            topics: [
              "Requirements gathering out loud",
              "Design with justified choices",
              "Cost and risk discussion",
              "Handling changed requirements mid-question",
            ],
          },
          {
            id: "sol-presentation-round",
            label: "Presentation round",
            summary:
              "Common format: a take-home scenario presented to a mock customer panel.",
            topics: [
              "Structuring a solution presentation",
              "Pitching to mixed technical levels",
              "Handling interruptions and challenges",
              "Time management",
            ],
          },
          {
            id: "sol-technical-round",
            label: "Technical depth round",
            summary:
              "Breadth is assumed; they will probe one area to see how deep it goes.",
            topics: [
              "Deep questions in your specialism",
              "Troubleshooting scenarios",
              "Comparing competing technologies",
              "Admitting the limits of your knowledge",
            ],
          },
          {
            id: "sol-customer-round",
            label: "Customer scenario round",
            summary:
              "Difficult customer situations, handled live.",
            topics: [
              "A customer demanding an unwise design",
              "Managing a failed proof of concept",
              "Competing against an incumbent",
              "Delivering bad news about feasibility",
            ],
          },
          {
            id: "sol-portfolio",
            label: "Portfolio",
            summary:
              "Design documents and reference implementations.",
            topics: [
              "Sanitised solution design documents",
              "A reference implementation repository",
              "Platform certifications",
              "Recorded technical presentation",
            ],
          },
        ],
      },
    ],
    tools: [
      "AWS / Azure / GCP",
      "draw.io / Lucidchart",
      "Terraform",
      "Presentation tooling",
      "Vendor platforms",
    ],
    proofOfWork: [
      "A full solution design document with options analysis",
      "A reference implementation you built",
      "A platform certification at professional level",
      "A recorded technical presentation",
    ],
  },

  {
    slug: "technical-program-manager",
    title: "Technical Program Manager",
    shortTitle: "TPM",
    category: "Product & Delivery",
    mark: "TG",
    tagline:
      "Drive complex programmes across many teams: the person who makes cross-team dependencies actually resolve.",
    market:
      "IT project and programme management is named consistently in demand surveys. Large technology organisations hire TPMs specifically for cross-team execution.",
    timeline: "5-8 months part-time",
    entryBar: "Engineering, delivery or project management background with technical depth.",
    updated: "2026-08-31",
    prerequisites: [
      "Understanding of software delivery",
      "Strong written and verbal communication",
      "Comfort with ambiguity and conflict",
    ],
    stages: [
      {
        id: "tpg-s1",
        title: "Programme fundamentals",
        duration: "4-5 weeks",
        goal: "Programme management is dependency management plus communication, at scale.",
        build:
          "Map a real multi-team initiative: dependencies, risks, critical path and a communication plan.",
        nodes: [
          {
            id: "tpg-scope",
            label: "Scope and structure",
            summary:
              "Breaking a large initiative into deliverable, ownable pieces.",
            topics: [
              "Programme versus project versus product",
              "Work breakdown and milestones",
              "Defining done at each level",
              "Managing scope change",
            ],
          },
          {
            id: "tpg-dependencies",
            label: "Dependency management",
            summary:
              "The defining TPM skill. Everything else supports it.",
            topics: [
              "Mapping cross-team dependencies",
              "Critical path identification",
              "Sequencing and parallelisation",
              "Unblocking without authority",
            ],
          },
          {
            id: "tpg-risk",
            label: "Risk management",
            summary:
              "Anticipating problems early enough that mitigation is still cheap.",
            topics: [
              "Risk identification and registers",
              "Probability and impact assessment",
              "Mitigation and contingency planning",
              "Escalating risk credibly",
            ],
          },
          {
            id: "tpg-planning",
            label: "Planning and estimation",
            summary:
              "Schedules that account for the uncertainty everyone knows exists.",
            topics: [
              "Bottom-up and top-down estimation",
              "Buffers and confidence levels",
              "Milestone and phase planning",
              "Replanning when reality diverges",
            ],
          },
          {
            id: "tpg-tracking",
            label: "Tracking and reporting",
            summary:
              "Status that tells the truth, early, in a form executives can act on.",
            topics: [
              "Status reporting that is not theatre",
              "Leading versus lagging indicators",
              "Dashboards and single sources of truth",
              "Escalation thresholds",
            ],
          },
        ],
      },
      {
        id: "tpg-s2",
        title: "Technical depth",
        duration: "4-6 weeks",
        goal: "The 'T' in TPM: enough depth to challenge estimates and spot real risk.",
        build:
          "Write a technical programme plan for a migration, including architecture-level risks.",
        nodes: [
          {
            id: "tpg-architecture",
            label: "Architecture literacy",
            summary:
              "Understanding the system well enough to see where the hard parts are.",
            topics: [
              "Reading architecture diagrams critically",
              "Understanding service dependencies",
              "Data flow and integration risk",
              "Identifying single points of failure",
            ],
          },
          {
            id: "tpg-migration",
            label: "Migrations and large technical programmes",
            summary:
              "The most common TPM assignment, and the most likely to go wrong.",
            topics: [
              "Migration strategy and phasing",
              "Dual-running and cutover",
              "Rollback and contingency",
              "Decommissioning the old system",
            ],
          },
          {
            id: "tpg-quality",
            label: "Quality and readiness",
            summary:
              "Launch readiness reviews are usually TPM-owned.",
            topics: [
              "Definition of launch readiness",
              "Testing and sign-off coordination",
              "Operational readiness",
              "Go/no-go decision facilitation",
            ],
          },
          {
            id: "tpg-estimates",
            label: "Challenging estimates",
            summary:
              "Asking the right technical questions without undermining engineers.",
            topics: [
              "Probing an estimate constructively",
              "Identifying missing work",
              "Recognising optimism bias",
              "Building trust with engineering leads",
            ],
          },
          {
            id: "tpg-tradeoffs",
            label: "Technical trade-offs",
            summary:
              "Facilitating decisions between teams that disagree technically.",
            topics: [
              "Framing options for decision makers",
              "Documenting decisions and rationale",
              "Breaking deadlocks",
              "Knowing when to escalate a technical dispute",
            ],
          },
        ],
      },
      {
        id: "tpg-s3",
        title: "Driving across teams",
        duration: "4-6 weeks",
        goal: "TPMs have no direct reports. Influence is the entire toolkit.",
        build:
          "Drive one cross-team initiative to a milestone, with the communication artefacts to show for it.",
        nodes: [
          {
            id: "tpg-influence",
            label: "Influence without authority",
            summary:
              "The core competency, and the focus of most TPM interviews.",
            topics: [
              "Building credibility quickly",
              "Making commitments visible",
              "Creating urgency without panic",
              "Negotiating priorities across teams",
            ],
          },
          {
            id: "tpg-communication",
            label: "Communication systems",
            summary:
              "Designing how information flows so you are not the bottleneck.",
            topics: [
              "Audience-appropriate updates",
              "Meeting design and facilitation",
              "Written updates that get read",
              "Async communication at scale",
            ],
          },
          {
            id: "tpg-conflict",
            label: "Conflict resolution",
            summary:
              "Two teams with incompatible priorities is a Tuesday.",
            topics: [
              "Surfacing disagreement early",
              "Facilitating resolution",
              "Escalating without blame",
              "Repairing relationships afterwards",
            ],
          },
          {
            id: "tpg-stakeholders",
            label: "Executive stakeholder management",
            summary:
              "Executives need different information, delivered differently.",
            topics: [
              "Briefing executives concisely",
              "Managing conflicting executive priorities",
              "Delivering bad news early",
              "Getting decisions made",
            ],
          },
          {
            id: "tpg-crisis",
            label: "Programme recovery",
            summary:
              "TPMs are often assigned to programmes already in trouble.",
            topics: [
              "Assessing a troubled programme",
              "Rebuilding a credible plan",
              "Resetting stakeholder expectations",
              "Deciding to stop a programme",
            ],
          },
        ],
      },
      {
        id: "tpg-s4",
        title: "Systems and scale",
        duration: "3-5 weeks",
        goal: "Improving how the organisation delivers, not just this one programme.",
        build:
          "Introduce one process improvement across multiple teams and measure the effect.",
        nodes: [
          {
            id: "tpg-process",
            label: "Process improvement",
            summary:
              "Fixing the system that produced the delay, not just the delay.",
            topics: [
              "Identifying systemic bottlenecks",
              "Lightweight process design",
              "Getting adoption across teams",
              "Measuring improvement",
            ],
          },
          {
            id: "tpg-metrics",
            label: "Delivery metrics",
            summary:
              "Data to replace opinion in planning conversations.",
            topics: [
              "Throughput and cycle time",
              "Dependency wait time",
              "Predictability measures",
              "Avoiding metrics that get gamed",
            ],
          },
          {
            id: "tpg-portfolio",
            label: "Portfolio and capacity",
            summary:
              "Too many concurrent programmes is the most common organisational failure.",
            topics: [
              "Work in progress limits",
              "Capacity versus demand",
              "Portfolio prioritisation",
              "Saying no at the organisation level",
            ],
          },
          {
            id: "tpg-tools",
            label: "Tooling",
            summary:
              "Tracking systems that reflect reality with minimal manual effort.",
            topics: [
              "Programme tracking tooling",
              "Automated status collection",
              "Dependency visualisation",
              "Reducing reporting overhead",
            ],
          },
          {
            id: "tpg-postmortem",
            label: "Retrospectives at programme level",
            summary:
              "Learning that crosses team boundaries, where it is usually lost.",
            topics: [
              "Programme retrospectives",
              "Identifying systemic causes",
              "Action items that get done",
              "Sharing learning across programmes",
            ],
          },
        ],
      },
      {
        id: "tpg-s5",
        title: "Interview preparation",
        duration: "3-4 weeks",
        goal: "TPM loops test programme scenarios, technical depth and cross-team influence.",
        build:
          "Three deeply prepared programme stories with dependencies, risks and measurable outcomes.",
        nodes: [
          {
            id: "tpg-program-round",
            label: "Programme design round",
            summary:
              "Plan a described multi-team programme out loud.",
            topics: [
              "Decomposing the programme",
              "Identifying dependencies and critical path",
              "Risk identification",
              "Communication and reporting plan",
            ],
          },
          {
            id: "tpg-technical-round",
            label: "Technical round",
            summary:
              "Enough system design to prove the 'technical' in the title.",
            topics: [
              "High-level system design",
              "Identifying technical risk in a design",
              "Asking good questions of engineers",
              "Migration planning",
            ],
          },
          {
            id: "tpg-behavioural",
            label: "Behavioural round",
            summary:
              "Influence, conflict and recovery stories dominate.",
            topics: [
              "A programme you rescued",
              "Resolving a cross-team conflict",
              "Delivering bad news to executives",
              "A programme that failed and why",
            ],
            ref: { href: "/08-hr-behavioral/02-common-questions", label: "Ch — Behavioural Questions" },
          },
          {
            id: "tpg-ambiguity",
            label: "Ambiguity round",
            summary:
              "Given a vague goal and no plan, what do you do first.",
            topics: [
              "Structuring an undefined problem",
              "Identifying the right stakeholders",
              "Making progress without full information",
              "Knowing what to nail down first",
            ],
          },
          {
            id: "tpg-portfolio-round",
            label: "Portfolio",
            summary:
              "Artefacts from real programmes, sanitised.",
            topics: [
              "A programme plan you wrote",
              "A dependency map",
              "A status report format you designed",
              "Measured delivery improvements",
            ],
          },
        ],
      },
    ],
    tools: [
      "Jira / Linear",
      "Confluence / Notion",
      "Miro",
      "Dependency mapping tools",
      "Dashboarding tools",
    ],
    proofOfWork: [
      "A programme plan with dependencies and critical path",
      "A recovered programme with before and after status",
      "A delivery process improvement with measured effect",
      "A launch readiness framework you designed",
    ],
  },

  {
    slug: "developer-advocate",
    title: "Developer Advocate",
    shortTitle: "DevRel",
    category: "Product & Delivery",
    mark: "DV",
    tagline:
      "Help developers succeed with a product in public, and bring what they tell you back to the people building it.",
    market:
      "Any company selling to developers needs it: APIs, infrastructure, tooling and AI platforms. Small field, highly visible, and hiring is driven almost entirely by public work.",
    timeline: "5-8 months part-time",
    entryBar: "Engineering ability plus willingness to publish and speak in public.",
    updated: "2026-08-31",
    prerequisites: [
      "Real software engineering experience",
      "Willingness to write and speak publicly",
      "Genuine interest in helping other developers",
    ],
    stages: [
      {
        id: "dv-s1",
        title: "Building in public",
        duration: "5-7 weeks",
        goal: "This role is hired on evidence. The evidence is public work.",
        build:
          "Publish six technical articles and one open-source project over the stage.",
        nodes: [
          {
            id: "dv-writing",
            label: "Technical writing",
            summary:
              "The highest-volume output of the role and the main hiring signal.",
            topics: [
              "Tutorials that actually work end to end",
              "Explaining concepts without condescension",
              "Structure: problem, solution, why it matters",
              "Editing ruthlessly",
            ],
          },
          {
            id: "dv-projects",
            label: "Demo projects",
            summary:
              "Working code that people can run is worth more than any slide.",
            topics: [
              "Sample applications that are actually useful",
              "Repository hygiene and documentation",
              "Keeping demos working over time",
              "Open-source maintenance",
            ],
          },
          {
            id: "dv-video",
            label: "Video and streaming",
            kind: "recommended",
            summary:
              "Increasingly the primary channel for developer education.",
            topics: [
              "Screencast production basics",
              "Live coding without disaster",
              "Editing and pacing",
              "Distribution and thumbnails",
            ],
          },
          {
            id: "dv-audience",
            label: "Building an audience",
            summary:
              "Reach is part of the job description, and is measured.",
            topics: [
              "Choosing platforms deliberately",
              "Consistency over virality",
              "Engaging rather than broadcasting",
              "Avoiding hype and overselling",
            ],
          },
          {
            id: "dv-technical",
            label: "Staying technical",
            summary:
              "Advocates who cannot build lose their audience quickly.",
            topics: [
              "Maintaining engineering depth",
              "Learning new technologies fast",
              "Contributing to the product codebase",
              "Reading and reviewing code",
            ],
          },
        ],
      },
      {
        id: "dv-s2",
        title: "Speaking and community",
        duration: "4-6 weeks",
        goal: "Public speaking is a learnable skill and a hard requirement here.",
        build:
          "Deliver three talks, from a local meetup to a recorded conference-style session.",
        nodes: [
          {
            id: "dv-speaking",
            label: "Conference speaking",
            summary:
              "Nerve-wracking, learnable, and the fastest way to build credibility.",
            topics: [
              "Talk structure and narrative",
              "Slide design for technical talks",
              "Live demo risk management",
              "Handling questions well",
            ],
          },
          {
            id: "dv-cfp",
            label: "Getting accepted",
            summary:
              "Writing proposals is a distinct skill from giving the talk.",
            topics: [
              "Writing a compelling abstract",
              "Matching a talk to a conference",
              "Building a speaking track record",
              "Handling rejection",
            ],
          },
          {
            id: "dv-community",
            label: "Community management",
            summary:
              "Being genuinely useful in forums is where trust is built.",
            topics: [
              "Discord, forum and issue tracker presence",
              "Answering questions helpfully",
              "Handling hostility and criticism",
              "Recognising and elevating community members",
            ],
          },
          {
            id: "dv-workshops",
            label: "Workshops and teaching",
            summary:
              "Hands-on formats convert far better than talks.",
            topics: [
              "Workshop design and pacing",
              "Environment setup that works for everyone",
              "Supporting a room at different speeds",
              "Feedback collection",
            ],
          },
          {
            id: "dv-events",
            label: "Events and hackathons",
            kind: "recommended",
            summary:
              "Running events is a common part of the role.",
            topics: [
              "Event planning and logistics",
              "Hackathon design",
              "Sponsorship and booth work",
              "Measuring event value",
            ],
          },
        ],
      },
      {
        id: "dv-s3",
        title: "Developer experience",
        duration: "4-5 weeks",
        goal: "The advocacy that matters most happens inside the company, on behalf of users.",
        build:
          "Run a documentation and onboarding audit of a real product and ship three improvements.",
        nodes: [
          {
            id: "dv-docs",
            label: "Documentation",
            summary:
              "The most-used part of any developer product, and usually the weakest.",
            topics: [
              "Tutorial, how-to, reference and explanation",
              "Getting started in under ten minutes",
              "Code samples that compile",
              "Keeping docs current with releases",
            ],
          },
          {
            id: "dv-onboarding",
            label: "Onboarding experience",
            summary:
              "Time to first successful call is the metric that predicts adoption.",
            topics: [
              "Measuring time to first success",
              "Removing signup and setup friction",
              "Error messages that teach",
              "Sandbox and trial environments",
            ],
          },
          {
            id: "dv-api",
            label: "API and SDK quality",
            summary:
              "Advocates are usually the loudest internal voice on developer ergonomics.",
            topics: [
              "API design critique",
              "SDK ergonomics across languages",
              "Versioning and deprecation communication",
              "Consistency across surfaces",
            ],
          },
          {
            id: "dv-feedback",
            label: "Feedback loops",
            summary:
              "The 'advocate' half: representing developers to product and engineering.",
            topics: [
              "Structured feedback collection",
              "Turning anecdotes into evidence",
              "Influencing the roadmap",
              "Closing the loop with the community",
            ],
          },
          {
            id: "dv-support",
            label: "Supporting developers",
            summary:
              "Answering hard questions in public builds more trust than any campaign.",
            topics: [
              "Debugging someone else's integration",
              "Escalating bugs internally",
              "Managing expectations on fixes",
              "Turning support patterns into content",
            ],
          },
        ],
      },
      {
        id: "dv-s4",
        title: "Strategy and measurement",
        duration: "3-4 weeks",
        goal: "DevRel gets cut first when it cannot show impact. Measurement is survival.",
        build:
          "Define a measurement framework for a DevRel programme and report on it for a month.",
        nodes: [
          {
            id: "dv-metrics",
            label: "Measuring DevRel",
            summary:
              "The perennial problem of the field, and a guaranteed interview question.",
            topics: [
              "Awareness, activation and retention metrics",
              "Attribution difficulties, stated honestly",
              "Qualitative evidence that counts",
              "Reporting to leadership",
            ],
          },
          {
            id: "dv-strategy",
            label: "Programme strategy",
            summary:
              "Choosing which audiences and channels to invest in, and which to drop.",
            topics: [
              "Audience segmentation",
              "Channel selection and effort allocation",
              "Content strategy and calendars",
              "Aligning with company goals",
            ],
          },
          {
            id: "dv-crossfunctional",
            label: "Working with marketing and product",
            summary:
              "DevRel sits between functions and must resist becoming pure marketing.",
            topics: [
              "Boundaries with marketing",
              "Working with product management",
              "Supporting sales without selling",
              "Maintaining community trust",
            ],
          },
          {
            id: "dv-scaling",
            label: "Scaling advocacy",
            summary:
              "One person does not scale. Programmes and community champions do.",
            topics: [
              "Champion and ambassador programmes",
              "Enabling community content",
              "Reusable content and templates",
              "Building a team",
            ],
          },
          {
            id: "dv-ethics",
            label: "Credibility and ethics",
            summary:
              "Your credibility is the asset. Spending it on a weak product destroys it.",
            topics: [
              "Honesty about product limitations",
              "Declining to promote something",
              "Handling competitive comparisons fairly",
              "Disclosure and transparency",
            ],
          },
        ],
      },
      {
        id: "dv-s5",
        title: "Interview preparation",
        duration: "2-4 weeks",
        goal: "Hiring is portfolio-driven, usually with a live talk or demo as the main round.",
        build:
          "A public portfolio: articles, talks, projects, and a rehearsed twenty-minute technical talk.",
        nodes: [
          {
            id: "dv-talk-round",
            label: "Presentation round",
            summary:
              "Give a technical talk to the hiring panel. The central interview.",
            topics: [
              "Choosing a topic that shows depth",
              "Handling a live demo",
              "Reading and adapting to the room",
              "Q&A under pressure",
            ],
          },
          {
            id: "dv-writing-round",
            label: "Writing exercise",
            summary:
              "Usually a take-home tutorial or blog post on their product.",
            topics: [
              "Learning a product quickly",
              "Writing accurately from documentation",
              "Finding an angle that is genuinely useful",
              "Editing to a word count",
            ],
          },
          {
            id: "dv-technical-round",
            label: "Technical round",
            summary:
              "You are still an engineer, and they will check.",
            topics: [
              "Building a small integration live",
              "Debugging an API problem",
              "Discussing architecture",
              "Reading unfamiliar code",
            ],
          },
          {
            id: "dv-strategy-round",
            label: "Strategy round",
            summary:
              "How would you grow adoption of this product, and how would you measure it.",
            topics: [
              "Assessing a developer product's weaknesses",
              "Proposing a programme with priorities",
              "Defining success metrics",
              "Explaining DevRel value to a sceptic",
            ],
          },
          {
            id: "dv-portfolio-round",
            label: "Portfolio",
            summary:
              "The single largest factor in DevRel hiring.",
            topics: [
              "A body of published writing",
              "Recorded talks",
              "Open-source projects with users",
              "Evidence of community engagement",
            ],
          },
        ],
      },
    ],
    tools: [
      "Git / GitHub",
      "Static site generators",
      "Screen recording tools",
      "Discord / Slack",
      "Analytics platforms",
      "Presentation tooling",
    ],
    proofOfWork: [
      "A body of published technical writing",
      "Recorded conference or meetup talks",
      "An open-source project with real users",
      "A documented developer experience improvement",
    ],
  },
];
