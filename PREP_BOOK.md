# The Full-Stack Developer Interview Preparation Book

[![Star on GitHub](https://img.shields.io/github/stars/Soumya7681/interview_prep.svg?style=social)](https://github.com/Soumya7681/interview_prep/stargazers)

> A complete, structured study guide for the React.js / Node.js Full-Stack Developer role at TCS (3+ years experience).
> Every topic includes **Definition → Explanation → Example → Common Interview Questions**.

---

## Table of Contents

1. [How to Use This Book](#how-to-use-this-book)
2. [Part I — JavaScript Fundamentals](#part-i--javascript-fundamentals)
3. [Part II — React.js Deep Dive](#part-ii--reactjs-deep-dive)
4. [Part III — Node.js & Backend Architecture](#part-iii--nodejs--backend-architecture)
5. [Part IV — Express & NestJS](#part-iv--express--nestjs)
6. [Part V — Databases (MongoDB Focus)](#part-v--databases-mongodb-focus)
7. [Part VI — Machine Coding / Practical Round](#part-vi--machine-coding--practical-round)
8. [Part VII — System Design (Mid-Level)](#part-vii--system-design-mid-level)
9. [Part VIII — HR & Behavioral](#part-viii--hr--behavioral)
10. [Part IX — Self-Introduction Template](#part-ix--self-introduction-template)
11. [Part X — Quick-Fire Revision Sheet](#part-x--quick-fire-revision-sheet)
12. [Appendix A — Documents Checklist](#appendix-a--documents-checklist)
13. [Appendix B — Questions to Ask the Interviewer](#appendix-b--questions-to-ask-the-interviewer)

---

## How to Use This Book

This book is designed for **targeted revision** the day or week before a TCS Full-Stack interview. Each chapter follows a strict pattern:

- **Definition** — One-line, interview-ready answer.
- **Explanation** — The "why" and "how" behind the concept.
- **Example** — Real code or a real-world scenario you can describe in an interview.
- **Likely Questions** — What the interviewer will probably ask.

> **Tip:** Read the **Definition** out loud first. If you cannot say the one-liner cleanly, re-read the **Explanation**. Practice the **Example** by writing it from scratch — never copy-paste during study.

---

# Part I — JavaScript Fundamentals

JavaScript is the spine of every MERN interview. TCS panels frequently start with JS core before touching React.

---

## Chapter 1: Closures

### Definition
A **closure** is a function that "remembers" the variables from the lexical scope in which it was created, even after that outer scope has finished executing.

### Explanation
Whenever a function is created in JavaScript, it carries a hidden reference (`[[Environment]]`) to the variable environment in which it was defined. When the function is invoked later — possibly in an entirely different context — it can still read and modify those original variables. This is the foundation of **data privacy**, **currying**, **memoization**, and **event handlers** in JavaScript.

### Example
```js
function createCounter() {
  let count = 0;                 // private variable
  return function increment() {
    count += 1;                  // closes over `count`
    return count;
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3
```
Here, `increment` is a closure: it keeps `count` alive even though `createCounter` has returned.

### Real-World Use
- **Private state** in modules before ES6 classes.
- **Once-only** functions (`function once(fn)`).
- **React hooks** internally use closures (`useState` returns a setter that closes over the slot).

### Likely Questions
- *Explain closure with a real example.*
- *How can closures cause memory leaks?* — If a closure holds a large object and is never garbage-collected (e.g., attached to a global handler), the object stays in memory.
- *Output prediction:*
  ```js
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
  }
  // Prints 3, 3, 3 — because `var` is function-scoped, all callbacks close over the same `i`.
  // With `let`, prints 0, 1, 2 — block-scoped, each iteration gets a fresh `i`.
  ```

---

## Chapter 2: Hoisting

### Definition
**Hoisting** is JavaScript's behavior of moving **declarations** (not initializations) to the top of their containing scope during the compilation phase.

### Explanation
Before any code runs, the JS engine scans for `var`, `function`, `let`, and `const` declarations:
- `var` is hoisted and initialized as `undefined`.
- `function` declarations are hoisted **entirely** (you can call them before they appear).
- `let` and `const` are hoisted but **not initialized** — they sit in the **Temporal Dead Zone (TDZ)** until the line where they are declared.

### Example
```js
console.log(a);      // undefined  (var is hoisted, initialized to undefined)
console.log(greet);  // [Function: greet]
// console.log(b);   // ReferenceError — b is in TDZ

var a = 10;
let b = 20;

function greet() { return "hi"; }
```

### Likely Questions
- *What is the Temporal Dead Zone?*
- *Are arrow functions hoisted?* — No. Arrow functions assigned to `const`/`let` follow variable hoisting rules, so they are in the TDZ.

---

## Chapter 3: Scope (Global, Function, Block)

### Definition
**Scope** defines the region of code where a variable is accessible.

### Explanation
| Scope Type | Created by | Variables |
|------------|-----------|-----------|
| Global | The script itself | `var`, `let`, `const` declared at the top level |
| Function | Any function | `var`, `let`, `const`, parameters |
| Block | `{}` of `if`, `for`, `while`, etc. | `let`, `const` only |

JavaScript uses **lexical scoping** — the scope is determined by where code is *written*, not where it is *called*.

### Example
```js
let x = "global";
function outer() {
  let x = "outer";
  function inner() {
    console.log(x); // "outer" — lexical lookup finds the nearest x
  }
  inner();
}
outer();
```

---

## Chapter 4: The `this` Keyword

### Definition
`this` refers to the **execution context** — the object that is currently calling the function.

### Explanation
The value of `this` is determined by **how a function is called**, not where it is defined (with the exception of arrow functions):

1. **Method call** — `obj.fn()` → `this === obj`
2. **Plain call** — `fn()` → `this === undefined` (strict mode) or `globalThis` (sloppy mode)
3. **Constructor** — `new Fn()` → `this` is the new instance
4. **Explicit binding** — `fn.call(ctx)`, `fn.apply(ctx)`, `fn.bind(ctx)` → `this === ctx`
5. **Arrow function** — `this` is **lexically inherited** from the enclosing scope. Arrow functions have no `this` of their own.

### Example
```js
const user = {
  name: "Soumya",
  greet() { return `Hi, ${this.name}`; },
  greetArrow: () => `Hi, ${this.name}`,
};

user.greet();      // "Hi, Soumya"
user.greetArrow(); // "Hi, undefined" — arrow inherits `this` from module scope
```

### Likely Questions
- *Difference between `call`, `apply`, and `bind`?*
  - `call(thisArg, a, b)` — invokes immediately, args passed individually.
  - `apply(thisArg, [a, b])` — invokes immediately, args passed as array.
  - `bind(thisArg, a)` — returns a new function with `this` permanently bound.

---

## Chapter 5: Prototype & Prototypal Inheritance

### Definition
Every JavaScript object has an internal `[[Prototype]]` link (accessible via `__proto__`) that points to another object from which it inherits properties and methods.

### Explanation
When you access `obj.prop`:
1. JS looks at the object itself.
2. If not found, follows `__proto__` up the chain.
3. Continues until it hits `null`.

This is how `Array.prototype.map`, `Object.prototype.toString`, etc. are available on every instance without copying them.

### Example
```js
function Animal(name) { this.name = name; }
Animal.prototype.speak = function () {
  return `${this.name} makes a sound`;
};

const dog = new Animal("Rex");
dog.speak();              // "Rex makes a sound"
dog.__proto__ === Animal.prototype; // true
```

ES6 classes are syntactic sugar over this prototype chain.

---

## Chapter 6: `==` vs `===`

### Definition
- `==` performs **loose equality** (type coercion).
- `===` performs **strict equality** (no coercion, types must match).

### Example
```js
0 == "0";       // true   (string → number)
0 == false;     // true   (boolean → number)
null == undefined; // true (special rule)

0 === "0";      // false
null === undefined; // false
```

**Rule of thumb:** Always use `===` unless you have a specific reason for coercion.

---

## Chapter 7: Event Bubbling & Event Delegation

### Definition
- **Event bubbling** — an event triggered on a child element propagates upward through its ancestors.
- **Event delegation** — attaching a single listener on a parent and using bubbling to handle events from many children.

### Example
```html
<ul id="list">
  <li>One</li><li>Two</li><li>Three</li>
</ul>
```
```js
document.getElementById("list").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});
```
This is more efficient than attaching a listener to every `<li>` — especially for dynamic lists.

### Likely Questions
- *Event bubbling vs capturing?* Capturing flows top → down; bubbling flows bottom → up. `addEventListener(type, fn, true)` enables capture phase.

---

## Chapter 8: `map`, `filter`, `reduce`

### Definition
Higher-order array methods that produce new values without mutating the original.

| Method | Returns | Use |
|--------|---------|-----|
| `map` | Array of same length | Transform each item |
| `filter` | Array (possibly shorter) | Keep items matching a predicate |
| `reduce` | Any value | Accumulate into a single result |

### Example
```js
const nums = [1, 2, 3, 4];

nums.map(n => n * 2);            // [2, 4, 6, 8]
nums.filter(n => n % 2 === 0);   // [2, 4]
nums.reduce((acc, n) => acc + n, 0); // 10
```

### Real-World
Combine them in API response shaping:
```js
const totalRevenue = orders
  .filter(o => o.status === "paid")
  .map(o => o.amount)
  .reduce((sum, x) => sum + x, 0);
```

---

## Chapter 9: Promises & `Promise.all`

### Definition
A **Promise** is an object representing the eventual result of an asynchronous operation, with three states: `pending`, `fulfilled`, `rejected`.

### Explanation
- `.then(onFulfilled, onRejected)` — chained handlers.
- `.catch(onRejected)` — convenience for error handling.
- `.finally(cb)` — always runs.

`Promise.all([p1, p2])` resolves when **all** promises resolve; rejects as soon as **any** rejects.
`Promise.allSettled` waits for all, never short-circuits.
`Promise.race` resolves/rejects with whichever finishes first.
`Promise.any` resolves with the first fulfilled (ignores rejections unless all fail).

### Example
```js
async function loadDashboard(userId) {
  const [user, orders, notifications] = await Promise.all([
    fetchUser(userId),
    fetchOrders(userId),
    fetchNotifications(userId),
  ]);
  return { user, orders, notifications };
}
```

### Likely Questions
- *What's the difference between `Promise.all` and `Promise.allSettled`?*
- *How do you handle one failing promise without killing the whole batch?* — Use `allSettled`, or wrap each in `.catch(e => null)` before `Promise.all`.

---

## Chapter 10: Debounce vs Throttle

### Definition
- **Debounce** — delay execution until the user stops triggering events for N ms.
- **Throttle** — guarantee execution at most once every N ms.

### Use Cases
- Debounce: **search input** (wait until user stops typing).
- Throttle: **scroll**, **resize**, **mousemove** (regular sampling).

### Example
```js
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

function throttle(fn, limit) {
  let inThrottle = false;
  return (...args) => {
    if (inThrottle) return;
    fn(...args);
    inThrottle = true;
    setTimeout(() => (inThrottle = false), limit);
  };
}
```

---

# Part II — React.js Deep Dive

---

## Chapter 11: Functional Components

### Definition
A React component written as a JavaScript function that returns JSX.

### Explanation
Functional components became the standard after the introduction of **Hooks** in React 16.8. They are simpler, easier to test, and avoid the `this` problems of class components. State and lifecycle are added via hooks (`useState`, `useEffect`, etc.).

### Example
```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}
```

### Likely Questions
- *Functional vs class components?* — Functional are concise, use hooks, no `this`, easier to test. Class components are largely legacy.

---

## Chapter 12: Props vs State

### Definition
- **Props** — read-only inputs passed from parent to child.
- **State** — internal, mutable data managed within the component.

### Comparison Table
| Aspect | Props | State |
|--------|-------|-------|
| Owner | Parent | The component itself |
| Mutable? | No (immutable inside child) | Yes (via setter) |
| Triggers re-render? | When parent re-passes new value | When setter is called |
| Purpose | Configuration / data passing | Local UI behavior |

### Example
```jsx
function Counter({ initial }) {           // `initial` is a prop
  const [count, setCount] = useState(initial); // count is state
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

---

## Chapter 13: `useEffect` and the Component Lifecycle

### Definition
`useEffect` runs side effects (data fetching, subscriptions, DOM mutations) after the component renders.

### Explanation
- **No dependency array** — runs after every render.
- `[]` empty array — runs **once** after mount (like `componentDidMount`).
- `[a, b]` — runs whenever `a` or `b` changes.
- Returning a function inside the effect performs **cleanup** (like `componentWillUnmount` or before the next effect).

### Example
```jsx
useEffect(() => {
  const id = setInterval(() => console.log("tick"), 1000);
  return () => clearInterval(id); // cleanup
}, []);
```

### Common Pitfalls
- **Missing dependencies** → stale closures.
- **Object/array deps** → effect re-runs every render (use `useMemo` or stable references).
- **Async effect** → don't make the effect itself `async`; instead, define an inner async function and call it.

### Likely Questions
- *Difference between `useEffect` and `useLayoutEffect`?*
  - `useEffect` runs **after** the browser paints (non-blocking).
  - `useLayoutEffect` runs **synchronously after DOM mutation but before paint** — use when you need to read layout and mutate before the user sees the screen.

---

## Chapter 14: `useMemo` vs `useCallback`

### Definition
- `useMemo(fn, deps)` — memoizes a **value** (the result of `fn()`).
- `useCallback(fn, deps)` — memoizes a **function reference**.

### Explanation
Both prevent expensive recomputations or unstable references across renders. `useCallback(fn, deps)` is equivalent to `useMemo(() => fn, deps)`.

### Example
```jsx
const filteredItems = useMemo(
  () => items.filter(i => i.name.includes(query)),
  [items, query]
);

const handleSelect = useCallback(
  (id) => setSelectedId(id),
  []
);
```

### When to Use
- `useMemo` — when a derived computation is **expensive**.
- `useCallback` — when you pass a callback to a **memoized child** (`React.memo`) and want to avoid breaking its memoization.

**Warning:** Don't sprinkle them everywhere. Memoization itself has overhead. Use only when there's a measurable issue.

---

## Chapter 15: `useRef`

### Definition
`useRef(initialValue)` returns a mutable object `{ current: initialValue }` that persists across renders without triggering re-renders.

### Two Main Uses
1. **Accessing DOM nodes**:
   ```jsx
   const inputRef = useRef(null);
   useEffect(() => inputRef.current.focus(), []);
   return <input ref={inputRef} />;
   ```
2. **Storing mutable values** that don't need to cause a re-render (e.g., previous value, timer IDs).

---

## Chapter 16: Controlled vs Uncontrolled Components

### Definition
- **Controlled** — form input value is driven by React state.
- **Uncontrolled** — form input is managed by the DOM, accessed via `ref`.

### Example
```jsx
// Controlled
const [name, setName] = useState("");
<input value={name} onChange={e => setName(e.target.value)} />

// Uncontrolled
const ref = useRef();
<input defaultValue="" ref={ref} />
// Read value with ref.current.value
```

**Interview tip:** Mention that controlled components give you validation, conditional disabling, and a single source of truth — preferred for production forms.

---

## Chapter 17: Context API

### Definition
A React mechanism for passing data through the component tree without manually drilling props at every level.

### Example
```jsx
const ThemeContext = React.createContext("light");

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const theme = useContext(ThemeContext);
  return <div className={theme}>...</div>;
}
```

### Limitations
- Any consumer re-renders whenever the context value changes.
- For frequently changing data (e.g., form state), prefer a state library or split contexts.

---

## Chapter 18: Custom Hooks

### Definition
A **custom hook** is a JavaScript function whose name starts with `use` and that may call other hooks. It encapsulates reusable stateful logic.

### Example
```jsx
function useDebouncedValue(value, delay) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}

// Usage
const debouncedQuery = useDebouncedValue(query, 300);
```

---

## Chapter 19: React Rendering Flow, Virtual DOM & Reconciliation

### Definition
- **Virtual DOM** — an in-memory representation of the real DOM as a tree of JS objects.
- **Reconciliation** — the diffing algorithm that compares the previous and next virtual DOM trees to compute the minimal set of real DOM updates.

### How It Works
1. State or props change.
2. React calls the component function → produces a new virtual DOM subtree.
3. React **diffs** the new tree against the previous one (using element type and `key`).
4. React commits only the changed nodes to the real DOM.

### Why `key` Matters
Without stable keys, React cannot identify which list items moved vs were re-created. Wrong keys (e.g., array index for a sortable list) cause buggy re-renders and lost input state.

### Likely Questions
- *How does React re-render work?*
- *Why are keys important?*
- *What is the Fiber architecture?* — React's incremental, interruptible rendering engine (introduced in React 16), which allows time-slicing and concurrent features.

---

## Chapter 20: Performance Optimization in React

A senior-level focus area. Be ready with a checklist.

### Techniques

| Technique | What it does |
|-----------|--------------|
| `React.memo` | Skips re-render if props are shallow-equal |
| `useMemo` / `useCallback` | Stabilizes derived values and callbacks |
| Code splitting (`React.lazy` + `Suspense`) | Loads components on demand |
| Lazy image loading | `<img loading="lazy">` or IntersectionObserver |
| Virtualization (`react-window`) | Renders only visible list items |
| Debounce / throttle | Reduces frequency of expensive work |
| Avoiding inline objects | Stable prop references prevent re-renders |
| Proper `key` props | Avoid React re-creating DOM nodes |
| Splitting context | Reduces blast radius of context updates |

### Real Answer for Interview
> "On a dashboard with ~5,000 rows, the initial render was sluggish. I introduced `react-window` for the table, lazy-loaded the analytics chart with `React.lazy`, and used `useMemo` for derived aggregates. First contentful paint dropped from ~2.4s to ~900ms."

---

## Chapter 21: State Management — Redux Toolkit & Async Thunk

### Definition
**Redux** is a predictable state container; **Redux Toolkit (RTK)** is the official, opinionated wrapper that reduces boilerplate.

### Core Concepts
- **Store** — single source of truth.
- **Slice** — feature-scoped reducer + actions, created by `createSlice`.
- **Thunk** — middleware that lets actions return a function for async work (`createAsyncThunk`).
- **Selector** — function reading data from the store (`useSelector`).

### Example
```js
// userSlice.js
export const fetchUser = createAsyncThunk("user/fetch", async (id) => {
  const res = await fetch(`/api/users/${id}`);
  return res.json();
});

const userSlice = createSlice({
  name: "user",
  initialState: { data: null, status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (s) => { s.status = "loading"; })
      .addCase(fetchUser.fulfilled, (s, a) => {
        s.status = "succeeded";
        s.data = a.payload;
      });
  },
});
```

### Context API vs Redux
| | Context | Redux |
|---|---|---|
| Best for | Theming, auth user, locale | Complex, frequently-updated app state |
| Devtools | None | Time-travel debugger |
| Middleware | None built in | Thunks, sagas, listeners |
| Boilerplate | Minimal | Moderate (with RTK) |

---

# Part III — Node.js & Backend Architecture

---

## Chapter 22: The Event Loop

### Definition
The event loop is Node.js's mechanism for performing non-blocking I/O on a single-threaded JavaScript engine by offloading work to the OS and handling completion callbacks in phases.

### The Phases (simplified)
1. **Timers** — `setTimeout`, `setInterval` callbacks.
2. **Pending callbacks** — deferred I/O callbacks.
3. **Idle / prepare** — internal.
4. **Poll** — retrieve new I/O events; execute their callbacks.
5. **Check** — `setImmediate` callbacks.
6. **Close callbacks** — e.g., `socket.on('close')`.

Between every phase, Node drains the **microtask queue** (`process.nextTick`, resolved Promises).

### Example
```js
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");
// Output: 1, 4, 3, 2
// Microtasks (promises) run before macrotasks (setTimeout).
```

### Why It Matters
Understanding the loop helps you reason about why a CPU-bound `for` loop blocks the server, and why async I/O does not.

---

## Chapter 23: Promises and `async/await`

### Definition
`async/await` is syntactic sugar over Promises that makes asynchronous code look synchronous.

### Example
```js
// Promise chain
function loadUser(id) {
  return fetchUser(id)
    .then(u => fetchOrders(u.id))
    .then(orders => ({ orders }));
}

// async/await
async function loadUser(id) {
  const user = await fetchUser(id);
  const orders = await fetchOrders(user.id);
  return { orders };
}
```

### Error Handling
```js
try {
  const data = await fetchSomething();
} catch (err) {
  // handle
}
```

**Tip:** When you need to fire requests in parallel, *don't* `await` them sequentially. Use `Promise.all`.

---

## Chapter 24: Middleware

### Definition
Middleware in Express/Node is a function that has access to `(req, res, next)` and can either send a response or pass control to the next middleware.

### Common Uses
- Authentication
- Logging
- Body parsing
- Rate limiting
- Error handling (special form: `(err, req, res, next)`)

### Example
```js
function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
}

app.use("/api", authMiddleware);
```

---

## Chapter 25: JWT Authentication & Refresh Tokens

### Definition
**JWT (JSON Web Token)** is a self-contained, signed token format used for stateless authentication.

### Structure
`header.payload.signature` — Base64URL-encoded. Signature is produced with a secret (HS256) or a private key (RS256).

### Flow (Access + Refresh)
1. User logs in → server issues a short-lived **access token** (15 min) and a long-lived **refresh token** (7–30 days).
2. Client stores access token in memory and refresh token in **httpOnly cookie**.
3. Each API call includes `Authorization: Bearer <access>`.
4. When access expires, client calls `/auth/refresh` → server validates refresh token (often against a DB allowlist) → issues a new access token.
5. Logout = invalidate refresh token server-side.

### Example
```js
const access = jwt.sign({ sub: user.id, role: user.role },
  process.env.JWT_SECRET, { expiresIn: "15m" });

const refresh = jwt.sign({ sub: user.id },
  process.env.REFRESH_SECRET, { expiresIn: "7d" });
```

### Security Notes
- **Never** store JWTs in `localStorage` if you can avoid it (XSS-prone).
- Rotate refresh tokens on every use.
- Maintain a server-side blocklist for revoked tokens.

---

## Chapter 26: REST API Best Practices

- **Nouns, not verbs** in URLs (`/users/123/orders`, not `/getOrdersByUser`).
- **HTTP verbs** map to operations: GET (read), POST (create), PUT (replace), PATCH (partial update), DELETE.
- **Status codes**: 200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 422 Unprocessable, 500 Server Error.
- **Pagination**: `?page=2&limit=20` or cursor-based with `?after=<id>`.
- **Versioning**: `/api/v1/...` or via `Accept` header.
- **Consistent error format**:
  ```json
  { "error": { "code": "VALIDATION_FAILED", "message": "Email is required" } }
  ```
- **Idempotency**: PUT and DELETE must be idempotent.

---

## Chapter 27: MVC Architecture

### Definition
A separation-of-concerns pattern:
- **Model** — data and business logic (e.g., Mongoose schema, service layer).
- **View** — presentation (in API context, this is the JSON response shaping).
- **Controller** — request handler that orchestrates models and produces a response.

### Example Folder Layout
```
src/
  controllers/  user.controller.js
  services/     user.service.js
  models/       user.model.js
  routes/       user.routes.js
  middlewares/  auth.middleware.js
  utils/        logger.js
  app.js
```

Modern Node apps often add a **service layer** between controller and model — keep controllers thin and put business logic in services.

---

## Chapter 28: Error Handling

### Centralized Error Middleware (Express)
```js
class AppError extends Error {
  constructor(status, message) { super(message); this.status = status; }
}

app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({
    error: {
      message: err.message || "Internal Server Error",
      ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
    },
  });
});
```

Wrap async handlers so thrown errors reach this middleware:
```js
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);
```

---

## Chapter 29: File Uploads (Multer + AWS S3)

### Pattern
1. Validate MIME type and size.
2. Stream to S3 with `@aws-sdk/client-s3`.
3. Store only the S3 key/URL in the DB.

### Example
```js
import multer from "multer";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const upload = multer({
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
  fileFilter: (req, file, cb) =>
    /^image\/(png|jpe?g|webp)$/.test(file.mimetype)
      ? cb(null, true)
      : cb(new Error("Invalid file type")),
});

app.post("/upload", upload.single("file"), async (req, res) => {
  const key = `uploads/${Date.now()}-${req.file.originalname}`;
  await s3.send(new PutObjectCommand({
    Bucket: process.env.S3_BUCKET,
    Key: key,
    Body: req.file.buffer,
    ContentType: req.file.mimetype,
  }));
  res.json({ url: `https://${process.env.S3_BUCKET}.s3.amazonaws.com/${key}` });
});
```

**Production tip:** For large files, use **pre-signed URLs** so the browser uploads directly to S3 — the server only signs the URL.

---

## Chapter 30: Pagination

### Offset-Based
```js
GET /users?page=2&limit=20
// SQL: LIMIT 20 OFFSET 20
// Mongo: .skip(20).limit(20)
```
Easy but slow on deep pages (DB scans all skipped rows).

### Cursor-Based (better at scale)
```js
GET /users?after=<lastId>&limit=20
// Mongo: .find({ _id: { $gt: lastId } }).limit(20)
```
Stable under inserts, O(1) regardless of page depth.

---

## Chapter 31: Rate Limiting

### Why
Protects from brute-force, DoS, and abuse.

### Express Example
```js
import rateLimit from "express-rate-limit";

app.use("/api/auth", rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 5,                    // 5 attempts
  message: "Too many login attempts, try again later.",
}));
```

In distributed setups, back the limiter with Redis so the count is shared across instances.

---

# Part IV — Express & NestJS

---

## Chapter 32: Express vs NestJS

| Aspect | Express | NestJS |
|--------|---------|--------|
| Style | Unopinionated, minimalist | Opinionated, modular (inspired by Angular) |
| Language | JS/TS | TypeScript first |
| Architecture | You design it | Modules, controllers, providers built in |
| DI | Manual | Built-in IoC container |
| Validation | Manual / Joi | `class-validator` + DTOs |
| Suitable for | Small services, prototypes | Large, scalable enterprise apps |
| Learning curve | Low | Moderate |

### Why NestJS?
- **Scalability** — clear module boundaries.
- **Maintainability** — DI makes testing/mocking trivial.
- **Built-in features** — guards, interceptors, pipes, exception filters, Swagger module.
- **TypeScript native** — strong typing reduces runtime errors.

---

## Chapter 33: Dependency Injection in NestJS

### Definition
Dependency Injection is a design pattern in which a class declares its dependencies (usually in the constructor) and the framework supplies them at runtime.

### Example
```ts
@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  findById(id: string) { return this.userModel.findById(id); }
}

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(":id")
  get(@Param("id") id: string) { return this.userService.findById(id); }
}
```

The framework instantiates `UserService` once (singleton by default) and injects it wherever needed.

---

## Chapter 34: DTOs and Validation

### Definition
A **DTO (Data Transfer Object)** defines the shape of incoming data and is validated using decorators.

### Example
```ts
export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsOptional()
  @IsEnum(Role)
  role?: Role;
}
```
With `app.useGlobalPipes(new ValidationPipe({ whitelist: true }))`, NestJS auto-validates incoming bodies and strips unknown fields.

---

## Chapter 35: Guards, Middleware, Interceptors

| Construct | Purpose | Order |
|-----------|---------|-------|
| **Middleware** | Run before route handler — logging, body parsing | First |
| **Guards** | Authorization — return `true/false` to allow/deny | After middleware |
| **Interceptors** | Wrap handler — transform response, caching, logging timings | Around handler |
| **Pipes** | Transform/validate inputs (e.g., `ValidationPipe`) | Before handler |
| **Exception filters** | Catch thrown errors and shape the response | On error |

### Guard Example
```ts
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(ctx: ExecutionContext): boolean {
    const required = this.reflector.get<string[]>("roles", ctx.getHandler());
    if (!required) return true;
    const { user } = ctx.switchToHttp().getRequest();
    return required.some((r) => user.roles?.includes(r));
  }
}
```

---

## Chapter 36: Swagger Integration

```ts
const config = new DocumentBuilder()
  .setTitle("Hyscaler API")
  .setVersion("1.0")
  .addBearerAuth()
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup("docs", app, document);
```
Combined with `@ApiProperty()` decorators on DTOs, you get auto-generated, interactive API docs at `/docs`.

---

# Part V — Databases (MongoDB Focus)

---

## Chapter 37: Mongoose Schemas

### Definition
A **schema** defines the structure, types, and validation rules for documents in a MongoDB collection.

### Example
```js
const userSchema = new mongoose.Schema({
  email:    { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, select: false },
  role:     { type: String, enum: ["admin", "user"], default: "user" },
  createdAt:{ type: Date, default: Date.now },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

export const User = mongoose.model("User", userSchema);
```

---

## Chapter 38: MongoDB Indexing

### Definition
An **index** is a data structure (B-tree) that lets MongoDB find documents without scanning the entire collection.

### Types
- **Single field**: `db.users.createIndex({ email: 1 })`
- **Compound**: `{ status: 1, createdAt: -1 }` — order matters; supports queries on `status` alone or `status + createdAt`.
- **Text**: full-text search.
- **TTL**: auto-expire docs after N seconds.
- **Unique**: enforces uniqueness.

### How to Diagnose Slow Queries
1. `.explain("executionStats")` — look for `COLLSCAN` (bad) vs `IXSCAN` (good).
2. Check the `totalDocsExamined` vs `nReturned` ratio.
3. Use the **MongoDB profiler** for slow ops.

### Interview Answer
> "I had an aggregation that took ~3s on a 2M-row collection. `explain` showed a COLLSCAN on `status` and `createdAt`. I added a compound index `{ status: 1, createdAt: -1 }` matching the query's filter and sort order. Query time dropped to ~30ms."

---

## Chapter 39: Aggregation Pipeline

### Definition
A multi-stage processing pipeline where each stage transforms documents and passes them to the next.

### Common Stages
| Stage | Purpose |
|-------|---------|
| `$match` | Filter (push to start to use indexes) |
| `$project` | Reshape / select fields |
| `$group` | Aggregate (sum, avg, count) |
| `$sort` | Order |
| `$lookup` | SQL-style left join |
| `$unwind` | Flatten array |
| `$facet` | Run multiple sub-pipelines |
| `$limit` / `$skip` | Pagination |

### Example — orders per user this month
```js
db.orders.aggregate([
  { $match: { createdAt: { $gte: ISODate("2026-05-01") } } },
  { $group: { _id: "$userId", total: { $sum: "$amount" }, count: { $sum: 1 } } },
  { $sort: { total: -1 } },
  { $limit: 10 },
  { $lookup: { from: "users", localField: "_id", foreignField: "_id", as: "user" } },
  { $unwind: "$user" },
  { $project: { _id: 0, name: "$user.name", total: 1, count: 1 } },
]);
```

---

## Chapter 40: `populate()` vs `$lookup`

### `populate()`
Mongoose-level: runs a separate query for referenced documents.
```js
Order.find().populate("user", "name email");
```
Easier to write, but issues an extra round-trip per population.

### `$lookup`
MongoDB-level aggregation join. Single query, but more verbose.

Use `populate` for simple read paths; switch to `$lookup` when you need to filter/sort by joined fields.

---

## Chapter 41: SQL vs NoSQL

| Aspect | SQL (Postgres, MySQL) | NoSQL (MongoDB) |
|--------|----------------------|-----------------|
| Schema | Strict, predefined | Flexible, evolving |
| Joins | Native, performant | Limited (`$lookup`) |
| Transactions | ACID | Multi-document transactions since 4.0 |
| Scaling | Vertical primarily | Horizontal (sharding) |
| Best for | Strongly relational data | Document-shaped, fast-changing data |

---

# Part VI — Machine Coding / Practical Round

These are time-boxed exercises (30–60 min). Demonstrate clean structure, edge-case handling, and verbal reasoning.

---

## Chapter 42: Frontend Tasks

### Task 1 — Debounced Search
```jsx
function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}

function Search() {
  const [query, setQuery] = useState("");
  const debounced = useDebounce(query);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!debounced) return setResults([]);
    let active = true;
    fetch(`/api/search?q=${debounced}`)
      .then(r => r.json())
      .then(data => active && setResults(data));
    return () => { active = false; };
  }, [debounced]);

  return (
    <>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <ul>{results.map(r => <li key={r.id}>{r.name}</li>)}</ul>
    </>
  );
}
```

### Task 2 — Pagination
- Two patterns: numbered pages or "Load More".
- Keep `page` and `total` in state; compute `totalPages = Math.ceil(total / limit)`.

### Task 3 — Form Validation
- Controlled inputs.
- Inline `errors` state object.
- Block submit when `Object.keys(errors).length > 0`.

### Task 4 — Sortable / Filterable Table
- Derive view with `useMemo` from `rows + sort + filter` to avoid recompute on unrelated re-renders.

---

## Chapter 43: Backend Tasks

### Task — JWT-Protected CRUD
```
POST   /auth/register
POST   /auth/login         → returns { accessToken, refreshToken }
GET    /items              (auth)
POST   /items              (auth + body validation)
GET    /items/:id          (auth)
PATCH  /items/:id          (auth + ownership check)
DELETE /items/:id          (auth + role: admin)
```

### Folder Structure
```
src/
  routes/      auth.routes.js, items.routes.js
  controllers/ auth.controller.js, items.controller.js
  services/    auth.service.js, items.service.js
  middlewares/ auth.middleware.js, errorHandler.js
  models/      user.model.js, item.model.js
  utils/       jwt.js, asyncHandler.js
