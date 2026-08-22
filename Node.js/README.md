# Node.js Interview Question Collection

---

- Node.js Basics
## Fundamentals

# What is Node.js?
Node.js is an open-source, cross-platform JavaScript runtime that allows you to run JavaScript outside of a web browser, typically on a server. It is built on Google's V8 JavaScript engine, the same engine used by Chrome.

creates a basic web server:
```js
const http= require("http");

const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type':'text/plain'
    })
    res.end("hello ,preeti")
})
server.listen(3000,()=>{
    console.log(`Server is running on http://localhost:3000`)
})
```
When you run this file with:

node app.js

and visit http://localhost:3000 in your browser, you'll see:

Hello, Preeti!

# What is Node.js runtime ?
Node.js is a JavaScript runtime environment built on Chrome's V8 JavaScript engine that provides the APIs and tools needed to execute JavaScript on the server.

```js
                    JavaScript Code
                                │
              ┌────────┴────────┐
              ↓                                  ↓
        Browser Runtime     Node.js Runtime
              │                                │
        V8 Engine                   V8 Engine
              │                                │
       DOM / window             Node APIs
       Web APIs                            fs, http
       localStorage                    path, events
              │                                 │
              ↓                                 ↓
        Web Application            Server / API
```
***What does Node.js actually provide?**

V8 alone can execute JavaScript, but a backend application needs more capabilities.

Node.js adds APIs such as:
```js
            Node.js Runtime
            │
            ├── V8 Engine
            │     └── Executes JavaScript
            │
            ├── Node APIs
            │     ├── fs       → File system
            │     ├── http     → HTTP server
            │     ├── path     → File paths
            │     ├── events   → Event system
            │     ├── crypto   → Cryptography
            │     └── stream   → Data streaming
            │
            ├── Event Loop
            │     └── Handles asynchronous operations
            │
            └── libuv
                └── Provides async I/O + event loop infrastructure
```



# What is difference between  Node.js and  JavaScript   ?
JavaScript is a programming language. Node.js is a runtime environment that lets JavaScript run outside the browser.


# How does Node.js run JavaScript outside the browser?"
Node.js uses Google's V8 JavaScript engine to execute JavaScript outside the browser. V8 handles JavaScript execution, while Node.js provides additional runtime APIs such as file system, networking, HTTP, timers, and OS access. Node.js also uses an event loop and asynchronous I/O to handle many operations efficiently.

Node.js uses the Google's V8 JavaScript engine to execute JavaScript. First, V8 parses the source code and creates an AST. The Ignition interpreter converts the code into bytecode and executes it. V8 collects runtime feedback, and frequently executed code can be optimized by the TurboFan compiler into optimized machine code. Node.js additionally provides APIs for filesystem, networking, timers and other system operations, along with the event loop for asynchronous operations.

```js
// app.js
const name = "Priti";

console.log(`Hello ${name}`);

                                    app.js
                                        │
                                        ▼
                                    Node.js
                                        │
                                        ▼
                                    V8 Engine
                                    │
                                    ├── Parse JavaScript   (Parsing is the process of analyzing JavaScript source code and  converting it into a structured representation, commonly an AST, so the JavaScript engine  can understand and execute it.)
                                    │
                                    ├── Compile
                                    │
                                    ├── Execute
                                    │
                                    ▼
                                    "Hello Priti"
```

```js
                 JavaScript
                     │
                     ▼
                ┌──────┐
                │ Parser  │
                └──┬───┘
                      │
                      ▼
                    AST
                      │
                      ▼
              ┌─────────┐
              │   Ignition      
              │ Interpreter      
              └ ──┬──────┘
                     │
                     ▼
                  Bytecode
                     │
                     ▼
                  Execute
                     │
                     ▼
              Type Feedback
                     │
                     ▼
              ┌─────────┐
              │   TurboFan         
              │   Compiler         
              └── ┬──────┘
                     │
                     ▼
            Optimized Machine Code
                     │
                     ▼
                    CPU
```

```js
                                                        JavaScript Code
                                                                    │
                                                                    ▼
                                                        ┌──────────┐
                                                        │ Call Stack         
                                                        └─────┬────┘
                                                                    │
                                                    Async operation?
                                                        ┌─────┴─────┐
                                                        YES                NO
                                                        │                     │
                                                        ▼                     ▼
                                                Node.js APIs          Execute
                                                        │
                                            ┌─────┼──────┐
                                            ▼          ▼            ▼
                                        Timer       I/O      Network
                                            │         │             │
                                            └─────────┼──┘
                                                        ▼
                                                Callback Ready
                                                        │
                                                        ▼
                                                    Event Loop
                                                        │
                                                        ▼
                                                Microtasks / Queues
                                                        │
                                                        ▼
                                                    Call Stack
                                                        │
                                                        ▼
                                                    Execute
