# Chapter 51 — Night-Before Revision Sheet

> One page. Read it slowly. Sleep early.

---

## 🟡 JavaScript

- **Closure** → inner function + lexical scope reference.
- **Hoisting** → declarations move up; `let`/`const` in TDZ.
- **Scope** → global → function → block; lexical lookup.
- **`this`** → call-site dependent; arrow inherits.
- **Prototype** → instance.`__proto__` = `Constructor.prototype`.
- **`==` vs `===`** → always `===`.
- **Event bubbling/delegation** → one listener on parent for many children.
- **Array methods** → `map`, `filter`, `reduce`, `find`, `some`, `every`, `flatMap`.
- **Promise.all** → parallel, fail-fast. `allSettled` → wait for all.
- **Debounce** → wait until silent. **Throttle** → at most once per N ms.

```js
// Closure
function counter() {
  let n = 0;
  return () => ++n;
}

// Debounce
const debounce = (fn, ms) => {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
};
```

---

## ⚛️ React

- **Components** → functional + hooks.
- **State** → immutable updates; functional form for dependent updates.
- **`useEffect`** → cleanup runs before next effect / on unmount.
- **`useMemo`** for values, **`useCallback`** for functions.
- **`useRef`** → mutable, no re-render.
- **`React.memo`** + stable props = fewer re-renders.
- **Reconciliation** uses element **type** + **key** to diff.
- **Lift state up**, push it down only as far as needed.
- **Context** for low-frequency global data; split contexts to limit re-renders.
- **Code splitting** with `React.lazy` + `Suspense`.
- **List virtualization** with `react-window` for huge lists.

```jsx
// Custom debounce hook
function useDebounce(v, delay = 300) {
  const [d, setD] = useState(v);
  useEffect(() => {
    const id = setTimeout(() => setD(v), delay);
    return () => clearTimeout(id);
  }, [v, delay]);
  return d;
}
```

---

## 🟢 Node.js

- **Event loop** phases: timers → I/O → check → close, microtasks between.
- **Async/await** is sugar over Promises; always returns a Promise.
- **Centralized error middleware** with `AppError`.
- **JWT** → short access (15m) + long refresh (httpOnly cookie, rotated).
- **REST** → noun URLs, verb operations, status codes.
- **MVC + service layer** → thin controllers, fat services.
- **Rate limit auth routes** (5 attempts / 15min).
- **Pagination** → cursor at scale, offset for simple cases.
- **S3 pre-signed URLs** for large uploads.

```js
// Async wrapper
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

// JWT middleware
function auth(req, res, next) {
  try {
    req.user = jwt.verify(
      req.headers.authorization?.split(" ")[1],
      process.env.JWT_SECRET
    );
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
}
```

---

## 🔵 NestJS

- **Modules, controllers, providers, DI**.
- **Pipes** validate inputs, **guards** authorize, **interceptors** transform, **filters** catch errors.
- **DTOs** + `class-validator` + `whitelist: true`.
- **`@Injectable()`** + constructor injection.
- **Swagger** auto-docs from decorators.

```ts
@Controller("users")
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(":id")
  @Roles("admin")
  get(@Param("id", ParseUUIDPipe) id: string) {
    return this.userService.findById(id);
  }
}
```

---

## 🟣 MongoDB

- Use `.explain("executionStats")` to confirm `IXSCAN`.
- **`$match` early** in aggregation pipeline.
- **ESR rule** for compound indexes: Equality → Sort → Range.
- **`populate`** = extra query; **`$lookup`** = DB-side join.
- **Embed** small bounded sub-docs; **reference** when independent / unbounded.
- **Cursor pagination** with `_id > lastId` scales infinitely.
- TTL index = auto-expire docs.

```js
// Pipeline
[
  { $match: { status: "paid" } },
  { $group: { _id: "$userId", total: { $sum: "$amount" } } },
  { $sort: { total: -1 } },
  { $limit: 10 },
]
```

---

## 🟠 System Design

- **Stateless API** → horizontally scale behind LB.
- **Cache** in layers (browser → CDN → Redis → DB).
- **Cache-aside** is the default pattern; invalidate on writes.
- **Queue** anything slow (email, image, webhook).
- **Modular monolith** > microservices for small teams.
- **OWASP**: validate input, hash passwords (bcrypt 10+), HTTPS, Helmet, allowlist CORS, rate-limit auth.
- **Observability**: structured logs, metrics, tracing (RED method).

---

## 💬 HR

- **Self-intro:** 90s, 4 beats (role / day-to-day / achievement / why TCS).
- **STAR** for behavioral.
- **Numbers > adjectives.**
- **Use "I"** for your contribution.
- Always **ask questions back.**

---

## 🌅 Morning of

- Eat well. Sleep > caffeine.
- Run through self-intro **once**.
- Skim this sheet. Stop revising after that.
- Test mic/camera (remote) or arrive 30 min early (in-person).

---

## 🎯 If You Have 60 Seconds

> "Closures, hooks, event loop, JWT, REST, indexes, $match early, cache-aside, STAR, numbers > adjectives, ask questions."

That's your kernel.

**You've got this. 🚀**

---

[← HR Common Questions](08-hr-behavioral/02-common-questions.md) | [Index](README.md) | [Next: Appendix →](10-appendix.md)
