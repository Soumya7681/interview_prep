# Full-Stack Developer Interview Prep Book

A structured, multi-file preparation guide for the **React.js / Node.js Full-Stack Developer** role at TCS (3+ years experience).

Every concept follows the same pattern:

> **Definition → Explanation → Code Example → Real-World Use → Likely Interview Questions**

---

## 📂 Directory Layout

```
prepNote/
├── README.md                          ← you are here
├── MAIN.md                            ← original outline
├── PREP_BOOK.md                       ← single-file version
│
├── 01-javascript/
│   ├── 01-closures.md
│   ├── 02-hoisting.md
│   ├── 03-scope.md
│   ├── 04-this-keyword.md
│   ├── 05-prototype.md
│   ├── 06-equality.md
│   ├── 07-event-handling.md
│   ├── 08-array-methods.md
│   ├── 09-promises.md
│   └── 10-debounce-throttle.md
│
├── 02-react/
│   ├── 01-functional-components.md
│   ├── 02-props-vs-state.md
│   ├── 03-useeffect.md
│   ├── 04-usememo-usecallback.md
│   ├── 05-useref.md
│   ├── 06-controlled-uncontrolled.md
│   ├── 07-context-api.md
│   ├── 08-custom-hooks.md
│   ├── 09-virtual-dom-reconciliation.md
│   ├── 10-performance-optimization.md
│   └── 11-redux-toolkit.md
│
├── 03-nodejs/
│   ├── 01-event-loop.md
│   ├── 02-async-await.md
│   ├── 03-middleware.md
│   ├── 04-jwt-auth.md
│   ├── 05-rest-best-practices.md
│   ├── 06-mvc-architecture.md
│   ├── 07-error-handling.md
│   ├── 08-file-upload-s3.md
│   ├── 09-pagination.md
│   └── 10-rate-limiting.md
│
├── 04-express-nestjs/
│   ├── 01-express-vs-nestjs.md
│   ├── 02-dependency-injection.md
│   ├── 03-dtos-validation.md
│   ├── 04-guards-middleware-interceptors.md
│   └── 05-swagger.md
│
├── 05-mongodb/
│   ├── 01-mongoose-schemas.md
│   ├── 02-indexing.md
│   ├── 03-aggregation.md
│   ├── 04-populate-vs-lookup.md
│   └── 05-sql-vs-nosql.md
│
├── 06-machine-coding/
│   ├── 01-frontend-tasks.md
│   └── 02-backend-tasks.md
│
├── 07-system-design/
│   ├── 01-authentication.md
│   ├── 02-scalable-apis.md
│   ├── 03-caching.md
│   ├── 04-monolith-vs-microservices.md
│   └── 05-api-security.md
│
├── 08-hr-behavioral/
│   ├── 01-self-introduction.md
│   └── 02-common-questions.md
│
├── 09-revision-sheet.md               ← night-before cheat sheet
├── 10-appendix.md                     ← documents + questions to ask
└── 11-dsa-coding-questions.md         ← top 200+ coding questions
```

---

## 🎯 How to Use

### One week out
- Read all of `01-javascript/`, `02-react/`, and `03-nodejs/`.
- Type out every code example by hand — don't copy-paste.

### Two days out
- Read `04-express-nestjs/` and `05-mongodb/`.
- Walk through `06-machine-coding/` exercises with a timer.

### One day out
- Skim `07-system-design/`.
- Practice `08-hr-behavioral/01-self-introduction.md` out loud, recorded.

### The morning of
- Read **only** `09-revision-sheet.md`.
- Pack everything from `10-appendix.md`.

---

## 🧭 Reading Order (recommended)

| Order | Folder | Why |
|------|--------|-----|
| 1 | `01-javascript/` | Foundation — every other topic builds on this |
| 2 | `02-react/` | Frontend round |
| 3 | `03-nodejs/` | Backend round |
| 4 | `04-express-nestjs/` | Architecture round |
| 5 | `05-mongodb/` | Data round |
| 6 | `06-machine-coding/` | Practical / hands-on round |
| 7 | `07-system-design/` | Mid-level architecture round |
| 8 | `08-hr-behavioral/` | HR round |
| 9 | `09-revision-sheet.md` | Final revision |
| 10 | `10-appendix.md` | Logistics |
| 11 | `11-dsa-coding-questions.md` | DSA / logical coding questions |

---

## ✅ Topic Coverage Matrix

| Category | Files | Concepts |
|----------|------|---------|
| JavaScript | 10 | Closures, hoisting, scope, `this`, prototypes, equality, events, array methods, Promises, debounce/throttle |
| React | 11 | Components, props/state, all major hooks, controlled forms, Context, custom hooks, VDOM, performance, Redux Toolkit |
| Node.js | 10 | Event loop, async, middleware, JWT, REST, MVC, errors, S3 uploads, pagination, rate limiting |
| NestJS | 5 | Express vs NestJS, DI, DTOs, guards/interceptors, Swagger |
| MongoDB | 5 | Schemas, indexing, aggregation, populate/lookup, SQL vs NoSQL |
| Machine coding | 2 | Frontend (search/pagination/forms/tables), Backend (JWT CRUD) |
| System design | 5 | Auth, scaling, caching, monolith vs micro, security |
| HR | 2 | Self-intro, common questions |
| Reference | 3 | Revision sheet, appendix, 200+ DSA coding questions |

---

> **Final note:** You already have hands-on production exposure with the exact stack TCS wants — MERN, NestJS, AWS S3, Swagger. Lead with **specific stories and numbers** from your work. Textbook answers everyone has; *your projects* are your differentiator.

**Good luck — go own it.**
