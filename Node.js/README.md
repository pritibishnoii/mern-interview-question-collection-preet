# Node.js Interview Question Collection

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
