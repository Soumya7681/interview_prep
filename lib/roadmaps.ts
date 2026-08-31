/**
 * Career roadmap tracks for the dedicated /roadmaps area.
 *
 * This file is the single place to edit when a roadmap changes. The map view,
 * the index cards, the progress percentages, and the sitemap are all derived
 * from it — no other file needs touching to add a track, a stage, or a node.
 *
 * Node ids are the persistence key for study progress (localStorage), so they
 * must stay stable once published. Renaming a node's `label` is safe; renaming
 * its `id` silently resets that node's tick for every existing reader.
 *
 * Long-form narrative, code examples, and interview questions live in the book
 * chapters under 14-roadmaps/ — a track links to its chapter via `chapter`, and
 * a node links to a specific chapter via `ref`.
 */

/** How essential a node is. Drives the node's colour in the map. */
export type NodeKind = "core" | "recommended" | "optional";

export type RoadmapNode = {
  /** Stable, globally unique. Used as the localStorage progress key. */
  id: string;
  label: string;
  kind?: NodeKind; // default "core"
  /** One or two sentences shown at the top of the detail panel. */
  summary?: string;
  /** Concrete sub-topics to study. */
  topics?: string[];
  /** Chapter slug inside this book, e.g. "13-ai/04-rag". */
  ref?: { href: string; label: string };
  /** External free references. */
  links?: Array<{ href: string; label: string }>;
};

export type RoadmapStage = {
  id: string;
  title: string;
  duration: string;
  goal: string;
  /** Nodes hang off the stage's spine, alternating left and right. */
  nodes: RoadmapNode[];
  /** The artefact that proves the stage is finished. */
  build: string;
};

export type RoadmapTrack = {
  slug: string;
  title: string;
  shortTitle: string;
  /** Two-letter mark used in the index cards and the map header. */
  mark: string;
  tagline: string;
  /** Who hires for it. No salary claims — we would be inventing them. */
  market: string;
  timeline: string;
  entryBar: string;
  /** ISO date of the last content review, shown on the card. */
  updated: string;
  prerequisites: string[];
  stages: RoadmapStage[];
  tools: string[];
  proofOfWork: string[];
  /** Companion long-form chapter. */
  chapter: { href: string; label: string };
};

