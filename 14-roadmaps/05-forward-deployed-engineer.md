# Chapter 92 — Forward Deployed Engineer (FDE) Roadmap

## 📖 Definition

A **forward deployed engineer** is an engineer embedded with a customer. You sit inside their workflow, build working software inside their environment, and turn what you learn into product. Half product engineer, half consultant — but you write the code, and you own the deploy.

## 🔍 Market Reality

- The fastest-growing hybrid role in AI companies, and the hardest to fill.
- Rewards people who ship in messy conditions and can talk to a customer without a manager translating.
- Not a first role. It is a strong second or third — you must already be able to ship end to end.
- Also advertised as *solutions engineer*, *deployment engineer*, *implementation engineer*, *customer engineer*.

## ✅ Before Stage 1

| Prerequisite | Why it is needed |
|---|---|
| Full-stack shipping ability in any stack | Nobody will pair with you at the customer site |
| SQL and API integration experience | The work is 60% integration |
| Docker and one cloud | Their environment will not match yours |
| Willingness to speak directly to customers | Non-negotiable; this is the differentiator |

## 🗺️ The Roadmap

### Stage 1 — Core engineering depth (8-12 weeks)

**Goal:** be the person who can build the whole thing alone if needed.

| Learn | Build |
|---|---|
| One backend language to a professional standard | A small end-to-end app deployed for someone other than yourself, with auth and a real database |
| SQL and schema design | |
| API design, auth, webhooks | |
| Docker, CI, one cloud runtime | |
| Reading an unfamiliar codebase fast | |
| Debugging in an environment you did not set up | |

### Stage 2 — Integration craft (4-6 weeks)

**Goal:** customer data is never clean and their network is never open. Work anyway.

| Learn | Build |
|---|---|
| Messy real data: Excel, CSV, legacy databases | An importer that ingests a deliberately dirty 50k-row spreadsheet and reports exactly what it rejected and why |
| ETL scripts that survive bad rows | |
| SSO / SAML and enterprise auth | |
| VPC, on-prem, and air-gapped constraints | |
| Rate-limited and undocumented third-party APIs | |
| Idempotency and safe retries | |

### Stage 3 — AI application layer (4-6 weeks)

**Goal:** most FDE work today is putting a model against a customer's own documents and processes.

| Learn | Build |
|---|---|
| LLM APIs and structured output | A retrieval assistant over a real organisation's documents, with an eval set that organisation agrees with |
| Retrieval over customer documents | |
| Evals built from the customer's own examples | |
| Cost controls the customer will accept | |
| Explaining model limits without overpromising | |

Work through the AI Engineer roadmap's stages 1-3 ([chapter 89](02-ai-engineer.md)) for this.

### Stage 4 — Customer skills (4-6 weeks, then forever)

**Goal:** the real differentiator. Most engineers never build this, and it caps their level.

| Learn | Build |
|---|---|
| Discovery: finding the workflow that actually costs them money | Pick a real small business, find one painful workflow, ship a tool for it, and measure hours saved per week |
| Scoping to something shippable in two weeks | |
| Demoing rough work early without losing trust | |
| Saying no, and saying not yet | |
| Writing decisions down after every call | |
| Running a pilot against agreed success metrics | |

### Stage 5 — From bespoke to product (6+ weeks)

**Goal:** the job is not consulting. What you learn in the field becomes the product.

| Learn | Build |
|---|---|
| Spotting the pattern across three customers | A written case study: the customer problem, what you shipped, the metric it moved, what should become product |
| Generalising a bespoke build into configuration | |
| Handoff docs and runbooks | |
| Feeding evidence back into the roadmap | |
| Supporting a deployment you no longer sit next to | |

## 💻 Code Example — The Stage 2 Artefact (An Importer That Reports Its Rejects)

A junior importer throws on row 4,812 and loses the run. An FDE importer finishes, commits the good rows, and hands back a rejection report the customer can act on.

