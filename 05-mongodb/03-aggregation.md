# Chapter 39 — Aggregation Pipeline

## 📖 Definition

The MongoDB **aggregation pipeline** is a multi-stage data-processing framework. Each stage transforms documents (filtering, reshaping, grouping, joining) and passes them to the next stage.

## 🔍 Common Stages

| Stage | Purpose |
|-------|---------|
| `$match` | Filter — push to the **start** so it can use indexes |
| `$project` | Reshape / pick fields |
| `$addFields` | Add computed fields without removing existing ones |
| `$group` | Aggregate (sum, avg, count) |
| `$sort` | Sort |
| `$limit` / `$skip` | Pagination |
| `$lookup` | SQL-style left outer join |
| `$unwind` | Flatten an array (one doc per element) |
| `$facet` | Run multiple sub-pipelines on the same input |
| `$count` | Count remaining docs |
| `$bucket` / `$bucketAuto` | Histograms |
| `$replaceRoot` | Promote a sub-doc to the top |
| `$out` / `$merge` | Write results to a new collection |

## 💻 Code Example — Filter + Group + Sort

```js
// Orders per status this month
db.orders.aggregate([
  { $match: { createdAt: { $gte: ISODate("2026-05-01") } } },
  { $group: { _id: "$status", total: { $sum: "$amount" }, count: { $sum: 1 } } },
  { $sort: { total: -1 } },
]);

// Result:
// [
//   { _id: "paid",     total: 12500, count: 105 },
//   { _id: "pending",  total:  4800, count:  42 },
//   { _id: "refunded", total:   300, count:   3 },
// ]
```

## 💻 Code Example — `$lookup` (Join)

```js
// Top 10 customers by total spend, with name
db.orders.aggregate([
  { $match: { status: "paid" } },
  { $group: { _id: "$userId", total: { $sum: "$amount" } } },
  { $sort: { total: -1 } },
  { $limit: 10 },
  {
    $lookup: {
      from: "users",
      localField: "_id",
      foreignField: "_id",
      as: "user",
    },
  },
  { $unwind: "$user" },
  { $project: { _id: 0, name: "$user.name", email: "$user.email", total: 1 } },
]);
```

## 💻 Code Example — `$lookup` with Pipeline (Filtered Join)

```js
db.orders.aggregate([
  {
    $lookup: {
      from: "products",
      let: { items: "$items" },
      pipeline: [
        { $match: { $expr: { $in: ["$_id", "$$items.productId"] } } },
        { $project: { name: 1, price: 1 } },
      ],
      as: "productDetails",
    },
  },
]);
```

## 💻 Code Example — `$facet` (Multi-Result)

```js
// Get items, count, and aggregates in one query (useful for dashboards)
db.orders.aggregate([
  { $match: { status: "paid" } },
  {
    $facet: {
      items:   [{ $sort: { createdAt: -1 } }, { $limit: 20 }],
      total:   [{ $count: "count" }],
      revenue: [{ $group: { _id: null, sum: { $sum: "$amount" } } }],
    },
  },
]);

// Result:
// {
//   items: [...],
//   total: [{ count: 152 }],
//   revenue: [{ _id: null, sum: 38400 }]
// }
```

## 💻 Code Example — `$unwind` Arrays

```js
// Count tags across all posts
db.posts.aggregate([
  { $unwind: "$tags" },                          // one doc per tag
  { $group: { _id: "$tags", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 10 },
]);
```

## 💻 Code Example — `$bucket` (Histogram)

```js
// Distribution of user ages
db.users.aggregate([
  {
    $bucket: {
      groupBy: "$age",
      boundaries: [0, 18, 25, 35, 50, 65, 120],
      default: "Other",
      output: { count: { $sum: 1 } },
    },
  },
]);
```

## 💻 Code Example — `$project` with Computed Fields

```js
db.users.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      isAdult: { $gte: ["$age", 18] },
      initials: {
        $concat: [
          { $substrCP: ["$firstName", 0, 1] },
          { $substrCP: ["$lastName", 0, 1] },
        ],
      },
      ageGroup: {
        $switch: {
          branches: [
            { case: { $lt: ["$age", 18] }, then: "minor" },
            { case: { $lt: ["$age", 65] }, then: "adult" },
          ],
          default: "senior",
        },
      },
    },
  },
]);
```

## 💻 Code Example — Pagination with Total Count

```js
db.products.aggregate([
  { $match: { category: "books" } },
  {
    $facet: {
      data: [
        { $sort: { createdAt: -1 } },
        { $skip: 40 },
        { $limit: 20 },
      ],
      meta: [{ $count: "total" }],
    },
  },
  { $unwind: "$meta" },
  { $addFields: { "meta.page": 3, "meta.limit": 20 } },
]);
```

## 💻 Code Example — Mongoose Aggregation

```js
const stats = await Order.aggregate([
  { $match: { status: "paid", createdAt: { $gte: new Date("2026-05-01") } } },
  { $group: { _id: "$userId", total: { $sum: "$amount" } } },
  { $sort: { total: -1 } },
  { $limit: 10 },
]);
```

## 💻 Code Example — NestJS Mongoose Aggregation

```ts
@Injectable()
export class StatsService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  async topCustomers() {
    return this.orderModel.aggregate([
      { $match: { status: "paid" } },
      { $group: { _id: "$userId", total: { $sum: "$amount" } } },
      { $sort: { total: -1 } },
      { $limit: 10 },
    ]);
  }
}
```

## ⚡ Performance Tips

- **Always `$match` first.** Filtering early lets the planner use indexes.
- **Index the `$lookup`'s `foreignField`.**
- **`$project` away unused fields early** to reduce memory.
- **Avoid `$lookup` on huge collections** — consider denormalizing.
- `allowDiskUse: true` only if you must — disk spills are slow.

## 🎯 Likely Interview Questions

1. **What is the aggregation pipeline?**
2. **Common stages?**
3. **`$lookup` vs `populate`?** — `$lookup` is a single-query DB join; `populate` is a separate query issued by Mongoose. Use `$lookup` when you also need to filter/sort by joined fields.
4. **How does `$facet` work?**
5. **How would you optimize a slow aggregation?** — Match first, index relevant fields, project minimally, avoid unwinding huge arrays.

---

[← Indexing](02-indexing.md) | [Index](../README.md) | [Next: populate vs $lookup →](04-populate-vs-lookup.md)