const AI_ENGINEER: RoadmapTrack = {
  slug: "ai-engineer",
  title: "AI Engineer",
  shortTitle: "AI Engineer",
  mark: "AI",
  tagline:
    "Build products on top of foundation models: retrieval, tool use, evaluation, and the plumbing that keeps them cheap and reliable.",
  market:
    "The widest-open AI role right now, and the fastest jump from full-stack. Hired by product startups, SaaS companies, agencies, and enterprise innovation teams. No research background needed.",
  timeline: "6-9 months part-time",
  entryBar: "Any working developer. No maths degree, no ML theory required.",
  updated: "2026-08-31",
  prerequisites: [
    "Python or TypeScript at working level",
    "HTTP, REST, JSON",
    "SQL basics",
    "Git and one deploy target you have used",
  ],
  stages: [
    {
      id: "ai-s1",
      title: "Model foundations",
      duration: "3-4 weeks",
      goal: "Stop treating the model as magic. Know what it charges you and where it breaks.",
      build: "A streaming CLI chat tool that prints tokens used and cost after every turn.",
      nodes: [
        {
          id: "ai-tokens",
          label: "Tokens & context windows",
          summary:
            "Everything you send and receive is billed per token, and the context window is a hard ceiling — not a soft suggestion.",
          topics: [
            "Tokenisation: why code and non-English text cost more",
            "Context window vs max output tokens",
            "What happens when you exceed it (truncation, 400s)",
            "Counting tokens before a request instead of guessing",
          ],
          ref: { href: "/13-ai/01-llm-fundamentals", label: "Ch 77 — LLM Fundamentals" },
        },
        {
          id: "ai-sampling",
          label: "Sampling & determinism",
          summary:
            "The same prompt can return different text. Know which knobs exist and which your model still accepts.",
          topics: [
            "Temperature and top-p",
            "Stop sequences",
            "Why the newest models drop sampling params entirely",
            "Designing tests around a non-deterministic dependency",
          ],
        },
        {
          id: "ai-streaming",
          label: "Streaming responses",
          summary:
            "Users forgive slow. They do not forgive a blank screen. Streaming is a product requirement, not an optimisation.",
          topics: [
            "Server-sent events end to end",
            "Backpressure and client disconnects",
            "Time-to-first-token vs total latency",
            "Why long outputs need streaming to avoid HTTP timeouts",
          ],
          ref: { href: "/13-ai/07-streaming-responses", label: "Ch 83 — Streaming Responses" },
        },
        {
          id: "ai-structured-output",
          label: "Structured output",
          summary:
            "Ask for a JSON schema, not for good behaviour. This one change deletes a whole class of parsing bugs.",
          topics: [
            "JSON schema via output_config",
            "Why 'reply only in JSON' pleas fail at scale",
            "Server-side validation anyway",
            "Enums to constrain classification labels",
          ],
        },
        {
          id: "ai-cost-model",
          label: "Cost & model choice",
          kind: "core",
          summary:
            "Capability, price, and speed are three axes. Picking one model for everything is the most common junior mistake.",
          topics: [
            "Cost per request, not cost per million tokens",
            "Routing easy traffic to a cheaper model",
            "Batch APIs for non-interactive work",
            "Budget alerts before the invoice",
          ],
          ref: {
            href: "/13-ai/11-cost-latency-optimization",
            label: "Ch 87 — Cost & Latency Optimization",
          },
        },
      ],
    },
    {
      id: "ai-s2",
      title: "Prompting & evaluation",
      duration: "3-4 weeks",
      goal: "Make prompt changes measurable. This is the stage that gets you hired.",
      build:
        "An eval harness that scores three prompt versions across 50 labelled cases and prints a comparison table.",
      nodes: [
        {
          id: "ai-prompt-structure",
          label: "Prompt structure",
          summary:
            "Role, task, context, constraints, request — in that order, so the stable part can be cached.",
          topics: [
            "System prompt vs user message responsibilities",
            "Constraints and what to do when information is missing",
            "Saying it once, at normal volume",
            "XML tags to separate instructions from data",
          ],
          ref: { href: "/13-ai/02-prompt-engineering", label: "Ch 78 — Prompt Engineering" },
        },
        {
          id: "ai-few-shot",
          label: "Few-shot examples",
          kind: "recommended",
          summary:
            "Use examples when the format is easier to show than to describe. The model copies their length and shape, so choose deliberately.",
          topics: [
            "Picking examples that cover edge cases",
            "Example count vs token cost",
            "Why examples beat adjectives for tone",
          ],
        },
        {
          id: "ai-golden-set",
          label: "Golden sets & rubrics",
          summary:
            "A fixed set of labelled cases plus a rubric a second person could apply. Without this, every prompt opinion is a vibe.",
          topics: [
            "50-200 cases, including the failures you have seen",
            "Writing a rubric that two reviewers agree on",
            "Freezing the set so results stay comparable",
            "Knowing when a small-sample win is noise",
          ],
          ref: {
            href: "/13-ai/09-evaluation-hallucination",
            label: "Ch 85 — Evaluation & Hallucination",
          },
        },
        {
          id: "ai-llm-judge",
          label: "LLM-as-judge",
          kind: "recommended",
          summary:
            "A model can score outputs at scale, but the judge itself needs auditing against human labels.",
          topics: [
            "Pairwise comparison over absolute scoring",
            "Human spot checks on the judge",
            "Position and verbosity bias",
          ],
        },
        {
          id: "ai-prompt-ci",
          label: "Regression tests in CI",
          summary:
            "Prompts are code. A prompt edit that ships without a test run is an unreviewed deploy.",
          topics: [
            "Blocking a merge on an eval drop",
            "Tolerances: absolute gates block everything, none block nothing",
            "Versioning prompts so a regression is attributable",
          ],
        },
      ],
    },
    {
      id: "ai-s3",
      title: "Retrieval (RAG)",
      duration: "4-6 weeks",
      goal: "Ground answers in real documents, and prove the grounding works.",
      build: "Document Q&A over your own PDFs that cites sources and reports retrieval hit rate.",
      nodes: [
        {
          id: "ai-chunking",
          label: "Chunking",
          summary:
            "Chunk size decides retrieval quality more than the model does. Most bad RAG is bad chunking.",
          topics: [
            "Fixed-size vs semantic vs structural chunking",
            "Overlap and why it costs you",
            "Keeping headings and tables intact",
            "Metadata on every chunk",
          ],
          ref: { href: "/13-ai/04-rag", label: "Ch 80 — RAG Pipeline" },
        },
        {
          id: "ai-embeddings",
          label: "Embeddings & vector search",
          summary: "Text becomes vectors; similarity becomes a distance query.",
          topics: [
            "Embedding models and dimensions",
            "Cosine vs dot product",
            "ANN indexes: HNSW, IVF",
            "Re-embedding cost when you switch models",
          ],
          ref: {
            href: "/13-ai/03-embeddings-vector-search",
            label: "Ch 79 — Embeddings & Vector Search",
          },
        },
        {
          id: "ai-vector-store",
          label: "Vector store",
          summary: "pgvector if you already run Postgres. A dedicated store when scale demands it.",
          topics: [
            "Postgres + pgvector",
            "Qdrant, Milvus, managed options",
            "Filtering by metadata alongside vector search",
            "Index build time and memory",
          ],
        },
        {
          id: "ai-hybrid-search",
          label: "Hybrid search & reranking",
          kind: "recommended",
          summary:
            "Vector search misses exact terms — codes, names, SKUs. Keyword search catches them. Use both, then rerank.",
          topics: [
            "BM25 alongside vectors",
            "Reciprocal rank fusion",
            "Cross-encoder rerankers",
            "When reranking is worth the latency",
          ],
        },
        {
          id: "ai-grounding",
          label: "Citations & refusal",
          summary:
            "An answer without a source is a guess. A system that cannot say 'not in the documents' will invent.",
          topics: [
            "Citing chunk ids back to the user",
            "Explicit refusal when context is missing",
            "Faithfulness checks",
          ],
        },
        {
          id: "ai-retrieval-metrics",
          label: "Retrieval metrics",
          summary:
            "Measure retrieval separately from generation, or you will tune the wrong half of the system.",
          topics: ["Hit rate and recall@k", "MRR", "Per-chunk eval sets", "Failure triage: retrieval or generation?"],
        },
      ],
    },
    {
      id: "ai-s4",
      title: "Tools & agents",
      duration: "4-6 weeks",
      goal: "Let the model act, without letting it act unchecked.",
      build:
        "An agent that reads a support ticket, queries a real API, and drafts a reply for human approval.",
      nodes: [
        {
          id: "ai-tool-calling",
          label: "Tool / function calling",
          summary:
            "The model does not call your API. It emits a request to call it, and your code decides.",
          topics: [
            "Tool schema design and naming",
            "Parallel tool calls and returning every result",
            "Strict schemas",
            "Errors as tool results, not exceptions",
          ],
          ref: { href: "/13-ai/05-tool-calling", label: "Ch 81 — Tool / Function Calling" },
        },
        {
          id: "ai-mcp",
          label: "MCP servers",
          kind: "recommended",
          summary: "A standard way to expose tools and data to models across clients.",
          topics: ["Server basics", "When MCP beats a bespoke tool", "Auth boundaries"],
          ref: { href: "/13-ai/06-ai-agents", label: "Ch 82 — AI Agents & MCP" },
        },
        {
          id: "ai-agent-loop",
          label: "Agent loops",
          summary:
            "A loop with no stopping condition is an outage with a budget. Design the exit before the entry.",
          topics: [
            "Step and token caps",
            "Retries and idempotent tools",
            "Detecting a stuck loop",
            "Deciding when an agent is the wrong shape entirely",
          ],
        },
        {
          id: "ai-human-in-loop",
          label: "Human-in-the-loop gates",
          summary:
            "Anything irreversible — money, email, deletes — goes through a person until the evidence says otherwise.",
          topics: ["Approval queues", "Draft-then-send patterns", "Audit trails"],
        },
        {
          id: "ai-sandbox",
          label: "Sandboxed execution",
          kind: "optional",
          summary: "If the model runs code, it runs it somewhere it cannot hurt you.",
          topics: ["Container isolation", "Network egress rules", "Timeouts and resource caps"],
        },
      ],
    },
    {
      id: "ai-s5",
      title: "Ship & operate",
      duration: "4-6 weeks",
      goal: "Run it in production for strangers, not in a notebook for yourself.",
      build:
        "A deployed service with a dashboard showing p95 latency, cost per request, and error rate.",
      nodes: [
        {
          id: "ai-caching",
          label: "Prompt & response caching",
          summary:
            "Caching is a prefix match. One volatile byte early in the prompt throws away the whole saving.",
          topics: [
            "Stable prefix, volatile suffix",
            "Verifying cache hits in usage data",
            "Silent invalidators: timestamps, unsorted JSON, changing tool lists",
            "Response caching for repeated questions",
          ],
          ref: {
            href: "/13-ai/11-cost-latency-optimization",
            label: "Ch 87 — Cost & Latency Optimization",
          },
        },
        {
          id: "ai-reliability",
          label: "Rate limits & fallbacks",
          summary: "Upstream will rate-limit you, time out, and refuse. Plan all three.",
          topics: [
            "Retry with backoff and a budget",
            "Fallback models",
            "Queueing and load shedding",
            "Graceful degradation in the UI",
          ],
        },
        {
          id: "ai-tracing",
          label: "Tracing & observability",
          summary:
            "Log the prompt version, the retrieved chunk ids, the tokens, and the latency. Debugging without them is guesswork.",
          topics: [
            "Per-request traces",
            "Cost and latency dashboards",
            "Sampling traces for eval sets",
            "Alerting on quality proxies, not just 5xx",
          ],
        },
        {
          id: "ai-security",
          label: "Prompt injection defence",
          summary:
            "Treat every retrieved document and user paste as hostile input that may contain instructions.",
          topics: [
            "Tagging untrusted data",
            "Authority stays in the system prompt",
            "Output validation before any action",
            "Red-teaming your own app",
          ],
          ref: { href: "/13-ai/10-ai-security", label: "Ch 86 — AI Security" },
        },
        {
          id: "ai-privacy",
          label: "PII & retention",
          summary: "What you log is what you are liable for.",
          topics: ["Redaction before logging", "Retention windows", "Region and data-residency constraints"],
        },
      ],
    },
  ],
  tools: [
    "TypeScript or Python",
    "Anthropic SDK",
    "NestJS / FastAPI",
    "Postgres + pgvector or Qdrant",
    "Promptfoo or a custom eval harness",
    "Langfuse / OpenTelemetry",
    "Docker + one cloud runtime",
  ],
  proofOfWork: [
    "Two deployed apps a stranger can use without you present",
    "Published eval numbers before and after one change",
    "A written post-mortem of a failure mode you fixed",
  ],
  chapter: { href: "/14-roadmaps/02-ai-engineer", label: "Ch 89 — AI Engineer (full guide)" },
};