```ts
type Row = Record<string, string>;
type Reject = { line: number; reason: string; raw: Row };

const REQUIRED = ["invoice_no", "amount", "invoice_date"] as const;

export async function importInvoices(rows: Row[]) {
  const accepted: Invoice[] = [];
  const rejects: Reject[] = [];
  const seen = new Set<string>();

  for (const [i, raw] of rows.entries()) {
    const line = i + 2; // +1 for zero-index, +1 for the header row

    const missing = REQUIRED.filter((k) => !raw[k]?.trim());
    if (missing.length) {
      rejects.push({ line, reason: `missing: ${missing.join(", ")}`, raw });
      continue;
    }

    // Customer exports carry "1,20,000.00", "₹1200", and "(500)" for credits.
    const amount = Number(raw.amount.replace(/[₹,\s]/g, "").replace(/^\((.*)\)$/, "-$1"));
    if (!Number.isFinite(amount)) {
      rejects.push({ line, reason: `unparseable amount "${raw.amount}"`, raw });
      continue;
    }

    const date = parseLooseDate(raw.invoice_date); // handles DD-MM-YYYY and Excel serials
    if (!date) {
      rejects.push({ line, reason: `unparseable date "${raw.invoice_date}"`, raw });
      continue;
    }

    // Idempotency: re-running the same file must not double-insert.
    const key = raw.invoice_no.trim().toUpperCase();
    if (seen.has(key)) {
      rejects.push({ line, reason: `duplicate invoice_no in file`, raw });
      continue;
    }
    seen.add(key);

    accepted.push({ invoiceNo: key, amount, date });
  }

  await db.invoice.upsertMany(accepted, { conflictKey: "invoiceNo" });

  return {
    total: rows.length,
    inserted: accepted.length,
    rejected: rejects.length,
    report: rejects, // downloaded as CSV by the customer, not buried in a log
  };
}
```

The upsert is the tell. On a customer site you will be asked to re-run the same file three times in one afternoon.

## 🧰 Tools on the CV

TypeScript or Python · Postgres and one warehouse · Docker, Terraform basics · LLM APIs · Postman/curl and browser devtools · a notebook for customer notes — the boring tool that decides whether you are trusted

## 📁 Portfolio That Gets Replies

- A shipped tool a real organisation uses weekly.
- A case study with a before/after metric ("cut a 6-hour weekly reconciliation to 20 minutes").
- Evidence you handled bad data and a locked-down environment.

## 🌍 Real-World Uses

- **Pilot deployments** — standing up a product inside one enterprise, integrations and all, in weeks.
- **Bespoke workflow automation** — the thing the product cannot do yet, built for one customer first.
- **Migration and data onboarding** — moving a customer off spreadsheets and legacy databases.
- **Field-driven product work** — turning three bespoke builds into one configurable feature.

## 🎯 Likely Interview Questions

1. **A customer asks for something the product cannot do, and their pilot ends Friday.** — Scope to the smallest honest thing that moves their metric, say plainly what will not exist by Friday, and write down what you promised.
2. **How do you scope in the first week?** — Find the workflow with real hours or money attached, watch someone do it, then propose something shippable in two weeks with one agreed success metric.
3. **Their data is a mess and their security team blocks your tooling. Now what?** — Work inside their constraints: batch imports over API access, their VPC, their SSO, and a rejection report instead of a silent failure.
4. **How do you handle a customer who wants a feature that is wrong for the product?** — Say not yet, give the reason, offer the near thing you can build, and carry the evidence back to the product team.
5. **What separates this from consulting?** — Consulting bills hours and leaves. An FDE's field work becomes product: the pattern across customers, generalised and handed off.
6. **Tell me about a deploy that went badly.** — Have one ready with the customer impact, the fix, and the guardrail you added. Candidates without a failure story read as candidates without production exposure.

---

[← Prompt Engineer Roadmap](04-prompt-engineer.md) | [Index](../README.md) | [Next: Data Engineer Roadmap →](06-data-engineer.md)
