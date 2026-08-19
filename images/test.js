/** @format */


JavaScript Collection---->>>>
var vs let vs const
Hoisting
Temporal Dead Zone
Scope & Lexical Scope
Closures
How does JavaScript execute code?
this keyword
call, apply, bind
Prototype & Prototype Chain
== vs ===
Type Coercion
Pass by values pass by reference 
NaN
Shallow vs Deep Copy
Spread vs Rest
Destructuring
Higher-Order Functions
Callback
Promise
async/await
Event Loop
Microtask vs Macrotask
Call Stack
Debouncing
Throttling
Event Bubbling/Capturing
Event Delegation
map, filter, reduce
Map vs Object
Set
Currying
Memoization
Generator Functions
Iterators
Modules
ES6+ features
Common JS coding questions
Execution Context & Engine Internals
What is an Execution Context?
What is the difference between Global, Function, and Eval Execution Context?
What happens when JavaScript code starts executing?
What is the Creation Phase vs Execution Phase?
What is the Lexical Environment?
What is the Variable Environment?
How does the JavaScript engine manage memory?
What is the Call Stack?
What causes Stack Overflow?
Closures & Scope
What exactly is a Closure?
How does Closure work internally?
Why does Closure preserve variables after a function finishes?
Practical use cases of Closure?
Closure vs Scope?
Can Closure cause a memory leak?
Explain this:
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
How would you fix the above using let?
How would you fix it using Closure?
this & Function Binding
How is this determined?
this in regular function vs arrow function?
this in object methods?
this inside nested functions?
this inside constructors?
this inside classes?
How does call() work?
How does apply() work?
How does bind() work?
Difference between call, apply, and bind?
Can you implement your own bind()?
Prototype & Inheritance
What is a Prototype?
What is the Prototype Chain?
Difference between __proto__ and prototype?
How does property lookup work?
How does JavaScript inheritance work internally?
Constructor function vs Class?
What happens internally when we use new?
Can you implement your own new operator?
What is Object.create()?
Object.create() vs new?
What happens when a property doesn't exist on an object?
Event Loop — ⭐ Very Important
What is the Event Loop?
How does the Call Stack interact with the Event Loop?
What is the Microtask Queue?
What is the Macrotask/Task Queue?
Why does Promise execute before setTimeout?
setTimeout(fn, 0) — does it execute immediately?
Explain this output:
console.log("A");


setTimeout(() => console.log("B"), 0);


Promise.resolve().then(() => console.log("C"));


console.log("D");
What is Microtask starvation?
queueMicrotask() vs setTimeout()?
Browser Event Loop vs Node.js Event Loop?

Memory Management
Stack vs Heap?
How are objects stored in memory?
What is Garbage Collection?
What is Mark-and-Sweep?
What causes Memory Leaks?
Common causes of memory leaks in JavaScript?
How can Event Listeners cause memory leaks?
How can Closures cause memory leaks?

Promises & Async JavaScript
What is a Promise internally?
Promise states?
What happens internally when .then() is called?
Promise chaining?
How does Promise error propagation work?
Promise.all() vs Promise.allSettled()?
Promise.race() vs Promise.any()?
What happens if one Promise rejects inside Promise.all()?
Can you implement your own Promise?
How does async/await work internally?
Is async/await synchronous or asynchronous?
What happens when await is encountered?
How does try/catch work with async functions?

Advanced Objects
Property descriptors kya hote hain?
Object.getOwnPropertyDescriptor(obj, "name");
What are:
writable
enumerable
configurable
Object.freeze() vs Object.seal()?
Object.preventExtensions()?
How do getters and setters work?
What is a Proxy?
What is Reflect?
Proxy vs Reflect?
Practical use cases of Proxy?


Type Coercion & Internal Conversion
What is Type Coercion?
Explain:
[] == false
Explain:
{} + []
Why is:
NaN !== NaN
Why does:
typeof null

return "object"?

What is ToPrimitive?
What is ToString?
What is ToNumber?
What is Symbol.toPrimitive?


Functional JavaScript
What is a Higher-Order Function?
What is Function Composition?
What is Currying?
Currying vs Partial Application?
What is Memoization?
Implement memoization.
What is Pure Function?
What is Referential Transparency?
What is Immutability?
Why is functional programming useful in React?
Advanced Coding Questions ⭐
Implement debounce().
Implement throttle().
Implement Promise.all().
Implement bind().
Implement call().
Implement apply().
Implement map().
Implement filter().
Implement reduce().
Implement deepClone().
Implement flattenArray().
Implement curry().
Implement memoize().
Implement once().
Implement an Event Emitter.
Implement a simple Promise.
Implement a custom setInterval() using setTimeout().

////////////////////////////////////////////////////////////////////////////////////


React Collection--->>>>>>>>>>>>>>>>>>>>>
What is React?
JSX
Virtual DOM
Reconciliation
React Fiber
Components
Props vs State
State batching
Controlled vs Uncontrolled Components
useState
useEffect
useLayoutEffect
useRef
useMemo
useCallback
useReducer
Context API
Prop Drilling
Custom Hooks
Component Lifecycle
Re-rendering
Keys in React
React.memo
Lazy Loading
Code Splitting
Suspense
Error Boundaries
Forms
Performance Optimization
React Server Components
Server vs Client Components
React 19
useTransition
useDeferredValue


React Internals ⭐⭐⭐
React internally kaise work karta hai?
What is Virtual DOM?
Virtual DOM actually kya store karta hai?
What is Reconciliation?
React reconciliation algorithm kaise decide karta hai ki kya update karna hai?
What is React Fiber?
Fiber ki need kyun padi?
Fiber architecture ne old React architecture ko kaise improve kiya?
What is a Fiber Node?
Fiber tree vs DOM tree?
React ke Render Phase aur Commit Phase kya hain?
Render phase mein kya hota hai?
Commit phase mein kya hota hai?
React DOM ko directly render phase mein update kyun nahi karta?
What is Concurrent Rendering?
Concurrent rendering ka matlab multiple renders simultaneously hona hai?
React rendering ko interrupt kaise karta hai?
What is Cooperative Scheduling?

Rendering & Re-rendering ⭐⭐⭐
React component kab re-render hota hai?
Parent re-render hone par child automatically re-render kyun hota hai?
State update hone par React exactly kya karta hai?
Kya setState() immediately state change karta hai?
React batching kya hai?
React 18 automatic batching kya hai?
Multiple setState() calls kaise process hote hain?
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
Iska result kya hoga aur kyun?
setCount(c => c + 1);
setCount(c => c + 1);
setCount(c => c + 1);
State updates queue mein kaise store hote hain?
What is stale state?
What is stale closure?
React mein stale closure kaise solve karoge?
3. Reconciliation & Keys ⭐⭐⭐
React ko kaise pata chalta hai ki element change hua?
Same type vs different type element reconciliation?
React mein key kyun important hai?
Array index ko key ke roop mein use karna problematic kyun ho sakta hai?
Explain:
{users.map((user, index) => (
  <User key={index} user={user} />
))}

Stable key kya hoti hai?
Key change hone par component ke saath kya hota hai?
Can changing a key force component remount?
React component ko preserve vs reset kaise karta hai?

Hooks — Advanced ⭐⭐⭐
Hooks internally kaise work karte hain?
Rules of Hooks kyun exist karte hain?
React ko kaise pata chalta hai ki useState() kaun sa state hai?
Hook order important kyun hai?
Conditional hook call kyun allowed nahi hai?
if (isLoggedIn) {
  useEffect(() => {});
}
useState internally kaise work karta hai?
useEffect internally kaise work karta hai?
useEffect render phase mein execute hota hai ya commit phase mein?
useEffect vs useLayoutEffect?
useLayoutEffect kab use karna chahiye?
useInsertionEffect kya hai?
useRef re-render trigger kyun nahi karta?
useRef vs useState?
useMemo internally kya karta hai?
useCallback internally kya karta hai?
useMemo aur useCallback ko unnecessarily use karna bad practice kyun ho sakta hai?
Custom Hook kya hota hai?
Custom Hook vs utility function?

useEffect Deep Dive ⭐⭐⭐
useEffect ka actual purpose kya hai?
Empty dependency array ka meaning?
useEffect(() => {
  // ...
}, []);
Dependency array React kaise compare karta hai?
Dependencies compare karne ke liye === use hota hai?
Objects/functions dependencies mein problem kyun create karte hain?
Cleanup function kab execute hota hai?
Component unmount hone par cleanup kab run hota hai?
Next effect run hone se pehle cleanup kyun run hota hai?
Infinite loop in useEffect kaise hota hai?
Strict Mode mein effect twice kyun appear hota hai?
Kya React production mein bhi effect exactly twice run karta hai?
Data fetching ke liye useEffect always best solution hai?

Context API ⭐⭐
Context API internally kaise work karta hai?
Context use karne se prop drilling kaise solve hoti hai?
Context change hone par kaunse components re-render hote hain?
Context performance issue kaise create kar sakta hai?
Context vs Redux?
Context ko state management library kyun nahi maana jaata?
Context performance optimize kaise karoge?
Multiple contexts kaise design karoge?

React Performance ⭐⭐⭐
React application slow kyun ho sakti hai?
Unnecessary re-render kya hota hai?
Unnecessary re-render identify kaise karoge?
React.memo() kya karta hai?
React.memo() internally kaise work karta hai?
React.memo() kab useless hai?
useMemo() kab use karna chahiye?
useCallback() kab use karna chahiye?
React.memo + useCallback combination kab useful hai?
Large list ko optimize kaise karoge?
What is List Virtualization?
Lazy loading kya hai?
Code splitting kya hai?
Bundle size kaise reduce karoge?
React Profiler kya hai?
Production React app ko optimize karne ke steps kya hain?

useTransition & Concurrent Features ⭐⭐⭐
What is useTransition()?
Urgent vs non-urgent updates kya hain?
Explain:
const [isPending, startTransition] = useTransition();
startTransition() kab use karoge?
Transition update ko React lower priority kyun deta hai?
useDeferredValue() kya hai?
useTransition vs useDeferredValue?
Kya startTransition() API request ko faster bana deta hai?
Concurrent rendering aur async JavaScript mein kya difference hai?

Suspense & Lazy Loading ⭐⭐⭐
React Suspense kya hai?
Suspense internally kaise work karta hai?
React.lazy() kya karta hai?
Suspense + lazy loading kaise work karte hain?
<Suspense fallback={<Loading />}>
  <Profile />
</Suspense>
Suspense sirf code splitting ke liye hai?
Suspense aur loading state mein difference?
Nested Suspense boundaries kyun useful hain?
Error Boundary vs Suspense?

Server Components & Next.js ⭐⭐⭐
What are React Server Components?
Server Component vs Client Component?
Server Component browser mein execute hota hai?
Client Component kab use karna chahiye?
"use client" kya karta hai?
"use client" ka matlab component client par hi render hoga?
Server Components mein state kyun nahi use kar sakte?
Server Components mein event handlers kyun nahi use kar sakte?
Server Component aur API route mein difference?
React Server Components ka benefit kya hai?
RSC bundle size kaise reduce karta hai?
Server Components mein database query directly kyun possible hai?
Next.js App Router React Server Components ka use kaise karta hai?

React 19 ⭐⭐⭐
React 19 mein major changes kya hain?
What is use()?
use() hook/function kaise work karta hai?
use() vs useEffect()?
What are Actions in React?
What is useActionState()?
What is useFormStatus()?
What is useOptimistic()?
Optimistic UI kya hoti hai?
React 19 mein form handling kaise improve hui?
React 19 mein refs mein kya change hua?

Forms & State Management
Controlled vs uncontrolled component?
Large form ko efficiently kaise manage karoge?
useReducer kab use karna chahiye?
useState vs useReducer?
Redux ki need kab padti hai?
Local state vs global state?
Server state vs client state?
React Query/TanStack Query ka purpose kya hai?
Server state ko Redux mein store karna problematic kyun ho sakta hai?

Advanced Architecture ⭐⭐⭐
Container vs Presentational Components?
Compound Components pattern kya hai?
Render Props pattern?
Higher-Order Component kya hai?
HOC vs Custom Hook?
Composition vs Inheritance?
React mein composition preferred kyun hai?
Compound component pattern implement karo.
Feature-based folder architecture kya hai?
Large React application ko scalable kaise design karoge?



React Security
React mein XSS kaise prevent hota hai?
dangerouslySetInnerHTML dangerous kyun hai?
User-generated HTML safely render kaise karoge?
JWT ko React application mein kaha store karna chahiye?
CSRF vs XSS?
React frontend mein sensitive API keys kyun nahi rakhni chahiye?











Node.js Basics
Fundamentals
What is Node.js?
Node.js runtime kya hai?
Node.js aur JavaScript mein kya difference hai?
Node.js browser ke bahar JavaScript kaise run karta hai?
Node.js single-threaded kyun kaha jata hai?
Node.js ke main features kya hain?
Node.js ke advantages aur disadvantages?
Node.js kis type ke applications ke liye suitable hai?
Node.js CPU-intensive tasks ke liye suitable kyun nahi hai?
Node.js ka architecture kya hai?

V8 Engine
V8 engine kya hai?
V8 JavaScript ko kaise execute karta hai?
JIT compilation kya hai?
V8 mein JavaScript code ka execution flow kya hai?
V8 memory kaise manage karta hai?



Node.js Modules
Module kya hota hai?
CommonJS kya hai?
ES Modules kya hain?
CommonJS vs ES Modules?
require() kaise work karta hai?
module.exports kya hai?
exports vs module.exports?
Node.js module caching kya hai?
Circular dependency kya hoti hai?
Built-in modules kya hote hain?
Important modules:

fs
path
http
url
events
os
crypto
stream
util
buffer

npm & package.json
npm kya hai?
package.json kya hota hai?
package-lock.json kyun hota hai?
Dependencies vs devDependencies?
npm install internally kya karta hai?
npm install package vs npm install -D package?
npm ci kya hai?
Semantic Versioning kya hai?
MAJOR.MINOR.PATCH
^ aur ~ ka difference?
npm scripts kya hain?
npx kya hai?

HTTP Module

Ye Node.js interview ka extremely important section hai.

HTTP kya hai?
HTTP request kya hoti hai?
HTTP response kya hota hai?
Node.js ka native HTTP server kaise create karoge?
const http = require("http");


const server = http.createServer((req, res) => {
  res.end("Hello");
});


server.listen(3000);
req aur res kya hain?
req.method kya deta hai?
req.url kya deta hai?
HTTP headers kya hote hain?
Status codes kya hote hain?
GET vs POST?
PUT vs PATCH?
DELETE request?
Request body kaise read karte hain?
HTTP server internally kaise work karta hai?

EventEmitter
EventEmitter kya hai?
Node.js EventEmitter ka use kyun karta hai?
.on() kya karta hai?
.emit() kya karta hai?
.once() kya karta hai?
.off() / removeListener() kya karta hai?
Custom EventEmitter kaise create karoge?
Event-driven architecture kya hai?

const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("login", (user) => {
  console.log(`${user} logged in`);
});

emitter.emit("login", "Priti");

Asynchronous Node.js
Synchronous vs asynchronous code?
Blocking vs non-blocking code?
Node.js non-blocking kaise hai?
Callback kya hai?
Callback hell kya hai?
Promise kya hai?
async/await?
Error handling with async/await?
Node.js asynchronous operations ko kaise manage karta hai?

Event Loop

Event Loop kya hai?
Node.js single-threaded hote hue multiple requests kaise handle karta hai?
Call Stack kya hai?
Callback Queue kya hai?
Microtask Queue kya hai?
process.nextTick() kya hai?
setImmediate() kya hai?
setTimeout() vs setImmediate()?
process.nextTick() vs Promise?
Event Loop phases kya hain?
Timers phase?
Poll phase?
Check phase?
Close callbacks phase?
Node.js Event Loop browser Event Loop se kaise different hai?

Express.js
Express.js kya hai?
Node HTTP module ke comparison mein Express kyun use karte hain?
Express application kaise create karte hain?
Middleware kya hota hai?
Middleware ka execution order?
next() kya karta hai?
Application-level middleware?
Router-level middleware?
Error-handling middleware?
Built-in middleware?
Custom middleware kaise create karoge?
Route parameters?
Query parameters?
Request body?
express.json() kya karta hai?
express.urlencoded() kya karta hai?
Router kya hota hai?
Controller kya hota hai?

REST API
REST API kya hai?
REST ke principles?
RESTful API kya hoti hai?
REST vs SOAP?
Resource kya hota hai?
HTTP methods ka correct use?
Status codes kaise select karoge?
Pagination kaise implement karoge?
Filtering?
Sorting?
Searching?
API versioning?
Rate limiting?
API validation?
Centralized error handling?

Authentication & Authorization
Authentication vs Authorization?
JWT kya hai?
JWT internally kaise work karta hai?
Access token vs Refresh token?
JWT ko kaha store karna chahiye?
HTTP-only cookie kya hai?
JWT middleware kaise create karoge?
Role-based authorization?
Permission-based authorization?
Password hashing kya hai?
bcrypt kaise work karta hai?
Salt kya hota hai?
Password ko plain text mein store kyun nahi karna chahiye?

Error Handling
Node.js mein errors ke types?
Operational vs programmer errors?
try/catch async code mein kaise work karta hai?
Express error middleware?
Global error handler?
Unhandled Promise rejection kya hai?
uncaughtException kya hai?
Process crash hone par kya karna chahiye?
Graceful shutdown kya hai?

treams

Advanced Node.js ke liye very important.

Stream kya hai?
Streams ki need kyun hoti hai?
Readable Stream?
Writable Stream?
Duplex Stream?
Transform Stream?
Buffer kya hai?
Stream vs Buffer?
Backpressure kya hai?
pipe() kya karta hai?
Large file ko efficiently kaise process karoge?

const fs = require("fs");

const readStream = fs.createReadStream("large-file.txt");

readStream.on("data", (chunk) => {
  console.log(chunk);
});


Buffer
Buffer kya hai?
Node.js mein Buffer ki need kyun hai?
Buffer vs String?
Binary data kaise handle hota hai?
Buffer create kaise karte hain?
Buffer.from("Hello");
Buffer encoding kya hai?
Base64 kya hai?


File System
fs.readFile() vs fs.readFileSync()?
fs.writeFile()?
appendFile()?
unlink()?
mkdir()?
createReadStream()?
createWriteStream()?
Async filesystem APIs preferred kyun hain?
Large files kaise handle karoge?

Node.js Architecture
Node.js architecture explain karo.
Client
   ↓
Node.js
   ↓
Event Loop
   ↓
┌─────────────────┐
│      Libuv      │
└─────────────────┘
   ↓
OS / Thread Pool
Libuv kya hai?
Node.js aur Libuv ka relationship?
Thread Pool kya hai?
Node.js mein default Thread Pool size kya hai?
Kaunse operations Thread Pool use karte hain?
Event Loop aur Thread Pool mein difference?
UV_THREADPOOL_SIZE kya hai?

Worker Threads & Clustering
Worker Threads kya hain?
Worker Thread kab use karna chahiye?
CPU-intensive task ko Node.js mein kaise handle karoge?
Worker Threads vs Child Process?
Cluster module kya hai?
Node.js clustering kyun use karte hain?
Cluster vs Worker Threads?
Multiple CPU cores kaise utilize karoge?

Database & Node.js
Node.js MongoDB ke saath kaise communicate karta hai?
Mongoose kya hai?
Mongoose schema kya hai?
Model kya hai?
populate() kya karta hai?
MongoDB indexing kya hai?
Connection pooling kya hai?
Database connection pool kyun important hai?
Transaction kya hai?
N+1 query problem kya hai?

Caching & Redis
Caching kya hai?
Redis kya hai?
Node.js mein Redis kyun use karte hain?
Cache-aside pattern?
Cache invalidation kya hai?
TTL kya hai?
Redis vs MongoDB?
Session storage using Redis?
Distributed caching kya hai?

Security
CORS kya hai?
CORS error kyun aata hai?
Helmet kya hai?
Rate limiting kya hai?
Brute-force attack?
SQL Injection?
NoSQL Injection?
XSS?
CSRF?
HTTP vs HTTPS?
TLS ka basic working?
Secrets/environment variables safely kaise manage karoge?
API security ke best practices?

Production & System Design
Node.js application ko production mein kaise deploy karoge?
PM2 kya hai?
Reverse Proxy kya hai?
Nginx + Node.js ka architecture?
Load Balancer kya hai?
Horizontal scaling?
Vertical scaling?
Node.js application ko horizontally scale kaise karoge?
Stateless API kya hoti hai?
Logging kaise implement karoge?
Monitoring kya hai?
Health check endpoint kya hota hai?
Graceful shutdown kaise implement karoge?
Zero-downtime deployment kya hai?
Environment-based configuration?
Docker ke saath Node.js kaise deploy karoge?


Node.js Internals ⭐⭐⭐
Node.js process kya hai?
process object kya hai?
process.env?
process.argv?
process.exit()?
Signals kya hote hain?
SIGTERM vs SIGKILL?
Child Process kya hai?
spawn() vs exec() vs fork()?
IPC kya hai?
Node.js memory heap kya hai?
V8 garbage collection?
Memory leak detect kaise karoge?
Node.js application mein CPU spike debug kaise karoge?
Node.js application mein memory leak debug kaise karoge?
===================================================================================

// /** @format */

// Object vs Object → Reference compare hota hai.

// [] == [] // false

// Object vs Primitive → Object ko pehle primitive me convert kiya jata hai (valueOf() → toString()).

// [] == "" // true

// Empty array ka toString():

// [].toString() // ""