const ML_ENGINEER: RoadmapTrack = {
  slug: "ml-engineer",
  title: "Machine Learning Engineer",
  shortTitle: "ML Engineer",
  mark: "ML",
  tagline:
    "Train, fine-tune, and serve models. Own the numbers: data quality, metrics, drift, and inference cost.",
  market:
    "Deeper bar than AI engineering and the maths is not optional. Hired by product companies with their own data, fintech and e-commerce risk teams, ad-tech, and global capability centres. Most paid ML work is still tabular, not LLM.",
  timeline: "12-18 months part-time",
  entryBar: "Comfortable with Python and willing to do real maths. Slowest of these tracks, least crowded at the top.",
  updated: "2026-08-31",
  prerequisites: [
    "Python including NumPy",
    "School-level linear algebra and probability you can refresh",
    "SQL",
    "Git and the Linux command line",
  ],
  stages: [
    {
      id: "ml-s1",
      title: "Maths & data handling",
      duration: "6-8 weeks",
      goal: "Read a model's maths without flinching, and clean data without leaking it.",
      build:
        "A cleaned public dataset with a documented notebook: every transform justified, leakage checks shown.",
      nodes: [
        {
          id: "ml-linalg",
          label: "Linear algebra & calculus",
          summary: "Enough to read a loss function and know what a gradient does.",
          topics: ["Vectors, matrices, dot products", "Matrix multiplication shapes", "Derivatives and gradients", "Chain rule"],
        },
        {
          id: "ml-probability",
          label: "Probability & statistics",
          summary: "The language every metric is written in.",
          topics: ["Distributions", "Expectation and variance", "Bayes' rule", "Sampling error and confidence"],
        },
        {
          id: "ml-dataframes",
          label: "pandas / Polars",
          summary: "Most of the job is reshaping data before a model ever sees it.",
          topics: ["Joins, groupby, window operations", "Dtypes and memory", "Vectorising instead of looping", "Polars for larger-than-RAM work"],
        },
        {
          id: "ml-leakage",
          label: "Data leakage",
          summary:
            "The number one junior mistake: any statistic computed before the split leaks the test set into training.",
          topics: [
            "Fit transforms inside the pipeline, per fold",
            "Time-based splits for temporal data",
            "Target encoding done wrong",
            "Duplicate rows across splits",
          ],
        },
      ],
    },
    {
      id: "ml-s2",
      title: "Classical machine learning",
      duration: "6-8 weeks",
      goal: "Beat a baseline honestly. Most paid ML work is still tabular.",
      build:
        "A tabular model that beats a documented baseline, with cross-validated scores and a feature-importance write-up.",
      nodes: [
        {
          id: "ml-linear-models",
          label: "Linear & logistic regression",
          summary: "The baseline you must beat, and the model you must be able to explain.",
          topics: ["Coefficients as explanations", "Regularisation: L1 vs L2", "Multicollinearity"],
        },
        {
          id: "ml-trees",
          label: "Trees & gradient boosting",
          summary: "XGBoost and LightGBM still win most tabular problems. Learn them properly.",
          topics: ["Bagging vs boosting", "Key hyperparameters and what they trade", "Early stopping", "Categorical handling"],
        },
        {
          id: "ml-cv",
          label: "Cross-validation",
          summary: "One train/test split is an anecdote. K folds is evidence.",
          topics: ["Stratified K-fold", "Grouped and time-series splits", "Nested CV for tuning", "Reporting mean ± std"],
        },
        {
          id: "ml-imbalance",
          label: "Class imbalance",
          summary: "97% accuracy on a 3% positive rate is a broken metric, not a good model.",
          topics: ["Class weights vs resampling", "PR-AUC over ROC-AUC", "Threshold selection by business cost"],
        },
        {
          id: "ml-metrics",
          label: "Metrics & calibration",
          summary: "Pick the metric from the decision the model feeds, not from a tutorial.",
          topics: ["ROC-AUC vs PR-AUC", "Precision/recall trade-off", "Calibration curves", "Regression: MAE vs RMSE vs MAPE"],
        },
      ],
    },
    {
      id: "ml-s3",
      title: "Deep learning",
      duration: "8-10 weeks",
      goal: "Train and fine-tune neural networks on a real GPU budget.",
      build:
        "A fine-tuned open model on a domain dataset, with before/after metrics and the cost of the training run.",
      nodes: [
        {
          id: "ml-pytorch",
          label: "PyTorch fundamentals",
          summary: "Tensors, autograd, and a training loop you wrote yourself at least once.",
          topics: ["Datasets and DataLoaders", "Optimisers and schedulers", "Checkpointing", "Debugging NaNs"],
        },
        {
          id: "ml-architectures",
          label: "CNNs & transformers",
          summary: "Two families cover most of the field. Attention is the one to understand deeply.",
          topics: ["Convolutions and pooling", "Self-attention and multi-head attention", "Positional encoding", "Encoder vs decoder stacks"],
        },
        {
          id: "ml-finetuning",
          label: "Fine-tuning & LoRA",
          summary: "Full fine-tunes are rarely necessary. Adapters give most of the gain for a fraction of the memory.",
          topics: ["Transfer learning", "LoRA / QLoRA", "Dataset size vs overfitting", "When RAG is the better answer"],
          ref: { href: "/13-ai/08-rag-vs-finetuning", label: "Ch 84 — RAG vs Fine-Tuning" },
        },
        {
          id: "ml-gpu-budget",
          label: "GPU budget craft",
          summary: "Memory is the constraint that shapes every decision.",
          topics: ["Mixed precision", "Gradient accumulation", "Batch size vs learning rate", "Spot instances and checkpoint resume"],
        },
      ],
    },
    {
      id: "ml-s4",
      title: "Production ML",
      duration: "6-8 weeks",
      goal: "A model nobody can serve is a hobby project.",
      build:
        "A model served behind an API with latency, drift, and data-quality monitoring, plus a documented rollback.",
      nodes: [
        {
          id: "ml-serving",
          label: "Batch vs real-time serving",
          summary: "Most models do not need an online endpoint. Pick the cheaper shape that meets the need.",
          topics: ["Batch scoring pipelines", "Online inference APIs", "Latency budgets", "ONNX export and quantisation"],
        },
        {
          id: "ml-skew",
          label: "Training/serving skew",
          summary:
            "The classic production failure: features computed one way in training and another way at serve time.",
          topics: ["Shared feature code", "Feature stores", "Point-in-time correctness", "Shadow scoring to detect skew"],
        },
        {
          id: "ml-registry",
          label: "Registry & reproducibility",
          summary: "A model you cannot rebuild is a liability.",
          topics: ["Experiment tracking", "Model registry stages", "Dataset versioning", "Pinned environments and seeds"],
        },
        {
          id: "ml-drift",
          label: "Drift monitoring",
          summary: "Models decay silently. Monitoring inputs catches it before the business does.",
          topics: ["Input distribution drift", "Prediction drift", "Delayed labels", "Retraining triggers"],
        },
        {
          id: "ml-ab",
          label: "Shadow & A/B deploys",
          kind: "recommended",
          summary: "Offline gains are a hypothesis until online traffic agrees.",
          topics: ["Shadow traffic", "A/B design and sample size", "Guardrail metrics", "Rollback plan"],
        },
      ],
    },
    {
      id: "ml-s5",
      title: "Specialise",
      duration: "8+ weeks, ongoing",
      goal: "Pick one domain and go deeper than a generalist can.",
      build: "A reproduction of one recent paper, with your notes on what the paper left out.",
      nodes: [
        {
          id: "ml-domain",
          label: "Choose a domain",
          summary: "NLP, vision, recommenders, or forecasting. One, not four.",
          topics: ["NLP and embeddings", "Computer vision", "Recommender systems", "Time series and forecasting"],
        },
        {
          id: "ml-distributed",
          label: "Distributed training",
          kind: "optional",
          summary: "Needed once one GPU is no longer enough.",
          topics: ["Data vs model parallelism", "DDP and FSDP", "Communication overhead"],
        },
        {
          id: "ml-papers",
          label: "Paper reading habit",
          summary: "One paper a week, one reproduction a quarter, beats a course a year.",
          topics: ["Reading order: abstract, results, method", "Reproducing a result", "Spotting an unreported baseline"],
        },
      ],
    },
  ],
  tools: [
    "PyTorch",
    "scikit-learn",
    "XGBoost / LightGBM",
    "pandas or Polars",
    "MLflow or Weights & Biases",
    "Docker",
    "A cloud GPU",
  ],
  proofOfWork: [
    "One model in production with monitoring, not just a notebook",
    "A fine-tune with honest before/after numbers and its training cost",
    "A paper reproduction repo",
  ],
  chapter: { href: "/14-roadmaps/03-ml-engineer", label: "Ch 90 — ML Engineer (full guide)" },
};

