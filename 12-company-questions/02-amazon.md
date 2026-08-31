# Amazon Full-Stack Developer Interview Questions

Welcome to the detailed interview guide for Amazon. This page contains specific, extracted interview questions with direct resource links to help you prepare effectively.

## 1. Coding & Algorithms
Amazon evaluates your problem-solving skills using Data Structures and Algorithms. Below are highly frequent questions asked by Amazon.

### Detailed Data Structures & Algorithms Questions
1. **Two Sum** (Array / Hash Table)
   - *Question*: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
   - *Resource*: [LeetCode 1 - Two Sum](https://leetcode.com/problems/two-sum/)
2. **Number of Islands** (Graph / BFS / DFS)
   - *Question*: Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
   - *Resource*: [LeetCode 200 - Number of Islands](https://leetcode.com/problems/number-of-islands/)
3. **Merge Intervals** (Array / Sorting)
   - *Question*: Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals.
   - *Resource*: [LeetCode 56 - Merge Intervals](https://leetcode.com/problems/merge-intervals/)
4. **Trapping Rain Water** (Array / Two Pointers)
   - *Question*: Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
   - *Resource*: [LeetCode 42 - Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/)
5. **Lowest Common Ancestor of a Binary Tree** (Trees)
   - *Question*: Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
   - *Resource*: [LeetCode 236 - LCA of Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)


## 2. Core Full-Stack Technologies
As a Full Stack Developer, Amazon expects you to have a deep understanding of both frontend and backend ecosystems.

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
System design is crucial, especially for mid-to-senior level roles at Amazon.

### Detailed System Design Questions
1. **Design a URL Shortener (e.g., TinyURL)**
   - *Focus*: Encoding algorithms (Base62), capacity estimation, database sharding, caching.
   - *Resource*: [System Design Primer - TinyURL](https://github.com/donnemartin/system-design-primer)
2. **Design a Highly Scalable Chat Application (e.g., WhatsApp)**
   - *Focus*: WebSockets vs Long Polling, message queues, Cassandra/NoSQL for message storage, presence service.
   - *Resource*: [Grokking the System Design Interview - Chat App](https://www.educative.io/courses/grokking-the-system-design-interview)
3. **Design an E-Commerce Backend (e.g., Amazon)**
   - *Focus*: Distributed transactions, two-phase commit, inventory management, handling high traffic events.


## 4. Behavioral & Culture
- **STAR Method**: Always answer behavioral questions using Situation, Task, Action, Result.
- **Why Amazon?**: Research Amazon's core values (e.g., Amazon's Leadership Principles, Google's "Googliness", or TCS's client-first approach).
- **Resource**: [How to answer Behavioral Questions](https://www.themuse.com/advice/star-interview-method)

## 5. Latest 2026 Interview Trends
- **AI & LLM Integration**: System design questions now frequently ask how to integrate large language models (LLMs), design RAG (Retrieval-Augmented Generation) architectures, or handle high-latency API responses from AI models.
- **Modern Frontend**: Questions heavily favor Next.js (App Router, Server Components), hydration mismatch debugging, and Micro-frontends (Module Federation).
- **Cloud & Serverless**: Emphasis on AWS Lambda cold starts, edge computing (Cloudflare Workers), and distributed caching strategies for global scale.
- **Resource**: [Designing Machine Learning Systems (Chip Huyen)](https://huyenchip.com/machine-learning-systems-design/toc.html)
