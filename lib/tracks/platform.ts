import type { RoadmapTrack } from "@/lib/roadmaps";

/** Platform, infrastructure and operations tracks. */
export const PLATFORM_TRACKS: RoadmapTrack[] = [
  {
    slug: "devops-engineer",
    title: "DevOps Engineer",
    shortTitle: "DevOps",
    category: "Platform & Infra",
    mark: "DO",
    tagline:
      "Automate the path from commit to production, and make that path boring, repeatable and reversible.",
    market:
      "Named in every in-demand list for the last decade and still short of supply. Every company that ships software needs it, and the skills transfer cleanly into SRE, platform and cloud architecture.",
    timeline: "6-9 months part-time",
    entryBar: "Linux comfort and one scripting language. No prior ops job required.",
    updated: "2026-08-31",
    prerequisites: [
      "Linux command line: files, processes, permissions, networking basics",
      "One scripting language: Bash plus Python or Go",
      "Git beyond commit and push",
    ],
    stages: [
      {
        id: "do-s1",
        title: "Linux, networking and Git",
        duration: "4-6 weeks",
        goal: "Everything above this stage assumes you can debug a Linux box and read a network trace.",
        build:
          "Provision a VM by hand, run a service on it behind nginx with TLS, and write the runbook.",
        nodes: [
          {
            id: "do-linux",
            label: "Linux administration",
            summary:
              "The interview will hand you a box that is misbehaving and watch how you investigate.",
            topics: [
              "Processes, signals and systemd units",
              "File permissions, users and sudo policy",
              "Disk, inodes, and filesystem troubleshooting",
              "top, ps, lsof, strace, journalctl",
            ],
          },
          {
            id: "do-networking",
            label: "Networking for operators",
            summary:
              "Most production outages are DNS, TLS, or a firewall rule. Know all three cold.",
            topics: [
              "TCP/IP, subnets, routing and NAT",
              "DNS resolution and record types",
              "TLS handshake and certificate chains",
              "tcpdump, dig, curl -v, ss",
            ],
          },
          {
            id: "do-shell",
            label: "Shell and scripting",
            summary:
              "Automation starts as a shell script. Write ones that fail loudly and safely.",
            topics: [
              "Bash: set -euo pipefail, traps, arguments",
              "Text processing: awk, sed, jq",
              "Python for anything over fifty lines",
              "Idempotency in scripts",
            ],
          },
          {
            id: "do-git",
            label: "Git and branching strategy",
            summary:
              "You will own the branching model, and be asked to defend it.",
            topics: [
              "Rebase vs merge and history hygiene",
              "Trunk-based development vs GitFlow",
              "Tags, releases and semantic versioning",
              "Monorepo vs polyrepo trade-offs",
            ],
          },
          {
            id: "do-containers",
            label: "Containers",
            summary:
              "Namespaces and cgroups, not just docker run. The internals get asked at senior level.",
            topics: [
              "Images, layers and the build cache",
              "Multi-stage builds and minimal base images",
              "Namespaces, cgroups and container isolation",
              "Registries, tagging and image scanning",
            ],
          },
        ],
      },
      {
        id: "do-s2",
        title: "Infrastructure as code",
        duration: "5-6 weeks",
        goal: "If it was clicked in a console, it does not exist. Everything is code, reviewed and versioned.",
        build:
          "Stand up a full environment from an empty cloud account using only committed code, then destroy and recreate it.",
        nodes: [
          {
            id: "do-terraform",
            label: "Terraform / OpenTofu",
            summary:
              "The default answer for provisioning. State management is where teams get hurt.",
            topics: [
              "Providers, resources and data sources",
              "State, remote backends and locking",
              "Modules, composition and versioning",
              "Plan review, drift and import",
            ],
          },
          {
            id: "do-config",
            label: "Configuration management",
            summary:
              "Ansible remains everywhere, especially in enterprises with long-lived servers.",
            topics: [
              "Ansible playbooks, roles and inventories",
              "Idempotent tasks and check mode",
              "Secrets with Ansible Vault",
              "Immutable infrastructure as the alternative",
            ],
          },
          {
            id: "do-cloud",
            label: "One cloud, properly",
            summary:
              "Depth in one beats shallow familiarity with three. AWS is the safest first choice.",
            topics: [
              "IAM, roles and least privilege",
              "VPC, subnets, security groups",
              "Compute, storage and managed databases",
              "Cost model and billing alerts",
            ],
          },
          {
            id: "do-images",
            label: "Golden images and packaging",
            kind: "recommended",
            summary:
              "Baking images shifts work from boot time to build time and makes rollout predictable.",
            topics: [
              "Packer and image pipelines",
              "Base image patching cadence",
              "Artefact repositories",
              "Supply chain provenance",
            ],
          },
          {
            id: "do-secrets",
            label: "Secrets management",
            summary:
              "Where credentials live is a question in every DevOps interview and every audit.",
            topics: [
              "Vault or cloud secret manager",
              "Dynamic credentials and short TTLs",
              "Secret rotation without downtime",
              "Preventing secrets in git history",
            ],
          },
        ],
      },
      {
        id: "do-s3",
        title: "CI/CD pipelines",
        duration: "4-6 weeks",
        goal: "Commit to production, automatically, with tests and a way back.",
        build:
          "A pipeline that builds, tests, scans, deploys to staging, and promotes to production on approval.",
        nodes: [
          {
            id: "do-ci",
            label: "Continuous integration",
            summary:
              "Fast, trustworthy builds. A slow pipeline is a pipeline people route around.",
            topics: [
              "GitHub Actions / GitLab CI pipeline design",
              "Caching, parallelism and build time",
              "Matrix builds and reusable workflows",
              "Flaky test quarantine",
            ],
          },
          {
            id: "do-cd",
            label: "Deployment strategies",
            summary:
              "Blue/green, canary and rollback — the vocabulary of every deployment discussion.",
            topics: [
              "Rolling, blue/green, canary",
              "Feature flags decoupling deploy from release",
              "Database migrations with zero downtime",
              "Automated rollback triggers",
            ],
          },
          {
            id: "do-gitops",
            label: "GitOps",
            summary:
              "Argo CD and Flux made the cluster state a pull request. Now the standard for Kubernetes.",
            topics: [
              "Declarative desired state in git",
              "Argo CD or Flux reconciliation",
              "Environment promotion patterns",
              "Drift detection and self-healing",
            ],
          },
          {
            id: "do-supplychain",
            label: "Pipeline security",
            summary:
              "Supply chain attacks moved this from optional to audited.",
            topics: [
              "SAST, dependency and container scanning",
              "SBOM generation and provenance",
              "Signing artefacts with Sigstore",
              "Least-privilege CI credentials (OIDC)",
            ],
          },
          {
            id: "do-testing",
            label: "Testing infrastructure",
            kind: "recommended",
            summary:
              "Infrastructure code needs tests too, and few candidates can describe how.",
            topics: [
              "terraform validate and plan review",
              "Policy as code with OPA / Conftest",
              "Ephemeral environments per pull request",
              "Smoke tests after deploy",
            ],
          },
        ],
      },
      {
        id: "do-s4",
        title: "Kubernetes and runtime",
        duration: "6-8 weeks",
        goal: "The default deployment target. Debugging it under pressure is the interview.",
        build:
          "Run a multi-service app on Kubernetes with autoscaling, ingress, secrets, and a documented failure drill.",
        nodes: [
          {
            id: "do-k8s-core",
            label: "Kubernetes fundamentals",
            summary:
              "Pods, deployments, services — and the reconciliation loop that ties them together.",
            topics: [
              "Pods, ReplicaSets, Deployments, StatefulSets",
              "Services, Ingress and DNS",
              "ConfigMaps, Secrets and volumes",
              "The control plane and reconciliation",
            ],
          },
          {
            id: "do-k8s-ops",
            label: "Operating clusters",
            summary:
              "Scheduling, resources and eviction — the causes of most cluster incidents.",
            topics: [
              "Requests, limits and QoS classes",
              "Node pressure, eviction and OOMKilled",
              "Affinity, taints and tolerations",
              "Horizontal and vertical autoscaling",
            ],
          },
          {
            id: "do-helm",
            label: "Packaging and templating",
            summary:
              "Helm or Kustomize, and a clear view of when templating has gone too far.",
            topics: [
              "Helm charts, values and releases",
              "Kustomize overlays",
              "Chart testing and versioning",
              "Managing environment differences",
            ],
          },
          {
            id: "do-k8s-net",
            label: "Cluster networking and security",
            summary:
              "Network policy and RBAC are the two things auditors always ask about.",
            topics: [
              "CNI, service mesh basics",
              "NetworkPolicy and default-deny",
              "RBAC, service accounts and workload identity",
              "Pod security standards",
            ],
          },
          {
            id: "do-k8s-debug",
            label: "Debugging Kubernetes",
            summary:
              "'The pod is CrashLoopBackOff, what do you do' is the single most common question.",
            topics: [
              "CrashLoopBackOff, ImagePullBackOff, Pending",
              "kubectl describe, logs, events, exec",
              "Ephemeral debug containers",
              "Reading the scheduler's decisions",
            ],
          },
        ],
      },
      {
        id: "do-s5",
        title: "Observability, on-call and interviews",
        duration: "4-5 weeks",
        goal: "Owning production means knowing when it breaks and proving you fixed it.",
        build:
          "A monitoring stack with dashboards, meaningful alerts, and a written postmortem for a drill you ran deliberately.",
        nodes: [
          {
            id: "do-monitoring",
            label: "Metrics and dashboards",
            summary:
              "Prometheus and Grafana are close to universal. PromQL literacy is expected.",
            topics: [
              "Prometheus scraping and PromQL",
              "RED and USE method dashboards",
              "Cardinality and cost control",
              "Recording rules and long-term storage",
            ],
          },
          {
            id: "do-logging",
            label: "Logs and tracing",
            summary:
              "Correlating a trace, a log line and a metric spike is the practical skill.",
            topics: [
              "Centralised logging and retention policy",
              "Structured logs and correlation ids",
              "OpenTelemetry tracing",
              "Sampling strategy and cost",
            ],
          },
          {
            id: "do-alerting",
            label: "Alerting and on-call",
            summary:
              "Alert fatigue is the failure mode. Interviewers ask how you would reduce it.",
            topics: [
              "Alert on symptoms, not causes",
              "SLOs and error budgets as alert policy",
              "Escalation, rotation and handover",
              "Runbooks that are actually used",
            ],
          },
          {
            id: "do-incident",
            label: "Incident response",
            summary:
              "A structured incident story is the strongest answer in a DevOps behavioural round.",
            topics: [
              "Incident command and roles",
              "Mitigate first, diagnose second",
              "Blameless postmortems",
              "Action items that actually get done",
            ],
          },
          {
            id: "do-interview",
            label: "Interview preparation",
            summary:
              "Expect a scenario round, a live troubleshooting round, and IaC code review.",
            topics: [
              "Design a CI/CD pipeline out loud",
              "Debug a broken deployment live",
              "Review Terraform for security issues",
              "Explain a real incident you handled",
            ],
          },
        ],
      },
    ],
    tools: [
      "Linux",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Ansible",
      "GitHub Actions",
      "Argo CD",
      "Prometheus",
      "Grafana",
    ],
    proofOfWork: [
      "A repo that builds an entire environment from an empty cloud account",
      "A pipeline with scanning, staged promotion and automated rollback",
      "A postmortem from a failure drill you ran on purpose",
      "A Kubernetes debugging write-up with the actual commands used",
    ],
  },

  {
    slug: "site-reliability-engineer",
    title: "Site Reliability Engineer",
    shortTitle: "SRE",
    category: "Platform & Infra",
    mark: "SR",
    tagline:
      "Treat reliability as a product with a budget: measure it, spend it deliberately, and engineer away the toil.",
    market:
      "Concentrated at companies with real scale, and paid accordingly. The role expects software engineering ability alongside operations, which keeps the supply low.",
    timeline: "8-12 months part-time",
    entryBar: "Existing backend or DevOps experience. This is rarely a first job.",
    updated: "2026-08-31",
    prerequisites: [
      "Production experience in some form",
      "One programming language you can write services in",
      "Linux and networking fundamentals",
    ],
    stages: [
      {
        id: "sre-s1",
        title: "The reliability model",
        duration: "4-5 weeks",
        goal: "SRE is a set of ideas before it is a set of tools. This vocabulary is the interview.",
        build:
          "Define SLIs and SLOs for a real service, with an error budget policy agreed in writing.",
        nodes: [
          {
            id: "sre-slo",
            label: "SLIs, SLOs and error budgets",
            summary:
              "The defining concept of the discipline, and the first thing any SRE interview probes.",
            topics: [
              "Choosing SLIs that reflect user experience",
              "Setting an SLO that is achievable and meaningful",
              "Error budgets and burn rate",
              "Policy: what happens when the budget is spent",
            ],
          },
          {
            id: "sre-toil",
            label: "Toil and automation",
            summary:
              "The formal definition of toil, and the argument for capping it at fifty percent.",
            topics: [
              "Identifying and measuring toil",
              "Automation return on investment",
              "Self-service over ticket queues",
              "Deciding what not to automate",
            ],
          },
          {
            id: "sre-risk",
            label: "Risk and availability maths",
            summary:
              "Nines, compounding dependencies, and why 100% is the wrong target.",
            topics: [
              "Availability arithmetic and compounding",
              "Cost of an additional nine",
              "Failure domains and blast radius",
              "Risk acceptance as an explicit decision",
            ],
          },
          {
            id: "sre-capacity",
            label: "Capacity planning",
            summary:
              "Forecasting demand and provisioning ahead of it, with headroom you can justify.",
            topics: [
              "Load modelling and growth forecasting",
              "Headroom and saturation targets",
              "Load testing to find the knee",
              "Regional and failover capacity",
            ],
          },
          {
            id: "sre-oncall",
            label: "On-call design",
            summary:
              "Sustainable rotations are an engineering problem, and interviews treat them as one.",
            topics: [
              "Rotation size and follow-the-sun",
              "Paging policy and alert quality",
              "Handover and shadowing",
              "Measuring on-call load",
            ],
          },
        ],
      },
      {
        id: "sre-s2",
        title: "Observability in depth",
        duration: "5-6 weeks",
        goal: "Not dashboards for their own sake: the ability to answer new questions about production.",
        build:
          "Instrument a service end to end and answer three questions you could not answer before.",
        nodes: [
          {
            id: "sre-metrics",
            label: "Metrics at scale",
            summary:
              "PromQL fluency plus an understanding of what high cardinality costs you.",
            topics: [
              "Counters, gauges, histograms and quantiles",
              "PromQL: rate, histogram_quantile, aggregation",
              "Cardinality explosions and cost",
              "Federation and long-term storage",
            ],
          },
          {
            id: "sre-tracing",
            label: "Distributed tracing",
            summary:
              "The only practical way to find latency in a service graph you did not design.",
            topics: [
              "OpenTelemetry instrumentation",
              "Span context propagation",
              "Tail-based sampling",
              "Finding the critical path in a trace",
            ],
          },
          {
            id: "sre-logs",
            label: "Logging strategy",
            summary:
              "Logs are the most expensive telemetry. Deciding what not to log is the skill.",
            topics: [
              "Structured logging standards",
              "Retention tiers and cost control",
              "Log-based metrics and their pitfalls",
              "PII and compliance in logs",
            ],
          },
          {
            id: "sre-profiling",
            label: "Continuous profiling",
            kind: "recommended",
            summary:
              "Increasingly standard at scale, and a differentiator in interviews.",
            topics: [
              "CPU and heap profiles in production",
              "Flame graphs and reading them fast",
              "Regression detection between releases",
              "Overhead and sampling rates",
            ],
          },
          {
            id: "sre-dashboards",
            label: "Dashboards that get used",
            summary:
              "A dashboard nobody opens during an incident is a dashboard that failed.",
            topics: [
              "Service overview dashboard patterns",
              "Golden signals per service",
              "Drill-down structure",
              "Dashboards as incident entry points",
            ],
          },
        ],
      },
      {
        id: "sre-s3",
        title: "Designing for failure",
        duration: "6-7 weeks",
        goal: "Systems fail. The engineering question is how they fail and how much they take with them.",
        build:
          "Run a game day: inject a real failure into a staging system and publish the findings.",
        nodes: [
          {
            id: "sre-resilience",
            label: "Resilience patterns",
            summary:
              "Timeouts, retries and circuit breakers, and how naive retries cause outages.",
            topics: [
              "Timeout budgets across a call chain",
              "Retry with backoff and jitter",
              "Circuit breakers and bulkheads",
              "Load shedding and graceful degradation",
            ],
          },
          {
            id: "sre-chaos",
            label: "Chaos and fault injection",
            summary:
              "Testing the failure paths that never run in normal operation.",
            topics: [
              "Hypothesis-driven chaos experiments",
              "Latency and error injection",
              "Dependency failure simulation",
              "Blast radius control",
            ],
          },
          {
            id: "sre-dr",
            label: "Disaster recovery",
            summary:
              "RTO, RPO and a restore you have actually performed rather than assumed.",
            topics: [
              "RTO and RPO definitions per service",
              "Backup verification and restore drills",
              "Multi-region failover design",
              "Data replication lag and consistency",
            ],
          },
          {
            id: "sre-deploy-safety",
            label: "Safe rollout",
            summary:
              "Most incidents are caused by a change. Rollout design is the biggest reliability lever.",
            topics: [
              "Progressive delivery and canary analysis",
              "Automated rollback on SLO burn",
              "Change freezes and risk windows",
              "Config changes as a deploy",
            ],
          },
          {
            id: "sre-dependencies",
            label: "Dependency management",
            summary:
              "Your reliability is bounded by the things you call. Map them before the incident.",
            topics: [
              "Critical dependency mapping",
              "Hard vs soft dependencies",
              "Third-party SLA reality",
              "Fallback and cached responses",
            ],
          },
        ],
      },
      {
        id: "sre-s4",
        title: "Incidents and learning",
        duration: "4-5 weeks",
        goal: "How an organisation handles incidents determines whether it gets more reliable or just busier.",
        build:
          "Write two postmortems to publishable quality, including contributing factors and honest action items.",
        nodes: [
          {
            id: "sre-incident-cmd",
            label: "Incident command",
            summary:
              "Structure under pressure. Being able to run an incident is a hiring criterion.",
            topics: [
              "Incident commander, comms and ops roles",
              "Severity levels and escalation",
              "Status communication to stakeholders",
              "Mitigation before diagnosis",
            ],
          },
          {
            id: "sre-postmortem",
            label: "Blameless postmortems",
            summary:
              "The cultural core of SRE, and a common interview discussion topic.",
            topics: [
              "Timeline reconstruction",
              "Contributing factors, not root cause",
              "Counterfactual reasoning traps",
              "Action items with owners and dates",
            ],
          },
          {
            id: "sre-humanfactors",
            label: "Human factors",
            summary:
              "Why 'human error' is the start of an investigation rather than its conclusion.",
            topics: [
              "Safety science basics",
              "Cognitive load during incidents",
              "Alert fatigue and burnout",
              "Psychological safety in reviews",
            ],
          },
          {
            id: "sre-reliability-review",
            label: "Production readiness",
            summary:
              "The gate that stops unreliable services reaching production in the first place.",
            topics: [
              "Production readiness review checklists",
              "Launch and handover criteria",
              "Service ownership models",
              "Deprecation and decommissioning",
            ],
          },
          {
            id: "sre-metrics-program",
            label: "Measuring the programme",
            kind: "recommended",
            summary:
              "DORA metrics and MTTR as evidence that the reliability work is working.",
            topics: [
              "DORA: lead time, frequency, MTTR, change failure",
              "Incident trend analysis",
              "Toil measurement over time",
              "Reporting reliability to leadership",
            ],
          },
        ],
      },
      {
        id: "sre-s5",
        title: "Interview preparation",
        duration: "4-6 weeks",
        goal: "SRE loops combine coding, systems design, troubleshooting and reliability theory.",
        build:
          "A written portfolio: an SLO document, a postmortem, and a chaos experiment report.",
        nodes: [
          {
            id: "sre-troubleshoot",
            label: "Live troubleshooting round",
            summary:
              "The signature SRE interview: a broken system and a shared terminal.",
            topics: [
              "Systematic narrowing under pressure",
              "Forming and testing hypotheses out loud",
              "Knowing when to mitigate vs investigate",
              "Common Linux and network failure signatures",
            ],
          },
          {
            id: "sre-coding",
            label: "Coding round",
            summary:
              "SRE coding is usually practical: parse this, automate that. Still real programming.",
            topics: [
              "Log parsing and aggregation scripts",
              "Rate limiter or retry implementation",
              "Concurrency and timeouts in code",
              "Writing testable operational tooling",
            ],
          },
          {
            id: "sre-design",
            label: "Reliability system design",
            summary:
              "Design a system to a stated availability target, and justify the cost.",
            topics: [
              "Multi-region active/active design",
              "Failure domain isolation",
              "Capacity and headroom decisions",
              "Trade-off between cost and nines",
            ],
            ref: { href: "/07-system-design/02-scalable-apis", label: "Ch — Scalable APIs" },
          },
          {
            id: "sre-theory",
            label: "Reliability theory questions",
            summary:
              "Expect direct questions on SLOs, error budgets and toil definitions.",
            topics: [
              "Explain an error budget to a product manager",
              "Choosing SLIs for a given service",
              "When to halt releases",
              "Availability maths on the spot",
            ],
          },
          {
            id: "sre-behavioural",
            label: "Behavioural round",
            summary:
              "Incident stories with specifics, and evidence you improved a system afterwards.",
            topics: [
              "An outage you led the response to",
              "Toil you eliminated with measured savings",
              "Pushing back on an unsafe launch",
              "Improving on-call for a team",
            ],
          },
        ],
      },
    ],
    tools: [
      "Prometheus",
      "Grafana",
      "OpenTelemetry",
      "Kubernetes",
      "Terraform",
      "PagerDuty",
      "Go / Python",
      "Chaos tooling",
    ],
    proofOfWork: [
      "An SLO document with an agreed error budget policy",
      "Two published blameless postmortems",
      "A chaos experiment report with findings and fixes",
      "An automation project with measured toil reduction",
    ],
  },

  {
    slug: "cloud-architect",
    title: "Cloud Architect",
    shortTitle: "Cloud Architect",
    category: "Platform & Infra",
    mark: "CA",
    tagline:
      "Design cloud systems that meet the requirement, survive the audit, and do not surprise finance.",
    market:
      "Senior, well-paid, and consistently listed in demand surveys. Consultancies, enterprises and regulated industries hire heavily; certification carries unusual weight here.",
    timeline: "9-12 months part-time",
    entryBar: "Several years of engineering or operations experience. Not an entry-level role.",
    updated: "2026-08-31",
    prerequisites: [
      "Working experience with at least one cloud provider",
      "Networking and Linux fundamentals",
      "Comfort writing design documents",
    ],
    stages: [
      {
        id: "ca-s1",
        title: "Cloud fundamentals in depth",
        duration: "6-8 weeks",
        goal: "Know one provider deeply enough to design without reaching for the documentation.",
        build:
          "Design and deploy a three-tier application with private networking, managed data, and no public database.",
        nodes: [
          {
            id: "ca-iam",
            label: "Identity and access",
            summary:
              "IAM is where most cloud breaches begin and where most architecture reviews focus.",
            topics: [
              "Roles, policies and trust relationships",
              "Least privilege and permission boundaries",
              "Federation and SSO into the cloud",
              "Workload identity over static keys",
            ],
          },
          {
            id: "ca-networking",
            label: "Cloud networking",
            summary:
              "VPC design decisions are expensive to reverse, which is why interviews dwell on them.",
            topics: [
              "VPC, subnets, route tables, NAT",
              "Private endpoints and service links",
              "Hybrid connectivity: VPN and direct connect",
              "DNS design and split-horizon",
            ],
          },
          {
            id: "ca-compute",
            label: "Compute options",
            summary:
              "VMs, containers, serverless — and a defensible reason for the one you picked.",
            topics: [
              "VMs, autoscaling groups and spot capacity",
              "Managed Kubernetes trade-offs",
              "Serverless functions and cold starts",
              "Choosing between them for a workload",
            ],
          },
          {
            id: "ca-storage",
            label: "Storage and data services",
            summary:
              "Durability, consistency and access patterns drive the choice, not familiarity.",
            topics: [
              "Object, block and file storage",
              "Managed relational vs NoSQL services",
              "Storage classes and lifecycle policies",
              "Backup, versioning and immutability",
            ],
          },
          {
            id: "ca-wellarchitected",
            label: "The Well-Architected framework",
            summary:
              "The shared vocabulary of cloud design reviews across every major provider.",
            topics: [
              "Operational excellence and reliability pillars",
              "Security and cost optimisation pillars",
              "Performance efficiency and sustainability",
              "Running a review and recording trade-offs",
            ],
          },
        ],
      },
      {
        id: "ca-s2",
        title: "Designing for scale and failure",
        duration: "6-7 weeks",
        goal: "Architecture is the set of decisions that are hard to change later. Make them explicitly.",
        build:
          "A design document for a multi-region system with an availability target and a cost estimate.",
        nodes: [
          {
            id: "ca-ha",
            label: "High availability design",
            summary:
              "Availability zones, regions, and what actually fails together.",
            topics: [
              "Multi-AZ vs multi-region",
              "Active/active vs active/passive",
              "Failover automation and DNS TTLs",
              "Quorum and split-brain avoidance",
            ],
          },
          {
            id: "ca-data-arch",
            label: "Data architecture",
            summary:
              "Where data lives dictates latency, cost and legal exposure simultaneously.",
            topics: [
              "Replication topologies and lag",
              "Read replicas and write scaling",
              "Data residency and sovereignty",
              "Polyglot persistence with justification",
            ],
          },
          {
            id: "ca-integration",
            label: "Integration patterns",
            summary:
              "Event-driven versus request/response, and the operational cost of each.",
            topics: [
              "Queues, topics and event buses",
              "API gateways and service contracts",
              "Idempotency and exactly-once myths",
              "Choreography vs orchestration",
            ],
          },
          {
            id: "ca-migration",
            label: "Migration strategy",
            summary:
              "Most cloud architecture work is moving something that already exists.",
            topics: [
              "The six Rs of migration",
              "Strangler fig for incremental cutover",
              "Data migration with minimal downtime",
              "Rollback planning",
            ],
          },
          {
            id: "ca-multicloud",
            label: "Multi-cloud and lock-in",
            kind: "recommended",
            summary:
              "Usually the wrong answer, and being able to say so with reasons is the senior signal.",
            topics: [
              "Real drivers for multi-cloud",
              "Abstraction cost vs managed service benefit",
              "Exit strategy and portability",
              "Hybrid and on-premises integration",
            ],
          },
        ],
      },
      {
        id: "ca-s3",
        title: "Security, compliance and governance",
        duration: "5-6 weeks",
        goal: "In enterprise cloud work this is not a stage, it is a constraint on every decision.",
        build:
          "Apply a landing zone with guardrails, policy as code, and a compliance mapping document.",
        nodes: [
          {
            id: "ca-landingzone",
            label: "Landing zones and account structure",
            summary:
              "Multi-account design is the foundation everything else sits on.",
            topics: [
              "Account and subscription strategy",
              "Organisational units and guardrails",
              "Centralised logging and audit accounts",
              "Network hub-and-spoke topology",
            ],
          },
          {
            id: "ca-security",
            label: "Cloud security design",
            summary:
              "Defence in depth, expressed as architecture rather than as a checklist.",
            topics: [
              "Encryption at rest and in transit, key management",
              "Network segmentation and zero trust",
              "Secrets and credential lifecycle",
              "Threat detection services",
            ],
          },
          {
            id: "ca-policy",
            label: "Policy as code",
            summary:
              "Preventive guardrails beat detective controls, and interviews like that answer.",
            topics: [
              "Service control policies and Azure Policy",
              "OPA and Conftest in pipelines",
              "Preventive vs detective controls",
              "Exception processes that do not rot",
            ],
          },
          {
            id: "ca-compliance",
            label: "Compliance frameworks",
            summary:
              "The reason architecture documents exist in regulated industries.",
            topics: [
              "SOC 2, ISO 27001, PCI DSS in outline",
              "GDPR and data residency implications",
              "Evidence collection and audit trails",
              "Shared responsibility model",
            ],
          },
          {
            id: "ca-finops",
            label: "Cost architecture (FinOps)",
            summary:
              "A design that cannot be afforded is not a good design. This gets asked directly.",
            topics: [
              "Cost modelling before build",
              "Reserved capacity, savings plans, spot",
              "Tagging, showback and chargeback",
              "Detecting and fixing cost anomalies",
            ],
          },
        ],
      },
      {
        id: "ca-s4",
        title: "Delivery and platform",
        duration: "4-6 weeks",
        goal: "An architecture that teams cannot build on is a diagram, not a platform.",
        build:
          "Ship reusable infrastructure modules and a reference implementation another team can adopt unaided.",
        nodes: [
          {
            id: "ca-iac",
            label: "Infrastructure as code at scale",
            summary:
              "Module design and state layout across many teams and environments.",
            topics: [
              "Module boundaries and versioning",
              "State isolation per environment",
              "Terragrunt and composition patterns",
              "Provisioning pipelines with approval gates",
            ],
          },
          {
            id: "ca-platform",
            label: "Platform and paved roads",
            summary:
              "Architects who ship reusable defaults beat architects who ship documents.",
            topics: [
              "Golden paths and reference architectures",
              "Self-service provisioning",
              "Internal developer platform basics",
              "Adoption metrics",
            ],
          },
          {
            id: "ca-observability",
            label: "Observability architecture",
            summary:
              "Deciding organisation-wide telemetry standards and who pays for them.",
            topics: [
              "Centralised vs federated telemetry",
              "Retention tiers and cost",
              "Standard instrumentation libraries",
              "Audit and security logging separation",
            ],
          },
          {
            id: "ca-docs",
            label: "Architecture documentation",
            summary:
              "The actual daily deliverable of the role. Interviews often ask for a writing sample.",
            topics: [
              "Architecture decision records",
              "C4 model diagrams",
              "Trade-off and options analysis",
              "Writing for executives and engineers at once",
            ],
          },
          {
            id: "ca-review",
            label: "Running design reviews",
            summary:
              "Influence without authority, applied to technical decisions.",
            topics: [
              "Design review structure",
              "Challenging a design constructively",
              "Recording rejected options",
              "Following through to implementation",
            ],
          },
        ],
      },
      {
        id: "ca-s5",
        title: "Certification and interviews",
        duration: "4-6 weeks",
        goal: "This is one of the few tracks where certification genuinely moves hiring decisions.",
        build:
          "Pass a professional-level architect certification and publish two reference architectures.",
        nodes: [
          {
            id: "ca-cert",
            label: "Certification",
            summary:
              "Consultancies and enterprises filter on it, and partner status depends on it.",
            topics: [
              "AWS Solutions Architect Professional",
              "Azure Solutions Architect Expert",
              "Google Professional Cloud Architect",
              "Study strategy and hands-on labs",
            ],
          },
          {
            id: "ca-design-interview",
            label: "Architecture interview",
            summary:
              "A whiteboard design with cost, security and failure questions layered on.",
            topics: [
              "Requirements gathering before drawing",
              "Justifying every managed service choice",
              "Answering 'what if this region fails'",
              "Estimating monthly cost aloud",
            ],
          },
          {
            id: "ca-case",
            label: "Case study round",
            summary:
              "Common in consultancies: a written brief, a proposed architecture, a presentation.",
            topics: [
              "Reading a business brief for constraints",
              "Options analysis with trade-offs",
              "Migration phasing and risk",
              "Presenting to a non-technical panel",
            ],
          },
          {
            id: "ca-hands-on",
            label: "Staying hands-on",
            summary:
              "Architects who cannot build lose credibility fast, and interviewers test for it.",
            topics: [
              "Writing the reference implementation yourself",
              "Reading pipeline and IaC code",
              "Debugging a deployment",
              "Keeping current with service changes",
            ],
          },
          {
            id: "ca-behavioural",
            label: "Behavioural and stakeholder round",
            summary:
              "The role is half technical, half negotiation. Both are assessed.",
            topics: [
              "Convincing a team to change direction",
              "Saying no to a requested technology",
              "Managing a migration with a deadline",
              "Handling a cost overrun conversation",
            ],
          },
        ],
      },
    ],
    tools: [
      "AWS / Azure / GCP",
      "Terraform",
      "Kubernetes",
      "OPA",
      "Well-Architected Framework",
      "C4 / draw.io",
      "Cost management tooling",
    ],
    proofOfWork: [
      "Two published reference architectures with cost estimates",
      "A landing zone implementation with policy guardrails",
      "An architecture decision record set from a real project",
      "A professional-level cloud certification",
    ],
  },

  {
    slug: "platform-engineer",
    title: "Platform Engineer",
    shortTitle: "Platform",
    category: "Platform & Infra",
    mark: "PL",
    tagline:
      "Build the internal product that other engineers ship on: paved roads, self-service, and sane defaults.",
    market:
      "The fastest-growing rebrand of infrastructure work. Companies past about fifty engineers hire for it explicitly, and it pays like senior backend.",
    timeline: "7-10 months part-time",
    entryBar: "DevOps or backend experience. You are building a product, so software skills matter.",
    updated: "2026-08-31",
    prerequisites: [
      "Kubernetes and cloud fundamentals",
      "One strong programming language, usually Go",
      "Experience being the person other engineers ask for help",
    ],
    stages: [
      {
        id: "plat-s1",
        title: "Platform as a product",
        duration: "4-5 weeks",
        goal: "The distinguishing idea: your users are engineers, and they can route around you.",
        build:
          "Interview five engineers about their delivery friction and write a prioritised platform backlog.",
        nodes: [
          {
            id: "plat-product",
            label: "Product thinking for platforms",
            summary:
              "Adoption is voluntary in practice. That single fact reshapes how the work is done.",
            topics: [
              "Identifying your users and their jobs",
              "Golden paths, not golden cages",
              "Measuring adoption and satisfaction",
              "Deprecating internal tools humanely",
            ],
          },
          {
            id: "plat-dx",
            label: "Developer experience",
            summary:
              "Time from idea to production is the metric platform teams are judged on.",
            topics: [
              "Lead time and DORA metrics",
              "Local development environments",
              "Feedback loop speed",
              "Cognitive load as a design constraint",
            ],
          },
          {
            id: "plat-topologies",
            label: "Team topologies",
            summary:
              "The organisational theory that platform interviews reference constantly.",
            topics: [
              "Stream-aligned, platform, enabling teams",
              "Interaction modes and collaboration cost",
              "Conway's law in practice",
              "Ownership boundaries",
            ],
          },
          {
            id: "plat-selfservice",
            label: "Self-service design",
            summary:
              "Every ticket queue is a design failure. The interview asks how you remove them.",
            topics: [
              "Templates and scaffolding",
              "Provisioning APIs and portals",
              "Guardrails over gatekeeping",
              "Escape hatches for edge cases",
            ],
          },
          {
            id: "plat-docs",
            label: "Documentation as interface",
            summary:
              "For an internal platform, the docs are most of the product.",
            topics: [
              "Getting started in under ten minutes",
              "Runbooks and troubleshooting guides",
              "Reference vs tutorial vs explanation",
              "Keeping docs current automatically",
            ],
          },
        ],
      },
      {
        id: "plat-s2",
        title: "The delivery platform",
        duration: "6-7 weeks",
        goal: "Build the machinery that takes a service from repository to production without a human gate.",
        build:
          "A scaffolding command that creates a repo, pipeline, environment and dashboard in one step.",
        nodes: [
          {
            id: "plat-k8s",
            label: "Kubernetes as a substrate",
            summary:
              "You are not running apps on it, you are running a platform on it. Different depth required.",
            topics: [
              "Multi-tenancy and namespace isolation",
              "Resource quotas and limit ranges",
              "Cluster upgrade strategy",
              "Node pools and workload placement",
            ],
          },
          {
            id: "plat-gitops",
            label: "GitOps at organisation scale",
            summary:
              "Argo CD across hundreds of services needs structure that a single app does not.",
            topics: [
              "App-of-apps and ApplicationSets",
              "Repository structure for many teams",
              "Promotion between environments",
              "Handling drift and manual overrides",
            ],
          },
          {
            id: "plat-templates",
            label: "Scaffolding and templates",
            summary:
              "The paved road made concrete: a new service with everything wired up.",
            topics: [
              "Backstage software templates",
              "Cookiecutter and repo bootstrapping",
              "Template versioning and updates",
              "Opinionated defaults with overrides",
            ],
          },
          {
            id: "plat-ci",
            label: "Shared CI/CD",
            summary:
              "Reusable pipelines that teams adopt instead of copying and diverging.",
            topics: [
              "Reusable workflows and shared actions",
              "Standard build, test, scan, deploy stages",
              "Pipeline versioning and migration",
              "Build caching across teams",
            ],
          },
          {
            id: "plat-envs",
            label: "Environments on demand",
            summary:
              "Ephemeral environments per pull request are a signature platform capability.",
            topics: [
              "Preview environments and lifecycle",
              "Test data seeding",
              "Cost control and reaping",
              "Environment parity with production",
            ],
          },
        ],
      },
      {
        id: "plat-s3",
        title: "Building platform software",
        duration: "6-7 weeks",
        goal: "Platform engineering is software engineering. This stage is where the title is earned.",
        build:
          "Write a Kubernetes operator or a provisioning API that another team uses in production.",
        nodes: [
          {
            id: "plat-go",
            label: "Go for platform tooling",
            summary:
              "The lingua franca of infrastructure software, and usually the coding round language.",
            topics: [
              "Go concurrency, contexts and errors",
              "Writing CLIs with good ergonomics",
              "Testing and dependency injection",
              "Distributing binaries",
            ],
          },
          {
            id: "plat-operators",
            label: "Operators and CRDs",
            summary:
              "Extending Kubernetes is the most distinctive platform engineering skill.",
            topics: [
              "Custom resource definitions",
              "Controller runtime and reconciliation loops",
              "Idempotency and status subresources",
              "Finalizers and cleanup",
            ],
          },
          {
            id: "plat-portal",
            label: "Developer portal",
            summary:
              "Backstage or equivalent as the front door to everything you built.",
            topics: [
              "Service catalogue and ownership metadata",
              "Software templates and plugins",
              "Tech docs integration",
              "Scorecards and standards tracking",
            ],
          },
          {
            id: "plat-api",
            label: "Platform APIs",
            summary:
              "Treating infrastructure capability as an API is what makes it composable.",
            topics: [
              "Declarative APIs over imperative scripts",
              "Versioning and backwards compatibility",
              "Authorisation for platform actions",
              "Audit logging of platform operations",
            ],
          },
          {
            id: "plat-testing",
            label: "Testing platform code",
            summary:
              "A bug in the platform breaks every team at once. Testing standards are higher.",
            topics: [
              "envtest and integration testing controllers",
              "Contract tests for platform APIs",
              "Canary rollout of platform changes",
              "Backwards compatibility guarantees",
            ],
          },
        ],
      },
      {
        id: "plat-s4",
        title: "Operating the platform",
        duration: "4-6 weeks",
        goal: "You now have internal customers with expectations, and an SLO of your own.",
        build:
          "Publish a platform SLO, an on-call rotation and a support model, then run it for a month.",
        nodes: [
          {
            id: "plat-slo",
            label: "Platform reliability",
            summary:
              "When the platform is down, every team is down. Reliability requirements are strict.",
            topics: [
              "SLOs for platform services",
              "Blast radius of platform changes",
              "Staged rollout across tenants",
              "Degraded mode operation",
            ],
          },
          {
            id: "plat-observability",
            label: "Observability as a service",
            summary:
              "Give teams telemetry by default rather than asking them to instrument from scratch.",
            topics: [
              "Auto-instrumentation and sidecars",
              "Default dashboards per service",
              "Standard alert bundles",
              "Telemetry cost attribution",
            ],
          },
          {
            id: "plat-security",
            label: "Secure by default",
            summary:
              "The platform is the cheapest place to enforce security once for everybody.",
            topics: [
              "Workload identity by default",
              "Image signing and admission control",
              "Network policy defaults",
              "Secret injection patterns",
            ],
          },
          {
            id: "plat-cost",
            label: "Cost visibility",
            summary:
              "Platform teams usually own the cloud bill conversation, whether they wanted to or not.",
            topics: [
              "Per-team cost attribution",
              "Right-sizing recommendations",
              "Idle resource reaping",
              "Showback dashboards",
            ],
          },
          {
            id: "plat-support",
            label: "Support model",
            summary:
              "Without a support model, platform engineers become a human help desk.",
            topics: [
              "Office hours and support rotation",
              "Escalation paths and SLAs",
              "Turning repeat questions into docs or features",
              "Managing feature requests",
            ],
          },
        ],
      },
      {
        id: "plat-s5",
        title: "Interview preparation",
        duration: "3-5 weeks",
        goal: "Platform interviews test coding, Kubernetes depth, and product judgement together.",
        build:
          "An open-source operator or platform tool with documentation and tests.",
        nodes: [
          {
            id: "plat-coding",
            label: "Coding round",
            summary:
              "Usually Go, usually something operational rather than an algorithm puzzle.",
            topics: [
              "Writing a small controller or CLI",
              "Concurrency and error handling",
              "API design in code",
              "Tests that demonstrate judgement",
            ],
          },
          {
            id: "plat-k8s-depth",
            label: "Kubernetes deep dive",
            summary:
              "Expect internals questions, not just kubectl usage.",
            topics: [
              "What happens when you apply a manifest",
              "Scheduler and controller behaviour",
              "Admission webhooks",
              "Debugging cluster-level problems",
            ],
          },
          {
            id: "plat-design",
            label: "Platform design round",
            summary:
              "Design an internal deployment platform for fifty teams. Adoption is part of the answer.",
            topics: [
              "Multi-tenancy model",
              "Self-service boundaries and guardrails",
              "Migration from existing tooling",
              "Measuring success",
            ],
          },
          {
            id: "plat-product-round",
            label: "Product judgement round",
            summary:
              "What distinguishes platform from DevOps interviews: they ask what you would not build.",
            topics: [
              "Prioritising a platform backlog",
              "Build vs buy decisions",
              "Handling a team that refuses the paved road",
              "Sunsetting a tool people still use",
            ],
          },
          {
            id: "plat-behavioural",
            label: "Behavioural round",
            summary:
              "Influence and adoption stories, with numbers where you have them.",
            topics: [
              "A platform capability teams actually adopted",
              "A migration you drove across teams",
              "Reducing lead time measurably",
              "Handling internal customer conflict",
            ],
          },
        ],
      },
    ],
    tools: [
      "Kubernetes",
      "Go",
      "Argo CD",
      "Backstage",
      "Terraform",
      "Crossplane",
      "OPA / Kyverno",
      "Prometheus",
    ],
    proofOfWork: [
      "An open-source Kubernetes operator with tests and docs",
      "A service scaffolding template adopted by real teams",
      "A DORA metrics improvement with before/after numbers",
      "A developer portal with a populated service catalogue",
    ],
  },

  {
    slug: "kubernetes-engineer",
    title: "Kubernetes Engineer",
    shortTitle: "Kubernetes",
    category: "Platform & Infra",
    mark: "K8",
    tagline:
      "Run, secure and debug clusters that other people bet their production traffic on.",
    market:
      "Kubernetes is the default deployment substrate, and genuine cluster-level expertise is scarce. Certifications are recognised and consultancies hire on them directly.",
    timeline: "6-9 months part-time",
    entryBar: "Linux, networking and container fundamentals.",
    updated: "2026-08-31",
    prerequisites: [
      "Docker and container fundamentals",
      "Linux administration",
      "YAML fluency and basic networking",
    ],
    stages: [
      {
        id: "k8-s1",
        title: "Core objects and the control plane",
        duration: "4-6 weeks",
        goal: "Understand Kubernetes as a reconciliation engine rather than a deployment tool.",
        build:
          "Bootstrap a cluster the hard way once, then run a stateful and a stateless workload on it.",
        nodes: [
          {
            id: "k8-architecture",
            label: "Cluster architecture",
            summary:
              "API server, etcd, scheduler, controller manager, kubelet — and what breaks when each does.",
            topics: [
              "Control plane components and their jobs",
              "etcd as the single source of truth",
              "kubelet, container runtime and CRI",
              "The reconciliation loop model",
            ],
          },
          {
            id: "k8-workloads",
            label: "Workload objects",
            summary:
              "Deployments, StatefulSets, Jobs — and choosing correctly between them.",
            topics: [
              "Deployments and rollout strategies",
              "StatefulSets, ordering and stable identity",
              "DaemonSets, Jobs and CronJobs",
              "Pod lifecycle, probes and init containers",
            ],
          },
          {
            id: "k8-config",
            label: "Configuration and storage",
            summary:
              "ConfigMaps, Secrets and the volume system, including their sharp edges.",
            topics: [
              "ConfigMaps and Secrets injection",
              "Persistent volumes, claims and storage classes",
              "CSI drivers and dynamic provisioning",
              "Volume expansion and reclaim policies",
            ],
          },
          {
            id: "k8-scheduling",
            label: "Scheduling",
            summary:
              "Why a pod is Pending is the most common Kubernetes support question there is.",
            topics: [
              "Requests, limits and QoS",
              "Node selectors, affinity and anti-affinity",
              "Taints, tolerations and topology spread",
              "Priority, preemption and eviction",
            ],
          },
          {
            id: "k8-kubectl",
            label: "kubectl fluency",
            summary:
              "Certification exams and interviews are time-boxed. Speed here is worth real marks.",
            topics: [
              "Imperative commands and dry-run",
              "JSONPath and custom columns",
              "Contexts, namespaces and kubeconfig",
              "Debug containers and port-forward",
            ],
          },
        ],
      },
      {
        id: "k8-s2",
        title: "Networking and service delivery",
        duration: "5-6 weeks",
        goal: "Cluster networking is the least understood and most interviewed area.",
        build:
          "Expose services through an ingress controller with TLS, then enforce a default-deny network policy.",
        nodes: [
          {
            id: "k8-services",
            label: "Services and DNS",
            summary:
              "How a request actually finds a pod, including kube-proxy and endpoint slices.",
            topics: [
              "ClusterIP, NodePort, LoadBalancer",
              "kube-proxy modes and iptables/IPVS",
              "EndpointSlices and readiness",
              "CoreDNS and service discovery",
            ],
          },
          {
            id: "k8-ingress",
            label: "Ingress and Gateway API",
            summary:
              "Gateway API is replacing Ingress. Knowing both, and why, is current.",
            topics: [
              "Ingress controllers and annotations",
              "Gateway API resources and roles",
              "TLS termination and cert-manager",
              "Path and host routing rules",
            ],
          },
          {
            id: "k8-cni",
            label: "CNI and pod networking",
            summary:
              "The plugin layer that decides how packets move between pods.",
            topics: [
              "CNI plugin responsibilities",
              "Overlay vs routed networking",
              "Cilium and eBPF dataplanes",
              "IP address management",
            ],
          },
          {
            id: "k8-netpol",
            label: "Network policy",
            summary:
              "Default-allow is the Kubernetes default and the finding on every audit.",
            topics: [
              "NetworkPolicy semantics",
              "Default-deny and progressive tightening",
              "Egress control and DNS policy",
              "Testing policies safely",
            ],
          },
          {
            id: "k8-mesh",
            label: "Service mesh",
            kind: "recommended",
            summary:
              "Powerful and expensive. The senior answer includes when not to adopt one.",
            topics: [
              "Sidecar vs ambient mesh",
              "mTLS and identity",
              "Traffic splitting and retries",
              "Operational cost and complexity",
            ],
          },
        ],
      },
      {
        id: "k8-s3",
        title: "Security and multi-tenancy",
        duration: "5-6 weeks",
        goal: "Clusters are shared. Isolation failures are security incidents.",
        build:
          "Harden a cluster against a CIS benchmark and document each control you applied.",
        nodes: [
          {
            id: "k8-rbac",
            label: "RBAC and identity",
            summary:
              "Roles, bindings and service accounts. Frequently misconfigured, always audited.",
            topics: [
              "Roles vs ClusterRoles and bindings",
              "Service accounts and token projection",
              "Workload identity federation to cloud IAM",
              "Auditing effective permissions",
            ],
          },
          {
            id: "k8-podsecurity",
            label: "Workload hardening",
            summary:
              "Running as root in a privileged pod is still depressingly common.",
            topics: [
              "Pod Security Standards and admission",
              "securityContext, capabilities, read-only root",
              "seccomp and AppArmor profiles",
              "Preventing host mounts and hostNetwork",
            ],
          },
          {
            id: "k8-admission",
            label: "Admission control and policy",
            summary:
              "The enforcement point where standards become non-negotiable.",
            topics: [
              "Validating and mutating webhooks",
              "Kyverno and OPA Gatekeeper policies",
              "Image signature verification",
              "Failure modes when the webhook is down",
            ],
          },
          {
            id: "k8-supplychain",
            label: "Image and supply chain security",
            summary:
              "What is running, where it came from, and whether it has known holes.",
            topics: [
              "Image scanning in the registry and cluster",
              "Signing and verifying with Sigstore",
              "SBOM and provenance",
              "Base image lifecycle",
            ],
          },
          {
            id: "k8-tenancy",
            label: "Multi-tenancy",
            summary:
              "Namespaces alone are not a security boundary, and interviewers check you know that.",
            topics: [
              "Soft vs hard multi-tenancy",
              "Quotas, limit ranges and fair sharing",
              "Virtual clusters",
              "Noisy neighbour mitigation",
            ],
          },
        ],
      },
      {
        id: "k8-s4",
        title: "Operations at scale",
        duration: "5-6 weeks",
        goal: "Upgrades, capacity and cost — the things that make cluster ownership a real job.",
        build:
          "Perform a zero-downtime cluster upgrade and publish the runbook you followed.",
        nodes: [
          {
            id: "k8-upgrades",
            label: "Cluster lifecycle",
            summary:
              "Upgrades are the highest-risk recurring operation on any cluster.",
            topics: [
              "Version skew policy and deprecations",
              "Control plane and node pool upgrades",
              "Drain, PodDisruptionBudgets and surge",
              "API deprecation migration",
            ],
          },
          {
            id: "k8-autoscaling",
            label: "Autoscaling",
            summary:
              "Three different autoscalers that interact, and often fight.",
            topics: [
              "HPA and custom metrics",
              "VPA and its conflicts with HPA",
              "Cluster autoscaler and Karpenter",
              "Scale-to-zero patterns",
            ],
          },
          {
            id: "k8-stateful",
            label: "Stateful workloads",
            summary:
              "Databases on Kubernetes: possible, popular, and full of sharp edges.",
            topics: [
              "Operators for databases",
              "Backup and restore of persistent data",
              "Storage performance and IOPS",
              "When to use a managed service instead",
            ],
          },
          {
            id: "k8-observability",
            label: "Cluster observability",
            summary:
              "Monitoring the platform itself, not only the workloads on it.",
            topics: [
              "kube-state-metrics and node exporter",
              "Control plane and etcd metrics",
              "Event collection and correlation",
              "Alerting on cluster health",
            ],
          },
          {
            id: "k8-cost",
            label: "Cost and efficiency",
            summary:
              "Over-requested resources are the biggest source of cloud waste in Kubernetes shops.",
            topics: [
              "Request right-sizing from real usage",
              "Bin packing and node shapes",
              "Spot and preemptible nodes",
              "Cost attribution per namespace",
            ],
          },
        ],
      },
      {
        id: "k8-s5",
        title: "Certification and interviews",
        duration: "4-5 weeks",
        goal: "CKA and CKS are hands-on, time-pressured, and directly respected by employers.",
        build:
          "Pass CKA, then CKS, and keep a personal runbook of every failure mode you hit.",
        nodes: [
          {
            id: "k8-cka",
            label: "CKA preparation",
            summary:
              "A practical exam with a terminal and a clock. Speed and muscle memory decide it.",
            topics: [
              "Exam domains and weighting",
              "Time management across tasks",
              "Fast manifest generation with dry-run",
              "Killer.sh style practice",
            ],
          },
          {
            id: "k8-cks",
            label: "CKS preparation",
            kind: "recommended",
            summary:
              "The security specialisation, and a strong differentiator in the market.",
            topics: [
              "Cluster hardening tasks",
              "Runtime security with Falco",
              "Supply chain and admission tasks",
              "Audit logging configuration",
            ],
          },
          {
            id: "k8-troubleshoot",
            label: "Live troubleshooting",
            summary:
              "The core interview: a broken cluster and a shared screen.",
            topics: [
              "Pod stuck Pending, CrashLoop, ImagePull",
              "Service with no endpoints",
              "DNS resolution failures",
              "Node NotReady investigation",
            ],
          },
          {
            id: "k8-design",
            label: "Cluster design round",
            summary:
              "Design a platform cluster topology for a company, with isolation and upgrade strategy.",
            topics: [
              "Cluster per environment vs per tenant",
              "Regional topology and failure domains",
              "Upgrade and maintenance strategy",
              "Cost and operational overhead",
            ],
          },
          {
            id: "k8-portfolio",
            label: "Portfolio",
            summary:
              "Public evidence: a cluster bootstrap repo, hardening notes, an operator.",
            topics: [
              "Cluster bootstrap repository",
              "CIS hardening write-up",
              "Debugging case studies",
              "Contributions to Kubernetes ecosystem projects",
            ],
          },
        ],
      },
    ],
    tools: [
      "Kubernetes",
      "kubectl",
      "Helm",
      "Cilium",
      "Kyverno",
      "cert-manager",
      "Argo CD",
      "Prometheus",
      "Falco",
    ],
    proofOfWork: [
      "CKA, and ideally CKS",
      "A cluster bootstrap repository someone else can run",
      "A CIS hardening write-up with applied controls",
      "A documented zero-downtime cluster upgrade",
    ],
  },

  {
    slug: "network-engineer",
    title: "Network Engineer",
    shortTitle: "Network",
    category: "Platform & Infra",
    mark: "NE",
    tagline:
      "Design and run the connectivity everything else depends on, increasingly through code rather than a console.",
    market:
      "Named in demand surveys with very low unemployment. Cloud did not remove the need — it moved it, and engineers who can do both physical and cloud networking are scarce.",
    timeline: "6-10 months part-time",
    entryBar: "No prior experience required; this is a genuine entry route into tech.",
    updated: "2026-08-31",
    prerequisites: [
      "Willingness to learn protocols in detail",
      "A lab: physical kit, GNS3, or Containerlab",
      "Basic Linux",
    ],
    stages: [
      {
        id: "ne-s1",
        title: "Protocol fundamentals",
        duration: "6-8 weeks",
        goal: "Networking rewards depth. Surface knowledge fails the first troubleshooting question.",
        build:
          "A lab topology with VLANs, routing between them, and a documented packet walk from host to host.",
        nodes: [
          {
            id: "ne-model",
            label: "The layered model",
            summary:
              "Every troubleshooting conversation is structured around layers. Fluency here is mandatory.",
            topics: [
              "OSI and TCP/IP layers in practice",
              "Encapsulation and MTU",
              "Ethernet frames and ARP",
              "Following a packet end to end",
            ],
          },
          {
            id: "ne-ip",
            label: "IP addressing and subnetting",
            summary:
              "Subnetting under time pressure is still asked in interviews and exams.",
            topics: [
              "IPv4 subnetting and VLSM",
              "IPv6 addressing and transition",
              "CIDR and route summarisation",
              "NAT types and their consequences",
            ],
          },
          {
            id: "ne-switching",
            label: "Switching",
            summary:
              "Layer 2 problems are the ones that take down whole floors.",
            topics: [
              "VLANs, trunking and 802.1Q",
              "Spanning tree and loop prevention",
              "Link aggregation",
              "MAC learning and broadcast domains",
            ],
          },
          {
            id: "ne-routing",
            label: "Routing",
            summary:
              "OSPF and BGP are the two protocols every network interview covers.",
            topics: [
              "Static routing and administrative distance",
              "OSPF areas and LSA types",
              "BGP path selection and attributes",
              "Route filtering and redistribution",
            ],
          },
          {
            id: "ne-services",
            label: "Core network services",
            summary:
              "DNS and DHCP failures look like everything being broken at once.",
            topics: [
              "DNS resolution, records and caching",
              "DHCP and relay behaviour",
              "NTP and why time matters",
              "TLS and certificate chains",
            ],
          },
        ],
      },
      {
        id: "ne-s2",
        title: "Troubleshooting and operations",
        duration: "5-6 weeks",
        goal: "The daily job: something is slow or down, and everyone thinks it is the network.",
        build:
          "Break your own lab deliberately five times and write a diagnostic runbook for each failure.",
        nodes: [
          {
            id: "ne-tools",
            label: "Diagnostic tooling",
            summary:
              "Being fast with the right tool is what separates competent from slow.",
            topics: [
              "ping, traceroute and MTR interpretation",
              "tcpdump and Wireshark filters",
              "Interface counters and errors",
              "Flow data: NetFlow and sFlow",
            ],
          },
          {
            id: "ne-methodology",
            label: "Troubleshooting methodology",
            summary:
              "Interviews score the method as much as the answer.",
            topics: [
              "Layer-by-layer isolation",
              "Divide and conquer on the path",
              "Distinguishing loss, latency and jitter",
              "Proving it is not the network",
            ],
          },
          {
            id: "ne-performance",
            label: "Performance and QoS",
            summary:
              "Bandwidth is rarely the problem. Buffers, queues and MTU usually are.",
            topics: [
              "Latency, jitter, loss and their causes",
              "Queueing, buffering and bufferbloat",
              "QoS classification and shaping",
              "MTU, fragmentation and PMTUD blackholes",
            ],
          },
          {
            id: "ne-monitoring",
            label: "Monitoring and alerting",
            summary:
              "Network monitoring is moving from SNMP polling to streaming telemetry.",
            topics: [
              "SNMP and its limitations",
              "Streaming telemetry and gNMI",
              "Synthetic probes and path monitoring",
              "Capacity trending",
            ],
          },
          {
            id: "ne-change",
            label: "Change management",
            summary:
              "Network changes are high blast radius and usually happen at night for a reason.",
            topics: [
              "Change windows and rollback plans",
              "Pre and post change validation",
              "Configuration backup and diffing",
              "Documenting topology accurately",
            ],
          },
        ],
      },
      {
        id: "ne-s3",
        title: "Cloud and modern networking",
        duration: "5-6 weeks",
        goal: "The growth half of the role. Cloud networking is where the new jobs are.",
        build:
          "Build hybrid connectivity between a lab network and a cloud VPC, entirely from Terraform.",
        nodes: [
          {
            id: "ne-cloudnet",
            label: "Cloud networking",
            summary:
              "Same concepts, different names, and some genuinely different constraints.",
            topics: [
              "VPC, subnets and route tables",
              "Security groups vs network ACLs",
              "Transit gateways and peering",
              "Private endpoints and service networking",
            ],
          },
          {
            id: "ne-hybrid",
            label: "Hybrid connectivity",
            summary:
              "Connecting the data centre to the cloud is a large share of enterprise network work.",
            topics: [
              "IPsec VPN design",
              "Direct Connect / ExpressRoute",
              "BGP over hybrid links",
              "Overlapping address space problems",
            ],
          },
          {
            id: "ne-sdwan",
            label: "SD-WAN and overlays",
            summary:
              "Branch connectivity moved to software-defined overlays across most enterprises.",
            topics: [
              "SD-WAN architecture and controllers",
              "VXLAN and EVPN in the data centre",
              "Overlay vs underlay troubleshooting",
              "Path selection policy",
            ],
          },
          {
            id: "ne-security",
            label: "Network security",
            summary:
              "Segmentation and zero trust are where network and security roles overlap.",
            topics: [
              "Firewall rule design and hygiene",
              "Microsegmentation",
              "Zero trust network access",
              "DDoS mitigation",
            ],
          },
          {
            id: "ne-k8snet",
            label: "Container networking",
            kind: "recommended",
            summary:
              "Kubernetes networking questions now appear in network engineering interviews.",
            topics: [
              "Pod and service networking",
              "CNI plugins and dataplanes",
              "Ingress and load balancer integration",
              "Debugging across the overlay",
            ],
          },
        ],
      },
      {
        id: "ne-s4",
        title: "Network automation",
        duration: "5-6 weeks",
        goal: "The skill that separates a network engineer in 2026 from one in 2010.",
        build:
          "Automate configuration of your whole lab from a source of truth, with validation tests in CI.",
        nodes: [
          {
            id: "ne-python",
            label: "Python for networks",
            summary:
              "Scripting is now an expected interview topic for network roles.",
            topics: [
              "Netmiko and NAPALM",
              "Parsing device output reliably",
              "REST and NETCONF APIs",
              "Error handling and idempotency",
            ],
          },
          {
            id: "ne-ansible",
            label: "Configuration automation",
            summary:
              "Ansible dominates network automation in enterprises.",
            topics: [
              "Network modules and inventories",
              "Templating configs with Jinja2",
              "Idempotent config pushes",
              "Dry-run and diff modes",
            ],
          },
          {
            id: "ne-sot",
            label: "Source of truth",
            summary:
              "Automation without a source of truth just automates the drift.",
            topics: [
              "NetBox as intended state",
              "IPAM and DCIM discipline",
              "Generating config from data",
              "Reconciling actual vs intended",
            ],
          },
          {
            id: "ne-testing",
            label: "Testing and CI for networks",
            summary:
              "Validating a change before it reaches production kit.",
            topics: [
              "Containerlab and virtual topologies",
              "Pre-deployment validation tests",
              "Batfish configuration analysis",
              "Pipeline for network changes",
            ],
          },
          {
            id: "ne-iac",
            label: "Infrastructure as code",
            summary:
              "Cloud network work is Terraform work.",
            topics: [
              "Terraform for cloud networking",
              "Module design for network resources",
              "State and blast radius",
              "Drift detection",
            ],
          },
        ],
      },
      {
        id: "ne-s5",
        title: "Certification and interviews",
        duration: "4-6 weeks",
        goal: "Networking is one of the few fields where certification is a genuine hiring filter.",
        build:
          "Pass CCNA, then a cloud networking certification, and publish your lab topology repository.",
        nodes: [
          {
            id: "ne-ccna",
            label: "CCNA and beyond",
            summary:
              "CCNA remains the recognised baseline; CCNP is the differentiator.",
            topics: [
              "CCNA exam domains",
              "Hands-on lab practice",
              "CCNP Enterprise path",
              "Vendor-neutral alternatives",
            ],
          },
          {
            id: "ne-cloudcert",
            label: "Cloud networking certification",
            kind: "recommended",
            summary:
              "The combination of CCNA plus a cloud networking cert is unusually marketable.",
            topics: [
              "AWS Advanced Networking",
              "Azure Network Engineer",
              "Google Network Engineer",
              "Mapping on-premises concepts to cloud",
            ],
          },
          {
            id: "ne-interview",
            label: "Technical interview",
            summary:
              "Expect subnetting on the spot and a detailed packet-walk question.",
            topics: [
              "Subnetting without a calculator",
              "Walk a packet through the network",
              "BGP path selection explained",
              "Troubleshooting scenario questions",
            ],
          },
          {
            id: "ne-design",
            label: "Network design round",
            summary:
              "Design a campus, data centre or cloud topology with redundancy and growth.",
            topics: [
              "Redundancy and failure domains",
              "Addressing plan and summarisation",
              "Scaling and growth headroom",
              "Cost and vendor considerations",
            ],
          },
          {
            id: "ne-behavioural",
            label: "Behavioural round",
            summary:
              "Outage stories and change discipline are what this round is really probing.",
            topics: [
              "A major outage you resolved",
              "A change that went wrong and what you changed",
              "Working with application teams",
              "Documenting for the next engineer",
            ],
          },
        ],
      },
    ],
    tools: [
      "Wireshark",
      "Containerlab / GNS3",
      "Ansible",
      "Python / Netmiko",
      "NetBox",
      "Terraform",
      "Batfish",
      "Cisco / Arista / Juniper",
    ],
    proofOfWork: [
      "A lab topology repository others can reproduce",
      "A network automation project driven from a source of truth",
      "CCNA plus a cloud networking certification",
      "A troubleshooting write-up with packet captures",
    ],
  },

  {
    slug: "systems-administrator",
    title: "Systems Administrator",
    shortTitle: "SysAdmin",
    category: "Platform & Infra",
    mark: "SA",
    tagline:
      "Keep the servers, identities and endpoints that a business runs on healthy, patched and recoverable.",
    market:
      "Among the lowest unemployment rates of any technology role. Less glamorous than cloud-native work, consistently in demand, and the most common entry point into infrastructure careers.",
    timeline: "5-8 months part-time",
    entryBar: "None. This is a genuine entry-level route into technology.",
    updated: "2026-08-31",
    prerequisites: [
      "Willingness to be the person who fixes things",
      "A home lab, even a single spare machine",
      "Methodical documentation habits",
    ],
    stages: [
      {
        id: "sa-s1",
        title: "Operating systems",
        duration: "5-7 weeks",
        goal: "Deep familiarity with at least one OS family, and working knowledge of the other.",
        build:
          "Build a small network at home: a Linux server, a Windows client, shared storage and centralised logins.",
        nodes: [
          {
            id: "sa-linux",
            label: "Linux administration",
            summary:
              "The bulk of server workloads. Package management, services and permissions.",
            topics: [
              "Users, groups, permissions and sudo",
              "systemd services, timers and journald",
              "Package management and repositories",
              "Filesystems, LVM and disk management",
            ],
          },
          {
            id: "sa-windows",
            label: "Windows Server",
            summary:
              "Most enterprises run both. Windows skills widen the job pool considerably.",
            topics: [
              "Roles, features and server management",
              "NTFS permissions and sharing",
              "Group Policy fundamentals",
              "Event Viewer and troubleshooting",
            ],
          },
          {
            id: "sa-shell",
            label: "Shell and PowerShell",
            summary:
              "Repetition is the enemy. Scripting is what turns a technician into an engineer.",
            topics: [
              "Bash scripting and text processing",
              "PowerShell cmdlets, objects and pipelines",
              "Scheduled tasks and cron",
              "Safe, idempotent scripts",
            ],
          },
          {
            id: "sa-virtualisation",
            label: "Virtualisation",
            summary:
              "Hypervisors are still the substrate under most enterprise workloads.",
            topics: [
              "VMware or Proxmox fundamentals",
              "Snapshots, templates and cloning",
              "Resource allocation and overcommit",
              "Migration and high availability",
            ],
          },
          {
            id: "sa-networking",
            label: "Networking for sysadmins",
            summary:
              "Enough to diagnose confidently and speak to the network team precisely.",
            topics: [
              "IP, subnets, gateways and routing basics",
              "DNS and DHCP administration",
              "Firewall rules on hosts",
              "Packet capture basics",
            ],
          },
        ],
      },
      {
        id: "sa-s2",
        title: "Identity, storage and backup",
        duration: "5-6 weeks",
        goal: "The three things that end careers when they go wrong: access, data, and recovery.",
        build:
          "Set up centralised identity, shared storage with quotas, and a backup you have restored from.",
        nodes: [
          {
            id: "sa-identity",
            label: "Directory and identity",
            summary:
              "Active Directory remains the backbone of enterprise identity.",
            topics: [
              "Active Directory structure and objects",
              "Group Policy design and troubleshooting",
              "LDAP, Kerberos and authentication flow",
              "Entra ID and hybrid identity",
            ],
          },
          {
            id: "sa-storage",
            label: "Storage administration",
            summary:
              "Capacity, performance and permissions across shared storage.",
            topics: [
              "RAID levels and their trade-offs",
              "SAN and NAS basics",
              "File shares, quotas and permissions",
              "Storage monitoring and growth",
            ],
          },
          {
            id: "sa-backup",
            label: "Backup and recovery",
            summary:
              "An untested backup is not a backup. Interviews ask about restores, not backups.",
            topics: [
              "3-2-1 rule and immutable copies",
              "RPO and RTO per system",
              "Restore testing cadence",
              "Ransomware-resistant backup design",
            ],
          },
          {
            id: "sa-patching",
            label: "Patching and lifecycle",
            summary:
              "The unglamorous work that prevents most breaches.",
            topics: [
              "Patch cycles and maintenance windows",
              "Testing before broad rollout",
              "End-of-life OS planning",
              "Vulnerability reporting and remediation",
            ],
          },
          {
            id: "sa-monitoring",
            label: "Monitoring",
            summary:
              "Knowing before the users call is the difference between admin and firefighter.",
            topics: [
              "Host and service monitoring",
              "Disk, memory and capacity alerts",
              "Centralised log collection",
              "Alert tuning to reduce noise",
            ],
          },
        ],
      },
      {
        id: "sa-s3",
        title: "Automation and cloud",
        duration: "5-6 weeks",
        goal: "The path out of ticket-driven work and into infrastructure engineering.",
        build:
          "Automate the entire build of a server from bare metal or template to production-ready.",
        nodes: [
          {
            id: "sa-config",
            label: "Configuration management",
            summary:
              "Ansible is the usual first step and the most transferable skill here.",
            topics: [
              "Ansible playbooks and inventories",
              "Roles and reusable content",
              "Idempotency and check mode",
              "Managing Windows with Ansible",
            ],
          },
          {
            id: "sa-cloud",
            label: "Cloud fundamentals",
            summary:
              "Most sysadmin roles now include some cloud, and it is the main growth direction.",
            topics: [
              "IaaS compute, storage and networking",
              "Cloud identity and access",
              "Lift-and-shift migration basics",
              "Cost visibility",
            ],
          },
          {
            id: "sa-m365",
            label: "Endpoint and productivity platforms",
            summary:
              "Microsoft 365 and endpoint management dominate day-to-day enterprise administration.",
            topics: [
              "Microsoft 365 administration",
              "Intune and endpoint policy",
              "Email security and routing",
              "Licence management",
            ],
          },
          {
            id: "sa-containers",
            label: "Containers",
            kind: "recommended",
            summary:
              "The bridge from systems administration to DevOps.",
            topics: [
              "Docker fundamentals",
              "Running containerised services",
              "Compose for small deployments",
              "When containers are not the answer",
            ],
          },
          {
            id: "sa-iac",
            label: "Infrastructure as code",
            kind: "recommended",
            summary:
              "The habit that turns this role into a DevOps career.",
            topics: [
              "Terraform basics",
              "Version control for infrastructure",
              "Peer review of changes",
              "Documentation generated from code",
            ],
          },
        ],
      },
      {
        id: "sa-s4",
        title: "Security and compliance",
        duration: "4-5 weeks",
        goal: "Systems administrators hold the keys, which makes them both the target and the control.",
        build:
          "Harden a server to a published benchmark and produce the evidence an auditor would want.",
        nodes: [
          {
            id: "sa-hardening",
            label: "System hardening",
            summary:
              "CIS benchmarks give you a defensible standard rather than an opinion.",
            topics: [
              "CIS benchmarks and scoring",
              "Service minimisation and firewall defaults",
              "Secure remote access",
              "Local account and credential hygiene",
            ],
          },
          {
            id: "sa-privileged",
            label: "Privileged access",
            summary:
              "Domain admin sprawl is the finding on nearly every enterprise audit.",
            topics: [
              "Least privilege and tiered admin",
              "Just-in-time elevation",
              "Service account management",
              "MFA everywhere",
            ],
          },
          {
            id: "sa-incident",
            label: "Incident handling",
            summary:
              "You will be first responder for anything that looks wrong on a server.",
            topics: [
              "Detecting compromise indicators",
              "Isolating a host safely",
              "Preserving evidence",
              "Escalation to security teams",
            ],
          },
          {
            id: "sa-dr",
            label: "Business continuity",
            summary:
              "The plan for when a room, a site, or a provider disappears.",
            topics: [
              "DR plan structure",
              "Failover testing",
              "Documentation that works under stress",
              "Communication during outages",
            ],
          },
          {
            id: "sa-audit",
            label: "Compliance and audit",
            kind: "recommended",
            summary:
              "Producing evidence is a real part of the job in regulated organisations.",
            topics: [
              "Access reviews",
              "Change records and approvals",
              "Log retention requirements",
              "Asset inventory accuracy",
            ],
          },
        ],
      },
      {
        id: "sa-s5",
        title: "Certification, interviews and career path",
        duration: "3-5 weeks",
        goal: "Certifications open the first door; automation skills decide the second one.",
        build:
          "A documented home lab with automation, plus a certification that matches your target employers.",
        nodes: [
          {
            id: "sa-certs",
            label: "Certifications",
            summary:
              "This is a field where entry-level certification genuinely gets interviews.",
            topics: [
              "CompTIA A+, Network+, Security+",
              "Linux certifications: LFCS, RHCSA",
              "Microsoft endpoint and Azure fundamentals",
              "Choosing based on target job ads",
            ],
          },
          {
            id: "sa-interview",
            label: "Technical interview",
            summary:
              "Scenario questions dominate: something is broken, walk me through it.",
            topics: [
              "Server won't boot: diagnostic order",
              "Users cannot log in: where to look",
              "Disk full at 3am: safe remediation",
              "Explaining a restore procedure",
            ],
          },
          {
            id: "sa-service",
            label: "Service management",
            summary:
              "ITIL vocabulary is expected in most enterprise environments.",
            topics: [
              "Incident, problem and change management",
              "Ticket hygiene and SLAs",
              "Knowledge base writing",
              "Working a service desk escalation",
            ],
          },
          {
            id: "sa-lab",
            label: "Home lab as portfolio",
            summary:
              "For this role a documented lab is accepted evidence in place of experience.",
            topics: [
              "Documented build with diagrams",
              "Automation scripts in a repo",
              "Monitoring and backup demonstrated",
              "Write-up of a problem you solved",
            ],
          },
          {
            id: "sa-progression",
            label: "Career progression",
            summary:
              "Where this role leads, and what to learn to get there deliberately.",
            topics: [
              "Path to DevOps and cloud engineering",
              "Path to security operations",
              "Path to infrastructure architecture",
              "Skills that transfer to each",
            ],
          },
        ],
      },
    ],
    tools: [
      "Linux",
      "Windows Server",
      "Active Directory",
      "PowerShell",
      "Ansible",
      "VMware / Proxmox",
      "Microsoft 365",
      "Veeam",
      "Zabbix",
    ],
    proofOfWork: [
      "A documented home lab with automated builds",
      "A tested restore from backup, with the runbook",
      "A hardening project measured against CIS benchmarks",
      "An entry-level certification matched to your target employers",
    ],
  },

  {
    slug: "database-administrator",
    title: "Database Administrator",
    shortTitle: "DBA",
    category: "Platform & Infra",
    mark: "DB",
    tagline:
      "Own the one thing a business genuinely cannot lose: keep it fast, correct, backed up and restorable.",
    market:
      "Managed cloud databases removed some routine work and increased demand for people who can actually diagnose and design. Finance, healthcare and any high-volume transactional business hire steadily.",
    timeline: "6-9 months part-time",
    entryBar: "Strong SQL and an interest in how storage engines work.",
    updated: "2026-08-31",
    prerequisites: [
      "SQL beyond basic SELECT",
      "Linux fundamentals",
      "Understanding of client/server applications",
    ],
    stages: [
      {
        id: "dba-s1",
        title: "How databases actually work",
        duration: "5-7 weeks",
        goal: "Internals knowledge is what separates a DBA from a developer who writes queries.",
        build:
          "Load a large dataset, then explain and demonstrate exactly how three queries are executed.",
        nodes: [
          {
            id: "dba-storage",
            label: "Storage engines",
            summary:
              "Pages, buffers and write-ahead logs explain nearly every performance behaviour.",
            topics: [
              "Pages, heaps and row storage",
              "Buffer pool and cache behaviour",
              "Write-ahead logging and checkpoints",
              "MVCC and version storage",
            ],
          },
          {
            id: "dba-indexes",
            label: "Indexes in depth",
            summary:
              "The single highest-value DBA skill, and the bulk of every interview.",
            topics: [
              "B-tree structure and traversal cost",
              "Composite index column order",
              "Covering indexes and index-only scans",
              "Partial, functional and specialised indexes",
            ],
          },
          {
            id: "dba-planner",
            label: "Query planner and statistics",
            summary:
              "Understanding why the planner chose badly is the core diagnostic skill.",
            topics: [
              "Reading EXPLAIN ANALYZE properly",
              "Statistics, histograms and cardinality estimates",
              "Join algorithms and when each is chosen",
              "Plan regressions and plan stability",
            ],
          },
          {
            id: "dba-transactions",
            label: "Transactions and concurrency",
            summary:
              "Isolation anomalies are subtle, expensive, and heavily interviewed.",
            topics: [
              "Isolation levels and their anomalies",
              "Locking, lock escalation and deadlocks",
              "Long-running transactions and bloat",
              "Optimistic vs pessimistic strategies",
            ],
          },
          {
            id: "dba-modelling",
            label: "Schema design",
            summary:
              "Most performance problems are design problems that arrived early.",
            topics: [
              "Normalisation and deliberate denormalisation",
              "Data types and storage efficiency",
              "Constraints and referential integrity",
              "Partitioning strategy",
            ],
          },
        ],
      },
      {
        id: "dba-s2",
        title: "Operations and availability",
        duration: "5-6 weeks",
        goal: "The database must survive hardware failure, human error and the upgrade you postponed.",
        build:
          "Configure replication with automatic failover, then fail over on purpose and measure the impact.",
        nodes: [
          {
            id: "dba-backup",
            label: "Backup and recovery",
            summary:
              "Point-in-time recovery is the skill you are actually hired for.",
            topics: [
              "Full, incremental and continuous archiving",
              "Point-in-time recovery procedure",
              "Restore testing and timing",
              "Backup encryption and retention",
            ],
          },
          {
            id: "dba-replication",
            label: "Replication and high availability",
            summary:
              "Synchronous versus asynchronous, and the data loss window each implies.",
            topics: [
              "Streaming and logical replication",
              "Synchronous commit trade-offs",
              "Automatic failover and split-brain",
              "Replica lag monitoring",
            ],
          },
          {
            id: "dba-upgrades",
            label: "Upgrades and migrations",
            summary:
              "Major version upgrades with minimal downtime are a signature DBA deliverable.",
            topics: [
              "Major version upgrade strategies",
              "Online schema change tooling",
              "Migration rehearsal and rollback",
              "Cross-engine migration pitfalls",
            ],
          },
          {
            id: "dba-monitoring",
            label: "Monitoring and alerting",
            summary:
              "Knowing which metrics predict trouble rather than merely describe it.",
            topics: [
              "Connections, locks, replication lag",
              "Slow query logging and analysis",
              "Bloat, vacuum and maintenance",
              "Capacity and growth forecasting",
            ],
          },
          {
            id: "dba-security",
            label: "Database security",
            summary:
              "The database holds the data an attacker wants. Controls here are heavily audited.",
            topics: [
              "Roles, privileges and least privilege",
              "Encryption at rest and in transit",
              "Row-level security and masking",
              "Audit logging",
            ],
          },
        ],
      },
      {
        id: "dba-s3",
        title: "Performance engineering",
        duration: "5-6 weeks",
        goal: "The work that gets noticed: making a system faster without buying more hardware.",
        build:
          "Take a slow production-like workload and cut its p99 latency in half, documenting every change.",
        nodes: [
          {
            id: "dba-tuning",
            label: "Query tuning",
            summary:
              "The daily work. Interviews hand you a plan and a clock.",
            topics: [
              "Identifying the worst queries by total time",
              "Rewriting for better plans",
              "Index design for a workload, not a query",
              "Avoiding premature index proliferation",
            ],
          },
          {
            id: "dba-config",
            label: "Server configuration",
            summary:
              "Defaults are conservative. Knowing which knobs matter is experience made visible.",
            topics: [
              "Memory: shared buffers, work memory",
              "Checkpoint and WAL tuning",
              "Autovacuum and maintenance settings",
              "Connection limits and pooling",
            ],
          },
          {
            id: "dba-scaling",
            label: "Scaling strategies",
            summary:
              "Read replicas, partitioning and sharding, in the order you should try them.",
            topics: [
              "Vertical scaling limits",
              "Read replicas and read/write splitting",
              "Table partitioning",
              "Sharding and its operational cost",
            ],
          },
          {
            id: "dba-pooling",
            label: "Connection management",
            summary:
              "Thousands of idle connections is a classic cause of mysterious outages.",
            topics: [
              "PgBouncer and pooling modes",
              "Pool sizing arithmetic",
              "Connection storms and retry behaviour",
              "Application-side pool configuration",
            ],
          },
          {
            id: "dba-nosql",
            label: "Non-relational stores",
            kind: "recommended",
            summary:
              "Most DBAs now own more than one engine, and are asked to justify each.",
            topics: [
              "MongoDB operations and index design",
              "Redis persistence and eviction",
              "Time-series and analytical stores",
              "Choosing the right engine for a workload",
            ],
            ref: { href: "/05-mongodb/02-indexing", label: "Ch — MongoDB Indexing" },
          },
        ],
      },
      {
        id: "dba-s4",
        title: "Cloud and automation",
        duration: "4-5 weeks",
        goal: "Managed services changed the job. The DBAs in demand are the ones who automate.",
        build:
          "Provision a replicated database entirely from code, with automated backup verification.",
        nodes: [
          {
            id: "dba-managed",
            label: "Managed database services",
            summary:
              "What the provider does for you, and precisely what it still does not.",
            topics: [
              "RDS, Aurora, Cloud SQL feature differences",
              "Maintenance windows and forced upgrades",
              "Serverless and autoscaling databases",
              "Limitations that surprise teams",
            ],
          },
          {
            id: "dba-iac",
            label: "Database as code",
            summary:
              "Provisioning, configuration and schema all under version control.",
            topics: [
              "Terraform for database resources",
              "Parameter groups as code",
              "Migration tooling in pipelines",
              "Environment parity",
            ],
          },
          {
            id: "dba-devops",
            label: "Working with delivery pipelines",
            summary:
              "The DBA who blocks deployments becomes a bottleneck; the one who automates gates does not.",
            topics: [
              "Migration review automation",
              "Backwards-compatible schema changes",
              "Blue/green database deploys",
              "Rollback strategy for data changes",
            ],
          },
          {
            id: "dba-observability",
            label: "Automated diagnostics",
            summary:
              "Turning your own expertise into checks that run without you.",
            topics: [
              "Automated slow query reporting",
              "Index usage and bloat reports",
              "Anomaly detection on key metrics",
              "Self-service dashboards for developers",
            ],
          },
          {
            id: "dba-cost",
            label: "Cost optimisation",
            kind: "recommended",
            summary:
              "Databases are usually the largest line on a cloud bill.",
            topics: [
              "Instance right-sizing from real metrics",
              "Storage tiering and archival",
              "Reserved capacity planning",
              "Query cost as an optimisation target",
            ],
          },
        ],
      },
      {
        id: "dba-s5",
        title: "Interview preparation",
        duration: "3-5 weeks",
        goal: "DBA interviews are practical: a plan, a lock, a failed restore, and how you reason.",
        build:
          "A written portfolio: a tuning case study, a failover test report, and a recovery runbook.",
        nodes: [
          {
            id: "dba-sql-round",
            label: "SQL round",
            summary:
              "Advanced SQL under time pressure, usually including window functions.",
            topics: [
              "Complex joins and subqueries",
              "Window functions and ranking",
              "Set operations and CTEs",
              "Writing queries that use an index",
            ],
          },
          {
            id: "dba-tuning-round",
            label: "Tuning round",
            summary:
              "Here is a slow query and its plan. Talk me through it.",
            topics: [
              "Reading a plan out loud",
              "Proposing index changes with reasons",
              "Estimating the improvement",
              "Knowing when the fix is in the application",
            ],
          },
          {
            id: "dba-scenario",
            label: "Scenario round",
            summary:
              "Recovery and incident scenarios dominate senior DBA interviews.",
            topics: [
              "Restore to a point before a bad deploy",
              "Replication broken, what now",
              "Disk nearly full on the primary",
              "Deadlocks appearing after a release",
            ],
          },
          {
            id: "dba-design",
            label: "Data architecture round",
            summary:
              "Design a schema and a scaling plan for a described workload.",
            topics: [
              "Schema for a given access pattern",
              "Partitioning and archival strategy",
              "Read scaling and caching",
              "Choosing the engine with justification",
            ],
          },
          {
            id: "dba-behavioural",
            label: "Behavioural round",
            summary:
              "You are being trusted with the company's data. Judgement stories matter.",
            topics: [
              "A recovery you performed under pressure",
              "A migration you ran with no downtime",
              "Refusing an unsafe change",
              "Teaching developers to write better queries",
            ],
          },
        ],
      },
    ],
    tools: [
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "MongoDB",
      "PgBouncer",
      "Terraform",
      "pgBadger",
      "Prometheus",
    ],
    proofOfWork: [
      "A tuning case study with EXPLAIN plans and latency numbers",
      "A tested point-in-time recovery with timings",
      "A failover drill report",
      "An automated database provisioning repository",
    ],
  },
];
