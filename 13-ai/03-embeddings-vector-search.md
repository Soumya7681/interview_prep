# Chapter 79 — Embeddings & Vector Search

## 📖 Definition

An **embedding** is a fixed-length vector of floats representing the *meaning* of a piece of text. Texts with similar meaning land close together in that vector space, so "semantic search" becomes a nearest-neighbour lookup.

## 🔍 Explanation

Keyword search matches characters; vector search matches meaning. `"card declined"` will never match `"payment was rejected"` with `LIKE`, but their embeddings are near-neighbours.

**Pipeline:**

```
document → chunk → embed → store vector + metadata → (query → embed → ANN search → top-k)
```

**Similarity metric.** Cosine similarity is standard: `1.0` identical direction, `0` unrelated. Most embedding models return normalized vectors, so cosine and dot product rank identically.

**Chunking is where retrieval quality is won or lost:**

| Decision | Practical guidance |
|---|---|
| Size | 200–500 tokens for prose; whole functions or classes for code |
| Overlap | 10–20% so a sentence split across a boundary stays retrievable |
| Boundaries | Split on structure (headings, functions), never mid-sentence |
| Metadata | Store `source`, `title`, `section`, `updated_at` — you need them for filtering and citations |

**Where vectors live.** `pgvector` if you already run Postgres (transactions and joins for free), MongoDB Atlas Vector Search if you are on Mongo, or a dedicated store (Pinecone, Qdrant, Weaviate) at large scale. Anthropic's API has no embeddings endpoint — use a dedicated embedding provider (Voyage AI, Cohere, and others) and treat it as a swappable dependency.

**ANN, not exact search.** Indexes like HNSW and IVFFlat trade a little recall for a huge speed win. Exact scan is fine to ~10k vectors; beyond that, build an index.

## 💻 Code Example — Chunking with Overlap

```ts
function chunk(text: string, size = 1500, overlap = 200): string[] {
  const paragraphs = text.split(/\n\s*\n/);
  const out: string[] = [];
  let buf = "";

  for (const p of paragraphs) {
    if ((buf + p).length > size && buf) {
      out.push(buf.trim());
      buf = buf.slice(-overlap);        // carry a tail for continuity
    }
    buf += `\n\n${p}`;
  }
  if (buf.trim()) out.push(buf.trim());
  return out;
}
```

## 💻 Code Example — Storing Vectors in Postgres (pgvector)

```sql
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE doc_chunks (
  id         BIGSERIAL PRIMARY KEY,
  doc_id     TEXT NOT NULL,
  content    TEXT NOT NULL,
  metadata   JSONB NOT NULL DEFAULT '{}',
  embedding  VECTOR(1024) NOT NULL          -- must match your model's dimension
);

-- Cosine-distance ANN index (build AFTER bulk load)
CREATE INDEX ON doc_chunks USING hnsw (embedding vector_cosine_ops);

-- Query: 8 nearest chunks for a tenant
SELECT id, content, metadata, 1 - (embedding <=> $1) AS similarity
FROM doc_chunks
WHERE metadata->>'tenant_id' = $2
ORDER BY embedding <=> $1        -- <=> is cosine distance
LIMIT 8;
```

## 💻 Code Example — Ingest and Search in Node

```ts
// embed() wraps whatever embedding provider you chose; keep it behind one interface
async function embed(texts: string[]): Promise<number[][]> { /* provider call */ }

export async function ingest(docId: string, text: string, meta: Record<string, unknown>) {
  const chunks = chunk(text);
  const vectors = await embed(chunks);                    // batch — one call, not N

  await pool.query(
    `INSERT INTO doc_chunks (doc_id, content, metadata, embedding)
     SELECT $1, c, $2, v::vector
     FROM unnest($3::text[], $4::text[]) AS t(c, v)`,
    [docId, meta, chunks, vectors.map((v) => JSON.stringify(v))],
  );
}

export async function search(query: string, tenantId: string, k = 8) {
  const [qv] = await embed([query]);
  const { rows } = await pool.query(
    `SELECT content, metadata, 1 - (embedding <=> $1::vector) AS score
     FROM doc_chunks
     WHERE metadata->>'tenant_id' = $2
     ORDER BY embedding <=> $1::vector
     LIMIT $3`,
    [JSON.stringify(qv), tenantId, k],
  );
  return rows.filter((r) => r.score > 0.35);              // drop weak matches
}
```

## 💻 Code Example — MongoDB Atlas Vector Search

```js
// Index definition (Atlas UI or API)
{
  fields: [
    { type: "vector", path: "embedding", numDimensions: 1024, similarity: "cosine" },
    { type: "filter", path: "tenantId" },
  ],
}

// Query
const results = await Chunk.aggregate([
  {
    $vectorSearch: {
      index: "chunk_vectors",
      path: "embedding",
      queryVector: qv,
      numCandidates: 200,   // ANN candidate pool — bigger = better recall, slower
      limit: 8,
      filter: { tenantId },
    },
  },
  { $project: { content: 1, source: 1, score: { $meta: "vectorSearchScore" } } },
]);
```

## 💻 Code Example — Hybrid Search (Keyword + Vector)

```ts
// Reciprocal Rank Fusion: robust, needs no score calibration between the two systems
function rrf(lists: string[][], k = 60): string[] {
  const score = new Map<string, number>();
  for (const list of lists) {
    list.forEach((id, rank) => score.set(id, (score.get(id) ?? 0) + 1 / (k + rank + 1)));
  }
  return [...score.entries()].sort((a, b) => b[1] - a[1]).map(([id]) => id);
}

const ranked = rrf([await keywordSearch(q), await vectorSearch(q)]);
```

Hybrid wins in practice: vectors handle paraphrase, keyword handles exact identifiers (error codes, SKUs, function names) that embeddings blur.

## 🌍 Real-World Uses

- **Docs / helpdesk search** — the retrieval half of every RAG system.
- **Duplicate detection** — near-duplicate tickets, listings, or resumes by cosine threshold.
- **Recommendations** — "more like this" without any user-behaviour data.
- **Semantic caching** — serve a cached LLM answer when a new question is close enough to an old one.

## 🎯 Likely Interview Questions

1. **Embedding vs keyword search?** — Meaning vs characters. Keyword wins on exact identifiers, vectors win on paraphrase; production usually needs both.
2. **Why cosine similarity?** — It compares direction, not magnitude, so document length does not distort the score.
3. **How do you choose chunk size?** — Big enough to be self-contained, small enough to stay on-topic; split on structure with 10–20% overlap and measure recall on a labelled query set.
4. **What happens if you change the embedding model?** — Old and new vectors are not comparable. You must re-embed the whole corpus; version the index and cut over.
5. **How do you scope vector search per tenant?** — Filter on indexed metadata inside the vector query (`filter` / `WHERE`), never post-filter after top-k, which silently drops results.
6. **Exact vs approximate nearest neighbour?** — Exact is fine at small scale; ANN (HNSW/IVFFlat) trades a little recall for sub-linear latency at scale.

---

[← Prompt Engineering](02-prompt-engineering.md) | [Index](../README.md) | [Next: RAG Pipeline →](04-rag.md)