const PROMPT_ENGINEER: RoadmapTrack = {
  slug: "prompt-engineer",
  title: "Prompt Engineer",
  shortTitle: "Prompt Engineer",
  mark: "PE",
  tagline:
    "Design, test, and maintain the instructions that drive a model — and prove the changes worked with evaluations.",
  market:
    "Read this honestly: the standalone title is shrinking. The work is being absorbed into AI engineer, applied AI, solutions engineer, and AI QA roles. Learn it as a specialism inside one of those, not as your only skill — it is still the most accessible on-ramp into AI work.",
  timeline: "3-5 months part-time",
  entryBar: "Open to writers, domain experts, testers, and analysts — not only developers.",
  updated: "2026-08-31",
  prerequisites: [
    "Precise written English",
    "Systematic thinking: change one variable at a time",
    "Spreadsheets",
    "Enough Python or notebook comfort to run a script",
  ],
  stages: [
    {
      id: "pe-s1",
      title: "How models behave",
      duration: "2-3 weeks",
      goal: "Understand the machine you are instructing.",
      build:
        "A side-by-side comparison of one task across three models, with notes on where each fails.",
      nodes: [
        {
          id: "pe-tokens",
          label: "Tokens & context",
          summary: "The unit of cost and the ceiling on input, in one concept.",
          topics: ["Tokenisation quirks", "Context window budgeting", "Truncation behaviour"],
          ref: { href: "/13-ai/01-llm-fundamentals", label: "Ch 77 — LLM Fundamentals" },
        },
        {
          id: "pe-sampling",
          label: "Sampling & variance",
          summary: "Know what makes output vary before you blame the prompt.",
          topics: ["Temperature and top-p", "Repeated runs on one prompt", "Seeds and why they are not enough"],
        },
        {
          id: "pe-model-diff",
          label: "Model differences",
          summary:
            "A prompt is a per-model artefact. Scaffolding written for an older model over-applies on a newer one.",
          topics: ["Capability tiers", "Instruction-following differences", "Refusal behaviour", "Re-baselining after an upgrade"],
        },
      ],
    },
    {
      id: "pe-s2",
      title: "Prompt patterns",
      duration: "3-4 weeks",
      goal: "Move from lucky prompts to reusable structure.",
      build:
        "A prompt library of ten task templates, each with inputs, output schema, and known failure cases.",
      nodes: [
        {
          id: "pe-structure",
          label: "Role, task, constraints, format",
          summary: "The four-part skeleton behind almost every production prompt.",
          topics: ["Ordering for cacheability", "Constraints over pleading", "Fallback instruction for missing data"],
          ref: { href: "/13-ai/02-prompt-engineering", label: "Ch 78 — Prompt Engineering" },
        },
        {
          id: "pe-few-shot",
          label: "Few-shot design",
          summary: "Show the format you cannot describe. Vary the examples deliberately.",
          topics: ["Example selection", "Coverage of edge cases", "Cost of examples in every call"],
        },
        {
          id: "pe-decomposition",
          label: "Decomposition",
          summary: "Two cheap focused calls usually beat one clever prompt.",
          topics: ["Splitting classify-then-write", "Routing with a cheap model first", "Where chains add failure modes"],
        },
        {
          id: "pe-schemas",
          label: "Output schemas",
          summary: "If code will parse it, constrain it with a schema.",
          topics: ["JSON schema and enums", "Validation as a normal error path", "Why prefill tricks are gone"],
        },
        {
          id: "pe-delimiters",
          label: "Delimiters for untrusted input",
          summary: "Tag the data so instructions inside it read as content, not commands.",
          topics: ["XML tags", "Explicit 'this is untrusted' framing", "Escaping user content"],
        },
      ],
    },
    {
      id: "pe-s3",
      title: "Evaluation",
      duration: "4-6 weeks",
      goal: "This is the whole job. Opinions about prompts are worthless without measurement.",
      build:
        "An eval report that recommends one prompt over another and shows why the difference is not noise.",
      nodes: [
        {
          id: "pe-rubric",
          label: "Rubrics",
          summary: "Write scoring rules a second person can apply and reach your answer.",
          topics: ["Binary criteria over 1-5 vibes", "Inter-rater agreement", "Rubric drift over time"],
        },
        {
          id: "pe-golden",
          label: "Golden sets",
          summary: "50-200 frozen cases, including every failure you have personally seen.",
          topics: ["Sourcing real cases", "Covering edge cases", "Keeping the set frozen for comparability"],
          ref: {
            href: "/13-ai/09-evaluation-hallucination",
            label: "Ch 85 — Evaluation & Hallucination",
          },
        },
        {
          id: "pe-pairwise",
          label: "Pairwise comparison",
          summary: "Humans and models both judge A-vs-B far more reliably than absolute scores.",
          topics: ["Blind comparison", "Position bias", "Win rate and ties"],
        },
        {
          id: "pe-judge",
          label: "LLM-as-judge",
          summary: "Scale scoring with a model, then audit the judge against human labels.",
          topics: ["Judge prompt design", "Spot-check sampling", "Known judge biases"],
        },
        {
          id: "pe-significance",
          label: "Noise vs signal",
          summary: "A 2-point win on 40 cases is nothing. Know when to believe a result.",
          topics: ["Sample size intuition", "Repeat runs and variance", "Reporting uncertainty honestly"],
        },
      ],
    },
    {
      id: "pe-s4",
      title: "Prompts inside systems",
      duration: "4-6 weeks",
      goal: "Prompts in production are code: versioned, cached, and budgeted.",
      build: "A versioned prompt config in a real repo, with cost per call before and after your trimming.",
      nodes: [
        {
          id: "pe-versioning",
          label: "Versioning & rollback",
          summary: "Every prompt has an id and a version, and both appear in the logs.",
          topics: ["Prompt as a stored artefact", "Attributing a regression to an edit", "Rollback procedure"],
        },
        {
          id: "pe-caching",
          label: "Caching & cost trimming",
          summary: "Order the prompt so the stable part caches and the volatile part comes last.",
          topics: ["Prefix stability", "Verifying cache reads in usage", "Trimming dead instructions", "Output token caps"],
          ref: {
            href: "/13-ai/11-cost-latency-optimization",
            label: "Ch 87 — Cost & Latency Optimization",
          },
        },
        {
          id: "pe-context-assembly",
          label: "Context assembly",
          summary: "In a RAG app, the retrieved context is most of the prompt. Its order and framing matter.",
          topics: ["Chunk ordering", "Deduplicating context", "Token budget per section"],
          ref: { href: "/13-ai/04-rag", label: "Ch 80 — RAG Pipeline" },
        },
        {
          id: "pe-tool-descriptions",
          label: "Tool descriptions",
          summary: "A tool description is a prompt. Vague ones cause the wrong tool to fire.",
          topics: ["Naming and when-to-use guidance", "Parameter descriptions", "Testing tool selection"],
          ref: { href: "/13-ai/05-tool-calling", label: "Ch 81 — Tool / Function Calling" },
        },
      ],
    },
    {
      id: "pe-s5",
      title: "Safety & handoff",
      duration: "2-4 weeks",
      goal: "Break your own prompts before a user does, then hand them over cleanly.",
      build: "A red-team report against your own app: attacks tried, which worked, the fix for each.",
      nodes: [
        {
          id: "pe-injection",
          label: "Prompt injection",
          summary: "Assume any text from outside your system is trying to give orders.",
          topics: ["Direct and indirect injection", "Data/instruction separation", "Output validation before action"],
          ref: { href: "/13-ai/10-ai-security", label: "Ch 86 — AI Security" },
        },
        {
          id: "pe-jailbreak",
          label: "Jailbreak testing",
          summary: "Run a fixed attack suite on every prompt change, like a test suite.",
          topics: ["Common attack shapes", "Regression suite of attacks", "Reporting severity honestly"],
        },
        {
          id: "pe-pii",
          label: "PII in prompts & logs",
          summary: "Prompts get logged. Decide what may never be in them.",
          topics: ["Redaction before send and before log", "Retention windows", "Least-context principle"],
        },
        {
          id: "pe-docs",
          label: "Documentation & handoff",
          summary: "A prompt only you can maintain is a single point of failure.",
          topics: ["Documenting intent and failure cases", "Eval instructions for the next owner", "Ownership and review cadence"],
        },
      ],
    },
  ],
  tools: [
    "Model playgrounds / Anthropic Console",
    "A notebook or script runner",
    "Git",
    "Promptfoo or a custom harness",
    "Langfuse",
    "Spreadsheets",
  ],
  proofOfWork: [
    "A public eval report with a recommendation and a noise analysis",
    "A prompt library with documented failure cases",
    "A red-team write-up",
  ],
  chapter: { href: "/14-roadmaps/04-prompt-engineer", label: "Ch 91 — Prompt Engineer (full guide)" },
};