```

# Node.js single-threaded ?
Node.js is called single-threaded because one main thread executes JavaScript and manages the event loop, while asynchronous I/O can be handled by the OS, libuv, and its worker pool without blocking that main JavaScript thread.

```js
// libuv → coordinate asynchronous operations 

                                        Node.js
                                           │
             ┌──────────────┴──────────────┐
             │                                                          │
             ▼                                                          ▼
            V8                                                       libuv
             │                                                         │
             ▼                                           ┌──────┴────────┐
     JavaScript Execution                       │                              │
             │                                            ▼                              ▼
             ▼                                    Event Loop               Worker Pool
        Call Stack                                      │                           │
             │                                              │               ┌─────┼─────┐
            ▼                                                              W1        W2      W3 ▼                                             
             │                                              │
             └───────────────────────┴───────────┐
                                                                                     │
                                                                                     ▼
                                                                                Call Stack
```



# Node.js  advantages and disadvantages?

⚡ Asynchronous and Non-blocking I/O
🔄 Event-driven
🔁 Event Loop
🧵 Single main JS thread
🚀 V8 Engine
📦 npm Ecosystem
🌍 Cross-platform
🌐 HTTP & Networking
📁 File System
📈 I/O Scalability
🔌 Real-time support
🛠️ Built-in modules


# Node.js    Applications ?
Node.js is a good choice for I/O-intensive and highly concurrent applications such as REST APIs, real-time applications, streaming services, microservices, and notification systems. Its non-blocking, event-driven architecture allows it to handle many I/O operations efficiently. It is less suitable for CPU-intensive work when that work runs on the main JavaScript thread and blocks the event loop.

1. 🌐 REST APIs / Backend APIs
2. 💬 Real-Time Applications:
                                Chat application
                                Live notifications
                                Multiplayer features
                                Collaborative applications
                                Live dashboards
3. 📺 Streaming Applications:
                                Video/audio streaming
                                Large file downloads
                                Data streaming
4. 📊 I/O-Heavy Applications:
                                Database
                                File System
                                Network
                                External API
                                Cache
5. 🧩 Microservices
6. 🔔 Notification Systems
                                Email notification service
                                Push notifications
                                Live alerts
                                Activity notifications
7. 🖥️ Server-Side Web Applications

- Node.js CPU-intensive tasks ke liye suitable kyun nahi hai?
- Node.js ka architecture kya hai?

## What is V8 Engine
V8 is Google’s open-source JavaScript and WebAssembly engine, written in C++, that parses, compiles, and executes JavaScript code.

# What dees JIT compilation 
JIT = Just-In-Time Compilation
V8 is Google's JavaScript engine. It parses JavaScript, generates an AST, uses the Ignition interpreter to execute bytecode, collects runtime feedback, and can use the TurboFan optimizing compiler to generate optimized machine code for hot code. This runtime optimization approach is called JIT compilation.


# Stack Vs Heap  Memory Managment 
The Stack stores fixed-size primitive values and execution frames, while the Heap stores dynamic, complex reference types (objects, arrays, functions).

V8 manages JavaScript memory mainly through the heap and garbage collection. Objects are allocated on the heap, and V8 uses reachability from GC roots to determine which objects are still alive. It uses generational garbage collection, where short-lived objects are handled in the young generation and long-lived objects can be promoted to the old generation. Unreachable objects are eventually reclaimed by the garbage collector.
```js
let age = 25;

let user = {
  name: "Priti",
  age: 25
};
```
```js
Call Stack
┌──────────────┐
│ age → 25               │
│ user → reference   ─────┐
└──────────────┘         │
                                         ▼
                                        Heap
                            ┌─────────────┐
                            │ {                        │
                            │ name:Priti          │
                            │ age:25                │
                            │ }                        │
                            └─────────────┘
```


## Node.js Modules
A Node.js module is a reusable and encapsulated unit of code that can be imported and used in other parts of an application.

Node.js Modules
│
├── 1. Built-in / Core
├── 2. User-defined / Local
└── 3. Third-party

# What is Built-in modules ?

Built-in modules are modules provided by Node.js itself that offer common functionality such as file-system access, networking, cryptography, and operating-system interaction without requiring external installation.

Node.js Built-in Modules
│
├── fs       → File System
├── http     → HTTP server
├── path     → File paths
├── os       → Operating System
├── events   → Event handling
├── crypto   → Cryptography
├── stream   → Data streams
└── url      → URL handling

 #   User-defined / Local
 User-defined modules are modules created by the developer for a specific application, while third-party modules are externally developed packages installed through a package manager such as npm.
 ```js 
 // math.js
function add(a, b) {
  return a + b;
}

module.exports = add;

// use: in other file 
// app.js
const add = require("./math");

console.log(add(10, 20));

//  third-party
const express = require("express");
 ```


# node_modules
node_modules: A directory created by npm/yarn/pnpm that stores the third-party packages and their dependencies installed for a Node.js project.

my-app/
│
├── node_modules/
│   ├── express/
│   ├── body-parser/
│   ├── ...
│
├── package.json
└── package-lock.json

```js
Node.js Modules
│
├── 1. Core / Built-in Modules
│      ├── fs
│      ├── http
│      ├── path
│      └── events
│
├── 2. Local / Custom Modules
│      └── ./math.js
│
└── 3. Third-party Modules (node_modules)
       ├── express
       ├── mongoose
       └── jsonwebtoken