// Kyunki array internally join(",") use karta hai aur empty array join hone par empty string return karta hai.

//
//
//

// // slice(start, end) creates and returns a new array containing elements from the start index up to, but not including, the end index. It does not modify the original array. Internally, it copies references or values into a new array.

// // splice(start, deleteCount, ...items) modifies the original array. It can remove, insert, or replace elements. Internally, JavaScript removes the specified elements, shifts the remaining elements as needed, inserts any new items, and returns an array of the removed elements.

// function map(arr, callback) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let value = callback(arr[i], i, arr);
//     newArr.push(value);
//   }
//   return newArr;
// }

// let arr = [2, 30, 4, 50];

// // map(arr, (value, index, arr) => {
// //   console.log(value);
// // });

// // map() is an array method used to transform each element of an array and return a new array of the transformed values. Internally, JavaScript creates a new array, iterates over the original array once, calls the provided callback for every element (passing the current value, index, and original array), stores the callback's return value in the new array, and finally returns that new array. The original array is never modified.

// function filter(arr, callback) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let decision = callback(arr[i], i, arr);
//     //         callback(20 ,0, [20, 30, 40, 50]);
//     if (decision) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// let users = [
//   { name: "Priti", age: 23 },
//   { name: "Rahul", age: 17 },
//   { name: "Aman", age: 25 },
// ];
// let res = filter(users, (val, i, users) => {
//   {
//     return val.age >= 18;
//   }
// });
// console.log(res);

// // filter() iterates through every element of an array and calls the callback function with the current value, index, and original array. If the callback returns a truthy value, the original element is added to a new array. If it returns a falsy value, the element is skipped. After processing all elements, filter() returns the new filtered array without modifying the original array.

// // "Searching for the first matching element is common. I'll provide find().";
// // What does find() do?

// // It checks every element until it finds the first match.

// // If callback returns true ✅
// // Return that element immediately.
// // Stop the loop.
// // If callback returns false ❌
// // Continue searching.
// // If no element matches
// // Return undefined.

// // find() iterates over an array and calls the callback function for each element. As soon as the callback returns a truthy value, find() immediately returns that original element and stops iterating. If no element satisfies the condition, it returns undefined. Unlike filter(), it does not create a new array and only returns the first matching element.
// function find(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     let decision = callback(arr[i], i, arr);
//     if (decision) return arr[i];
//   }
//   return undefined;
// }

// let user = find(users, (val, i, users) => {
//   return val.name == "Rahul";
// });
// console.log(user);

// // reduce

// // What does reduce() do?

// // Unlike map() or filter(), reduce() returns ONE final value.

// // It could be:

// // Number ✅
// // String ✅
// // Object ✅
// // Array ✅
// // Map ✅

// // Anything.

// // arr.reduce(callback, initialValue);

// // Example;

// // let sum = arr.reduce((accumulator, current) => {
// //   return accumulator + current;
// // }, 0);

// // reduce() iterates over an array and combines all elements into a single accumulated result. It starts with an initial accumulator value, calls the callback for each element, updates the accumulator with the callback's return value, and finally returns the accumulated result. Unlike map() or filter(), reduce() produces one final value instead of a new array.
// function myReduce(arr, callback, initialValue) {
//   let accumulator = initialValue;
//   for (let i = 1; i < arr.length; i++) {
//     accumulator = callback(accumulator, arr[i], i);
//   }
//   return accumulator;
// }
// let array = [10, 20, 30, 40];
// let max = myReduce(
//   array,
//   (acc, curr) => {
//     if (curr > acc) {
//       return curr;
//     }

//     return acc;
//   },
//   arr[0]
// );

// console.log(max);

// // let arr = [10, 20, 30];

// console.log(arr.indexOf(100));
// function myIndexOf(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return i;
//     }
//   }

//   return -1;
// }

// // lastIndexOf()

// // Now suppose

// // let arr = [10,20,30,20,40];

// // Question

// // Where is the last 20?

// // arr.lastIndexOf(20);

// // Internal Working

// // Instead of starting from the front,

// // It starts from the end.

// // 0   1   2   3   4

// // 10 20 30 20 40
// //               ^

// // Check

// // 40 === 20

// // False

// // ↓

// // Move left

// // 0   1   2   3   4

// // 10 20 30 20 40
// //           ^
// // Check

// // 20 === 20

// // True

// // Return

// // 3

// // Stop.

// function myLastIndexOf(arr, target) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] == target) return i;
//   }
//   return -1;
// }

// // indexOf()
// // Start

// // ↓

// // Left

// // ↓

// // Right

// // lastIndexOF()
// // Start

// // ↓

// // Right

// // ↓

// // Left

// let sentence = ["JS", "React", "Node", "React", "MongoDB"];
// console.log(sentence.indexOf("React"));
// // ↓

// // indexOf() searches for an exact value.
// // findIndex() lets you define a condition.
// // findIndex()
// // Left → Right
// // First matching index using a callback

// let usersList = [
//   { id: 1, name: "Priti" },
//   { id: 2, name: "Rahul" },
// ];

// // ❌ Won't work because objects are compared by reference
// // let ans = usersList.indexOf({ id: 2, name: "Rahul" });
// // console.log(ans, "--->USERLIST");
// // ✅ Works because you're checking a condition
// let ans = usersList.findIndex((user) => user.id === 2);
// console.log(ans);

// // Why do we need findIndex()?

// // Suppose

// // let users = [
// //   { id: 1, name: "Priti" },
// //   { id: 2, name: "Rahul" },
// //   { id: 3, name: "Aman" }
// // ];

// // Can we use

// // users.indexOf({ id: 2, name: "Rahul" });

// // ❌ No.

// // Why?

// // Because objects are compared by reference, not by their contents.

// // {} === {}

// // Output  false
// // Even if both objects look identical, they are different objects in memory.

// function findIndex(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i], arr)) {
//       return i;
//     }
//   }
//   return -1;
// }

// let products = [
//   { id: 101, name: "Laptop" },
//   { id: 102, name: "Phone" },
//   { id: 103, name: "Tablet" },
// ];

// let prd = findIndex(products, (val, i, products) => {
//   return val.id == 103;
// });
// console.log(prd);
// // findIndex() iterates through the array and executes the callback for each element. As soon as the callback returns true, it immediately returns that element's index and stops iterating. If no element satisfies the condition, it returns -1. Unlike indexOf(), it searches using a callback condition instead of exact value comparison.

// // some() every ()

// // why we have ?
// // supose you have
// // let marks=[80,90,35,70]
// // que  ?  is at least one student faild? ans--> yes
// // que? did every student pass ?
// // ans --no

// // some() --> at least one condition satisfies the conditon
// // return true  otherwise false
// // let arr = [10, 20, 30, 40];

// // let result = arr.some((num) => num > 25);

// // console.log(result);
// // true

// // Because

// // 30

// // OR

// // 40

// // matches.

// // internally
// function some(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i], i, arr)) return true;
//   }
//   return false;
// }
// let markss = [70, 80, 25, 90];
// let someresult = some(markss, (val, i, markss) => {
//   return val > 80;
// });

// console.log(someresult);

// // every= all true
// function every(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     if (!callback(arr[i], i, arr)) return false;
//   }
//   return true;
// }

// // let users1 = [{ role: "USER" }, { role: "ADMIN" }, { role: "USER" }];
// let users1 = [{ verified: true }, { verified: true }, { verified: true }];
// let mkre = every(users1, (val, i, users1) => {
//   return val.verified;
// });
// console.log(mkre);

// // arr.sort()==>
// let arrr = [1, 2, 10, 5];
// arrr.sort();
// console.log(arrr); //   [ 1, 10, 2, 5 ]

// // why ?  because javascript does Not sort numbers by default
// // it converts everyything into strings first.
// //  orignal [1, 2, 10, 5];
// // memory
// //     1
// //    2
// //   10
// //   5
// // step1-->

// // javascript internally convert them to string
// // "1"
// //    "2"
// //    "10"
// //   "5"

// // step2-->
// // now compare a;phabetically
// // Like dictionary order.

// // "1"
// // "10"
// // "2"
// // "5"
// // why ?
// // compare first characters
// // "1"

// // ↓

// // "10"

// // ↓

// // "2"

// // ↓

// // "5"

// // Because

// // 1

// // comes before

// // 2

// // comes before

// // So how do we sort numbers?

// // Using a compare function.

// // arr.sort((a,b)=>a-b);

// // ehy does a-b work ?
// // supose  let arr = [30,10,20]
// // js start comparing pairs
// // imagine 30 10
// // now callback runs
// // 30-10
// // return 20

// // positive   js says positive means swap them.
// // return 10 30

// // now compare   30 20
// // callback  30 20
// // 30-20 /
// // return 10   -- positive
// // swap  20 30
// // result become  10 20 30
// // a - b;
// // If

// // Negative

// // Keep order.

// // If

// // Positive

// // Swap.

// // example 5-10 = -5 negative  keep 5

// // Sorting Strings
// // let fruits=["banana","apple","mango"];

// // fruits.sort();

// // Output

// // apple

// // banana

// // mango

// // Because strings are already sorted alphabetically.
// // let users=[
// //  {name:"Priti",age:24},
// //  {name:"Rahul",age:18},
// //  {name:"Aman",age:30}
// // ];

// // Sort by age

// // users.sort((a,b)=>a.age-b.age);

// users.sort((a, b) => {
//   if (a.name > b.name) {
//     return 1;
//   }
//   if (a.name < b.name) {
//     return -1;
//   }
//   return 0;
// });
// console.log(users);

// // internal working

// function mySort(arr, compare) {
//   compare(a, b);
//   compare(a, b);
//   compare(a, b);
// }

// let fruits = ["apple", "banana", "orange"];
// let isBananaExist = fruits.indexOf("banana") != -1;
// console.log(isBananaExist);

// console.log(fruits.includes("banana"));

// function MyInclude(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return true;
//     }
//   }
//   return false;
// }

// // similer to indexOf but instead of returning index return boolean
// let userss = [{ id: 1 }, { id: 2 }];
// console.log(userss.includes({ id: 1 })); // object are compare by refrence not value  false

// // includes() checks whether an array or string contains a specified value. It iterates through the elements and returns true as soon as it finds a match; otherwise it returns false. Unlike indexOf(), it returns a boolean instead of an index.
// ///

// let arr2 = [1, 2, [3, 4], 5];
// // Index;

// // 0      1        2          3

// // 1      2     [3,4]         5

// // third element is another arraya

// // nested array

// let resultFlatarr = arr2.flat();
// console.log(resultFlatarr);

// // step 1
// // create [] new arr /
// // step 2
// // read first element
// // 1
// // is it array ?
// // no  then
// // push it    -->  [1]

// // step 3  read   2  is it array ? no  then push it  [1,2 ]

// // step 4  read [3,4] is it array ? yes
// // instead of pushing
// // [3,4  ]
// // it opens the array
// // push 3 4
// // [1,2,3,4]

// function myFlat(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       for (let j = 0; j < arr[i]; j++) {
//         // yaha arr[i] ek array hoga instead of element itself   [3,4]
//         result.push(arr[i][j]);
//       }
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// // flat() creates a new array by removing nested array levels. By default, it flattens one level (depth = 1). You can pass a depth such as flat(2) or flat(Infinity) to flatten deeper nested arrays. It does not modify the original array.

// let str_arr = ["Hello World", "JavaScript is Awesome"];

// // You want

// // [
// //  "Hello",
// //  "World",
// //  "JavaScript",
// //  "is",
// //  "Awesome"
// // ]

// let str_res = str_arr.map((sentence) => sentence.split(" ")).flat();
// console.log(str_res);

// // flatMap()

// let str_with_flatMap = str_arr.flatMap((sentence) => sentence.split(" "));
// console.log(str_with_flatMap);

// function myFlatMap(arr, callback) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     //
//     let value = callback(arr[i], i, arr);

//     if (Array.isArray(value)) {
//       for (let j = 0; j < value.length; j++) {
//         newArr.push(value[j]);
//       }
//     } else {
//       newArr.push(value);
//     }
//   }
//   return newArr;
// }

// let orders = [
//   {
//     customer: "Rahul",
//     items: ["Laptop", "Mouse"],
//   },
//   {
//     customer: "Priti",
//     items: ["Keyboard", "Monitor"],
//   },
// ];

// // let flatedOrder = orders.flatMap((order) => order.items);
// // console.log(flatedOrder);
// console.log("*****************************");
// let flatedArr = myFlatMap(orders, (val, i, orders) => {
//   return val.items;
// });
// console.log(flatedArr);
// let resultt = arr.flatMap((num) => {
//   if (num % 2 === 0) {
//     return [num];
//   }

//   return [];
// });
// // console.log(resultt);/

// // [2,4]
// // let arr = [1,2,3];

// // console.log(
// //     arr.map(num=>[num*2])
// // );

// // Output

// // [
// //  [2],
// //  [4],
// //  [6]
// // ]

// // Output?

// // let arr = [1,2,3];

// // console.log(
// //     arr.flatMap(num=>[num*2])
// // );

// // Output

// // [
// // 2,
// // 4,
// // 6
// // ]

// // flatMap() combines the behavior of map() and flat(1). It applies a callback to every element, expects the callback to return an array or value, and then automatically flattens the result by one level. It returns a new array and does not modify the original array.

// // Why do we need Array.from()?

// // Imagine you have something that looks like an array but isn't actually an array.

// // (exa) => "Hello"
// // h e l l o
// // "Hello".map(s=>s) error;
// // typeError  map is not a function

// // js says i ll convert it into a real array
// // that's why Array.from() exist

// console.log("%%%%%%%%%%%%%%%%%%%%%%%%%");
// let string = "Hello";
// console.log(typeof string);
// let strResult = Array.from(string);
// console.log(strResult); // [ 'H', 'e', 'l', 'l', 'o' ]
// console.log(typeof strResult);

// console.log("##########################################");

// console.log(Array.from("ABC")); // ["A","B","C"]

// function myFrom(itrable) {
//   let result = [];
//   for (let item of itrable) {
//     result.push(item);
//   }
//   return result;
// }

// let number = Array.from({ length: 5 });
// console.log(number);

// console.log(myFrom("abc"));

// let ARR = Array.from({ length: 5 }, (_, index) => index);
// console.log(ARR);

// // let arr = Array.from({ length: 10 }, (_, i) => i + 1);

// // console.log(arr);

// console.log("@@@@@@@@@@@@@@@@@@@@@@");
// let set = new Set([10, 20, 30]);
// console.log(set);
// let setToArr = Array.from(set);
// console.log(setToArr);

// console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>");

// let map1 = new Map([
//   ["a", 1],
//   ["b", 2],
// ]);

// console.log(Array.from(map1));

// // Array.from() also accepts a mapping function, just like map()

// // instead of
// let ANS = Array.from([1, 2, 3].map((x) => x * 2));

// // also write like this
// console.log(Array.from([1, 2, 3], (x) => x + 1));
// console.log(ANS);

// // Array.from() creates a new array from an iterable (like a string, Set, or Map) or an array-like object (such as { length: n }). It can also take an optional mapping function that transforms each element while creating the new array. It returns a new array without modifying the original source.

// console.log(typeof Array.from([1, 2, , 4]));

// // because in javascript  An array is actually a special type of objecct

// // memory
// // Object
// // |
// // Array

// console.log(typeof []); // object

// let myArr = [1, 2, 3];
// console.log(typeof myArr === "Array"); //false
// // because typeof arr return "Object"

// // solutions
// Array.isArray();

// console.log(Array.isArray(myArr)); // true

// console.log(Array.isArray({})); // false

// console.log(Array.isArray("Hello"));
// console.log(Array.isArray(100));
// console.log(Array.isArray(true));

// [
//   {
//     name: "Vipin",
//   },
// ];

// {
//   message: "Hello";
// }

// // before doing  users.map(...)

// // first check
// if (Array.isArray(users)) {
//   users.map((user) => user);
// }

// // otherwise  TypeError: users.map is not a function

// typeof []; // Object
// Array.isArray([]); //true
// typeof {}; //Object
// Array.isArray({}); // false

// // Array.isArray() checks whether a value is an array. It returns true only for arrays and false for all other values. Unlike typeof, which returns "object" for arrays, Array.isArray() correctly identifies arrays using JavaScript's internal array check.

// console.log(Array.isArray(new Array(5)));

// // Iterators & Symbol.iterator;

// for (let value of arr) {
//   console.log(value);
// }

// // Question:

// // How does JavaScript know

// // 10

// // 20

// // 30

// // Should be printed one by one?

// // Where is the loop?

// // You never wrote

// // for(let i=0;i<arr.length;i++)

// // Yet JavaScript somehow knows how to move through the array.

// // How?

// // every array has a hidden method
// Symbol.iterator;

// // think of it like this
// Array;
// // ^
// // hidden machin
// // next elem
// // next elm

// // the Hidden machin is called iterator/

// let arr_a = [10, 20, 30];
// arr_a[Symbol.iterator]();

// // this create an interator

// let iterator = arr_a[Symbol.iterator]();
// console.log(iterator);
// console.log(iterator.next()); // { value: 10, done: false }

// // js return an Object
// // not just 10
// // why ??
// // because javascript need to tell you
// // 1 current value
// // 2 wheather iteration is finished
// // so it return
// // {
// //   value, done
// // }

// console.log(iterator.next()); // { value: 20, done: false }

// console.log(iterator.next()); // { value: 30, done: false }

// console.log(iterator.next()); //{ value: undefined, done: true }

// // let arr = [10, 20, 30];
// // let iterator = arr[Symbol.iterator]();
// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next());

// // this is exactly what for ...ANS. of does
// for (let val of arr) {
//   console.log(val);
// }

// // JavaScript secretly does something conceptually like:

// let iteratorr = arr[Symbol.iterator]();
// let response = iteratorr.next();
// while (!response) {
//   console.log(response.value);
//   response = iteratorr.next();
// }

// console.log(response);

// let strr = "ABC";
// for (let ch of strr) {
//   console.log(ch);
// }

// // Why?

// // Because strings ,Map Set  has Symbol.iterator also implement

// let printDeatils = {
//   name: "Vipin",
//   age: 25,
// };
// // for (let x of printDeatils) {
// //   console.log(x); //TypeError: printDeatils is not iterable
// // }

// // Why?

// // Because a plain object doesn't implement Symbol.iterator.
// // It is not iterable by default.
// // Why does Array.from() work?
// // Array.from("Hello")

// // Because

// // String

// // ↓

// // Iterator

// // ↓

// // H

// // ↓

// // e

// // ↓

// // l

// // ↓

// // l

// // ↓

// // o

// // Array.from simply keeps calling .next() until done becomes true.

// // An iterator is an object that allows JavaScript to access elements one at a time. It exposes a next() method that returns an object with value and done properties. Built-in iterables such as arrays, strings, maps, and sets provide an iterator through Symbol.iterator. Features like for...of, the spread operator, and Array.from() all use this iterator protocol internally.

// // Generators let you create your own iterators. Instead of JavaScript providing the iterator, you become the one who controls what next() returns. This is an advanced concept that's used in libraries, asynchronous programming, Redux Saga, and interview questions.

// // If Iterator = DVD Player

// // Then Generator = You creating your own DVD Player.

// // supose i ask you to print   1 2 3

// // normally
// function numbers() {
//   return [1, 2, 3];
// }
// console.log(numbers()); // everythings comes togather

// // but supose i want
// // 1
// // second call
// // 2
// // third call
// // 3

// // not at all once

// // can a normal function do this ? no

// // Because a normal function behaves like this.

// // function demo() {
// //     console.log(1);
// //     console.log(2);
// //     console.log(3);
// // }

// // demo();

// // Output

// // 1
// // 2
// // 3

// // After reaching the end

// // Function Finished
// // it can not pause

// // problem   imagine Netflix :    do you download 100 episodes at onece ?
// // no

// // you watch episod 1 later 2

// // a Genrator works  the same way

// // Genrator Syntax
// // notice the *

// // function* number() {}

// // the * tells javascripts    this  function can pause and resume

// // yield;

// // instead of return  genrator use yield

// // function* numberrs() {
// //   yield 1;
// //   yield 2;
// //   yield 3;
// // }

// // st 1 -- call

// // let gen = numbers();
// // output ?  nothing
// // why ?
// //  because genrator dont execute immedetly

// // memory
// // Genrator --> Ready --> not started

// // st 2  now gen.next()
// // gen.next();
// // Generator starts.

// // yield 1;

// // return {
// //   value: 1,
// //   one: false,
// // };

// // then it pause
// // yield 1
// // paused here

// // st 3 again
// // gen.next()
// // genrator resume exactly wheere it pause
// // with return Function ends immediately.

// // for of with genrator

// // function* numbers() {
// //   yield 10;
// //   yield 20;
// //   yield 30;
// // }
// // for (let val of numbers()) {
// //   console.log(val);
// // }

// // // genrator automatically implement
// // // Symbol.iterator
// // // that means a genrator is an itreabel

// // A generator is a special type of function declared with function*. It returns a generator object instead of executing immediately. Inside the generator, yield pauses execution and returns a value. Calling next() resumes execution from the point where it paused. Generators implement the iterator protocol, making them iterable with for...of. They are useful for producing values lazily, processing large datasets efficiently, and controlling asynchronous workflows.

// // why clauser concept  ???
// // When a function finishes, all its local variables are destroyed.

// // Before Closures

// // Let's understand how JavaScript executes a function.

// // Consider this:

// // function add() {
// //     let a = 10;
// //     let b = 20;

// //     console.log(a + b);
// // }

// // add();

// // Question:

// // Where are a and b stored?

// // Step 1

