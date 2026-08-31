import type { RoadmapTrack } from "@/lib/roadmaps";

/** Emerging and specialist hardware/protocol tracks. */
export const EMERGING_TRACKS: RoadmapTrack[] = [
  {
    slug: "blockchain-engineer",
    title: "Blockchain Engineer",
    shortTitle: "Blockchain",
    category: "Emerging Tech",
    mark: "BC",
    tagline:
      "Write code that controls money and cannot be patched quietly. Security discipline is the whole job.",
    market:
      "Smaller and more volatile than mainstream engineering, concentrated in protocol teams, exchanges, and increasingly in banks working on settlement and tokenisation. Security-focused roles command very high rates because mistakes are irreversible.",
    timeline: "7-11 months part-time",
    entryBar: "Solid programming background. Cryptography knowledge is learned on the way.",
    updated: "2026-08-31",
    prerequisites: [
      "Strong programming fundamentals in any language",
      "Understanding of hashing and public key cryptography basics",
      "Backend and API experience",
    ],
    stages: [
      {
        id: "bc-s1",
        title: "How the systems work",
        duration: "5-6 weeks",
        goal: "Understand the machine before writing code that runs on it.",
        build:
          "Build a minimal blockchain from scratch: blocks, hashing, signatures and a consensus rule.",
        nodes: [
          {
            id: "bc-crypto",
            label: "Applied cryptography",
            summary:
              "Everything in this field rests on a small set of primitives.",
            topics: [
              "Hash functions and Merkle trees",
              "Elliptic curve signatures",
              "Key derivation and wallets",
              "Commitment schemes",
            ],
          },
          {
            id: "bc-consensus",
            label: "Consensus and networks",
            summary:
              "Why the ledger agrees, and what it costs to make it agree.",
            topics: [
              "Proof of work and proof of stake",
              "Finality and reorganisations",
              "Peer-to-peer gossip and propagation",
              "Fork choice rules",
            ],
          },
          {
            id: "bc-evm",
            label: "The execution environment",
            summary:
              "The virtual machine determines what your code can and cannot do.",
            topics: [
              "EVM execution model and gas",
              "Accounts, storage and state",
              "Transactions, calldata and receipts",
              "Alternative VMs and their trade-offs",
            ],
          },
          {
            id: "bc-tokens",
            label: "Token standards",
            summary:
              "The interfaces almost every application is built on.",
            topics: [
              "Fungible and non-fungible standards",
              "Approvals and allowance patterns",
              "Metadata and interface detection",
              "Upgrade patterns and proxies",
            ],
          },
          {
            id: "bc-scaling",
            label: "Scaling and layer twos",
            summary:
              "Where most current activity and most current hiring is.",
            topics: [
              "Rollups: optimistic and validity proofs",
              "Data availability",
              "Bridging and cross-chain messaging",
              "Trade-offs between layers",
            ],
          },
        ],
      },
      {
        id: "bc-s2",
        title: "Smart contract development",
        duration: "6-8 weeks",
        goal: "Writing contracts that are correct, cheap and impossible to quietly fix later.",
        build:
          "Ship a non-trivial contract system to a testnet with a full test suite and gas report.",
        nodes: [
          {
            id: "bc-solidity",
            label: "Solidity in depth",
            summary:
              "The dominant language, with a set of sharp edges you must know by heart.",
            topics: [
              "Types, storage layout and packing",
              "Visibility, modifiers and inheritance",
              "Errors, reverts and custom errors",
              "Assembly and low-level calls",
            ],
          },
          {
            id: "bc-patterns",
            label: "Contract design patterns",
            summary:
              "Established patterns exist because the alternatives lost money.",
            topics: [
              "Checks-effects-interactions",
              "Pull over push payments",
              "Access control and role management",
              "Upgradeability patterns and their risks",
            ],
          },
          {
            id: "bc-gas",
            label: "Gas optimisation",
            summary:
              "Users pay for every inefficiency, so this is a real product concern.",
            topics: [
              "Storage versus memory costs",
              "Loop and batch design",
              "Packing and bit manipulation",
              "Measuring with gas reports",
            ],
          },
          {
            id: "bc-testing",
            label: "Testing contracts",
            summary:
              "Test standards here are far higher than in ordinary application code.",
            topics: [
              "Foundry and unit testing",
              "Fuzz testing and invariants",
              "Fork testing against mainnet state",
              "Coverage and mutation testing",
            ],
          },
          {
            id: "bc-tooling",
            label: "Development tooling",
            summary:
              "A mature toolchain that interviews expect fluency in.",
            topics: [
              "Foundry and Hardhat workflows",
              "Local nodes and forked environments",
              "Deployment scripting",
              "Verification and source publishing",
            ],
          },
        ],
      },
      {
        id: "bc-s3",
        title: "Security",
        duration: "6-8 weeks",
        goal: "The defining discipline. Deployed code is public, immutable and holds funds.",
        build:
          "Complete a set of security challenges, then audit someone else's contract and write the report.",
        nodes: [
          {
            id: "bc-vulns",
            label: "Vulnerability classes",
            summary:
              "A well-documented catalogue of ways contracts have lost money.",
            topics: [
              "Reentrancy and cross-function reentrancy",
              "Integer and rounding errors",
              "Access control failures",
              "Oracle manipulation",
            ],
          },
          {
            id: "bc-economic",
            label: "Economic attacks",
            summary:
              "Attacks where every transaction is valid but the outcome is theft.",
            topics: [
              "Flash loan attacks",
              "Price oracle manipulation",
              "MEV, sandwiching and front-running",
              "Governance attacks",
            ],
          },
          {
            id: "bc-audit",
            label: "Auditing",
            summary:
              "The highest-paid specialisation in the field.",
            topics: [
              "Systematic review methodology",
              "Threat modelling a protocol",
              "Writing findings with severity",
              "Static analysis and symbolic execution",
            ],
          },
          {
            id: "bc-formal",
            label: "Formal verification",
            kind: "recommended",
            summary:
              "Increasingly expected for high-value protocols.",
            topics: [
              "Invariant specification",
              "Symbolic execution tools",
              "Property-based verification",
              "Limits of formal methods",
            ],
          },
          {
            id: "bc-ops",
            label: "Operational security",
            summary:
              "Key management failures cause as many losses as code bugs.",
            topics: [
              "Multisig and timelock design",
              "Key management and hardware wallets",
              "Incident response for live contracts",
              "Pausability and emergency procedures",
            ],
          },
        ],
      },
      {
        id: "bc-s4",
        title: "Applications and integration",
        duration: "4-6 weeks",
        goal: "Contracts are only part of a product. The rest is ordinary engineering done carefully.",
        build:
          "Build a full application: contracts, indexer, frontend, and a documented failure-handling story.",
        nodes: [
          {
            id: "bc-frontend",
            label: "Application integration",
            summary:
              "Wallet interaction and transaction lifecycle handling.",
            topics: [
              "Wallet connection and signing",
              "Transaction states and confirmations",
              "Handling reverts and user rejection",
              "Chain switching and network handling",
            ],
          },
          {
            id: "bc-indexing",
            label: "Indexing and data",
            summary:
              "Reading chain state efficiently is its own engineering problem.",
            topics: [
              "Event indexing and subgraphs",
              "Handling reorganisations in indexes",
              "RPC providers and rate limits",
              "Caching chain data",
            ],
          },
          {
            id: "bc-defi",
            label: "Protocol composition",
            kind: "recommended",
            summary:
              "Composability is the field's strength and its largest attack surface.",
            topics: [
              "Automated market makers",
              "Lending and collateral mechanics",
              "Composability risk",
              "Integration testing against real protocols",
            ],
          },
          {
            id: "bc-enterprise",
            label: "Enterprise and permissioned chains",
            kind: "recommended",
            summary:
              "Where the more stable, better-paid corporate roles are.",
            topics: [
              "Permissioned ledger platforms",
              "Tokenisation of real assets",
              "Identity and compliance integration",
              "Regulatory considerations",
            ],
          },
          {
            id: "bc-offchain",
            label: "Off-chain infrastructure",
            summary:
              "Most of a blockchain product is conventional backend engineering.",
            topics: [
              "Keeper and automation services",
              "Oracle integration",
              "Transaction relaying and gas management",
              "Monitoring on-chain state",
            ],
          },
        ],
      },
      {
        id: "bc-s5",
        title: "Interview preparation",
        duration: "3-5 weeks",
        goal: "Interviews are security-heavy. Expect to find bugs in contracts you have just been shown.",
        build:
          "A public portfolio: audited contracts, competition findings, and a written audit report.",
        nodes: [
          {
            id: "bc-security-round",
            label: "Security round",
            summary:
              "The core interview: here is a contract, find the vulnerability.",
            topics: [
              "Systematic contract review under time pressure",
              "Explaining exploitability precisely",
              "Proposing a correct fix",
              "Severity assessment",
            ],
          },
          {
            id: "bc-solidity-round",
            label: "Solidity round",
            summary:
              "Language mechanics and gas questions, asked precisely.",
            topics: [
              "Storage layout and packing",
              "delegatecall and proxy mechanics",
              "Gas cost reasoning",
              "Common compiler pitfalls",
            ],
          },
          {
            id: "bc-design-round",
            label: "Protocol design round",
            summary:
              "Design a mechanism, then attack your own design.",
            topics: [
              "Incentive design",
              "Failure and edge case analysis",
              "Upgrade and governance strategy",
              "Economic attack surface",
            ],
          },
          {
            id: "bc-fundamentals",
            label: "Fundamentals round",
            summary:
              "Consensus, finality and cryptography questions.",
            topics: [
              "Consensus mechanism trade-offs",
              "Rollup security models",
              "Signature schemes",
              "Reorg handling",
            ],
          },
          {
            id: "bc-portfolio",
            label: "Portfolio",
            summary:
              "Audit competition results are the strongest credential in this field.",
            topics: [
              "Audit competition findings",
              "Deployed contracts with tests",
              "A written audit report",
              "Open-source protocol contributions",
            ],
          },
        ],
      },
    ],
    tools: [
      "Solidity",
      "Foundry",
      "Hardhat",
      "Slither",
      "The Graph",
      "viem / ethers",
      "Tenderly",
    ],
    proofOfWork: [
      "Deployed contracts with a full test and fuzz suite",
      "Findings from public audit competitions",
      "A written audit report on someone else's code",
      "A gas optimisation case study with measurements",
    ],
  },

  {
    slug: "embedded-iot-engineer",
    title: "Embedded & IoT Engineer",
    shortTitle: "Embedded / IoT",
    category: "Emerging Tech",
    mark: "EB",
    tagline:
      "Write software that runs on hardware you can hold, with no operating system to hide behind and no easy way to patch it.",
    market:
      "Automotive, medical devices, industrial automation, consumer hardware and energy. Steady, less cyclical than web, and unusually resistant to offshoring because it needs physical access.",
    timeline: "8-12 months part-time",
    entryBar: "Programming ability and willingness to buy hardware and break it.",
    updated: "2026-08-31",
    prerequisites: [
      "C fundamentals, or willingness to learn them properly",
      "Basic electronics: voltage, current, digital signals",
      "A development board and a cheap logic analyser",
    ],
    stages: [
      {
        id: "emb-s1",
        title: "C and the machine",
        duration: "6-8 weeks",
        goal: "Embedded work demands understanding memory and hardware at a level web development never requires.",
        build:
          "Blink an LED without a framework, by writing directly to registers, and explain every line.",
        nodes: [
          {
            id: "emb-c",
            label: "C for embedded",
            summary:
              "Still the dominant language, and interviews test it in detail.",
            topics: [
              "Pointers, arrays and pointer arithmetic",
              "Structs, unions and bitfields",
              "volatile, const and their real meanings",
              "Undefined behaviour and why it bites",
            ],
          },
          {
            id: "emb-memory",
            label: "Memory in constrained systems",
            summary:
              "No garbage collector, often no heap, and very little RAM.",
            topics: [
              "Stack, heap and static allocation",
              "Why dynamic allocation is often banned",
              "Memory maps and linker scripts",
              "Stack overflow detection",
            ],
          },
          {
            id: "emb-architecture",
            label: "Microcontroller architecture",
            summary:
              "The chip is the platform. Its datasheet is the documentation.",
            topics: [
              "ARM Cortex-M architecture",
              "Registers, peripherals and memory-mapped IO",
              "Clock trees and power domains",
              "Reading a datasheet and reference manual",
            ],
          },
          {
            id: "emb-interrupts",
            label: "Interrupts and timing",
            summary:
              "The source of the most subtle bugs in embedded systems.",
            topics: [
              "Interrupt service routines and latency",
              "Priorities, nesting and masking",
              "Race conditions and critical sections",
              "Timers and precise timing",
            ],
          },
          {
            id: "emb-toolchain",
            label: "Toolchain and debugging",
            summary:
              "No console. Debugging is done with hardware.",
            topics: [
              "Cross-compilation and linking",
              "JTAG/SWD debugging",
              "Logic analysers and oscilloscopes",
              "Reading a disassembly",
            ],
          },
        ],
      },
      {
        id: "emb-s2",
        title: "Peripherals and protocols",
        duration: "5-7 weeks",
        goal: "Talking to the physical world through the interfaces every board provides.",
        build:
          "Interface three different sensors over three different buses, with a driver you wrote yourself.",
        nodes: [
          {
            id: "emb-gpio",
            label: "Digital and analogue IO",
            summary:
              "The basics that every board and every interview starts with.",
            topics: [
              "GPIO configuration and pull resistors",
              "ADC and DAC operation",
              "PWM for control and dimming",
              "Debouncing and signal conditioning",
            ],
          },
          {
            id: "emb-buses",
            label: "Serial buses",
            summary:
              "I2C, SPI and UART cover the overwhelming majority of sensor communication.",
            topics: [
              "UART framing and baud rates",
              "I2C addressing, clock stretching and pitfalls",
              "SPI modes and chip select",
              "Debugging buses with a logic analyser",
            ],
          },
          {
            id: "emb-drivers",
            label: "Writing drivers",
            summary:
              "Turning a datasheet into working, testable code.",
            topics: [
              "Driver structure and abstraction",
              "Blocking versus interrupt-driven versus DMA",
              "Error handling on flaky hardware",
              "Portability across MCUs",
            ],
          },
          {
            id: "emb-dma",
            label: "DMA and performance",
            summary:
              "Moving data without the CPU, which is how throughput is achieved.",
            topics: [
              "DMA controllers and channels",
              "Double buffering",
              "Cache coherency issues",
              "Measuring CPU load",
            ],
          },
          {
            id: "emb-power",
            label: "Low power design",
            summary:
              "Battery life is a headline product requirement in most IoT devices.",
            topics: [
              "Sleep modes and wake sources",
              "Duty cycling strategies",
              "Measuring current consumption",
              "Peripheral power management",
            ],
          },
        ],
      },
      {
        id: "emb-s3",
        title: "RTOS and system design",
        duration: "5-7 weeks",
        goal: "Once a system does more than one thing, you need real concurrency management.",
        build:
          "Rewrite a bare-metal project on an RTOS with tasks, queues and a documented timing analysis.",
        nodes: [
          {
            id: "emb-rtos",
            label: "Real-time operating systems",
            summary:
              "FreeRTOS and Zephyr dominate. Scheduling behaviour is heavily interviewed.",
            topics: [
              "Tasks, scheduling and priorities",
              "Queues, semaphores and mutexes",
              "Priority inversion and inheritance",
              "Stack sizing per task",
            ],
          },
          {
            id: "emb-realtime",
            label: "Real-time constraints",
            summary:
              "Hard real time means late is the same as wrong.",
            topics: [
              "Hard, firm and soft real time",
              "Worst case execution time",
              "Jitter and determinism",
              "Schedulability reasoning",
            ],
          },
          {
            id: "emb-architecture-design",
            label: "Firmware architecture",
            summary:
              "Structure that survives five years of feature additions on the same chip.",
            topics: [
              "Layering and hardware abstraction",
              "State machines for device logic",
              "Event-driven designs",
              "Modularity for testability",
            ],
          },
          {
            id: "emb-testing",
            label: "Testing firmware",
            summary:
              "Hard, often skipped, and a genuine differentiator when you can do it.",
            topics: [
              "Unit testing on host with hardware mocks",
              "Hardware-in-the-loop testing",
              "Automated test rigs",
              "Static analysis and MISRA",
            ],
          },
          {
            id: "emb-linux",
            label: "Embedded Linux",
            kind: "recommended",
            summary:
              "The other half of the industry: gateways, cameras and richer devices.",
            topics: [
              "Yocto and buildroot basics",
              "Device tree and kernel modules",
              "Boot process and init",
              "When Linux beats an MCU",
            ],
          },
        ],
      },
      {
        id: "emb-s4",
        title: "Connectivity and fleet operations",
        duration: "4-6 weeks",
        goal: "The IoT half: devices that talk to a backend and can be updated in the field.",
        build:
          "Connect a device to a cloud backend with telemetry, remote configuration and working OTA updates.",
        nodes: [
          {
            id: "emb-wireless",
            label: "Wireless protocols",
            summary:
              "Choosing the radio is a product decision with long consequences.",
            topics: [
              "BLE: GATT, advertising and pairing",
              "WiFi provisioning and reconnection",
              "LoRaWAN and cellular for wide area",
              "Range, power and bandwidth trade-offs",
            ],
          },
          {
            id: "emb-cloud",
            label: "Cloud connectivity",
            summary:
              "Devices are unreliable clients on unreliable networks.",
            topics: [
              "MQTT and CoAP",
              "Store and forward on disconnection",
              "Device provisioning and identity",
              "Telemetry design and bandwidth cost",
            ],
          },
          {
            id: "emb-ota",
            label: "Over-the-air updates",
            summary:
              "The capability that decides whether a field bug is expensive or catastrophic.",
            topics: [
              "Bootloaders and A/B partitions",
              "Update verification and signing",
              "Rollback on failed boot",
              "Staged rollout across a fleet",
            ],
          },
          {
            id: "emb-security",
            label: "Device security",
            summary:
              "Regulation is arriving, and physical access changes the threat model entirely.",
            topics: [
              "Secure boot and chain of trust",
              "Key storage and secure elements",
              "Encrypted communication on constrained devices",
              "Physical attack surface and debug port lockdown",
            ],
          },
          {
            id: "emb-fleet",
            label: "Fleet management",
            summary:
              "Operating thousands of devices you cannot physically reach.",
            topics: [
              "Remote diagnostics and logging",
              "Configuration management",
              "Health monitoring and alerting",
              "Field failure analysis",
            ],
          },
        ],
      },
      {
        id: "emb-s5",
        title: "Interview preparation",
        duration: "3-5 weeks",
        goal: "Embedded interviews go deep on C, memory, interrupts and debugging.",
        build:
          "A documented hardware project with schematics, firmware and a written debugging story.",
        nodes: [
          {
            id: "emb-c-round",
            label: "C round",
            summary:
              "Pointer and bit manipulation questions are near-universal.",
            topics: [
              "Bit manipulation and register masks",
              "Pointer and array questions",
              "volatile and const correctness",
              "Spotting undefined behaviour",
            ],
          },
          {
            id: "emb-systems-round",
            label: "Systems round",
            summary:
              "Interrupts, concurrency and timing, asked in scenario form.",
            topics: [
              "ISR design constraints",
              "Race condition identification",
              "Priority inversion scenarios",
              "Memory corruption diagnosis",
            ],
          },
          {
            id: "emb-hardware-round",
            label: "Hardware round",
            summary:
              "Reading schematics and datasheets is part of the assessment.",
            topics: [
              "Interpreting a datasheet timing diagram",
              "Reading a schematic",
              "Choosing a bus for a requirement",
              "Debugging a non-responding peripheral",
            ],
          },
          {
            id: "emb-design-round",
            label: "Design round",
            summary:
              "Design a device to a power, cost and timing budget.",
            topics: [
              "MCU and radio selection",
              "Power budget calculation",
              "Firmware architecture proposal",
              "Update and security strategy",
            ],
          },
          {
            id: "emb-portfolio",
            label: "Portfolio",
            summary:
              "Physical projects are unusually persuasive in this field.",
            topics: [
              "A working device with published firmware",
              "Schematics and a bill of materials",
              "A debugging write-up with scope traces",
              "Contributions to open hardware or RTOS projects",
            ],
          },
        ],
      },
    ],
    tools: [
      "C / C++",
      "ARM Cortex-M",
      "FreeRTOS / Zephyr",
      "STM32 / ESP32",
      "Logic analyser",
      "Oscilloscope",
      "PlatformIO",
      "MQTT",
    ],
    proofOfWork: [
      "A working hardware project with published firmware and schematics",
      "A driver you wrote from a datasheet",
      "An OTA update system with rollback demonstrated",
      "A debugging case study with logic analyser traces",
    ],
  },
];
