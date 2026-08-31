import type { RoadmapTrack } from "@/lib/roadmaps";

/**
 * Security tracks.
 *
 * Offensive security content here is career preparation: the same material
 * taught by SANS, OSCP and every university security module. It describes what
 * the job involves and what interviews test, and assumes testing happens on
 * systems you are authorised to test.
 */
export const SECURITY_TRACKS: RoadmapTrack[] = [
  {
    slug: "cybersecurity-engineer",
    title: "Cybersecurity Engineer",
    shortTitle: "Cybersecurity",
    category: "Security",
    mark: "CS",
    tagline:
      "Build and run the defences: identity, network, endpoint and detection, wired together so they hold.",
    market:
      "Security postings grew 124% year on year, with cybersecurity engineers alone accounting for around 20,000 new posts. Demand consistently exceeds the supply of people who can actually build controls rather than only audit them.",
    timeline: "8-12 months part-time",
    entryBar: "IT, networking or development background. Rarely a true first job.",
    updated: "2026-08-31",
    prerequisites: [
      "Networking fundamentals: TCP/IP, DNS, TLS",
      "Linux and Windows administration basics",
      "One scripting language, usually Python",
    ],
    stages: [
      {
        id: "cse-s1",
        title: "Security foundations",
        duration: "5-7 weeks",
        goal: "The models and vocabulary every security conversation is built on.",
        build:
          "Threat model a real application and produce a prioritised control list with justifications.",
        nodes: [
          {
            id: "cse-principles",
            label: "Core principles",
            summary:
              "CIA triad, defence in depth and least privilege — the framing for every design answer.",
            topics: [
              "Confidentiality, integrity, availability",
              "Defence in depth and blast radius",
              "Least privilege and separation of duties",
              "Risk = likelihood × impact, applied",
            ],
          },
          {
            id: "cse-crypto",
            label: "Applied cryptography",
            summary:
              "You will not invent cryptography, but you must know what each primitive guarantees.",
            topics: [
              "Symmetric vs asymmetric, and where each fits",
              "Hashing, salting and password storage",
              "TLS handshake and certificate validation",
              "Key management and rotation",
            ],
          },
          {
            id: "cse-threatmodel",
            label: "Threat modelling",
            summary:
              "STRIDE and attack trees. A structured method impresses far more than a list of tools.",
            topics: [
              "STRIDE and data flow diagrams",
              "Trust boundaries and assets",
              "MITRE ATT&CK as a shared language",
              "Prioritising by realistic threat",
            ],
          },
          {
            id: "cse-network-sec",
            label: "Network security",
            summary:
              "Segmentation is the control that most limits an intruder's movement.",
            topics: [
              "Firewalls, segmentation and microsegmentation",
              "IDS/IPS and traffic inspection",
              "VPN and zero trust network access",
              "DNS security and egress filtering",
            ],
          },
          {
            id: "cse-identity",
            label: "Identity as the perimeter",
            summary:
              "Most breaches start with credentials, which makes identity the primary control plane.",
            topics: [
              "Authentication factors and MFA strength",
              "SSO, SAML and OIDC",
              "Privileged access management",
              "Joiners, movers and leavers process",
            ],
          },
        ],
      },
      {
        id: "cse-s2",
        title: "Securing systems",
        duration: "6-7 weeks",
        goal: "Move from principles to configured, tested controls on real infrastructure.",
        build:
          "Harden a small environment end to end and produce evidence against a recognised benchmark.",
        nodes: [
          {
            id: "cse-hardening",
            label: "System hardening",
            summary:
              "Benchmarks turn opinion into a defensible, auditable standard.",
            topics: [
              "CIS benchmarks for Linux and Windows",
              "Service minimisation and secure defaults",
              "Host firewalls and local policy",
              "Configuration drift detection",
            ],
          },
          {
            id: "cse-endpoint",
            label: "Endpoint security",
            summary:
              "EDR is where most real detections land, and where most interviews go next.",
            topics: [
              "EDR capabilities and tuning",
              "Application allow-listing",
              "Disk encryption and device policy",
              "Patch management at scale",
            ],
          },
          {
            id: "cse-cloud",
            label: "Cloud security",
            summary:
              "Misconfiguration, not exploitation, causes most cloud incidents.",
            topics: [
              "IAM policy design and privilege review",
              "Storage exposure and public access blocks",
              "Security groups and private networking",
              "Cloud security posture management",
            ],
          },
          {
            id: "cse-vuln",
            label: "Vulnerability management",
            summary:
              "Scanning is easy; prioritising and actually closing findings is the job.",
            topics: [
              "Scanning cadence and coverage",
              "CVSS, EPSS and real-world prioritisation",
              "Patch SLAs and exceptions",
              "Measuring remediation over time",
            ],
          },
          {
            id: "cse-email",
            label: "Email and human-layer security",
            summary:
              "Phishing remains the most common initial access vector by a wide margin.",
            topics: [
              "SPF, DKIM and DMARC",
              "Phishing simulation programmes",
              "Business email compromise controls",
              "Security awareness that changes behaviour",
            ],
          },
        ],
      },
      {
        id: "cse-s3",
        title: "Detection and response",
        duration: "5-6 weeks",
        goal: "Assume prevention fails. Detection quality decides how bad the incident becomes.",
        build:
          "Build detections for five ATT&CK techniques, test them with simulated activity, and tune out the noise.",
        nodes: [
          {
            id: "cse-logging",
            label: "Logging and telemetry",
            summary:
              "You can only detect what you collect. Coverage gaps are the usual root cause.",
            topics: [
              "Log sources and coverage mapping",
              "Windows event and Sysmon telemetry",
              "Cloud audit logs",
              "Retention, cost and legal requirements",
            ],
          },
          {
            id: "cse-siem",
            label: "SIEM and detection engineering",
            summary:
              "Writing detections is a software discipline now, with tests and version control.",
            topics: [
              "Detection as code and rule repositories",
              "Sigma rules and portability",
              "Tuning for false positives",
              "Detection coverage against ATT&CK",
            ],
          },
          {
            id: "cse-ir",
            label: "Incident response",
            summary:
              "The lifecycle, and the decisions that get made badly under pressure.",
            topics: [
              "Preparation, detection, containment, eradication, recovery",
              "Containment trade-offs and evidence preservation",
              "Communication and legal escalation",
              "Lessons learned that change controls",
            ],
          },
          {
            id: "cse-forensics",
            label: "Digital forensics basics",
            kind: "recommended",
            summary:
              "Enough to answer 'what did they do' rather than only 'they got in'.",
            topics: [
              "Disk and memory acquisition",
              "Timeline construction",
              "Chain of custody",
              "Common persistence artefacts",
            ],
          },
          {
            id: "cse-threatintel",
            label: "Threat intelligence",
            summary:
              "Intelligence is only useful when it changes a control or a detection.",
            topics: [
              "IOCs versus behavioural indicators",
              "Threat actor profiling",
              "Intelligence feeds and their quality",
              "Turning intel into detections",
            ],
          },
        ],
      },
      {
        id: "cse-s4",
        title: "Automation and architecture",
        duration: "4-6 weeks",
        goal: "Security that depends on manual review does not scale past a small company.",
        build:
          "Automate a control end to end: detect a misconfiguration, alert, and remediate it without a human.",
        nodes: [
          {
            id: "cse-soar",
            label: "Automation and SOAR",
            summary:
              "Automating the repetitive third of alert handling frees the analysts who matter.",
            topics: [
              "Playbook design and safe automation",
              "Enrichment and triage automation",
              "Auto-containment with guard rails",
              "Measuring analyst time saved",
            ],
          },
          {
            id: "cse-policy",
            label: "Policy as code",
            summary:
              "Preventing a misconfiguration beats detecting it after deployment.",
            topics: [
              "Guardrails in cloud accounts",
              "OPA policies in pipelines",
              "Preventive vs detective control choice",
              "Exception handling that expires",
            ],
          },
          {
            id: "cse-devsecops",
            label: "Security in the pipeline",
            summary:
              "Shift-left works only when the findings are actionable and fast.",
            topics: [
              "SAST, SCA and secret scanning",
              "Container and IaC scanning",
              "Triage and false positive management",
              "Breaking the build responsibly",
            ],
          },
          {
            id: "cse-zerotrust",
            label: "Zero trust architecture",
            summary:
              "Widely misused as a term. Being precise about it is a senior signal.",
            topics: [
              "Identity-aware access",
              "Device posture and conditional access",
              "Removing implicit network trust",
              "Realistic migration phasing",
            ],
          },
          {
            id: "cse-grc",
            label: "Compliance and risk",
            kind: "recommended",
            summary:
              "Frameworks fund security work. Speaking their language gets budget approved.",
            topics: [
              "NIST CSF and ISO 27001 structure",
              "SOC 2 controls and evidence",
              "Risk registers and acceptance",
              "Vendor and third-party risk",
            ],
          },
        ],
      },
      {
        id: "cse-s5",
        title: "Certification and interviews",
        duration: "4-6 weeks",
        goal: "Security hiring uses certifications as a filter and scenarios as the real test.",
        build:
          "A home lab with an attack simulation, the detections that caught it, and a written report.",
        nodes: [
          {
            id: "cse-certs",
            label: "Certifications",
            summary:
              "Security+ opens doors early; CISSP unlocks senior and management roles.",
            topics: [
              "CompTIA Security+ as the baseline",
              "CISSP for senior and management roles",
              "Cloud security certifications",
              "Choosing based on target job ads",
            ],
          },
          {
            id: "cse-scenario",
            label: "Scenario interview",
            summary:
              "Given an alert or an incident, walk through your reasoning and decisions.",
            topics: [
              "Triaging a suspicious login",
              "Containing a compromised host",
              "Deciding when to take a system offline",
              "Communicating risk to executives",
            ],
          },
          {
            id: "cse-technical",
            label: "Technical round",
            summary:
              "Deep questions on TLS, authentication and how specific attacks actually work.",
            topics: [
              "Explain the TLS handshake",
              "How does Kerberoasting work",
              "OWASP Top 10 mechanics",
              "Detecting lateral movement",
            ],
          },
          {
            id: "cse-lab",
            label: "Home lab as evidence",
            summary:
              "Security hiring respects demonstrated hands-on work more than most fields.",
            topics: [
              "Detection lab with attack simulation",
              "Published detection rules",
              "CTF participation",
              "Write-ups of what you learned",
            ],
          },
          {
            id: "cse-behavioural",
            label: "Behavioural round",
            summary:
              "Security is a constant negotiation with delivery pressure.",
            topics: [
              "Blocking a release for a security issue",
              "Being overruled and what you did",
              "Explaining risk without scaremongering",
              "Handling an incident calmly",
            ],
          },
        ],
      },
    ],
    tools: [
      "MITRE ATT&CK",
      "Splunk / Elastic",
      "Sysmon",
      "CrowdStrike / EDR",
      "Nessus",
      "OPA",
      "Python",
      "Wazuh",
    ],
    proofOfWork: [
      "A detection lab with published rules and test results",
      "A threat model for a real application with prioritised controls",
      "A hardening project measured against CIS benchmarks",
      "An automated remediation pipeline for a cloud misconfiguration",
    ],
  },

  {
    slug: "security-analyst",
    title: "Security Analyst (SOC)",
    shortTitle: "SOC Analyst",
    category: "Security",
    mark: "SO",
    tagline:
      "Watch, triage and escalate: the front line that decides whether an alert becomes an incident.",
    market:
      "One of the few genuine entry points into security, with unemployment around 2.7%. High volume of openings, and a clear progression into detection engineering or incident response.",
    timeline: "4-7 months part-time",
    entryBar: "IT support or networking background is enough. The most accessible security role.",
    updated: "2026-08-31",
    prerequisites: [
      "Networking basics: ports, protocols, DNS",
      "Windows and Linux familiarity",
      "Attention to detail and clear writing",
    ],
    stages: [
      {
        id: "soc-s1",
        title: "Foundations",
        duration: "4-5 weeks",
        goal: "Understand what you are looking at before learning the console that displays it.",
        build:
          "Set up a small lab with a SIEM, ingest logs from two hosts, and write your first five queries.",
        nodes: [
          {
            id: "soc-networking",
            label: "Networking for analysts",
            summary:
              "Most alerts are network events. Reading them requires protocol knowledge.",
            topics: [
              "TCP/IP, common ports and services",
              "DNS queries as an investigation signal",
              "HTTP and TLS metadata",
              "Reading a packet capture",
            ],
          },
          {
            id: "soc-os",
            label: "Operating system internals",
            summary:
              "Knowing what normal looks like is what makes abnormal visible.",
            topics: [
              "Windows processes, services and registry",
              "Linux processes, cron and systemd",
              "Authentication logs on both",
              "Normal versus suspicious parent-child chains",
            ],
          },
          {
            id: "soc-attacks",
            label: "How attacks work",
            summary:
              "The kill chain gives structure to what would otherwise be a list of alerts.",
            topics: [
              "Cyber kill chain and ATT&CK tactics",
              "Phishing and initial access",
              "Privilege escalation and persistence",
              "Lateral movement and exfiltration",
            ],
          },
          {
            id: "soc-logs",
            label: "Log sources",
            summary:
              "Knowing which log answers which question is the core analyst skill.",
            topics: [
              "Windows event ids that matter",
              "Sysmon and enhanced telemetry",
              "Firewall, proxy and DNS logs",
              "Cloud audit trails",
            ],
          },
          {
            id: "soc-tools",
            label: "SOC tooling",
            summary:
              "SIEM, EDR and ticketing — the three windows an analyst lives in.",
            topics: [
              "SIEM search syntax and pivoting",
              "EDR console investigation",
              "Ticketing and case management",
              "Threat intel lookups",
            ],
          },
        ],
      },
      {
        id: "soc-s2",
        title: "Triage and investigation",
        duration: "5-6 weeks",
        goal: "The daily work: decide fast and correctly whether an alert matters.",
        build:
          "Work through fifty simulated alerts and write a triage decision with evidence for each.",
        nodes: [
          {
            id: "soc-triage",
            label: "Alert triage",
            summary:
              "Speed with accuracy. A repeatable method is what interviews assess.",
            topics: [
              "Triage methodology and time-boxing",
              "True positive, false positive, benign true positive",
              "Severity assignment",
              "When to escalate immediately",
            ],
          },
          {
            id: "soc-investigation",
            label: "Investigation technique",
            summary:
              "Pivoting through data to build a timeline is the skill that gets you promoted.",
            topics: [
              "Pivoting on user, host, IP and hash",
              "Building an incident timeline",
              "Scoping: how far did it spread",
              "Knowing when you have enough",
            ],
          },
          {
            id: "soc-phishing",
            label: "Phishing analysis",
            summary:
              "The highest-volume alert type in almost every SOC.",
            topics: [
              "Header analysis and spoofing indicators",
              "Safe URL and attachment detonation",
              "Identifying affected recipients",
              "Takedown and containment actions",
            ],
          },
          {
            id: "soc-malware",
            label: "Malware triage",
            summary:
              "Basic static and dynamic analysis, without becoming a reverse engineer.",
            topics: [
              "Hash reputation and sandboxing",
              "Static indicators and strings",
              "Behavioural analysis in a sandbox",
              "When to escalate to specialists",
            ],
          },
          {
            id: "soc-writing",
            label: "Documentation and handover",
            summary:
              "An investigation nobody can follow is an investigation that gets repeated.",
            topics: [
              "Clear case notes with evidence",
              "Shift handover discipline",
              "Escalation write-ups",
              "Reporting to non-technical stakeholders",
            ],
          },
        ],
      },
      {
        id: "soc-s3",
        title: "Detection and hunting",
        duration: "4-6 weeks",
        goal: "Move from reacting to alerts to finding what the alerts missed.",
        build:
          "Run three threat hunts with written hypotheses, and turn one finding into a permanent detection.",
        nodes: [
          {
            id: "soc-hunting",
            label: "Threat hunting",
            summary:
              "Hypothesis-driven search. The step that separates analyst tiers.",
            topics: [
              "Forming a testable hypothesis",
              "Hunting with ATT&CK techniques",
              "Baselining normal behaviour",
              "Documenting hunts that found nothing",
            ],
          },
          {
            id: "soc-detection",
            label: "Writing detections",
            summary:
              "Turning a hunt into a rule is how a SOC gets better over time.",
            topics: [
              "Sigma rule structure",
              "Precision versus recall trade-offs",
              "Testing rules with simulated activity",
              "Documenting rule intent",
            ],
          },
          {
            id: "soc-tuning",
            label: "Alert tuning",
            summary:
              "Alert fatigue causes missed incidents. Tuning is a safety activity.",
            topics: [
              "Measuring false positive rates",
              "Suppression versus fixing the rule",
              "Allow-listing safely",
              "Reviewing rule performance regularly",
            ],
          },
          {
            id: "soc-intel",
            label: "Using threat intelligence",
            summary:
              "Applying intel to your own environment rather than collecting feeds.",
            topics: [
              "IOC sweeps across the estate",
              "Actor TTPs and relevance filtering",
              "Retrospective searching",
              "Intel-driven hunt prioritisation",
            ],
          },
          {
            id: "soc-purple",
            label: "Purple teaming",
            kind: "recommended",
            summary:
              "Testing your detections against real technique execution.",
            topics: [
              "Atomic Red Team execution",
              "Detection gap identification",
              "Working with offensive teams",
              "Coverage reporting",
            ],
          },
        ],
      },
      {
        id: "soc-s4",
        title: "Incident response",
        duration: "3-5 weeks",
        goal: "When triage becomes an incident, the analyst is often the first responder.",
        build:
          "Run a tabletop exercise for a ransomware scenario and write the after-action report.",
        nodes: [
          {
            id: "soc-ir-process",
            label: "The response process",
            summary:
              "Structure prevents panic. This is the most common SOC interview scenario.",
            topics: [
              "Detection through recovery lifecycle",
              "Roles during an incident",
              "Containment decisions and their cost",
              "Evidence preservation basics",
            ],
          },
          {
            id: "soc-containment",
            label: "Containment actions",
            summary:
              "Isolating a host is easy; deciding when to is the judgement being tested.",
            topics: [
              "Host isolation and account disable",
              "Blocking at network and email layers",
              "Balancing business disruption",
              "Avoiding tipping off the attacker",
            ],
          },
          {
            id: "soc-ransomware",
            label: "Ransomware and major incidents",
            summary:
              "The scenario every organisation rehearses and every interview mentions.",
            topics: [
              "Early indicators before encryption",
              "Backup integrity verification",
              "Communication and legal obligations",
              "Recovery sequencing",
            ],
          },
          {
            id: "soc-postincident",
            label: "After-action review",
            summary:
              "Closing the loop so the same incident does not recur.",
            topics: [
              "Timeline and root cause",
              "Detection gaps identified",
              "Control improvements",
              "Metrics: time to detect and respond",
            ],
          },
          {
            id: "soc-metrics",
            label: "SOC metrics",
            kind: "recommended",
            summary:
              "How the team is measured, and which metrics create bad incentives.",
            topics: [
              "MTTD and MTTR",
              "Alert volume and closure rates",
              "Detection coverage",
              "Metrics that encourage rushing",
            ],
          },
        ],
      },
      {
        id: "soc-s5",
        title: "Certification and interviews",
        duration: "3-4 weeks",
        goal: "SOC hiring uses practical labs and scenario questions more than theory.",
        build:
          "A portfolio of investigation write-ups and published detection rules.",
        nodes: [
          {
            id: "soc-certs",
            label: "Certifications",
            summary:
              "Security+ and a hands-on blue team certification is a strong entry combination.",
            topics: [
              "CompTIA Security+ and CySA+",
              "Blue Team Level 1 and similar practical certs",
              "Vendor SIEM certifications",
              "Matching certs to local job ads",
            ],
          },
          {
            id: "soc-practical",
            label: "Practical labs",
            summary:
              "Hands-on platforms are the accepted way to prove ability without experience.",
            topics: [
              "TryHackMe and Blue Team labs",
              "LetsDefend style alert handling",
              "CTF blue team challenges",
              "Building your own detection lab",
            ],
          },
          {
            id: "soc-interview",
            label: "Interview scenarios",
            summary:
              "Expect to be handed an alert and asked what you would do next.",
            topics: [
              "Walk through a suspicious login alert",
              "Investigate unusual outbound traffic",
              "Explain how you would scope a compromise",
              "Describe a detection you wrote",
            ],
          },
          {
            id: "soc-technical",
            label: "Technical questions",
            summary:
              "Fundamentals get tested directly: ports, protocols, and attack mechanics.",
            topics: [
              "Common ports and what runs on them",
              "How DNS tunnelling looks in logs",
              "Windows event ids for authentication",
              "Difference between IDS and IPS",
            ],
          },
          {
            id: "soc-progression",
            label: "Career progression",
            summary:
              "SOC is a starting point. Know where you are heading and prepare for it early.",
            topics: [
              "Path to detection engineering",
              "Path to incident response and forensics",
              "Path to threat intelligence",
              "Path to red team",
            ],
          },
        ],
      },
    ],
    tools: [
      "Splunk / Elastic / Sentinel",
      "Sysmon",
      "Wireshark",
      "MITRE ATT&CK",
      "Sigma",
      "Atomic Red Team",
      "VirusTotal",
      "TheHive",
    ],
    proofOfWork: [
      "A set of published investigation write-ups",
      "Detection rules you wrote and tested",
      "A documented threat hunt with hypothesis and outcome",
      "A practical blue team certification",
    ],
  },

  {
    slug: "penetration-tester",
    title: "Penetration Tester",
    shortTitle: "Pentester",
    category: "Security",
    mark: "PT",
    tagline:
      "Find the holes before someone else does, on systems you are authorised to test, and write it up so it gets fixed.",
    market:
      "Consultancies, in-house red teams and bug bounty. Certification-driven hiring, and the report writing matters as much as the exploitation.",
    timeline: "9-14 months part-time",
    entryBar: "Strong systems and networking fundamentals. Not a first technology job.",
    updated: "2026-08-31",
    prerequisites: [
      "Networking and Linux at a confident level",
      "Scripting in Python or Bash",
      "A legal lab environment: your own VMs or a licensed platform",
    ],
    stages: [
      {
        id: "pt-s1",
        title: "Scope, law and method",
        duration: "3-4 weeks",
        goal: "The part that makes this a profession rather than a crime: authorisation and process.",
        build:
          "Write a rules-of-engagement document and a test plan for a lab target you own.",
        nodes: [
          {
            id: "pt-legal",
            label: "Authorisation and law",
            summary:
              "Testing without written authorisation is a criminal offence in most jurisdictions.",
            topics: [
              "Rules of engagement and scope documents",
              "Computer misuse legislation basics",
              "Safe harbour in bug bounty programmes",
              "Handling out-of-scope discoveries",
            ],
          },
          {
            id: "pt-methodology",
            label: "Testing methodology",
            summary:
              "Structured coverage beats ad-hoc poking, and clients pay for the structure.",
            topics: [
              "PTES and OWASP testing guide",
              "Black, grey and white box engagements",
              "Time-boxing and coverage decisions",
              "Evidence collection as you go",
            ],
          },
          {
            id: "pt-lab",
            label: "Building a lab",
            summary:
              "You need somewhere legal to practise. This is the foundation of the whole track.",
            topics: [
              "Isolated virtual lab setup",
              "Vulnerable-by-design targets",
              "Snapshots and safe resets",
              "Licensed practice platforms",
            ],
          },
          {
            id: "pt-recon",
            label: "Reconnaissance",
            summary:
              "Most of a test is enumeration. Rushing this is the classic beginner failure.",
            topics: [
              "Passive information gathering",
              "Port and service enumeration",
              "Service version and technology fingerprinting",
              "Attack surface mapping",
            ],
          },
          {
            id: "pt-reporting-intro",
            label: "Reporting fundamentals",
            summary:
              "The deliverable is the report. Interviewers ask to see one.",
            topics: [
              "Finding structure: impact, evidence, remediation",
              "Risk rating consistently",
              "Executive summary writing",
              "Retest and verification",
            ],
          },
        ],
      },
      {
        id: "pt-s2",
        title: "Web application testing",
        duration: "6-8 weeks",
        goal: "The majority of commercial penetration testing work is web applications.",
        build:
          "Test a deliberately vulnerable application end to end and produce a full professional report.",
        nodes: [
          {
            id: "pt-owasp",
            label: "OWASP Top 10 in depth",
            summary:
              "Not the list — the mechanics, the variations, and how each is verified.",
            topics: [
              "Injection: SQL, command, template",
              "Broken access control and IDOR",
              "Authentication and session flaws",
              "SSRF and its cloud impact",
            ],
          },
          {
            id: "pt-auth-testing",
            label: "Authentication and authorisation testing",
            summary:
              "Access control flaws are the most commonly found and most impactful category.",
            topics: [
              "Horizontal and vertical privilege escalation",
              "JWT and session token weaknesses",
              "OAuth and SSO misconfiguration",
              "Multi-tenancy isolation testing",
            ],
          },
          {
            id: "pt-clientside",
            label: "Client-side attacks",
            summary:
              "XSS remains ubiquitous, and modern variants require modern understanding.",
            topics: [
              "Reflected, stored and DOM XSS",
              "CSRF and SameSite behaviour",
              "Content Security Policy bypasses",
              "Prototype pollution",
            ],
          },
          {
            id: "pt-api",
            label: "API testing",
            summary:
              "APIs now carry most application logic, and are frequently under-tested.",
            topics: [
              "REST and GraphQL specific issues",
              "Mass assignment and excessive data exposure",
              "Rate limiting and business logic abuse",
              "API authentication weaknesses",
            ],
          },
          {
            id: "pt-tools-web",
            label: "Web testing tooling",
            summary:
              "Burp Suite fluency is effectively a job requirement.",
            topics: [
              "Burp Suite proxy, repeater, intruder",
              "Extensions and custom automation",
              "Automated scanning and its limits",
              "Manual verification of every finding",
            ],
          },
        ],
      },
      {
        id: "pt-s3",
        title: "Network and infrastructure testing",
        duration: "6-8 weeks",
        goal: "Internal network testing, especially Active Directory, is core consultancy work.",
        build:
          "Compromise a lab Active Directory domain from an unauthenticated foothold and document every step.",
        nodes: [
          {
            id: "pt-network",
            label: "Network exploitation",
            summary:
              "Service enumeration to initial access on an internal network.",
            topics: [
              "Service enumeration and default credentials",
              "Known vulnerability exploitation",
              "Relay and man-in-the-middle attacks",
              "Pivoting and tunnelling",
            ],
          },
          {
            id: "pt-ad",
            label: "Active Directory attacks",
            summary:
              "The single most valuable infrastructure testing skill in enterprise engagements.",
            topics: [
              "Enumeration with BloodHound",
              "Kerberoasting and AS-REP roasting",
              "Delegation abuse",
              "Credential harvesting and lateral movement",
            ],
          },
          {
            id: "pt-privesc",
            label: "Privilege escalation",
            summary:
              "Local escalation on both platforms, methodically rather than by script.",
            topics: [
              "Windows privilege escalation paths",
              "Linux escalation: SUID, capabilities, cron",
              "Misconfiguration over exploitation",
              "Automated enumeration then manual verification",
            ],
          },
          {
            id: "pt-cloud",
            label: "Cloud penetration testing",
            summary:
              "Different rules, different attack paths, and provider authorisation requirements.",
            topics: [
              "IAM privilege escalation paths",
              "Metadata service and SSRF chains",
              "Storage and secret exposure",
              "Provider testing policies",
            ],
          },
          {
            id: "pt-evasion",
            label: "Working with defences",
            kind: "recommended",
            summary:
              "Understanding detection is what makes a test realistic and a report useful.",
            topics: [
              "How EDR detects common techniques",
              "Testing detection coverage collaboratively",
              "Purple team engagement style",
              "Reporting detection gaps as findings",
            ],
          },
        ],
      },
      {
        id: "pt-s4",
        title: "Reporting and client work",
        duration: "3-4 weeks",
        goal: "The technical work is half the job. The report is what the client actually buys.",
        build:
          "Produce two full engagement reports, each with an executive summary and prioritised remediation.",
        nodes: [
          {
            id: "pt-report",
            label: "Professional reporting",
            summary:
              "Reports are the interview artefact for this role. Bring a sanitised one.",
            topics: [
              "Executive summary for non-technical readers",
              "Reproducible steps with evidence",
              "Business impact over CVSS alone",
              "Actionable remediation advice",
            ],
          },
          {
            id: "pt-risk",
            label: "Risk rating",
            summary:
              "Consistent, defensible severity is what separates professional reports from tool output.",
            topics: [
              "CVSS scoring and its limitations",
              "Contextual business impact",
              "Chaining low findings into high impact",
              "Defending a rating to a client",
            ],
          },
          {
            id: "pt-client",
            label: "Client communication",
            summary:
              "Consultancy is a people business. Debriefs and difficult conversations are routine.",
            topics: [
              "Scoping calls and expectation setting",
              "Reporting critical findings mid-test",
              "Debrief presentations",
              "Handling defensive stakeholders",
            ],
          },
          {
            id: "pt-automation",
            label: "Tooling and automation",
            summary:
              "Writing your own tooling is what distinguishes senior testers.",
            topics: [
              "Python for custom exploitation",
              "Automating repetitive enumeration",
              "Modifying public proof-of-concept code safely",
              "Maintaining a personal toolkit",
            ],
          },
          {
            id: "pt-bugbounty",
            label: "Bug bounty",
            kind: "recommended",
            summary:
              "Legal, public evidence of ability, and a recognised route into the industry.",
            topics: [
              "Programme selection and scope reading",
              "Report quality and duplicate avoidance",
              "Building a public profile",
              "Disclosure etiquette",
            ],
          },
        ],
      },
      {
        id: "pt-s5",
        title: "Certification and interviews",
        duration: "6-10 weeks",
        goal: "This field hires on practical certification and demonstrated work more than any other.",
        build:
          "Pass a practical certification and publish sanitised write-ups of lab machines you compromised.",
        nodes: [
          {
            id: "pt-oscp",
            label: "Practical certifications",
            summary:
              "OSCP remains the recognised bar. Practical exams, not multiple choice.",
            topics: [
              "OSCP structure and preparation",
              "CREST and regional equivalents",
              "Web-specific certifications",
              "Exam strategy and time management",
            ],
          },
          {
            id: "pt-labs",
            label: "Lab practice",
            summary:
              "Volume matters. Consistent lab work is the only reliable preparation.",
            topics: [
              "Hack The Box and similar platforms",
              "Keeping structured notes",
              "Methodology refinement",
              "Learning from write-ups after attempting",
            ],
          },
          {
            id: "pt-interview",
            label: "Technical interview",
            summary:
              "Expect to explain an attack chain in detail and possibly perform one live.",
            topics: [
              "Walk through a full compromise chain",
              "Explain a vulnerability class deeply",
              "Live lab exercise",
              "Discussing a finding you are proud of",
            ],
          },
          {
            id: "pt-ethics",
            label: "Ethics and professionalism",
            summary:
              "Trust is the product. Interviews probe judgement more than tooling.",
            topics: [
              "Handling accidental scope breaches",
              "Sensitive data discovered during testing",
              "Responsible disclosure decisions",
              "Client confidentiality",
            ],
          },
          {
            id: "pt-portfolio",
            label: "Portfolio",
            summary:
              "Write-ups, tools and bounty history are the accepted evidence.",
            topics: [
              "Sanitised sample report",
              "Public lab write-ups",
              "Open-source security tooling",
              "Disclosed vulnerabilities or CVEs",
            ],
          },
        ],
      },
    ],
    tools: [
      "Burp Suite",
      "Nmap",
      "BloodHound",
      "Metasploit",
      "Impacket",
      "Python",
      "Kali Linux",
      "Hack The Box",
    ],
    proofOfWork: [
      "A sanitised professional penetration test report",
      "A practical certification such as OSCP",
      "Public lab write-ups showing methodology",
      "Disclosed vulnerabilities or published tooling",
    ],
  },

  {
    slug: "application-security-engineer",
    title: "Application Security Engineer",
    shortTitle: "AppSec",
    category: "Security",
    mark: "AP",
    tagline:
      "Stop vulnerabilities being written, not just found: reviews, tooling and secure defaults inside the development process.",
    market:
      "Sits between engineering and security, and is paid accordingly. Companies shipping their own software hire for it as soon as compliance or customers demand a secure development lifecycle.",
    timeline: "7-10 months part-time",
    entryBar: "Real development experience. This role reads and writes code daily.",
    updated: "2026-08-31",
    prerequisites: [
      "Professional software development experience",
      "Comfort reading code in more than one language",
      "Understanding of web protocols and authentication",
    ],
    stages: [
      {
        id: "as-s1",
        title: "Vulnerability classes in depth",
        duration: "5-7 weeks",
        goal: "Know the mechanics well enough to spot them in code review, not just in a scanner report.",
        build:
          "Write a deliberately vulnerable application demonstrating ten classes, plus the fixed version.",
        nodes: [
          {
            id: "as-injection",
            label: "Injection and parsing flaws",
            summary:
              "Still the highest-impact class, and the one candidates explain least precisely.",
            topics: [
              "SQL injection and parameterisation",
              "Command and template injection",
              "Deserialization vulnerabilities",
              "XXE and parser configuration",
            ],
          },
          {
            id: "as-accesscontrol",
            label: "Access control",
            summary:
              "The most common serious finding in real applications.",
            topics: [
              "IDOR and object-level authorisation",
              "Function-level access control",
              "Multi-tenancy isolation",
              "Centralised authorisation design",
            ],
          },
          {
            id: "as-authn",
            label: "Authentication and session",
            summary:
              "Getting login right is harder than it looks, and everyone builds it.",
            topics: [
              "Password storage and credential stuffing defence",
              "Session fixation and rotation",
              "JWT pitfalls: algorithm confusion, expiry",
              "OAuth and OIDC misconfiguration",
            ],
          },
          {
            id: "as-clientside",
            label: "Browser security model",
            summary:
              "Same-origin policy, CSP and cookies — the controls that contain client-side flaws.",
            topics: [
              "Same-origin policy and CORS",
              "XSS variants and contextual encoding",
              "Content Security Policy design",
              "Cookie attributes and isolation",
            ],
          },
          {
            id: "as-logic",
            label: "Business logic flaws",
            summary:
              "Scanners never find these, which is precisely why the role exists.",
            topics: [
              "Race conditions and TOCTOU",
              "Workflow bypass and state manipulation",
              "Price and quantity manipulation",
              "Rate limiting and abuse cases",
            ],
          },
        ],
      },
      {
        id: "as-s2",
        title: "Secure design",
        duration: "5-6 weeks",
        goal: "Preventing whole classes of bug through design beats finding them one at a time.",
        build:
          "Threat model a real service and implement three of the resulting controls yourself.",
        nodes: [
          {
            id: "as-threatmodel",
            label: "Threat modelling",
            summary:
              "The highest-leverage AppSec activity, and a standard interview exercise.",
            topics: [
              "STRIDE against a data flow diagram",
              "Trust boundaries and assumptions",
              "Abuse cases alongside user stories",
              "Recording decisions and accepted risk",
            ],
          },
          {
            id: "as-crypto",
            label: "Cryptography in applications",
            summary:
              "Choosing and using primitives correctly, and spotting misuse in review.",
            topics: [
              "Encryption at rest and field-level encryption",
              "Key management and rotation",
              "Signing, verification and replay protection",
              "Common misuse patterns",
            ],
          },
          {
            id: "as-secrets",
            label: "Secrets and configuration",
            summary:
              "Hardcoded credentials remain one of the most common findings in real repositories.",
            topics: [
              "Secret management services",
              "Preventing secrets in version control",
              "Rotation without downtime",
              "Environment separation",
            ],
          },
          {
            id: "as-defaults",
            label: "Secure defaults and frameworks",
            summary:
              "Making the safe path the easy path is how AppSec scales past one reviewer.",
            topics: [
              "Framework security features",
              "Secure library wrappers",
              "Paved-road templates",
              "Deprecating unsafe internal APIs",
            ],
          },
          {
            id: "as-privacy",
            label: "Privacy by design",
            kind: "recommended",
            summary:
              "Increasingly part of the role as regulation tightens.",
            topics: [
              "Data minimisation and retention",
              "PII classification and handling",
              "Consent and deletion flows",
              "Logging without leaking",
            ],
          },
        ],
      },
      {
        id: "as-s3",
        title: "Security testing and tooling",
        duration: "5-6 weeks",
        goal: "Automate what can be automated so human review goes where it matters.",
        build:
          "Add a security pipeline to a real repository with tuned tooling and a triage process.",
        nodes: [
          {
            id: "as-sast",
            label: "Static analysis",
            summary:
              "Useful when tuned, ignored when noisy. Tuning is the actual skill.",
            topics: [
              "SAST tool selection and configuration",
              "Writing custom rules with Semgrep",
              "False positive triage workflow",
              "Baseline and incremental scanning",
            ],
          },
          {
            id: "as-sca",
            label: "Dependency and supply chain",
            summary:
              "Most application code is third party. That is where much of the risk sits.",
            topics: [
              "SCA and vulnerable dependency detection",
              "Reachability analysis to cut noise",
              "SBOM generation and use",
              "Dependency pinning and update policy",
            ],
          },
          {
            id: "as-dast",
            label: "Dynamic testing",
            summary:
              "Testing the running application, including authenticated flows.",
            topics: [
              "DAST in CI against a staging deploy",
              "Authenticated scanning setup",
              "API testing from an OpenAPI spec",
              "Fuzzing inputs and parsers",
            ],
          },
          {
            id: "as-review",
            label: "Secure code review",
            summary:
              "The core interview exercise: here is a diff, what is wrong with it.",
            topics: [
              "Reviewing for authorisation gaps",
              "Spotting injection sinks and taint flow",
              "Reviewing cryptographic usage",
              "Giving feedback developers act on",
            ],
          },
          {
            id: "as-pipeline",
            label: "Pipeline integration",
            summary:
              "Security that slows delivery gets disabled. Design for the developer's day.",
            topics: [
              "Fast feedback and pre-commit hooks",
              "Break-the-build criteria",
              "Findings in the pull request",
              "Exception and risk acceptance workflow",
            ],
          },
        ],
      },
      {
        id: "as-s4",
        title: "Running an AppSec programme",
        duration: "4-5 weeks",
        goal: "One reviewer cannot cover fifty teams. The job becomes leverage.",
        build:
          "Define a secure development lifecycle and get one team to adopt it end to end.",
        nodes: [
          {
            id: "as-sdlc",
            label: "Secure development lifecycle",
            summary:
              "The framework that turns ad-hoc reviews into a repeatable programme.",
            topics: [
              "Security requirements and design gates",
              "Risk-based review triggers",
              "Release criteria",
              "Measuring programme coverage",
            ],
          },
          {
            id: "as-champions",
            label: "Security champions",
            summary:
              "Scaling through embedded engineers is the standard answer, and interviews expect it.",
            topics: [
              "Selecting and training champions",
              "Keeping the network engaged",
              "Escalation paths",
              "Measuring impact",
            ],
          },
          {
            id: "as-bugbounty",
            label: "Vulnerability disclosure and bounty",
            summary:
              "Running the intake process for externally reported issues.",
            topics: [
              "Disclosure policy and safe harbour",
              "Triage and severity assignment",
              "Researcher communication",
              "Feeding findings into prevention",
            ],
          },
          {
            id: "as-metrics",
            label: "Metrics and reporting",
            summary:
              "Proving the programme works, in language leadership understands.",
            topics: [
              "Mean time to remediate by severity",
              "Vulnerability density and escape rate",
              "Coverage of critical services",
              "Reporting to leadership",
            ],
          },
          {
            id: "as-training",
            label: "Developer education",
            summary:
              "The cheapest long-term control, and the hardest to make stick.",
            topics: [
              "Targeted training on real findings",
              "Secure coding guidelines that get read",
              "Hands-on workshops and CTFs",
              "Onboarding for new engineers",
            ],
          },
        ],
      },
      {
        id: "as-s5",
        title: "Interview preparation",
        duration: "3-4 weeks",
        goal: "AppSec interviews are code review, threat modelling, and deep protocol questions.",
        build:
          "A public vulnerable-and-fixed application, plus a written threat model.",
        nodes: [
          {
            id: "as-review-round",
            label: "Code review round",
            summary:
              "The signature AppSec interview. Real code, real time pressure.",
            topics: [
              "Finding the bug in an unfamiliar diff",
              "Explaining exploitability clearly",
              "Proposing a correct fix",
              "Prioritising multiple findings",
            ],
          },
          {
            id: "as-tm-round",
            label: "Threat modelling round",
            summary:
              "Given an architecture diagram, identify threats and controls out loud.",
            topics: [
              "Systematic coverage under time pressure",
              "Prioritising realistic threats",
              "Proposing proportionate controls",
              "Handling incomplete information",
            ],
          },
          {
            id: "as-depth",
            label: "Deep technical questions",
            summary:
              "Expect protocol-level questions on TLS, OAuth and the browser model.",
            topics: [
              "Explain OAuth flows and their risks",
              "Same-origin policy and CORS precisely",
              "How does CSRF protection actually work",
              "JWT verification pitfalls",
            ],
          },
          {
            id: "as-coding",
            label: "Coding round",
            summary:
              "You are an engineer first. Expect to write working code.",
            topics: [
              "Implementing a secure primitive",
              "Writing a Semgrep rule",
              "Automating a security check",
              "Tests that prove the fix",
            ],
          },
          {
            id: "as-behavioural",
            label: "Behavioural round",
            summary:
              "The role is influence-heavy. Conflict stories are directly relevant.",
            topics: [
              "Convincing a team to fix a finding",
              "Blocking a release and the fallout",
              "Handling a disagreement on severity",
              "Building trust with engineering",
            ],
          },
        ],
      },
    ],
    tools: [
      "Semgrep",
      "Burp Suite",
      "OWASP ZAP",
      "Snyk / Dependabot",
      "OWASP ASVS",
      "Threat Dragon",
      "GitHub Advanced Security",
    ],
    proofOfWork: [
      "A vulnerable-and-fixed application with explanations",
      "Custom static analysis rules you wrote",
      "A published threat model for a real system",
      "A security pipeline adopted by a real team",
    ],
  },

  {
    slug: "cloud-security-engineer",
    title: "Cloud Security Engineer",
    shortTitle: "Cloud Security",
    category: "Security",
    mark: "CL",
    tagline:
      "Secure the accounts, identities and workloads that everything now runs on, with guardrails rather than tickets.",
    market:
      "Cloud misconfiguration is the leading cause of large data exposures, and the specialism is short-staffed everywhere. Combines the two highest-demand areas in the market.",
    timeline: "7-10 months part-time",
    entryBar: "Cloud or security experience. Both is ideal; one plus commitment is enough.",
    updated: "2026-08-31",
    prerequisites: [
      "Working knowledge of one cloud provider",
      "Security fundamentals: identity, network, crypto",
      "Infrastructure as code basics",
    ],
    stages: [
      {
        id: "csec-s1",
        title: "Cloud identity",
        duration: "5-6 weeks",
        goal: "In cloud, identity is the perimeter, and IAM is where the real attack paths live.",
        build:
          "Audit an account's IAM, find three privilege escalation paths, and remediate them.",
        nodes: [
          {
            id: "csec-iam",
            label: "IAM deep dive",
            summary:
              "Policy evaluation logic is subtle and heavily interviewed.",
            topics: [
              "Policy evaluation and explicit deny",
              "Roles, trust policies and assume-role chains",
              "Permission boundaries and SCPs",
              "Resource-based versus identity-based policy",
            ],
          },
          {
            id: "csec-privesc",
            label: "IAM privilege escalation",
            summary:
              "Knowing the escalation primitives is what makes an IAM review meaningful.",
            topics: [
              "PassRole and service escalation paths",
              "Policy modification escalation",
              "Cross-account trust abuse",
              "Automated path analysis tooling",
            ],
          },
          {
            id: "csec-federation",
            label: "Federation and workload identity",
            summary:
              "Eliminating long-lived keys is the single biggest cloud credential improvement.",
            topics: [
              "SSO federation into cloud",
              "OIDC for CI pipelines",
              "Workload identity for Kubernetes",
              "Eliminating static access keys",
            ],
          },
          {
            id: "csec-secrets",
            label: "Secrets and key management",
            summary:
              "KMS design and key policy, including who can decrypt what.",
            topics: [
              "KMS key policies and grants",
              "Envelope encryption",
              "Secret rotation automation",
              "Customer-managed keys and BYOK",
            ],
          },
          {
            id: "csec-accounts",
            label: "Account and tenancy structure",
            summary:
              "Blast radius is decided by account boundaries more than by any control.",
            topics: [
              "Multi-account strategy",
              "Organisational policies and guardrails",
              "Environment isolation",
              "Break-glass access design",
            ],
          },
        ],
      },
      {
        id: "csec-s2",
        title: "Workload and data security",
        duration: "5-6 weeks",
        goal: "Securing what runs and what is stored, across compute types.",
        build:
          "Apply and verify encryption, network isolation and least privilege for a real workload.",
        nodes: [
          {
            id: "csec-network",
            label: "Network security in cloud",
            summary:
              "Private by default, with deliberate and reviewed exceptions.",
            topics: [
              "VPC design and private subnets",
              "Security groups versus NACLs",
              "Private endpoints and egress control",
              "Perimeter services and WAF",
            ],
          },
          {
            id: "csec-data",
            label: "Data protection",
            summary:
              "Public buckets remain the most reported cloud data exposure.",
            topics: [
              "Storage access controls and public access blocks",
              "Encryption at rest configuration",
              "Data classification and tagging",
              "Backup immutability",
            ],
          },
          {
            id: "csec-containers",
            label: "Container and Kubernetes security",
            summary:
              "Most cloud workloads are containerised, which adds a whole control surface.",
            topics: [
              "Image scanning and admission control",
              "Pod security and workload identity",
              "Network policy in the cluster",
              "Runtime detection",
            ],
          },
          {
            id: "csec-serverless",
            label: "Serverless security",
            summary:
              "Different attack surface: permissions, event sources and dependencies.",
            topics: [
              "Function permissions and least privilege",
              "Event source validation",
              "Dependency and layer risk",
              "Cold start and timeout abuse",
            ],
          },
          {
            id: "csec-cspm",
            label: "Posture management",
            summary:
              "Continuous configuration assessment across accounts.",
            topics: [
              "CSPM tooling and benchmarks",
              "Drift detection and auto-remediation",
              "Prioritising findings by exploitability",
              "Reporting posture over time",
            ],
          },
        ],
      },
      {
        id: "csec-s3",
        title: "Detection in cloud",
        duration: "4-6 weeks",
        goal: "Cloud incidents look nothing like on-premises ones. Detection must be built for it.",
        build:
          "Build detections for five cloud attack techniques and validate them with simulated activity.",
        nodes: [
          {
            id: "csec-logging",
            label: "Cloud audit logging",
            summary:
              "Control plane logs are the primary evidence source in any cloud incident.",
            topics: [
              "CloudTrail and equivalent audit logs",
              "Data plane versus control plane events",
              "Centralised log aggregation",
              "Log integrity and tamper protection",
            ],
          },
          {
            id: "csec-detections",
            label: "Cloud detection engineering",
            summary:
              "Specific detections for specific cloud attacker behaviours.",
            topics: [
              "Anomalous API call patterns",
              "New region and new principal activity",
              "Credential exfiltration indicators",
              "Persistence via IAM changes",
            ],
          },
          {
            id: "csec-ir",
            label: "Cloud incident response",
            summary:
              "Containment in cloud is different, faster, and more reversible if planned.",
            topics: [
              "Isolating a compromised instance or role",
              "Revoking sessions and rotating credentials",
              "Snapshot-based forensics",
              "Cross-account investigation",
            ],
          },
          {
            id: "csec-threats",
            label: "Cloud threat landscape",
            summary:
              "Knowing how cloud attacks actually unfold, rather than generic threat talk.",
            topics: [
              "Metadata service SSRF chains",
              "Exposed credential harvesting",
              "Supply chain into cloud pipelines",
              "Cryptomining as an early indicator",
            ],
          },
          {
            id: "csec-simulation",
            label: "Attack simulation",
            kind: "recommended",
            summary:
              "Testing your detections against real technique execution in a safe account.",
            topics: [
              "Cloud attack simulation tooling",
              "Purple team exercises in cloud",
              "Detection coverage mapping",
              "Safe execution boundaries",
            ],
          },
        ],
      },
      {
        id: "csec-s4",
        title: "Automation and governance",
        duration: "4-5 weeks",
        goal: "Guardrails that prevent, and automation that remediates without a ticket queue.",
        build:
          "Ship a preventive guardrail and an auto-remediation for one high-risk misconfiguration class.",
        nodes: [
          {
            id: "csec-guardrails",
            label: "Preventive guardrails",
            summary:
              "Blocking a misconfiguration is worth more than detecting a hundred.",
            topics: [
              "Service control policies",
              "Policy as code in pipelines",
              "IaC scanning before apply",
              "Deny-by-default patterns",
            ],
          },
          {
            id: "csec-remediation",
            label: "Automated remediation",
            summary:
              "Closing findings without a human, safely and reversibly.",
            topics: [
              "Event-driven remediation functions",
              "Safety rails and dry-run modes",
              "Notification and audit trails",
              "Handling remediation failures",
            ],
          },
          {
            id: "csec-devsecops",
            label: "Securing the pipeline",
            summary:
              "The pipeline has production credentials, which makes it a primary target.",
            topics: [
              "CI credential scoping with OIDC",
              "Protecting IaC state files",
              "Artefact signing and verification",
              "Preventing pipeline privilege escalation",
            ],
          },
          {
            id: "csec-compliance",
            label: "Compliance in cloud",
            summary:
              "Continuous evidence rather than an annual scramble.",
            topics: [
              "Mapping controls to frameworks",
              "Automated evidence collection",
              "Audit reporting",
              "Shared responsibility boundaries",
            ],
          },
          {
            id: "csec-cost",
            label: "Security cost management",
            kind: "recommended",
            summary:
              "Security tooling and log retention can become the biggest line item.",
            topics: [
              "Log retention tiering",
              "Tool consolidation decisions",
              "Cost of detection coverage",
              "Justifying spend to leadership",
            ],
          },
        ],
      },
      {
        id: "csec-s5",
        title: "Certification and interviews",
        duration: "3-5 weeks",
        goal: "Cloud security interviews combine IAM depth, incident scenarios and automation.",
        build:
          "A public repository of security guardrails and detections for one cloud provider.",
        nodes: [
          {
            id: "csec-certs",
            label: "Certifications",
            summary:
              "Cloud security certifications carry weight and are usually employer-funded.",
            topics: [
              "AWS Security Specialty",
              "Azure or Google security certifications",
              "CCSK and CCSP",
              "Kubernetes security certification",
            ],
          },
          {
            id: "csec-iam-round",
            label: "IAM interview round",
            summary:
              "Expect a policy to read and an escalation path to find.",
            topics: [
              "Evaluate a policy out loud",
              "Identify the escalation path",
              "Design least privilege for a workload",
              "Explain cross-account access safely",
            ],
          },
          {
            id: "csec-scenario",
            label: "Incident scenario round",
            summary:
              "Credentials leaked publicly: what do you do, in what order.",
            topics: [
              "Leaked access key response",
              "Compromised instance containment",
              "Determining blast radius from logs",
              "Communicating during a cloud incident",
            ],
          },
          {
            id: "csec-design",
            label: "Architecture round",
            summary:
              "Design a secure multi-account landing zone with guardrails.",
            topics: [
              "Account structure and isolation",
              "Centralised logging design",
              "Network topology and egress",
              "Balancing control with developer velocity",
            ],
          },
          {
            id: "csec-portfolio",
            label: "Portfolio",
            summary:
              "Public guardrail and detection code is the strongest possible evidence.",
            topics: [
              "Open-source policy repository",
              "Cloud detection rules",
              "A misconfiguration remediation project",
              "Write-ups of cloud attack paths",
            ],
          },
        ],
      },
    ],
    tools: [
      "AWS / Azure / GCP",
      "Terraform",
      "OPA / Cloud Custodian",
      "Prowler / ScoutSuite",
      "CloudTrail",
      "Kubernetes",
      "Python",
    ],
    proofOfWork: [
      "An IAM audit with escalation paths found and fixed",
      "A guardrail repository preventing real misconfigurations",
      "Cloud detection rules with validation evidence",
      "A cloud security certification",
    ],
  },

  {
    slug: "iam-engineer",
    title: "Identity & Access Engineer",
    shortTitle: "IAM",
    category: "Security",
    mark: "ID",
    tagline:
      "Own who can access what, everywhere, and make joining, moving and leaving happen automatically.",
    market:
      "Every zero trust programme is an identity programme underneath. Specialised, in demand, and unusually stable because identity systems are never finished.",
    timeline: "6-9 months part-time",
    entryBar: "Systems administration or security background.",
    updated: "2026-08-31",
    prerequisites: [
      "Directory services and authentication basics",
      "Understanding of web protocols",
      "Scripting ability",
    ],
    stages: [
      {
        id: "iam-s1",
        title: "Identity protocols",
        duration: "5-6 weeks",
        goal: "The protocol layer is the technical core of the role and the bulk of the interview.",
        build:
          "Implement SSO into a test application using both SAML and OIDC, and document the flows.",
        nodes: [
          {
            id: "iam-authn",
            label: "Authentication fundamentals",
            summary:
              "Factors, assurance levels, and what each actually protects against.",
            topics: [
              "Authentication factors and assurance",
              "Phishing-resistant MFA and FIDO2",
              "Passwordless and passkeys",
              "Credential stuffing defences",
            ],
          },
          {
            id: "iam-oidc",
            label: "OAuth 2.1 and OIDC",
            summary:
              "The most-asked protocol topic in identity interviews, and the most often confused.",
            topics: [
              "Authorization code flow with PKCE",
              "Tokens: access, ID, refresh",
              "Scopes, audiences and claims",
              "Common implementation mistakes",
            ],
          },
          {
            id: "iam-saml",
            label: "SAML and legacy federation",
            summary:
              "Still everywhere in enterprise, and still generating incidents.",
            topics: [
              "SAML assertions and bindings",
              "Metadata and certificate rotation",
              "Signature validation pitfalls",
              "SAML versus OIDC decision",
            ],
          },
          {
            id: "iam-directory",
            label: "Directories",
            summary:
              "Active Directory and its cloud successors remain the source of truth.",
            topics: [
              "Active Directory structure and trusts",
              "Entra ID and hybrid sync",
              "LDAP and Kerberos",
              "Directory as source of truth",
            ],
          },
          {
            id: "iam-sessions",
            label: "Sessions and token lifecycle",
            summary:
              "Where identity systems leak: tokens that live too long or cannot be revoked.",
            topics: [
              "Session lifetime and idle timeout",
              "Refresh token rotation and reuse detection",
              "Revocation and logout propagation",
              "Continuous access evaluation",
            ],
          },
        ],
      },
      {
        id: "iam-s2",
        title: "Access governance",
        duration: "5-6 weeks",
        goal: "Not just who can log in, but what they can do and whether they still should.",
        build:
          "Design a role model for a real organisation and run an access review against it.",
        nodes: [
          {
            id: "iam-models",
            label: "Access models",
            summary:
              "RBAC, ABAC and ReBAC, and the failure mode of each at scale.",
            topics: [
              "RBAC and role explosion",
              "ABAC and policy complexity",
              "Relationship-based access control",
              "Choosing a model for a given estate",
            ],
          },
          {
            id: "iam-lifecycle",
            label: "Joiners, movers, leavers",
            summary:
              "Orphaned accounts and accumulated access are the standard audit findings.",
            topics: [
              "Automated provisioning with SCIM",
              "Role change and access recalculation",
              "Timely deprovisioning",
              "Contractor and third-party identity",
            ],
          },
          {
            id: "iam-certification",
            label: "Access reviews",
            summary:
              "A compliance requirement that is usually done badly and manually.",
            topics: [
              "Review campaigns and scoping",
              "Reviewer fatigue and rubber-stamping",
              "Risk-based review frequency",
              "Evidence for auditors",
            ],
          },
          {
            id: "iam-pam",
            label: "Privileged access management",
            summary:
              "Standing admin access is the finding on nearly every enterprise assessment.",
            topics: [
              "Just-in-time elevation",
              "Session recording and vaulting",
              "Tiered administration model",
              "Break-glass procedures",
            ],
          },
          {
            id: "iam-nonhuman",
            label: "Machine and workload identity",
            summary:
              "Non-human identities now outnumber human ones, and are governed far worse.",
            topics: [
              "Service accounts and their sprawl",
              "Workload identity federation",
              "Secret-free authentication",
              "Ownership and lifecycle for machine identity",
            ],
          },
        ],
      },
      {
        id: "iam-s3",
        title: "Zero trust and conditional access",
        duration: "4-5 weeks",
        goal: "Access decisions based on context rather than network location.",
        build:
          "Implement conditional access policies with device posture and risk-based step-up authentication.",
        nodes: [
          {
            id: "iam-zerotrust",
            label: "Zero trust identity",
            summary:
              "The architecture that identity teams are usually asked to lead.",
            topics: [
              "Never trust, always verify in practice",
              "Policy decision and enforcement points",
              "Removing network-based trust",
              "Phased migration approach",
            ],
          },
          {
            id: "iam-conditional",
            label: "Conditional access",
            summary:
              "The practical implementation of contextual access decisions.",
            topics: [
              "Policy design and precedence",
              "Device compliance signals",
              "Location and impossible travel",
              "Avoiding lockout scenarios",
            ],
          },
          {
            id: "iam-risk",
            label: "Risk-based authentication",
            summary:
              "Step-up authentication when the signals justify friction.",
            topics: [
              "Risk signals and scoring",
              "Step-up challenge design",
              "Balancing security and usability",
              "Tuning false positives",
            ],
          },
          {
            id: "iam-cx",
            label: "Customer identity (CIAM)",
            kind: "recommended",
            summary:
              "A distinct discipline with scale, privacy and conversion pressures.",
            topics: [
              "Registration and progressive profiling",
              "Social login and account linking",
              "Account recovery security",
              "Consent and privacy requirements",
            ],
          },
          {
            id: "iam-b2b",
            label: "B2B and external collaboration",
            summary:
              "Partner and supplier access is a large, often ungoverned attack surface.",
            topics: [
              "Guest identity lifecycle",
              "Cross-tenant access policy",
              "External sharing controls",
              "Third-party risk in identity",
            ],
          },
        ],
      },
      {
        id: "iam-s4",
        title: "Operating identity systems",
        duration: "4-5 weeks",
        goal: "Identity is a tier-zero service. If it is down, everything is down.",
        build:
          "Document and test an identity outage recovery plan, including break-glass access.",
        nodes: [
          {
            id: "iam-availability",
            label: "Availability and resilience",
            summary:
              "An identity provider outage is a total outage. Design accordingly.",
            topics: [
              "Redundancy and failover for identity",
              "Break-glass account design and testing",
              "Certificate expiry as an outage cause",
              "Dependency mapping",
            ],
          },
          {
            id: "iam-monitoring",
            label: "Identity monitoring",
            summary:
              "Identity logs are the highest-value detection source in most estates.",
            topics: [
              "Sign-in log analysis",
              "Detecting MFA fatigue attacks",
              "Privilege change alerting",
              "Anomalous consent grants",
            ],
          },
          {
            id: "iam-automation",
            label: "Automation and integration",
            summary:
              "Identity work is mostly integration work, and mostly automatable.",
            topics: [
              "SCIM provisioning connectors",
              "Identity APIs and scripting",
              "Policy as code for access",
              "Testing identity changes safely",
            ],
          },
          {
            id: "iam-migration",
            label: "Migration projects",
            summary:
              "Most identity roles involve moving from one provider to another.",
            topics: [
              "Application migration inventory",
              "Coexistence during migration",
              "User communication and cutover",
              "Rollback planning",
            ],
          },
          {
            id: "iam-compliance",
            label: "Compliance and audit",
            kind: "recommended",
            summary:
              "Identity controls are the ones auditors examine first.",
            topics: [
              "Segregation of duties",
              "Evidence for access controls",
              "Regulatory requirements by industry",
              "Audit finding remediation",
            ],
          },
        ],
      },
      {
        id: "iam-s5",
        title: "Interview preparation",
        duration: "3-4 weeks",
        goal: "Identity interviews go deep on protocols and on lifecycle design.",
        build:
          "A working SSO integration demo with documentation of every flow and failure mode.",
        nodes: [
          {
            id: "iam-protocol-round",
            label: "Protocol round",
            summary:
              "Draw the OIDC flow on a whiteboard. This gets asked almost every time.",
            topics: [
              "Authorization code flow step by step",
              "Why PKCE exists",
              "Token validation requirements",
              "SAML assertion validation",
            ],
          },
          {
            id: "iam-design-round",
            label: "Design round",
            summary:
              "Design access management for an organisation with mixed estate and contractors.",
            topics: [
              "Role model design",
              "Lifecycle automation architecture",
              "Privileged access approach",
              "Migration phasing",
            ],
          },
          {
            id: "iam-troubleshoot",
            label: "Troubleshooting round",
            summary:
              "SSO is broken for one application. Diagnose it.",
            topics: [
              "Reading SAML and OIDC traces",
              "Clock skew and certificate issues",
              "Claim mapping mismatches",
              "Conditional access blocking unexpectedly",
            ],
          },
          {
            id: "iam-security-round",
            label: "Security round",
            summary:
              "Identity attacks are specific and well documented. Know them.",
            topics: [
              "Token theft and replay",
              "Consent phishing",
              "MFA bypass techniques",
              "Golden ticket and directory attacks",
            ],
          },
          {
            id: "iam-behavioural",
            label: "Behavioural round",
            summary:
              "Identity changes affect everyone, which makes stakeholder management central.",
            topics: [
              "Rolling out MFA against resistance",
              "An access change that broke a business process",
              "Balancing security with usability",
              "Working with auditors",
            ],
          },
        ],
      },
    ],
    tools: [
      "Entra ID / Okta",
      "Active Directory",
      "SCIM",
      "OAuth 2.1 / OIDC",
      "SAML",
      "Keycloak",
      "PAM tooling",
      "PowerShell",
    ],
    proofOfWork: [
      "A working SSO integration with documented flows",
      "An automated joiner/mover/leaver implementation",
      "A role model and access review campaign design",
      "A tested break-glass and identity outage plan",
    ],
  },
];