// // JavaScript starts.

// // It creates the Global Execution Context (GEC).

// // Memory

// // Global Execution Context

// // add() → function

// // Only the function is stored.

// // Nothing inside the function executes yet.

// // Step 2

// // add();

// // JavaScript creates a Function Execution Context (FEC).

// // Call Stack

// // ─────────────
// // add()
// // ─────────────
// // Global
// // ─────────────
// // Step 3

// // Memory for add()

// // add()

// // a = undefined

// // b = undefined
// // Step 4

// // Execution phase

// // let a = 10;

// // Memory

// // a = 10

// // Then

// // let b = 20;

// // Memory

// // a = 10

// // b = 20
// // Step 5
// // console.log(a+b)

// // Output

// // 30
// // Step 6

// // Function finishes.

// // JavaScript removes

// // add()

// // a

// // b

// // Everything is destroyed.

// // Call Stack

// // ──────────────
// // Global
// // ──────────────

// // Memory gone.

// // A closure is the combination of a function and the lexical environment in which it was created. The inner function retains access to variables from its outer scope even after the outer function has finished executing because JavaScript keeps those variables alive as long as they are still referenced.

// // Now we'll learn the real reason closures work.
// // "Closure remembers variables."

// // But interviewers ask:

// // "How does JavaScript remember them?"

// // The answer is:

// // Lexical Environment

// // What Does "Lexical" Mean?
// // Lexical = where the code is written

// let a = 10;
// function demo() {
//   console.log(a);
// }

// // Global
// // |
// // ---> a=10
// //  --> demo()

// // demo () is inside the global scope

// // its position in the source code never change
// // that is called Lexical scope

// // let a = 10;

// function first() {
//   function second() {
//     console.log(a);
//   }
// }

// // Visually

// // Global

// // ↓

// // first()

// // ↓

// // second()

// // second() is written inside first().

// // first() is written inside Global.

// // This relationship is fixed when you write the code, not when you execute it.

// // Execution Time vs Writing Time

// // let a = 10;

// // function outer() {

// //     let b = 20;

// //     function inner() {

// //         console.log(a);

// //         console.log(b);

// //     }

// // }

// // Question

// // When JavaScript executes

// // inner();

// // How does it find

// // a

// // and

// // b
// let city = "Delhi";

// function outer() {
//   let state = "MP";

//   function inner() {
//     let village = "ABC";

//     console.log(city);

//     console.log(state);

//     console.log(village);
//   }
// }

// // Memory
// // city = "Delhi "
// // outer()
// // state="MP"
// // inner()
// // village="ABC"
// console.log(city);

// // JavaScript asks

// // Step 1

// // Do I have

// // city

// // inside

// // inner()

// // Answer

// // No

// // Step 2

// // Go one level up.

// // outer()

// // Does it have

// // city

// // No.

// // Step 3

// // Go one level up.

// // Global

// // Found

// // city

// // Done.

// // This is called the Scope Chain

// // JavaScript always searches

// // Current Scope

// // ↓

// // Parent Scope

// // ↓

// // Grandparent Scope

// // ↓

// // Global

// // ↓

// // Not Found

// // ↓

// // ReferenceError

// // Variables are searched from inside to outside.
// // A lexical environment is the combination of a scope's local variables and a reference to its parent lexical environment. JavaScript creates a lexical environment for each execution context. When a variable is accessed, JavaScript searches the current lexical environment first, then follows the parent references (the scope chain) until the variable is found or a ReferenceError is thrown.

// for (var i = 1; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// // output
// // 6;
// // 6;
// // 6;
// // 6;
// // 6;

// // why ?
// //  step 1 -- js start
// // global memeory  create
// // i = undefined

// // step 2 --   loop start
// // i =1
// // memory -->/    global  i =1

// // now js see
// // setTimeout(... ).
// // que  ? does setTimeOut()    execute immedetly ?
// // No

// // it says ---
// // i ill execute this callback after 1000 ms

// // so js gives the callback to the browser

// // global -->  setTimeout()--> Browser timer

// // the callback is waiting

// // step 3 --->
// // loop continues immedetly
// //  js does not wait
// // i= 2
// // again
// // setTimeout()
// //  another callbacek goes to the browser Timer
// // Timer
// //callback 1
// //callback 2

// //step 4 ---
// // again
// // i= 3
// // setTimeout()
// // another callback
// //callback 1
// //callback 2
// //callback 3

// // step 5
// // again   i =4
// //  setTimeout()
// // another callback
// //callback 1
// //callback 2
// //callback 3
// //callback 4

// // step 6
// // again   i =5
// // finally i++
// // becomes 6
// // conditiom 6<=5  false
// // loop ends //

// // at this moment
// // have any callback executed ?
// // No

// // all callbacks are still waiting

// // after 1000ms
// // Timer Finised

// // put callback into callback Queue

// // one callback enters

// // event loop checks

// // callstack empty ?
// // yes

// // execute callback

// // now callback runs

// // console.log(i);

// // que  --> current value of i ?
// // is?  6 --->
// // output - 6

// // second callback
// // again
// // console.log(i)
// // current  i
// // i= 6

// // so on
// // final
// //6
// //6
// //6
// //6/
// //6

// // loop satrt--->  i =1   schedule callback  i =2  -->seche callback -->i =3  -- schedule callback -- i =4 ----scedule callback i =5  schedule callback i =6    -->> 1 second later    --->>  all calbacks read Same VARIABLE ----> 6 6  6

// // why same variable

// // because var

// // create one single variable
// // think of like one box
// // i=1
// // i=2
// // i=3
// // i=4
// //i =5
// //i =6

// // all callbacks remember the same box
// // when they finally execute
// //  they open the box
// // inside -->6

// // why does let work ?
// console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>");
// for (let i = 1; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(i); // 1 2 3 4 5
//   }, 1000);
// }

// // let create a new variable for each iteration
// // instead of one box

// // Iteration 1

// // ┌────┐
// // │1   │
// // └────┘

// // Iteration 2

// // ┌────┐
// // │2   │
// // └────┘

// // Iteration 3

// // ┌────┐
// // │3   │
// // └────┘

// // Iteration 4

// // ┌────┐
// // │4   │
// // └────┘

// // Iteration 5

// // ┌────┐
// // │5   │

// // Each callback closes over its own i.
// // Can we fix var?

// // Yes.

// // Using a closure.

// for (var i = 1; i <= 5; i++) {
//   (function (x) {
//     setTimeout(() => {
//       console.log(x);
//     }, 1000);
//   })(i);
// }

// // First iteration

// // i = 1

// // Immediately call

// // (function(x))(1)

// // Now

// // x = 1

// // The callback doesn't use i.

// // It uses

// // x

// // which belongs to that function call.

// // Every iteration creates a new closure.

// // Memory

// // Iteration 1

// // Closure

// // x = 1

// // Iteration 2

// // Closure

// // x = 2

// // Iteration 3

// // Closure

// // x = 3

// // Each callback gets its own private memory

// // var is function-scoped, so all callbacks share the same i. By the time the callbacks execute, the loop has completed and i is 6, so each callback prints 6. let is block-scoped, and in a for loop JavaScript creates a new binding for each iteration. Each callback closes over its own binding, so the callbacks print 1, 2, 3, 4, and 5.

// // javascript is single threaded
// // what does it mean ?

// // imagine javascript as one chef in a kitechen

// // chef
// // one stove
// // one dish at a time

// // javascript can execute only one piece of code at a tiem

// // the problem
// // suppose you write

// console.log("start");
// setTimeout(() => {
//   console.log("Tiemer");
// }, 2000);
// console.log("end");

// // what will be the output
// // start-->  end -->timer

// // why ?

// // there are 6 important parts
// // call stack
// // web APIs (browser/ node APIs )
// // callback Queue
// // MicroTask Queue
// // Event Loop

// // 1 Call Stack
// // think of ot as plate stack
// // console.log();
// // main();
// // global;

// // only the top function runs
// // console.log("star t")

// //stack

// //consoel.log()
// //globall
// //  outpit  start

// // stack
// // global

// // next line
// // setTimeout(() => {

// // }, timeout);
// // does js wait for 2 sec  no

// // what happens ?

// // js immedetly sends  s
// // settiemout ()
// // to the web apis

// // call stack
// // global

// // web apis
// // Timer start

// // the callback is stored there

// // the call stack is free again
// // js continues
// // next line
// // console.log("end ")
// // output  end

// // Timeline

// // time =0
// // start
// // Timer starts
// // end
// // call stack empty

// // after 2 sec
// // the browser says
// // Timer finished

// // the callbacak is not directly pushed into the call stack /

// // instead it goes to
// // callback queue
// // console.log("Timer");

// // Event loop
// // the Event loop continuesly ask
// // if  yes
// // move the callback
// // callback queue
// //  then
// // callsatck
// // execute it

// // this is the flow
// // code --> call stack --> setTimeout()-->WebAPIs-->wait-->Callback Queue--->EventLoop-->Callstack -->Execute
// // setTimeout() does NOT execute the callback after exactly 2000 ms.

// // It means

// // "Wait at least 2000 ms, then put the callback into the Callback Queue."

// // If the Call Stack is busy,

// // the callback waits longer.

// // Promise

// console.log("A");
// Promise.resolve().then(() => {
//   console.log("B");
// });
// console.log("C");

// // A C B

// // why /

// // because promises do not use the callback Queue

// // they use Another Queue

// // Microtask Queue

// // js has two queue

// // 1 callbacak queue
// // that holds
// // setTimeout()
// // setInterval()
// // DOM Event

// // -----------------------------

// // 2 Microtask queue

// // that holds
// // promises .then()
// // catch()
// // finally()
// // queueMicrotask()

// // "Microtask Queue has higher priority"

// // always

// // callStack Empty

// // check
// // Microtask Queue

// // execute ALL Microtasks

// // then
// // callback Queu e

// // console.log("Start");

// // setTimeout(() => {
// //   console.log("Timer");
// // }, 0);

// // Promise.resolve().then(() => {
// //   console.log("Promise");
// // });

// // console.log("End");

// //  JavaScript Runtime

// //               ┌─────────────────┐
// //               │   Call Stack    │
// //               └────────┬────────┘
// //                        │
// //         ┌──────────────┴──────────────┐
// //         │                             │
// //  ┌───────────────┐          ┌─────────────────┐
// //  │   Web APIs          │          | Promise Engine        │
// //  └──────┬────────┘          └────────┬────────┘
// //         │                            │
// //         ▼                            ▼
// //  ┌───────────────┐          ┌─────────────────┐
// //  │ Callback Queue│          │ Microtask Queue │
// //  └──────┬────────┘          └────────┬────────┘
// //         └──────────────┬─────────────┘
// //                        ▼
// //                 ┌────────────┐
// //                 │ Event Loop │
// //                 └────────────┘

// // async /await

// // await stops js    X wrong

// // it does not stop js

// // it only pauses one async function , while the rest of  javascript keep running

// // before async /await

// Promise.resolve("Hello").then((val) => console.log(val));

// console.log("World");

// //world
// //hello

// // why ?
// // because

// // console.log();/
// // callstack
// // promises.then()
// // microtaskQueue

// // the problem
// // fetch("/users")
// //   .then((response) => {
// //     return response.json();
// //   })
// //   .then((data) => {
// //     console.log(data);
// //   })
// //   .catch((error) => {
// //     console.log(error);
// //   });

// // if we have 10 api calll

// // .then ()
// // .then()
// // .then()
// // .../

// // this become dificult to read

// // what does async
// // it Automatically makes the function return a Promise

// async function demoapi() {
//   return 10;
// }
// console.log(demoapi()); // promise {10}
// //  not 10

// // Internally JavaScript behaves almost like

// // function demo(){

// //     return Promise.resolve(10);

// // }

// async function myDemo() {
//   let val = await Promise.resolve(10);
//   console.log(val);
// }

// console.log(myDemo(), "---------------Promise");

// // output  10

// // how ?

// // step 1
// // call
// // myDemo()

// // callstacak

// // myDemo()
// // global

// // stp 2
// // reach await Promise.resolve(10)

// // js sees

// // Promise

// // not normal value

// // it says

// // pause this async function

// // mydemo()

// // ↓

// // await

// // ↓

// // Pause demo()

// // ↓

// // Run other JavaScript

// // step 3

// // when promise resolve

// // js places the continuation of the async function

// // promises always use
// // microtask queue

// // step 4
// // event loop

// // callstack empty

// // microtask queue
// // resume myDemo()

// // execution continues after
// // await

// // console.log(val )

// // 10

// // mydemo()

// // ↓

// // await

// // ↓

// // Pause

// // ↓

// // Promise resolves

// // ↓

// // Microtask Queue

// // ↓

// // Resume

// // ↓

// // console.log()

// // async makes a function automatically return a Promise. await pauses only the execution of the current async function until the awaited Promise settles. It does not block the JavaScript thread. When the Promise resolves, the remaining part of the async function is scheduled as a microtask and resumes execution after the current synchronous code completes and before any macrotasks like setTimeout.

// // Promises

// // why were promise created

// // Call Restaurant

// // ↓

// // Pizza takes 30 minutes

// // ↓

// // Should JavaScript wait?

// // ❌ No

// // If JavaScript waited,

// // your whole website would freeze.

// // So JavaScript continues doing other work.

// // Before Promises

// // used callbacks

// // orderPizza(function (pizza) {
// //   eatPizza(pizza);
// // });

// // getUser(id, function (user) {
// //   getOrder(user, function (order) {
// //     getPayment(order, function (payment) {
// //       getInvoice(payment, function (invoice) {
// //         console.log(invoice);
// //       });
// //     });
// //   });
// // });

// // this becomes
// // callback
// // callback
// // callback
// // callback hell
// // js introduce promises

// // Promise
// // instead of saying
// // call me when finished

// // we say
// //  I Promise I'll give you the result later

// // exactly like swiggy

// // Promise is simple an Object

// // let promise = new Promise(); // Promise {pending}

// // A Promise represent  future result

// // Every Promise has exactly three states

// // pending
// // fullfilled
// //or rejected

// // statet 1 -->imagin you order a pizzaa
// //   Restaurant says cooking....
// // not delivered yet
// // promise - pending ...

// // state 2---> fulfilled   pizza arives
// // sucess

// // state 3 ---> Rejected

// // Restaurant says   -- no Pizzza
// // Promise becomes  Rejected

// let promise = new Promise((resolve, reject) => {
//   resolve("Pizza Delivered");
// });
// promise.then((result) => {
//   console.log(result);
// });
// // console.log("--------------->>>>", promise);

// // conceptually ,

// // js stores something like

// // Promise {
// //   state:"pending",
// //   value:undefined,
// // }

// // after  /
// // resolve(10)
// // it becomes
// // Promise{
// // state:"fullfilled",
// // value:10
// // }

// // then() returns a new Promise
// let promise1 = Promise.resolve(10);

// let newPromise = promise1.then((value) => {
//   return value * 2;
// });
// console.log("NEWPROMISE---------->", newPromise);

// // newPromise ?
// // answer
// // another promise

// // Promise.resolve(5)

// //   .then((value) => {
// //     return value * 2;
// //   })

// //   .then((value) => {
// //     return value + 10;
// //   })

// //   .then(console.log);

// // Why does chaining work?

// // Because every

// // .then()

// // returns

// // NEW Promise

// // Not the same Promise.

// // A Promise is an object representing the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled, and rejected. resolve() fulfills the Promise, reject() rejects it, and .then(), .catch(), and .finally() register callbacks to handle those outcomes. Every call to .then() returns a new Promise, which enables Promise chaining.

// // Imagine this situation
// // supose your dashbord needs :
// // useProfile
// // order
// // notification
// // messages

// // you have 4 APIs
// // the que ?
// // should we call them
// // API 1
// // wait
// // API 2
// // wait
// // API 3
// // wait
// // slow

// // or  API!
// // API 2/
// // API 3
// // run togather
// // fast

// // 1 Promise.all()
// // All ->> everyone must finish successfully

// let p1 = Promise.resolve("user");
// let p2 = Promise.resolve("order");
// let p3 = Promise.resolve("messages");
// Promise.all([p1, p2, p3]).then((result) => {
//   console.log(result);
// });
// // .catch(err){
// //   console.log(err)
// // };

// // if one Promise fails
// // everything fails

// // JavaScript doesn't wait for the remaining results once it knows the combined Promise must reject.

// // real react example

// // const [user, posts, comments] = await Promise.all([
// //   fetchUser(),
// //   fetchPosts(),
// //   fetchComments(),
// // ]);

// // instead of writing  on by one

// // 2 Promise.allSettled()
// // now imagine even if one API fasil
// // you still want all result

// let pp1 = Promise.resolve("User");
// let pp2 = Promise.reject("ERROR");
// let pp3 = Promise.resolve("Order");

// Promise.allSettled([pp1, pp2, pp3]).then((result) => console.log(result));

// // [
// //   { status: "fulfilled", value: "User" },
// //   { status: "rejected", reason: "ERROR" },
// //   { status: "fulfilled", value: "Order" },
// // ];
// // nothing fails
// // you recieve the status of evry Promise

// // real example

// // uploading 100 photos
// // if on upload fails
// // sholud the other  99 stop
// // No
// // Promise.allSettled()

// // 3 Promise.race()

// // think
// // Race -->whoerver finishes FIRST wins

// let p11 = new Promise((resolve) => {
//   setTimeout(() => resolve("A Promise"), 3000);
// });

// let p22 = new Promise(
//   (resolve) => setTimeout(() => resolve("B Promise")),
//   1000
// );

// Promise.race([p11, p22]).then((result) => console.log(result));
// // A -- 3sec
// // B -- 1sec
// // winner B   output B

// // 4 Promise.any()
// // this one is often  confused with race()

// // think -->ANY first success  wins

// // ignore failures

// let pr1 = Promise.reject("Serve 1");
// let pr2 = Promise.resolve("SErver2 ");
// let pr3 = Promise.resolve("Server 3");

// Promise.any([pr1, pr2, pr3]).then((res) => console.log(res));

// // output ->> server 2

// // it ignored server 1
// // because it failed

// // what if all fail?

// // Promise.any([
// //   Promise.reject("SA")
// //   Promise.reject("AA")
// // ])

// // output --> AggregateError

// // before learning prototype

// // what is the output ?
// console.log(
//   "************************************************************************************"
// );
// console.log("*************JAVASCRIPT OBJECT PROTOTYPE*********************");
// let numberArr = [10, 20, 30];
// console.log(numberArr.length); // 3
// console.log(numberArr.push); // [Function :push]
// console.log(numberArr.map); // [Function :map]

// console.log("******************JAVASCRIPT OBJECT ***********");

// // come from?
// // did we write them ?

// // no
// // then who creted them ?

// let userObj = {
//   name: "PRiti",
// };
// console.log(userObj.toString); // [Function: toString]

// // did we write
// // toString();   ? no

// // then where did it come from

// // function demo() {}

// // console.log(demo.bind);
// // console.log(demo.call);
// // console.log(demo.apply);

// // the secret  -- javascript has a mechanism called
// // Prototype

// // everything starts from prototype.

// // first understand Object

// // when you create

// // let user = {
// //   name: "Priti",
// // };

// // memory --->
// // user-- >
// //   {
// //     name: "priti",
// //     age: 24,
// //   };
// // now looks
// // user.name
// // js ask ?
// // does user have  "name"?

// // answer ?  yess
// // return Priti
// // eassy

// // user.toString()

// // there is no  toString()  inside user

// // then why does this work

// // javascript search process
// // js does not stop
// // instead it ask s
// // current Object
// // ⤵️
// // found?
// // no
// // ⤵️
// // go to prototype
// // search again

// // that hidden link is called

// // [[prototype]]
// // or
// // __proto __

// // user

// // ↓

// // Prototype

// // ↓

// // Object.prototype

// // ↓

// // toString()

// // ↓

// // hasOwnProperty()

// // ↓

// // valueOf()

// // ↓

// // ...

// // thats why user.toString()  works

// // user

// // ↓

// // {
// //  name:"Priti"
// // }

// // ↓

// // Prototype

// // ↓

// // {
// //  toString()

// //  hasOwnProperty()

// //  valueOf()

// //  ...
// // }

// // The object doesn't own those methods.

// // It borrows them.

// // arr

// // ↓

// // Array.prototype

// // ↓

// // push()

// // pop()

// // map()

// // filter()

// // reduce()

// // sort()

// // ...

// // All array methods live inside

// // Array.prototype

// // every array pornts to the same prototype

// // Every Type Has Its Own Prototype
// // Value	Prototype
// // Array	Array.prototype
// // Function	Function.prototype
// // Object	Object.prototype
// // String	String.prototype
// // Number	Number.prototype
// // Boolean	Boolean.prototype

// // prototype chain
// // let = arr = [1, 2, 3];
// // js search arr
// // found ? no
// // Array.prototype
// // ⤵️
// // found ? no
// // ⤵️
// // Object.prototype
// // found ?
// // no
// // null
// // ⤵️
// // stop

// // this is called prototype chain

// // let arr = [1,2,3];
// // console.log(arr.xyz);
// // arr

// // ↓

// // No

// // ↓

// // Array.prototype

// // ↓

// // No

// // ↓

// // Object.prototype

// // ↓

// // No

// // ↓

// // null

// // ↓

// // undefined

// // why doesnt it crash?
// // because js searched everywhere
// // nothing found

// // undefined return

// // let objDemo = {
// //   name: "Vipin",
// // };

// // console.log(objDemo.hasOwnProperty("name"));

// // where is hasOwnProperty ()?
// // inside
// // objDemo  ?  no

// // search
// // obj--> prototype -->Object.prototype-found     execute /

