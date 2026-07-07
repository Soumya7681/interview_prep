import os

faang_dsa = """
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
"""

service_dsa = """
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
"""

frontend_questions = """
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
"""

backend_questions = """
### Detailed Backend Questions (Node.js / Express / DB)
1. **Event Loop in Node.js**
   - *Question*: Explain the phases of the Node.js Event Loop. What is the difference between `process.nextTick()` and `setImmediate()`?
   - *Resource*: [Node.js Docs - Event Loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
2. **Database Indexing & Optimization**
   - *Question*: How do database indexes work under the hood (B-Trees)? When should you NOT use an index?
   - *Resource*: [GeeksForGeeks - Indexing in Databases](https://www.geeksforgeeks.org/indexing-in-databases-set-1/)
3. **JWT vs Session Authentication**
   - *Question*: Explain the pros and cons of using JSON Web Tokens (JWT) vs stateful Session cookies for authentication in a distributed system.
   - *Resource*: [Auth0 - JWT vs Sessions](https://auth0.com/blog/json-web-token-jwt-vs-session/)
4. **API Rate Limiting**
   - *Question*: How would you implement rate limiting for a REST API using Redis?
   - *Resource*: [Redis - Rate Limiting Pattern](https://redis.com/glossary/rate-limiting/)
"""

system_design_faang = """
### Detailed System Design Questions
1. **Design a URL Shortener (e.g., TinyURL)**
   - *Focus*: Encoding algorithms (Base62), capacity estimation, database sharding, caching.
   - *Resource*: [System Design Primer - TinyURL](https://github.com/donnemartin/system-design-primer)
2. **Design a Highly Scalable Chat Application (e.g., WhatsApp)**
   - *Focus*: WebSockets vs Long Polling, message queues, Cassandra/NoSQL for message storage, presence service.
   - *Resource*: [Grokking the System Design Interview - Chat App](https://www.educative.io/courses/grokking-the-system-design-interview)
3. **Design an E-Commerce Backend (e.g., Amazon)**
   - *Focus*: Distributed transactions, two-phase commit, inventory management, handling high traffic events.
"""

system_design_service = """
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
"""

companies = [
    ("01", "tcs", "TCS", "service"),
    ("02", "amazon", "Amazon", "faang"),
    ("03", "infosys", "Infosys", "service"),
    ("04", "google", "Google", "faang"),
    ("05", "microsoft", "Microsoft", "faang"),
    ("06", "meta", "Meta", "faang"),
    ("07", "wipro", "Wipro", "service"),
    ("08", "accenture", "Accenture", "service"),
    ("09", "cognizant", "Cognizant", "service"),
    ("10", "hcltech", "HCLTech", "service"),
    ("11", "tech-mahindra", "Tech Mahindra", "service"),
    ("12", "capgemini", "Capgemini", "service"),
    ("13", "ibm", "IBM", "service"),
    ("14", "deloitte", "Deloitte", "service"),
    ("15", "oracle", "Oracle", "faang"),
    ("16", "sap", "SAP", "faang"),
    ("17", "adobe", "Adobe", "faang"),
    ("18", "flipkart", "Flipkart", "faang"),
    ("19", "paytm", "Paytm", "faang"),
    ("20", "zoho", "Zoho", "faang"),
    ("21", "swiggy", "Swiggy", "faang"),
    ("22", "phonepe", "PhonePe", "faang"),
    ("23", "other", "Other Companies", "service"),
]

output_dir = "/home/soumayaranjanrout/Desktop/Practice/interview_prep/12-company-questions"

for num, slug, name, c_type in companies:
    filename = f"{num}-{slug}.md"
    filepath = os.path.join(output_dir, filename)
    
    dsa = faang_dsa if c_type == "faang" else service_dsa
    sd = system_design_faang if c_type == "faang" else system_design_service
    
    content = f"""# {name} Full-Stack Developer Interview Questions

Welcome to the detailed interview guide for {name}. This page contains specific, extracted interview questions with direct resource links to help you prepare effectively.

## 1. Coding & Algorithms
{name} evaluates your problem-solving skills using Data Structures and Algorithms. Below are highly frequent questions asked by {name}.
{dsa}

## 2. Core Full-Stack Technologies
As a Full Stack Developer, {name} expects you to have a deep understanding of both frontend and backend ecosystems.
{frontend_questions}
{backend_questions}

## 3. Architecture & System Design
System design is crucial, especially for mid-to-senior level roles at {name}.
{sd}

## 4. Behavioral & Culture
- **STAR Method**: Always answer behavioral questions using Situation, Task, Action, Result.
- **Why {name}?**: Research {name}'s core values (e.g., Amazon's Leadership Principles, Google's "Googliness", or TCS's client-first approach).
- **Resource**: [How to answer Behavioral Questions](https://www.themuse.com/advice/star-interview-method)
"""
    with open(filepath, 'w') as f:
        f.write(content)

print("Detailed files generated.")