const FDE: RoadmapTrack = {
  slug: "forward-deployed-engineer",
  title: "Forward Deployed Engineer (FDE)",
  shortTitle: "FDE",
  mark: "FD",
  tagline:
    "Embed with a customer, build working software inside their environment, then turn what you learn into product.",
  market:
    "The fastest-growing hybrid role in AI companies and the hardest to fill. Half product engineer, half consultant — but you write the code and own the deploy. Also advertised as solutions, deployment, implementation, or customer engineer.",
  timeline: "9-12 months part-time",
  entryBar: "Not a first role. You must already ship end to end and be willing to talk to customers.",
  updated: "2026-08-31",
  prerequisites: [
    "Full-stack shipping ability in any stack",
    "SQL and API integration experience",
    "Docker and one cloud",
    "Willingness to speak directly to customers",
  ],
  stages: [
    {
      id: "fde-s1",
      title: "Core engineering depth",
      duration: "8-12 weeks",
      goal: "Be the person who can build the whole thing alone if needed.",
      build:
        "A small end-to-end app deployed for someone other than yourself, with auth and a real database.",
      nodes: [
        {
          id: "fde-backend",
          label: "Backend to a professional standard",
          summary: "One language, deeply. Enough to be the only engineer in the room.",
          topics: ["API design and versioning", "Auth and sessions", "Background jobs", "Error handling and logging"],
          ref: { href: "/03-nodejs/05-rest-best-practices", label: "Ch 26 — REST Best Practices" },
        },
        {
          id: "fde-data-modelling",
          label: "SQL & schema design",
          summary: "You will design a schema on day three of an engagement.",
          topics: ["Normalisation trade-offs", "Indexes", "Migrations under load", "Reading someone else's schema"],
        },
        {
          id: "fde-deploy",
          label: "Docker, CI, one cloud",
          summary: "Their environment will not match yours. Ship something portable.",
          topics: ["Containerising an app", "CI pipelines", "Config and secrets per environment", "Logs you can read from outside"],
        },
        {
          id: "fde-codebase-reading",
          label: "Reading unfamiliar code fast",
          summary: "The most under-taught FDE skill. You will be dropped into strange repos constantly.",
          topics: ["Entry points and request paths", "Finding the data model first", "Debugging without a local setup"],
        },
      ],
    },
    {
      id: "fde-s2",
      title: "Integration craft",
      duration: "4-6 weeks",
      goal: "Customer data is never clean and their network is never open. Work anyway.",
      build:
        "An importer that ingests a deliberately dirty 50k-row spreadsheet and reports exactly what it rejected and why.",
      nodes: [
        {
          id: "fde-messy-data",
          label: "Messy real data",
          summary: "Excel serial dates, lakh-formatted numbers, trailing spaces, three date formats in one column.",
          topics: ["Tolerant parsers", "Per-row rejection reports", "Encoding problems", "Never silently dropping a row"],
        },
        {
          id: "fde-idempotency",
          label: "Idempotency & retries",
          summary: "You will re-run the same import three times in one afternoon.",
          topics: ["Upsert on a natural key", "Safe reruns and partial failure", "Backoff and rate-limit handling"],
        },
        {
          id: "fde-enterprise-auth",
          label: "SSO / SAML & enterprise auth",
          summary: "Their identity team decides whether your app ships.",
          topics: ["SAML and OIDC basics", "SCIM provisioning", "Role mapping", "Debugging a broken assertion"],
          ref: { href: "/07-system-design/01-authentication", label: "Ch 44 — Authentication" },
        },
        {
          id: "fde-constrained-env",
          label: "VPC, on-prem, air-gapped",
          summary: "No outbound internet is a normal constraint, not an edge case.",
          topics: ["Private networking", "Offline installs and mirrors", "Data residency", "Working with their security review"],
        },
      ],
    },
    {
      id: "fde-s3",
      title: "AI application layer",
      duration: "4-6 weeks",
      goal: "Most FDE work today is putting a model against a customer's own documents and processes.",
      build:
        "A retrieval assistant over a real organisation's documents, with an eval set that organisation agrees with.",
      nodes: [
        {
          id: "fde-llm-basics",
          label: "LLM APIs & structured output",
          summary: "Enough of the AI Engineer track to ship a real feature.",
          topics: ["Structured outputs", "Streaming", "Cost per request the customer will accept"],
          ref: { href: "/14-roadmaps/02-ai-engineer", label: "Ch 89 — AI Engineer (stages 1-3)" },
        },
        {
          id: "fde-customer-rag",
          label: "RAG over customer documents",
          summary: "Their contracts, runbooks, and policies — with citations, because trust is the deliverable.",
          topics: ["Ingesting their formats", "Permissions-aware retrieval", "Citations", "Refusing when unsure"],
          ref: { href: "/13-ai/04-rag", label: "Ch 80 — RAG Pipeline" },
        },
        {
          id: "fde-customer-evals",
          label: "Evals from their examples",
          summary: "An eval set the customer wrote is also the acceptance criteria for the pilot.",
          topics: ["Collecting real cases in discovery", "Getting sign-off on the rubric", "Reporting results to non-engineers"],
        },
      ],
    },
    {
      id: "fde-s4",
      title: "Customer skills",
      duration: "4-6 weeks, then forever",
      goal: "The real differentiator. Most engineers never build this, and it caps their level.",
      build:
        "Pick a real small business, find one painful workflow, ship a tool for it, and measure hours saved per week.",
      nodes: [
        {
          id: "fde-discovery",
          label: "Discovery",
          summary: "Find the workflow with real hours or money attached. Watch someone do it.",
          topics: ["Questions that surface cost", "Shadowing a user", "Separating stated from actual problems"],
        },
        {
          id: "fde-scoping",
          label: "Scoping to two weeks",
          summary: "A demo in two weeks beats a plan for two quarters.",
          topics: ["Cutting scope without cutting value", "One agreed success metric", "Writing the scope down"],
        },
        {
          id: "fde-demo",
          label: "Demoing rough work",
          summary: "Show it early, ugly, and working. Polish signals distance from the problem.",
          topics: ["Framing a rough demo", "Handling live failure gracefully", "Capturing feedback in the room"],
        },
        {
          id: "fde-saying-no",
          label: "Saying no, and not yet",
          summary: "Every yes is a commitment someone will hold you to on Friday.",
          topics: ["Trade-off framing", "Offering the near thing instead", "Escalation without blame"],
        },
        {
          id: "fde-pilot",
          label: "Running a pilot",
          summary: "A pilot without a metric never ends and never converts.",
          topics: ["Success criteria up front", "Weekly check-ins with evidence", "Deciding to stop"],
        },
      ],
    },
    {
      id: "fde-s5",
      title: "From bespoke to product",
      duration: "6+ weeks",
      goal: "The job is not consulting. What you learn in the field becomes the product.",
      build:
        "A written case study: the customer problem, what you shipped, the metric it moved, what should become product.",
      nodes: [
        {
          id: "fde-pattern",
          label: "Spotting the pattern",
          summary: "Three customers asking differently for the same thing is a feature, not three projects.",
          topics: ["Comparing engagements", "Separating config from code", "Saying which 80% generalises"],
        },
        {
          id: "fde-handoff",
          label: "Handoff & runbooks",
          summary: "You will leave. What you wrote down decides whether the deployment survives.",
          topics: ["Runbooks for their ops team", "Support escalation paths", "Known limitations documented"],
        },
        {
          id: "fde-feedback-loop",
          label: "Feeding the roadmap",
          summary: "Field evidence beats opinion in a roadmap meeting — if you bring numbers.",
          topics: ["Writing a product ask with evidence", "Quantifying customer pain", "Prioritising against other customers"],
        },
      ],
    },
  ],
  tools: [
    "TypeScript or Python",
    "Postgres and one warehouse",
    "Docker, Terraform basics",
    "LLM APIs",
    "Postman / curl and devtools",
    "A notebook for customer notes",
  ],
  proofOfWork: [
    "A shipped tool a real organisation uses weekly",
    "A case study with a before/after metric",
    "Evidence you handled bad data and a locked-down environment",
  ],
  chapter: {
    href: "/14-roadmaps/05-forward-deployed-engineer",
    label: "Ch 92 — Forward Deployed Engineer (full guide)",
  },
};

