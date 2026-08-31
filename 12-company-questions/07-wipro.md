# Wipro Full-Stack Developer Interview Questions

Welcome to the detailed interview guide for Wipro. This page contains specific, extracted interview questions with direct resource links to help you prepare effectively.

## 1. Coding & Algorithms
Wipro evaluates your problem-solving skills using Data Structures and Algorithms. Below are highly frequent questions asked by Wipro.

### Detailed Data Structures & Algorithms Questions
1. **Reverse a String / Array** (Strings / Two Pointers)
   - *Question*: Write a function that reverses a string. The input string is given as an array of characters.
   - *Resource*: [LeetCode 344 - Reverse String](https://leetcode.com/problems/reverse-string/)
2. **Valid Palindrome** (Strings)
   - *Question*: Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
   - *Resource*: [LeetCode 125 - Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)
3. **Find the Duplicate Number** (Arrays)
   - *Question*: Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive, find the duplicate number.
   - *Resource*: [LeetCode 287 - Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)
4. **Detect Loop in Linked List** (Linked List)
   - *Question*: Given head, the head of a linked list, determine if the linked list has a cycle in it.
   - *Resource*: [LeetCode 141 - Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
5. **Fibonacci Number** (Math / DP)
   - *Question*: Find the Nth Fibonacci Number. Commonly asked in entry-level screening.
   - *Resource*: [LeetCode 509 - Fibonacci Number](https://leetcode.com/problems/fibonacci-number/)


## 2. Core Full-Stack Technologies
As a Full Stack Developer, Wipro expects you to have a deep understanding of both frontend and backend ecosystems.

### Detailed Frontend Questions (React / JavaScript)
1. **Virtual DOM & Reconciliation**
   - *Question*: Explain how React's Virtual DOM works and describe the Diffing algorithm.
   - *Resource*: [React Docs - Reconciliation](https://react.dev/learn/preserving-and-resetting-state)
2. **Event Delegation & Bubbling**
   - *Question*: What is event bubbling and capturing in JavaScript? How does Event Delegation improve performance?
   - *Resource*: [JavaScript.info - Bubbling and capturing](https://javascript.info/bubbling-and-capturing)
3. **Promises and Async/Await**
   - *Question*: Write a function to execute an array of Promises sequentially (one after another).
   - *Resource*: [MDN - Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
4. **Custom Hooks Implementation**
   - *Question*: Write a custom `useDebounce` hook that delays invoking a function until after wait milliseconds have elapsed.
   - *Resource*: [useHooks - useDebounce](https://usehooks.com/usedebounce)


### Detailed Backend Questions (Node.js / Express / DB)
1. **Event Loop in Node.js**
   - *Question*: Explain the phases of the Node.js Event Loop. What is the difference between `process.nextTick()` and `setImmediate()`?
   - *Resource*: [Node.js Docs - Event Loop](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick)
2. **Database Indexing & Optimization**
   - *Question*: How do database indexes work under the hood (B-Trees)? When should you NOT use an index?
   - *Resource*: [GeeksForGeeks - Indexing in Databases](https://www.geeksforgeeks.org/indexing-in-databases-set-1/)
3. **JWT vs Session Authentication**
   - *Question*: Explain the pros and cons of using JSON Web Tokens (JWT) vs stateful Session cookies for authentication in a distributed system.
   - *Resource*: [Auth0 - JWT vs Sessions](https://auth0.com/docs/secure/tokens/json-web-tokens)
4. **API Rate Limiting**
   - *Question*: How would you implement rate limiting for a REST API using Redis?
   - *Resource*: [Redis - Rate Limiting Pattern](https://redis.com/glossary/rate-limiting/)


## 3. Architecture & System Design
System design is crucial, especially for mid-to-senior level roles at Wipro.

### Detailed System Design / Architecture Questions
1. **Monolith vs Microservices**
   - *Question*: Explain the scenarios where a monolithic architecture is preferred over microservices, and vice versa.
   - *Resource*: [Martin Fowler - Microservices](https://martinfowler.com/articles/microservices.html)
2. **Database Schema Design**
   - *Question*: Design a normalized database schema for a Library Management System.
   - *Resource*: [Lucidchart - ER Diagram Tutorial](https://www.lucidchart.com/pages/er-diagrams)
3. **Caching Strategies**
   - *Question*: When would you use Write-Through vs Write-Behind caching?
   - *Resource*: [AWS - Caching Strategies](https://aws.amazon.com/caching/best-practices/)


## 4. Behavioral & Culture
- **STAR Method**: Always answer behavioral questions using Situation, Task, Action, Result.
- **Why Wipro?**: Research Wipro's core values (e.g., Amazon's Leadership Principles, Google's "Googliness", or TCS's client-first approach).
- **Resource**: [How to answer Behavioral Questions](https://www.themuse.com/advice/star-interview-method)

## 5. Latest 2026 Interview Trends
- **Cloud Migration**: Questions frequently revolve around migrating legacy monoliths to AWS/Azure, utilizing containerization (Docker/Kubernetes).
- **Security & DevSecOps**: Expect questions on OWASP Top 10, securing APIs with OAuth2/OIDC, and automated CI/CD pipeline security.
- **Modern JavaScript**: Extensive focus on TypeScript adoption, strict typing, and migrating large codebases from JavaScript to TypeScript.
- **Resource**: [OWASP Top 10 Web Application Security Risks](https://owasp.org/www-project-top-ten/)