// let ar = [];
// console.log(ar.__proto__ == Array.prototype); // true

// // because ever arrays prototype points to  Array.prototype

// console.log(Array.prototype.__proto__ === Object.prototype); // true

// // Because

// // Array.prototype

// // ↓

// // Object.prototyp

// // console.log(
// //     Object.prototype.__proto__
// // );

// // Output

// // null

// // Why?

// // Because the prototype chain ends there.

// // Array Instance

// // ↓

// // Array.prototype

// // ↓

// // Object.prototype

// // ↓

// // null

// // fucntion

// // Function Instance

// // ↓

// // Function.prototype

// // ↓

// // Object.prototype

// // ↓

// // null

// // Object ----?>
// // Object Instance

// // ↓

// // Object.prototype

// // ↓

// // null

// //why Prototype ?

// let a1 = [];
// let a2 = [];
// let a3 = [];

// // if every array stored its own
// // push()
// // map()
// // filter()
// // reduce ()

// // memory would explode
// // instead ,
// //  javasript stores them onec

// // 1 million arrays
// // one Array.prototype
// // shared methods
// // huge memrory saving
// // A prototype is an object that other objects can inherit properties and methods from. Every JavaScript object has an internal [[Prototype]] reference. When a property or method is accessed, JavaScript first looks on the object itself. If it's not found, it follows the prototype chain until the property is found or the chain ends at null.

// // __proto__ vs prototype

// // these are the same ? no
// console.log("***********************************************PROTOTYPE vs ");

// // function Person() {}

// // console.log(Person.prototype); // {}
// // console.log(Person.__proto__); //[Function (anonymous)] Object

// // when you create function Person(){}
// // javascript creates a function object /

// // think of it like
// // Person->fucntio onject

// // Since it is an object, it also has properties.

// // Internally imagine

// // Person

// // ├── name

// // ├── length

// // ├── prototype   ⭐

// // └── __proto__

// // A function has BOTH

// // prototype

// // AND

// // __proto__

// // but they mean different things

// // every normal function automatically gets a property called prototype
// // function Person() {}

// // console.log(Person.prototype);

// // Output

// // {
// //    constructor: Person
// // }

// // Initially it only contains

// // constructor

// // why does it exist ?

// // because later when someone writes

// // new Person();

// // javascript needs somewhere to stored methods

// // that place is

