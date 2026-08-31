# Chapter 94 — MLOps / AI Platform Engineer Roadmap

## 📖 Definition

An **MLOps / AI platform engineer** owns the runway: training infrastructure, model serving, GPU cost, monitoring, and rollback for everything the AI teams ship. Data scientists produce models; you make them deployable, observable, reproducible, and affordable.

## 🔍 Market Reality

- Demand follows AI adoption with a lag — a company hires this role once its models are in production and the bill arrives.
- The natural move for DevOps and SRE engineers. Best entered from **infrastructure**, not from data science.
- If you already run Kubernetes in production, you are most of the way there.
- Titles: *MLOps engineer*, *AI platform engineer*, *ML infrastructure engineer*, *inference engineer*.

## ✅ Before Stage 1

| Prerequisite | Why it is needed |
|---|---|
| Linux and networking | GPUs live on machines you will not see |
| Docker | The unit of everything below |
| Python | Training and serving code is Python |
| One cloud and its IAM model | Access control is half the job |
| CI/CD experience | Deploys must be boring |

## 🗺️ The Roadmap

### Stage 1 — Infrastructure fundamentals (6-8 weeks)

**Goal:** reproducible infrastructure, defined in code.

| Learn | Build |
|---|---|
| Terraform | A Terraform-defined cluster a teammate can recreate from scratch with one command |
| Kubernetes: deployments, services, resources, autoscaling | |
| IAM, secrets management, network boundaries | |
| GitHub Actions or equivalent CI/CD | |
| Cost tagging and budget alerts | |

### Stage 2 — Model lifecycle (6-8 weeks)

**Goal:** any training run must be reproducible six months later.

| Learn | Build |
|---|---|
| Experiment tracking | A pipeline that reproduces a past training run from a commit hash |
| Model registry and promotion stages | |
| Artifact and dataset versioning (DVC, LakeFS) | |
| Pinned environments and deterministic seeds | |
| Training pipelines as code | |

### Stage 3 — Serving and GPUs (6-8 weeks)

**Goal:** serve models fast, and know the cost per thousand requests.

| Learn | Build |
|---|---|
| Inference servers: vLLM, Triton, TorchServe | A self-hosted open model behind an autoscaling endpoint, with throughput, p95 latency, and cost-per-1k-requests reported |
| GPU scheduling and sharing | |
| Continuous batching and KV caching | |
| Quantisation trade-offs | |
| Autoscaling and cold starts | |
| Self-host vs API cost modelling | |

The self-host vs API question is the one you will be asked to answer with a spreadsheet, not an opinion.

### Stage 4 — Observability and safe release (4-6 weeks)

**Goal:** catch the regression before the customer writes in.

| Learn | Build |
|---|---|
| Metrics, logs, traces for model services | A canary deploy that rolls back automatically when an eval gate or latency budget fails |
| Drift and data-quality alerting | |
| Eval suites gating deploys in CI | |
| Canary and blue/green releases | |
| Automatic rollback | |
| Incident response for model failures | |

### Stage 5 — Governance and cost (4 weeks)

**Goal:** the questions finance and compliance will ask, answered in advance.

| Learn | Build |
|---|---|
| Model cards and audit trails | A cost dashboard broken down per model and per team, with an enforced quota |
| Access control over prompts, data, and weights | |
| Retention policy and log scrubbing | |
| Per-team cost dashboards and quotas | |

## 💻 Code Example — An Eval Gate in CI (Stage 4)

The artefact that turns "we tested it locally" into a platform guarantee: a deploy that cannot proceed unless quality and latency hold.

```yaml
# .github/workflows/deploy-model.yml
name: deploy-model

on:
  push:
    branches: [main]
    paths: ["models/**", "prompts/**", "serving/**"]

jobs:
  eval-gate:
    runs-on: ubuntu-latest
    outputs:
      passed: ${{ steps.gate.outputs.passed }}
    steps:
      - uses: actions/checkout@v4

      - name: Run offline eval suite
        run: python -m evals.run --suite regression --out results.json

      - id: gate
        name: Compare against the production baseline
        run: |
          python - <<'PY'
          import json, os, sys
          new = json.load(open("results.json"))
          base = json.load(open("evals/baseline.json"))

          # Two independent gates: quality must not drop, latency must not grow.
          quality_drop = base["accuracy"] - new["accuracy"]
          latency_growth = new["p95_ms"] / base["p95_ms"]

          ok = quality_drop <= 0.01 and latency_growth <= 1.10
          print(f"accuracy {base['accuracy']:.3f} -> {new['accuracy']:.3f}")
          print(f"p95      {base['p95_ms']}ms -> {new['p95_ms']}ms")

          with open(os.environ["GITHUB_OUTPUT"], "a") as f:
              f.write(f"passed={'true' if ok else 'false'}\n")
          sys.exit(0 if ok else 1)
          PY

  canary:
    needs: eval-gate
    if: needs.eval-gate.outputs.passed == 'true'
    runs-on: ubuntu-latest
    steps:
      - name: Shift 5% of traffic to the new revision
        run: ./scripts/canary.sh --percent 5 --revision "$GITHUB_SHA"

      - name: Watch error rate and p95 for 15 minutes
        run: ./scripts/watch-slo.sh --window 15m --max-error-rate 0.01 --max-p95-ms 1200

      - name: Promote or roll back
        run: ./scripts/promote-or-rollback.sh --revision "$GITHUB_SHA"
```

Note the tolerances — `quality_drop <= 0.01`, `latency_growth <= 1.10`. Absolute gates block every deploy; no gates block none. Picking the tolerance is the engineering judgment interviewers probe.

## 🧰 Tools on the CV

Terraform · Kubernetes · MLflow · vLLM or Triton · Prometheus and Grafana · GitHub Actions · one cloud with GPU quota

## 📁 Portfolio That Gets Replies

- A repo that stands the platform up from zero.
- A cost-per-request number you reduced, with the method.
- One incident write-up with the guardrail you added afterwards.

## 🌍 Real-World Uses

- **Self-hosted inference** — open-weights models on your own GPUs when API spend crosses the break-even line.
- **Training platform** — a queue, a registry, and reproducible runs so scientists stop emailing checkpoints.
- **Release safety** — eval gates and canaries so a prompt or weight change cannot quietly degrade production.
- **Cost governance** — per-team quotas and dashboards that stop one experiment eating a quarter's budget.

## 🎯 Likely Interview Questions

1. **Inference cost tripled this month and nothing was deployed. Where do you look first?** — Traffic mix and input length before anything else: longer prompts, lost cache hits, a retry loop, or a client shipping bigger payloads.
2. **Self-host or use an API?** — Model the break-even: tokens per month, GPU hours, utilisation, and engineering time. Below steady high volume, an API almost always wins.
3. **How do you make a model deploy safe?** — Eval gate in CI, canary on a small traffic slice, SLO watch, automatic rollback, and one revision per commit.
4. **A model's accuracy is fine offline and bad in production. What is your first hypothesis?** — Training/serving skew: different feature computation, stale features, or a preprocessing version mismatch between the two paths.
5. **How do you cut GPU cost without cutting quality?** — Continuous batching, KV caching, quantisation measured against an eval set, right-sizing instances, and autoscaling to zero on idle paths.
6. **What belongs in a model registry entry?** — Weights, the commit, dataset version, hyperparameters, eval results, the environment, the owner, and the promotion stage. Enough that a stranger can redeploy or roll back without asking you.

---

[← Data Engineer Roadmap](06-data-engineer.md) | [Index](../README.md)