```

# 📦 What is npm?
npm (Node Package Manager) is the default package manager for Node.js used to install, manage, update, and share JavaScript packages and dependencies.

```js
npm install express
```
This installs Express and its dependencies into:

node_modules/

npm also uses:  (package.json)   to store project information, dependencies, and scripts.

# What is npx?
npx is a tool for executing package binaries/CLI commands without necessarily installing them globally.

# What is package.json?
package.json .(what needs?) contains project metadata, scripts, and dependency declarations.

```js
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
   "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^5.1.0"
  }
}
```

# What is package-lock.json?
(what exactly installed)
package-lock.json records the exact dependency tree and versions used for reproducible installations. 

**npm init**
npm init -y initializes a Node.js project by creating a package.json file with default values without prompting the user for input.
npm init → ask questions ❓
npm init -y → automatically sets default Values  ✅

npm i express is  dependency installation command
npm init -y ko project initialization command

```js
                             Node.js Project
                                       │
             ┌────────────┼────────────┐
             │                        │                        │
             ▼                        ▼                        ▼
       package.json         package-lock        node_modules
             │                        │                        │
             │                        │                        │
        Dependency            Exact               Actual
        declaration           versions            packages
             │                        │                        │
             └────────────┼────────────┘
                                        ▲
                                        │
                                      npm
                                        │
                            install / update / manage
                                        │
                                       npx
                                        │
                                    execute CLI

```



# What is npm ci command?
npm ci is a clean and reproducible dependency installation command that installs the exact dependency versions specified in package-lock.json and is commonly used in CI/CD environments.

# What is npm scripts ?
npm scripts are custom commands defined in the scripts field of package.json to automate common development tasks such as starting, testing, building, and linting an application.
```js
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "jest",
    "build": "tsc"
  }
}
// Run:
npm start
npm run dev
npm test
npm run build
```

# What is Semantic Versioning?
Semantic Versioning (SemVer) is a versioning convention that uses MAJOR.MINOR.PATCH, where MAJOR indicates breaking changes, MINOR indicates backward-compatible features, and PATCH indicates backward-compatible bug fixes.

# What is (^ ) Caret Vs  (~)
^ allows compatible minor and patch updates within the same major version, while ~ generally allows only patch updates within the same minor version.
```js
"express": "^5.1.0" //Minor + patch updates allowed, but major version  will  same 

    ^5.1.0
    │ │ │
    │ │ └── patch
    │ └──── minor
    └────── major
Allowed:
            5.1.0 ✅
            5.1.1 ✅
            5.2.0 ✅
            5.9.9 ✅
            5.x.x ✅
Not allowed:
                6.0.0 ❌


suppose today installed:   "express": "^5.1.0"

After 3 Months:  Express 5.4.0  is available
npm update / fresh resolution ke context mein npm compatible newer 5.x version ko choose kar sakta hai.

Why?
Because:

5.1.0 → 5.4.0

minor update hai aur major version 5 same hai.


~ :
"express": "~5.1.0"
~5.1.0
  │ │ │
  │ │ └── patch (can change)
  │ └──── minor fixed
  └────── major fixed

Only patch updates allowed; minor version  same .
Allowed:
            5.1.0 ✅
            5.1.1 ✅
            5.1.2 ✅
            5.1.9 ✅
Not allowed:
            5.2.0 ❌
            5.3.0 ❌
            6.0.0 ❌

"express": "*"
* Wildcard  -Any version can satisfy

"express": ">=5.1.0"
5.1.0 ya usse newer version allowed
                                    5.1.0 ✅
                                    5.2.0 ✅
                                    6.0.0 ✅
                                    7.0.0 ✅

"express": ">5.1.0"   
5.1.0 se greater version.
                    5.1.0 ❌
                    5.1.1 ✅
                    5.2.0 ✅
                    6.0.0 ✅
```

# What is  Dependencies vs devDependencies?
Dependencies are packages required by the application at runtime (production), while devDependencies are packages used during development, testing, linting, or building and are generally not required at runtime in production.
npm install -D ==   npm install --save-dev
```js
{
  "dependencies": {
    "express": "^5.1.0",
    "mongoose": "^8.0.0",
    "jsonwebtoken": "^9.0.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.0",  //🛠️ Development tool
    "eslint": "^9.0.0"  //🛠️ Code quality tool
  }
}
```


# What is CommonJS ?
CommonJS (CJS) is a synchronous  module system traditionally used by Node.js to organize and reuse JavaScript code . where modules are exported  using require() and module.exports.
```js
// math.js
const add = (a,b)=>a+b

const subtract = (a, b) => a - b;

module.exports=add; //   assigning add function to the whole  module.exports
// or 

module.exports.add = add; // module.exports is an object and we are adding add property  like this 👇
module.exports ={
    add:add
}

// multiple files /module 