const DATA_ENGINEER: RoadmapTrack = {
  slug: "data-engineer",
  title: "Data Engineer",
  shortTitle: "Data Engineer",
  mark: "DE",
  tagline:
    "Build the pipelines and models every analyst, dashboard, and AI feature depends on. Own freshness and trust.",
  market:
    "Steadiest demand of these tracks and the most transferable. Every company with AI ambitions discovers its data layer first — half of 'AI projects' are data projects in a costume. Strong path in from SQL analyst or backend work.",
  timeline: "6-10 months part-time",
  entryBar: "Good entry route for analysts and backend developers. Low maths requirement.",
  updated: "2026-08-31",
  prerequisites: ["SQL beyond SELECT", "Python scripting", "Linux command line", "Git"],
  stages: [
    {
      id: "de-s1",
      title: "SQL & data modelling",
      duration: "4-6 weeks",
      goal: "Model data so the next question is cheap to answer.",
      build:
        "A star schema over a public dataset, with the ten business questions it answers in one query each.",
      nodes: [
        {
          id: "de-advanced-sql",
          label: "Advanced SQL",
          summary: "Window functions and CTEs are the daily tools, not exotica.",
          topics: ["Window functions", "CTEs and recursive CTEs", "Set operations", "Query plans and indexes"],
          ref: { href: "/05-mongodb/02-indexing", label: "Ch 38 — Indexing" },
        },
        {
          id: "de-dimensional",
          label: "Dimensional modelling",
          summary: "Facts and dimensions, chosen so analysts stop asking you for help.",
          topics: ["Star vs snowflake", "Grain of a fact table", "Conformed dimensions", "Surrogate keys"],
        },
        {
          id: "de-scd",
          label: "Slowly changing dimensions",
          summary: "History is a requirement the first time someone asks 'what was the price then?'",
          topics: ["SCD type 1 vs 2", "Effective dating", "Point-in-time joins"],
        },
        {
          id: "de-sql-vs-nosql",
          label: "Storage choice",
          kind: "recommended",
          summary: "Pick the store from the access pattern, not from familiarity.",
          topics: ["OLTP vs OLAP", "Document vs relational", "When a warehouse is the wrong answer"],
          ref: { href: "/05-mongodb/05-sql-vs-nosql", label: "Ch 41 — SQL vs NoSQL" },
        },
      ],
    },
    {
      id: "de-s2",
      title: "Pipelines",
      duration: "6-8 weeks",
      goal: "Move data on a schedule without babysitting it.",
      build:
        "A scheduled pipeline with dbt tests, a backfill command, and a freshness alert that actually fires.",
      nodes: [
        {
          id: "de-elt",
          label: "ETL vs ELT",
          summary: "Land raw, transform in-warehouse, keep the raw layer replayable.",
          topics: ["Raw / staging / marts layering", "When to transform before landing", "Replayability"],
        },
        {
          id: "de-orchestration",
          label: "Orchestration",
          summary: "Airflow, Dagster, or Prefect — one of them, properly.",
          topics: ["DAGs and dependencies", "Retries and SLAs", "Backfills", "Sensors vs schedules"],
        },
        {
          id: "de-idempotency",
          label: "Idempotency",
          summary: "A rerun must produce the same result, not duplicate rows.",
          topics: ["Merge on a unique key", "Delete-and-insert by partition", "Watermarks", "Late-arriving data windows"],
        },
        {
          id: "de-dbt",
          label: "dbt models & tests",
          summary: "Version-controlled SQL with tests attached. The industry default.",
          topics: ["Incremental models", "Schema and data tests", "Sources and freshness", "Documentation and lineage"],
        },
        {
          id: "de-alerting",
          label: "Failure & staleness alerts",
          summary:
            "A loud failure is fine. A pipeline that silently stops updating is what gets people fired.",
          topics: ["Freshness SLAs", "Row-count anomaly checks", "Alert routing and on-call"],
        },
      ],
    },
    {
      id: "de-s3",
      title: "Storage & scale",
      duration: "6-8 weeks",
      goal: "Handle data too big for one machine, without a surprise cloud bill.",
      build:
        "The same query on unpartitioned and partitioned data, with the cost and runtime difference measured.",
      nodes: [
        {
          id: "de-warehouse",
          label: "Warehouses",
          summary: "BigQuery, Snowflake, or Redshift — learn its pricing model, not just its SQL.",
          topics: ["Storage vs compute separation", "Slots / warehouses / credits", "Result caching", "Cost attribution"],
        },
        {
          id: "de-columnar",
          label: "Parquet & columnar formats",
          summary: "Why analytics stores columns, and what that buys you.",
          topics: ["Row vs columnar layout", "Compression and encoding", "Predicate pushdown", "Small-file problems"],
        },
        {
          id: "de-lakehouse",
          label: "Lakehouse tables",
          kind: "recommended",
          summary: "Iceberg or Delta: ACID and time travel on object storage.",
          topics: ["Table formats", "Schema evolution", "Time travel and snapshots", "Compaction"],
        },
        {
          id: "de-partitioning",
          label: "Partitioning & clustering",
          summary: "The single biggest lever on warehouse cost.",
          topics: ["Choosing a partition key", "Clustering / sort keys", "Pruning and why it breaks", "Avoiding SELECT *"],
        },
        {
          id: "de-spark",
          label: "Spark fundamentals",
          kind: "recommended",
          summary: "Needed when a single warehouse query is the wrong tool.",
          topics: ["Lazy evaluation and stages", "Shuffles and skew", "Broadcast joins", "Tuning partitions"],
        },
      ],
    },
    {
      id: "de-s4",
      title: "Streaming",
      duration: "4-6 weeks",
      goal: "Some questions cannot wait for tomorrow's batch.",
      build: "A CDC stream from Postgres to the warehouse with a measured end-to-end lag figure.",
      nodes: [
        {
          id: "de-kafka",
          label: "Kafka",
          summary: "Topics, partitions, consumer groups — and what ordering actually guarantees.",
          topics: ["Partitioning and keys", "Consumer groups and offsets", "Retention and compaction", "Schema registry"],
        },
        {
          id: "de-semantics",
          label: "Delivery semantics",
          summary: "At-least-once plus idempotent writes is how most teams get 'exactly once'.",
          topics: ["At-most / at-least / exactly once", "Deduplication keys", "Transactional writes"],
        },
        {
          id: "de-cdc",
          label: "Change data capture",
          summary: "Replicate a production database without adding load to it.",
          topics: ["Debezium and logical replication", "Snapshot plus stream", "Schema changes mid-stream", "Lag monitoring"],
        },
        {
          id: "de-windowing",
          label: "Windowing & late data",
          kind: "recommended",
          summary: "Event time is not arrival time, and pretending otherwise corrupts metrics.",
          topics: ["Tumbling vs sliding windows", "Watermarks", "Reprocessing late events"],
        },
      ],
    },
    {
      id: "de-s5",
      title: "Reliability & governance",
      duration: "4-6 weeks",
      goal: "Being trusted is the job. Wrong data is worse than no data.",
      build:
        "A data contract plus quality checks that block a bad upstream change before it reaches a dashboard.",
      nodes: [
        {
          id: "de-contracts",
          label: "Data contracts",
          summary: "Producers commit to a schema; consumers stop guessing.",
          topics: ["Schema ownership", "Breaking vs additive changes", "Enforcement in CI"],
        },
        {
          id: "de-quality",
          label: "Quality checks",
          summary: "Tests on data, not just on code.",
          topics: ["Not-null, unique, referential checks", "Distribution and volume anomalies", "Great Expectations / dbt tests"],
        },
        {
          id: "de-lineage",
          label: "Lineage & impact analysis",
          summary: "Before you change a column, know who breaks.",
          topics: ["Column-level lineage", "Downstream impact reports", "Deprecation process"],
        },
        {
          id: "de-governance",
          label: "PII & access control",
          summary: "Who can see what, provably.",
          topics: ["PII classification", "Row and column level security", "Masking", "Retention policy"],
        },
        {
          id: "de-oncall",
          label: "On-call & runbooks",
          summary: "Data incidents need the same discipline as service incidents.",
          topics: ["Runbooks per pipeline", "Incident write-ups", "Backfill after an outage"],
        },
      ],
    },
  ],
  tools: [
    "SQL and Python",
    "dbt",
    "Airflow or Dagster",
    "BigQuery or Snowflake",
    "Kafka",
    "Spark",
    "Terraform basics",
  ],
  proofOfWork: [
    "One pipeline running on a schedule you did not fix by hand",
    "Tests and a freshness SLA someone else could rely on",
    "A cost or runtime optimisation with numbers",
  ],
  chapter: { href: "/14-roadmaps/06-data-engineer", label: "Ch 93 — Data Engineer (full guide)" },
};