```

---

# Part VII — System Design (Mid-Level)

You won't get FAANG-level design rounds, but TCS asks **mid-level architectural** thinking.

---

## Chapter 44: Authentication Architecture

- **Stateless** — JWT in `Authorization` header. Pros: scales horizontally, no session store. Cons: harder revocation.
- **Stateful** — session ID in cookie, session stored in Redis. Pros: easy revocation. Cons: store hot path.
- **Hybrid** — short JWT access + long refresh stored in DB.

### Common Components
- Identity provider (OAuth, Cognito, custom).
- Auth service issuing tokens.
- API gateway verifying JWT before forwarding.
- Role/permission checks at controller/guard level.

---

## Chapter 45: Scalable APIs

- **Stateless services** → horizontal scaling behind a load balancer.
- **Caching** — Redis for hot reads, HTTP caching headers for CDN.
- **Async processing** — push heavy work to a queue (BullMQ, SQS, RabbitMQ).
- **Database** — read replicas for read-heavy workloads, sharding for very large data.
- **Observability** — structured logs, metrics (Prometheus), tracing (OpenTelemetry).

---

## Chapter 46: Caching

### Layers
1. **Browser cache** — `Cache-Control`, `ETag`.
2. **CDN** — CloudFront, Cloudflare, for static assets and cached API responses.
3. **Application cache** — in-process LRU (e.g., `lru-cache`).
4. **Distributed cache** — Redis / Memcached shared across instances.

### Cache Strategies
- **Cache-aside (lazy)** — app checks cache, falls back to DB, then populates cache.
- **Write-through** — app writes to cache and DB together.
- **TTL + invalidation** — set expiry, plus explicit invalidation on writes.

---

## Chapter 47: Monolith vs Microservices

| | Monolith | Microservices |
|---|---|---|
| Codebase | Single | Many |
| Deployment | All-at-once | Independent |
| Communication | In-process | Network (REST/gRPC/queues) |
| Best for | Small teams, early stage | Large orgs, independent domains |
| Complexity | Lower | Much higher (observability, networking, data consistency) |

**Honest answer:** Most products should start as a well-modularized monolith and split only when team/scale forces it.

---

## Chapter 48: API Security Checklist

- HTTPS everywhere.
- Validate every input (DTO + schema).
- Rate limit auth and write endpoints.
- Helmet for secure headers.
- CORS allowlist (no `*` for credentialed requests).
- Hash passwords with bcrypt / argon2.
- Parameterized queries (or ODM) to avoid injection.
- Never log secrets, tokens, or PII.
- Use environment variables; never commit `.env`.

---

# Part VIII — HR & Behavioral

TCS HR rounds weigh communication and stability heavily. Prepare honest, structured answers.

---

## Chapter 49: Tell Me About Yourself

Use a **4-beat structure** (≈ 90 seconds):
1. Who you are now (role + years).
2. What you do day-to-day (stack + responsibilities).
3. One headline achievement (impact, numbers).
4. Why you're here (career direction).

> "I'm Soumyaranjan Rout, a Full-Stack Developer with about three years of experience. I currently work at Hyscaler, where I build features end-to-end across React, Node.js, and NestJS with MongoDB and AWS. One recent highlight was redesigning our file-upload pipeline using NestJS and S3 — it cut upload latency by ~40% and made the service handle ~3× the traffic. I'm now looking for a larger, more diverse product environment, which is why TCS is exciting to me."

---

## Chapter 50: Common HR Questions — Frameworks

### Why are you switching?
Frame it positively — growth, scale, exposure to larger systems. Never speak negatively about a current employer.

### Why TCS?
Mention the scale of projects, exposure to diverse domains (BFSI, retail, healthcare), structured learning, and global delivery model.

### Biggest achievement
Pick one with **quantifiable impact**. Use STAR: Situation → Task → Action → Result.

### Team conflict example
- Describe disagreement without blame.
- Explain how you sought common ground (data, prototype, escalation only if needed).
- End with resolution and what you learned.

### Where do you see yourself in 5 years?
"Growing into a senior full-stack / tech lead role, mentoring others, and owning architectural decisions for sizeable systems."

### Salary expectation
"Based on my experience and current CTC of X, I'm looking for something in the range of Y, but I'm flexible if the role and growth are right."

---

# Part IX — Self-Introduction Template

A polished 90-second intro is a force multiplier.

```
Hi, I'm Soumyaranjan Rout. I'm currently working as a Full-Stack Developer
at Hyscaler with around three years of experience.

