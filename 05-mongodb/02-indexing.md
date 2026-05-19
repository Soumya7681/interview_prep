# Chapter 38 — MongoDB Indexing

## 📖 Definition

An **index** is a data structure (B-tree by default) that stores a small portion of the collection's data in an easy-to-traverse form, so the database can find matching documents **without scanning every document**.

## 🔍 Why It Matters

| | Without index | With index |
|---|---|---|
| Lookup on 10M docs | O(N) collection scan (`COLLSCAN`) | O(log N) index scan (`IXSCAN`) |
| Typical time | seconds | milliseconds |

Indexes also cost:
- Disk space.
- Slower writes (each insert/update touches every relevant index).

## 📊 Common Index Types

| Type | Example | Use |
|------|---------|-----|
| **Single field** | `{ email: 1 }` | Lookup by one field |
| **Compound** | `{ status: 1, createdAt: -1 }` | Lookup + sort by multiple fields |
| **Multikey** | On an array field | Indexes each element |
| **Text** | `{ name: "text" }` | Full-text search |
| **Hashed** | `{ _id: "hashed" }` | Sharding |
| **TTL** | `{ expiresAt: 1 }, { expireAfterSeconds: 0 }` | Auto-expire docs |
| **Unique** | `{ email: 1 }, { unique: true }` | Enforce uniqueness |
| **Partial** | with `partialFilterExpression` | Index only matching docs |
| **Sparse** | `{ phone: 1 }, { sparse: true }` | Skip docs missing the field |
| **Geospatial** | `{ location: "2dsphere" }` | Geo queries |

## 💻 Code Example — Creating Indexes

```js
// In Mongo shell
db.users.createIndex({ email: 1 }, { unique: true });
db.orders.createIndex({ status: 1, createdAt: -1 });
db.articles.createIndex({ title: "text", body: "text" });
db.sessions.createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 });

// In Mongoose (preferred — versioned with code)
userSchema.index({ email: 1 }, { unique: true });
orderSchema.index({ status: 1, createdAt: -1 });
```

## 💻 Code Example — Diagnosing with `.explain()`

```js
db.orders.find({ status: "paid" }).sort({ createdAt: -1 }).explain("executionStats");
```

Look for these in the output:
- `stage`: `"COLLSCAN"` ❌  vs  `"IXSCAN"` ✅
- `totalDocsExamined`: should be close to `nReturned`
- `executionTimeMillis`

```js
// In Mongoose
const explained = await Order.find({ status: "paid" })
  .sort("-createdAt")
  .explain("executionStats");
console.log(JSON.stringify(explained, null, 2));
```

## 💻 Code Example — Compound Index Order

For a query like:
```js
Order.find({ userId: x, status: "paid" }).sort({ createdAt: -1 })
```
The correct compound index is:
```js
{ userId: 1, status: 1, createdAt: -1 }
```

### ESR Rule (Equality, Sort, Range)
Always order fields in the compound index as:
1. **Equality** filters (`status: "paid"`).
2. **Sort** fields (`createdAt: -1`).
3. **Range** filters (`amount: { $gt: 100 }`).

A compound index on `{ a: 1, b: 1, c: 1 }` supports queries on:
- `{ a }`
- `{ a, b }`
- `{ a, b, c }`

But NOT efficiently on `{ b }` or `{ c }` alone.

## 💻 Code Example — Unique Indexes

```js
db.users.createIndex({ email: 1 }, { unique: true });

// Inserting a duplicate
db.users.insertOne({ email: "a@b.com" }); // ok
db.users.insertOne({ email: "a@b.com" }); // E11000 duplicate key error
```

## 💻 Code Example — Partial Index

```js
// Index only "active" orders, much smaller than indexing all
db.orders.createIndex(
  { createdAt: -1 },
  { partialFilterExpression: { status: "active" } }
);
```

## 💻 Code Example — TTL (Auto-Delete)

```js
db.sessions.createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 });

// Anything with expiresAt < now gets deleted by the TTL monitor (~1 min granularity).
db.sessions.insertOne({ user: "x", expiresAt: new Date(Date.now() + 60_000) });
```

## 💻 Code Example — Text Index

```js
db.articles.createIndex({ title: "text", body: "text" });

db.articles.find({ $text: { $search: "kubernetes node" } });

// Sort by relevance
db.articles.find(
  { $text: { $search: "kubernetes node" } },
  { score: { $meta: "textScore" } }
).sort({ score: { $meta: "textScore" } });
```

## 💻 Code Example — Geospatial

```js
db.places.createIndex({ location: "2dsphere" });

db.places.find({
  location: {
    $near: {
      $geometry: { type: "Point", coordinates: [77.59, 12.97] },
      $maxDistance: 5000,                     // metres
    },
  },
});
```

## 💻 Code Example — Covered Query

If the query and projection use only indexed fields, MongoDB serves the result **from the index** without touching documents.

```js
db.users.createIndex({ email: 1, name: 1 });

db.users.find(
  { email: "a@b.com" },
  { name: 1, email: 1, _id: 0 }
);
// Served entirely from the index — fastest possible read.
```

## ⚠️ Pitfalls

- **Too many indexes** → slow writes, bloated storage.
- **Wrong order on compound index** → query falls back to COLLSCAN.
- **`$regex` without anchored prefix** → can't use index (e.g., `/foo$/` won't use it; `/^foo/` can).
- **`.skip()` past 10k+ rows** → still scans skipped index entries.

## 💻 Code Example — Listing & Dropping

```js
db.users.getIndexes();
db.users.dropIndex("email_1");
db.users.dropIndexes();         // drops everything except _id
```

## 🌍 Real-World Interview Story

> "We had an aggregation taking ~3s on a 2M-row orders collection. `explain` showed a COLLSCAN on `status` and `createdAt`. I added a compound index `{ status: 1, createdAt: -1 }` matching the query's filter and sort order. Query time dropped to ~30ms."

## 🎯 Likely Interview Questions

1. **What is an index?**
2. **Difference between single-field and compound indexes?**
3. **How do you diagnose a slow MongoDB query?** — `.explain("executionStats")`, look for COLLSCAN.
4. **What's the ESR rule?**
5. **Why is a unique index useful?**
6. **What's a TTL index?**

---

[← Schemas](01-mongoose-schemas.md) | [Index](../README.md) | [Next: Aggregation →](03-aggregation.md)
