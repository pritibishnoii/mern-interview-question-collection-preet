# JavaScript Interview Question Collection

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