My primary stack is React.js on the frontend and Node.js with NestJS on the
backend, along with MongoDB and AWS services — mostly S3 for file handling.

Before Hyscaler, I was at Technoboot Pvt Ltd, where I learned the core MERN
stack and worked on production REST APIs.

Some of my recent work includes:
- A scalable file-upload service on NestJS + AWS S3 with secure pre-signed URLs.
- A role-based access system using JWT and refresh tokens.
- Performance optimizations on a high-traffic dashboard — reducing initial
  load time by ~50% using code splitting, memoization, and list virtualization.

I'm now looking for a larger, more diverse engineering environment to keep
growing as a full-stack engineer, which is why I'm excited about this role at TCS.
```

**Practice tips:**
- Time yourself (target 75–95s).
- Record audio and re-listen.
- Stress-test by stopping mid-way and resuming — interviewers may interrupt.

---

# Part X — Quick-Fire Revision Sheet

The night before — read this once.

### JavaScript
- **Closure** → function + lexical scope reference.
- **Hoisting** → declarations move up; `let`/`const` in TDZ.
- **`this`** → call-site dependent; arrow inherits.
- **`==` vs `===`** → always `===`.
- **Debounce** → wait until silent. **Throttle** → at most once per N ms.

### React
- `useEffect` cleanup runs before next effect or on unmount.
- `useMemo` for values, `useCallback` for functions.
- `React.memo` + stable props = fewer re-renders.
- Reconciliation uses element **type** + **key** to diff.
- Lift state up, push it down only as far as needed.

### Node
- Event loop phases: timers → I/O → check → close, microtasks between.
- Centralized error middleware with custom `AppError`.
- JWT: short access + long refresh (httpOnly).
- Rate-limit auth routes.

### NestJS
- Modules, controllers, providers, DI.
- Pipes validate, guards authorize, interceptors transform, filters catch.

### MongoDB
- Use `.explain()` to confirm `IXSCAN`.
- Match early in aggregation pipeline.
- Compound index order matters.

### Soft skills
- Speak in **STAR** format.
- Numbers > adjectives.
- Confidence ≠ arrogance.

---

# Appendix A — Documents Checklist

- [ ] 3–5 printed resume copies
- [ ] Government-issued photo ID (Aadhaar/PAN/Passport)
- [ ] Passport-size photos (2–4)
- [ ] All educational certificates (10th, 12th, degree)
- [ ] Experience letters (Hyscaler, Technoboot)
- [ ] Last 3 months' salary slips
- [ ] Offer letter / current CTC proof
- [ ] PAN card copy
- [ ] Laptop & charger (if asked)
- [ ] Pen and notebook

---

# Appendix B — Questions to Ask the Interviewer

Asking good questions signals seniority. Pick 2–3:

1. *What kind of projects does this team typically work on?*
2. *How is the team currently structured — full-stack engineers, separate FE/BE, or mixed?*
3. *What's the tech stack in production today, and is there appetite to evolve it?*
4. *What does success look like in this role at the 3- and 6-month mark?*
5. *What are the growth opportunities for full-stack engineers — both technical (senior/lead) and managerial?*
6. *How do code reviews, deployments, and on-call work here?*

---

> **Final note:** You already have hands-on production exposure with the exact stack TCS wants — MERN, NestJS, AWS S3, Swagger, scalable APIs. Lead with **specific stories and numbers** from your work. Textbook answers everyone has; *your projects* are your differentiator.

**Good luck — go own it.**