module.exports={add,subtract} //object export

// app.js
const add = requre("./math.js");
console.log(add(20,30))//50

//multiple import /
const math = require("./math");
// or also we can do like this :
const { add, subtract } = require("./math");//by destructuring object    because  require() gets object 
// like :
{
  add: add,
  subtract: subtract
}

console.log(math.add(10, 20));
console.log(math.subtract(20, 10));

```
# What is ES Modules ?
ES Modules are the standardized JavaScript module system introduced in ECMAScript 2015 (ES6), using import and export to share code between modules.

**Named Export:** An ES Module export that exports a value with a specific name, which is normally imported using the same name inside {}.
**Default Export:** An ES Module export that defines the module’s primary/default value, which can be imported without {} and with any local name.

```js
// math.js
export const add = (a,b)=>a+b // named export
const subtract = (a, b) => a - b; 

export default subtract;  // default export 

// app.js
import {add} from "./math.js"; // named import 
import subtract from ".math.js"  // default import 
console.log(subtract(20-10)) // 10
console.log(add(20,30))//50
```

# How require()  works ?
require() is a CommonJS function in Node.js that loads another module and returns the value exported by that module through module.exports.

# What is module.exports ?
module.exports is a CommonJS object/property in Node.js used to define the value that a module makes available to other files through require().

# exports vs module.exports?
**module.exports:** The actual value/object that a CommonJS module exports and that require() returns.
**exports:** A reference/shortcut to module.exports, mainly used to add properties to the exported object.
module.exports → actual export
exports             → shortcut/reference



# What is Node.js module caching?
Node.js module caching is a CommonJS mechanism where a module is executed only once when it is first required. Node.js stores its exported value in the module cache, and subsequent require() calls return the cached export instead of executing the module again.

Express, Mongoose, and custom CommonJS modules are cached by Node.js after their first require() within a process, so subsequent require() calls return the cached exports instead of re-executing the module.
Why it matters:

Faster repeated imports
Single shared instance across the app (singleton-like behavior)

```js
// counter.js
console.log("Module loaded");
let count = 0;
module.exports = () => ++count;

// or 

let count = 0;

module.exports = () => {
  count++;
  return count;
};

// The module is initialized only once, so count is shared through the cached module.

// app.js
const next = require("./counter.js");
// console.log(require.cache)
console.log(next())//0
console.log(next())//1
console.log(next())//2
// console.log(require.cache)
console.log(require.cache.path)

// manually  Cache   clear  
// delete require.cache[path];
// require.cache

// Module caching ka scope process ke andar hota hai.
// if Node.js process restart
                                        Before restart:
                                        Cache exists
                                            ↓
                                        Process restart
                                            ↓
                                        Memory cleared
                                            ↓
                                        Cache gone

// Next process mein module fresh load hoga.
```
```js
require("./counter")
       ↓
First time?
       ↓ YES
Execute module
       ↓
Store in cache
       ↓
Return exports


require("./counter")
       ↓
Already cached?
       ↓ YES
Return cached exports
```

```js
const express = require("express");
const mongoose = require("mongoose");

// Node.js first time: 

require("express")/("mongoose")
      ↓
Node.js finds express package
      ↓
Express module execute
      ↓
module.exports
      ↓
require.cache  store
      ↓
express object return

// Multiple file  require()
// server.js
const express = require("express");

// userController.js
const express = require("express");

// authController.js
const express = require("express");

// Toh Express har file mein completely dobara initialize nahi hota.

                        require("express")
                                  │
                                  ▼
                        First time load
                                  │
                                  ▼
                        Execute Express
                                  │
                                  ▼
                        Module Cache
                                  │
              ┌─────────┼─────────┐
              ▼                  ▼                  ▼
            server          controller      auth
              │                  │                  │
              └─────────┼─────────┘
                                  ▼
                      Cached Express
```

***require("express")** loads the Express CommonJS module and returns its exported factory function. Calling express() invokes that factory and creates an Express application object, which we store in app and use for routes, middleware, and starting the server.


# What is 🔄 Circular Dependency
A circular dependency occurs when modules directly or indirectly depend on each other, forming a dependency cycle such as A → B → A.


## http Module
The Node.js http module is a built-in module that provides APIs for creating HTTP servers and handling HTTP requests and responses. without needing an external framework like Express.
```js
const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Hello from Node.js");
});
server.listen(3000);
```

# HTTP kya hai?
HTTP is an application-layer protocol used for communication between clients and servers through a request-response model.

# What is HTTP request Object ?
HTTP Request object is an object that contains all information sent by the client to the server, such as the HTTP method, URL, headers, and request body.
```js
(req, res) => {
  console.log(req.method);
  console.log(req.url);
}
```

Request
├── Method   → GET, POST, PUT, PATCH, DELETE
├── URL
├── Headers  
└── Body  →   POST/PUT/PATCH


# What is HTTP response Object  ?
HTTP Response object is an object provided by the server to construct and send the response back to the client, including the status code, headers, and response body.
```js
(req, res) => {
  res.statusCode = 200;
  res.end("Hello");
}
```
Response
├── Status Code
├── Headers  (response extra information/metadata)
└── Body

```js
const http = require("http");