// // Person.prototype;

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHello = function () {
//   console.log(`hello ${this.name}`);
// };

// let ress = new Person("Vipin");
// console.log(ress.sayHello());

// // memory  ke ander
// // Person;
// // ⤵️
// // prototype
// // ⤵️
// // {
// //   sayHello()
// // }

// // every object created by new Person() shared this method

// // __proto__

// // supose
// let user1 = {};

// // que   where does user.toString()   come from ?

// // not from user

// // javascript follows ⤵️⤵️
// // user
// // ⤵️
// // __proto__
// // ⤵️
// // Object.prototype

// // so __proto__
// // means
// // who is my parent ?

// // let arr = [];

// // Memory

// // arr

// // ↓

// // __proto__

// // ↓

// // Array.prototype

// // thats why
// // arr.push()  works
// // prototype        exists on  functions

// // purpose
// // used when creating new objects

// // proto     exists on  Object

// // Person Function

// // ↓

// // prototype

// // ↓

// // House Blueprint

// // let p = new Person();
// // p

// // ↓

// // __proto__

// // ↓

// // Person.prototype

// // function Person(name) {
// //   this.name = name;
// // }

// // let p = new Person("Priti");

// // what happens internally ?

// // step 1 ⤵️
// // javascript creates
// // Empty Object   {},

// // step 2  sets

// // object.__proto__ = Person.prototype;

// // {}

// // ↓

// // Person.prototype

// // step 3  runs
// // Person.call(Object, "priti");

// // now this.name="priti"
// // becomes
// // object.name="priti"

// // Object
// // {
// //   name:"priti"
// // }

// // step 4

// // returns Object
// // so
// // let p = new Person("priti")
// // becomes
// // {
// //   name:"priti"
// // }

// // with __proto__
// // ⤵️
// // Person.prototype;
// //

// // visula -----------?>>>>

// // Person()

// // ↓

// // prototype

// // ↓

// // {
// //     sayHello()
// // }

// // -------------------------

// // new Person()

// // ↓

// // {
// //    name:"Priti"
// // }

// // ↓

// // __proto__

// // ↓

// // Person.prototype

// // Remember

// // Person is itself a function object.

// // All functions inherit from

// // Function.prototype

// // So

// // Person

// // ↓

// // __proto__

// // ↓

// // Function.prototype

// //          Function Person

// //         /               \

// //  prototype            __proto__

// //      |                             |

// //      ▼                             ▼

// //  Person.prototype      Function.prototype

// //          ▲

// //          |

// //      __proto__

// //          |

// //          ▼

// //    Person Instance

// function Car() {}
// let bmw = new Car();

// // Car--> prototype--->{constructor:Car}--->bmw-->__proto__---->Car.prototype

// // why is this usefull ?
// Car.prototype.start = function () {
//   console.log("Engin started ");
// };

// // now
// bmw.start();

// // bmw --> no starts()--> __proto__-->>Car.prototype--->found      output = Engin started

// // Without copying start() into every object.

// // prototype	__proto__
// // Exists on functions	Exists on objects
// // Used to create future objects	Points to parent object
// // Shared methods live here	Used during property lookup
// // Person.prototype	person.__proto__

// // Step 0: The Code
// // function Person(name) {
// //     this.name = name;
// // }

// // let p = new Person("Priti");

// // Looks simple.

// // But internally JavaScript performs 4 steps.

// // Step 1️⃣ Create an Empty Object

// // When JavaScript sees

// // new Person("Priti")

// // it first creates an empty object
// // {}

// // memory me
// // Object
// // ⤵️
// // {}

// // think of it like buying a new notebook

// // before writing anything , the notebook is empty

// // step 2   connect the prototype

// // now js connects the Object to the  cunstructors prototype/
// // obj.__proto__= Person.prototype

// // memory me
// // {}
// // __proto__
// // Person.prototype

// // why ?
// // so the object can use methods stored on Person.prototype

// // step 3

// // now js calls
// // Person.call(Object,"rptii")

// // notice   this becomes obj    , so this.name= name      becomes obj.name="priti"

// // now memory becomes {name:"priti"}

// // step 4  return the object

// // finnaly js returns
// // obj
// //so
// // let p = new Person("priti")
// // becomes
// // let p = {
// //   name: "Priti",
// // };

// // with __proto__  -->> Person.prototype

// // lets build our own new

// // imagine js didnt have new

// function myNew(Constructor, ...args) {
//   // step1
//   let obj = {};
//   // step 2
//   obj.__proto__ = Constructor.prototype;
//   // step 3
//   Constructor.apply(obj, args);
//   // step 4
//   return obj;
// }

// // Usage

// // function Person(name) {
// //     this.name = name;
// // }

// // let p = myNew(Person, "Priti");

// // console.log(p);

// // Output

// // {
// //     name: "Priti"
// // }

// // Amazing!

// // You just recreated JavaScript's new (simplified).

// // Why Step 2 Is Important

// // Suppose

// // function Person(name) {
// //     this.name = name;
// // }

// // Person.prototype.sayHello = function () {
// //     console.log("Hello " + this.name);
// // };

// // Now

// // let p = new Person("Priti");

// // p.sayHello();

// // Output

// // Hello Priti

// // How?

// // Search process

// // p

// // ↓

// // Has sayHello?

// // ↓

// // No

// // ↓

// // __proto__

// // ↓

// // Person.prototype

// // ↓

// // Found
// // What If We Skip Step 2?

// // Imagine

// // function badNew(Constructor, ...args) {

// //     let obj = {};

// //     Constructor.apply(obj, args);

// //     return obj;
// // }

// // Now

// // let p = badNew(Person, "Priti");

// // p.sayHello();

// // Output

// // TypeError:
// // p.sayHello is not a function

// // Because

// // {}

// // ↓

// // NO prototype connection

// // ↓

// // Cannot find sayHello()

// // Step 2 is essential.

// // what is constructor returns an object

// function Person1() {
//   return {
//     city: "delhi",
//   };
// }
// let p = new Person1();
// console.log(p);
// // {city:"delhi "}

// // why ?
// // because if a constructor explicitly returns an objecct  js returns that objecct instead of  newly created one

// // what if constructor returns a Primitive value

// // function Person(){
// //   this.name="Vipin";
// //   return 100;

// // }

// // {name:"Vipin"}

// // why

// // because primitive (number stirng boolean) are ignored
// // only returned objects replace the newly created instance

// // Without new	With new
// // Normal function call	Creates a new object
// // this depends on how function is called	this points to the new object
// // No automatic prototype link	Links to Constructor.prototype
// // No automatic return	Returns the created object (unless constructor returns another object)

// // Constructor Function
// //         │
// //         ▼
// //       new
// //         │
// //         ▼
// // Create Empty Object
// //         │
// //         ▼
// // Link __proto__ → Constructor.prototype
// //         │
// //         ▼
// // Call Constructor with this = Object
// //         │
// //         ▼
// // Initialize Properties
// //         │
// //         ▼
// // Return Object

// // this is decided when the function is called, not when it is created.

// // Think Like a Phone Call

// // Imagine Rahul has one phone.

// // Different people can call Rahul.

// // Priti  ─────► Rahul

// // Aman   ─────► Rahul

// // Rohit  ─────► Rahul

// // Rahul is the same person.

// // But who called Rahul changes every time.

// // Exactly like

// // this

// // The function is the same.

// // The caller changes.

// // So this changes.

// // rule 1 --->
// // normal function call

// function showMe() {
//   console.log(this, "*****************"); //undefined
// }

// showMe();

// // nobody
// // just a normal function call
// // in browser("no strict mode")
// // this == window;
// // "use strict";

// // function show() {
// //   console.log(this);
// // }

// // show();

// // Output;

// // undefined;

// //

// // let person = {

// //     name: "Rahul",

// //     age: 22,

// //     greet() {

// //         console.log(this.name);

// //     }

// // };

// // person.greet();

// // Question

// // Current

// // this

// // ↓

// // Who called?

// // person.greet();

// // Therefore

// // this

// // ↓

// // person

// // Output

// // Rahul
// // Rule 3
// // Nested Function

// // Now the confusing part.

// // let user = {

// //     name: "Priti",

// //     show() {

// //         function inner() {

// //             console.log(this);

// //         }

// //         inner();

// //     }

// // };

// // user.show();

// // Most beginners think

// // this

// // ↓

// // user

// // Wrong.

// // Why?

// // Because

// // inner();

// // is a normal function call.

// // Nobody owns it.

// // Therefore

// // this

// // ↓

// // Global (non-strict)

// // or

// // undefined (strict/modules)

// // Not

// // user
// // Visual
// // user.show()

// // ↓

// // this = user

// // ----------------

// // inner()

// // ↓

// // Normal Function

// // ↓

// // Global / undefined
// // How to Fix?

// // Use an arrow function.

// // let user = {

// //     name: "Priti",

// //     show() {

// //         const inner = () => {

// //             console.log(this.name);

// //         };

// //         inner();

// //     }

// // };

// // user.show();

// // Output

// // Priti

// // Why?

// // Arrow functions don't create their own this.

// // They borrow it.

// // We'll come to that in a moment.

// // Rule 4
// // Arrow Function

// // This is the biggest interview topic.

// // const show = () => {

// //     console.log(this);

// // };

// // show();

// // Question

// // Who is

// // this

// // Answer

// // Arrow functions have no own this.

// // They use the surrounding lexical this.

// // Think

// // Arrow

// // ↓

// // Looks Outside

// // ↓

// // Uses Parent's this
// // Visual
// // Outer Function

// // ↓

// // this = user

// // ↓

// // Arrow Function

// // ↓

// // Uses same this

// // No new this is created.

// // Example
// // let user = {

// //     name: "Priti",

// //     show() {

// //         const inner = () => {

// //             console.log(this.name);

// //         };

// //         inner();

// //     }

// // };

// // user.show();

// // Execution

// // user.show()

// // ↓

// // this = user

// // ↓

// // Arrow

// // ↓

// // Uses same this

// // ↓

// // Priti
// // Rule 5
// // Constructor Function
// // function Person(name) {

// //     this.name = name;

// // }

// // let p = new Person("Priti");

// // Question

// // Who is

// // this

// // Answer

// // The new object.

// // Remember our new lesson.

// // Internally

// // let obj = {};

// // Person.call(obj);

// // Therefore

// // this

// // ↓

// // obj
// // Visual
// // new Person()

// // ↓

// // New Object

// // ↓

// // this

// // ↓

// // Object
// // Rule 6
// // call()
// // function greet() {

// //     console.log(this.name);

// // }

// // let user = {

// //     name: "Rahul"

// // };

// // greet.call(user);

// // Output

// // Rahul

// // Because

// // call()

// // lets us choose

// // this
// // Rule 7
// // apply()

// // Same as call().

// // Difference

// // Arguments.

// // function sum(a,b){

// //     console.log(this.name);

// //     console.log(a+b);

// // }

// // let user={

// //     name:"Priti"

// // };

// // sum.apply(user,[10,20]);

// // Output

// // Priti

// // 30

// // Notice

// // Arguments are inside an array.

// // Rule 8
// // bind()

// // This one is different.

// // function greet(){

// //     console.log(this.name);

// // }

// // let user={

// //     name:"Rahul"

// // };

// // let fn = greet.bind(user);

// // fn();

// // Output

// // Rahul

// // Question

// // Difference?

// // call()

// // Immediately executes.

// // bind()

// // Returns a new function.

// // Visual
// // call()

// // ↓

// // Run Now

// // ----------------

// // bind()

// // ↓

// // // Create New Function

// // // ↓

// // // Run Later
// // Call Type	this becomes
// // show()	Global / undefined (strict/modules)
// // obj.show()	obj
// // Arrow Function	Uses parent's this
// // new Person()	New object
// // call(obj)	obj
// // apply(obj)	obj
// // bind(obj)	New function with this fixed

// // 🧠 How JavaScript Really Runs (V8 Engine Deep Dive)

// // When you write

// // let x = 10;
// // console.log(x + 20);

// // You think JavaScript executes it directly.

// // ❌ Wrong.

// // JavaScript cannot understand your code directly.

// // It first converts it into something the CPU can understand.

// // When JavaScript code runs, it follows this pipeline:

// // JavaScript Code

// // ↓

// // Parser

// // ↓

// // Abstract Syntax Tree (AST)

// // ↓

// // Ignition Interpreter

// // ↓

// // Bytecode

// // ↓

// // TurboFan Optimizing Compiler

// // ↓

// // Machine Code

// // ↓

// // CPU Executes

// // ⤵️
// // Step 1 — Source Code

// // Suppose you write

// // let a = 10;
// // let b = 20;

// // console.log(a + b);

// // This is called

// // Source Code

// // Humans understand it.

// // CPU doesn't.

// // Step 2 — Parser

// // JavaScript sends your code to the Parser.

// // Think of the parser as an English teacher checking grammar.

// // Example

// // let a = ;

// // Parser says

// // ❌ Syntax Error

// // because this is invalid JavaScript.

// // Another example

// // function() {}

// // Again

// // ❌ Syntax Error

// // So the parser first checks:

// // Is the syntax valid?
// // Are brackets balanced?
// // Is the grammar correct?

// // Step 3 — AST (Abstract Syntax Tree)

// // If the parser succeeds,

// // it creates something called an

// // Abstract Syntax Tree

// // (AST)

// // Suppose

// // let x = 5 + 10;

// // You see

// // 5 + 10

// // JavaScript sees a tree.

// // Conceptually:

// // Assignment

// //   /     \

// //  x      +

// //        / \

// //       5  10

// // Everything becomes nodes.

// // if (age > 18) {
// //   vote();
// // }

// // AST --->
// // IfStatement

// // │

// // ├── Condition

// // │     age > 18

// // │

// // └── Body

// //       vote()

// // Everything is transformed into a tree.

// // Why AST?

// // Because computers understand trees much better than text.

// // The compiler can now analyze:

// // Variables
// // Loops
// // Functions
// // Conditions

// // Step 4 — Ignition Interpreter

// // Now the AST goes to

// // Ignition

// // Ignition converts the AST into

// // Bytecode

// // Question

// // What is Bytecode?

// // Think of it as

// // Intermediate Language

// // Not JavaScript.

// // Not Machine Code.

// // In between.

// // Example

// // JavaScript

// // let x = 10;

// // Conceptual Bytecode

// // LoadConstant 10

// // Store x

// // This is much easier for the engine to execute.
// // Step 5 — Execute Bytecode

// // Ignition begins executing Bytecode.

// // At first,

// // everything is interpreted.

// // This allows JavaScript to start running very quickly.

// // suppose

// // for (let i = 0; i < 10000; i++) {}

// // Running this with only the interpreter is slower.

// // JavaScript notices

// // This code runs again...

// // Again...

// // Again...

// // Again...

// // It thinks

// // 🔥 This function is HOT.
// // Hot Code

// // Hot code means

// // Frequently Executed Code

// // Example

// // function add(a,b){

// //     return a+b;

// // }

// // for(let i=0;i<1000000;i++){

// //     add(i,i);

// // }

// // The engine notices

// // add()

// // called

// // 1,000,000 times

// // This becomes

// // Hot Function

// // Step 6 — TurboFan

// // Now TurboFan wakes up.

// // Ignition

// // ↓

// // TurboFan

// // TurboFan says

// // This code is important.

// // Let's optimize it.

// // It converts Bytecode into

// // Machine Code

// // // Machine Code is what the CPU actually understands.

// // JavaScript

// // ↓

// // Parser

// // ↓

// // AST

// // ↓

// // Bytecode

// // ↓

// // TurboFan

// // ↓

// // Machine Code

// // ↓

// // CPU

// // Garbage Collection

// // Imagine

// // function demo(){

// //     let a = 10;

// // }

// // After

// // demo();

// // No one uses

// // a

// // anymore.

// // Should memory keep it forever?

// // No.

// // Garbage Collector removes it.

// // why was React created?

// // Before React ........
// // we used
// `<div id="app"></div>;`;

// // const app = document.getElementById("app");
// // app.innerHTML = `
// {
//   /* <h1>Hello</h1>`; */
// }

// // works

// // now imagine a real application
// // instagram
// // ⤵️
// // 5000 posts
// // 200 comments
// // likes
// // stories
// // messages

// // if one like changes .../
// // should the browser rebuild the entire page ?

// // no

// // that wolud  be extremely  slow

// // problem with dom

// // suppose

// // html

// `<div>
//   <li>APPLE</li>
//   <li>BANANA</li>
//   <li>ORANG</li>
// </div>;`;

// // now you change
// // BANANA to MENGO
// // the browser must
// // find DOM Node
// //update DOM
// //Recalculate styles
// //Layout
// //paint
// //composite

// // DOM operations are expensive.

// // why ?
// // imagine a city map

// // Road
// // ⤵️
// // Building
// // ⤵️
// // Traffic
// // ⤵️
// // Signals;

// // Changing one road may affect many routes
// // similarly ,

// // changing the DOM may trigger:

// // Style recalculation
// // Layout (Reflow)
// // Paint
// // Composite

// // Browser Rendering Pipeline

// // Whenever DOM changes

// // HTML

// // ↓

// // DOM Tree

// // ↓

// // CSSOM

// // ↓

// // Render Tree

// // ↓

// // Layout

// // ↓

// // Paint

// // ↓

// // GPU Composite

// // ↓

// // Screen

// // Every update may require repeating parts of this pipeline

// // React's idea
// // instead of touching the real DOM immediatly React creates
// // Virtual Dom

// // think of it as
// // Real DOM
// // ⤵️
// // Expensive
// // Virtual DOM
// // ⤵️
// //cheap javascript object

// // JSX

// // <h1>Hello</h1>

// // React doesn't directly create HTML.

// // It creates a JavaScript object (conceptually).

// // {
// //   type:"h1",
// //   props:{
// //     children:"hello"
// //   }
// // }

// // this object is called a React Element

// // Virtual DOM Tree

// // Suppose

// // <App />

// // returns

// // <div>
// //     <h1>Hello</h1>

// //     <button>Click</button>
// // </div>

// // React builds

// /// App

// // ↓

// // div

// // ├── h1

// // └── button

// // this is not the browser DOM
// // it is a  Javascript tree

// // First Render

// // React creates

// // JSX

// // ↓

// // React Element

// // ↓

// // Virtual DOM

// // ↓

// // Real DOM

// // Browser displays it.

// // now state changes
// // suppose
// // const [count,setCount]= useState(0)

// // current screen  count :0
// // click button
// // setCount(1)

// // Does React recreate the entire page ?  No

// // React creates Another Virtual DOM tree
// // old
// // count :0
// // new
// // count :1
// // now React has

// // Old Virtual DOM
// // ⤵️
// // New Virtual DOM

// // Reconciliation

// // React compares
// // Old Tree
// // div
// //p
// //count:0

// // New Tree
// // div
// // p
// // count :1

// // the only text Node changed /

// // diffing Algorithms

// // React ask  ? Is div same ?
// // yes
// // keep
// // is P same ? yes
// // keep it  same

// // ⤵️
// // text same ? no
// // update it
// // Count:0

// // ↓

// // Count:1

// // is changed not the entire page
// // With React

// // Change

// // ↓

// // Virtual DOM

// // ↓

// // Compare

// // ↓

// // Update only differences

// // Why JSX?

// // Many beginners think

// // JSX

// // ↓

// // HTML

// // Wrong.

// // JSX becomes

// // <h1>Hello</h1>

// // ↓

// // Conceptually

// // React.createElement(
// //     "h1",
// //     null,
// //     "Hello"
// // );

// // React Element

// // A React Element is just an object.

// // Conceptually

// // {
// //     type: "h1",

// //     props: {

// //         children: "Hello"

// //     }
// // }

// // Not HTML.

// // Not DOM.

// // Just JavaScript.

// // Why Is Virtual DOM Faster?

// // Important point:

// // Many people say

// // "Virtual DOM is faster than DOM."

// // ❌ That's incomplete.

// // The Virtual DOM itself isn't magically faster.

// // The advantage is that React:

// // Does most of its work in JavaScript objects (cheap).
// // Calculates the minimal set of DOM changes.
// // Applies only the necessary updates.

// // The real DOM is still updated—but less often and more efficiently.

// // The Virtual DOM is a lightweight JavaScript representation of the UI. When state or props change, React creates a new Virtual DOM tree, compares it with the previous one using the reconciliation (diffing) algorithm, and updates only the parts of the real DOM that changed. This minimizes expensive DOM operations and improves UI performance.

// // Why React Feels Smooth

// // Because of Fiber.

// // Not Virtual DOM.

// // Fiber decides  WHEN   work happens.

// // Virtual DOM decides   WHAT   changed.

// // Remember this difference.

// // Fiber keeps

// // TWO trees.

// // Current UI

// // Current Tree

// // While rendering

// // Work In Progress Tree

// // Why was Fiber introduced?

// // Wrong Answer

// // To make React faster.

// // Better Answer

// // Fiber was introduced to make rendering interruptible and schedulable. It breaks rendering into small units of work so React can pause, prioritize urgent updates, resume later, and keep the UI responsive while still updating the Virtual DOM efficiently.

// // Internal Flow
// // ⤵️

// // setState()
// // ↓
// // Schedule Update
// // ↓
// // Create Work-In-Progress Fiber Tree
// // ↓
// // Render Phase
// // ↓
// // Pause / Resume
// // ↓
// // Complete Tree
// // ↓
// // Commit Phase
// // ↓
// // Update DOM

// // Suppose

// // <App>
// //     <Navbar />
// //     <Sidebar />
// //     <Feed />
// //     <Chat />
// //     <Footer />
// // </App>

// // User sends a message while the feed is rendering.

// // Fiber can conceptually do:

// // Feed Rendering

// // ↓

// // Pause

// // ↓

// // Render Chat Update

// // ↓

// // Commit

// // ↓

// // Resume Feed

// // The app feels responsive because urgent work is prioritized.

// // Dry run

// // imangine this component tree

// {
//   /* <App>
//   <Headers />
//   <Daschbord />
//   <Notification />
// </App>; */
// }

// // A state update occurs only inside <Notification/>

// // think through these questions :
// // 1 Does React rebuild the entire DOM
// // 2 Does React create a new  work-in-progress Fiber tree ?
// // 3 which phase can be paused?
// // 4 which phase can not be paused?

// // how useState () work internally

// // const [count, setCount] = useState(0);

// // suppose we write

// console.log("REACT HOOKS ***********************************");
// function Counter() {
//   let count = 0;
//   function increment() {
//     count++;
//     console.log(count);
//   }
//   return increment;
// }

// const inc = Counter();
// inc();
// inc();
// inc();

// // Why?

// // Because of...

// // Closure

// // The variable survives.

// // but React need more
// // imagine
// // function Counter() {
// //   const [count, setCount] = useState(0);
// //   return <h1>{count}</h1>;
// // }

// // every time React renders ...
// // Counter()

// // runs again.

// // question

// // wouldn;t

// // let count =0 ;
// // be recreated every render ?    Yes
// // so react can not store state inside the function
// //it must store it outside

// //  React's idea

// // instead of  Function    stores state

// // React does
// // React Engine
// // ⤵️
// // Stores state
// // ⤵️
// // Fucntion only reads it

// // let state = 0;
// // function useState(initialValue) {
// //   return [
// //     state,
// //     function (newValue) {
// //       state = newValue;
// //     },
// //   ];
// // }

// console.log("*******************USESTATE IMPLEMENTATION**************");
// // function Counter1() {
// //   const [count, setCount] = useState(0);
// //   console.log(count);
// //   setCount(count + 1);
// // }

// // Counter1();
// // Counter1();
// // Counter1();

// console.log("******************END*******************");

// // Amazing .
// // state survived

// // because it wan not inside the function

// // Problem
// // now imagine another component

// // function Login() {
// //   const [name, setName] = useState("");
// //   console.log(">>>>>>>>>>>>>>", name, ">>>>>>>>>>>>>>>>"); // 3
// //   setName("priti");
// // }

// // Login();
// // oops
// // both components share
// // state

// // bed .
// // Need multiple states

// // React uses an Array
// // concepltually
// // let hooks = [];
// // memory
// // hooks
// // ⤵️⤵
// // []

// // every  useState() gets one slot.

// // example -->>
// // Component

// // function App() {
// //   [count] = useState(0);
// //   const [name] = useState("priti");
// // }

// // memory me
// // hooks
// // ⤵️
// // 0
// // "priti"

// // Actually
// // hooks = [0, "priti"];

// // But how Does React know which state ?
// // React uses
// // hookIndex

// // let hook = [];
// // let hookIndex = 0;

// // function useState(initialValue) {
// //   if (hook[hookIndex] === undefined) {
// //     hook[hookIndex] = initialValue;
// //   }

// //   const currentIndex = hookIndex;

// //   function setState(value) {
// //     hook[currentIndex] = value;
// //   }

// //   const value = hook[hookIndex];
// //   hookIndex++;
// //   return [value, setState];
// // }

// // function App() {
// //   const [count] = useState(0);
// //   const [name] = useState("Priti");
// //   console.log(">>>>>>>>>>>>>>>>", count, name);
// // }
// // App();

// // memory
// // hooks
// // []

// // first
// // useState(0);
// // index =0
// // store

// // hooks--> [0]

// // increment
// // hookIndex = 1

// // second useState("Priti")
// // store
// // hooks-- > [0, "Priti"];

// // Next Render
// // before rendering ..

// // hookIndex = 0;
// //Not    hook =[];
// // only index resets /

// // Render again
// // first  useState(0)
// // looks
// // hooks[0]   Already exists    Return 0;

// // second looks
// // hooks[1]  Already exists  return "Priti"
// // state survives

// // visual ⤵️
// // Render 1
// // hookIndex =0
// // ⤵️
// // hooks = [0,"Priti"]
// // ------------

// // Render  2
// // hookIndex=0;⤵️
// // ⤵️
// //Read
// // 0
// //Read
// // "Priti"

// // Now you know why hook order matter
// // imagine
// // function App() {
// //   if (true) {
// //     useState(0);
// //   }
// //   useState("Priti");
// // }

// // Render 1 >>>>
// // hooks -->0 --->"Priti"

// // now condition changes

// // fucntion App(){
// //   if(false){
// //     useState(0);
// //   }
// //   // useState("Priti")
// // }

// // First hook

// // No longer runs

// // React now Thinks

// // hooks[0]
// // ⤵️
// // "Priti"

// // oops
// // Everything shifts

// // Render 1
// // 0 -->"Priti"

// // Render 2
// // "Priti"-->Wrong positionn

// // All state becomes incorect

// // Thats why React says
// // never write  if(condition){useState()}
// // or
// // for(...){
// // useState()
// // }

// // hooks must always be called in the same order

// // React's Rule
// // same Render
// // ⤵️
// // Same hook Order
// // ⤵️
// // Same Array Positions

// // what happens on setState

// // setState(5)

// // React does not immediately update the screen    instead
// // conceptually
// // Update hooks[0]
// // ⤵️
// // Mark Fiber Dirty
// // ⤵️
// // Schedule Render
// // ⤵️
// // Render Again
// // ⤵️
// // Read Update state
// // ⤵️
// // Commit DOM

// // Remember React fiber ?
// // Now Everything connects

// // setState()

// // ↓

// // hooks Array Updated

// // ↓

// // Fiber Update Scheduled

// // ↓

// // Component Re-render

// // ↓

// // hookIndex Reset

// // ↓

// // Read hooks Again

// // ↓

// // New UI

// // ↓

// // Commit

// // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // Fiber Node

// // ↓

// // Hooks

// // ↓

// // Index 0

// // ↓

// // 0

// // ↓

// // Index 1

// // ↓

// // "Priti"

// // ↓

// // Index 2

// // ↓

// // true

// // Each Fiber stores the hook list for that component.

// // Why can't hooks be inside an if statement?

// // Correct Answer

// // React identifies hooks by their call order during rendering. If a hook is skipped because of a conditional, the positions of all subsequent hooks change. React would then associate the wrong state with the wrong hook, causing bugs.

// // let hooks = [];
// // let hookIndex = 0;

// // function useState(initialValue) {
// //   if (hooks[hookIndex] === undefined) {
// //     hooks[hookIndex] = initialValue;
// //   }

// // const currentIndex = hookIndex;

// // function setState(newValue) {
// //   hooks[currentIndex] = newValue;
// //   render();
// // }

// //   const value = hooks[hookIndex];
// //   hookIndex++;

// //   return [value, setState];
// // }

// // function App() {
// //   const [count, setCount] = useState(0);

// //   console.log("Count:", count);

// //   return {
// //     click() {
// //       setCount(count + 1);
// //     },
// //   };
// // }

// // let app;

// // function render() {
// //   hookIndex = 0;
// //   app = App();
// // }

// // render();

// // app.click();
// // app.click();
// // app.click();

// // Mental Model

// // Think of a movie theater.

// // Each seat has a fixed seat number.

// // Seat 0 → count

// // Seat 1 → name

// // Seat 2 → isLoggedIn

// // Every show (render), people sit in the same seat numbers.

// // If Seat 0 suddenly disappears because of an if statement:

// // Seat 1 becomes Seat 0

// // Seat 2 becomes Seat 1

// // Everyone ends up in the wrong seat.

// // That's exactly what happens when hook order changes.

// // How useEffect() Works Internally

// // We'll answer:

// // Why does useEffect() run after rendering?
// // Why does the dependency array exist?
// // How does React compare dependencies?
// // Why does cleanup run before the next effect?
// // How can we build a tiny useEffect() ourselves?

// // Why does React wait until after rendering?

// // Chapter 1
// // Life Before useEffect();

// // imagine

// // function App() {
// //   console.log("Rendering ");
// //   documet.title = "Hello";
// //   return <h1>Hello</h1>;
// // }

// // when does
// // document.title ="hello" run?
// // During rendering

// // React Doesnt like this
// // why ?
// // becouse rendering should be pure
// // Meaning
// // same input
// // same output

// // No side Effects

// // What is the side Effect?

// // A side effect is anything that chages  something outside the compient

// // example
// // fetch("/users");
// // localStorage.setItem(...)
// // document.title=""
// // setTimeout()
// // addEventListener()

// // All these affect the outside world

// // React Wants Rendering To Be Pure

// // Rendering should only answer one question:

// // "What should the UI look like?"

// // Not

// // Fetch Data

// // Change DOM

// // Start Timer

// // Open Socket

// // Those happen later.

// // Two Phases of React

// // Remember Fiber?

// // React has two phases
// // Render Phase
// // Commit Phase

// // Render Phase --->
// // Create Virtual DOM
// //Compare
// //Prepare Changes

// // Commit Phase -->>
// // Update Real DOM

// // when should side effects happen?

// // Not During Render
// // After Commit

// // Render  Component
// // ⤵
// // virtual DOM
// // ⤵
// // diff algo
// //   ⤵
// // Commit
// //  ⤵
// // DOM Update
// //  ⤵
// // Run Effects ⤵

// // That's why
// // useEffect()   exists

// // function App() {
// //   useEffect(() => {
// //     console.log("Effect");
// //   });

// //   console.log("Render");

// //   return <h1>Hello</h1>;
// // }

// // output --?
// // Render
// // Effect

// // Not Effect then Render

// // because effects run after commit

// // Dependancy Array
// // Now

// // useState(() => {
// //   console.log("HELLO");
// // }, []);

// // why []?
// // runs once  but why ?

// // React stores Dependency
// // conceptually

// // hook = [state, effectDependencies];
// // memory me -->>>>hooks-->0-->[]

// // First Render

// // React checks

// // Old Dependencies ⤵️
// // None
// //

// // must run effect

// // store   []

// // second Render
// // Old
// // []
// // new
// // []
// // same    dont run

// // useEffect(() => {

// //     console.log("API");

// // }, []);

// // Render 1

// // No Previous Array

// // ↓

// // Run

// // Render 2

// // []

// // ↓

// // []

// // ↓

// // Equal

// // ↓

// // Skip

// // Now With Dependencies
// // useEffect(() => {
// //   console.log("API");
// // }, [count]);

// // suppose
// // Rener 1
// // count =0;
// // store
// // [0]

// // Render 2
// // count =0
// // compare
// // Old
// // [0]
// // New
// // [0]

// // same then skip

// // Render 3
// // count =1
// // Old
// // [0]
// // New
// // [1];
// // different
// //  Run effect

// // Multiple Dependencies
// // useEffect(() => {

// // }, [count, name]);

// // React checks

// // Old

// // ↓

// // 0

// // "Priti"

// // --------------

// // New

// // ↓

// // 0

// // "Priti"

// // ↓

// // Same

// // ↓

// // Skip

// // If even one dependency changes

// // Run Effect
// // No Dependency Array
// // useEffect(() => {

// //     console.log("Hello");

// // });

// // React cannot compare anything.

// // Therefore

// // Every render

// // ↓

// // Run.

// // Cleanup Function

// // Now the important part.

// // useEffect(() => {

// //     console.log("Start");

// //     return () => {

// //         console.log("Cleanup");

// //     };

// // }, []);

// // Question

// // Why return a function?

// // Imagine

// // setInterval(...)

// // Without cleanup

// // Every render

// // ↓

// // New Timer

// // ↓

// // New Timer

// // ↓

// // New Timer

// // Memory leak.

// // instead

// // React Does
// // Old Effects ⤵️
// // cleanUp⤵️
// // Run New Effect

// // useEffect(() => {
// //   const id = setInterval(() => {
// //     console.log("Running ");
// //   }, 200);

// //   return () => {
// //     clearInterval(id);
// //   };
// // }, []);

// // without cleanup

// // Timer ⤵️
// //Timer ⤵️
// //timer ⤵️
// // 100 timer

// // with cleanup

// // Old timer
// // ⤵️
// // Stop
// // ⤵️
// // create new

// console.log("*****************************");
// // Timeline

// // Render 1

// // Commit

// // ↓

// // Effect

// // Render 2

// // Commit

// // ↓

// // Cleanup

// // ↓

// // New Effect

// // Unmount

// // Cleanup

// // Why?

// // Imagine

// // window.addEventListener(...)

// // Without cleanup

// // Every render

// // ↓

// // More listeners.

// // Memory leak.

// // Cleanup removes old listeners.

// // let previouseDeps;
// // function useEffect(callback, deps) {
// //   let chnged = true;
// //   if (previouseDeps) {
// //     changed = deps.some((value, index) => {
// //       return !Object.is(value, previouseDeps[index]);
// //     });
// //   }

// //   if (changed) {
// //     callback();
// //     previouseDeps = deps;
// //   }
// // }

// // React actually stores effects on the Fiber.

// // Conceptually

// // Fiber
// // ⤵️
// //Hooks
// // ⤵️
// // state
// // ⤵️
// // Effect
// // ⤵️
// // dependencies
// // ⤵️
// // cleanup

// // Correct Answer

// // On the initial render there are no previous dependencies, so React runs the effect and stores the empty dependency list. On later renders, the dependency list is compared with the previous one. Since there are no dependencies to change, React skips running the effect again until the component unmounts.

// // Why React asks for key
// // Why using index as a key is often a bad idea
// // How React decides whether to reuse or recreate a component
// // Why state sometimes "moves" to the wrong item
// // How reconciliation really works internally

// // Keys React ko identity (pehchan) dene ke liye bani hain.

// // Suppose tumhare paas ye UI hai.

// {
//   /* <ul>
//     <li>Apple</li>
//     <li>Banana</li>
//     <li>Mango</li>
// </ul>

// React internally Virtual DOM banata hai.

// ul
// │
// ├── Apple
// ├── Banana
// └── Mango

// Ab maan lo state change hui. */
// }

// // New Ui
// {
//   /* <ul>
//   <li>Apple</li>
//   <li>Orange</li>
//   <li>Mango</li>
// </ul>; */
// }

// // React ko kaise pata chalega ki sirf
// // Banana se Orange krna   change hua ?

// // Old React tree
// // Apple
// // Banna
// // Mango

// // New React Tree
// // Apple
// // Orange
// // Mnago

// // Rewact compares
// // Apple==Apple  true
// // same

// // Bananan !=Orange  false
// // Update

// // Mango ==Mango
// // same

// // only one node update
// // this process is called  Reconcilliation

// // Reconcilliation kya hai

// // Old virtual DOM and New Virtual DOM   ko compare krke minimal changes nikalna

// // ab man lo lsit ho gai

// // [A,B ,C]

// // new List

// // [X, A, B, C];

// // How React knows  ?
// // A  --> same hai ya  New hai ?

// // Without Key

// // React by default position compare karta hai.

// // Old

// // Index 0

// // A

// // New

// // Index 0

// // X

// // React sochta hai

// // A gaya

// // ↓

// // X aa gaya

// // Fir

// // B

// // ↓

// // A

// // Fir

// // C

// // ↓

// // B

// // Fir

// // New C

// // React ko lagta hai poori list badal gayi.

// // Ye unnecessary work hai.

// // Old

// // A

// // B

// // C

// // ↓

// // New

// // X

// // A

// // B

// // C

// // React sochta hai

// // A Replace

// // B Replace

// // C Replace

// // Create New

// // Bahut expensive.

// // Keys Save React

// // Ab same list

// // [
// //  {id:1,name:"A"},

// //  {id:2,name:"B"},

// //  {id:3,name:"C"}
// // ]

// // Render

// // {users.map(user => (

// //     <User

// //         key={user.id}

// //         name={user.name}

// //     />

// // ))}

// // Old

// // 1

// // 2

// // 3

// // New

// // 100

// // 1

// // 2

// // 3

// // React compare karta hai

// // ID 1

// // ↓

// // Already Exists

// // Move

// // ----------------

// // ID 2

// // ↓

// // Move

// // ----------------

// // ID 3

// // ↓

// // Move

// // ----------------

// // ID100

// // ↓

// // Create New

// // Bas.

// // Ab unnecessary recreation nahi hoti.

// // users.map((user,index)=>{

// //     return <User key={index}/>

// // })

// // Interview me ye almost fix question hai.

// // Question

// // Why not use index?

// // Example

// // Old

// // [
// // A,
// // B,
// // C
// // ]

// // Indexes

// // 0 A

// // 1 B

// // 2 C

// // Ab beginning me insert karo.

// // [
// // X,
// // A,
// // B,
// // C
// // ]

// // Indexes

// // 0 X

// // 1 A

// // 2 B

// // 3 C

// // React sochta hai

// // 0

// // A

// // ↓

// // X

// // ----------------

// // 1

// // B

// // ↓

// // A

// // ----------------

// // 2

// // C

// // ↓

// // B

// // Sab change lag raha hai.

// // State Bug

// // Ye aur dangerous hai.

// // Imagine

// // <Todo
// //     completed={true}
// // />

// // Har Todo ke andar

// // const [checked,setChecked]=useState(false)

// // Old

// // A ✔

// // B ❌

// // C ✔

// // Ab beginning me ek item insert.

// // Without proper key

// // React state ko reuse karta hai based on position.

// // Result

// // X ✔

// // A ❌

// // B ✔

// // C ❌

// // State galat item me chali gayi.

// // Isi liye kabhi kabhi checkbox random lagta hai.

// // Ab samajh aya?

// // Why can state move incorrectly?

// // Correct Answer

// // Because React uses the key to identify component instances. When index is used as the key and an item is inserted at the beginning, all subsequent indexes change. React reuses component instances based on those new indexes, so state can become associated with the wrong item.

// // React Reconciliation Algorithm (Simplified)

// // React conceptually does something like this:

// // Old Children

// // ↓

// // New Children

// // ↓

// // Same Type?

// // ↓

// // YES

// // ↓

// // Same Key?

// // ↓

// // YES

// // ↓

// // Reuse Fiber

// // ↓

// // Update Props

// // -------------------

// // Same Type?

// // ↓

// // NO

// // ↓

// // Destroy Old

// // ↓

// // Create New

// // Reconciliation is React's process of comparing the previous Virtual DOM tree with the new Virtual DOM tree to determine the minimum changes required. Keys provide stable identities for elements in lists so React can correctly reuse, move, create, or remove component instances while preserving the correct state.

// // How React Batching Works Internally

// // We'll answer:

// // Why multiple setState() calls sometimes produce only one render.
// // What automatic batching in React 18 is.
// // How React queues state updates.
// // Why this code behaves unexpectedly:
// // setCount(count + 1);
// // setCount(count + 1);

// // console.log(count);

// // React Batching

// // function App() {
// //   const [count, setCount] = useState(0);

// //   function handleClick() {
// //     setCount(count + 1);
// //     setCount(count + 1);

// //     console.log(count);
// //   }

// //   return <button onClick={handleClick}>{count}</button>;
// // }

// // console me 0
// // ui me 1 count

// // React doesnt update immediatly
// // Reacct actually
// // Request state update

// // React Internal Flow

// // as soon as setState() call

// // setState()
// // then
// // put it into Queue
// // and collect updates
// //then render once

// // this is called batching

// // Agar Batching Na Hoti

// // Imagine

// // setCount(1);

// // setName("Priti");

// // setLoading(false);

// // Without batching

// // Render 1

// // ↓

// // Render 2

// // ↓

// // Render 3

// // Teen baar render.

// // CPU waste.

// // With Batching

// // React bolta hai

// // Sab updates collect karo

// // ↓

// // Ek hi render karo

// // Result

// // Render 1

// // Bas.

// // Performance improve.

// // Visula
// // Without Batching
// // setState

// // ↓

// // Render

// // ↓

// // setState

// // ↓

// // Render

// // ↓

// // setState

// // ↓

// // Render

// console.log("*********************");

// // With Batching

// // setState

// // ↓

// // setState

// // ↓

// // setState

// // ↓

// // Render

// // Internally React ky karta hai ?
// // conceptually
// // let updateQueue = [];

// // har
// // setState(...)
// // queue me add hota hai

// // example --->>
// // setCount(1);
// // setCount("Priti");
// // setCount(12);

// // Queue
// // [(count = 1), (name = "priti"), (age = 12)];

// // ab React ek hi bar render kar degaa\

// // code
// // setCount(1);

// // setCount(2);

// // setCount(3);

// // Queue-->
// // 1--> 2-->3

// // React finaaly latest state apply krega
// // Final 3

// // setCount(count + 1);
// // setCount(count + 1);

// // suppose Current count =0
// // first Line
// // setCount(count + 1);

// // Queue->
// // 1

// // second line
// // question
// // current count kitna hai ? still 0
// // Because React ne abhi update apply nhi kiya
// // Again
// // setCount(0 + 1);

// // Queue-->>
// // 1
// // ⤵
// // 1

// // Final state 1 hogi
// // not 2

// // Then How To Increment Twice?

// // React solution
// // Functional Update
// // setCount((prev) => prev + 1);
// // setCount((prev) => prev + 1);

// // dry run -->
// // initial  0
// // Queue-->

// // first
// // prev ⤵
// // 0
// // ⤵
// // 1

// // second
// // prev ⤵
// // 1
// // ⤵
// // 2

// // Final  2
// // Now React uses the updated value from the Queue

// // Why React use Functional Update works ?
// // Because React conceptually executes queued updater functions one after another.
// // Queue ⤵
// // prev=>prev+1
// //⤵
// // prev=prev+1
// // ⤵
// // result  2

// // imagine

// // let state = 0;
// // let queue = [];
// // function setState(update) {
// //   queue.push(update);
// // }

// // // later /
// // queue.forEach((update) => {
// //   if (typeof update === "Function") {
// //     state = update(state);
// //   } else {
// //     state = update;
// //   }
// // });

// // react kuch esa kr rha hoga

// // React 17 vs React 18

// // React 17 automatic batching sirf

// // React Event Handler
// // ke ander hoti thi
// // example -->>button click
// // but

// // setTimeout(() => {
// //   setCount(...)
// // }, 1000);

// // React 17
// // Render --> Render
// // Do Renders

// // React 18

// // // Automatic batching almost har asyncronouse context me bhi apply hoti hai

// // Promise

// // ↓

// // setTimeout

// // ↓

// // fetch

// // ↓

// // Native Events

// // Mostly

// // One Render

// // Promise

// // ↓

// // setTimeout

// // ↓

// // fetch

// // ↓

// // Native Events

// // Mostly

// // One Render

// // "State batching is a performance optimization mechanism in React where multiple state updates are grouped into a single re-render cycle, preventing unnecessary UI rendering and improving application performance.";

// // useMemo() / useCallback();

// // Suppose tumhare paas ye component hai.

// // function App() {
// //   console.log("Render");

// //   function sayHello() {
// //     console.log("Hello");
// //   }

// //   return <Child onClick={sayHello} />;
// // }

// // Question:

// // Har render pe kya sayHello same function rahega?

// // Most beginners bolte hain

// // "Haan"

// // ❌ Wrong.

// // JavaScript Ko Yaad Karo

// // Tumne ye already padha tha.

// // function demo() {}

// // function demo() {}

// // Ye same function nahi hai.

// // Har baar ek naya function object banta hai.

// // Example

// // function App() {

// //     function hello(){}

// // }

// // Render 1

// // Memory

// // hello

// // ↓

// // Address 100

// // Render 2

// // hello

// // ↓

// // Address 200

// // New Function.

// // Render 3

// // hello

// // ↓

// // Address 300

// // Again New Function.

// // React Ke Liye Problem

// // Suppose

// // <App>

// // ↓

// // <Child />

// // Child

// // const Child = React.memo(function Child(){

// //     console.log("Child Render");

// // });

// // React.memo ka matlab

// // Props Same?

// // ↓

// // YES

// // ↓

// // Don't Render

// // Lekin;

// // App;

// // function App() {
// //   function hello() {}

// //   return <Child fn={hello} />;
// // }

// // question
// // har render pe hello() same haoo ?

// // No

// // Memoery ⤵
// // Render 1
// // hello()
// // Address100

// // Render 2
// // hello()
// // Address200

// // React Compare
// // 100 == 200;    false

// // props changed

// // Child render again

// // App Render

// // ↓

// // New Function

// // ↓

// // Child Props Changed

// // ↓

// // Child Render

// // Even though code same

// // Solution --->
// // store previouse function  ,
// // Resuse it

// // this is called
// // useCallback()

// // const hello = useCallback(() => {
// //   console.log("he;llo");
// // }, []);

// // what heppens internally

// // hook = [state, effect, callback];

// // memory ⤵
// // hooks-->function Address100

// // second render
// // React compare  dependency
// // []--> [] same hai
// // return old function
// // doesnt create new function

// // let hooks = [];
// // let hookIndex = 0;
// // function useCallback(fn, dep) {
// //   const old = hook[hookIndex];
// //   if (old) {
// //     const [oldFn, oldDep] = old;
// //     const same = dep.every((d, i) => {
// //       Object.is(d, oldDep[i]);
// //     });
// //     if (same) {
// //       hookIndex++;
// //       return oldFn;
// //     }
// //   }

// //   hook[hookIndex] = [fn, deps];
// //   hookIndex++;
// //   return fn;
// // }

// // Now useMemo()

// // Question

// // Suppose

// // const total = expensiveCalculation(data);

// // Imagine

// // Ye calculation

// // 2 Seconds

// // lagati hai.

// // Har render pe chalegi.

// // Even

// // Typing

// // ↓

// // Calculation

// // Typing

// // ↓

// // Calculation

// // Slow UI.

// // Example
// // function App(){

// // const total = heavy();

// // return <h1>{total}</h1>

// // }

// // Every render

// // heavy()

// // ↓

// // Again

// // ↓

// // Again

// // ↓

// // Again

// // Waste.

// // Solution

// // React says

// // Store result.

// // If dependency same

// // ↓

// // Return old result.

// // Ye hai

// // useMemo()
// // const total = useMemo(() => {
// //   return heavy();
// // }, []);
// // Memory

// // hooks

// // ↓

// // 500

// // ↓

// // []

// // Suppose

// // heavy()

// // returned

// // 500

// // React stores
// // 500

// // second Render
// // Dependency

// // []-->[] equal
// // No heavy () retiurn 500  instant

// // Without useCallback

// // <Child

// // onClick={()=>{

// // console.log("Hello")

// // }}

// // />

// // Every render

// // ↓

// // New Function

// // ↓

// // Child Render

// // With

// // const handleClick = useCallback(()=>{

// // console.log("Hello")

// // },[])

// // ↓

// // Same Function

// // ↓

// // React.memo

// // ↓

// // Child Skip Render

// // const sortedUsers = useMemo(()=>{

// // return users.sort(...)

// // },[users])

// // React Scheduler & Concurrent Rendering

// // React Scheduler is the system responsible for deciding when React should perform rendering work. Instead of rendering everything immediately, it assigns priorities to updates, breaks rendering into small units using Fiber, and allows urgent updates to be processed before less important ones, keeping the UI responsive.

// // Imagine tum Instagram use kar rahe ho.

// // Screen pe

// // 1000 Posts

// // 500 Comments

// // 200 Stories

// // 100 Videos

// // Suddenly user type karta hai

// // Search : "React"

// // Question

// // React kya kare?

// // Option A

// // Render all posts first

// // ↓

// // Then update search

// // Option B

// // Update search immediately

// // ↓

// // Render remaining work later

// // Obviously

// // ✅ Option B
// // Old React

// // Old React rendering

// // ██████████████████████████████

// // Finish

// // ↓

// // Browser gets control

// // User

// // Click

// // ↓

// // Wait...

// // UI lag karti thi.

// // Why?

// // Because JavaScript is

// // Single Threaded

// // // Remember Event Loop.

// // Call Stack

// // ↓

// // React Rendering

// // ↓

// // Busy

// // ↓

// // User Click

// // ↓

// // Waiting...

// // instead of Rendering Everything

// // lets do

// // Render Little
// // pause
// // beowser work
// // Continue

// // this idea become
// // Scheduler

// // update comes like
// // Typing

// // Animation

// // Network

// // Theme Change

// // Notification

// // Scheduler decide

// // which one execute first and which later

// // Updates

// // ↓

// // Scheduler

// // ↓

// // High Priority

// // ↓

// // Medium Priority

// // ↓

// // Low Priority

// // User typing

// // High Priority

// // Analytics update

// // Low Priority

// // React pehle kya karega?

// // Obviously

// // Typing

// // Fiber Connection

// // Remember Fiber?

// // Har component

// // ↓

// // One Fiber Node

// // App

// // ↓

// // Navbar

// // ↓

// // Feed

// // ↓

// // Comments

// // ↓

// // Footer

// // Scheduler says
// // Work on Feed

// // ↓

// // Pause

// // ↓

// // User Typed

// // ↓

// // Handle Typing

// // ↓

// // Continue Feed

// // Question

// // What is Time Slicing?

// // Imagine

// // Teacher homework check kar raha hai.

// // 100 notebooks.

// // Old way

// // Notebook1

// // Notebook2

// // Notebook3

// // ...

// // Notebook100

// // No break

// // Notebook1

// // Notebook2

// // Pause

// // ↓

// // Drink Water

// // ↓

// // Continue

// // Notebook3

// // Notebook4

// // Pause

// // Exactly
// // Time Slicing.

// // Concurrent Rendering means

// // React CAN

// // Pause

// // Resume

// // Restart

// // Discard

// // rendering work.

// // Concurrent Rendering allows React to interrupt rendering work, pause it, resume it later, or discard it if newer updates arrive. This improves responsiveness without using multiple JavaScript threads.

// // Suppose

// // User typing

// // R

// // React starts rendering.

// // Suddenly user types

// // Re

// // Old render

// // R

// // ab useless hai.

// // React kya karega?

// // Discard Old Work

// // ↓

// // Start Latest Work

// // Ye Concurrent Rendering ka power hai.

// // Why does React need Scheduler if Fiber already exists?

// // Correct Answer

// // Fiber breaks rendering into small units of work. Scheduler decides which work should run first, when to pause, and when to resume. Together they enable Concurrent Rendering and keep the UI responsive.

// // React Scheduler is responsible for scheduling rendering work based on priority. Fiber breaks rendering into small units of work, allowing React to pause and resume rendering. Concurrent Rendering uses this capability to interrupt non-urgent rendering, prioritize urgent updates like typing, and keep the UI responsive. APIs like startTransition() let developers mark updates as low priority so user interactions remain smooth even during expensive renders.

// // startTransition()

// // Sabse important API.

// // Suppose

// // Search Box

// // <input />

// // Typing

// // ↓

// // Search Results

// // 10000 Products

// // Question

// // Typing important hai ya list render?

// // Typing.

// // Without transition

// // Type

// // ↓

// // Heavy Render

// // ↓

// // Lag

// // With

// // startTransition(() => {

// // setProducts(newProducts);

// // });

// // React bolta hai

// // Ye urgent nahi hai.

// // ↓

// // Later karenge.

// // Typing smooth.

// // Example
// // function handleChange(e){

// // setInput(e.target.value);

// // startTransition(()=>{

// // setResults(search(e.target.value));

// // });

// // }

// // Priority

// // Input

// // ↓

// // HIGH

// // --------------

// // Results

// // ↓

// // LOW
// // Visual
// // User Types

// // ↓

// // Scheduler

// // ↓

// // Update Input Immediately

// // ↓

// // Render Results Later
// // Urgent vs Non-Urgent Updates

// // Urgent

// // Typing

// // Click

// // Hover

// // Focus

// // Non-Urgent

// // Filtering

// // Sorting

// // Big Lists

// // Analytics

// // Scheduler

// // Urgent

// // ↓

// // First

// // ↓

// // Later

// // ↓

// // Non-Urgent

// //                  Mini React

// //                       │

// //         ┌─────────────┼─────────────┐

// //         │             │             │

// //  createElement()   Renderer     Hooks

// //         │             │             │

// //         ▼             ▼             ▼

// //  React Element   Virtual DOM    useState()

// //         │             │             │

// //         ▼             ▼             ▼

// //      Fiber Tree   Reconciliation  useEffect()

// //         │

// //         ▼

// //    Commit Phase

// // function createElement(type, props, ...children) {}

// // suppose  JSX
// {
//   /* <h1>Hello</h1>; */
// }

// // becomes
// // createElement("h1",null,"hello")

// // React does not create HTML
// // it Creates an Object

// function createElement(type, props, ...children) {
//   return {
//     type,
//     props: {
//       ...props,
//       children,
//     },
//   };
// }

// // const element = createElement(
// //   "h1",

// //   null,

// //   "Hello React"
// // );

// // console.log("React Element Object -------->", element);

// // output
// // {
// //     type:"h1",

// //     props:{

// //         children:[

// //             "Hello React"

// //         ]

// //     }

// // }
// // A React Element is a plain JavaScript object that describes what should appear on the UI. It contains the element type, props, and children. React later uses these elements to build the Fiber tree and eventually update the real DOM.
// // Browser doesn't understand object
// // Need
// // React Element
// // ⤵
// // Real Dom/

// // function render(element) {
// //   const node = document.createElement(element.type);
// //   return node;
// // }

// // const element = createElement(
// //   "h1",

// //   null,

// //   "Hello"
// // );

// // const node = render(element);

// // console.log(node);

// // output --> <h1></h1>

// // Hello kaha gaya?
// // Abhi children handle nahi kiye.

// // Children render
// function render(element) {
//   const node = document.createElement(element.type);
//   element.props.children.forEach((child) => {
//     if (typeof child === "string") {
//       node.appendChild(document.createTextNode(child));
//     }
//   });
//   return node;
// }

// // const element = createElement(
// //   "h1",

// //   null,

// //   "Hello"
// // );

// // document.body.appendChild(render(element));

// // Ab ye render kar sakta hai

// // <h1>Hello</h1>

// // Lekin

// // <div>

// // <h1/>

// // <button/>

// // </div>

// // Nahi.

// // Need recursion.
// // React creates React Elements because JavaScript objects are easy to compare, manipulate, and transform. React uses these objects to build the Virtual DOM and Fiber tree before deciding the minimum DOM updates required.
// // What is React.createElement()?

// // React.createElement() is the function that JSX compiles into. It creates a React Element, which is a plain JavaScript object describing the UI.

// // What is a React Element?

// // A React Element is an immutable JavaScript object containing the element type, props, and children. React uses these elements to build the Virtual DOM and Fiber tree before updating the real DOM.

// // Why doesn't React generate HTML directly?

// // Because JavaScript objects are easier to compare, optimize, and reconcile. React first works with React Elements and only updates the real DOM after reconciliation and the commit phase.

// // A Function Component is a normal JavaScript function that receives props as input and returns a React Element describing the UI. React executes the function during rendering to determine what should be displayed.

// // How does React execute a Function Component?

// // Correct Answer

// // When React encounters a React Element whose type is a function, it calls that function with its props. The function returns another React Element, which React continues rendering recursively until it reaches native DOM elements like div, button, or span

// // Why did React introduce Fiber?

// // React introduced Fiber to break rendering into small units of work. This allows rendering to be paused, resumed, prioritized, or discarded, enabling features such as concurrent rendering, time slicing, and improved UI responsiveness.

// // What is the React Work Loop?

// // The React Work Loop is the process that traverses the Fiber tree one Fiber at a time. Each Fiber represents a unit of work. React processes one Fiber, determines the next Fiber (child, sibling, or parent), and continues until all work is complete before entering the commit phase.

// // Why doesn't React simply use recursion?

// // Recursion would block the JavaScript thread until rendering completed. React uses an explicit work loop so rendering can be paused, resumed, prioritized, or interrupted, enabling concurrent rendering and smoother user experiences.

// // React Elements

// // ↓

// // Fiber Tree

// // ↓

// // Render Phase

// // ↓

// // Work In Progress Tree

// // ↓

// // Commit Phase

// // ↓

// // Real DOM

// // ↓

// // Browser Paint

// // Sabse Important Rule
// // Render Phase

// // Render phase me

// // React

// // ✔ Build karta hai

// // ✔ Compare karta hai

// // ✔ Calculate karta hai

// // ✔ Decide karta hai

// // Lekin

// // ❌ Screen touch nahi karta.

// // Commit Phase Starts

// // Render complete.

// // React bolta hai

// // Everything Ready?

// // ↓

// // YES

// // ↓

// // Swap Trees

// // ↓

// // Update DOM

// // Ab screen badlegi.

// // Three Types of DOM Operations

// // Commit phase me React mainly teen kaam karta hai.

// // 1. Placement

// // New node.

// // Example

// // Old

// // <ul>

// // <li>A</li>

// // </ul>

// // New

// // <ul>

// // <li>A</li>

// // <li>B</li>

// // </ul>

// // Need

// // Create

// // ↓

// // Append

// // React internally

// // parent.appendChild(child);

// // Ye Placement hai.

// // 2. Update

// // Old

// // <h1>Hello</h1>

// // New

// // <h1>Priti</h1>

// // Need

// // Update Text

// // React

// // textNode.nodeValue = "Priti";

// // No new element.

// // Only update.

// // 3. Deletion

// // Old

// // <button/>

// // New

// // <div/>

// // Need

// // Remove Button

// // React

// // parent.removeChild(button);

// // Deletion.

// // Visual
// // Commit

// // ↓

// // Placement

// // ↓

// // Update

// // ↓

// // Deletion

// // Ye teen hi main DOM mutations hain.

// // Why Can't Commit Pause?

// // Question

// // Render pause ho sakta hai.

// // Commit kyu nahi?

// // Imagine

// // Screen

// // Header

// // Content

// // Footer

// // React

// // Update Header

// // Pause

// // User sees

// // New Header

// // Old Content

// // Old Footer

// // UI toot jayegi.

// // Isliye

// // Commit

// // ↓

// // Atomic.

// // Ek hi baar complete.

// // What is Commit Phase?

// // The Commit Phase is the stage where React applies all calculated changes from the Render Phase to the real DOM. It performs DOM mutations such as placement, updates, and deletions, runs layout effects before paint, and passive effects after paint. Unlike the Render Phase, the Commit Phase cannot be interrupted.

// // Why is Commit Phase non-interruptible?

// // Correct Answer

// // Because partially applying DOM updates would leave the UI in an inconsistent state. React completes all DOM mutations atomically before allowing the browser to paint the updated screen.

// //                    Browser

// //                       │

// //                       ▼

// //                ReactDOM.render()

// //                       │

// //                       ▼

// //              Create Root Fiber

// //                       │

// //                       ▼

// //               Schedule Update

// //                       │

// //                       ▼

// //                 Work Loop

// //                       │

// //       ┌───────────────┴──────────────┐

// //       ▼                              ▼

// //  Render Phase                  Commit Phase

// //       │                              │

// //       ▼                              ▼

// // Build Fiber Tree             Update Real DOM

// //         │                              │

// //       └───────────────┬──────────────┘

// //                       ▼

// //                Browser Paint

// // What is Double Buffering?

// // React maintains two Fiber trees: the Current Tree (displayed on the screen) and the Work-In-Progress Tree (being built during rendering). Once rendering is complete, React swaps the trees during the commit phase, ensuring the UI is updated atomically without displaying partially rendered content.

// // Explain React Rendering Pipeline

// // Best Answer

// // When a React component is rendered, JSX is first compiled into React Elements. React creates or updates the Fiber tree and schedules work through the Scheduler. During the Render Phase, React builds the Work-In-Progress Fiber tree, performs reconciliation, and prepares DOM changes without mutating the real DOM. Once rendering completes, the Commit Phase applies DOM mutations atomically, after which the browser performs layout, paint, and composite to display the updated UI.

// //          JSX

// //           │

// //           ▼

// //   React.createElement()

// //           │

// //           ▼

// //    React Elements

// //           │

// //           ▼

// //     Root Fiber

// //           │

// //           ▼

// //      Scheduler

// //           │

// //           ▼

// //   Work Loop (DFS)

// //           │

// //           ▼

// //  Work In Progress Tree

// //           │

// //           ▼

// //   Reconciliation

// //           │

// //           ▼

// //   Commit Phase

// //           │

// //           ▼

// //     Real DOM

// //           │

// //           ▼

// //   Browser Paint

// // useRef is React's way of storing a mutable value that survives re-renders without causing a re-render.

// // function App() {
// //   let count = 0;
// //   function click() {
// //     count++;
// //     console.log(count);
// //   }
// //   return <button onClick={click}>click</button>;
// // }

// // ager component dobara render hua

// // count  ky hoga ?
// // ans =0
// // because function execute again

// // Memory

// // Render 1

// // count = 0

// // --------------

// // Render 2

// // count = 0

// // --------------

// // Render 3

// // count = 0

// // Har render pe naya variable.

// // React says
// // state ki tarh value ko component ke wahar store krte hai
// // but...

// // question   kya har value change pe ui update karna zaroori hai

// // suppose
// // Scroll Position
// // mouse position
// // timer id
// // dom reference

// // ui ko update karna  hai ?   no

// // to fir useState() kyun use kare ?

// // Need

// // Persistent Value
// // +
// // No re -render

// // function App() {

// //     const ref = useRef(0);

// //     console.log(ref);

// // }

// // Question

// // Output?

// // Conceptually

// // {
// //     current: 0
// // }

// // Notice

// // React number return nahi karta.

// // Object return karta hai

// // Why Object?

// // why not
// // return 0
// // because
// // javascript me primitive 0 hota haia

// // Object
// // {
// // current :0
// // }

// // reference hota

// // Reference survive karta hai

// // ref

// // ↓

// // Address 100

// // ↓

// // {

// // current:0

// // }

// // Next render

// // Same Address

// // ↓

// // {

// // current:0

// // }

// // Object same.

// // Changing current
// // ref.current = 100;

// // Memory

// // Before

// // {

// // current:0

// // }

// // After

// // {

// // current:100

// // }

// // Object same.

// // Sirf property badli.

// // What is useRef?

// // useRef is a React Hook that returns a persistent mutable object whose .current property survives component re-renders. Updating .current does not trigger a re-render because React does not schedule updates for ref mutations. It is commonly used for DOM references, storing mutable values, timers, and previous state values.

// // Why doesn't changing ref.current cause a re-render?

// // Because React only schedules rendering for state updates. A ref is just a mutable object stored on the Fiber. Changing its .current property mutates the object directly, but React is not notified, so no render is scheduled.

// // suppose
// function Input() {
//   return <input />;
// }

// function App() {
//   const inputRef = useRef();
//   return <Input ref={inputRef} />;
// }

// // kya
// //inputRef.current

// // me input DOM aa jayega ?

// // why ?
// // Remember
// // React Element

// {
//   /* <Input /> */
// }

// // compile hota hai
// // createElement(Input, {
// //   ref: inputRef,
// // });

// // que
// // Input kya hai ?
// // Function Component

// // Not DOM

// // React directly

// // Function  component
// //⤵
// // DOM nahi hota

// {
//   /* <App />; */
// }
// // ⤵
// // Input()
// // ⤵
// // {
// //   /* <input/> */
// // }

// // Ref kis pe lag gya

// // ?
// // Input Function

// // but Function Component ka DOM hi nhi hota

// // Browser

// // browser sirf ye samajhta hai
// {
//   /* <input/> */
// }

// // na ki
// {
//   /* <Input/> */
// }

// // isiliy /
// {
//   /* <Input ref ={inputRef}/> */
// }

// // directly work nhi karta

// // Solution

// // React says

// // Hum ref ko manually forward karenge
// // forwardRef ()

// // const Input = React.forwardRef((props, ref) => {
// //   return <input ref={ref} />;
// // });

// // Ab
// // function App(){
// //   const inputRef=useRef();
// //   return <Input ref={inputRef}/>
// // }
// // works

// // ref

// // ↓

// // forwardRef()

// // ↓

// // Child

// // ↓

// // <input>

// // ↓

// // DOM

// // ↓

// // inputRef.current

// // What is forwardRef?

// // forwardRef allows a parent component to pass a ref through a function component to one of its child DOM elements or child components. Since function components do not expose DOM instances by default, forwardRef enables ref forwarding.

// // What is useImperativeHandle?

// // useImperativeHandle customizes the value exposed through a forwarded ref. Instead of exposing the entire DOM node, a component can expose a controlled imperative API, such as focus(), clear(), or open().

// // useReducer is a React Hook used for managing complex state logic. Instead of directly updating state, actions are dispatched to a reducer function, which calculates and returns the next state. React then schedules a re-render with the updated state.

// Suppose;

// const [count, setCount] = useState(0);

// function increment() {
//   setCount(count + 1);
// }

// function decrement() {
//   setCount(count - 1);
// }

// function reset() {
//   setCount(0);
// }
const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };

    case "decrement":
      return {
        count: state.count - 1,
      };

    default:
      return state;
  }
}