const MLOPS: RoadmapTrack = {
  slug: "mlops-engineer",
  title: "MLOps / AI Platform Engineer",
  shortTitle: "MLOps",
  mark: "OP",
  tagline:
    "Own the runway: training infrastructure, model serving, GPU cost, monitoring, and rollback for everything AI teams ship.",
  market:
    "Demand follows AI adoption with a lag — companies hire this once models are in production and the bill arrives. The natural move for DevOps and SRE engineers; if you already run Kubernetes, you are most of the way there.",
  timeline: "6-10 months part-time",
  entryBar: "Best entered from infrastructure, not from data science.",
  updated: "2026-08-31",
  prerequisites: [
    "Linux and networking",
    "Docker",
    "Python",
    "One cloud and its IAM model",
    "CI/CD experience",
  ],
  stages: [
    {
      id: "ops-s1",
      title: "Infrastructure fundamentals",
      duration: "6-8 weeks",
      goal: "Reproducible infrastructure, defined in code.",
      build: "A Terraform-defined cluster a teammate can recreate from scratch with one command.",
      nodes: [
        {
          id: "ops-terraform",
          label: "Terraform",
          summary: "Clicking in a console is not a platform.",
          topics: ["State and locking", "Modules", "Plan review in CI", "Drift detection"],
        },
        {
          id: "ops-k8s",
          label: "Kubernetes",
          summary: "The substrate most ML platforms run on.",
          topics: ["Deployments and services", "Requests and limits", "HPA and node pools", "GPU device plugins"],
        },
        {
          id: "ops-iam",
          label: "IAM & secrets",
          summary: "Least privilege, and no credentials in a container image.",
          topics: ["Workload identity", "Secret managers", "Network boundaries", "Audit logging"],
        },
        {
          id: "ops-cicd",
          label: "CI/CD",
          summary: "Deploys must be boring and identical every time.",
          topics: ["Pipeline as code", "Environment promotion", "Artefact immutability"],
        },
        {
          id: "ops-cost-tagging",
          label: "Cost tagging & budgets",
          summary: "You cannot control a bill you cannot attribute.",
          topics: ["Tagging conventions", "Budget alerts", "Idle resource reaping"],
        },
      ],
    },
    {
      id: "ops-s2",
      title: "Model lifecycle",
      duration: "6-8 weeks",
      goal: "Any training run must be reproducible six months later.",
      build: "A pipeline that reproduces a past training run from a commit hash.",
      nodes: [
        {
          id: "ops-tracking",
          label: "Experiment tracking",
          summary: "Runs, params, metrics, artefacts — in one place, automatically.",
          topics: ["MLflow or W&B", "Run metadata conventions", "Comparing runs"],
        },
        {
          id: "ops-registry",
          label: "Model registry",
          summary: "The contract between the people who train and the people who serve.",
          topics: ["Stages and promotion", "Approval gates", "Model cards", "Rollback to a prior version"],
        },
        {
          id: "ops-data-versioning",
          label: "Data & artefact versioning",
          summary: "Same code plus different data is a different model.",
          topics: ["DVC / LakeFS", "Immutable dataset snapshots", "Lineage from data to model"],
        },
        {
          id: "ops-repro",
          label: "Reproducible environments",
          summary: "Pinned everything, seeds fixed, container digest recorded.",
          topics: ["Lockfiles and base images", "Deterministic seeds", "Recording the commit with the run"],
        },
      ],
    },
    {
      id: "ops-s3",
      title: "Serving & GPUs",
      duration: "6-8 weeks",
      goal: "Serve models fast, and know the cost per thousand requests.",
      build:
        "A self-hosted open model behind an autoscaling endpoint, with throughput, p95 latency, and cost per 1k requests reported.",
      nodes: [
        {
          id: "ops-inference-servers",
          label: "Inference servers",
          summary: "vLLM for LLMs, Triton or TorchServe for the rest.",
          topics: ["vLLM basics", "Triton model repositories", "Concurrency and queueing", "Health checks"],
        },
        {
          id: "ops-batching",
          label: "Batching & KV caching",
          summary: "The two levers that decide GPU throughput for LLM serving.",
          topics: ["Continuous batching", "KV cache memory maths", "Prefix caching", "Max sequence length trade-offs"],
        },
        {
          id: "ops-quantisation",
          label: "Quantisation",
          kind: "recommended",
          summary: "Cheaper inference, measured against an eval set — never assumed.",
          topics: ["INT8 / FP8 / AWQ / GPTQ", "Quality regression testing", "Latency vs accuracy curves"],
        },
        {
          id: "ops-autoscaling",
          label: "GPU autoscaling",
          summary: "GPUs are the most expensive idle resource you will ever own.",
          topics: ["Scale-to-zero and cold starts", "Queue-depth based scaling", "Spot and preemptible strategies", "Multi-tenancy / MIG"],
        },
        {
          id: "ops-buy-vs-build",
          label: "Self-host vs API",
          summary: "Answer this with a spreadsheet, not an opinion. You will be asked.",
          topics: ["Break-even volume", "Utilisation assumptions", "Engineering time as a cost", "Compliance drivers"],
          ref: {
            href: "/13-ai/11-cost-latency-optimization",
            label: "Ch 87 — Cost & Latency Optimization",
          },
        },
      ],
    },
    {
      id: "ops-s4",
      title: "Observability & safe release",
      duration: "4-6 weeks",
      goal: "Catch the regression before the customer writes in.",
      build: "A canary deploy that rolls back automatically when an eval gate or latency budget fails.",
      nodes: [
        {
          id: "ops-telemetry",
          label: "Metrics, logs, traces",
          summary: "Model services need the same three pillars as any service, plus quality signals.",
          topics: ["Prometheus and Grafana", "Request tracing", "Token and cost metrics", "SLOs for an AI endpoint"],
        },
        {
          id: "ops-drift-alerts",
          label: "Drift & quality alerts",
          summary: "Inputs change before outputs visibly break. Watch the inputs.",
          topics: ["Input distribution monitoring", "Prediction drift", "Proxy quality metrics", "Alert fatigue control"],
        },
        {
          id: "ops-eval-gates",
          label: "Eval gates in CI",
          summary: "A quality bar the deploy pipeline enforces, with a tolerance you chose deliberately.",
          topics: ["Baseline comparison", "Tolerances that neither block everything nor nothing", "Blocking a merge"],
          ref: {
            href: "/13-ai/09-evaluation-hallucination",
            label: "Ch 85 — Evaluation & Hallucination",
          },
        },
        {
          id: "ops-canary",
          label: "Canary & rollback",
          summary: "5% of traffic, a watched window, then promote or revert automatically.",
          topics: ["Traffic splitting", "SLO watch windows", "Automatic rollback", "Blue/green for weights"],
        },
        {
          id: "ops-incidents",
          label: "Incident response",
          summary: "Model failures need runbooks too — and a written post-mortem.",
          topics: ["Severity levels", "Runbooks per service", "Post-mortems and guardrails added"],
        },
      ],
    },
    {
      id: "ops-s5",
      title: "Governance & cost",
      duration: "4 weeks",
      goal: "The questions finance and compliance will ask, answered in advance.",
      build: "A cost dashboard broken down per model and per team, with an enforced quota.",
      nodes: [
        {
          id: "ops-model-cards",
          label: "Model cards & audit trails",
          summary: "What the model is, what it was trained on, who approved it.",
          topics: ["Model card contents", "Approval records", "Change history"],
        },
        {
          id: "ops-access",
          label: "Access control",
          summary: "Prompts, datasets, and weights are all sensitive assets.",
          topics: ["Role-based access", "Prompt and dataset permissions", "Weight exfiltration risk"],
        },
        {
          id: "ops-quotas",
          label: "Cost dashboards & quotas",
          summary: "Per-team visibility, and a hard stop before the quarter is gone.",
          topics: ["Attribution by team and model", "Quota enforcement", "Chargeback reporting"],
        },
        {
          id: "ops-retention",
          label: "Retention & log scrubbing",
          kind: "recommended",
          summary: "Inference logs contain user data. Decide the window before legal asks.",
          topics: ["Retention windows", "PII scrubbing in logs", "Region constraints"],
        },
      ],
    },
  ],
  tools: [
    "Terraform",
    "Kubernetes",
    "MLflow",
    "vLLM or Triton",
    "Prometheus + Grafana",
    "GitHub Actions",
    "A cloud with GPU quota",
  ],
  proofOfWork: [
    "A repo that stands the platform up from zero",
    "A cost-per-request number you reduced, with the method",
    "An incident write-up with the guardrail you added",
  ],
  chapter: { href: "/14-roadmaps/07-mlops-engineer", label: "Ch 94 — MLOps / AI Platform (full guide)" },
};