const server = http.createServer((req, res) => {

  if (req.method === "GET" && req.url === "/users") {

    res.statusCode = 200;

    res.setHeader("Content-Type", "application/json");

    res.end(JSON.stringify({
      users: ["Priti", "Vipin"]
    }));

    return;
  }

  res.statusCode = 404;
  res.end("Route not found");
});

server.listen(3000);
```

**headers**
HTTP headers are key-value pairs of metadata sent with an HTTP request or response that provide additional information about the request or response.

Request Headers
├── Content-Type
├── Authorization
├── User-Agent
├── Accept
├── Cookie
└── Host

Response Headers
├── Content-Type
├── Content-Length
├── Set-Cookie
├── Cache-Control
└── Location

# fs  module
The fs (File System) module is a built-in Node.js module used to interact with files and directories, such as reading, writing, updating, and deleting files.

```js
const fs = require("fs");

fs.writeFile("hello.txt", "Hello Node.js", (err) => {
  if (err) throw err;

  console.log("File created");
});

fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) throw err;

  console.log(data);
});
```

# path module
The path module is a built-in Node.js module used to work with and manipulate file and directory paths in a platform-independent way.
```js
const path = require("path");

const filePath = path.join("users", "data", "user.json");

console.log(filePath);//users\data\user.json

path.join()
path.basename()
path.dirname()
path.extname()
path.resolve()

const file = "/app/users/data.json";

console.log(path.basename(file)); // data.json
console.log(path.dirname(file));  // /app/users
console.log(path.extname(file));  // .json
```
# url module
The Node.js url module provides utilities for parsing and manipulating URLs and accessing components such as hostname, pathname, and query parameters.

```js
const { URL } = require("url");

const myUrl = new URL(
  "https://example.com/users?id=10&name=priti"
);

console.log(myUrl.hostname);
console.log(myUrl.pathname);
console.log(myUrl.searchParams.get("id"));
// example.com
// /users
// 10
```
https://example.com/users?id=10
│       │           │      │
│       │           │      └── Query parameter
│       │           └───────── Path
│       └──────────────────── Host
└──────────────────────────── Protocol


# events - EventEmitter
The events module is a built-in Node.js module that provides the EventEmitter class for creating, listening to, and handling custom events.
```js
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("login", (username) => {
  console.log(`${username} logged in`);
});

emitter.emit("login", "Priti");
// Priti logged in

emitter.on()
emitter.emit()
emitter.once()
emitter.off()
```


# os module
The os module is a built-in Node.js module that provides information (CPU, memory, hostname, home directory,) and utilities related to the operating system and computer environment.

```js
const os = require("os");

console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());
console.log(os.totalmem());
console.log(os.freemem());
// output 
// win32
// x64
// [CPU information...]
// 17179869184
// 8589934592
os.platform()
os.arch()
os.cpus()
os.totalmem()
os.freemem()
os.homedir()
os.hostname()
```

# crypto
The crypto module is a built-in Node.js module that provides cryptographic functionality such as hashing, encryption, decryption, digital signatures, and random data generation.
```js
const crypto = require("crypto");

const hash = crypto
  .createHash("sha256")
  .update("hello")
  .digest("hex");

console.log(hash);
```
crypto
├── Hashing
├── Encryption
├── Decryption
├── Random tokens
└── Digital signatures


# stream
The stream module provides APIs for handling data as a continuous sequence of chunks instead of loading the entire data into memory at once.
Streams
├── Readable
├── Writable
├── Duplex
└── Transform
Large files
Video/audio streaming
HTTP request/response
File uploads/downloads
```js
const fs = require("fs");

const stream = fs.createReadStream("large-video.mp4");

stream.on("data", (chunk) => {
  console.log("Received chunk:", chunk.length);
});

stream.on("end", () => {
  console.log("Finished");
});

// Instead of:

// 10 GB file
//     ↓
// Load entire file into RAM
//     ↓
// Process

// 10 GB file
//     ↓
// Chunk → Process
// Chunk → Process
// Chunk → Process
```



# util module 
The util module provides various utility functions for common Node.js tasks, such as formatting, inspection, and converting callback-based functions into Promise-based functions.

```js
const util = require("util");

console.log(
  util.format("Hello %s, age %d", "Priti", 25)
);//Hello Priti, age 25
```
# buffer module (Binary Data)
The Buffer class is used in Node.js to work with raw binary data outside the normal JavaScript string/object representation.
```js
const buffer = Buffer.from("Hello");

console.log(buffer);//<Buffer 48 65 6c 6c 6f>
console.log(buffer.toString());//Hello
```



# What is Express js
Express.js is a lightweight and flexible web framework for Node.js used to build web servers and REST APIs, providing features such as routing, middleware, and request-response handling.
```js
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```
# how to read  Request body  in express ?
Express provides built-in middleware  , you must include a body-parsing middleware in your application before your route handlers. By default, req.body is undefined.
**Express**
```js
// For parsing application/json (JSON payloads)
app.use(express.json());
// For parsing application/x-www-form-urlencoded (HTML form submissions)
app.use(express.urlencoded({ extended: true })); 

