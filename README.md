# 🚀 MERN Interview Question Collection

### Complete JavaScript • React • Node.js Interview Preparation

[![JavaScript](https://img.shields.io/badge/JavaScript-Basic%20→%20Advanced-F7DF1E?logo=javascript&logoColor=black)](#-collection-overview)
[![React](https://img.shields.io/badge/React-Basic%20→%20Advanced-61DAFB?logo=react&logoColor=black)](#-collection-overview)
[![Node.js](https://img.shields.io/badge/Node.js-Basic%20→%20Advanced-339933?logo=node.js&logoColor=white)](#-collection-overview)
[![Interview Prep](https://img.shields.io/badge/Focus-Interview%20Preparation-7C3AED)](#-how-to-use-this-repository)

A structured interview-preparation repository for developers preparing for **JavaScript, React, Node.js, MERN Stack, and Full Stack Developer interviews**. The collection moves from fundamentals to internals, advanced concepts, practical architecture, security, performance, and coding-oriented interview questions.

> **Source fidelity:** The category READMEs retain the supplied interview-question wording and organization. No question has been intentionally removed, merged, renamed, or replaced with an invented question.

---

## 📚 Collection Overview

| Technology | Level | Focus |
|------------|-------|-------|
| JavaScript | Basic → Advanced | Core JS, internals, async, prototypes, coding |
| React | Basic → Advanced | Internals, hooks, rendering, performance, architecture |
| Node.js | Basic → Advanced | Runtime, APIs, async, architecture, security |

### Quick Navigation

- 📘 [JavaScript Interview Questions](./JavaScript/README.md)
- ⚛️ [React Interview Questions](./React/README.md)
- 🟢 [Node.js Interview Questions](./Node.js/README.md)
- 📊 [Complete Excel Workbook](./Excel/MERN_Interview_Question_Collection.xlsx)
- 📕 [PDF Handbook](./PDF/MERN_Interview_Question_Collection.pdf)

> The Excel workbook and PDF handbook links are ready for the repository structure shown above. Add the corresponding files when they are available.
---

## 🧭 What This Collection Covers

### 🟨 JavaScript
The supplied JavaScript collection starts with core language concepts and expands into execution contexts, closures, `this`, prototypes, the event loop, memory management, promises, advanced objects, type coercion, functional JavaScript, and advanced coding questions. fileciteturn1file1L160-L197

Key areas include:

- Variables, hoisting, TDZ, scope and lexical scope
- Closures and function binding
- Prototypes and inheritance
- Event Loop, microtasks and macrotasks
- Memory management and garbage collection
- Promises and async JavaScript
- Property descriptors, Proxy and Reflect
- Type coercion and internal conversion
- Functional JavaScript
- Advanced coding implementations


# JavaScript Interview Question Collection
👉 **[Open the complete JavaScript question bank →](./JavaScript/README.md)**
---

- JavaScript Collection---->>>>
<pre><code>var vs let vs const</code></pre>
- Hoisting
- Temporal Dead Zone
- Scope & Lexical Scope
- Closures
- How does JavaScript execute code?
- this keyword
- call, apply, bind
- Prototype & Prototype Chain
- == vs ===
- Type Coercion
- Pass by values pass by reference 
- NaN
- Shallow vs Deep Copy
- Spread vs Rest
- Destructuring
- Higher-Order Functions
- Callback
- Promise
- async/await
- Event Loop
- Microtask vs Macrotask
- Call Stack
- Debouncing
- Throttling
- Event Bubbling/Capturing
- Event Delegation
- map, filter, reduce
- Map vs Object
- Set
- Currying
- Memoization
- Generator Functions
- Iterators
- Modules
- ES6+ features
- Common JS coding questions
## Execution Context & Engine Internals

- What is an Execution Context?
- What is the difference between Global, Function, and Eval Execution Context?
- What happens when JavaScript code starts executing?
- What is the Creation Phase vs Execution Phase?
- What is the Lexical Environment?
- What is the Variable Environment?
- How does the JavaScript engine manage memory?
- What is the Call Stack?
- What causes Stack Overflow?
## Closures & Scope

- What exactly is a Closure?
- How does Closure work internally?
- Why does Closure preserve variables after a function finishes?
- Practical use cases of Closure?
- Closure vs Scope?
- Can Closure cause a memory leak?
- Explain this:
<pre><code>for (var i = 0; i &lt; 3; i++) {</code></pre>
<pre><code>  setTimeout(() =&gt; console.log(i), 1000);</code></pre>
<pre><code>}</code></pre>
- How would you fix the above using let?
- How would you fix it using Closure?
## this & Function Binding

- How is this determined?
- this in regular function vs arrow function?
- this in object methods?
- this inside nested functions?
- this inside constructors?
- this inside classes?
- How does call() work?
- How does apply() work?
- How does bind() work?
- Difference between call, apply, and bind?
- Can you implement your own bind()?
## Prototype & Inheritance

- What is a Prototype?
- What is the Prototype Chain?
- Difference between __proto__ and prototype?
- How does property lookup work?
- How does JavaScript inheritance work internally?
- Constructor function vs Class?
- What happens internally when we use new?
- Can you implement your own new operator?
- What is Object.create()?
- Object.create() vs new?
- What happens when a property doesn't exist on an object?
## Event Loop — ⭐ Very Important

- What is the Event Loop?
- How does the Call Stack interact with the Event Loop?
- What is the Microtask Queue?
- What is the Macrotask/Task Queue?
- Why does Promise execute before setTimeout?
<pre><code>setTimeout(fn, 0) — does it execute immediately?</code></pre>
- Explain this output:
<pre><code>console.log("A");</code></pre>
<pre><code>setTimeout(() =&gt; console.log("B"), 0);</code></pre>
<pre><code>Promise.resolve().then(() =&gt; console.log("C"));</code></pre>
<pre><code>console.log("D");</code></pre>
- What is Microtask starvation?
- queueMicrotask() vs setTimeout()?
- Browser Event Loop vs Node.js Event Loop?
## Memory Management

- Stack vs Heap?
- How are objects stored in memory?
- What is Garbage Collection?
- What is Mark-and-Sweep?
- What causes Memory Leaks?
- Common causes of memory leaks in JavaScript?
- How can Event Listeners cause memory leaks?
- How can Closures cause memory leaks?
## Promises & Async JavaScript

- What is a Promise internally?
- Promise states?
- What happens internally when .then() is called?
- Promise chaining?
- How does Promise error propagation work?
<pre><code>Promise.all() vs Promise.allSettled()?</code></pre>
<pre><code>Promise.race() vs Promise.any()?</code></pre>
- What happens if one Promise rejects inside Promise.all()?
- Can you implement your own Promise?
- How does async/await work internally?
- Is async/await synchronous or asynchronous?
- What happens when await is encountered?
- How does try/catch work with async functions?
## Advanced Objects

- Property descriptors kya hote hain?
- Object.getOwnPropertyDescriptor(obj, "name");
- What are:
- writable
- enumerable
- configurable
- Object.freeze() vs Object.seal()?
- Object.preventExtensions()?
- How do getters and setters work?
- What is a Proxy?
- What is Reflect?
- Proxy vs Reflect?
- Practical use cases of Proxy?
## Type Coercion & Internal Conversion

- What is Type Coercion?
- Explain:
- [] == false
- Explain:
<pre><code>{} + []</code></pre>
- Why is:
- NaN !== NaN
- Why does:
- typeof null
<pre><code>return "object"?</code></pre>
- What is ToPrimitive?
- What is ToString?
- What is ToNumber?
- What is Symbol.toPrimitive?
## Functional JavaScript

- What is a Higher-Order Function?
- What is Function Composition?
- What is Currying?
- Currying vs Partial Application?
- What is Memoization?
- Implement memoization.
- What is Pure Function?
- What is Referential Transparency?
- What is Immutability?
- Why is functional programming useful in React?
## Advanced Coding Questions ⭐

- Implement debounce().
- Implement throttle().
- Implement Promise.all().
- Implement bind().
- Implement call().
- Implement apply().
- Implement map().
- Implement filter().
- Implement reduce().
- Implement deepClone().
- Implement flattenArray().
- Implement curry().
- Implement memoize().
- Implement once().
- Implement an Event Emitter.
- Implement a simple Promise.
- Implement a custom setInterval() using setTimeout().
<pre><code>////////////////////////////////////////////////////////////////////////////////////</code></pre>




### ⚛️ React
The supplied React collection covers React fundamentals and then goes deep into React internals, rendering, reconciliation, hooks, `useEffect`, Context API, performance, concurrent features, Suspense, Server Components, React 19, forms/state management, architecture, and security. fileciteturn1file0L11-L55

Key areas include:

- JSX, Virtual DOM and Reconciliation
- React Fiber
- State batching and re-rendering
- Hooks and hook internals
- `useEffect` deep dive
- Context API
- Performance optimization
- `useTransition` and `useDeferredValue`
- Suspense and lazy loading
- React Server Components and Next.js
- React 19
- Architecture and security

# React Interview Question Collection
👉 **[Open the complete React question bank →](./React/README.md)**
---

- React Collection--->>>>>>>>>>>>>>>>>>>>>
- What is React?
- JSX
- Virtual DOM
- Reconciliation
- React Fiber
- Components
- Props vs State
- State batching
- Controlled vs Uncontrolled Components
- useState
- useEffect
- useLayoutEffect
- useRef
- useMemo
- useCallback
- useReducer
- Context API
- Prop Drilling
- Custom Hooks
- Component Lifecycle
- Re-rendering
- Keys in React
- React.memo
- Lazy Loading
- Code Splitting
- Suspense
- Error Boundaries
- Forms
- Performance Optimization
- React Server Components
- Server vs Client Components
- React 19
- useTransition
- useDeferredValue
## React Internals ⭐⭐⭐

- React internally kaise work karta hai?
- What is Virtual DOM?
- Virtual DOM actually kya store karta hai?
- What is Reconciliation?
- React reconciliation algorithm kaise decide karta hai ki kya update karna hai?
- What is React Fiber?
- Fiber ki need kyun padi?
- Fiber architecture ne old React architecture ko kaise improve kiya?
- What is a Fiber Node?
- Fiber tree vs DOM tree?
- React ke Render Phase aur Commit Phase kya hain?
- Render phase mein kya hota hai?
- Commit phase mein kya hota hai?
- React DOM ko directly render phase mein update kyun nahi karta?
- What is Concurrent Rendering?
- Concurrent rendering ka matlab multiple renders simultaneously hona hai?
- React rendering ko interrupt kaise karta hai?
- What is Cooperative Scheduling?
## Rendering & Re-rendering ⭐⭐⭐

- React component kab re-render hota hai?
- Parent re-render hone par child automatically re-render kyun hota hai?
- State update hone par React exactly kya karta hai?
- Kya setState() immediately state change karta hai?
- React batching kya hai?
- React 18 automatic batching kya hai?
- Multiple setState() calls kaise process hote hain?
<pre><code>setCount(count + 1);</code></pre>
<pre><code>setCount(count + 1);</code></pre>
<pre><code>setCount(count + 1);</code></pre>
- Iska result kya hoga aur kyun?
<pre><code>setCount(c =&gt; c + 1);</code></pre>
<pre><code>setCount(c =&gt; c + 1);</code></pre>
<pre><code>setCount(c =&gt; c + 1);</code></pre>
- State updates queue mein kaise store hote hain?
- What is stale state?
- What is stale closure?
- React mein stale closure kaise solve karoge?
## 3. Reconciliation & Keys ⭐⭐⭐

- React ko kaise pata chalta hai ki element change hua?
- Same type vs different type element reconciliation?
- React mein key kyun important hai?
- Array index ko key ke roop mein use karna problematic kyun ho sakta hai?
- Explain:
<pre><code>{users.map((user, index) =&gt; (</code></pre>
-   <User key={index} user={user} />
- ))}
- Stable key kya hoti hai?
- Key change hone par component ke saath kya hota hai?
- Can changing a key force component remount?
- React component ko preserve vs reset kaise karta hai?
## Hooks — Advanced ⭐⭐⭐

- Hooks internally kaise work karte hain?
- Rules of Hooks kyun exist karte hain?
- React ko kaise pata chalta hai ki useState() kaun sa state hai?
- Hook order important kyun hai?
- Conditional hook call kyun allowed nahi hai?
<pre><code>if (isLoggedIn) {</code></pre>
-   useEffect(() => {});
<pre><code>}</code></pre>
- useState internally kaise work karta hai?
- useEffect internally kaise work karta hai?
- useEffect render phase mein execute hota hai ya commit phase mein?
- useEffect vs useLayoutEffect?
- useLayoutEffect kab use karna chahiye?
- useInsertionEffect kya hai?
- useRef re-render trigger kyun nahi karta?
- useRef vs useState?
- useMemo internally kya karta hai?
- useCallback internally kya karta hai?
- useMemo aur useCallback ko unnecessarily use karna bad practice kyun ho sakta hai?
- Custom Hook kya hota hai?
- Custom Hook vs utility function?
## useEffect Deep Dive ⭐⭐⭐

- useEffect ka actual purpose kya hai?
- Empty dependency array ka meaning?
- useEffect(() => {
<pre><code>  // ...</code></pre>
<pre><code>}, []);</code></pre>
- Dependency array React kaise compare karta hai?
- Dependencies compare karne ke liye === use hota hai?
- Objects/functions dependencies mein problem kyun create karte hain?
- Cleanup function kab execute hota hai?
- Component unmount hone par cleanup kab run hota hai?
- Next effect run hone se pehle cleanup kyun run hota hai?
- Infinite loop in useEffect kaise hota hai?
- Strict Mode mein effect twice kyun appear hota hai?
- Kya React production mein bhi effect exactly twice run karta hai?
- Data fetching ke liye useEffect always best solution hai?
## Context API ⭐⭐

- Context API internally kaise work karta hai?
- Context use karne se prop drilling kaise solve hoti hai?
- Context change hone par kaunse components re-render hote hain?
- Context performance issue kaise create kar sakta hai?
- Context vs Redux?
- Context ko state management library kyun nahi maana jaata?
- Context performance optimize kaise karoge?
- Multiple contexts kaise design karoge?
## React Performance ⭐⭐⭐

- React application slow kyun ho sakti hai?
- Unnecessary re-render kya hota hai?
- Unnecessary re-render identify kaise karoge?
- React.memo() kya karta hai?
- React.memo() internally kaise work karta hai?
- React.memo() kab useless hai?
- useMemo() kab use karna chahiye?
- useCallback() kab use karna chahiye?
- React.memo + useCallback combination kab useful hai?
- Large list ko optimize kaise karoge?
- What is List Virtualization?
- Lazy loading kya hai?
- Code splitting kya hai?
- Bundle size kaise reduce karoge?
- React Profiler kya hai?
- Production React app ko optimize karne ke steps kya hain?
## useTransition & Concurrent Features ⭐⭐⭐

- What is useTransition()?
- Urgent vs non-urgent updates kya hain?
- Explain:
<pre><code>const [isPending, startTransition] = useTransition();</code></pre>
<pre><code>startTransition() kab use karoge?</code></pre>
- Transition update ko React lower priority kyun deta hai?
- useDeferredValue() kya hai?
- useTransition vs useDeferredValue?
- Kya startTransition() API request ko faster bana deta hai?
- Concurrent rendering aur async JavaScript mein kya difference hai?
## Suspense & Lazy Loading ⭐⭐⭐

- React Suspense kya hai?
- Suspense internally kaise work karta hai?
- React.lazy() kya karta hai?
- Suspense + lazy loading kaise work karte hain?
<pre><code>&lt;Suspense fallback={&lt;Loading /&gt;}&gt;</code></pre>
-   <Profile />
<pre><code>&lt;/Suspense&gt;</code></pre>
- Suspense sirf code splitting ke liye hai?
- Suspense aur loading state mein difference?
- Nested Suspense boundaries kyun useful hain?
- Error Boundary vs Suspense?
## Server Components & Next.js ⭐⭐⭐

- What are React Server Components?
- Server Component vs Client Component?
- Server Component browser mein execute hota hai?
- Client Component kab use karna chahiye?
- "use client" kya karta hai?
- "use client" ka matlab component client par hi render hoga?
- Server Components mein state kyun nahi use kar sakte?
- Server Components mein event handlers kyun nahi use kar sakte?
- Server Component aur API route mein difference?
- React Server Components ka benefit kya hai?
- RSC bundle size kaise reduce karta hai?
- Server Components mein database query directly kyun possible hai?
- Next.js App Router React Server Components ka use kaise karta hai?
## React 19 ⭐⭐⭐

- React 19 mein major changes kya hain?
- What is use()?
- use() hook/function kaise work karta hai?
- use() vs useEffect()?
- What are Actions in React?
- What is useActionState()?
- What is useFormStatus()?
- What is useOptimistic()?
- Optimistic UI kya hoti hai?
- React 19 mein form handling kaise improve hui?
- React 19 mein refs mein kya change hua?
## Forms & State Management

- Controlled vs uncontrolled component?
- Large form ko efficiently kaise manage karoge?
- useReducer kab use karna chahiye?
- useState vs useReducer?
- Redux ki need kab padti hai?
- Local state vs global state?
- Server state vs client state?
- React Query/TanStack Query ka purpose kya hai?
- Server state ko Redux mein store karna problematic kyun ho sakta hai?
## Advanced Architecture ⭐⭐⭐

- Container vs Presentational Components?
- Compound Components pattern kya hai?
- Render Props pattern?
- Higher-Order Component kya hai?
- HOC vs Custom Hook?
- Composition vs Inheritance?
- React mein composition preferred kyun hai?
- Compound component pattern implement karo.
- Feature-based folder architecture kya hai?
- Large React application ko scalable kaise design karoge?
## React Security

- React mein XSS kaise prevent hota hai?
- dangerouslySetInnerHTML dangerous kyun hai?
- User-generated HTML safely render kaise karoge?
- JWT ko React application mein kaha store karna chahiye?
- CSRF vs XSS?
- React frontend mein sensitive API keys kyun nahi rakhni chahiye?




### 🟢 Node.js
The supplied Node.js collection covers the runtime, V8, modules, npm, HTTP, EventEmitter, asynchronous programming, Event Loop, Express.js, REST APIs, authentication, error handling, streams, buffers, filesystem APIs, architecture, worker threads, databases, Redis, security, production/system design, and Node.js internals. fileciteturn1file3L449-L559 fileciteturn1file2L335-L364

Key areas include:

- Node.js runtime and V8
- CommonJS and ES Modules
- npm and package management
- Native HTTP module
- EventEmitter and event-driven architecture
- Async programming and Event Loop
- Express.js and REST APIs
- Authentication and authorization
- Error handling
- Streams and buffers
- Libuv, thread pool and architecture
- Worker Threads and clustering
- MongoDB/Mongoose and Redis
- Security and production system design
- Node.js internals and debugging


# Node.js Interview Question Collection
👉 **[Open the complete Node.js question bank →](./Node.js/README.md)**
---

- Node.js Basics
## Fundamentals

- What is Node.js?
- Node.js runtime kya hai?
- Node.js aur JavaScript mein kya difference hai?
- Node.js browser ke bahar JavaScript kaise run karta hai?
- Node.js single-threaded kyun kaha jata hai?
- Node.js ke main features kya hain?
- Node.js ke advantages aur disadvantages?
- Node.js kis type ke applications ke liye suitable hai?
- Node.js CPU-intensive tasks ke liye suitable kyun nahi hai?
- Node.js ka architecture kya hai?
## V8 Engine

- V8 engine kya hai?
- V8 JavaScript ko kaise execute karta hai?
- JIT compilation kya hai?
- V8 mein JavaScript code ka execution flow kya hai?
- V8 memory kaise manage karta hai?
## Node.js Modules

- Module kya hota hai?
- CommonJS kya hai?
- ES Modules kya hain?
- CommonJS vs ES Modules?
- require() kaise work karta hai?
- module.exports kya hai?
- exports vs module.exports?
- Node.js module caching kya hai?
- Circular dependency kya hoti hai?
- Built-in modules kya hote hain?
- Important modules:
- fs
- path
- http
- url
- events
- os
- crypto
- stream
- util
- buffer
## npm & package.json

- npm kya hai?
- package.json kya hota hai?
- package-lock.json kyun hota hai?
- Dependencies vs devDependencies?
- npm install internally kya karta hai?
- npm install package vs npm install -D package?
- npm ci kya hai?
- Semantic Versioning kya hai?
- MAJOR.MINOR.PATCH
- ^ aur ~ ka difference?
- npm scripts kya hain?
- npx kya hai?
## HTTP Module

- Ye Node.js interview ka extremely important section hai.
- HTTP kya hai?
- HTTP request kya hoti hai?
- HTTP response kya hota hai?
- Node.js ka native HTTP server kaise create karoge?
<pre><code>const http = require("http");</code></pre>
<pre><code>const server = http.createServer((req, res) =&gt; {</code></pre>
-   res.end("Hello");
<pre><code>});</code></pre>
<pre><code>server.listen(3000);</code></pre>
- req aur res kya hain?
- req.method kya deta hai?
- req.url kya deta hai?
- HTTP headers kya hote hain?
- Status codes kya hote hain?
- GET vs POST?
- PUT vs PATCH?
- DELETE request?
- Request body kaise read karte hain?
- HTTP server internally kaise work karta hai?
## EventEmitter

- EventEmitter kya hai?
- Node.js EventEmitter ka use kyun karta hai?
- .on() kya karta hai?
- .emit() kya karta hai?
- .once() kya karta hai?
- .off() / removeListener() kya karta hai?
- Custom EventEmitter kaise create karoge?
- Event-driven architecture kya hai?
<pre><code>const EventEmitter = require("events");</code></pre>
<pre><code>const emitter = new EventEmitter();</code></pre>
<pre><code>emitter.on("login", (user) =&gt; {</code></pre>
<pre><code>  console.log(`${user} logged in`);</code></pre>
<pre><code>});</code></pre>
<pre><code>emitter.emit("login", "Priti");</code></pre>
## Asynchronous Node.js

- Synchronous vs asynchronous code?
- Blocking vs non-blocking code?
- Node.js non-blocking kaise hai?
- Callback kya hai?
- Callback hell kya hai?
- Promise kya hai?
- async/await?
- Error handling with async/await?
- Node.js asynchronous operations ko kaise manage karta hai?
## Event Loop

- Event Loop kya hai?
- Node.js single-threaded hote hue multiple requests kaise handle karta hai?
- Call Stack kya hai?
- Callback Queue kya hai?
- Microtask Queue kya hai?
- process.nextTick() kya hai?
- setImmediate() kya hai?
<pre><code>setTimeout() vs setImmediate()?</code></pre>
- process.nextTick() vs Promise?
- Event Loop phases kya hain?
- Timers phase?
- Poll phase?
- Check phase?
- Close callbacks phase?
- Node.js Event Loop browser Event Loop se kaise different hai?
## Express.js

- Express.js kya hai?
- Node HTTP module ke comparison mein Express kyun use karte hain?
- Express application kaise create karte hain?
- Middleware kya hota hai?
- Middleware ka execution order?
- next() kya karta hai?
- Application-level middleware?
- Router-level middleware?
- Error-handling middleware?
- Built-in middleware?
- Custom middleware kaise create karoge?
- Route parameters?
- Query parameters?
- Request body?
- express.json() kya karta hai?
- express.urlencoded() kya karta hai?
- Router kya hota hai?
- Controller kya hota hai?
## REST API

- REST API kya hai?
- REST ke principles?
- RESTful API kya hoti hai?
- REST vs SOAP?
- Resource kya hota hai?
- HTTP methods ka correct use?
- Status codes kaise select karoge?
- Pagination kaise implement karoge?
- Filtering?
- Sorting?
- Searching?
- API versioning?
- Rate limiting?
- API validation?
- Centralized error handling?
## Authentication & Authorization

- Authentication vs Authorization?
- JWT kya hai?
- JWT internally kaise work karta hai?
- Access token vs Refresh token?
- JWT ko kaha store karna chahiye?
- HTTP-only cookie kya hai?
- JWT middleware kaise create karoge?
- Role-based authorization?
- Permission-based authorization?
- Password hashing kya hai?
- bcrypt kaise work karta hai?
- Salt kya hota hai?
- Password ko plain text mein store kyun nahi karna chahiye?
## Error Handling

- Node.js mein errors ke types?
- Operational vs programmer errors?
- try/catch async code mein kaise work karta hai?
- Express error middleware?
- Global error handler?
- Unhandled Promise rejection kya hai?
- uncaughtException kya hai?
- Process crash hone par kya karna chahiye?
- Graceful shutdown kya hai?
## treams

- Advanced Node.js ke liye very important.
- Stream kya hai?
- Streams ki need kyun hoti hai?
- Readable Stream?
- Writable Stream?
- Duplex Stream?
- Transform Stream?
- Buffer kya hai?
- Stream vs Buffer?
- Backpressure kya hai?
- pipe() kya karta hai?
- Large file ko efficiently kaise process karoge?
<pre><code>const fs = require("fs");</code></pre>
<pre><code>const readStream = fs.createReadStream("large-file.txt");</code></pre>
<pre><code>readStream.on("data", (chunk) =&gt; {</code></pre>
<pre><code>  console.log(chunk);</code></pre>
<pre><code>});</code></pre>
## Buffer

- Buffer kya hai?
- Node.js mein Buffer ki need kyun hai?
- Buffer vs String?
- Binary data kaise handle hota hai?
- Buffer create kaise karte hain?
- Buffer.from("Hello");
- Buffer encoding kya hai?
- Base64 kya hai?
## File System

- fs.readFile() vs fs.readFileSync()?
- fs.writeFile()?
- appendFile()?
- unlink()?
- mkdir()?
- createReadStream()?
- createWriteStream()?
- Async filesystem APIs preferred kyun hain?
- Large files kaise handle karoge?
## Node.js Architecture

- Node.js architecture explain karo.
- Client
-    ↓
- Node.js
-    ↓
## Event Loop

-    ↓
- ┌─────────────────┐
- │      Libuv      │
- └─────────────────┘
-    ↓
- OS / Thread Pool
- Libuv kya hai?
- Node.js aur Libuv ka relationship?
- Thread Pool kya hai?
- Node.js mein default Thread Pool size kya hai?
- Kaunse operations Thread Pool use karte hain?
- Event Loop aur Thread Pool mein difference?
- UV_THREADPOOL_SIZE kya hai?
## Worker Threads & Clustering

- Worker Threads kya hain?
- Worker Thread kab use karna chahiye?
- CPU-intensive task ko Node.js mein kaise handle karoge?
- Worker Threads vs Child Process?
- Cluster module kya hai?
- Node.js clustering kyun use karte hain?
- Cluster vs Worker Threads?
- Multiple CPU cores kaise utilize karoge?
## Database & Node.js

- Node.js MongoDB ke saath kaise communicate karta hai?
- Mongoose kya hai?
- Mongoose schema kya hai?
- Model kya hai?
- populate() kya karta hai?
- MongoDB indexing kya hai?
- Connection pooling kya hai?
- Database connection pool kyun important hai?
- Transaction kya hai?
- N+1 query problem kya hai?
## Caching & Redis

- Caching kya hai?
- Redis kya hai?
- Node.js mein Redis kyun use karte hain?
- Cache-aside pattern?
- Cache invalidation kya hai?
- TTL kya hai?
- Redis vs MongoDB?
- Session storage using Redis?
- Distributed caching kya hai?
## Security

- CORS kya hai?
- CORS error kyun aata hai?
- Helmet kya hai?
- Rate limiting kya hai?
- Brute-force attack?
- SQL Injection?
- NoSQL Injection?
- XSS?
- CSRF?
- HTTP vs HTTPS?
- TLS ka basic working?
- Secrets/environment variables safely kaise manage karoge?
- API security ke best practices?
## Production & System Design

- Node.js application ko production mein kaise deploy karoge?
- PM2 kya hai?
- Reverse Proxy kya hai?
- Nginx + Node.js ka architecture?
- Load Balancer kya hai?
- Horizontal scaling?
- Vertical scaling?
- Node.js application ko horizontally scale kaise karoge?
- Stateless API kya hoti hai?
- Logging kaise implement karoge?
- Monitoring kya hai?
- Health check endpoint kya hota hai?
- Graceful shutdown kaise implement karoge?
- Zero-downtime deployment kya hai?
- Environment-based configuration?
- Docker ke saath Node.js kaise deploy karoge?
## Node.js Internals ⭐⭐⭐

- Node.js process kya hai?
- process object kya hai?
- process.env?
- process.argv?
- process.exit()?
- Signals kya hote hain?
- SIGTERM vs SIGKILL?
- Child Process kya hai?
- spawn() vs exec() vs fork()?
- IPC kya hai?
- Node.js memory heap kya hai?
- V8 garbage collection?
- Memory leak detect kaise karoge?
- Node.js application mein CPU spike debug kaise karoge?
- Node.js application mein memory leak debug kaise karoge?
- ===================================================================================



---

## 🎯 How to Use This Repository

### 1. Learn → Don't Just Memorize

For every question, try to answer in this order:

```text
Definition
   ↓
Why does it exist?
   ↓
How does it work internally?
   ↓
Example
   ↓
Common mistake / edge case
   ↓
Interview-ready explanation
```

### 2. Use the ⭐ Sections for Deep Preparation

Sections marked with ⭐ / ⭐⭐ / ⭐⭐⭐ contain deeper interview-oriented topics in the supplied collection.

### 3. Practice Coding Questions Separately

For implementation questions, use this loop:

```text
Understand the problem
        ↓
Explain the approach
        ↓
Write the code
        ↓
Dry run with an example
        ↓
Check edge cases
        ↓
Explain time & space complexity
```

---

## 🧠 Interview Answer Framework

When an interviewer asks a conceptual question, use:

> **What → Why → How → Example → Trade-off**

Example structure:

```text
What is it?
Why is it needed?
How does it work?
Can I show a small example?
What are the common pitfalls?
When would I use it?
```

This keeps answers concise while still demonstrating strong engineering understanding.

---

## 🏆 Recommended Preparation Order

```text
JavaScript Fundamentals
        ↓
JavaScript Internals
        ↓
Async JavaScript + Event Loop
        ↓
React Fundamentals
        ↓
React Internals + Hooks
        ↓
React Performance + Architecture
        ↓
Node.js Fundamentals
        ↓
Node.js Event Loop + Internals
        ↓
Express + REST APIs
        ↓
Authentication + Security
        ↓
Database + Redis
        ↓
Production + System Design
        ↓
Mock Interviews
```

---

## 📝 Interview Readiness Checklist

- [ ] I can explain JavaScript execution clearly.
- [ ] I understand closures, prototypes, `this`, and the event loop.
- [ ] I can explain Promise and async/await internals.
- [ ] I understand React rendering, reconciliation, and Fiber.
- [ ] I can explain Hooks and `useEffect` internally.
- [ ] I can discuss React performance and architecture.
- [ ] I understand Node.js runtime, V8, Libuv, and the Event Loop.
- [ ] I can design REST APIs with Express.js.
- [ ] I can explain authentication, authorization, JWT, and security.
- [ ] I understand streams, buffers, caching, and scaling.
- [ ] I can discuss production deployment and system-design trade-offs.
- [ ] I can solve implementation/coding questions without memorizing solutions.

---

## 💡 Interview Tip

Don't stop at:

> “I know how to use it.”

Aim for:

> “I understand **why it exists, how it works internally, and when I should use it**.”

That distinction is especially important for senior-level JavaScript, React, and Node.js interviews.

---

## 🤝 Contribution

If you add new interview material:

1. Keep the existing category organization.
2. Preserve the original question wording where applicable.
3. Avoid duplicate questions.
4. Add practical examples or implementation notes separately.
5. Keep Markdown formatting consistent.
6. Update the relevant category README.

---

## ⭐ Goal

Build strong fundamentals, understand internals, practice implementation, and become confident enough to **explain—not just memorize—MERN interview concepts**.

---

### 📌 Source Coverage

The repository structure above is based on the supplied interview-question collection, including its JavaScript, React, and Node.js sections. The supplied source contains the JavaScript collection beginning with core language topics, the React collection, and the Node.js collection with advanced runtime/system topics. fileciteturn1file1L160-L207 fileciteturn1file0L24-L55 fileciteturn1file6L920-L980