// Notice

// Reducer

// ↓

// Current State

// Action

// ↓

// New State

// Difference between useState and useReducer?

// useState is ideal for simple, independent state updates, while useReducer is better for complex state logic where multiple actions modify the same state. useReducer centralizes update logic inside a reducer function and uses dispatch to trigger state changes.

// Why is dispatch stable?

// Question

// Why doesn't

// dispatch

// change every render?

// Because React creates the dispatch function once and keeps the same function reference on the hook's update queue. Each render reuses that dispatch function while reading the latest state from the Fiber.

// This stability is why you usually don't need to include dispatch in dependency arrays.

// useContext is a React Hook that allows components to read data from the nearest matching Context Provider without passing props manually through every intermediate component.

// Context = Global Data for a Component Tree

// Suppose tumhare paas ye hierarchy hai.

// App
// │
// ├── Dashboard
// │
// ├── Sidebar
// │
// ├── Menu
// │
// ├── UserProfile
// │
// └── Avatar

// Suppose User Login hua.

// User Data

// {
//    id:1,
//    name:"Priti",
//    role:"Admin"
// }
// Sirf

// Avatar

// ko chahiye.

// Question

// User data App se Avatar tak kaise jayegi?

// Without Context
// <App
//  user={user}
// />

// ↓

// <Dashboard
//  user={user}
// />