// Then:
app.post("/users", (req, res) => {
// Access the parsed body object
  console.log(req.body);
});

// req.params → URL parameters
// req.query  → Query parameters
// req.body   → Request body
req.params.id     // 10
req.query.active  // true
req.body          // JSON data
```
# Route parameters?
Route parameters are dynamic values defined in a URL path using :, used to identify a specific resource.

# Query parameters?
Query parameters are key-value pairs added to the URL after ?, commonly used for filtering, searching, sorting, or pagination.

# req.params vs req.query vs req.body
These  are the common way to recieving data  from the client:

req.params contains values captured from dynamic parameters defined in the URL path.
```js
GET /users/101

app.get("/users/:id", (req, res) => {
  console.log(req.params.id); // "101"
});
```
req.query contains key-value data sent in the URL after ?, commonly used for filtering, searching, sorting, and pagination.
```js
GET /users?page=2&limit=10

app.get("/users", (req, res) => {
  console.log(req.query); // { page: "2", limit: "10" }
});
```
req.body contains data sent by the client in the HTTP request body, commonly used with POST, PUT, and PATCH requests.

# GET vs POST?
GET is an HTTP method used to retrieve data from the server. Its request body is generally not used for sending data; parameters are commonly sent through the URL/query string.
```js
GET /users

app.get("/users", (req, res) => {
  res.json({ message: "Get users" });
});
```
POST is an HTTP method used to send data to the server, commonly to create a new resource or trigger an operation.
```js
POST /users
app.post("/users", (req, res) => {
  console.log(req.body);

  res.json({
    message: "User created",
    data: req.body
  });
});
```
# PUT vs PATCH?
PUT → Complete replacement | PATCH → Partial update

PUT is an HTTP method used to completely replace or update a resource with the representation sent in the request.
```js
PUT /users/10
app.put("/users/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);

  res.json({
    message: "User completely updated"
  });
});
```
PATCH is an HTTP method used to partially update an existing resource.
```js
PATCH /users/10

app.patch("/users/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);

  res.json({
    message: "User partially updated"
  });
});
```

# DELETE request?
DELETE is an HTTP method used to request the removal of a specified resource from the server.
```js
DELETE /users/10
Delete user whose ID = 10
app.delete("/users/:id", (req, res) => {
  console.log(req.params.id);

  res.json({
    message: "User deleted"
  });
});
```


# What is Middleware  ?
Middleware is a function in Express.js that executes between the incoming request and the final response, and it can access req, res, and next() to process the request or pass control to the next middleware/route handler.

Middleware can modify the request/response, perform tasks like authentication or logging, end the request, or call next() to continue the request pipeline.
# Built-in  middleware
Built-in middleware is middleware provided by Express itself for common request-processing tasks, such as parsing JSON and URL-encoded data.

```js
GET /users

const express = require("express");

const app = express();
app.use(express.json()); // built-in middleware:
app.use(express.urlencoded({ extended: true }));// built-in middleware:

const cors = require("cors");// third party  use npm js 
app.use(cors());
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get("/users", (req, res) => {
  res.send("Users");
});

app.listen(3000);
```
# Application-level middleware?
Application-level middleware is middleware attached directly to the Express application using app.use() or app.METHOD(), and it can run for multiple routes or specific routes.

Custom middleware is a developer-defined Express middleware function created to perform application-specific tasks such as logging, authentication, validation, or request modification.

```js
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized"
    });
  }

  next();
};

app.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome to profile"
  });
});
```
```js
app.use((req, res, next) => {
  req.user = {
    name: "Priti",
    role: "admin"
  };

  next();
});

app.get("/dashboard", (req, res) => {
  console.log(req.user);

  res.send("Dashboard");
});
```

# Middleware execution  order?
Express middleware follows a sequential execution model: middleware runs in the order it is registered, and next() passes control to the next middleware or route handler.
```js
// Express middleware executes in the order in which it is registered in the code, from top to bottom.
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Middleware 1");
  next(); //next() is an Express function used inside middleware to pass control to the next middleware or route handler.
});

app.use((req, res, next) => {
  console.log("Middleware 2");
  next();
});

app.get("/", (req, res) => {
  console.log("Route Handler");
  res.send("Hello");
});

app.listen(3000);
```

# What is next()  in Express ?
next() is a function provided by Express middleware that passes control from the current middleware to the next middleware or route handler in the request-response cycle.



# Router-level middleware?
Router-level middleware is middleware attached to an Express Router instance using router.use() or router.METHOD(), and it is used to process requests for a specific group of routes.
```js
const express = require("express");

const router = express.Router();

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized"
    });
  }

  next();
};

// Router-level middleware
router.use(authMiddleware);

router.get("/", (req, res) => {
  res.send("All users");
});