export const TRACKS: RoadmapTrack[] = [
  AI_ENGINEER,
  ML_ENGINEER,
  PROMPT_ENGINEER,
  FDE,
  DATA_ENGINEER,
  MLOPS,
];

/** Cross-cutting advice shown on the roadmaps index. */
export const ROADMAP_PRINCIPLES: string[] = [
  "One track at a time. Two half-finished paths read as neither on a CV.",
  "Ship in public. A deployed project beats a certificate in every one of these interviews.",
  "Measure everything you claim — \"faster\" and \"better\" need a number beside them.",
  "Re-read the job ads at every stage. Requirements in AI move faster than any roadmap, this one included.",
  "Six focused hours a week finishes a track. Twenty hours one weekend a month does not.",
  "Never pay for placement. Every tool here has a free tier or a local equivalent.",
];

export function trackBySlug(slug: string): RoadmapTrack | undefined {
  return TRACKS.find((t) => t.slug === slug);
}

/** Every node id in a track — the denominator for its progress percentage. */
export function trackNodeIds(track: RoadmapTrack): string[] {
  return track.stages.flatMap((stage) => stage.nodes.map((n) => n.id));
}

export function totalNodeCount(): number {
  return TRACKS.reduce((sum, t) => sum + trackNodeIds(t).length, 0);
}