// ↓

// <Sidebar
//  user={user}
// />

// ↓

// <Menu
//  user={user}
// />

// ↓

// <UserProfile
//  user={user}
// />

// ↓

// <Avatar
//  user={user}
// />

// Har component

// user

// forward kar raha hai.

// Need bhi nahi hai.

// Ye problem kehlati hai

// Prop Drilling

// Step 1

// Create Context

// const UserContext =
// React.createContext();

// Question

// Internally kya banta hai?

// Conceptually

const context = {
  currentValue: undefined,
};

// Ek object.

// Step 2

// Provider

// <UserContext.Provider  value={user}/ >
// <App/>
// </UserContext.Provider>

// Question

// Provider kya karta hai?

// Internally
// context.currentValue=user;

// UserContext

// ↓

// {

// currentValue

// ↓

// {

// name:"Priti"

// }

// }

// Step 3

// Consumer

// const user = useContext(
// UserContext
// );

// React

// return context.currentValue;

// Done.

// Dry Run

// Current

// context.currentValue = {

// name:"Priti"

// }

// Consumer

// const user = useContext(
// UserContext
// );

// Return

// {

// name:"Priti"

// }
// Tiny Implementation
// function createContext(value){

//     return{

//         currentValue:value

//     };

// }

// Provider

// context.currentValue = value;

// useContext

// function useContext(context){

//     return context.currentValue;

// }

// Obviously

// Real React

// ↓

// Much Bigger.

// Fiber Connection

// Question

// React ko kaise pata

// Kaun use kar raha?

// Answer

// Fiber.

// Every Consumer Fiber stores

// Context Dependency

// Visual

// App Fiber

// ↓

// Dashboard Fiber

// ↓

// Avatar Fiber

// ↓

// Uses UserContext
// Memory
// Avatar Fiber

// ↓

// Dependencies

// ↓

// UserContext

// React remembers.

// Context Update

// Suppose

// Provider

// Old

// {

// name:"Priti"

// }

// New

// {

// name:"Rahul"

// }

// Question

// Kya hoga?

// React

// ↓

// Marks all consumers.

// ↓

// Render.

// Visual
// Provider Changed

// ↓

// Avatar

// ↓

// Navbar

// ↓

// Profile

// ↓

// Settings

// ↓

// Render

// Every consumer.

// Biggest Interview Question
// Does every component re-render?

// Suppose

// App

// │

// ├── Header

// ├── Sidebar

// ├── Avatar

// ├── Footer

// Only

// Avatar

// uses context.

// Question

// Provider changes.

// Will Header render?

// No.

// Only consumers render.

// BUT...

// Suppose

// Header

// ↓

// useContext()

// Even if Header only reads

// user.name

// and only

// user.age

// changed.

// Question

// Will Header render?

// YES.

// Important.

// Context compares

// Reference

// Not individual fields.

// Example
// value={{

// name,

// age

// }}

// Every render

// ↓

// New Object.

// ↓

// All consumers render.

// Solution
// const value = useMemo(
// ()=>({

// name,

// age

// }),
// [name,age]
// );

// Now

// Reference stable.

// Less renders.

// React Internally

// Provider

// ↓

// Stores value

// ↓

// Consumers subscribe

// ↓

// Provider changes

// ↓

// React traverses Fiber tree

// ↓

// Find dependent Fibers

// ↓

// Schedule updates

// Visual
// Provider

// ↓

// Fiber Tree

// ↓

// Consumer1

// Consumer2

// Consumer3

// ↓

// Schedule Render
// Why Redux Faster?

// Interview Favourite.

// Question

// Context

// ↓

// All consumers render.

// Redux

// ↓

// Only changed selector.

// How?

// Redux maintains subscriptions.

// Store

// ↓

// Selector

// ↓

// Compare

// ↓

// Only Needed Component

// Context

// ↓

// Provider

// ↓

// Everyone.

// Memory Diagram
// Fiber

// ↓

// Context Dependencies

// ↓

// UserContext

// ↓

// ThemeContext

// ↓

// LanguageContext
// Nested Context

// Suppose

// <ThemeProvider>

// <UserProvider>

// <App/>

// </UserProvider>

// </ThemeProvider>

// Tree

// Theme

// ↓

// User

// ↓

// App

// Consumer

// const theme = useContext(
// ThemeContext
// );

// const user = useContext(
// UserContext
// );

// React reads nearest Provider.

// Nearest Provider Rule

// Example

// <UserContext.Provider

// value="Admin"

// >

// <Component>

// <UserContext.Provider

// value="Guest"

// >

// <Child/>

// </UserContext.Provider>

// </Component>

// </UserContext.Provider>

// Question

// Child gets?

// Answer

// Guest

// Nearest Provider wins.

// Visual
// Admin

// ↓

// Component

// ↓

// Guest

// ↓

// Child

// Child

// ↓

// Guest.

// Interview Definition ⭐⭐⭐⭐⭐
// What is Context?

// Context is a mechanism for sharing data across a React component tree without manually passing props through every intermediate component. Components read the nearest matching Provider using useContext.

// Interview Question ⭐⭐⭐⭐⭐
// Why does Context cause re-renders?

// Correct Answer

// When a Provider's value changes, React compares the new value with the previous value. If the reference changes, React schedules updates for all consuming components that depend on that context.

// Interview Question ⭐⭐⭐⭐⭐
// Difference between Context and Redux?
// Context	Redux
// Built into React	External library
// Avoids prop drilling	Full state management
// All consumers update when context value changes	Selector-based updates
// Best for Theme/Auth/Locale	Best for complex global state
// Complete Flow
// createContext()

// ↓

// Provider

// ↓

// Store Value

// ↓

// Consumer

// ↓

// useContext()

// ↓

// Fiber Dependency

// ↓

// Provider Update

// ↓

// Consumer Re-render
// Real Example

// Theme

// <ThemeProvider>

// <App/>

// </ThemeProvider>

// Button

// const theme = useContext(
// ThemeContext
// );

// Provider

// value="dark"

// Button

// ↓

// Dark.

// Provider

// ↓

// Light.

// ↓

// Button renders again.

// Dry Run Challenge

// Predict what happens:

// const ThemeContext = createContext("light");

// function Header() {
//   const theme = useContext(ThemeContext);
//   console.log("Header Render");
//   return <h1>{theme}</h1>;
// }

// function Footer() {
//   console.log("Footer Render");
//   return <footer>Footer</footer>;
// }

// function App() {
//   const [theme, setTheme] = useState("light");

//   return (
//     <ThemeContext.Provider value={theme}>
//       <Header />
//       <Footer />
//     </ThemeContext.Provider>
//   );
// }

// Now

// setTheme("dark");
// Questions
// Which component re-renders?
// Does Footer re-render?
// Why?
// What happens if Header no longer calls useContext?
// 🎓 React Hook Memory
// useState
//       │
//       ▼
// useReducer
//       │
//       ▼
// useEffect
//       │
//       ▼
// useMemo
//       │
//       ▼
// useCallback
//       │
//       ▼
// useRef
//       │
//       ▼
// forwardRef
//       │
//       ▼
// useImperativeHandle
//       │
//       ▼
// useContext

// Internet

// ↓

// HTML

// ↓

// Browser

// ↓

// Parser

// ↓

// DOM Tree

// ↓

// CSSOM

// ↓

// Render Tree

// ↓

// Layout

// ↓

// Paint

// ↓

// Screen

// Topics

// Browser Rendering Pipeline
// HTML Parser
// CSS Parser
// DOM Tree
// CSSOM
// Render Tree
// Layout (Reflow)
// Paint
// Composite

// What is DOM ?

// HTML -->DOM Tree--->Javascript--->Modify Tree---> Browser Update UI

// What is DOM?
// Why DOM Exists?
// DOM vs HTML
// DOM vs Virtual DOM
// DOM Nodes
// Node Tree
// Parent Child Relationship

// Selecting Elements

// document.getElementById();
// document.getElementsByClassName();
// document.getElementsByTagName();
// querySelector();
// querySelectorAll();

// getElementById;
// getElementsByClassName;
// getElementsByTagName;
// getElementsByName;
// querySelector;
// querySelectorAll;

// Difference

// HTMLCollection

// vs

// NodeList

// Live vs Static Collection

// DOM Traversing

// Tree navigation.
// Parent
// ↓
// Children
// ↓
// Sibling

// Methods;⤵
// parentNode;
// parentElement;
// children;
// childNodes;
// firstChild;
// firstElementChild;
// lastChild;
// nextSibling;
// nextElementSibling;
// previousSibling;
// closest();
// matches();

// Reading Content⤵
// Difference
// innerHTML
// textContent
// innerText

// value
// checked
// selected

// Changing Content⤵
// element.innerHTML

// element.textContent

// element.innerText

// Difference

// Performance
// Security
// XSS
// Parsing Cost

// Attributes;

// Methods;⤵
// getAttribute();
// setAttribute();
// removeAttribute();
// hasAttribute();
// toggleAttribute();
// Also;
// dataset;
// data - id;
// data - user;

// Styling;
// style;

// className;
// classList;
// Methods;

// add();
// remove();
// toggle();
// replace();
// contains()
//
//

// Creating Elements
// createElement()

// createTextNode()
// append()
// appendChild()
// prepend()
// before()
// after()
// replaceWith()
// cloneNode()
// remove()
// Browser Internals
// How browser inserts node.;

// Events ⭐⭐⭐⭐⭐

// One of the biggest topics.

// click
// submit
// input
// change
// keydown
// keyup
// mouseenter
// mouseleave
// scroll
// resize

// Event Flow
// Capture
// ↓
// Target
// ↓
// Bubble

// stopPropagation()
// preventDefault()
// stopImmediatePropagation()
//
//
// Event Delegation

// Very important.

// Instead of
// 1000 Listeners
// Use
// 1 Listener
// Topics
// event.target
// event.currentTarget
// matches()
// closest()
//
//
//
//

// Forms;
// input;
// textarea;
// select;
// checkbox;
// radio;
// Validation;
// required;
// pattern;
// min;
// max;

///
//
//
// Browser Storage
// Cookies
// ↓
// LocalStorage
// ↓
// SessionStorage

//
//
//
//
// DOM Performance ⭐⭐⭐⭐⭐

// Topics
// Reflow
// Repaint
// Layout Thrashing
// DocumentFragment
// Debouncing
// Throttling

//
//
//
//
// Browser APIs

// Intersection Observer
// Mutation Observer
// Resize Observer
// Clipboard
// Fullscreen
// History
// Navigator

//
//
//
//

// DOM Animation
// requestAnimationFrame()
// setTimeout()
// setInterval()
// CSS Animation
// Web Animation API

//
//
//
//
//
// Accessibility
// ARIA

// Tabindex

// Focus

// Keyboard Navigation
//
//
//
//
//

// Shadow DOM
// Custom Elements

// Shadow DOM

// Web Components

// DOM Projects

// We'll build:

// Todo App
// Notes App
// Image Slider
// Modal
// Accordion
// Tabs
// Calculator
// Drag & Drop
// Kanban Board
// Infinite Scroll
// Chat UI
// Virtualized List

//
//
//
// DOM Mental Model
// HTML File

//       │

//       ▼

// HTML Parser

//       │

//       ▼

// DOM Tree

//       │

//       ▼

// JavaScript

//       │

//       ▼

// DOM Manipulation

//       │

//       ▼

// Browser Rendering Engine

//       │

//       ▼

// Layout

//       │

//       ▼

// Paint

//       │

//       ▼

// Screen

//
//
//
//

// HTML Parser internally kaise kaam karta hai
// DOM Node kya hota hai
// Element Node vs Text Node vs Comment Node
// Browser HTML ko objects me kaise convert karta hai
// JavaScript document object kahan se aata hai
// DOM Tree memory me kaise store hoti hai
//
//
//
// <!DOCTYPE html>
// <html>
// <head>
//     <title>DOM</title>
// </head>
// <body>
//     <h1>Hello</h1>
//     <p>Welcome</p>
// </body>
// </html>

//
//
//
// Question

// Browser ko ye kaise samajh aata hai?

// Kya browser HTML directly screen pe dikha deta hai?

// ❌ NO

// Browser pahle html ko parse krata hai

///
//
//

//             Chrome Browser

//                  │

//      ┌───────────┴───────────┐

//      │                       │

//  Rendering Engine      JavaScript Engine

//      │                       │

//      ▼                       ▼

//   HTML Parser             V8 Engine

//      │

//      ▼

//   DOM Tree

//
//
//
// Remember
// Chrome ke andar
// JavaScript aur HTML alag systems hain.

//
//
//
//
//
// HTML Parser

// Question
// Parser kya hota hai?
// Simple Definition

// Parser is a program that reads text and converts it into structured objects.
//
//
// Input

// <h1>Hello</h1>

// Parser

// ↓

// Output
// Element
// ↓
// Type
// ↓
// h1
// ↓
// Text
// ↓
// Hello

// HTML ab string nahi rahi.

// Object ban gaya.

//
//
//
// Visual ⤵️⤵
// HTML File
// ↓
// "<h1>Hello</h1>"
// ↓
// HTML Parser
// ↓
// JavaScript Objects
// ↓
// DOM Tree

//
//
//
//
// Browser Reading Process
// Browser HTML ko
// ek hi baar pura nahi padhta.
// Ye line by line padhta hai.

// Imagine

{
  /* <html>
  <body>
    <h1>Hello</h1>
  </body>
</html>; */
}

// step 1
// browser reads
{
  /* <html> */
}
// Creates
// HTML Node

//
//
// step 2
// Reads
// <body />
// Creates
//Body Node

// Connects
// HTML ⤵
// ⤵
// Body

//
//
// step3
// Reads
//<h1/>

// Creates
// H1 Node
//
//
// Tree-->>
// HTML
// ⤵
// Body
// ⤵
// H1

//
//
// step 4
// Reads
// Hello
// Question ? hello kya hai
// Element ? No
// Text Node  hai

//
//
// Tree

// HMTL
// ⤵
// Body
// ⤵
// H1
// ⤵
// Text

//
//
// DOM Tree

// Final

// Document

// │

// └── html

//       │

//       ├── head

//       │

//       │── title

//       │

//       │── Text

//       │

//       └── body

//              │

//              ├── h1

//              │

//              │── Text

//              │

//              └── p

//                    │

//                    Text

//
//
//
// DOM sirf Elements nahi hota.

// DOM contains

// Document
// Element
// Text
// Comment
// Attribute
// Sab Nodes hain.

//
//
//
//Types of Nodes

// Internally
// Element Node
// ↓
// H1
// ↓
// Text Node
// ↓
// Hello
// Notice
// Hello
// Element nahi hai.
// Text Node hai.

//
//
// <!-- Hello -->

// Browser
// Comment Node
// Banata hai.
//
//
//
//
//
//
// document
// kahan se aaya?
// Tumne kabhi
// const document = ...
// likha?
// No.
// Browser automatically deta hai.

//
//

// Browser Creates document

// Conceptually

// window.document

// Window ke andar

// Document object already hota hai.

// Visual
//
//
// Window

// │

// ├── document

// ├── console

// ├── alert

// ├── fetch

// ├── localStorage

// Everything browser provides.

//

//
//
// document Object

// Question

// document

// actually kya hai?

// Answer

// Root Node.

// Visual

// Document

// ↓

// HTML

// ↓

// BODY

// ↓

// DIV

// ↓

// BUTTON

// Sab

// Document ke niche.

// Example
// console.log(document);

// Output
// #document
//
//

// Question

// Ye kya hai?

// Whole DOM Tree.

// Browser Internally

// Conceptually

// document = {

// documentElement: html,

// head: ...,

// body: ...

// }

// Ye simplified representation hai.

// Why Tree?

// Question

// Why browser tree use karta hai?

// Imagine

// <div>

// <h1>

// <span>

// Hello

// </span>

// </h1>

// </div>
//
//
//
// Ye naturally

// Parent

// ↓

// Child

// ↓

// Grandchild

// structure hai.
//
//
// Best Data Structure?

// Tree.

// Exactly.

// DSA Connection

// Remember Trees?
//
//
// Root