router.get("/profile", (req, res) => {
  res.send("User profile");
});

module.exports = router;

// server.js
const express = require("express");
const userRoutes = require("./userRoutes");

const app = express();

app.use("/api/users", userRoutes);

app.listen(3000);
```

# Error-handling middleware?
Error-handling middleware is special Express middleware with the signature (err, req, res, next)  used to catch and handle errors that occur during the request-response cycle.

Error-handling middleware has 4 parameters:
(err, req, res, next)
```js
const express = require("express");

const app = express();

app.get("/users", (req, res, next) => {
  try {
    throw new Error("Database failed");
  } catch (error) {
    next(error);
  }
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.log(err.message);

  res.status(500).json({
    message: "Something went wrong"
  });
});

app.listen(3000);
```



# What is express.urlencoded() 
express.urlencoded() is built-in Express middleware used to parse application/x-www-form-urlencoded request bodies and make the parsed data available through req.body.
```js
<form method="POST" action="/login">
  <input name="email" />
  <input name="password" />
  <button type="submit">Login</button>
</form>
//After form submited
//email=priti@gmail.com&password=123456

// app.js
const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));//Form URL-encoded body parse   (name=Priti&age=25)

app.post("/login", (req, res) => {
  console.log(req.body);

  res.send("Login received");
});

app.listen(3000);

```
# What is Controller ?
A controller is a layer that handles incoming HTTP requests, coordinates application logic or services, and sends the appropriate HTTP response to the client.
```js
// userController.js

const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong"
    });
  }
};

module.exports = { getUsers };
```

# What is Router kya hota hai?
Express Router is a mechanism for creating modular, mountable route handlers, allowing related routes and their middleware to be organized separately from the main Express application.
```js
const express = require("express");
const {getUser} = require("./userController")

const router = express.Router();
router.get("/", (req, res) => {
  res.send("All users");
});

router.get("/:id", (req, res) => {
  res.send("Single user");
});
router.get("/users", getUsers);

module.exports = router;

// server.js
const express = require("express");
const userRouter = require("./userRoutes");

const app = express();

app.use("/users", userRouter);

app.listen(3000);
```


# What is   REST API
 (Representational State Transfer API)
REST API  (Representational State Transfer API) is an architectural style for designing web APIs where resources are identified by URLs and manipulated using standard HTTP methods such as GET, POST, PUT, PATCH, and DELETE.
**Statelessness**
Statelessness means each client request contains all the information necessary for the server to process it, so the server does not depend on stored client state from previous requests.

**Stateful**
Stateful architecture is one where the server maintains client-specific state between requests and uses that stored state to process subsequent requests.


# REST ke principles?
REST Principles
│
├── Client-Server Separation  
                             Client → UI / user interaction
                             Server → business logic / data
├── Stateless
├── Uniform Interface
├── Resource-Based
├── Representation
├── Cacheable
├── Layered System
└── Code-on-Demand (Optional)


# Authentication & Authorization
🔐 Authentication

Authentication is the process of verifying the identity of a user or client — basically, “Who are you?”

🛡️ Authorization

Authorization is the process of determining what an authenticated user is allowed to access or perform — basically, “What are you allowed to do?”


```Authentication verifies identity, while authorization determines the permissions or access rights of an authenticated identity.```

```js
const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

const users = [
  {
    id: 1,
    email: "priti@gmail.com",
    password: "123456",
    role: "admin"
  }
];

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (user) =>
      user.email === email &&
      user.password === password
  );

  if (!user) {
    return res.status(401).json({
      message: "Invalid email or password"
    });
  }

  const token = jwt.sign(
    {
      id: user.id,
      role: user.role
    },
    "secret-key"
  );

  res.json({
    message: "Login successful",
    token
  });
});
```

```js
const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Token required"
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, "secret-key");

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token"
    });
  }
};

// 🛡️Authorization  only can ascess an  Authorized  identity  
const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      message: "Access denied"
    });
  }

  next();
};

app.delete(
  "/users/:id",
  authenticate,
  isAdmin,
  (req, res) => {
    res.json({
      message: "User deleted"
    });
  }
);
```


# What is JWT kya hai?
JWT is a compact, URL-safe, digitally signed token used to securely transmit claims between Client and Server  and commonly used for stateless authentication and authorization in web applications.

xxxxx.yyyyy.zzzzz
  │      │      │
Header Payload Signature
jwt.sign() creates a digitally signed JWT containing claims, while jwt.verify() validates the token's signature and returns the decoded claims if the token is valid.
```js
{
  "alg": "HS256",
  "typ": "JWT"
}

Payload//user ki claims/information (id /name or email)
{
  "userId": 101,
  "role": "admin"
}

Signature
→ token  verify/authenticate karne ke liye

// code.js
const jwt = require("jsonwebtoken");
// jwt.sign(payload, secret)
const token = jwt.sign(
  {
    userId: 101,
    role: "admin"
  },
  "my-secret-key"
);

console.log(token);

//
  const decoded = jwt.verify(
      token,
      "my-secret-key"
    );

    req.user = decoded;
