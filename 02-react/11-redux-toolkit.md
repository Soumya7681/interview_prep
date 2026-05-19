# Chapter 21 — State Management with Redux Toolkit

## 📖 Definitions

- **Redux** — predictable state container, single store, reducers update state via dispatched actions.
- **Redux Toolkit (RTK)** — the official, opinionated wrapper that eliminates most boilerplate.
- **Thunk** — middleware allowing actions to return a function (used for async logic).
- **RTK Query** — RTK's built-in data-fetching layer (similar to TanStack Query).

## 🔍 Core Concepts

| Term | Meaning |
|------|---------|
| **Store** | Single object holding the whole state tree |
| **Slice** | Feature-scoped reducer + actions (`createSlice`) |
| **Action** | `{ type, payload }` describing what happened |
| **Reducer** | Pure function `(state, action) => newState` |
| **Selector** | Function reading derived data from the store |
| **Thunk** | Async action (`createAsyncThunk`) |

## 💻 Code Example — Setting Up the Store

```js
// store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "./userSlice";
import cartReducer  from "./cartSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

```jsx
// index.jsx
import { Provider } from "react-redux";
import { store } from "./store";

<Provider store={store}>
  <App />
</Provider>
```

## 💻 Code Example — Creating a Slice

```js
// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], total: 0 },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);            // ✅ immer lets you "mutate"
      state.total += action.payload.price;
    },
    removeItem(state, action) {
      const idx = state.items.findIndex(i => i.id === action.payload);
      if (idx > -1) {
        state.total -= state.items[idx].price;
        state.items.splice(idx, 1);
      }
    },
    clear(state) {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addItem, removeItem, clear } = cartSlice.actions;
export default cartSlice.reducer;
```

> RTK uses **Immer** internally, so you can write "mutating" code — it's converted to immutable updates under the hood.

## 💻 Code Example — Consuming State and Dispatching

```jsx
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "./cartSlice";

function Cart() {
  const { items, total } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Cart ({items.length} items) — ₹{total}</h3>
      <ul>
        {items.map(i => (
          <li key={i.id}>
            {i.name} — ₹{i.price}
            <button onClick={() => dispatch(removeItem(i.id))}>×</button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(addItem({ id: 99, name: "Book", price: 250 }))}>
        Add Book
      </button>
    </div>
  );
}
```

## 💻 Code Example — `createAsyncThunk`

```js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
  "user/fetch",
  async (id, { rejectWithValue }) => {
    try {
      const res = await fetch(`/api/users/${id}`);
      if (!res.ok) throw new Error("Failed");
      return await res.json();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: { data: null, status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending,   (s)    => { s.status = "loading"; s.error = null; })
      .addCase(fetchUser.fulfilled, (s, a) => { s.status = "succeeded"; s.data = a.payload; })
      .addCase(fetchUser.rejected,  (s, a) => { s.status = "failed";    s.error = a.payload; });
  },
});

export default userSlice.reducer;
```

Usage:
```jsx
const dispatch = useDispatch();
useEffect(() => { dispatch(fetchUser(1)); }, [dispatch]);
const { data, status, error } = useSelector(s => s.user);
```

## 💻 Code Example — Selectors (Reusable + Memoized)

```js
import { createSelector } from "@reduxjs/toolkit";

const selectCartItems = (state) => state.cart.items;

export const selectPaidItems = createSelector(
  [selectCartItems],
  (items) => items.filter(i => i.paid)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (items) => items.reduce((sum, i) => sum + i.price, 0)
);

// In component
const paid = useSelector(selectPaidItems);   // memoized — recomputes only when items change
```

## 💻 Code Example — RTK Query (Built-in API Layer)

```js
// api.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => `/users/${id}`,
      providesTags: (result, error, id) => [{ type: "User", id }],
    }),
    updateUser: builder.mutation({
      query: ({ id, ...patch }) => ({ url: `/users/${id}`, method: "PATCH", body: patch }),
      invalidatesTags: (r, e, { id }) => [{ type: "User", id }],
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } = api;
```

```jsx
// Usage
function UserCard({ id }) {
  const { data, isLoading } = useGetUserQuery(id);
  const [updateUser] = useUpdateUserMutation();

  if (isLoading) return <Spinner />;
  return (
    <>
      <h2>{data.name}</h2>
      <button onClick={() => updateUser({ id, name: "Renamed" })}>Rename</button>
    </>
  );
}
```

RTK Query handles caching, refetching, dedup, optimistic updates — much like TanStack Query but integrated into Redux.

## 📊 Context API vs Redux

| | Context | Redux (RTK) |
|---|---|---|
| Best for | Theming, auth user, locale | Complex, frequently-updated app state |
| Devtools | None | Time-travel debugger |
| Middleware | None built-in | Thunks, listener, sagas |
| Boilerplate | Minimal | Moderate (RTK reduces it) |
| Performance | Re-renders all consumers | Selector-based, granular |
| Async helpers | DIY | `createAsyncThunk`, RTK Query |

## 🎯 Likely Interview Questions

1. **Why use Redux over Context?**
2. **What is a slice in RTK?**
3. **Why does RTK let you "mutate" state?** — Immer wraps reducers to produce immutable updates.
4. **What is a thunk?**
5. **What is `createSelector`?** — Memoized selector that only recomputes when its inputs change.
6. **How is RTK Query different from TanStack Query?** — RTK Query is part of Redux store; better when you already use Redux. TanStack Query is standalone and often preferred for greenfield projects.

---

[← Performance](10-performance-optimization.md) | [Index](../README.md) | [Next: Event Loop →](../03-nodejs/01-event-loop.md)
