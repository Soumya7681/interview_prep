# Chapter 90 — Machine Learning Engineer Roadmap

## 📖 Definition

A **machine learning engineer** trains, fine-tunes, and serves models. You own the numbers: data quality, metrics, drift, and inference cost. Where an AI engineer consumes a model through an API, an ML engineer produces the model and is accountable for why it behaves the way it does.

## 🔍 Market Reality

- Deeper bar than AI engineering, and the maths is not optional.
- Hired by product companies with their own data, fintech and e-commerce risk teams, ad-tech, and global capability centres (GCCs).
- Most paid ML work is still **tabular** — fraud, churn, pricing, ranking — not large language models.
- Slowest of the six roadmaps, and the least crowded at the senior end.

## ✅ Before Stage 1

| Prerequisite | Why it is needed |
|---|---|
| Python, including NumPy | Every framework assumes it |
| School-level linear algebra and probability | You will read gradients and distributions weekly |
| SQL | Training data starts as a query |
| Git and the Linux command line | Training runs happen on remote machines |

## 🗺️ The Roadmap

### Stage 1 — Maths and data handling (6-8 weeks)

**Goal:** read a model's maths without flinching, and clean data without leaking it.

| Learn | Build |
|---|---|
| Vectors, matrices, dot products | A cleaned public dataset with a documented notebook: every transform justified, leakage checks shown |
| Derivatives and gradients | |
| Probability, distributions, expectation | |
| pandas or Polars | |
| Missing data, outliers, encoding | |
| Train / validation / test splits and data leakage | |

**Leakage is the number one junior mistake.** Any statistic computed over the full dataset before splitting — a mean for imputation, a scaler, a target encoding — leaks the test set into training and inflates your score.

### Stage 2 — Classical machine learning (6-8 weeks)

**Goal:** beat a baseline honestly.

| Learn | Build |
|---|---|
| Linear and logistic regression | A tabular model that beats a documented baseline, with cross-validated scores and a feature-importance write-up |
| Decision trees, random forests | |
| Gradient boosting: XGBoost, LightGBM | |
| Cross-validation and hyperparameter search | |
| Class imbalance handling | |
| Feature engineering | |
| Metrics: ROC-AUC, PR-AUC, calibration, confusion matrix | |

Always state the baseline. "92% accuracy" means nothing if 92% of rows are the majority class.

### Stage 3 — Deep learning (8-10 weeks)

**Goal:** train and fine-tune neural networks on a real GPU budget.

| Learn | Build |
|---|---|
| PyTorch: tensors, autograd, training loops | A fine-tuned open model on a domain dataset, with before/after metrics and the cost of the training run |
| Backpropagation and optimisers | |
| CNNs for vision; transformers and attention for text | |
| Transfer learning | |
| Fine-tuning with LoRA / QLoRA | |
| Mixed precision, batch size, memory limits | |
| Regularisation, early stopping, augmentation | |

### Stage 4 — Production ML (6-8 weeks)

**Goal:** a model nobody can serve is a hobby project.

| Learn | Build |
|---|---|
| Batch vs real-time inference | A model served behind an API with latency, drift, and data-quality monitoring, plus a documented rollback |
| Feature stores and training/serving skew | |
| ONNX export and quantisation | |
| Model registry and reproducible training | |
| Drift and data-quality monitoring | |
| Shadow deploys and A/B tests | |

### Stage 5 — Specialise (8+ weeks, ongoing)

**Goal:** pick one domain and go deeper than a generalist can.

| Learn | Build |
|---|---|
| One of: NLP, computer vision, recommenders, time series | A reproduction of one recent paper, with your notes on what the paper left out |
| Distributed and multi-GPU training | |
| Experiment tracking discipline | |
| Reading papers weekly | |

## 💻 Code Example — Cross-Validation Without Leakage (Stage 2)

Every step that *learns* from data goes inside the pipeline, so each fold fits its own scaler and imputer.

```python
from sklearn.compose import ColumnTransformer
from sklearn.ensemble import HistGradientBoostingClassifier
from sklearn.impute import SimpleImputer
from sklearn.model_selection import StratifiedKFold, cross_val_score
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler

numeric = ["amount", "age", "tenure_months"]
categorical = ["city", "channel"]

pre = ColumnTransformer([
    ("num", Pipeline([("impute", SimpleImputer(strategy="median")),
                      ("scale", StandardScaler())]), numeric),
    ("cat", OneHotEncoder(handle_unknown="ignore"), categorical),
])

model = Pipeline([("pre", pre), ("clf", HistGradientBoostingClassifier())])

cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
scores = cross_val_score(model, X, y, cv=cv, scoring="average_precision")

print(f"PR-AUC {scores.mean():.3f} ± {scores.std():.3f}")
# Baseline for an imbalanced target is the positive rate, not 0.5.
print(f"baseline (positive rate) {y.mean():.3f}")
```

`average_precision` (PR-AUC) is the right default on imbalanced data; ROC-AUC flatters a model when positives are rare.

## 🧰 Tools on the CV

PyTorch · scikit-learn · XGBoost or LightGBM · pandas or Polars · MLflow or Weights & Biases · Docker · a cloud GPU (Colab, spot instances)

## 📁 Portfolio That Gets Replies

- One model in production with monitoring — not just a notebook.
- A fine-tune with honest before/after numbers **and** its training cost.
- A paper reproduction repo.

## 🌍 Real-World Uses

- **Risk and fraud scoring** — gradient boosting on transaction features, calibrated probabilities, thresholds tuned to business cost.
- **Demand forecasting** — time series per SKU per region, with backtesting.
- **Search and feed ranking** — learning-to-rank, offline metrics plus online A/B.
- **Domain fine-tunes** — a small open model tuned for one narrow task, cheaper per call than a frontier API.

## 🎯 Likely Interview Questions

1. **Your validation score was high and production accuracy dropped. Why?** — Leakage, training/serving skew, distribution drift, or a validation split that ignored time. Check them in that order.
2. **Accuracy is 97% and the model is useless. Explain.** — Imbalanced target; the majority class carries the score. Use PR-AUC, recall at a fixed precision, and cost-weighted thresholds.
3. **Precision or recall for this problem?** — Ask what a false positive and a false negative each cost the business, then answer. A candidate who picks without asking has failed the question.
4. **When would you *not* use deep learning?** — Tabular data with a few hundred thousand rows: boosted trees are usually more accurate, far cheaper, and easier to explain.
5. **How do you make a training run reproducible six months later?** — Pinned environment, versioned dataset, fixed seeds, tracked hyperparameters, artefacts in a registry, and the commit hash logged with the run.
6. **What is calibration and when do you care?** — Predicted probabilities matching observed frequencies. It matters whenever a downstream decision uses the probability itself — pricing, expected loss, thresholds — not just the ranking.

---

[← AI Engineer Roadmap](02-ai-engineer.md) | [Index](../README.md) | [Next: Prompt Engineer Roadmap →](04-prompt-engineer.md)