```

# Access token vs Refresh token?
An access token is a short-lived credential used to access protected resources, while a refresh token is a longer-lived credential used to obtain a new access token after the current access token expires.
```js
                        LOGIN
                            ↓
        ┌─────────┴─────────┐
        ↓                                      ↓
    Access Token                   Refresh Token
    15 minutes                        longer-lived
            ↓                                 ↓
    /profile                             /refresh
    /orders                                ↓
    /users                         New Access Token
```
```js
const jwt = require("jsonwebtoken");

app.post("/login", (req, res) => {
  const user = {
    id: 101,
    role: "admin"
  };

  // Short-lived
  const accessToken = jwt.sign(
    {
      userId: user.id,
      role: user.role
    },
    process.env.ACCESS_SECRET,
    {
      expiresIn: "15m"
    }
  );

  // Long-lived
  const refreshToken = jwt.sign(
    {
      userId: user.id
    },
    process.env.REFRESH_SECRET,
    {
      expiresIn: "7d"
    }
  );

  res.json({
    accessToken,
    refreshToken
  });
});
```

# Where to Store JWT Token?
For browser applications, a common secure approach is to keep refresh tokens in Secure, HttpOnly cookies and use short-lived access tokens for API authorization, preferably kept in memory rather than persistent browser storage.

JavaScript  does not  directly read  HttpOnly cookie  , which helps reduce token theft through XSS.
```js
Refresh Token → HttpOnly Secure Cookie
Access Token → Short-lived + memory
```

# What is HTTP-only cookie ?
An HttpOnly cookie is a browser cookie with the HttpOnly attribute that prevents client-side JavaScript from accessing it, while the browser can still send it with applicable HTTP requests.
```js
res.cookie("refreshToken", token, {
  httpOnly: true,
  secure: true //Secure cookie ko sirf HTTPS connection par send hone ke liye restrict karta hai. (in Production)
//   SameSite control karta hai ki browser cross-site requests mein cookie kab send kare.
  sameSite: "lax",
  maxAge: 7 * 24 * 60 * 60 * 1000
});
```

# What is CORS kya hai?
CORS is a browser security mechanism that uses HTTP headers to control whether a web page from one origin is allowed to access resources from another origin.

```js
//npm i cors()
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));

app.get("/users", (req, res) => {
  res.json({ message: "Users data" });
});

app.listen(3000);
```
# What is XSS?
XSS (Cross-Site Scripting) is a web security vulnerability where an attacker injects malicious client-side script into a trusted web page, causing it to execute in another user's browser.

# What is CSRF?
CSRF is an attack where a malicious site tricks an authenticated user's browser into sending an unintended request to another trusted website using the user's existing credentials.

CSRF se protection

Common techniques:

SameSite cookies
CSRF tokens
Origin/Referer validation where appropriate
Proper authentication architecture
```js
res.cookie("session", sessionId, {
  httpOnly: true,
  secure: true,
  sameSite: "lax"
});

XSS
→ Attacker ka JavaScript
→ Victim ke website context mein execute

CSRF
→ Victim ke browser se
→ Trusted website par unwanted request
```

# What is HTTP vs HTTPS?
HTTP is an application-layer protocol for transferring data between clients and servers, while HTTPS is HTTP transmitted over TLS, providing encryption, server authentication, and data integrity.

HTTP = Communication
HTTPS = Communication + TLS Security


# What is Node.js process ?
The Node.js process object provides information about and control over the current Node.js runtime process, including environment variables, command-line arguments, process information, and process termination.

process.env provides access to environment variables available to the Node.js process, commonly used for configuration and secrets.

process.argv is a Node.js array that contains the command-line arguments passed to the running Node.js process.
```js
[
  "node",
  "app.js",
  "Priti",
  "25"
]
```
process.exit() immediately terminates the process, so pending asynchronous operations may not finish. In production code, graceful shutdown is often preferred when possible.
```js

console.log("Starting...");//Starting...
process.exit(1);//Generally indicates:  Error / Failure
process.exit(0);//Generally indicates:  Success
console.log("This will not execute");
console.log(process);
console.log(process.pid);
console.log(process.platform);
console.log(process.version);
console.log(process.env);
console.log(process.argv);
// console.log(process.exit());
```

- Role-based authorization?
- Permission-based authorization?
- Password hashing kya hai?
- bcrypt kaise work karta hai?
- Salt kya hota hai?
- Password ko plain text mein store kyun nahi karna chahiye?

- Node.js mein errors ke types?
- Operational vs programmer errors?
- Global error handler?
- Unhandled Promise rejection kya hai?
- uncaughtException kya hai?
- Process crash hone par kya karna chahiye?
- Graceful shutdown kya hai?










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

- Helmet kya hai?
- Rate limiting kya hai?
- Brute-force attack?
- SQL Injection?
- NoSQL Injection?

- TLS ka basic working?
- Secrets/environment variables safely kaise manage karoge?
- API security ke best practices?
## Production & System Design


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
