# Chapter 93 — Data Engineer Roadmap

## 📖 Definition

A **data engineer** builds the pipelines and models that every analyst, dashboard, and AI feature depends on. You own movement and shape of data: ingestion, transformation, storage, freshness, and trust.

## 🔍 Market Reality

- Steadiest demand of the six roadmaps, and the most transferable across industries.
- Every company with AI ambitions discovers its data layer first. Half of "AI projects" are data projects wearing a costume.
- Strong path in from SQL analyst or backend work. Low maths requirement.
- Titles: *data engineer*, *analytics engineer* (dbt-heavy, closer to the business), *platform data engineer* (infra-heavy).

## ✅ Before Stage 1

| Prerequisite | Why it is needed |
|---|---|
| SQL beyond `SELECT` | The core language of the job |
| Python scripting | Glue, orchestration, and tests |
| Linux command line | Everything runs on a remote box |
| Git | Pipelines are code and get reviewed |

## 🗺️ The Roadmap

### Stage 1 — SQL and data modelling (4-6 weeks)

**Goal:** model data so the next question is cheap to answer.

| Learn | Build |
|---|---|
| Joins, CTEs, window functions | A star schema over a public dataset, with the ten business questions it answers in one query each |
| Indexes and query plans | |
| Normalisation vs denormalisation | |
| Star schema: facts and dimensions | |
| Slowly changing dimensions | |

Chapters [38](../05-mongodb/02-indexing.md) and [41](../05-mongodb/05-sql-vs-nosql.md) cover the storage-side theory.

### Stage 2 — Pipelines (6-8 weeks)

**Goal:** move data on a schedule without babysitting it.

| Learn | Build |
|---|---|
| ETL vs ELT | A scheduled pipeline with dbt tests, a backfill command, and a freshness alert that actually fires |
| Orchestration: Airflow, Dagster, or Prefect | |
| Idempotent tasks and safe reruns | |
| Incremental loads and backfills | |
| dbt models and tests | |
| Alerting on failure *and* on staleness | |

A pipeline that fails loudly is fine. A pipeline that silently stops updating is what gets people fired.

### Stage 3 — Storage and scale (6-8 weeks)

**Goal:** handle data too big for one machine, without a surprise cloud bill.

| Learn | Build |
|---|---|
| Warehouses: BigQuery, Snowflake, Redshift | The same query on unpartitioned and partitioned data, with the cost and runtime difference measured |
| Columnar formats: Parquet | |
| Lakehouse tables: Iceberg or Delta | |
| Partitioning and clustering | |
| Spark fundamentals | |
| Query cost control | |

### Stage 4 — Streaming (4-6 weeks)

**Goal:** some questions cannot wait for tomorrow's batch.

| Learn | Build |
|---|---|
| Kafka: topics, partitions, consumer groups | A CDC stream from Postgres to the warehouse with a measured end-to-end lag figure |
| Delivery semantics and duplicates | |
| Change data capture with Debezium | |
| Windowing and late-arriving data | |
| Flink or Spark Streaming basics | |

### Stage 5 — Reliability and governance (4-6 weeks)

**Goal:** being trusted is the job. Wrong data is worse than no data.

| Learn | Build |
|---|---|
| Data contracts between producers and consumers | A data contract plus quality checks that block a bad upstream change before it reaches a dashboard |
| Quality checks and anomaly detection | |
| Lineage and impact analysis | |
| PII classification and access control | |
| On-call runbooks and incident write-ups | |

## 💻 Code Example — Idempotent Incremental Load (Stage 2)

The pattern behind most production dbt models: process only what changed, and make a rerun a no-op instead of a duplicate.

```sql
-- models/marts/fct_orders.sql
{{ config(
    materialized = 'incremental',
    unique_key   = 'order_id',
    incremental_strategy = 'merge',
    partition_by = { 'field': 'ordered_at', 'data_type': 'timestamp', 'granularity': 'day' }
) }}

with source as (
  select *
  from {{ ref('stg_orders') }}
  {% if is_incremental() %}
    -- A lookback window, not "> max(ordered_at)": late-arriving rows would
    -- otherwise be skipped forever.
    where updated_at >= (select coalesce(max(updated_at), '1900-01-01') from {{ this }})
                        - interval '3' day
  {% endif %}
)

select
  order_id,
  customer_id,
  ordered_at,
  updated_at,
  sum(line_amount) as order_amount
from source
group by 1, 2, 3, 4
```

```yaml
# models/marts/schema.yml — the tests are the deliverable, not an extra
models:
  - name: fct_orders
    columns:
      - name: order_id
        tests: [unique, not_null]
      - name: customer_id
        tests:
          - not_null
          - relationships: { to: ref('dim_customers'), field: customer_id }
    tests:
      - dbt_utils.recency:
          datepart: hour
          field: ordered_at
          interval: 26   # freshness SLA: alert if no new order in 26 hours
```

Three interview-grade decisions are visible: `merge` on a unique key for idempotency, a **lookback window** for late data, and a **freshness test** so silence is treated as failure.

## 🧰 Tools on the CV

SQL and Python · dbt · Airflow or Dagster · one warehouse (BigQuery or Snowflake) · Kafka · Spark · Terraform basics

## 📁 Portfolio That Gets Replies

- One pipeline running on a schedule that you did not have to fix by hand.
- Tests and a freshness SLA someone else could rely on.
- A cost or runtime optimisation with numbers ("partitioning cut the daily scan from 1.2 TB to 40 GB").

## 🌍 Real-World Uses

- **Reporting layer** — raw events into a warehouse, modelled into facts and dimensions the business queries directly.
- **AI feature plumbing** — documents, embeddings, and metadata kept fresh for a RAG index.
- **Operational CDC** — replicating a production database into analytics without touching production load.
- **Reverse ETL** — pushing modelled segments back into CRM and marketing tools.

## 🎯 Likely Interview Questions

1. **An upstream team renamed a column overnight. How does your pipeline behave, and who finds out first?** — Schema test fails, the model does not publish, an alert fires to you before a dashboard shows wrong numbers. A data contract prevents the rename from shipping silently.
2. **ETL or ELT, and why?** — ELT for warehouses: land raw, transform in-warehouse with version-controlled SQL, keep the raw layer replayable. ETL when the target cannot transform or when PII must be dropped before landing.
3. **A dashboard shows yesterday's numbers. Walk me through the debug.** — Freshness check first, then the orchestrator run history, then the source's own lag, then the incremental filter — that last one is the usual culprit.
4. **How do you make a task safe to rerun?** — Deterministic output for the same input window: merge on a unique key or delete-and-insert the partition. Never blind `INSERT`.
5. **Same query, ten times the cost this month. Why?** — Partition or cluster pruning stopped working: a wildcard filter, a function on the partition column, or `SELECT *` over a widened table.
6. **How do you handle late-arriving data?** — A lookback window on the incremental filter plus an event-time watermark, and idempotent merges so reprocessing is free.

---

[← Forward Deployed Engineer Roadmap](05-forward-deployed-engineer.md) | [Index](../README.md) | [Next: MLOps / AI Platform Roadmap →](07-mlops-engineer.md)