// ↓

// Child

// ↓

// Grand Child

//
//

// DOM

// ↓

// Exactly Tree.

// Visual
// Document

// ↓

// HTML

// ↓

// BODY

// ↓

// DIV

// ↓

// H1

// ↓

// SPAN

// ↓

// TEXT
//
//
//
//
// Browser Rendering

// Question

// DOM ban gaya.

// Screen kab banegi?

// Still

// No.

// Need
//
//
// DOM

// +

// CSSOM

// ↓

// Render Tree

// ↓

// Layout

// ↓

// Paint

//
//
//
//
//
//
//
//
//
//
//
// DOM vs HTML
// HTML

// <h1>Hello</h1>
// Static File.
//
//
// DOM

// Object

// ↓

// Memory

// ↓

// Can Change

// HTML disk pe.

// DOM RAM me.

//
// //
// HTML

// <h1>Hello</h1>

// JavaScript

// document.querySelector("h1")
//         .textContent = "Priti";

// Question

// HTML file change hui?

// NO.

// Sirf DOM.

// Browser screen update hui.

//
//
//
//
//
// Imagine

// const html = "<h1>Hello</h1>";

// Parser

// ↓

// Creates

// const node = {

// type: "h1",

// children: [

// {

// type:"text",

// value:"Hello"

// }

// ]

// };

// Exactly concept.

// Interview Definition ⭐⭐⭐⭐⭐
// What is DOM?

// The Document Object Model (DOM) is a tree-like, in-memory representation of an HTML document. The browser creates it by parsing HTML, and JavaScript interacts with this object model to read and modify the page dynamically.
//
//
//
// Difference between HTML and DOM?
// HTML	DOM
// Static document	Live object model
// Stored on disk	Stored in memory (RAM)
// Cannot change by itself	JavaScript can modify it
// Source code	Runtime representation
//
//
//
// Why is DOM represented as a tree?

// Answer

// HTML is hierarchical, with parent-child relationships between elements. A tree data structure naturally models these relationships and allows efficient traversal, insertion, deletion, and updates.
//
//
//
//
//
//
// DOM me Sab Kuch Node Hai

// Ye line yaad rakhna.

// Everything inside the DOM is a Node.

// Visual
// DOM

// │

// ├── Document Node

// ├── Element Node

// ├── Text Node

// ├── Comment Node

// └── Attribute Node
//
// Node is the base class
//
//
// //
// Node Types

// Browser internally har node ko ek number deta hai.

// Node Type	Value
// Element	1
// Attribute	2
// Text	3
// Comment	8
// Document	9

//
//
//
// const h1 = document.querySelector("h1");
// console.log(h1.nodeType);
//  output - 1  because Element Node
//
//
// Text Node
// Question
// <h1>Hello</h1>
// Hello kya hai?
// Element?// NO.  ....  Text Node hai

// JavaScript

// const h1 = document.querySelector("h1").firstChild;
// console.log(h1.nodeType);

// output - 3
// Text Node

//
//
//
//
// Document Node

// Question

// console.log(document.nodeType);

// Output

// 9

// Document Node.

//
//
//
//
//
// Comment Node

// HTML

// <!-- Hello -->

// JavaScript-->
// const comment =
// document.body.childNodes[0];

// console.log(comment.nodeType);

// Output

// 8
//
//
//
//
// nodeName

// Question

// Browser ko kaise pata

// ye H1 hai?

// Property

// node.nodeName

// Example

// const h1 = document.querySelector("h1");

// console.log(h1.nodeName);

// Output

// H1
//
//
//
// Text

// console.log(
// document.querySelector("h1")
// .firstChild.nodeName
// );

// Output

// #text

// Document

// document.nodeName

// Output

// #document//
//
//
//
//
//
// nodeValue

// Question

// Text kaha store hota hai?

// Property

// node.nodeValue

// Example

// const text =
// document.querySelector("h1")
// .firstChild;

// console.log(text.nodeValue);

// Output

// Hello
//
//
//
//
// document.querySelector("h1")
// .nodeValue

// Output?

// null

// Because

// Element node ka nodeValue nahi hota.

//
//
//
//
// Parent Relationship

// Suppose

// <div>

// <h1>Hello</h1>

// </div>

// Tree

// DIV

// ↓

// H1

// ↓

// TEXT

// Question

// H1 ka parent?

// h1.parentNode

// Output

// DIV

// Text ka parent

// text.parentNode

// Output

// H1
//
//
//

// Child Relationship

// Suppose

// <div>

// <h1>Hello</h1>

// <p>World</p>

// </div>

// Tree

// DIV

// ├── H1

// └── P

// JavaScript

// div.children

// Output

// [H1,P]

// Only Elements.

//
//
//
// Question

// div.childNodes

// Output?

// Actually

// Text

// H1

// Text

// P

// Text

// Because whitespace bhi Text Node hota hai.

//
//
//
//
//
//
// Difference between

// children

// and

// childNodes
// children

// Returns

// Only Elements

// Example

// <div>

// <h1>Hello</h1>

// <p>World</p>

// </div>

// Output

// H1

// P
// childNodes

// Returns

// Everything

// Elements

// Text

// Comments

// Whitespace
//
//
//
//
// Visual

// HTML

// <div>
//    <h1>Hello</h1>
//    <p>World</p>
// </div>

///
// Browser actually sees

// DIV

// ↓

// Text

// ↓

// H1

// ↓

// Text

// ↓

// P

// ↓

// Text

//
//
//
//
// Why?

// Because

// HTML formatting

// <div>

// </div>

// contains

// New Line

// Spaces

// Browser

// ↓

// Text Node.
//
//
//
// firstChild

// Question

// div.firstChild

// Output

// May be

// #text

// Because first node

// ↓

// Whitespace.

//
//
//
//
//
// firstElementChild

// Output

// H1

// Always first Element.
//
//
//
// Same for Last
// lastChild

// ↓

// Text

// lastElementChild

// ↓

// P
//
//
//
//
//
//
// Siblings

// Tree

// DIV

// ├── H1

// └── P

// JavaScript

// h1.nextElementSibling

// Output

// P
// p.previousElementSibling

// Output

// H1
//
//
//
//
//
//
//
// closest()

// Suppose

// <div class="card">

// <button>

// Click

// </button>

// </div>

// JavaScript

// button.closest(".card")

// Output

// DIV.card
//
//
//
// matches();
// button.matches(".btn");

// Output;

// true;

// or;

// false;

//
//
//
//
// Difference between Node and Element?

// Answer

// Every Element is a Node, but not every Node is an Element. Nodes include Documents, Elements, Text nodes, Comments, and more. Elements specifically represent HTML tags.

//
//
//
//
// Difference between children and childNodes?
// children	childNodes
// Only Element nodes	All node types
// Ignores text/comments	Includes text/comments
// HTMLCollection	NodeList
//
//
//
// Why does firstChild sometimes return #text?

// Because browsers preserve whitespace (spaces and newlines) as Text Nodes in the DOM. Therefore, the first node may be a Text Node rather than an Element.
//
//
//
//
//
//
//
//
//
// Suppose HTML

// <body>
// <h1 id="title">Hello</h1>
// <p class="text">One</p>
// <p class="text">Two</p>
// <button>Click</button>
// </body>

// Question
// JavaScript ko

// <h1>

// ka object kaise milega?
// Need

// Search

// ↓

// DOM Tree

// ↓

// Return Node

// Isi liye browser different search methods deta hai.
// Document
// │
// └── HTML
//       │
//       └── BODY
//              │
//              ├── H1
//              │
//              ├── P
//              │
//              ├── P
//              │
//              └── BUTTON
// javscript isi tree me search krega

// Method 1
// getElementById()
// const title = document.getElementById("title");
// console.log(title);

// output -->>
{
  /* <h1 id="title">Hello</h1>; */
}

///
//
// Browser Internals

// Question

// Browser itna fast kaise dhoond leta hai?

// Internally browser IDs ka index maintain karta hai.

// Conceptually

idMap = {
  title: hiNode,
  login: buttonNode,
  header: divNode,
};

// jab hum likhte hai
// document.getElementById("title")
// browser directly
// return idMap["title"]
// No Tree Traversal
//
//
//

// very fast

// Why IDs Should Be Unique?

// Suppose

// <h1 id="title"></h1>

// <p id="title"></p>

// Question

// Kaunsa return karega?

// Browser first matching element return karega.

// Isliye

// HTML specification ke hisaab se IDs unique honi chahiye.
//
///
//
//
//
// Method 2
// getElementsByClassName()

// Example

// const items =
// document.getElementsByClassName("text");

// Output

// HTMLCollection

// ↓

// P

// ↓

// P

// Notice
// Collection return hua.
// Ek element nahi.
//
//
//
//
//
//
// Method 3
// getElementsByTagName()

// Example

// const pTags =
// document.getElementsByTagName("p");

// Output

// HTMLCollection

// ↓

// P

// ↓

// P
//
//

// Search

// Tag == P ?

// ↓

// YES

// ↓

// Store
//
//
//
//
//
//
//
//
//
// Method 4 ⭐⭐⭐⭐⭐
// querySelector()

// Most used.

// Example

// const h1 =
// document.querySelector("#title");

// OR

// document.querySelector(".text");

// OR

// document.querySelector("button");

// OR

// document.querySelector("div button");

// Question

// Return?

// Only

// First Match
//
//
//
//
//
// Method 5 ⭐⭐⭐⭐⭐
// querySelectorAll()

// Example

// const all =
// document.querySelectorAll(".text");

// Output

// NodeList

// ↓

// P

// ↓

// P

// Difference

// Returns

// All Matches
//
//
//
//
// querySelector	|querySelectorAll
// First Match	   |  All Matches
// Element	        |   NodeList
//
//
//
//
//
// HTMLCollection

// Returned by

// getElementsByClassName()

// getElementsByTagName()

// children

// Features

// Only Elements

// Live Collection
//
//
//
//
//
//
// NodeList

// Returned by

// querySelectorAll()

// childNodes

// Features

// Elements

// +

// Text Nodes (depending on API)

// Usually Static

//
//
//
//
// Live Collection

// Question

// What is Live?

// Example

// <ul id="list">

// <li>A</li>

// </ul>

// JavaScript

// const items =
// document.getElementsByTagName("li");

// console.log(items.length);

// Output

// 1

// Now

// const li = document.createElement("li");

// li.textContent = "B";

// document
// .getElementById("list")
// .appendChild(li);

// Question

// Without calling again

// console.log(items.length);

// Output?

// 2

// Why?

// Because HTMLCollection is

// Live

// Automatically update hoti hai.
//
//
//
//
// getElementById() is generally faster because browsers can optimize ID lookups directly. In real applications, the difference is usually tiny, so choose the API that makes your code clearer unless performance is critical.
//
//
//
//
//
//
//
// Sabse Pehle Ek HTML
// <div id="box">
//     Hello
//     <span style="display:none">Hidden</span>
//     <b>World</b>
// </div>

// Browser DOM Tree

// DIV

// ├── Text
// │      "Hello"

// ├── SPAN
// │      "Hidden"

// └── B
//        "World"

// Question

// Agar main likhu

// const box = document.getElementById("box");

// Ab browser ke paas poora DOM tree hai.

// Ab hum alag-alag APIs dekhenge.

// Part 1
// innerHTML

// Example

// console.log(box.innerHTML);

// Output

// Hello
// <span style="display:none">Hidden</span>
// <b>World</b>

// Notice

// Ye HTML string return karta hai.

// Tags bhi.

// Browser Internals

// Question

// Browser kya karta hai?

// Conceptually

// DOM Tree

// ↓

// Walk Tree

// ↓

// Generate HTML String

// ↓

// Return

// Browser DOM ko dobara string me convert karta hai.

// Setting innerHTML

// Example

// box.innerHTML = "<h1>Priti</h1>";

// Question

// Browser kya karega?

// Step 1

// Old DOM

// DIV

// ├── Text

// ├── Span

// └── B

// Delete.

// Step 2

// Parser runs again.

// <h1>Priti</h1>

// ↓

// HTML Parser

// ↓

// New DOM

// DIV

// ↓

// H1

// ↓

// Text

// Visual

// Old DOM

// ↓

// Destroy

// ↓

// Parse HTML

// ↓

// Create New DOM

// ↓

// Paint

// Notice

// Parser dobara chala.

// Performance

// Question

// Fast hai?

// NO.

// Because

// HTML

// ↓

// Parser

// ↓

// DOM

// ↓

// Paint

// Every time.

// Security

// Sabse important.

// Suppose

// box.innerHTML =
// userInput;

// User Input

// <img src=x
// onerror="alert('Hacked')">

// Browser

// ↓

// Parses HTML

// ↓

// Runs event

// ↓

// XSS Attack.

// XSS

// Cross Site Scripting.

// Interview favourite.

// Never trust

// innerHTML

// with user input.

// Part 2
// textContent

// Example

// console.log(box.textContent);

// Output

// Hello
// Hidden
// World

// Notice

// Tags nahi.

// Only text.

// Even hidden text included.

// Browser Internals

// Browser

// DOM Tree

// ↓

// Visit Every Text Node

// ↓

// Join Text

// ↓

// Return

// No HTML parser.

// No CSS check.

// Fast.

// Setting textContent
// box.textContent =
// "<h1>Hello</h1>";

// Question

// Output?

// Screen

// <h1>Hello</h1>

// Literally.

// Not HTML.

// Because parser nahi chala.

// Visual

// String

// ↓

// Text Node

// ↓

// Done

// Safe.

// Security

// User input

// <script>alert(1)</script>

// textContent

// ↓

// Browser

// <script>alert(1)</script>

// As text.

// No execution.

// Safe.

// Part 3
// innerText

// Example

// console.log(box.innerText);

// Output

// Hello
// World

// Question

// Hidden text kaha gaya?

// Remember

// <span style="display:none">
// Hidden
// </span>

// Browser

// ↓

// Hidden

// ↓

// Ignore.

// Browser Internals

// Question

// Why slower?

// Because browser checks

// CSS

// ↓

// Visibility

// ↓

// Layout

// ↓

// Rendered Text

// Unlike

// textContent

// which simply reads DOM.

// Visual
// DOM

// ↓

// CSS

// ↓

// Layout

// ↓

// Visible?

// ↓

// YES

// ↓

// Include
// Dry Run

// HTML

// <div>

// Hello

// <span style="display:none">

// Hidden

// </span>

// <b>

// World

// </b>

// </div>

// Results

// innerHTML

// ↓

// Hello
// <span style="display:none">
// Hidden
// </span>
// <b>World</b>
// textContent

// ↓

// Hello

// Hidden

// World
// innerText

// ↓

// Hello

// World
// Visual Comparison
// innerHTML

// ↓

// HTML

// +

// Tags

// ------------------

// textContent

// ↓

// All Text

// ------------------

// innerText

// ↓

// Visible Text Only
// Browser Cost
// innerHTML
// DOM

// ↓

// Serialize HTML

// ↓

// Return

// Setting

// HTML Parser

// ↓

// DOM

// ↓

// Paint

// Heavy.

// textContent
// DOM

// ↓

// Read Text

// ↓

// Done

// Very Fast.

// innerText
// DOM

// ↓

// CSS

// ↓

// Layout

// ↓

// Rendered Text

// More work.

// Performance Order
// Fastest

// ↓

// textContent

// ↓

// innerText

// ↓

// innerHTML

// Slowest

// (In many cases innerText can trigger layout calculations, while innerHTML becomes especially expensive when setting large HTML because it reparses and rebuilds DOM.)
//
//
//
//
//
//
//
// //
// . createElement()
// Example
// const button = document.createElement("button");

// console.log(button);

// Output

// <button></button>

// Question

// Screen pe button dikhega?

// ❌ NO.

// Why?

// createElement()

// sirf memory me object banata hai.

// Visual

// RAM

// ↓

// Button Node

// ↓

// Not Connected

// ↓

// Not Visible

// Browser screen pe tab tak kuch nahi dikhata jab tak node DOM tree ka part na ban jaye.

// Browser Internals

// Conceptually

// const button = {

//     nodeType:1,

//     nodeName:"BUTTON",

//     children:[],

//     parent:null

// }

// Exactly browser object banata hai.

// Dry Run
// const btn = document.createElement("button");

// Memory

// Address500

// ↓

// BUTTON

// DOM Tree

// BODY

// Connection?

// NO.

// 2. createTextNode()

// Question

// Button me text kaise aata hai?

// Example

// const text =
// document.createTextNode("Click Me");

// Memory

// TEXT

// ↓

// Click Me

// Still invisible.

// Connect
// button.appendChild(text);

// Tree

// BUTTON

// ↓

// TEXT

// ↓

// Click Me

// Still

// BODY me nahi hai.

// Final
// document.body.appendChild(button);

// Tree

// BODY

// ↓

// BUTTON

// ↓

// TEXT

// Now

// Browser Paint

// ↓

// Visible.

// Visual Flow
// createElement()

// ↓

// Memory

// ↓

// createTextNode()

// ↓

// Memory

// ↓

// appendChild()

// ↓

// Connect Nodes

// ↓

// appendChild(body)

// ↓

// DOM Tree

// ↓

// Paint
// 3. appendChild()

// Most Important.

// Example

// const h1 = document.createElement("h1");

// h1.textContent = "Hello";

// document.body.appendChild(h1);

// Question

// What happens?

// Step 1

// Memory

// H1

// Step 2

// Parent

// BODY

// ↓

// H1

// Step 3

// Paint.

// Browser Internals

// Conceptually

// parent.children.push(child);

// child.parent = parent;

// Browser actually maintains parent-child pointers.

// Visual

// Before

// BODY

// After

// BODY

// ↓

// H1
// append()

// New API.

// Example

// body.append(h1);

// Looks same?

// Almost.

// Difference later.

// append() vs appendChild()
// appendChild()

// Accepts

// Only Node

// Example

// body.appendChild(h1);

// Works.

// body.appendChild("Hello");

// ❌ Error.

// append()

// Can accept

// Node

// or

// String

// Example

// body.append("Hello");

// Works.

// Browser automatically creates Text Node.

// Example

// body.append(h1, p, "Hello");

// All together.

// appendChild()

// Cannot.

// prepend()

// Adds beginning.

// Example

// body.prepend(h1);

// Before

// BODY

// ↓

// P

// After

// BODY

// ↓

// H1

// ↓

// P
// before()

// Example

// p.before(h1);

// Before

// BODY

// ↓

// P

// After

// BODY

// ↓

// H1

// ↓

// P
// after()

// Example

// p.after(button);

// Before

// P

// After

// P

// ↓

// BUTTON
// replaceWith()

// Example

// const h2 = document.createElement("h2");

// h1.replaceWith(h2);

// Before

// BODY

// ↓

// H1

// After

// BODY

// ↓

// H2
// remove()

// Example

// button.remove();

// Before

// BODY

// ↓

// BUTTON

// After

// BODY

// Button memory se eventually garbage collect ho jayega agar koi reference nahi bacha.

// cloneNode()

// Question

// Suppose

// <button>

// Save

// </button>

// Need copy.

// Example

// const copy =
// button.cloneNode();

// Question

// Text copied?

// NO.

// Output

// <button></button>
// Deep Clone
// const copy =
// button.cloneNode(true);

// Output

// <button>

// Save

// </button>

// Children bhi copied.

// Visual

// Original

// BUTTON

// ↓

// TEXT

// cloneNode()

// BUTTON

// cloneNode(true)

// BUTTON

// ↓

// TEXT
// appendChild() Important Rule

// Question

// Suppose

// body.appendChild(h1);

// body.appendChild(h1);

// Two H1?

// NO.

// Browser

// Moves.

// Visual

// Old Parent

// ↓

// Removed

// ↓

// New Parent

// Node ek hi time par ek parent ka child ho sakta hai.

// Memory Diagram
// BODY

// │

// ├── H1

// ├── P

// └── BUTTON

// Every Node stores

// Parent

// Children

// Sibling

// Exactly like React Fiber.
//
//
//
// /Does createElement() add element to DOM?

// No. It only creates a DOM node in memory. The node becomes visible only after it is attached to the document using methods such as appendChild(), append(), or insertBefore().
//
//
//
//
//
// What happens if appendChild() is called on an existing node?

// Answer

// The node is moved to the new parent. A DOM node cannot exist in two places at the same time.
//
//
//
//
// What is an Event?

// An event is an action or occurrence detected by the browser, such as a click, key press, scroll, or form submission. The browser creates an Event object and passes it to registered event listeners.

// Q2. What is addEventListener?

// addEventListener() registers a callback function for a specific event type on a DOM element. When the event occurs, the browser invokes the callback with an Event object.
//
//
//
// Why does removeEventListener require the same function reference?

// Because JavaScript compares function references, not function code.

// () => {}

// and

// () => {}

// are two different function objects.
//
//
//
//
// What is Event Bubbling?

// Event Bubbling is the process where an event starts at the target element and propagates upward through its ancestors until it reaches the document.
//
//
//
// What is Event Capturing?

// Event Capturing is the process where an event travels from the document down to the target element before reaching the target./
//
//
//
//

// Difference between target and currentTarget?
// target	                currentTarget
// Actual clicked element          Element whose listener is executing

//
//
//
// Why use Event Delegation?

// Instead of attaching listeners to many child elements, a single listener is attached to a common ancestor. Because events bubble, the ancestor can handle events from all descendants. This improves memory usage and works well for dynamically added elements.

//
//
//
// Why does React use Event Delegation?

// React attaches a small number of event listeners at the root container and uses its Synthetic Event system to dispatch events to the appropriate components. This reduces memory usage and simplifies event management.
