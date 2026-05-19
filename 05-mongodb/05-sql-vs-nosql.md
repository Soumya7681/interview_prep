# Chapter 41 — SQL vs NoSQL

## 📖 Definitions

- **SQL (relational)** — data lives in tables with strict schemas; relationships are first-class via foreign keys and joins. Examples: PostgreSQL, MySQL, SQL Server.
- **NoSQL (document, key-value, wide-column, graph)** — flexible schemas, multiple data models. MongoDB is a **document database**.

## 📊 Comparison Table

| Aspect | SQL (Postgres, MySQL) | NoSQL (MongoDB) |
|--------|----------------------|-----------------|
| Schema | Strict, predefined | Flexible per document |
| Relationships | Joins (any depth) | References (`$lookup`) or embed |
| Transactions | Full ACID, multi-statement | ACID multi-doc since 4.0 (limited multi-shard) |
| Scaling | Vertical primarily; sharding is complex | Horizontal sharding native |
| Query language | SQL | MQL (JSON-like) + aggregation pipeline |
| Tooling | Mature (50+ years) | Younger but growing |
| Read-heavy | Excellent with indexes + read replicas | Excellent |
| Write-heavy unstructured | Awkward | Native |
| Best for | Strong relational data, banking, ERP | User profiles, catalogs, IoT, evolving schemas |

## 💻 Code Example — Same Domain in Both

### SQL Schema (Postgres)
```sql
CREATE TABLE users (
  id       SERIAL PRIMARY KEY,
  email    VARCHAR(120) UNIQUE NOT NULL,
  name     VARCHAR(80),
  created  TIMESTAMP DEFAULT NOW()
);

CREATE TABLE orders (
  id       SERIAL PRIMARY KEY,
  user_id  INTEGER NOT NULL REFERENCES users(id),
  amount   NUMERIC(10, 2),
  status   VARCHAR(20),
  created  TIMESTAMP DEFAULT NOW()
);

CREATE TABLE order_items (
  id         SERIAL PRIMARY KEY,
  order_id   INTEGER NOT NULL REFERENCES orders(id),
  product_id INTEGER NOT NULL REFERENCES products(id),
  quantity   INTEGER NOT NULL,
  price      NUMERIC(10, 2)
);
```

```sql
SELECT u.name, COUNT(o.id) AS orders, SUM(o.amount) AS total
FROM users u
LEFT JOIN orders o ON o.user_id = u.id
WHERE o.status = 'paid'
GROUP BY u.id
ORDER BY total DESC
LIMIT 10;
```

### MongoDB (Embedded)
```js
// One document holds the whole order
{
  _id: ObjectId("..."),
  user: { _id: ObjectId("..."), name: "Soumya", email: "..." },
  items: [
    { productId: ObjectId("..."), name: "Book", quantity: 2, price: 250 },
    { productId: ObjectId("..."), name: "Pen",  quantity: 1, price:  50 },
  ],
  amount: 550,
  status: "paid",
  createdAt: ISODate("..."),
}
```

```js
db.orders.aggregate([
  { $match: { status: "paid" } },
  { $group: { _id: "$user._id", name: { $first: "$user.name" }, total: { $sum: "$amount" } } },
  { $sort: { total: -1 } },
  { $limit: 10 },
]);
```

### MongoDB (Referenced)
```js
{ _id: ObjectId("u1"), name: "Soumya", email: "..." }       // users
{ _id: ObjectId("o1"), user: ObjectId("u1"), amount: 550 }  // orders
```

```js
db.orders.aggregate([
  { $match: { status: "paid" } },
  { $group: { _id: "$user", total: { $sum: "$amount" } } },
  { $lookup: { from: "users", localField: "_id", foreignField: "_id", as: "user" } },
  { $unwind: "$user" },
  { $project: { name: "$user.name", total: 1 } },
  { $sort: { total: -1 } },
  { $limit: 10 },
]);
```

## 🎯 Embed vs Reference (MongoDB Modeling)

| Embed when… | Reference when… |
|------------|------------------|
| Always accessed together | Accessed independently |
| Bounded size (< few KB) | Could grow unbounded |
| One-to-few relationship | One-to-many / many-to-many |
| Updates are atomic with parent | Frequently mutated independently |

## 💻 Code Example — Transactions

### Postgres
```sql
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;
```

### MongoDB
```js
const session = await mongoose.startSession();
session.startTransaction();
try {
  await Account.updateOne({ _id: 1 }, { $inc: { balance: -100 } }, { session });
  await Account.updateOne({ _id: 2 }, { $inc: { balance:  100 } }, { session });
  await session.commitTransaction();
} catch (err) {
  await session.abortTransaction();
  throw err;
} finally {
  session.endSession();
}
```

## ⚡ Scaling Patterns

### SQL
- Vertical scaling (bigger CPU/RAM/SSD).
- Read replicas for read-heavy.
- Sharding is possible but complex (Citus, Vitess, manual sharding).

### NoSQL (MongoDB)
- Built-in sharding on a chosen **shard key**.
- Replica sets for HA + read scaling.
- Auto failover.

## 💻 Code Example — Choosing a Shard Key

```js
// Bad: low cardinality → hot shard
{ status: 1 }

// Bad: monotonically increasing → always inserts to one shard
{ createdAt: 1 }

// Better: hashed _id evenly distributes
{ _id: "hashed" }

// Best for queries: composite that includes a high-cardinality field
{ userId: 1, _id: 1 }
```

## 🎯 When to Pick Which

| Need | Recommendation |
|------|---------------|
| Strong relational, complex joins, ACID at scale | Postgres / MySQL |
| Schema evolves often, document-shaped data | MongoDB |
| Real-time chat / IoT / event streams | MongoDB / Cassandra / DynamoDB |
| Reporting / BI on structured data | Postgres + materialized views |
| Hybrid: transactions + flexible data | Postgres with `jsonb` fields |

## 🎯 Likely Interview Questions

1. **SQL vs NoSQL — when to use each?**
2. **Are MongoDB transactions ACID?** — Yes, multi-document since 4.0 (replicas) and 4.2 (sharded).
3. **Embed vs reference?**
4. **What's a shard key?**
5. **Can you do joins in MongoDB?** — `$lookup`.
6. **Why might you choose MongoDB for a product like Hyscaler's?** — Schemas change frequently as we iterate; docs map naturally to API responses; horizontal scaling on heavy collections.

---

[← populate / $lookup](04-populate-vs-lookup.md) | [Index](../README.md) | [Next: Frontend Machine Coding →](../06-machine-coding/01-frontend-tasks.md)
