# Chapter 2 — Hoisting

## 📖 Definition

**Hoisting** is JavaScript's behavior of moving **declarations** (not initializations) to the top of their containing scope during the compilation phase, before code executes.

## 🔍 Explanation

Before any code runs, the JS engine scans the code and registers all declarations:

| Declaration | Hoisted? | Initialized? |
|-------------|---------|--------------|
| `var` | ✅ Yes | ✅ to `undefined` |
| `let` / `const` | ✅ Yes | ❌ TDZ until line of declaration |
| `function` (declaration) | ✅ Yes | ✅ to the function |
| `function` (expression) | follows variable rules | depends on `var`/`let`/`const` |
| `class` | ✅ Yes | ❌ TDZ |

**Temporal Dead Zone (TDZ)** — the period between entering the scope and the actual `let`/`const`/`class` declaration line. Accessing the variable in that window throws `ReferenceError`.

## 💻 Code Example — `var` Hoisting

```js
console.log(a); // undefined  (declaration hoisted, value not)
var a = 10;
console.log(a); // 10

// Equivalent to:
// var a;
// console.log(a);
// a = 10;
// console.log(a);
```

## 💻 Code Example — `let`/`const` and the TDZ

```js
console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 20;

console.log(c); // ❌ ReferenceError
const c = 30;
```

## 💻 Code Example — Function Declaration vs Expression

```js
// Function DECLARATION — fully hoisted
sayHi();                       // "Hi!"
function sayHi() { console.log("Hi!"); }

// Function EXPRESSION assigned to var — only var is hoisted
sayBye();                      // ❌ TypeError: sayBye is not a function
var sayBye = function () { console.log("Bye!"); };

// Function EXPRESSION assigned to let — TDZ
sayHello();                    // ❌ ReferenceError
let sayHello = function () { console.log("Hello!"); };
```

## 💻 Code Example — Arrow Functions

```js
// Arrow functions are NOT hoisted like declarations
greet();                       // ❌ ReferenceError
const greet = () => console.log("Hello");
```

## 💻 Code Example — Hoisting Order

```js
function test() {
  console.log(x);              // [Function: x]
  var x = 10;
  function x() {}              // function declarations win the initial value
  console.log(x);              // 10
}
test();
```

## 🌍 Real-World Impact

- Always declare with `const`/`let` to avoid `var` hoisting surprises.
- Place function declarations near the top of files for readability — hoisting masks bad ordering.
- Linters (ESLint `no-use-before-define`) catch most hoisting bugs.

## 🎯 Likely Interview Questions

1. **What is hoisting?**
2. **What is the Temporal Dead Zone?**
3. **Are arrow functions hoisted?** — No. They follow variable hoisting rules.
4. **What's the difference between function declarations and function expressions in terms of hoisting?**
5. **Output prediction:**
   ```js
   var a = 1;
   function foo() {
     console.log(a);
     var a = 2;
   }
   foo(); // undefined — local `a` is hoisted and shadows the outer
   ```

---

[← Closures](01-closures.md) | [Index](../README.md) | [Next: Scope →](03-scope.md)
