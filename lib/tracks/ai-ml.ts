import type { RoadmapTrack } from "@/lib/roadmaps";

/** Specialist AI and machine learning tracks. */
export const AI_ML_TRACKS: RoadmapTrack[] = [
  {
    slug: "nlp-engineer",
    title: "NLP Engineer",
    shortTitle: "NLP",
    category: "AI & ML",
    mark: "NL",
    tagline:
      "Build systems that read, classify and generate language, and know when a fine-tuned small model beats a large one.",
    market:
      "Absorbed into the LLM boom but still distinct: search, extraction, classification and multilingual work need people who understand text beyond calling an API.",
    timeline: "8-11 months part-time",
    entryBar: "Python and some machine learning background.",
    updated: "2026-08-31",
    prerequisites: [
      "Python and PyTorch basics",
      "Linear algebra and probability fundamentals",
      "Familiarity with the transformer architecture",
    ],
    stages: [
      {
        id: "nlp-s1",
        title: "Language and representation",
        duration: "5-7 weeks",
        goal: "Understand how text becomes numbers, because most NLP bugs live there.",
        build:
          "Build a text classifier three ways — bag of words, embeddings, fine-tuned transformer — and compare honestly.",
        nodes: [
          {
            id: "nlp-preprocessing",
            label: "Text processing",
            summary:
              "Unglamorous, and the source of most silent quality problems.",
            topics: [
              "Normalisation, Unicode and encoding issues",
              "Language detection and segmentation",
              "Handling noisy real-world text",
              "Regular expressions and their limits",
            ],
          },
          {
            id: "nlp-tokenisation",
            label: "Tokenisation",
            summary:
              "Subword tokenisation explains cost, context limits and multilingual weakness.",
            topics: [
              "BPE, WordPiece and SentencePiece",
              "Vocabulary size trade-offs",
              "Token counts and non-English penalties",
              "Special tokens and truncation strategy",
            ],
          },
          {
            id: "nlp-embeddings",
            label: "Embeddings",
            summary:
              "The representation underlying search, clustering and retrieval.",
            topics: [
              "Static versus contextual embeddings",
              "Sentence embeddings and pooling",
              "Similarity metrics and normalisation",
              "Choosing an embedding model",
            ],
            ref: {
              href: "/13-ai/03-embeddings-vector-search",
              label: "Ch — Embeddings & Vector Search",
            },
          },
          {
            id: "nlp-transformers",
            label: "Transformer architecture",
            summary:
              "Attention mechanics get asked directly in almost every NLP interview.",
            topics: [
              "Self-attention and multi-head attention",
              "Positional encoding schemes",
              "Encoder, decoder and encoder-decoder models",
              "Context length and attention cost",
            ],
          },
          {
            id: "nlp-classical",
            label: "Classical NLP",
            summary:
              "Often the right answer for cost and latency, and a differentiator in interviews.",
            topics: [
              "TF-IDF and linear classifiers as baselines",
              "Named entity recognition approaches",
              "Rule-based extraction where appropriate",
              "When simple methods win",
            ],
          },
        ],
      },
      {
        id: "nlp-s2",
        title: "Core NLP tasks",
        duration: "6-8 weeks",
        goal: "The task types that make up almost all commercial NLP work.",
        build:
          "Ship a document extraction pipeline with a measured accuracy figure and an error analysis.",
        nodes: [
          {
            id: "nlp-classification",
            label: "Classification and labelling",
            summary:
              "The most common commercial NLP task by a wide margin.",
            topics: [
              "Single and multi-label classification",
              "Class imbalance in text",
              "Threshold selection and confidence",
              "Weak supervision and labelling functions",
            ],
          },
          {
            id: "nlp-ner",
            label: "Extraction and NER",
            summary:
              "Turning documents into structured records is where the money usually is.",
            topics: [
              "Entity recognition and linking",
              "Relation extraction",
              "Structured output from LLMs",
              "Evaluating span-level accuracy",
            ],
          },
          {
            id: "nlp-search",
            label: "Search and retrieval",
            summary:
              "Retrieval quality determines RAG quality more than any model choice.",
            topics: [
              "Lexical search and BM25",
              "Dense retrieval and hybrid search",
              "Reranking with cross-encoders",
              "Chunking strategies and their impact",
            ],
            ref: { href: "/13-ai/04-rag", label: "Ch — RAG" },
          },
          {
            id: "nlp-generation",
            label: "Generation tasks",
            summary:
              "Summarisation and rewriting, with the evaluation problems they bring.",
            topics: [
              "Summarisation approaches and failure modes",
              "Controlled generation and constraints",
              "Hallucination and grounding",
              "Decoding parameters",
            ],
          },
          {
            id: "nlp-multilingual",
            label: "Multilingual NLP",
            kind: "recommended",
            summary:
              "A large practical gap, and a strong differentiator in many markets.",
            topics: [
              "Cross-lingual models and transfer",
              "Tokenisation penalties by script",
              "Low-resource language strategies",
              "Evaluation across languages",
            ],
          },
        ],
      },
      {
        id: "nlp-s3",
        title: "Training and adaptation",
        duration: "6-7 weeks",
        goal: "Knowing when to prompt, when to fine-tune, and when to train something small.",
        build:
          "Fine-tune a small model to beat a large API model on one narrow task, on both cost and quality.",
        nodes: [
          {
            id: "nlp-finetune",
            label: "Fine-tuning",
            summary:
              "Parameter-efficient tuning made this practical on modest hardware.",
            topics: [
              "Full fine-tuning versus LoRA and adapters",
              "Dataset construction and formatting",
              "Hyperparameters that actually matter",
              "Catastrophic forgetting",
            ],
            ref: { href: "/13-ai/02-prompt-engineering", label: "Ch — Prompt Engineering" },
          },
          {
            id: "nlp-data",
            label: "Data curation",
            summary:
              "Data quality dominates model choice for task-specific performance.",
            topics: [
              "Annotation guidelines and agreement",
              "Active learning for labelling budgets",
              "Synthetic data generation and its risks",
              "Deduplication and contamination checks",
            ],
          },
          {
            id: "nlp-distillation",
            label: "Distillation and compression",
            summary:
              "How you get production latency and cost down without losing much quality.",
            topics: [
              "Knowledge distillation from a large model",
              "Quantisation and its quality cost",
              "Pruning and small model selection",
              "Latency and throughput trade-offs",
            ],
          },
          {
            id: "nlp-prompting",
            label: "Prompting as an alternative",
            summary:
              "Often the right first answer. Knowing when it stops being right is the skill.",
            topics: [
              "Few-shot and structured prompting",
              "Output schemas and validation",
              "Cost and latency of prompting versus tuning",
              "Prompt versioning and regression",
            ],
          },
          {
            id: "nlp-eval",
            label: "Evaluation",
            summary:
              "The hardest part of NLP, and the part interviews probe most for rigour.",
            topics: [
              "Task-appropriate metrics",
              "Human evaluation design",
              "LLM-as-judge and its biases",
              "Held-out sets and contamination",
            ],
            ref: { href: "/13-ai/09-evaluation-hallucination", label: "Ch — Evaluation & Hallucination" },
          },
        ],
      },
      {
        id: "nlp-s4",
        title: "Production NLP",
        duration: "4-6 weeks",
        goal: "Serving text models under latency, cost and safety constraints.",
        build:
          "Deploy a model behind an API with monitoring, caching and a documented latency budget.",
        nodes: [
          {
            id: "nlp-serving",
            label: "Model serving",
            summary:
              "Throughput and latency engineering for transformer inference.",
            topics: [
              "Batching and dynamic batching",
              "GPU versus CPU inference economics",
              "ONNX and inference runtimes",
              "Autoscaling for spiky traffic",
            ],
          },
          {
            id: "nlp-latency",
            label: "Latency and cost",
            summary:
              "Text pipelines have many stages; knowing which dominates is essential.",
            topics: [
              "Profiling a multi-stage pipeline",
              "Caching embeddings and results",
              "Model cascades and routing",
              "Streaming responses",
            ],
            ref: { href: "/13-ai/11-cost-latency-optimization", label: "Ch — Cost & Latency" },
          },
          {
            id: "nlp-monitoring",
            label: "Monitoring and drift",
            summary:
              "Text distributions shift, and accuracy degrades silently.",
            topics: [
              "Input distribution monitoring",
              "Output quality sampling",
              "Feedback capture from users",
              "Retraining triggers",
            ],
          },
          {
            id: "nlp-safety",
            label: "Safety and abuse",
            summary:
              "User-facing language systems attract adversarial input immediately.",
            topics: [
              "Prompt injection in text pipelines",
              "PII detection and redaction",
              "Toxicity and content filtering",
              "Abuse rate limiting",
            ],
            ref: { href: "/13-ai/10-ai-security", label: "Ch — AI Security" },
          },
          {
            id: "nlp-privacy",
            label: "Privacy and compliance",
            kind: "recommended",
            summary:
              "Text is full of personal data, which brings regulation into scope quickly.",
            topics: [
              "PII handling in training data",
              "Data retention for prompts and outputs",
              "On-premises versus API trade-offs",
              "Consent and purpose limitation",
            ],
          },
        ],
      },
      {
        id: "nlp-s5",
        title: "Interview preparation",
        duration: "4-5 weeks",
        goal: "NLP interviews combine architecture depth, task design and practical judgement.",
        build:
          "A public project with an evaluation report and an honest error analysis.",
        nodes: [
          {
            id: "nlp-theory-round",
            label: "Architecture round",
            summary:
              "Attention, positional encoding and tokenisation, asked precisely.",
            topics: [
              "Explain self-attention and its complexity",
              "Why positional encoding is needed",
              "Encoder versus decoder model choice",
              "Context length trade-offs",
            ],
          },
          {
            id: "nlp-design-round",
            label: "System design round",
            summary:
              "Design a search or extraction system with quality and cost targets.",
            topics: [
              "Retrieval architecture and reranking",
              "Evaluation plan before building",
              "Cost and latency budgeting",
              "Handling failure and fallback",
            ],
          },
          {
            id: "nlp-coding-round",
            label: "Coding round",
            summary:
              "Practical text processing and model usage rather than algorithm puzzles.",
            topics: [
              "Implementing a retrieval pipeline",
              "Writing an evaluation harness",
              "Data cleaning under time pressure",
              "PyTorch fundamentals",
            ],
          },
          {
            id: "nlp-judgement",
            label: "Judgement questions",
            summary:
              "When would you not use an LLM is now a standard question.",
            topics: [
              "Fine-tune versus prompt versus classical",
              "Diagnosing a quality regression",
              "Building an evaluation set from scratch",
              "Explaining trade-offs to product",
            ],
          },
          {
            id: "nlp-portfolio",
            label: "Portfolio",
            summary:
              "Measured results with error analysis beat model zoo demos.",
            topics: [
              "A task with a real accuracy number",
              "Error analysis and failure taxonomy",
              "A distillation or cost reduction case study",
              "Published evaluation methodology",
            ],
          },
        ],
      },
    ],
    tools: [
      "PyTorch",
      "Hugging Face Transformers",
      "spaCy",
      "sentence-transformers",
      "FAISS / pgvector",
      "PEFT / LoRA",
      "Weights & Biases",
    ],
    proofOfWork: [
      "A text task with a measured accuracy figure and error analysis",
      "A fine-tuned model that beats an API model on cost and quality",
      "A retrieval system with a documented evaluation set",
      "A published evaluation methodology for a language task",
    ],
  },

  {
    slug: "computer-vision-engineer",
    title: "Computer Vision Engineer",
    shortTitle: "Computer Vision",
    category: "AI & ML",
    mark: "CV",
    tagline:
      "Make machines see: detection, segmentation and recognition, running fast enough to be useful.",
    market:
      "Manufacturing quality control, medical imaging, retail analytics, autonomous systems and robotics. Less crowded than LLM work, with strong demand in industrial settings.",
    timeline: "8-12 months part-time",
    entryBar: "Python and machine learning fundamentals.",
    updated: "2026-08-31",
    prerequisites: [
      "Python and NumPy",
      "Linear algebra and calculus basics",
      "Neural network fundamentals",
    ],
    stages: [
      {
        id: "cv-s1",
        title: "Image fundamentals",
        duration: "5-6 weeks",
        goal: "Classical vision still solves many problems faster and cheaper than a network.",
        build:
          "Build a classical pipeline that solves a real inspection task without any deep learning.",
        nodes: [
          {
            id: "cv-basics",
            label: "Image representation",
            summary:
              "Colour spaces and sampling explain a surprising number of production bugs.",
            topics: [
              "Colour spaces and conversions",
              "Resolution, sampling and aliasing",
              "Image formats and compression artefacts",
              "Camera parameters and exposure",
            ],
          },
          {
            id: "cv-classical",
            label: "Classical techniques",
            summary:
              "Filters, edges and morphology — often sufficient and always fast.",
            topics: [
              "Convolution, filtering and denoising",
              "Edge and corner detection",
              "Morphological operations",
              "Thresholding and contours",
            ],
          },
          {
            id: "cv-geometry",
            label: "Geometry and calibration",
            summary:
              "Essential for any system where measurements matter.",
            topics: [
              "Camera models and intrinsics",
              "Distortion and calibration",
              "Homography and perspective transforms",
              "Stereo and depth basics",
            ],
          },
          {
            id: "cv-features",
            label: "Features and matching",
            summary:
              "Still used for tracking, stitching and registration.",
            topics: [
              "Keypoint detectors and descriptors",
              "Feature matching and RANSAC",
              "Image registration",
              "Optical flow",
            ],
          },
          {
            id: "cv-data",
            label: "Datasets and annotation",
            summary:
              "Vision projects live or die on annotation quality and consistency.",
            topics: [
              "Annotation formats and tooling",
              "Labelling guidelines and agreement",
              "Class imbalance in detection",
              "Train/validation splits that avoid leakage",
            ],
          },
        ],
      },
      {
        id: "cv-s2",
        title: "Deep learning for vision",
        duration: "6-8 weeks",
        goal: "The core model families and how to train them without fooling yourself.",
        build:
          "Train a detector on a custom dataset and report mAP with a proper error breakdown.",
        nodes: [
          {
            id: "cv-cnn",
            label: "Convolutional networks",
            summary:
              "Still dominant for many production vision tasks, especially at the edge.",
            topics: [
              "Convolution, pooling and receptive fields",
              "Backbone architectures and scaling",
              "Batch normalisation and regularisation",
              "Transfer learning from pretrained backbones",
            ],
          },
          {
            id: "cv-vit",
            label: "Vision transformers",
            summary:
              "The current state of the art at scale, with different data requirements.",
            topics: [
              "Patch embeddings and attention for images",
              "Data efficiency versus CNNs",
              "Hybrid architectures",
              "Self-supervised pretraining",
            ],
          },
          {
            id: "cv-detection",
            label: "Object detection",
            summary:
              "The most commercially requested vision task.",
            topics: [
              "One-stage versus two-stage detectors",
              "Anchor-based and anchor-free approaches",
              "Non-maximum suppression",
              "mAP and IoU evaluation",
            ],
          },
          {
            id: "cv-segmentation",
            label: "Segmentation",
            summary:
              "Where precise boundaries matter: medical, industrial and mapping.",
            topics: [
              "Semantic versus instance segmentation",
              "Encoder-decoder architectures",
              "Promptable segmentation models",
              "Dice, IoU and boundary metrics",
            ],
          },
          {
            id: "cv-training",
            label: "Training practice",
            summary:
              "Augmentation and validation discipline decide whether results transfer.",
            topics: [
              "Augmentation strategies that reflect reality",
              "Learning rate schedules and warmup",
              "Handling small datasets",
              "Diagnosing overfitting versus underfitting",
            ],
          },
        ],
      },
      {
        id: "cv-s3",
        title: "Applied vision systems",
        duration: "5-7 weeks",
        goal: "Real deployments have cameras, lighting, motion and awkward edge cases.",
        build:
          "Deploy a vision system on real captured footage and document every failure mode you found.",
        nodes: [
          {
            id: "cv-video",
            label: "Video and tracking",
            summary:
              "Temporal consistency changes both the architecture and the evaluation.",
            topics: [
              "Multi-object tracking",
              "Temporal smoothing and re-identification",
              "Frame sampling strategies",
              "Action recognition basics",
            ],
          },
          {
            id: "cv-multimodal",
            label: "Vision-language models",
            summary:
              "The fastest-moving area, and increasingly the fastest route to a prototype.",
            topics: [
              "CLIP-style contrastive models",
              "Zero-shot classification and retrieval",
              "Multimodal LLMs for visual questions",
              "When a VLM beats a trained detector",
            ],
          },
          {
            id: "cv-3d",
            label: "3D and depth",
            kind: "recommended",
            summary:
              "Robotics, AR and industrial measurement need geometry, not just pixels.",
            topics: [
              "Depth estimation approaches",
              "Point clouds and processing",
              "Neural rendering basics",
              "Sensor fusion",
            ],
          },
          {
            id: "cv-domain",
            label: "Domain gaps",
            summary:
              "The model works in the lab and fails on the factory floor. This is the classic failure.",
            topics: [
              "Lighting and camera variation",
              "Domain adaptation techniques",
              "Synthetic data and sim-to-real",
              "Continuous data collection",
            ],
          },
          {
            id: "cv-edge",
            label: "Edge deployment",
            summary:
              "Most industrial vision runs on constrained hardware, not a cloud GPU.",
            topics: [
              "Quantisation and pruning",
              "TensorRT, OpenVINO and mobile runtimes",
              "Latency and power budgets",
              "Hardware selection",
            ],
          },
        ],
      },
      {
        id: "cv-s4",
        title: "Production and MLOps",
        duration: "4-5 weeks",
        goal: "Vision models degrade quietly as the world changes in front of the camera.",
        build:
          "Ship a monitored vision service with drift detection and a labelled feedback loop.",
        nodes: [
          {
            id: "cv-serving",
            label: "Serving vision models",
            summary:
              "Throughput engineering for image and video workloads.",
            topics: [
              "Batching and GPU utilisation",
              "Streaming video ingestion",
              "Preprocessing on GPU",
              "Scaling for burst load",
            ],
          },
          {
            id: "cv-monitoring",
            label: "Monitoring and drift",
            summary:
              "A camera moved, the lighting changed, and accuracy fell without any alert.",
            topics: [
              "Input distribution monitoring",
              "Confidence distribution shifts",
              "Sampling outputs for review",
              "Automated retraining triggers",
            ],
          },
          {
            id: "cv-pipeline",
            label: "Data and training pipelines",
            summary:
              "Reproducibility matters more in vision because datasets are large and messy.",
            topics: [
              "Dataset versioning",
              "Experiment tracking",
              "Reproducible training runs",
              "Model registry and rollback",
            ],
          },
          {
            id: "cv-labelling",
            label: "Labelling operations",
            summary:
              "Ongoing annotation is a cost centre you will be asked to optimise.",
            topics: [
              "Active learning for label efficiency",
              "Quality control for annotators",
              "Pre-labelling with the current model",
              "Cost per labelled example",
            ],
          },
          {
            id: "cv-ethics",
            label: "Ethics and regulation",
            summary:
              "Face and biometric applications carry legal constraints that vary sharply by region.",
            topics: [
              "Biometric regulation and consent",
              "Bias across demographic groups",
              "Surveillance and proportionality",
              "Documentation and model cards",
            ],
          },
        ],
      },
      {
        id: "cv-s5",
        title: "Interview preparation",
        duration: "4-5 weeks",
        goal: "Interviews cover classical vision, deep learning and deployment constraints.",
        build:
          "A public project on real captured data with metrics and a failure analysis.",
        nodes: [
          {
            id: "cv-theory-round",
            label: "Fundamentals round",
            summary:
              "Convolution arithmetic and detection metrics are asked directly.",
            topics: [
              "Receptive field and output size calculation",
              "IoU, mAP and their pitfalls",
              "NMS behaviour and alternatives",
              "Augmentation choices and reasons",
            ],
          },
          {
            id: "cv-design-round",
            label: "System design round",
            summary:
              "Design a vision system for a described physical environment.",
            topics: [
              "Camera placement and constraints",
              "Model choice for the latency budget",
              "Handling occlusion and lighting",
              "Data collection strategy",
            ],
          },
          {
            id: "cv-coding-round",
            label: "Coding round",
            summary:
              "Image manipulation and pipeline code, sometimes with NumPy only.",
            topics: [
              "Implementing IoU and NMS from scratch",
              "Image preprocessing pipelines",
              "PyTorch dataset and training loop",
              "Debugging a training run",
            ],
          },
          {
            id: "cv-practical",
            label: "Practical judgement",
            summary:
              "Accuracy dropped in production. Diagnose it.",
            topics: [
              "Distinguishing data drift from model bug",
              "Deciding between more data and a better model",
              "Edge deployment trade-offs",
              "Cost per inference reasoning",
            ],
          },
          {
            id: "cv-portfolio",
            label: "Portfolio",
            summary:
              "Real-world data beats benchmark reproductions.",
            topics: [
              "A project on data you captured",
              "Metrics with error analysis",
              "An edge deployment with latency numbers",
              "Documented failure modes",
            ],
          },
        ],
      },
    ],
    tools: [
      "PyTorch",
      "OpenCV",
      "Ultralytics / detection frameworks",
      "TensorRT / OpenVINO",
      "Albumentations",
      "Weights & Biases",
      "CVAT",
    ],
    proofOfWork: [
      "A detector trained on data you collected, with mAP reported",
      "An edge deployment with measured latency and power",
      "A documented domain-gap investigation",
      "An active learning loop that reduced labelling cost",
    ],
  },

  {
    slug: "ai-agent-engineer",
    title: "AI Agent Engineer",
    shortTitle: "Agent Engineer",
    category: "AI & ML",
    mark: "AG",
    tagline:
      "Build LLM systems that take actions, use tools and recover from their own mistakes without a human watching.",
    market:
      "The fastest-moving specialism in applied AI. Every company that shipped a chatbot in 2024 is now trying to ship an agent, and few engineers have done it reliably.",
    timeline: "5-8 months part-time",
    entryBar: "Working software engineer with LLM API experience.",
    updated: "2026-08-31",
    prerequisites: [
      "Backend engineering experience",
      "Familiarity with LLM APIs and prompting",
      "Understanding of async programming",
    ],
    stages: [
      {
        id: "ag-s1",
        title: "Foundations of agentic systems",
        duration: "4-5 weeks",
        goal: "An agent is a control loop around a model. Understanding the loop is the whole job.",
        build:
          "Build a tool-using agent from scratch, without a framework, that completes a multi-step task.",
        nodes: [
          {
            id: "ag-loop",
            label: "The agent loop",
            summary:
              "Frameworks hide this. Interviews expect you to be able to write it yourself.",
            topics: [
              "Observe, decide, act, repeat",
              "Termination conditions and step limits",
              "State between iterations",
              "Why loops fail to terminate",
            ],
          },
          {
            id: "ag-tools",
            label: "Tool use",
            summary:
              "Tool definitions are prompts. Their design determines reliability.",
            topics: [
              "Tool schemas and descriptions that work",
              "Parameter validation and coercion",
              "Error messages the model can act on",
              "Limiting the tool surface",
            ],
          },
          {
            id: "ag-prompting",
            label: "Prompting for agents",
            summary:
              "Agent prompts differ from chat prompts: they must constrain behaviour, not just style.",
            topics: [
              "System prompt structure for agents",
              "Reasoning and planning prompts",
              "Output format enforcement",
              "Prompt versioning and testing",
            ],
            ref: { href: "/13-ai/02-prompt-engineering", label: "Ch — Prompt Engineering" },
          },
          {
            id: "ag-models",
            label: "Model selection",
            summary:
              "Capability, latency and cost differ enormously and change monthly.",
            topics: [
              "Reasoning models versus fast models",
              "Routing between models by task",
              "Context window management",
              "Provider differences in tool calling",
            ],
          },
          {
            id: "ag-frameworks",
            label: "Frameworks and when to skip them",
            summary:
              "Most production agents end up with less framework than they started with.",
            topics: [
              "What agent frameworks actually provide",
              "Debuggability versus convenience",
              "MCP and tool interoperability",
              "Building your own minimal harness",
            ],
          },
        ],
      },
      {
        id: "ag-s2",
        title: "Memory and context",
        duration: "4-6 weeks",
        goal: "Context management is the practical bottleneck in every real agent.",
        build:
          "An agent that handles a long task without exceeding context, with a documented compaction strategy.",
        nodes: [
          {
            id: "ag-context",
            label: "Context management",
            summary:
              "Context is a budget. Spending it well is the core engineering discipline.",
            topics: [
              "Token budgeting per component",
              "Compaction and summarisation strategies",
              "What to drop first",
              "Measuring context efficiency",
            ],
          },
          {
            id: "ag-memory",
            label: "Memory systems",
            summary:
              "Short-term, long-term and episodic memory, and the retrieval that makes them useful.",
            topics: [
              "Conversation memory and summarisation",
              "Persistent memory stores",
              "Retrieval for memory versus documents",
              "Memory staleness and conflicts",
            ],
          },
          {
            id: "ag-rag",
            label: "Retrieval for agents",
            summary:
              "Agents need retrieval on demand, not one shot at the start.",
            topics: [
              "Retrieval as a tool the agent calls",
              "Query rewriting and decomposition",
              "Reranking and result formatting",
              "Grounding and citation",
            ],
            ref: { href: "/13-ai/04-rag", label: "Ch — RAG" },
          },
          {
            id: "ag-state",
            label: "State and durability",
            summary:
              "Long-running agents must survive restarts, which most tutorials ignore.",
            topics: [
              "Externalising agent state",
              "Checkpointing and resumption",
              "Idempotent tool execution",
              "Handling partial completion",
            ],
          },
          {
            id: "ag-structured",
            label: "Structured output",
            summary:
              "Reliable parsing is what lets an agent integrate with real systems.",
            topics: [
              "Schema-constrained generation",
              "Validation and repair loops",
              "Typed tool results",
              "Handling schema violations",
            ],
          },
        ],
      },
      {
        id: "ag-s3",
        title: "Reliability",
        duration: "5-6 weeks",
        goal: "The gap between a demo and a product is entirely about failure handling.",
        build:
          "Take an agent from a 60% task success rate to over 90%, with the evaluation to prove it.",
        nodes: [
          {
            id: "ag-eval",
            label: "Evaluating agents",
            summary:
              "Without an eval set you are guessing. This is the single biggest differentiator.",
            topics: [
              "Task success definitions",
              "Building a regression suite of scenarios",
              "Trajectory evaluation versus outcome",
              "LLM-as-judge and its limits",
            ],
            ref: { href: "/13-ai/09-evaluation-hallucination", label: "Ch — Evaluation & Hallucination" },
          },
          {
            id: "ag-failure",
            label: "Failure modes",
            summary:
              "Agents fail in recognisable, catalogued ways. Knowing them speeds diagnosis.",
            topics: [
              "Loops and repeated actions",
              "Tool misuse and hallucinated parameters",
              "Premature termination",
              "Context poisoning from bad results",
            ],
          },
          {
            id: "ag-recovery",
            label: "Error recovery",
            summary:
              "Good agents recover; great ones do it without a human noticing.",
            topics: [
              "Retry with modified approach",
              "Backtracking and replanning",
              "Escalation to a human",
              "Partial success handling",
            ],
          },
          {
            id: "ag-guardrails",
            label: "Guardrails and constraints",
            summary:
              "Deterministic checks around a non-deterministic core.",
            topics: [
              "Preconditions and postconditions on tools",
              "Permission and approval gates",
              "Budget and step limits",
              "Deterministic validation of outputs",
            ],
          },
          {
            id: "ag-multiagent",
            label: "Multi-agent systems",
            kind: "recommended",
            summary:
              "Often proposed, rarely necessary. Knowing when it helps is the senior signal.",
            topics: [
              "Orchestrator and sub-agent patterns",
              "Context isolation between agents",
              "Coordination cost and latency",
              "When one agent is better",
            ],
          },
        ],
      },
      {
        id: "ag-s4",
        title: "Production agents",
        duration: "4-5 weeks",
        goal: "Cost, latency, security and observability for systems that act autonomously.",
        build:
          "Deploy an agent with full tracing, cost tracking, and a security review of its tool permissions.",
        nodes: [
          {
            id: "ag-observability",
            label: "Tracing and observability",
            summary:
              "You cannot debug an agent from logs alone. Traces are mandatory.",
            topics: [
              "Full trajectory tracing",
              "Token and cost attribution per step",
              "Replaying a failed run",
              "Dashboards for agent health",
            ],
          },
          {
            id: "ag-cost",
            label: "Cost and latency",
            summary:
              "Agents multiply token usage. Cost surprises are the usual reason they get cancelled.",
            topics: [
              "Cost per completed task",
              "Caching and prompt reuse",
              "Model routing for cheap steps",
              "Parallel tool execution",
            ],
            ref: { href: "/13-ai/11-cost-latency-optimization", label: "Ch — Cost & Latency" },
          },
          {
            id: "ag-security",
            label: "Agent security",
            summary:
              "An agent with tools is an attack surface with credentials.",
            topics: [
              "Prompt injection through tool results",
              "Least privilege for tool credentials",
              "Sandboxing code execution",
              "Confused deputy problems",
            ],
            ref: { href: "/13-ai/10-ai-security", label: "Ch — AI Security" },
          },
          {
            id: "ag-humanloop",
            label: "Human in the loop",
            summary:
              "Deciding what requires approval is a product and a safety decision.",
            topics: [
              "Approval gates for risky actions",
              "Confidence-based escalation",
              "Reviewing agent decisions",
              "Audit trails for autonomous actions",
            ],
          },
          {
            id: "ag-deployment",
            label: "Deployment patterns",
            summary:
              "Agents are long-running, stateful and bursty, which complicates deployment.",
            topics: [
              "Background jobs versus request/response",
              "Queueing and concurrency limits",
              "Timeout and cancellation",
              "Versioning agents safely",
            ],
          },
        ],
      },
      {
        id: "ag-s5",
        title: "Interview preparation",
        duration: "3-4 weeks",
        goal: "Interviews focus on reliability engineering, not on prompt cleverness.",
        build:
          "A public agent project with an evaluation suite and a written reliability report.",
        nodes: [
          {
            id: "ag-design-round",
            label: "System design round",
            summary:
              "Design an agent for a real workflow, with failure handling front and centre.",
            topics: [
              "Tool decomposition for a task",
              "Context and memory design",
              "Failure and escalation paths",
              "Cost and latency estimates",
            ],
          },
          {
            id: "ag-debug-round",
            label: "Debugging round",
            summary:
              "Here is a failing trajectory. What went wrong and how would you fix it.",
            topics: [
              "Reading a trace to find the failure point",
              "Distinguishing prompt, tool and model issues",
              "Proposing a targeted fix",
              "Preventing regression",
            ],
          },
          {
            id: "ag-coding-round",
            label: "Coding round",
            summary:
              "Implement an agent loop with tools, without a framework.",
            topics: [
              "Writing the loop and tool dispatch",
              "Error handling and retries",
              "Structured output parsing",
              "Testing non-deterministic code",
            ],
          },
          {
            id: "ag-eval-round",
            label: "Evaluation round",
            summary:
              "How would you know this agent got better. The question that separates candidates.",
            topics: [
              "Designing a task success metric",
              "Building an eval set from production traces",
              "Handling non-determinism in tests",
              "Measuring regression across versions",
            ],
          },
          {
            id: "ag-portfolio",
            label: "Portfolio",
            summary:
              "Reliability numbers are the currency. Demos without them are ignored.",
            topics: [
              "An agent with a published success rate",
              "The evaluation suite alongside it",
              "A reliability improvement case study",
              "Cost per task tracked over versions",
            ],
          },
        ],
      },
    ],
    tools: [
      "Claude / OpenAI APIs",
      "MCP",
      "LangGraph",
      "Vector databases",
      "OpenTelemetry / LangFuse",
      "Pydantic",
      "Python / TypeScript",
    ],
    proofOfWork: [
      "An agent with a published task success rate and eval suite",
      "A reliability case study: failure taxonomy and fixes",
      "A tool permission and security review write-up",
      "Cost per completed task tracked across versions",
    ],
  },

  {
    slug: "ai-solutions-architect",
    title: "AI Solutions Architect",
    shortTitle: "AI Architect",
    category: "AI & ML",
    mark: "AA",
    tagline:
      "Decide what AI a business should build, how it should be built, and what it will cost to run.",
    market:
      "Consultancies, cloud partners and enterprises running AI programmes. Named repeatedly in demand surveys as organisations move from experiments to production systems.",
    timeline: "6-9 months part-time",
    entryBar: "Senior engineering or architecture experience plus applied AI knowledge.",
    updated: "2026-08-31",
    prerequisites: [
      "Architecture or senior engineering background",
      "Hands-on experience with LLM applications",
      "Ability to write and present design documents",
    ],
    stages: [
      {
        id: "aa-s1",
        title: "Capability and use case selection",
        duration: "4-5 weeks",
        goal: "Most AI projects fail because the use case was wrong, not the technology.",
        build:
          "Assess five candidate use cases for a business and produce a prioritised recommendation with reasoning.",
        nodes: [
          {
            id: "aa-usecase",
            label: "Use case assessment",
            summary:
              "The highest-value skill in this role: saying no to the wrong project early.",
            topics: [
              "Value, feasibility and risk scoring",
              "Where determinism is required",
              "Tolerance for error in the workflow",
              "Build, buy or do nothing",
            ],
          },
          {
            id: "aa-capabilities",
            label: "What models can and cannot do",
            summary:
              "Calibrated expectations are what stakeholders are paying you for.",
            topics: [
              "Current model capabilities honestly stated",
              "Reliability ceilings on open-ended tasks",
              "Where hallucination is disqualifying",
              "Capability change over time",
            ],
            ref: { href: "/13-ai/01-llm-fundamentals", label: "Ch — LLM Fundamentals" },
          },
          {
            id: "aa-patterns",
            label: "Solution patterns",
            summary:
              "A small catalogue of patterns covers most enterprise AI requirements.",
            topics: [
              "Retrieval-augmented question answering",
              "Extraction and document processing",
              "Classification and routing",
              "Agentic workflow automation",
            ],
          },
          {
            id: "aa-roi",
            label: "Business case and ROI",
            summary:
              "Architecture proposals that lack a cost model do not get approved.",
            topics: [
              "Cost modelling per transaction",
              "Value quantification",
              "Pilot versus full rollout economics",
              "Measuring realised benefit",
            ],
          },
          {
            id: "aa-buildbuy",
            label: "Build versus buy",
            summary:
              "The vendor landscape changes quarterly, and lock-in is a real risk.",
            topics: [
              "Vendor evaluation criteria",
              "Portability and abstraction layers",
              "Total cost of ownership",
              "Exit strategy",
            ],
          },
        ],
      },
      {
        id: "aa-s2",
        title: "Designing AI systems",
        duration: "5-7 weeks",
        goal: "Architecture that survives contact with real data and real users.",
        build:
          "A reference architecture for a retrieval system, with data flow, security and cost documented.",
        nodes: [
          {
            id: "aa-rag-arch",
            label: "Retrieval architecture",
            summary:
              "The most requested enterprise AI pattern, and the one most often built badly.",
            topics: [
              "Ingestion, chunking and indexing design",
              "Hybrid search and reranking",
              "Permission-aware retrieval",
              "Freshness and reindexing strategy",
            ],
            ref: { href: "/13-ai/04-rag", label: "Ch — RAG" },
          },
          {
            id: "aa-data",
            label: "Data architecture for AI",
            summary:
              "AI programmes expose every existing data quality and governance weakness.",
            topics: [
              "Source data readiness assessment",
              "Access control inheritance",
              "PII handling in prompts and indexes",
              "Data residency constraints",
            ],
          },
          {
            id: "aa-integration",
            label: "Integration architecture",
            summary:
              "AI features live inside existing systems, not beside them.",
            topics: [
              "API and event integration",
              "Human workflow integration",
              "Fallback to existing processes",
              "Legacy system constraints",
            ],
          },
          {
            id: "aa-finetune",
            label: "Model strategy",
            summary:
              "Prompt, retrieve, fine-tune or train — with reasons and costs attached.",
            topics: [
              "Decision framework for adaptation",
              "Hosted versus self-hosted models",
              "Open-weight model viability",
              "Model upgrade and deprecation planning",
            ],
            ref: { href: "/13-ai/08-rag-vs-finetuning", label: "Ch — RAG vs Fine-Tuning" },
          },
          {
            id: "aa-nonfunctional",
            label: "Non-functional requirements",
            summary:
              "Latency, availability and cost budgets, set before building rather than discovered after.",
            topics: [
              "Latency budgets per component",
              "Availability and provider outage handling",
              "Throughput and rate limit planning",
              "Cost ceilings and controls",
            ],
          },
        ],
      },
      {
        id: "aa-s3",
        title: "Evaluation and quality",
        duration: "4-5 weeks",
        goal: "Architects who cannot define quality cannot defend the system in production.",
        build:
          "An evaluation framework for a described system, with acceptance criteria agreed with stakeholders.",
        nodes: [
          {
            id: "aa-eval-design",
            label: "Evaluation strategy",
            summary:
              "Acceptance criteria for a probabilistic system must be agreed up front.",
            topics: [
              "Defining acceptable quality with the business",
              "Golden datasets and their maintenance",
              "Automated versus human evaluation",
              "Regression testing across model changes",
            ],
            ref: { href: "/13-ai/09-evaluation-hallucination", label: "Ch — Evaluation & Hallucination" },
          },
          {
            id: "aa-risk",
            label: "Risk assessment",
            summary:
              "What happens when the system is wrong, and who is accountable.",
            topics: [
              "Failure impact analysis",
              "Confidence thresholds and abstention",
              "Human review requirements",
              "Liability and accountability",
            ],
          },
          {
            id: "aa-governance",
            label: "AI governance",
            summary:
              "Regulation is arriving, and enterprises need documented controls now.",
            topics: [
              "EU AI Act risk categories",
              "Model documentation and transparency",
              "Approval and review processes",
              "Inventory of AI systems",
            ],
          },
          {
            id: "aa-safety",
            label: "Safety and security",
            summary:
              "Prompt injection and data leakage are architecture concerns, not implementation details.",
            topics: [
              "Prompt injection at the architecture level",
              "Data leakage between tenants",
              "Output filtering and moderation",
              "Abuse and cost attacks",
            ],
            ref: { href: "/13-ai/10-ai-security", label: "Ch — AI Security" },
          },
          {
            id: "aa-monitoring",
            label: "Production monitoring",
            summary:
              "Quality drifts as models, data and users change.",
            topics: [
              "Quality sampling in production",
              "Cost and latency dashboards",
              "User feedback capture",
              "Incident response for AI failures",
            ],
          },
        ],
      },
      {
        id: "aa-s4",
        title: "Delivery and adoption",
        duration: "4-5 weeks",
        goal: "Most AI programmes stall between pilot and production. Architects unblock that.",
        build:
          "Take a pilot to a production rollout plan with staged adoption and success metrics.",
        nodes: [
          {
            id: "aa-pilot",
            label: "Pilot design",
            summary:
              "A pilot that cannot fail teaches nothing and proves nothing.",
            topics: [
              "Scoping a meaningful pilot",
              "Success criteria before starting",
              "User selection and feedback loops",
              "Deciding to stop",
            ],
          },
          {
            id: "aa-scaling",
            label: "Scaling to production",
            summary:
              "The pilot-to-production gap is where most programmes die.",
            topics: [
              "Operational readiness requirements",
              "Support model for AI features",
              "Capacity and rate limit planning",
              "Phased rollout",
            ],
          },
          {
            id: "aa-change",
            label: "Change management",
            summary:
              "Users who do not trust the system will not use it, regardless of accuracy.",
            topics: [
              "Setting user expectations",
              "Training and documentation",
              "Transparency about limitations",
              "Handling resistance",
            ],
          },
          {
            id: "aa-platform",
            label: "AI platform strategy",
            summary:
              "The second and third use case should be cheaper than the first.",
            topics: [
              "Shared components and reuse",
              "Central versus federated delivery",
              "Model access governance",
              "Internal enablement",
            ],
          },
          {
            id: "aa-docs",
            label: "Architecture documentation",
            summary:
              "The daily deliverable, and often the interview artefact.",
            topics: [
              "Architecture decision records",
              "Data flow and trust boundary diagrams",
              "Cost models",
              "Writing for executives and engineers",
            ],
          },
        ],
      },
      {
        id: "aa-s5",
        title: "Interview preparation",
        duration: "3-4 weeks",
        goal: "Interviews are design conversations with heavy emphasis on judgement and cost.",
        build:
          "Two reference architectures with cost models and evaluation plans, written up publicly.",
        nodes: [
          {
            id: "aa-design-round",
            label: "Architecture round",
            summary:
              "Design an enterprise AI system live, including what you would not build.",
            topics: [
              "Requirements and constraints first",
              "Component choices with justification",
              "Cost and latency estimation aloud",
              "Failure and fallback design",
            ],
          },
          {
            id: "aa-case-round",
            label: "Case study round",
            summary:
              "Common in consultancies: a business brief and a presented recommendation.",
            topics: [
              "Assessing use case viability",
              "Phased delivery proposal",
              "Risk identification",
              "Presenting to a non-technical panel",
            ],
          },
          {
            id: "aa-technical",
            label: "Technical depth round",
            summary:
              "Architects who cannot go deep lose credibility quickly.",
            topics: [
              "Retrieval quality debugging",
              "Fine-tuning versus retrieval reasoning",
              "Token economics arithmetic",
              "Evaluation methodology",
            ],
          },
          {
            id: "aa-governance-round",
            label: "Governance round",
            summary:
              "Increasingly present, especially in regulated industries.",
            topics: [
              "Regulatory classification of a system",
              "Documentation requirements",
              "Handling a model deprecation",
              "Auditability of AI decisions",
            ],
          },
          {
            id: "aa-behavioural",
            label: "Behavioural round",
            summary:
              "Saying no to an executive's favourite AI idea is part of the job.",
            topics: [
              "Talking a stakeholder out of a use case",
              "A project you recommended stopping",
              "Managing inflated expectations",
              "Handling a failed pilot",
            ],
          },
        ],
      },
    ],
    tools: [
      "Claude / OpenAI APIs",
      "Vector databases",
      "Cloud AI platforms",
      "Evaluation frameworks",
      "C4 / architecture tooling",
      "Cost modelling",
    ],
    proofOfWork: [
      "Two published reference architectures with cost models",
      "A use case assessment framework applied to real candidates",
      "An evaluation plan with agreed acceptance criteria",
      "A pilot-to-production rollout you led",
    ],
  },

  {
    slug: "ml-research-scientist",
    title: "ML Research Scientist",
    shortTitle: "Research Scientist",
    category: "AI & ML",
    mark: "RS",
    tagline:
      "Push the method forward: read the literature, form hypotheses, run rigorous experiments, and publish what holds.",
    market:
      "Small, highly competitive and concentrated in labs, big tech and well-funded startups. A PhD is common but demonstrated publications or reproductions can substitute.",
    timeline: "18-30 months part-time",
    entryBar: "Strong mathematics and a genuine appetite for reading papers. The hardest track here.",
    updated: "2026-08-31",
    prerequisites: [
      "Linear algebra, calculus and probability at degree level",
      "Strong Python and PyTorch",
      "Comfort reading academic papers",
    ],
    stages: [
      {
        id: "rs-s1",
        title: "Mathematical foundations",
        duration: "12-16 weeks",
        goal: "Research requires derivation, not just application. This stage cannot be shortened.",
        build:
          "Derive and implement backpropagation, an optimiser and attention from scratch, with tests.",
        nodes: [
          {
            id: "rs-linalg",
            label: "Linear algebra",
            summary:
              "The language of every architecture and every proof you will read.",
            topics: [
              "Matrix decompositions and eigenvalues",
              "Vector spaces and projections",
              "Matrix calculus and gradients",
              "Numerical stability",
            ],
          },
          {
            id: "rs-probability",
            label: "Probability and statistics",
            summary:
              "Generative models and uncertainty quantification are built on it.",
            topics: [
              "Distributions and conjugacy",
              "Maximum likelihood and Bayesian inference",
              "Information theory: entropy, KL divergence",
              "Concentration inequalities",
            ],
          },
          {
            id: "rs-optimisation",
            label: "Optimisation",
            summary:
              "Why training works, when it fails, and what the optimiser is actually doing.",
            topics: [
              "Convexity and gradient descent",
              "Stochastic optimisation and variance",
              "Adaptive methods and their behaviour",
              "Loss landscapes and initialisation",
            ],
          },
          {
            id: "rs-learning-theory",
            label: "Learning theory",
            summary:
              "Generalisation, capacity and the questions the field still cannot answer.",
            topics: [
              "Bias-variance and generalisation bounds",
              "Overparameterisation and double descent",
              "Regularisation as inductive bias",
              "Scaling laws",
            ],
          },
          {
            id: "rs-implementation",
            label: "Implementing from scratch",
            summary:
              "You do not understand a method until you have implemented it without a library.",
            topics: [
              "Autograd from first principles",
              "Attention and transformer blocks",
              "Optimisers implemented manually",
              "Verifying gradients numerically",
            ],
          },
        ],
      },
      {
        id: "rs-s2",
        title: "Reading and reproducing",
        duration: "12-16 weeks",
        goal: "The research skill that compounds: reading critically and reproducing reliably.",
        build:
          "Reproduce three papers from scratch and publish the code with an honest report on what did not replicate.",
        nodes: [
          {
            id: "rs-reading",
            label: "Reading papers",
            summary:
              "Volume plus scepticism. Most claims do not survive careful reading.",
            topics: [
              "Efficient reading strategies",
              "Identifying the actual contribution",
              "Spotting weak baselines and cherry-picking",
              "Tracking a research area over time",
            ],
          },
          {
            id: "rs-reproduction",
            label: "Reproduction",
            summary:
              "The most respected portfolio artefact for someone without publications.",
            topics: [
              "Working from paper to implementation",
              "Handling missing hyperparameters",
              "Compute-constrained reproduction",
              "Reporting failures honestly",
            ],
          },
          {
            id: "rs-experiments",
            label: "Experimental design",
            summary:
              "Rigour is what distinguishes research from tinkering.",
            topics: [
              "Ablations that isolate the mechanism",
              "Seeds, variance and error bars",
              "Fair baseline construction",
              "Avoiding test set contamination",
            ],
          },
          {
            id: "rs-tooling",
            label: "Research engineering",
            summary:
              "Bad tooling wastes more research time than bad ideas.",
            topics: [
              "Experiment tracking and configuration",
              "Reproducible environments and seeds",
              "Efficient data loading",
              "Debugging training instability",
            ],
          },
          {
            id: "rs-compute",
            label: "Working with limited compute",
            summary:
              "Almost everyone outside a frontier lab is compute-constrained.",
            topics: [
              "Scaled-down proxy experiments",
              "Mixed precision and gradient accumulation",
              "Distributed training basics",
              "Choosing experiments by information gained",
            ],
          },
        ],
      },
      {
        id: "rs-s3",
        title: "Specialisation",
        duration: "16-20 weeks",
        goal: "Research careers are built on depth in one area, not breadth across many.",
        build:
          "Reach the frontier of one subfield: read everything current and identify an unanswered question.",
        nodes: [
          {
            id: "rs-architectures",
            label: "Architectures and training",
            summary:
              "How current models are actually built and trained at scale.",
            topics: [
              "Transformer variants and efficiency",
              "Pretraining objectives",
              "Scaling laws and compute allocation",
              "Long context approaches",
            ],
          },
          {
            id: "rs-alignment",
            label: "Alignment and post-training",
            summary:
              "One of the most active and best-funded research areas.",
            topics: [
              "Instruction tuning and preference learning",
              "RLHF and its alternatives",
              "Reward modelling and reward hacking",
              "Evaluation of alignment",
            ],
          },
          {
            id: "rs-interpretability",
            label: "Interpretability",
            summary:
              "Understanding what models compute internally, and a growing hiring area.",
            topics: [
              "Probing and representation analysis",
              "Circuit and feature analysis",
              "Sparse autoencoders",
              "Causal intervention methods",
            ],
          },
          {
            id: "rs-efficiency",
            label: "Efficiency research",
            kind: "recommended",
            summary:
              "Quantisation, sparsity and inference optimisation have direct commercial value.",
            topics: [
              "Quantisation methods and quality",
              "Sparsity and mixture of experts",
              "Distillation approaches",
              "Inference-time compute scaling",
            ],
          },
          {
            id: "rs-evaluation",
            label: "Evaluation research",
            summary:
              "Benchmarks are saturating and contaminated. Better evaluation is genuinely open work.",
            topics: [
              "Benchmark design and contamination",
              "Capability elicitation",
              "Human evaluation methodology",
              "Measuring reasoning claims",
            ],
          },
        ],
      },
      {
        id: "rs-s4",
        title: "Producing research",
        duration: "20-26 weeks",
        goal: "Original contribution, written up to a standard reviewers accept.",
        build:
          "Complete one original project from question to preprint, with code and reproducible results.",
        nodes: [
          {
            id: "rs-questions",
            label: "Finding research questions",
            summary:
              "The hardest and least taught skill in research.",
            topics: [
              "Gaps in the literature",
              "Questions that are tractable with your compute",
              "Negative results worth reporting",
              "Scoping to a publishable unit",
            ],
          },
          {
            id: "rs-writing",
            label: "Scientific writing",
            summary:
              "A good result written badly does not get accepted or cited.",
            topics: [
              "Paper structure and narrative",
              "Figures that carry the argument",
              "Precise claims and stated limitations",
              "Related work positioning",
            ],
          },
          {
            id: "rs-review",
            label: "Peer review",
            summary:
              "Reviewing teaches you what reviewers look for in your own work.",
            topics: [
              "Reviewing papers constructively",
              "Responding to reviews",
              "Rebuttal strategy",
              "Venue selection",
            ],
          },
          {
            id: "rs-collaboration",
            label: "Collaboration",
            summary:
              "Modern research is collaborative; solo work is rare and slow.",
            topics: [
              "Working with co-authors",
              "Open-source research contributions",
              "Building a public research profile",
              "Finding mentors and advisors",
            ],
          },
          {
            id: "rs-ethics",
            label: "Research ethics",
            summary:
              "Dual use, data provenance and honest reporting.",
            topics: [
              "Data licensing and provenance",
              "Dual use considerations",
              "Reporting standards and reproducibility",
              "Responsible disclosure of capabilities",
            ],
          },
        ],
      },
      {
        id: "rs-s5",
        title: "Interview preparation",
        duration: "6-8 weeks",
        goal: "Research interviews test depth, taste and the ability to defend your own work.",
        build:
          "A public research portfolio: reproductions, a preprint, and clean, documented code.",
        nodes: [
          {
            id: "rs-maths-round",
            label: "Mathematics round",
            summary:
              "Derivations on a whiteboard are standard for research positions.",
            topics: [
              "Derive backpropagation for a given layer",
              "Attention complexity and memory",
              "Probability and expectation problems",
              "Optimisation behaviour questions",
            ],
          },
          {
            id: "rs-paper-round",
            label: "Paper discussion",
            summary:
              "Discuss a recent paper critically, including what you think is wrong with it.",
            topics: [
              "Summarising a contribution precisely",
              "Identifying weaknesses in method",
              "Proposing follow-up experiments",
              "Placing it in the literature",
            ],
          },
          {
            id: "rs-own-work",
            label: "Defending your work",
            summary:
              "The core of a research interview: your project, questioned hard.",
            topics: [
              "Explaining your contribution clearly",
              "Justifying design choices",
              "Discussing limitations honestly",
              "What you would do with more compute",
            ],
          },
          {
            id: "rs-coding-round",
            label: "Coding round",
            summary:
              "Implement a method from a description, in PyTorch, correctly.",
            topics: [
              "Implementing a layer or loss from a paper",
              "Debugging a training loop",
              "Efficient tensor operations",
              "Numerical stability",
            ],
          },
          {
            id: "rs-portfolio",
            label: "Portfolio",
            summary:
              "Without publications, reproductions and preprints are the accepted substitute.",
            topics: [
              "Reproductions with honest reports",
              "A preprint or workshop paper",
              "Open-source research code",
              "A public research blog",
            ],
          },
        ],
      },
    ],
    tools: [
      "PyTorch",
      "JAX",
      "Weights & Biases",
      "Hugging Face",
      "LaTeX",
      "Slurm / distributed training",
      "arXiv",
    ],
    proofOfWork: [
      "Three paper reproductions with honest replication reports",
      "A preprint or workshop paper",
      "Open-source research code others have used",
      "A public research blog with technical depth",
    ],
  },

  {
    slug: "recommender-systems-engineer",
    title: "Recommender Systems Engineer",
    shortTitle: "RecSys",
    category: "AI & ML",
    mark: "RE",
    tagline:
      "Decide what a hundred million people see next, at low latency, and prove it made things better.",
    market:
      "Every marketplace, streaming service, social platform and large retailer runs recommendations. The revenue link is direct, which makes the role well funded and heavily measured.",
    timeline: "8-12 months part-time",
    entryBar: "Machine learning and backend engineering experience.",
    updated: "2026-08-31",
    prerequisites: [
      "Machine learning fundamentals",
      "Strong Python and SQL",
      "Backend and distributed systems basics",
    ],
    stages: [
      {
        id: "rec-s1",
        title: "Recommendation fundamentals",
        duration: "5-6 weeks",
        goal: "The classical methods still form the baseline every new model is measured against.",
        build:
          "Build collaborative filtering and content-based recommenders and compare them offline.",
        nodes: [
          {
            id: "rec-cf",
            label: "Collaborative filtering",
            summary:
              "The foundation, and still competitive when implemented well.",
            topics: [
              "User-based and item-based approaches",
              "Matrix factorisation and ALS",
              "Implicit versus explicit feedback",
              "Cold start problems",
            ],
          },
          {
            id: "rec-content",
            label: "Content-based methods",
            summary:
              "Essential for cold start and for explaining recommendations.",
            topics: [
              "Item feature engineering",
              "Embedding-based similarity",
              "Hybrid approaches",
              "Metadata quality dependence",
            ],
          },
          {
            id: "rec-eval-offline",
            label: "Offline evaluation",
            summary:
              "Offline metrics mislead constantly, and knowing how is a senior signal.",
            topics: [
              "Precision, recall and NDCG at k",
              "Temporal splits versus random splits",
              "Popularity bias in evaluation",
              "Why offline gains often vanish online",
            ],
          },
          {
            id: "rec-data",
            label: "Interaction data",
            summary:
              "Logged behaviour is biased by the system that produced it.",
            topics: [
              "Implicit signals and their noise",
              "Position and presentation bias",
              "Feedback loops and rich-get-richer",
              "Logging for future training",
            ],
          },
          {
            id: "rec-objectives",
            label: "Defining the objective",
            summary:
              "Optimising clicks alone reliably degrades the product.",
            topics: [
              "Engagement versus satisfaction",
              "Multi-objective trade-offs",
              "Long-term value modelling",
              "Guardrail metrics",
            ],
          },
        ],
      },
      {
        id: "rec-s2",
        title: "Modern architectures",
        duration: "6-7 weeks",
        goal: "The two-stage retrieval and ranking architecture used by nearly every large system.",
        build:
          "Implement a two-tower retrieval model and a ranking model, and measure the pipeline end to end.",
        nodes: [
          {
            id: "rec-twostage",
            label: "Retrieval and ranking",
            summary:
              "The architecture that makes recommendation tractable at scale.",
            topics: [
              "Candidate generation strategies",
              "Two-tower retrieval models",
              "Ranking with rich features",
              "Reranking for diversity and business rules",
            ],
          },
          {
            id: "rec-embeddings",
            label: "Embeddings and ANN search",
            summary:
              "Vector retrieval at scale, with latency budgets measured in milliseconds.",
            topics: [
              "Learning item and user embeddings",
              "Approximate nearest neighbour indexes",
              "Index refresh and freshness",
              "Recall versus latency tuning",
            ],
          },
          {
            id: "rec-sequence",
            label: "Sequential models",
            summary:
              "Session and sequence models capture intent that static profiles miss.",
            topics: [
              "Session-based recommendation",
              "Transformer models for sequences",
              "Short-term versus long-term interest",
              "Real-time sequence features",
            ],
          },
          {
            id: "rec-features",
            label: "Feature engineering and stores",
            summary:
              "Training/serving skew is the most common production bug in this field.",
            topics: [
              "User, item and context features",
              "Point-in-time correctness",
              "Feature stores and consistency",
              "Real-time feature computation",
            ],
          },
          {
            id: "rec-bandits",
            label: "Exploration",
            summary:
              "Without exploration the system only ever learns about what it already shows.",
            topics: [
              "Multi-armed and contextual bandits",
              "Exploration versus exploitation trade-off",
              "Off-policy evaluation",
              "Cold start via exploration",
            ],
          },
        ],
      },
      {
        id: "rec-s3",
        title: "Serving at scale",
        duration: "5-6 weeks",
        goal: "A recommender is a low-latency distributed system that happens to contain models.",
        build:
          "Serve recommendations under a 100ms budget with caching, fallbacks and measured tail latency.",
        nodes: [
          {
            id: "rec-latency",
            label: "Latency engineering",
            summary:
              "Tail latency directly affects revenue in recommendation surfaces.",
            topics: [
              "Budget allocation across pipeline stages",
              "Caching strategies and invalidation",
              "Precomputation versus real-time",
              "p99 latency and timeouts",
            ],
          },
          {
            id: "rec-serving",
            label: "Model serving",
            summary:
              "Serving two models per request, tens of thousands of times per second.",
            topics: [
              "Inference optimisation",
              "Batching and hardware choice",
              "Model versioning and rollout",
              "Graceful degradation to fallbacks",
            ],
          },
          {
            id: "rec-freshness",
            label: "Freshness and updates",
            summary:
              "New items and changing interests need to reach the system quickly.",
            topics: [
              "Incremental index updates",
              "Near-real-time feature updates",
              "Model retraining cadence",
              "Handling item churn",
            ],
          },
          {
            id: "rec-scale",
            label: "Scale and cost",
            summary:
              "Recommendation infrastructure is often among the largest compute costs.",
            topics: [
              "Sharding and partitioning strategies",
              "Cost per thousand recommendations",
              "Capacity planning for peaks",
              "Efficiency versus quality trade-offs",
            ],
          },
          {
            id: "rec-monitoring",
            label: "Monitoring",
            summary:
              "Silent degradation is common: the system still returns results, just worse ones.",
            topics: [
              "Model and feature drift detection",
              "Coverage and catalogue utilisation",
              "Latency and error dashboards",
              "Alerting on business metrics",
            ],
          },
        ],
      },
      {
        id: "rec-s4",
        title: "Measurement and product impact",
        duration: "4-6 weeks",
        goal: "Recommenders are judged by online experiments, not offline metrics.",
        build:
          "Run an A/B test on a recommendation change, with guardrails and a written decision memo.",
        nodes: [
          {
            id: "rec-ab",
            label: "Online experimentation",
            summary:
              "The only measurement that counts, and the one interviews focus on.",
            topics: [
              "Experiment design for ranking changes",
              "Interference and network effects",
              "Long-term holdouts",
              "Novelty effects",
            ],
          },
          {
            id: "rec-metrics",
            label: "Metrics and trade-offs",
            summary:
              "Optimising one metric almost always degrades another.",
            topics: [
              "Engagement, retention and revenue",
              "Diversity, novelty and serendipity",
              "Creator and supply-side health",
              "Guardrails against harmful optimisation",
            ],
          },
          {
            id: "rec-fairness",
            label: "Fairness and responsibility",
            summary:
              "Recommenders shape what people see, which brings scrutiny and regulation.",
            topics: [
              "Popularity bias and long-tail exposure",
              "Filter bubbles and diversity interventions",
              "Fairness across user and item groups",
              "Regulatory transparency requirements",
            ],
          },
          {
            id: "rec-business",
            label: "Business rules and constraints",
            summary:
              "Real systems must honour inventory, contracts and editorial decisions.",
            topics: [
              "Hard constraints in reranking",
              "Promotion and sponsored placement",
              "Blocklists and compliance filtering",
              "Balancing rules against model output",
            ],
          },
          {
            id: "rec-debug",
            label: "Debugging recommendations",
            summary:
              "Why did this user see this item is a question you will answer constantly.",
            topics: [
              "Explainability tooling for recommendations",
              "Tracing a recommendation end to end",
              "Diagnosing quality complaints",
              "Distinguishing model from data issues",
            ],
          },
        ],
      },
      {
        id: "rec-s5",
        title: "Interview preparation",
        duration: "4-5 weeks",
        goal: "Interviews are system design heavy, with modelling and experimentation rounds.",
        build:
          "A public recommender project with offline metrics and a written evaluation critique.",
        nodes: [
          {
            id: "rec-design-round",
            label: "System design round",
            summary:
              "Design the feed. The archetypal recommender interview question.",
            topics: [
              "Two-stage architecture from scratch",
              "Latency budget allocation",
              "Feature and data pipeline design",
              "Cold start handling",
            ],
            ref: { href: "/07-system-design/02-scalable-apis", label: "Ch — Scalable APIs" },
          },
          {
            id: "rec-ml-round",
            label: "Modelling round",
            summary:
              "Model choice, loss functions and negative sampling get asked precisely.",
            topics: [
              "Negative sampling strategies",
              "Loss functions for ranking",
              "Handling implicit feedback",
              "Embedding dimensionality choices",
            ],
          },
          {
            id: "rec-experiment-round",
            label: "Experimentation round",
            summary:
              "How would you know this recommender is better.",
            topics: [
              "Metric selection and guardrails",
              "Experiment design pitfalls",
              "Offline to online correlation",
              "Deciding to ship or roll back",
            ],
          },
          {
            id: "rec-coding-round",
            label: "Coding round",
            summary:
              "Practical implementation and data manipulation at scale.",
            topics: [
              "Implementing NDCG or MRR",
              "Building a training dataset with correct time splits",
              "Efficient candidate generation",
              "PySpark or SQL over interaction logs",
            ],
          },
          {
            id: "rec-portfolio",
            label: "Portfolio",
            summary:
              "A working recommender with honest evaluation and a critique of its own metrics.",
            topics: [
              "End-to-end project with serving",
              "Offline evaluation with temporal splits",
              "Written critique of metric limitations",
              "A bandit or exploration experiment",
            ],
          },
        ],
      },
    ],
    tools: [
      "PyTorch",
      "Spark",
      "Feature stores",
      "FAISS / ScaNN",
      "Kafka",
      "Redis",
      "Experimentation platforms",
    ],
    proofOfWork: [
      "An end-to-end recommender with a serving layer",
      "Offline evaluation using temporal splits, with limitations stated",
      "An A/B test analysis with guardrail metrics",
      "A latency optimisation case study",
    ],
  },
];
