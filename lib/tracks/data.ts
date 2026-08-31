import type { RoadmapTrack } from "@/lib/roadmaps";

/** Data and analytics tracks. */
export const DATA_TRACKS: RoadmapTrack[] = [
  {
    slug: "data-scientist",
    title: "Data Scientist",
    shortTitle: "Data Scientist",
    category: "Data",
    mark: "DS",
    tagline:
      "Turn messy data into a decision someone acts on, and be able to say how confident you are.",
    market:
      "AI, ML and data science postings grew 163% year on year. The role has split: pure modelling work moved toward ML engineering, while data science increasingly means experimentation, causal inference and decision support.",
    timeline: "8-12 months part-time",
    entryBar: "Comfort with statistics and Python. A quantitative degree helps but is not required.",
    updated: "2026-08-31",
    prerequisites: [
      "Python and pandas at working level",
      "SQL: joins, aggregation, window functions",
      "Secondary-school statistics you are willing to rebuild properly",
    ],
    stages: [
      {
        id: "ds-s1",
        title: "Statistics that survive scrutiny",
        duration: "6-8 weeks",
        goal: "The part candidates skip and interviewers test hardest.",
        build:
          "Analyse a public dataset and write up the findings with confidence intervals and stated assumptions.",
        nodes: [
          {
            id: "ds-probability",
            label: "Probability and distributions",
            summary:
              "The vocabulary underneath every model and every test.",
            topics: [
              "Random variables and common distributions",
              "Expectation, variance and covariance",
              "Conditional probability and Bayes",
              "Central limit theorem and why it matters",
            ],
          },
          {
            id: "ds-inference",
            label: "Statistical inference",
            summary:
              "Hypothesis testing is asked in almost every data science interview.",
            topics: [
              "Sampling distributions and standard error",
              "Confidence intervals and their interpretation",
              "p-values, and what they do not mean",
              "Type I and II errors, power analysis",
            ],
          },
          {
            id: "ds-regression",
            label: "Regression and interpretation",
            summary:
              "Linear models remain the most-used and most-interviewed technique.",
            topics: [
              "Linear and logistic regression",
              "Assumptions and diagnostics",
              "Multicollinearity and regularisation",
              "Interpreting coefficients honestly",
            ],
          },
          {
            id: "ds-causal",
            label: "Causal inference",
            summary:
              "The fastest-growing expectation for the role, and a strong differentiator.",
            topics: [
              "Correlation versus causation in practice",
              "Confounders and Simpson's paradox",
              "Difference-in-differences and matching",
              "Instrumental variables and natural experiments",
            ],
          },
          {
            id: "ds-bias",
            label: "Bias and data quality",
            summary:
              "Most wrong conclusions come from the data, not the model.",
            topics: [
              "Selection and survivorship bias",
              "Missing data mechanisms and imputation",
              "Outliers and robust statistics",
              "Measurement error",
            ],
          },
        ],
      },
      {
        id: "ds-s2",
        title: "Working with data",
        duration: "5-7 weeks",
        goal: "Most of the job is acquiring, cleaning and shaping data before anything interesting happens.",
        build:
          "An end-to-end analysis from raw source to reproducible notebook with a documented cleaning log.",
        nodes: [
          {
            id: "ds-sql",
            label: "SQL for analysis",
            summary:
              "The most-used tool in the role and a guaranteed interview round.",
            topics: [
              "Joins, aggregation and grouping sets",
              "Window functions for cohorts and retention",
              "CTEs for readable analysis",
              "Query performance on large tables",
            ],
          },
          {
            id: "ds-python",
            label: "Python for data",
            summary:
              "pandas fluency, and knowing when to reach for something faster.",
            topics: [
              "pandas: reshaping, joins, groupby",
              "NumPy vectorisation",
              "Polars or DuckDB for larger data",
              "Reproducible environments",
            ],
          },
          {
            id: "ds-eda",
            label: "Exploratory analysis",
            summary:
              "Structured exploration rather than plotting everything and hoping.",
            topics: [
              "Univariate and bivariate exploration",
              "Distribution checks and transformations",
              "Segment analysis",
              "Documenting what you found and rejected",
            ],
          },
          {
            id: "ds-viz",
            label: "Visualisation and communication",
            summary:
              "A chart that misleads is worse than no chart. This is assessed directly.",
            topics: [
              "Choosing the right chart for the question",
              "Uncertainty in visualisations",
              "Avoiding misleading axes and scales",
              "Narrative structure for findings",
            ],
          },
          {
            id: "ds-pipelines",
            label: "Reproducibility",
            summary:
              "An analysis nobody can rerun is an opinion, not a result.",
            topics: [
              "Notebook discipline and refactoring to scripts",
              "Version control for analysis",
              "Data versioning and lineage",
              "Parameterised, rerunnable pipelines",
            ],
          },
        ],
      },
      {
        id: "ds-s3",
        title: "Machine learning for decisions",
        duration: "6-8 weeks",
        goal: "Enough modelling to build something useful, with rigorous evaluation.",
        build:
          "A predictive model with a baseline, honest validation, and a written analysis of where it fails.",
        nodes: [
          {
            id: "ds-supervised",
            label: "Supervised learning",
            summary:
              "Gradient boosting still wins most tabular problems, and interviews know it.",
            topics: [
              "Tree ensembles and gradient boosting",
              "Feature engineering for tabular data",
              "Hyperparameter tuning discipline",
              "When linear models are the better answer",
            ],
          },
          {
            id: "ds-evaluation",
            label: "Evaluation",
            summary:
              "Choosing the metric is a business decision disguised as a technical one.",
            topics: [
              "Precision, recall, ROC and PR curves",
              "Class imbalance handling",
              "Cross-validation and leakage",
              "Calibration and threshold selection",
            ],
          },
          {
            id: "ds-unsupervised",
            label: "Unsupervised methods",
            summary:
              "Segmentation and dimensionality reduction, used carefully.",
            topics: [
              "Clustering and choosing k",
              "PCA and embeddings",
              "Anomaly detection",
              "Validating unsupervised results",
            ],
          },
          {
            id: "ds-timeseries",
            label: "Time series",
            kind: "recommended",
            summary:
              "Forecasting is common in business contexts and has its own traps.",
            topics: [
              "Seasonality and trend decomposition",
              "Backtesting without leakage",
              "Classical models versus gradient boosting",
              "Forecast intervals",
            ],
          },
          {
            id: "ds-interpretability",
            label: "Interpretability",
            summary:
              "Stakeholders act on explanations, not predictions.",
            topics: [
              "Feature importance and its pitfalls",
              "SHAP values and partial dependence",
              "Model cards and documentation",
              "Fairness assessment",
            ],
          },
        ],
      },
      {
        id: "ds-s4",
        title: "Experimentation",
        duration: "5-6 weeks",
        goal: "At product companies, A/B testing is the single most-used data science skill.",
        build:
          "Design, run and analyse an experiment, including power analysis and a written decision memo.",
        nodes: [
          {
            id: "ds-abtest",
            label: "A/B testing",
            summary:
              "The most reliably asked topic in product data science interviews.",
            topics: [
              "Randomisation and assignment units",
              "Power analysis and sample size",
              "Primary, secondary and guardrail metrics",
              "Reading results without peeking",
            ],
          },
          {
            id: "ds-pitfalls",
            label: "Experiment pitfalls",
            summary:
              "Knowing the failure modes is what separates senior candidates.",
            topics: [
              "Peeking and sequential testing",
              "Multiple comparisons",
              "Network effects and interference",
              "Novelty and primacy effects",
            ],
          },
          {
            id: "ds-metrics",
            label: "Metric design",
            summary:
              "Choosing what to measure is more consequential than how you analyse it.",
            topics: [
              "North star and input metrics",
              "Proxy metrics and gaming",
              "Sensitivity versus meaningfulness",
              "Long-term versus short-term effects",
            ],
          },
          {
            id: "ds-quasi",
            label: "When you cannot experiment",
            summary:
              "Half of real questions cannot be randomised. Quasi-experimental methods fill the gap.",
            topics: [
              "Difference-in-differences",
              "Synthetic control",
              "Regression discontinuity",
              "Stating assumptions explicitly",
            ],
          },
          {
            id: "ds-decision",
            label: "From analysis to decision",
            summary:
              "The output of the role is a decision, not a notebook.",
            topics: [
              "Decision memos and recommendations",
              "Communicating uncertainty to executives",
              "Cost of being wrong in each direction",
              "Following up on the decision made",
            ],
          },
        ],
      },
      {
        id: "ds-s5",
        title: "Interview preparation",
        duration: "5-6 weeks",
        goal: "Data science loops are wide: SQL, statistics, modelling, a case, and communication.",
        build:
          "Two portfolio analyses that answer a real question, with clear write-ups and honest limitations.",
        nodes: [
          {
            id: "ds-sql-round",
            label: "SQL round",
            summary:
              "Almost always present, and usually the first filter.",
            topics: [
              "Window functions under time pressure",
              "Cohort and retention queries",
              "Funnel analysis in SQL",
              "Debugging a wrong result",
            ],
          },
          {
            id: "ds-stats-round",
            label: "Statistics round",
            summary:
              "Conceptual questions where precision of language matters.",
            topics: [
              "Explain a p-value to a product manager",
              "When would you not run an A/B test",
              "Identify the confounder in a scenario",
              "Sample size reasoning aloud",
            ],
          },
          {
            id: "ds-case",
            label: "Case study round",
            summary:
              "An open business question. Structure is what is being graded.",
            topics: [
              "Clarifying the actual question",
              "Choosing metrics and data sources",
              "Stating assumptions",
              "Recommending an action with caveats",
            ],
          },
          {
            id: "ds-ml-round",
            label: "Modelling round",
            summary:
              "Fewer algorithm derivations now, more judgement about approach.",
            topics: [
              "Framing a business problem as an ML problem",
              "Choosing and defending a metric",
              "Handling leakage and imbalance",
              "Explaining a model to non-experts",
            ],
            ref: { href: "/13-ai/01-llm-fundamentals", label: "Ch — LLM Fundamentals" },
          },
          {
            id: "ds-portfolio",
            label: "Portfolio",
            summary:
              "One deep analysis of a real question beats five tutorial notebooks.",
            topics: [
              "A question that mattered, answered end to end",
              "Documented assumptions and limitations",
              "Clear visualisations",
              "Written recommendation",
            ],
          },
        ],
      },
    ],
    tools: [
      "Python",
      "pandas / Polars",
      "SQL",
      "scikit-learn",
      "statsmodels",
      "Jupyter",
      "dbt",
      "Tableau / Looker",
    ],
    proofOfWork: [
      "An end-to-end analysis with a stated recommendation",
      "An experiment design document with power analysis",
      "A model with honest evaluation and failure analysis",
      "A causal analysis with assumptions declared",
    ],
  },

  {
    slug: "data-analyst",
    title: "Data Analyst",
    shortTitle: "Data Analyst",
    category: "Data",
    mark: "DA",
    tagline:
      "Answer the questions the business is actually asking, quickly and correctly, in a form people can act on.",
    market:
      "The most accessible entry point into data work, hiring across every industry rather than only tech. Progresses naturally into analytics engineering or data science.",
    timeline: "4-7 months part-time",
    entryBar: "None technical. Numeracy and curiosity are the real requirements.",
    updated: "2026-08-31",
    prerequisites: [
      "Comfort with spreadsheets",
      "Willingness to learn SQL properly",
      "Clear written communication",
    ],
    stages: [
      {
        id: "da-s1",
        title: "SQL and spreadsheets",
        duration: "4-6 weeks",
        goal: "SQL is the job. Everything else is presentation.",
        build:
          "Answer twenty real business questions against a public database, each with the query and the answer.",
        nodes: [
          {
            id: "da-sql-basics",
            label: "SQL fundamentals",
            summary:
              "The single most valuable skill in this role, and the first interview filter.",
            topics: [
              "SELECT, WHERE, GROUP BY, HAVING",
              "Inner, left and self joins",
              "Subqueries and CTEs",
              "NULL handling and its surprises",
            ],
          },
          {
            id: "da-sql-advanced",
            label: "Analytical SQL",
            summary:
              "Window functions separate analysts who get promoted from those who do not.",
            topics: [
              "Window functions: rank, lag, running totals",
              "Cohort and retention analysis",
              "Funnel and conversion queries",
              "Date handling and time zones",
            ],
          },
          {
            id: "da-excel",
            label: "Spreadsheets",
            summary:
              "Still the most widely used analytics tool in the world. Do not skip it.",
            topics: [
              "Lookup functions and pivot tables",
              "Power Query for repeatable cleaning",
              "Modelling and scenario analysis",
              "When to move out of a spreadsheet",
            ],
          },
          {
            id: "da-cleaning",
            label: "Data cleaning",
            summary:
              "Most of the job. Interviews ask how you handle dirty data specifically.",
            topics: [
              "Deduplication and identity resolution",
              "Handling missing and inconsistent values",
              "Type and format normalisation",
              "Documenting cleaning decisions",
            ],
          },
          {
            id: "da-quality",
            label: "Data quality and trust",
            summary:
              "A wrong number in a dashboard destroys trust in every number.",
            topics: [
              "Sanity checks and reconciliation",
              "Row count and total validation",
              "Understanding source system quirks",
              "Escalating data problems",
            ],
          },
        ],
      },
      {
        id: "da-s2",
        title: "Visualisation and dashboards",
        duration: "4-5 weeks",
        goal: "Getting the answer is half the job. Making it usable is the other half.",
        build:
          "A dashboard a real person uses weekly, with a documented definition for every metric.",
        nodes: [
          {
            id: "da-viz",
            label: "Visualisation principles",
            summary:
              "Chart choice and honesty. Interviewers show you a bad chart and ask what is wrong.",
            topics: [
              "Matching chart type to question",
              "Colour, scale and axis honesty",
              "Reducing chart clutter",
              "Accessibility in charts",
            ],
          },
          {
            id: "da-bi-tools",
            label: "BI tooling",
            summary:
              "Power BI, Tableau or Looker. Pick the one your target employers use.",
            topics: [
              "Data modelling inside the tool",
              "Calculated fields and measures",
              "Filters, parameters and drill-down",
              "Performance of large dashboards",
            ],
          },
          {
            id: "da-dashboard",
            label: "Dashboard design",
            summary:
              "Most dashboards are never opened twice. Designing for actual use is the skill.",
            topics: [
              "Designing around a decision",
              "Layout and information hierarchy",
              "Self-service versus curated views",
              "Maintenance and deprecation",
            ],
          },
          {
            id: "da-metrics",
            label: "Metric definitions",
            summary:
              "Two teams with different definitions of 'active user' is a classic organisational failure.",
            topics: [
              "Writing unambiguous metric definitions",
              "Certified versus ad-hoc metrics",
              "Metric governance and ownership",
              "Handling definition changes over time",
            ],
          },
          {
            id: "da-storytelling",
            label: "Communicating findings",
            summary:
              "The output is a decision. Structure the message accordingly.",
            topics: [
              "Leading with the answer",
              "Writing for executives",
              "Presenting uncertainty honestly",
              "Handling challenges to your numbers",
            ],
          },
        ],
      },
      {
        id: "da-s3",
        title: "Analysis techniques",
        duration: "4-6 weeks",
        goal: "Move from reporting what happened to explaining why and what to do.",
        build:
          "A deep-dive analysis explaining a real trend, with alternative explanations considered and ruled out.",
        nodes: [
          {
            id: "da-stats",
            label: "Statistics for analysts",
            summary:
              "Enough to avoid confidently reporting noise as a finding.",
            topics: [
              "Averages, medians and distribution shape",
              "Variability and confidence intervals",
              "Correlation and its limits",
              "Significance in plain language",
            ],
          },
          {
            id: "da-segmentation",
            label: "Segmentation and cohorts",
            summary:
              "Aggregates hide the story. Segmentation is where insight usually lives.",
            topics: [
              "Cohort analysis over time",
              "Behavioural segmentation",
              "RFM and customer value analysis",
              "Simpson's paradox in segments",
            ],
          },
          {
            id: "da-funnel",
            label: "Funnel and product analytics",
            summary:
              "The most common analysis type at product companies.",
            topics: [
              "Funnel definition and drop-off analysis",
              "Retention curves",
              "Event tracking and instrumentation gaps",
              "Attribution basics",
            ],
          },
          {
            id: "da-forecast",
            label: "Forecasting and targets",
            kind: "recommended",
            summary:
              "Business planning needs numbers for next quarter, not last one.",
            topics: [
              "Trend and seasonality",
              "Simple forecasting methods",
              "Scenario and sensitivity analysis",
              "Communicating forecast uncertainty",
            ],
          },
          {
            id: "da-experiment",
            label: "Reading experiments",
            summary:
              "Analysts are often asked to interpret tests they did not design.",
            topics: [
              "What a p-value does and does not say",
              "Sample size adequacy",
              "Spotting a broken experiment",
              "Practical versus statistical significance",
            ],
          },
        ],
      },
      {
        id: "da-s4",
        title: "Scaling your work",
        duration: "3-5 weeks",
        goal: "Stop being a query service. Build things that answer questions without you.",
        build:
          "Automate a recurring report end to end and document the model behind it.",
        nodes: [
          {
            id: "da-python",
            label: "Python for analysts",
            summary:
              "The step up from spreadsheets, and the gateway to further roles.",
            topics: [
              "pandas for analysis",
              "Automating repetitive reports",
              "APIs and data collection",
              "Notebooks to scheduled scripts",
            ],
          },
          {
            id: "da-modelling",
            label: "Data modelling basics",
            summary:
              "Understanding the warehouse makes your queries correct and fast.",
            topics: [
              "Fact and dimension tables",
              "Grain and joins that do not fan out",
              "Slowly changing dimensions",
              "Reading a data dictionary",
            ],
          },
          {
            id: "da-dbt",
            label: "Transformation with dbt",
            kind: "recommended",
            summary:
              "The bridge into analytics engineering, and increasingly expected in analyst job ads.",
            topics: [
              "Models, refs and lineage",
              "Tests for data quality",
              "Documentation generation",
              "Version control for analytics",
            ],
          },
          {
            id: "da-automation",
            label: "Automation and scheduling",
            summary:
              "Every manual weekly report is an hour you never get back.",
            topics: [
              "Scheduled refreshes and alerts",
              "Parameterised reports",
              "Email and chat delivery",
              "Monitoring for silent failures",
            ],
          },
          {
            id: "da-stakeholder",
            label: "Stakeholder management",
            summary:
              "Turning a vague request into an answerable question is most of the value you add.",
            topics: [
              "Clarifying the real question",
              "Managing request queues and priorities",
              "Saying no to low-value work",
              "Following up on impact",
            ],
          },
        ],
      },
      {
        id: "da-s5",
        title: "Interview preparation",
        duration: "3-4 weeks",
        goal: "Analyst interviews are SQL, a case, and a presentation of past work.",
        build:
          "A portfolio of three analyses with the question, method, answer and recommendation.",
        nodes: [
          {
            id: "da-sql-round",
            label: "SQL round",
            summary:
              "Live SQL against a schema you have just been shown. Practice under time pressure.",
            topics: [
              "Joins and aggregation quickly",
              "Window functions",
              "Debugging a query that returns wrong rows",
              "Explaining your query as you write",
            ],
          },
          {
            id: "da-case-round",
            label: "Case round",
            summary:
              "Metrics dropped last week. What do you look at, in what order.",
            topics: [
              "Structured diagnosis of a metric change",
              "Segmenting to isolate the cause",
              "Ruling out data quality issues",
              "Recommending next steps",
            ],
          },
          {
            id: "da-presentation",
            label: "Presentation round",
            summary:
              "Present an analysis to a mixed audience and defend it.",
            topics: [
              "Structuring a ten-minute analysis talk",
              "Anticipating challenges",
              "Admitting limitations well",
              "Handling a hostile question",
            ],
          },
          {
            id: "da-tooling",
            label: "Tool-specific questions",
            summary:
              "Expect direct questions on whichever BI tool the job uses.",
            topics: [
              "Power BI DAX or Tableau calculations",
              "Data model design in the tool",
              "Performance troubleshooting",
              "Row-level security",
            ],
          },
          {
            id: "da-portfolio",
            label: "Portfolio and progression",
            summary:
              "Public dashboards and write-ups substitute for experience.",
            topics: [
              "A public dashboard with real data",
              "Written analyses with recommendations",
              "Path to analytics engineering",
              "Path to data science",
            ],
          },
        ],
      },
    ],
    tools: [
      "SQL",
      "Excel / Sheets",
      "Power BI / Tableau",
      "Python",
      "dbt",
      "Looker",
      "BigQuery / Snowflake",
    ],
    proofOfWork: [
      "A public dashboard someone actually uses",
      "Three written analyses with recommendations",
      "An automated recurring report",
      "A documented metric definition set",
    ],
  },

  {
    slug: "analytics-engineer",
    title: "Analytics Engineer",
    shortTitle: "Analytics Eng",
    category: "Data",
    mark: "AE",
    tagline:
      "Own the transformation layer: turn raw warehouse tables into trustworthy, documented, tested models.",
    market:
      "Created by dbt and the modern warehouse, and now a standard role on data teams. Sits between analysts and data engineers, and pays closer to engineering.",
    timeline: "5-8 months part-time",
    entryBar: "Strong SQL. Analysts moving up are the most common entrants.",
    updated: "2026-08-31",
    prerequisites: [
      "SQL including window functions",
      "Git basics",
      "Understanding of how a business uses its data",
    ],
    stages: [
      {
        id: "ae-s1",
        title: "The modern data stack",
        duration: "4-5 weeks",
        goal: "Understand where your layer sits and what the layers either side guarantee.",
        build:
          "Load a raw source into a warehouse and build your first three transformation models on top.",
        nodes: [
          {
            id: "ae-warehouse",
            label: "Cloud warehouses",
            summary:
              "Columnar storage and separated compute change how you write SQL.",
            topics: [
              "Columnar storage and pruning",
              "Compute and storage separation",
              "Clustering, partitioning and sort keys",
              "Cost model per query",
            ],
          },
          {
            id: "ae-elt",
            label: "ELT versus ETL",
            summary:
              "Why transformation moved into the warehouse, and what that implies.",
            topics: [
              "Ingestion tools and managed connectors",
              "Raw, staging and mart layers",
              "Idempotent transformations",
              "Full refresh versus incremental",
            ],
          },
          {
            id: "ae-dbt-basics",
            label: "dbt fundamentals",
            summary:
              "The defining tool of the role. Fluency is assumed in interviews.",
            topics: [
              "Models, refs and the DAG",
              "Sources and freshness checks",
              "Materialisations and their trade-offs",
              "Project structure conventions",
            ],
          },
          {
            id: "ae-git",
            label: "Software practices for analytics",
            summary:
              "The 'engineer' half of the title: version control, review, CI.",
            topics: [
              "Branching and pull request review",
              "CI running dbt build",
              "Environments: dev, staging, production",
              "Code review for SQL",
            ],
          },
          {
            id: "ae-sql-depth",
            label: "SQL at warehouse scale",
            summary:
              "Query patterns that are correct on a laptop and ruinous on a billion rows.",
            topics: [
              "Window functions and qualify",
              "Avoiding fan-out joins",
              "Incremental predicates",
              "Reading a warehouse query plan",
            ],
          },
        ],
      },
      {
        id: "ae-s2",
        title: "Data modelling",
        duration: "5-7 weeks",
        goal: "The intellectual core of the role: designing models the whole company relies on.",
        build:
          "Model a business domain from raw events to a documented mart, with grain declared everywhere.",
        nodes: [
          {
            id: "ae-dimensional",
            label: "Dimensional modelling",
            summary:
              "Kimball still underpins most warehouse design, and interviews expect the vocabulary.",
            topics: [
              "Facts and dimensions",
              "Grain declaration and why it matters",
              "Star versus snowflake",
              "Conformed dimensions across marts",
            ],
          },
          {
            id: "ae-scd",
            label: "History and change",
            summary:
              "Handling attributes that change over time is where models get subtle.",
            topics: [
              "Slowly changing dimensions",
              "Snapshots and point-in-time joins",
              "Event versus state modelling",
              "Late-arriving data",
            ],
          },
          {
            id: "ae-layers",
            label: "Layering and structure",
            summary:
              "A well-layered project is readable by someone who joins next year.",
            topics: [
              "Staging, intermediate and mart layers",
              "Naming conventions that scale",
              "Reusable macros without over-abstraction",
              "Managing model sprawl",
            ],
          },
          {
            id: "ae-metrics",
            label: "Metrics layer",
            summary:
              "Defining a metric once, used everywhere, is the promise of the role.",
            topics: [
              "Semantic layer concepts",
              "Metric definitions in code",
              "Avoiding duplicated business logic",
              "Serving metrics to BI tools",
            ],
          },
          {
            id: "ae-performance",
            label: "Performance and cost",
            summary:
              "Warehouse bills are a common reason analytics engineers get attention.",
            topics: [
              "Incremental model design",
              "Partitioning and clustering strategy",
              "Query cost profiling",
              "Materialisation choice by usage",
            ],
          },
        ],
      },
      {
        id: "ae-s3",
        title: "Testing and reliability",
        duration: "4-5 weeks",
        goal: "Trust is the product. A wrong dashboard costs more than a late one.",
        build:
          "Add tests, freshness checks and alerting across a project so a bad load fails loudly.",
        nodes: [
          {
            id: "ae-testing",
            label: "Data testing",
            summary:
              "The habit that distinguishes analytics engineering from ad-hoc SQL.",
            topics: [
              "Uniqueness, not-null, relationship tests",
              "Accepted values and custom tests",
              "Testing business logic assumptions",
              "Test severity and thresholds",
            ],
          },
          {
            id: "ae-quality",
            label: "Data quality monitoring",
            summary:
              "Catching silent failures where data arrives but is wrong.",
            topics: [
              "Freshness and volume anomaly detection",
              "Schema change detection",
              "Row count reconciliation to source",
              "Alert routing and ownership",
            ],
          },
          {
            id: "ae-contracts",
            label: "Data contracts",
            summary:
              "Upstream schema changes are the leading cause of broken pipelines.",
            topics: [
              "Contract definition with producers",
              "Breaking change detection",
              "Versioning downstream models",
              "Negotiating with source system owners",
            ],
          },
          {
            id: "ae-docs",
            label: "Documentation and lineage",
            summary:
              "Nobody trusts a table they cannot trace to a source.",
            topics: [
              "Column-level descriptions",
              "Lineage graphs and impact analysis",
              "Data catalogue integration",
              "Keeping docs current automatically",
            ],
          },
          {
            id: "ae-orchestration",
            label: "Orchestration",
            summary:
              "Running the DAG reliably, with retries and sensible dependencies.",
            topics: [
              "Scheduling and dependency management",
              "Airflow or Dagster integration",
              "Backfills without duplication",
              "Failure handling and reruns",
            ],
          },
        ],
      },
      {
        id: "ae-s4",
        title: "Serving the business",
        duration: "3-5 weeks",
        goal: "Models nobody uses are wasted work. Adoption is part of the job.",
        build:
          "Migrate a BI dashboard onto your models and retire the duplicated logic behind it.",
        nodes: [
          {
            id: "ae-bi",
            label: "BI integration",
            summary:
              "Where your models meet the people who consume them.",
            topics: [
              "Exposing marts to BI tools",
              "Avoiding logic duplication in dashboards",
              "Row-level security in the warehouse",
              "Performance for interactive queries",
            ],
          },
          {
            id: "ae-selfservice",
            label: "Enabling self-service",
            summary:
              "Reducing the queue of ad-hoc requests is the measurable outcome.",
            topics: [
              "Designing for analyst consumption",
              "Certified datasets",
              "Training analysts on the model",
              "Measuring self-service adoption",
            ],
          },
          {
            id: "ae-governance",
            label: "Governance and access",
            summary:
              "Who can see which columns is increasingly a legal question.",
            topics: [
              "PII classification and masking",
              "Role-based warehouse access",
              "Retention policies",
              "Audit requirements",
            ],
          },
          {
            id: "ae-reverse",
            label: "Reverse ETL and activation",
            kind: "recommended",
            summary:
              "Pushing modelled data back into operational tools closes the loop.",
            topics: [
              "Syncing to CRM and marketing tools",
              "Idempotency and sync failure handling",
              "Field mapping and ownership",
              "Monitoring downstream sync health",
            ],
          },
          {
            id: "ae-collab",
            label: "Working across teams",
            summary:
              "The role sits between three groups with different priorities.",
            topics: [
              "Negotiating with data engineers",
              "Gathering requirements from analysts",
              "Explaining trade-offs to stakeholders",
              "Prioritising a shared backlog",
            ],
          },
        ],
      },
      {
        id: "ae-s5",
        title: "Interview preparation",
        duration: "3-4 weeks",
        goal: "Interviews centre on SQL, modelling decisions, and how you keep data trustworthy.",
        build:
          "A public dbt project with tests, docs and a written modelling rationale.",
        nodes: [
          {
            id: "ae-sql-round",
            label: "SQL round",
            summary:
              "Advanced SQL, usually with a modelling twist rather than a puzzle.",
            topics: [
              "Window functions and deduplication",
              "Point-in-time joins",
              "Incremental logic correctness",
              "Explaining query cost",
            ],
          },
          {
            id: "ae-modelling-round",
            label: "Modelling round",
            summary:
              "Given a business domain, design the models out loud.",
            topics: [
              "Identifying grain and keys",
              "Fact and dimension decisions",
              "Handling history requirements",
              "Trade-offs you deliberately made",
            ],
          },
          {
            id: "ae-quality-round",
            label: "Data quality round",
            summary:
              "A dashboard shows a wrong number. Walk through your investigation.",
            topics: [
              "Tracing lineage back to source",
              "Distinguishing model bug from source issue",
              "Preventing recurrence with tests",
              "Communicating the incident",
            ],
          },
          {
            id: "ae-dbt-round",
            label: "Tooling round",
            summary:
              "Direct dbt questions: materialisations, macros, incremental strategy.",
            topics: [
              "Choosing a materialisation",
              "Incremental strategies and their risks",
              "Macros and packages",
              "Project structure decisions",
            ],
          },
          {
            id: "ae-portfolio",
            label: "Portfolio",
            summary:
              "A public dbt repository is the clearest possible evidence for this role.",
            topics: [
              "Public project with docs generated",
              "Tests covering real assumptions",
              "A written modelling decision record",
              "Before/after cost or performance work",
            ],
          },
        ],
      },
    ],
    tools: [
      "dbt",
      "Snowflake / BigQuery",
      "SQL",
      "Git",
      "Airflow / Dagster",
      "Looker",
      "Great Expectations",
    ],
    proofOfWork: [
      "A public dbt project with tests and documentation",
      "A dimensional model with grain documented per table",
      "A data quality incident write-up and the test that now prevents it",
      "A warehouse cost reduction with measured savings",
    ],
  },

  {
    slug: "bi-developer",
    title: "BI Developer",
    shortTitle: "BI Developer",
    category: "Data",
    mark: "BI",
    tagline:
      "Build the reporting layer an organisation runs on, from data model to governed, performant dashboards.",
    market:
      "Enterprise demand is steady and geographically broad, especially in finance, healthcare, manufacturing and the public sector. Less competitive than data science with comparable stability.",
    timeline: "4-7 months part-time",
    entryBar: "Analytical background. Very accessible from finance or operations roles.",
    updated: "2026-08-31",
    prerequisites: [
      "SQL fundamentals",
      "Spreadsheet modelling experience",
      "Understanding of business reporting needs",
    ],
    stages: [
      {
        id: "bi-s1",
        title: "Data foundations",
        duration: "4-5 weeks",
        goal: "A dashboard is only as good as the model beneath it.",
        build:
          "Build a star schema from a transactional source and a first report on top of it.",
        nodes: [
          {
            id: "bi-sql",
            label: "SQL for reporting",
            summary:
              "Reporting SQL has its own patterns: date spines, aggregation and reconciliation.",
            topics: [
              "Joins, aggregation and grouping",
              "Window functions for period comparison",
              "Date dimensions and calendars",
              "Reconciling totals to source systems",
            ],
          },
          {
            id: "bi-modelling",
            label: "Dimensional modelling",
            summary:
              "Star schemas exist because they make reporting fast and comprehensible.",
            topics: [
              "Facts, dimensions and grain",
              "Star versus snowflake trade-offs",
              "Role-playing dimensions",
              "Handling many-to-many relationships",
            ],
          },
          {
            id: "bi-etl",
            label: "Data preparation",
            summary:
              "Getting data into shape is usually most of a BI project.",
            topics: [
              "Power Query and dataflows",
              "Incremental refresh design",
              "Handling source system quirks",
              "Staging versus direct query",
            ],
          },
          {
            id: "bi-warehouse",
            label: "Warehouse basics",
            summary:
              "Knowing what the warehouse can do stops you rebuilding it in the BI tool.",
            topics: [
              "Warehouse versus data mart",
              "Views, materialised views and tables",
              "Push-down of aggregation",
              "Working with the data team",
            ],
          },
          {
            id: "bi-quality",
            label: "Data quality",
            summary:
              "One wrong figure in a board pack undoes a year of credibility.",
            topics: [
              "Validation against source",
              "Handling late and restated data",
              "Null and edge case behaviour",
              "Audit trails for reported figures",
            ],
          },
        ],
      },
      {
        id: "bi-s2",
        title: "Building reports",
        duration: "5-6 weeks",
        goal: "Tool depth: the calculation language is where BI developers are actually tested.",
        build:
          "A multi-page report with time intelligence, drill-through and row-level security.",
        nodes: [
          {
            id: "bi-dax",
            label: "Calculation languages",
            summary:
              "DAX or LookML fluency is the technical core of the role.",
            topics: [
              "Measures versus calculated columns",
              "Filter context and context transition",
              "CALCULATE and its patterns",
              "Debugging unexpected results",
            ],
          },
          {
            id: "bi-time",
            label: "Time intelligence",
            summary:
              "Every business report is a comparison against a previous period.",
            topics: [
              "Year to date and rolling periods",
              "Prior period and prior year comparison",
              "Fiscal calendars",
              "Handling incomplete current periods",
            ],
          },
          {
            id: "bi-visual",
            label: "Report design",
            summary:
              "Clarity beats decoration, and interviewers will critique your layout.",
            topics: [
              "Layout and visual hierarchy",
              "Chart selection for the question",
              "Consistent formatting and theming",
              "Accessibility and colour choices",
            ],
          },
          {
            id: "bi-interactivity",
            label: "Interactivity",
            summary:
              "Letting users answer their own follow-up questions.",
            topics: [
              "Slicers, filters and bookmarks",
              "Drill-through and drill-down",
              "Parameters and what-if analysis",
              "Tooltips that add information",
            ],
          },
          {
            id: "bi-security",
            label: "Row-level security",
            summary:
              "Getting this wrong is a data breach, not a bug.",
            topics: [
              "Static and dynamic RLS",
              "Testing security as different users",
              "Object-level security",
              "Common RLS performance pitfalls",
            ],
          },
        ],
      },
      {
        id: "bi-s3",
        title: "Performance and scale",
        duration: "3-5 weeks",
        goal: "Slow reports are abandoned reports.",
        build:
          "Take a slow report from thirty seconds to under three, and document what caused the difference.",
        nodes: [
          {
            id: "bi-perf",
            label: "Performance optimisation",
            summary:
              "A signature BI interview topic, and the most common real complaint.",
            topics: [
              "Model size and column cardinality",
              "Measure efficiency and iterators",
              "Reducing visual count per page",
              "Aggregation tables",
            ],
          },
          {
            id: "bi-storage",
            label: "Storage modes",
            summary:
              "Import, DirectQuery or hybrid, chosen for a reason rather than by default.",
            topics: [
              "Import versus DirectQuery trade-offs",
              "Composite models and aggregations",
              "Refresh windows and incremental refresh",
              "Real-time reporting options",
            ],
          },
          {
            id: "bi-diagnostics",
            label: "Diagnostics",
            summary:
              "Measuring where the time goes rather than guessing.",
            topics: [
              "Performance analyser and query traces",
              "DAX Studio and VertiPaq analysis",
              "Identifying the expensive measure",
              "Warehouse-side query tuning",
            ],
          },
          {
            id: "bi-largemodels",
            label: "Large model design",
            summary:
              "Techniques that only matter once the model outgrows memory.",
            topics: [
              "Partitioning strategy",
              "Aggregation awareness",
              "Reducing model footprint",
              "Archiving historical data",
            ],
          },
          {
            id: "bi-monitoring",
            label: "Usage monitoring",
            kind: "recommended",
            summary:
              "Knowing which reports are used tells you what to maintain and what to retire.",
            topics: [
              "Usage metrics and adoption tracking",
              "Refresh failure alerting",
              "Capacity monitoring",
              "Retiring unused content",
            ],
          },
        ],
      },
      {
        id: "bi-s4",
        title: "Governance and delivery",
        duration: "3-4 weeks",
        goal: "Enterprise BI is as much about control and process as about charts.",
        build:
          "Set up a governed workspace structure with deployment pipelines and documented ownership.",
        nodes: [
          {
            id: "bi-governance",
            label: "Governance",
            summary:
              "Uncontrolled report sprawl is the standard enterprise BI failure.",
            topics: [
              "Workspace and content lifecycle",
              "Certified and promoted datasets",
              "Naming and ownership standards",
              "Managing self-service sprawl",
            ],
          },
          {
            id: "bi-deployment",
            label: "Deployment and source control",
            summary:
              "BI is software, and increasingly treated as such.",
            topics: [
              "Development, test and production workspaces",
              "Deployment pipelines",
              "Version control for BI artefacts",
              "Change review process",
            ],
          },
          {
            id: "bi-requirements",
            label: "Requirements gathering",
            summary:
              "Most failed BI projects failed at the requirements stage.",
            topics: [
              "Interviewing stakeholders effectively",
              "Defining metrics unambiguously",
              "Managing scope and expectations",
              "Prototyping before building",
            ],
          },
          {
            id: "bi-training",
            label: "Enablement",
            summary:
              "A report nobody understands is a report nobody uses.",
            topics: [
              "User training and documentation",
              "Report walkthroughs",
              "Handling change requests",
              "Building analyst self-sufficiency",
            ],
          },
          {
            id: "bi-integration",
            label: "Embedding and distribution",
            kind: "recommended",
            summary:
              "Getting reports to where people already work.",
            topics: [
              "Embedded analytics",
              "Subscriptions and alerts",
              "Mobile report design",
              "Export and paginated reporting",
            ],
          },
        ],
      },
      {
        id: "bi-s5",
        title: "Interview preparation",
        duration: "2-4 weeks",
        goal: "BI interviews are tool-specific, practical, and often include a build exercise.",
        build:
          "A public portfolio report with a documented model and a written design rationale.",
        nodes: [
          {
            id: "bi-tool-round",
            label: "Tool round",
            summary:
              "Deep questions on the specific platform the employer uses.",
            topics: [
              "DAX filter context questions",
              "Model relationship troubleshooting",
              "Storage mode decisions",
              "Security implementation",
            ],
          },
          {
            id: "bi-build-round",
            label: "Build exercise",
            summary:
              "A dataset and a brief, usually with a short deadline.",
            topics: [
              "Scoping to the time available",
              "Model first, visuals second",
              "Documenting assumptions",
              "Presenting the result",
            ],
          },
          {
            id: "bi-sql-round",
            label: "SQL round",
            summary:
              "Still tested, since most BI work starts with a query.",
            topics: [
              "Aggregation and joins",
              "Window functions",
              "Date logic",
              "Query optimisation basics",
            ],
          },
          {
            id: "bi-scenario",
            label: "Scenario round",
            summary:
              "Users say the numbers are wrong. What do you do.",
            topics: [
              "Reconciliation methodology",
              "Distinguishing model from source errors",
              "Managing stakeholder confidence",
              "Preventing recurrence",
            ],
          },
          {
            id: "bi-portfolio",
            label: "Portfolio",
            summary:
              "Published reports with real data are the accepted evidence.",
            topics: [
              "A public interactive report",
              "Documented data model",
              "A performance optimisation case study",
              "Certification in your target tool",
            ],
          },
        ],
      },
    ],
    tools: [
      "Power BI",
      "Tableau",
      "Looker",
      "DAX",
      "SQL",
      "Power Query",
      "DAX Studio",
      "SSAS / Tabular",
    ],
    proofOfWork: [
      "A published interactive report with a documented model",
      "A performance optimisation case study with timings",
      "A governed workspace structure you designed",
      "A vendor certification in your target tool",
    ],
  },

  {
    slug: "big-data-engineer",
    title: "Big Data Engineer",
    shortTitle: "Big Data",
    category: "Data",
    mark: "BD",
    tagline:
      "Process data at a scale where the naive approach stops working: distributed compute, streaming and lakehouse architecture.",
    market:
      "Specialised end of data engineering, concentrated in large enterprises, ad-tech, fintech and anywhere with genuine volume. Fewer roles than general data engineering, and better paid.",
    timeline: "8-12 months part-time",
    entryBar: "Existing data engineering or backend experience.",
    updated: "2026-08-31",
    prerequisites: [
      "Python or Scala at a solid level",
      "SQL and data modelling fundamentals",
      "Understanding of distributed systems basics",
    ],
    stages: [
      {
        id: "bd-s1",
        title: "Distributed processing",
        duration: "6-8 weeks",
        goal: "Spark is the centre of this role, and its execution model is the interview.",
        build:
          "Process a dataset too large for one machine, and tune the job from first run to production-ready.",
        nodes: [
          {
            id: "bd-spark-core",
            label: "Spark execution model",
            summary:
              "Understanding stages, shuffles and partitions is what makes tuning possible.",
            topics: [
              "Driver, executors and cluster managers",
              "Jobs, stages, tasks and the DAG",
              "Narrow versus wide transformations",
              "Lazy evaluation and actions",
            ],
          },
          {
            id: "bd-spark-api",
            label: "DataFrames and SQL",
            summary:
              "The API you will actually write, plus the optimiser behind it.",
            topics: [
              "DataFrame API and Spark SQL",
              "Catalyst optimiser and predicate pushdown",
              "UDFs and why to avoid them",
              "Adaptive query execution",
            ],
          },
          {
            id: "bd-shuffle",
            label: "Shuffles and skew",
            summary:
              "Nearly every slow Spark job is a shuffle problem or a skew problem.",
            topics: [
              "Why shuffles are expensive",
              "Partition sizing and repartitioning",
              "Detecting and fixing data skew",
              "Broadcast joins and their limits",
            ],
          },
          {
            id: "bd-tuning",
            label: "Performance tuning",
            summary:
              "Reading the Spark UI under time pressure is a standard interview exercise.",
            topics: [
              "Reading the Spark UI",
              "Memory configuration and spill",
              "Caching decisions",
              "Cluster sizing and cost",
            ],
          },
          {
            id: "bd-formats",
            label: "File formats and storage",
            summary:
              "Format choice changes job runtime by an order of magnitude.",
            topics: [
              "Parquet, ORC and columnar layout",
              "Compression codecs and trade-offs",
              "Partitioning and the small file problem",
              "Schema evolution",
            ],
          },
        ],
      },
      {
        id: "bd-s2",
        title: "Lakehouse architecture",
        duration: "5-6 weeks",
        goal: "Table formats brought transactions to the data lake and changed the architecture.",
        build:
          "Build a lakehouse with a table format, including time travel, upserts and compaction.",
        nodes: [
          {
            id: "bd-tableformats",
            label: "Open table formats",
            summary:
              "Delta, Iceberg and Hudi are the current architectural centre of gravity.",
            topics: [
              "ACID on object storage",
              "Delta Lake, Iceberg and Hudi compared",
              "Time travel and versioning",
              "Metadata and manifest handling",
            ],
          },
          {
            id: "bd-medallion",
            label: "Layered lakehouse design",
            summary:
              "Bronze, silver and gold layers as a reliability pattern, not a fashion.",
            topics: [
              "Raw, cleaned and curated layers",
              "Idempotent reprocessing",
              "Backfill without duplication",
              "Retention per layer",
            ],
          },
          {
            id: "bd-upserts",
            label: "Merges and change data",
            summary:
              "CDC into a lake is where most real complexity lives.",
            topics: [
              "MERGE and upsert patterns",
              "Change data capture ingestion",
              "Deduplication and late data",
              "Deletes and compliance requirements",
            ],
          },
          {
            id: "bd-maintenance",
            label: "Table maintenance",
            summary:
              "Lakehouses degrade without compaction. Interviews ask how you manage it.",
            topics: [
              "Compaction and file sizing",
              "Vacuum and retention",
              "Z-ordering and clustering",
              "Statistics and manifest health",
            ],
          },
          {
            id: "bd-catalog",
            label: "Catalogue and governance",
            summary:
              "Discovery and access control across a lake full of tables.",
            topics: [
              "Metastore and catalogue options",
              "Table and column-level access",
              "Lineage capture",
              "Data classification",
            ],
          },
        ],
      },
      {
        id: "bd-s3",
        title: "Streaming",
        duration: "6-7 weeks",
        goal: "Real-time processing has different correctness rules, and interviews probe them hard.",
        build:
          "A streaming pipeline with exactly-once semantics, windowing, and a documented late-data policy.",
        nodes: [
          {
            id: "bd-kafka",
            label: "Kafka and log-based messaging",
            summary:
              "The backbone of nearly every streaming architecture.",
            topics: [
              "Topics, partitions and consumer groups",
              "Offsets, retention and compaction",
              "Delivery semantics",
              "Schema registry and evolution",
            ],
          },
          {
            id: "bd-streaming",
            label: "Stream processing",
            summary:
              "Structured Streaming or Flink, with the same underlying concepts.",
            topics: [
              "Micro-batch versus continuous processing",
              "Checkpointing and state stores",
              "Exactly-once semantics in practice",
              "Backpressure handling",
            ],
          },
          {
            id: "bd-time",
            label: "Event time and windows",
            summary:
              "Event time versus processing time is the classic streaming interview question.",
            topics: [
              "Event time versus processing time",
              "Watermarks and allowed lateness",
              "Tumbling, sliding and session windows",
              "Handling out-of-order events",
            ],
          },
          {
            id: "bd-joins",
            label: "Stream joins and enrichment",
            summary:
              "Joining streams to streams and to slowly changing reference data.",
            topics: [
              "Stream-stream joins and state size",
              "Stream-table enrichment",
              "State TTL and cleanup",
              "Lookup patterns and caching",
            ],
          },
          {
            id: "bd-lambda",
            label: "Batch and streaming together",
            summary:
              "Reconciling two pipelines that should agree but often do not.",
            topics: [
              "Lambda versus kappa architecture",
              "Unified batch and streaming code",
              "Reprocessing history",
              "Consistency between paths",
            ],
          },
        ],
      },
      {
        id: "bd-s4",
        title: "Operating data platforms",
        duration: "4-6 weeks",
        goal: "At this scale, cost and reliability engineering become the day job.",
        build:
          "Instrument a pipeline with data quality checks, SLAs and cost tracking, then cut its cost by a third.",
        nodes: [
          {
            id: "bd-orchestration",
            label: "Orchestration at scale",
            summary:
              "Hundreds of interdependent jobs need real dependency management.",
            topics: [
              "Airflow or Dagster patterns",
              "Dependency and sensor design",
              "Backfill orchestration",
              "SLA monitoring per pipeline",
            ],
          },
          {
            id: "bd-quality",
            label: "Data quality at scale",
            summary:
              "Silent corruption is worse than a failed job.",
            topics: [
              "Expectation frameworks",
              "Anomaly detection on volume and distribution",
              "Quarantine patterns for bad records",
              "Quality SLAs with consumers",
            ],
          },
          {
            id: "bd-observability",
            label: "Pipeline observability",
            summary:
              "Knowing which of two hundred jobs caused the wrong number downstream.",
            topics: [
              "Lineage across the platform",
              "Job metrics and runtime trends",
              "Alerting on freshness",
              "Incident response for data",
            ],
          },
          {
            id: "bd-cost",
            label: "Cost engineering",
            summary:
              "Big data platforms are expensive, and cost work gets noticed by leadership.",
            topics: [
              "Cluster sizing and autoscaling",
              "Spot instances for batch",
              "Storage tiering",
              "Attribution per pipeline",
            ],
          },
          {
            id: "bd-governance",
            label: "Compliance at scale",
            kind: "recommended",
            summary:
              "Deleting one person's data from a petabyte lake is a genuine engineering problem.",
            topics: [
              "GDPR deletion in immutable storage",
              "PII detection and masking",
              "Audit logging",
              "Retention enforcement",
            ],
          },
        ],
      },
      {
        id: "bd-s5",
        title: "Interview preparation",
        duration: "4-5 weeks",
        goal: "Interviews combine Spark internals, streaming semantics and pipeline design.",
        build:
          "A public repository with a batch and a streaming pipeline over the same data, and a comparison write-up.",
        nodes: [
          {
            id: "bd-spark-round",
            label: "Spark round",
            summary:
              "Internals questions and a tuning exercise are near-universal.",
            topics: [
              "Explain a shuffle and its cost",
              "Diagnose a skewed job",
              "Choose a join strategy with reasons",
              "Read a Spark UI screenshot",
            ],
          },
          {
            id: "bd-streaming-round",
            label: "Streaming round",
            summary:
              "Correctness semantics, asked precisely.",
            topics: [
              "Exactly-once: what it really guarantees",
              "Watermark and late data handling",
              "State growth and mitigation",
              "Failure recovery behaviour",
            ],
          },
          {
            id: "bd-design-round",
            label: "Pipeline design round",
            summary:
              "Design ingestion and processing for a stated volume and latency.",
            topics: [
              "Volume and latency requirements first",
              "Storage and format choices",
              "Batch versus streaming decision",
              "Cost estimate and trade-offs",
            ],
          },
          {
            id: "bd-coding",
            label: "Coding round",
            summary:
              "Usually PySpark or SQL against a realistic transformation problem.",
            topics: [
              "Transformations in PySpark",
              "Complex SQL aggregation",
              "Deduplication and windowing",
              "Writing testable pipeline code",
            ],
          },
          {
            id: "bd-portfolio",
            label: "Portfolio",
            summary:
              "Public pipelines with performance numbers are strong evidence.",
            topics: [
              "Batch and streaming implementations",
              "A tuning case study with timings",
              "Cost optimisation write-up",
              "Data quality framework you built",
            ],
          },
        ],
      },
    ],
    tools: [
      "Apache Spark",
      "Kafka",
      "Delta Lake / Iceberg",
      "Flink",
      "Airflow",
      "Databricks",
      "Python / Scala",
      "Parquet",
    ],
    proofOfWork: [
      "A Spark tuning case study with before/after runtimes",
      "A streaming pipeline with documented exactly-once handling",
      "A lakehouse implementation with compaction and time travel",
      "A pipeline cost reduction with measured savings",
    ],
  },

  {
    slug: "data-architect",
    title: "Data Architect",
    shortTitle: "Data Architect",
    category: "Data",
    mark: "DR",
    tagline:
      "Decide how an organisation's data is structured, stored, governed and shared, and make those decisions stick.",
    market:
      "Senior role in enterprises with real data estates. Regulatory pressure and AI programmes both increased demand, since neither works on ungoverned data.",
    timeline: "9-12 months part-time",
    entryBar: "Substantial data engineering, modelling or DBA experience.",
    updated: "2026-08-31",
    prerequisites: [
      "Years of hands-on data work",
      "Modelling and warehouse experience",
      "Ability to write and present design documents",
    ],
    stages: [
      {
        id: "dar-s1",
        title: "Modelling and design",
        duration: "6-7 weeks",
        goal: "Architecture is modelling decisions plus the reasons behind them.",
        build:
          "Produce conceptual, logical and physical models for one business domain, with rationale.",
        nodes: [
          {
            id: "dar-conceptual",
            label: "Conceptual and logical modelling",
            summary:
              "Starting from the business, not the tables. Frequently skipped, always missed.",
            topics: [
              "Entity relationship modelling",
              "Business glossary and definitions",
              "Conceptual to logical to physical",
              "Domain-driven data boundaries",
            ],
          },
          {
            id: "dar-warehouse-design",
            label: "Warehouse and mart design",
            summary:
              "Kimball, Inmon and Data Vault, and knowing when each is appropriate.",
            topics: [
              "Dimensional modelling in depth",
              "Data Vault for auditability",
              "Normalised enterprise warehouse",
              "Choosing an approach for the context",
            ],
          },
          {
            id: "dar-operational",
            label: "Operational data modelling",
            summary:
              "OLTP design constraints differ sharply from analytical ones.",
            topics: [
              "Normalisation for transactional systems",
              "Access pattern driven NoSQL design",
              "Event modelling",
              "Polyglot persistence decisions",
            ],
          },
          {
            id: "dar-integration",
            label: "Integration patterns",
            summary:
              "How data moves between systems is the bulk of enterprise data architecture.",
            topics: [
              "Batch, CDC and event streaming",
              "API-based data exchange",
              "Master data management",
              "Integration anti-patterns",
            ],
          },
          {
            id: "dar-quality-design",
            label: "Designing for quality",
            summary:
              "Quality is architectural: it comes from constraints and contracts, not cleanup jobs.",
            topics: [
              "Constraints and referential integrity",
              "Data contracts between systems",
              "Reference data management",
              "Quality measurement design",
            ],
          },
        ],
      },
      {
        id: "dar-s2",
        title: "Platform architecture",
        duration: "5-7 weeks",
        goal: "Choosing and arranging the components an entire data organisation will live with.",
        build:
          "A target-state architecture with an options analysis and a phased migration plan.",
        nodes: [
          {
            id: "dar-lakehouse",
            label: "Warehouse, lake and lakehouse",
            summary:
              "The central platform decision, and one you must justify rather than assume.",
            topics: [
              "Warehouse versus lake versus lakehouse",
              "Open table formats and portability",
              "Storage and compute separation",
              "Vendor lock-in assessment",
            ],
          },
          {
            id: "dar-mesh",
            label: "Centralised versus federated",
            summary:
              "Data mesh is often misapplied. Knowing the preconditions is the senior view.",
            topics: [
              "Central platform team model",
              "Data mesh principles and prerequisites",
              "Domain ownership and products",
              "Federated governance",
            ],
          },
          {
            id: "dar-realtime",
            label: "Real-time architecture",
            summary:
              "Deciding what genuinely needs to be real time, which is usually less than requested.",
            topics: [
              "Latency requirements gathering",
              "Streaming platform selection",
              "Serving layer design",
              "Cost of real-time versus batch",
            ],
          },
          {
            id: "dar-ml",
            label: "Supporting analytics and AI",
            summary:
              "Feature stores, vector stores and the data foundations AI programmes need.",
            topics: [
              "Feature store architecture",
              "Vector storage for retrieval",
              "Training data lineage",
              "Serving data to models",
            ],
            ref: { href: "/13-ai/03-embeddings-vector-search", label: "Ch — Embeddings & Vector Search" },
          },
          {
            id: "dar-migration",
            label: "Migration planning",
            summary:
              "Most architecture work is moving from a state nobody designed.",
            topics: [
              "Current state assessment",
              "Phased migration and coexistence",
              "Legacy decommissioning",
              "Risk and rollback planning",
            ],
          },
        ],
      },
      {
        id: "dar-s3",
        title: "Governance and compliance",
        duration: "5-6 weeks",
        goal: "The half of the role that determines whether the architecture survives an audit.",
        build:
          "A governance framework with classification, ownership, retention and access policies.",
        nodes: [
          {
            id: "dar-governance",
            label: "Data governance",
            summary:
              "Ownership and stewardship, defined so decisions have an owner.",
            topics: [
              "Ownership and stewardship models",
              "Data governance councils",
              "Policy definition and enforcement",
              "Making governance non-obstructive",
            ],
          },
          {
            id: "dar-catalog",
            label: "Catalogue and lineage",
            summary:
              "You cannot govern what nobody can find or trace.",
            topics: [
              "Data catalogue implementation",
              "Automated lineage capture",
              "Business glossary integration",
              "Adoption and metadata quality",
            ],
          },
          {
            id: "dar-privacy",
            label: "Privacy and protection",
            summary:
              "Regulation drives most enterprise data architecture funding.",
            topics: [
              "GDPR and regional privacy law",
              "Classification and PII discovery",
              "Masking, tokenisation and pseudonymisation",
              "Right to erasure in analytical stores",
            ],
          },
          {
            id: "dar-access",
            label: "Access architecture",
            summary:
              "Fine-grained access without making the platform unusable.",
            topics: [
              "Role and attribute-based access",
              "Column and row-level security",
              "Access request and review processes",
              "Cross-domain sharing",
            ],
          },
          {
            id: "dar-retention",
            label: "Lifecycle and retention",
            summary:
              "Keeping everything forever is a cost and a liability.",
            topics: [
              "Retention schedules by data class",
              "Archival and tiering",
              "Legal hold handling",
              "Defensible deletion",
            ],
          },
        ],
      },
      {
        id: "dar-s4",
        title: "Delivery and influence",
        duration: "4-5 weeks",
        goal: "An architecture nobody implements is a document. Adoption is the real deliverable.",
        build:
          "Take one architectural decision from proposal to implemented and adopted by a delivery team.",
        nodes: [
          {
            id: "dar-adr",
            label: "Architecture documentation",
            summary:
              "Decision records are the daily artefact and a common interview request.",
            topics: [
              "Architecture decision records",
              "Options analysis with trade-offs",
              "Diagramming standards",
              "Writing for mixed audiences",
            ],
          },
          {
            id: "dar-standards",
            label: "Standards and reference architectures",
            summary:
              "Reusable patterns beat bespoke review for every project.",
            topics: [
              "Reference architecture publication",
              "Reusable patterns and templates",
              "Exception handling process",
              "Keeping standards current",
            ],
          },
          {
            id: "dar-cost",
            label: "Cost and vendor management",
            summary:
              "Platform choices commit large budgets for years.",
            topics: [
              "Total cost of ownership modelling",
              "Vendor evaluation and proof of concept",
              "Contract and licensing considerations",
              "Exit strategy",
            ],
          },
          {
            id: "dar-stakeholder",
            label: "Stakeholder management",
            summary:
              "Architecture is decided in meetings as much as in documents.",
            topics: [
              "Working with engineering leadership",
              "Presenting to executives",
              "Handling competing domain interests",
              "Building consensus on standards",
            ],
          },
          {
            id: "dar-handson",
            label: "Staying technical",
            summary:
              "Architects who stop building lose the ability to judge feasibility.",
            topics: [
              "Prototyping proposed patterns",
              "Reviewing pipeline code",
              "Understanding operational reality",
              "Keeping current with platform changes",
            ],
          },
        ],
      },
      {
        id: "dar-s5",
        title: "Interview preparation",
        duration: "3-5 weeks",
        goal: "Interviews are design discussions, case studies and evidence of past decisions.",
        build:
          "A portfolio of architecture decision records and one full target-state design.",
        nodes: [
          {
            id: "dar-design-round",
            label: "Architecture round",
            summary:
              "Design a data platform for a described organisation, live.",
            topics: [
              "Requirements before technology",
              "Justifying every component",
              "Handling constraints and legacy",
              "Phasing the delivery",
            ],
          },
          {
            id: "dar-modelling-round",
            label: "Modelling round",
            summary:
              "Model a domain on a whiteboard and defend the grain and keys.",
            topics: [
              "Entity identification",
              "Grain and key decisions",
              "History requirements",
              "Handling ambiguity in requirements",
            ],
          },
          {
            id: "dar-governance-round",
            label: "Governance round",
            summary:
              "How would you make this estate compliant and still usable.",
            topics: [
              "Classification approach",
              "Access model design",
              "Erasure and retention handling",
              "Balancing control and velocity",
            ],
          },
          {
            id: "dar-case",
            label: "Case study",
            summary:
              "Common in consultancies: a written brief and a presented recommendation.",
            topics: [
              "Reading a brief for real constraints",
              "Options analysis",
              "Cost and risk estimation",
              "Executive presentation",
            ],
          },
          {
            id: "dar-behavioural",
            label: "Behavioural round",
            summary:
              "Influence without authority, and decisions that turned out wrong.",
            topics: [
              "An architecture decision you got wrong",
              "Convincing teams to adopt a standard",
              "Handling a vendor-driven decision",
              "Balancing ideal with achievable",
            ],
          },
        ],
      },
    ],
    tools: [
      "Snowflake / Databricks",
      "Kafka",
      "dbt",
      "Data catalogue tooling",
      "ER modelling tools",
      "Terraform",
      "C4 / ArchiMate",
    ],
    proofOfWork: [
      "A target-state architecture with options analysis",
      "A set of architecture decision records from real projects",
      "A governance framework with classification and retention",
      "A completed platform migration with measured outcomes",
    ],
  },
];
