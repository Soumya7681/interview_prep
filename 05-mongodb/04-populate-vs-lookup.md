# Chapter 40 — `populate()` vs `$lookup`

## 📖 Definitions

- **`populate()`** — a Mongoose convenience that runs a **second query** to load referenced documents and attach them.
- **`$lookup`** — a MongoDB **aggregation stage** that joins two collections inside a single query.

## 🔍 At a Glance

| | `populate()` | `$lookup` |
|---|---|---|
| Layer | Mongoose (app-side) | MongoDB (DB-side) |
| Queries | 2+ (round-trip per population) | 1 |
| Syntax | Concise | Verbose |
| Filter / sort joined fields | Limited | Full power |
| Multi-level joins | Easy with chained populate | Nested pipelines |
| Read-only? | Yes | Yes (unless combined with `$out`/`$merge`) |

## 💻 Code Example — Setup

```js
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const orderSchema = new mongoose.Schema({
  user:  { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    quantity: Number,
    price:    Number,
  }],
  status: String,
});

export const User    = mongoose.model("User",    userSchema);
export const Order   = mongoose.model("Order",   orderSchema);
export const Product = mongoose.model("Product", productSchema);
```

## 💻 Code Example — `populate()`

```js
const order = await Order.findById(id)
  .populate("user", "name email")                 // pick fields
  .populate("items.product", "name price");

// order.user.name, order.items[0].product.name etc.
```

### Behind the scenes
```
1. Order.findById(id)                  → 1 query
2. User.find({ _id: order.user })      → 2nd query
3. Product.find({ _id: { $in: ids } }) → 3rd query
4. Mongoose stitches them together in JS
```

## 💻 Code Example — `populate` with Filtering

```js
// Only populate active products
const order = await Order.findById(id).populate({
  path: "items.product",
  match: { active: true },           // products that don't match → null
  select: "name price",
});
```

## 💻 Code Example — `populate` with Conditions on the Parent

```js
// Can't easily say "give me orders where the user is in country IN"
// → that's where $lookup wins
```

## 💻 Code Example — `$lookup`

```js
const orders = await Order.aggregate([
  { $match: { status: "paid" } },
  {
    $lookup: {
      from: "users",
      localField: "user",
      foreignField: "_id",
      as: "user",
    },
  },
  { $unwind: "$user" },              // flatten the user array
  { $match: { "user.country": "IN" } },   // filter by joined field
  { $project: { _id: 0, total: 1, "user.name": 1, "user.email": 1 } },
]);
```

This is impossible with `populate` alone — you can't filter on the populated field at the DB level.

## 💻 Code Example — `$lookup` with Sub-Pipeline (MongoDB 3.6+)

```js
db.orders.aggregate([
  {
    $lookup: {
      from: "products",
      let: { itemIds: "$items.product" },
      pipeline: [
        { $match: { $expr: { $in: ["$_id", "$$itemIds"] }, active: true } },
        { $project: { name: 1, price: 1 } },
      ],
      as: "products",
    },
  },
]);
```

This is the modern, flexible form of `$lookup`.

## 💻 Code Example — Multi-Level Populate

```js
// User → Orders → Items → Product
const user = await User.findById(id)
  .populate({
    path: "orders",
    populate: { path: "items.product", select: "name price" },
  });
```

## 💻 Code Example — Multi-Level `$lookup`

```js
db.users.aggregate([
  {
    $lookup: {
      from: "orders",
      let: { uid: "$_id" },
      pipeline: [
        { $match: { $expr: { $eq: ["$user", "$$uid"] } } },
        {
          $lookup: {
            from: "products",
            localField: "items.product",
            foreignField: "_id",
            as: "products",
          },
        },
      ],
      as: "orders",
    },
  },
]);
```

## ⚖️ When to Use Which

### Prefer `populate` when…
- Simple parent-child fetching.
- You don't need to filter/sort by joined fields.
- The number of distinct foreign IDs is small (one extra round-trip is cheap).
- You like the cleaner syntax for everyday CRUD.

### Prefer `$lookup` when…
- You need to **filter** or **sort** by the joined collection.
- You need to do **complex aggregations** (group, count, etc.).
- You want **one DB round-trip** instead of two.
- The data is large and reducing round-trips matters.

## ⚠️ Performance Notes

- `$lookup` is **not free** — index the `foreignField` (usually `_id` is already indexed, but custom ones aren't).
- `populate` with `match` filters in JS — so it fetches all matches first, then filters. Be careful with huge sets.
- Multi-level `populate` can create N+1 patterns; consider `$lookup` if it hits performance.

## 💻 Code Example — Denormalization (Sometimes the Best Choice)

Instead of joining each time, store frequently-needed fields together:

```js
// orderSchema
{
  user: { type: ObjectId, ref: "User" },
  userName: String,          // ← denormalized
  userEmail: String,
}
```

Trade off: faster reads, harder updates (you must sync changes). Common in dashboards and reporting.

## 🎯 Likely Interview Questions

1. **`populate()` vs `$lookup`?**
2. **When would you choose `$lookup`?**
3. **How do you filter on a populated field?** — Either `populate({ match: ... })` (post-filter) or `$lookup` + `$match`.
4. **What's denormalization, and when is it worth it?**

---

[← Aggregation](03-aggregation.md) | [Index](../README.md) | [Next: SQL vs NoSQL →](05-sql-vs-nosql.md)
