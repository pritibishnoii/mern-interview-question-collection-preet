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


# What is Password hashing ?
Password hashing is the process of converting a plain-text password into a one-way, irreversible hash value so that the original password does not need to be stored in the database.
```js
const bcrypt = require("bcrypt");

const password = "mypassword";

const hash = await bcrypt.hash(password, 10);

console.log(hash);//$2b$10$N9qo8uLOickgx2ZMRZoMye...

// Compare password
const isMatch = await bcrypt.compare(
  "mypassword",
  hash
);

console.log(isMatch);//true
```

# What is  bcrypt ? 
bcrypt is a password-hashing algorithm designed to securely hash passwords using a computational cost factor and a unique salt.

# What is Salt ?
A salt is a unique, randomly generated value added to a password before hashing to make password hashes harder to crack and prevent identical passwords from producing identical hashes.



# What are  types of Errors in Node.js  ?
Common Node.js errors include syntax errors, runtime errors, logical errors, and operational errors. Syntax errors prevent code from being parsed, runtime errors occur during execution, logical errors produce incorrect results, and operational errors arise from expected external/runtime conditions.

Node.js Errors
│
├── Syntax Error
│      → Code syntax wrong
│
├── Runtime Error
│      → Execution ke time error
│
├── Logical Error
│      → Code runs, result wrong
│
└── Operational Error
       → External/runtime condition problem


# Operational vs programmer errors?
An operational error is an expected runtime problem caused by external conditions, not necessarily by a bug in the program's logic.
Database connection failed
File not found
Network timeout
Invalid user input
API unavailable
Port already in use

```js
fs.readFile("data.txt", (err, data) => {
  if (err) {
    console.log("File not found");
    return;
  }
});
```
A programmer error is a bug caused by incorrect code, logic, assumptions, or misuse of an API.
```js
const user = null;

console.log(user.name);
// TypeError
```

# How do you handle errors in express 
In a production Express application, I use custom AppError for operational errors, an asyncHandler to forward rejected promises, JWT middleware for authentication, a 404 middleware for unknown routes, and a centralized global error handler to return consistent error responses.

# Global error handler?
A global error handler is a centralized Express error-handling middleware that catches errors from across the application, processes them consistently, and sends an appropriate response to the client.

```js
const express = require("express");

const app = express();

app.get("/users", (req, res, next) => {
  try {
    //  const users = await User.find();
    throw new Error("Database failed");
  } catch (error) {
    next(error);
  }
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    success: false,
    message: "Something went wrong"
  });
});

app.listen(3000);
```


#  AppError class
Custom operational errors
```js
// utils/AppError.js

class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4")
      ? "fail"
      : "error";

    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;

// use it later
throw new AppError("User not found", 404);
// or  404 Handler
const AppError = require("./utils/AppError");

app.use((req, res, next) => {
  next(
    new AppError(
      `Route ${req.originalUrl} not found`,
      404
    )
  );
});
```
```js
const errorMiddleware = (
  err,
  req,
  res,
  next
) => {

  console.error(err);

  if (err.isOperational) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message
    });
  }

  return res.status(500).json({
    success: false,
    message: "Internal Server Error"
  });
};

module.exports = errorMiddleware;
```

```js
const express = require("express");

const AppError = require("./utils/AppError");
const errorMiddleware = require("./middleware/errorMiddleware");

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());


// Routes
app.use("/api/users", userRoutes);


// 404 Handler
app.use((req, res, next) => {

  next(
    new AppError(
      `Route ${req.originalUrl} not found`,
      404
    )
  );

});

// Global Error Handler
app.use(errorMiddleware);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```


A production-style global error handling system in Express typically uses a custom error class for operational errors, forwards errors with next(error), handles unknown errors centrally, and returns consistent responses without exposing sensitive implementation details.



# asyncHandler.js
instead of writing again and again 
```js
try {
   ...
} catch(error) {
   next(error);
}
```
```js
const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise
      .resolve(fn(req, res, next))
      .catch(next);
  };
};

module.exports = asyncHandler;

// use like this 👇
// controller
const getUsers = asyncHandler(async (req, res) => {

  const users = await User.find();

  res.json({
    success: true,
    users
  });

});

// Promise rejection
//       ↓
// .catch(next)
//       ↓
// Global Error Handler
```


#  Role-based authorization?
Role-Based Authorization (RBAC) is an access-control mechanism where permissions are assigned to roles, and users gain access to resources based on their assigned roles.
```js
// user jwt payload 
{
  userId: 101,
  role: "admin"
}
const authorize = (...allowedRoles) => {
  return (req, res, next) => {

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        message: "Access denied"
      });
    }

    next();
  };
};

// use 
app.delete(
  "/users/:id",
  authMiddleware,
  authorize("admin"),
  deleteUser
);

```
# 🔐 Permission-Based Authorization
Permission-based authorization is an access-control mechanism where access is granted based on specific permissions assigned to a user or role, rather than only checking the user's role.

```js
// A user might have:

{
  name: "Priti",
  permissions: [
    "user:read",
    "user:update"
  ]
}

// middleware
const authorizePermission = (permission) => {
  return (req, res, next) => {
    if (!req.user.permissions.includes(permission)) {
      return res.status(403).json({
        message: "Permission denied"
      });
    }

    next();
  };
};

// use:
app.delete(
  "/users/:id",
  authMiddleware,
  authorizePermission("user:delete"),
  deleteUser
);
```

**Permissions based**
                      User
                      ↓
                      Permissions
                      ├── user:read     ✅
                      ├── user:update   ✅
                      └── user:delete   ❌

**Role-Based**
 Admin
 ↓
Can delete users


# Unhandled Promise rejection ?
An unhandled Promise rejection is a rejected Promise for which no rejection handler has been attached, such as .catch() or an appropriate try...catch around await.
```js
app.get("/users", async (req, res) => {
  const users = await User.find();

  res.json(users);
});
```
Better:
Handle by async/await + try...catch
```js
app.get("/users", async (req, res, next) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    next(error);
  }
});

// Then  
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Something went wrong"
  });
});
```

# uncaughtException vs unhandledRejection ?
uncaughtException is an event emitted by Node.js when an exception is thrown and remains uncaught within the event loop, potentially causing the Node.js process to terminate.

uncaughtException handles uncaught synchronous exceptions, while unhandledRejection refers to rejected Promises that have no rejection handler.


# what  should do when  Process crash ?
When a Node.js process crashes, we should log the root cause, gracefully shut down the process and release resources, then use a process manager or container orchestrator to automatically restart it. Unexpected errors such as uncaughtException and unhandledRejection should not be silently ignored.
1. Error  log 
2. Graceful shutdown  (Server ko suddenly kill karne ke bajay existing connections/cleanup complete karne do:)
3. Use Process Manager (PM2)  (pm2 start server.js)
                          Node.js Process
                                ↓
                              Crash ❌
                                ↓
                              PM2 detects
                                ↓
                            Restart 🔄
                                ↓
                          Node.js Process
4. Health monitoring
```js
// GET/health
app.get("/health", (req, res) => {
  res.json({
    status: "ok"
  });
});
```

# What is Graceful shutdown ?

Graceful shutdown is the process of safely stopping a Node.js application by finishing or allowing existing requests to complete and closing resources such as database connections, servers, and Redis connections before the process exits.

```js
const express = require("express");

const app = express();

const server = app.listen(3000, () => {
  console.log("Server running");
});

// Server ko suddenly kill karne ke bajay existing connections/cleanup complete karne do:
const shutdown = () => {
  console.log("Shutting down...");

  server.close(() => {
    console.log("Server closed");

    // DB connection close
    // Redis connection close
    // Other cleanup

    process.exit(0);
  });
};

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
```

# SIGTERM vs SIGINT
SIGTERM (Signal Terminate) is a signal sent to a process requesting it to terminate gracefully, allowing the application to perform cleanup before exiting.

Common use: Docker, Kubernetes, PM2, or process managers.

SIGINT (Signal Interrupt) is a signal sent to a process to interrupt its execution, commonly generated when the user presses Ctrl + C in the terminal.

Common use: Manually stopping a Node.js application during development.
```js
// code.js
  process.on("SIGTERM", () => {
  console.log("SIGTERM received");
  // graceful shutdown
});

process.on("SIGINT", () => {
  console.log("SIGINT received");
  // graceful shutdown
});
```


## Database & Node.js

# How Node.js  communicate with MongoDB ?
Node.js communicates with MongoDB through the MongoDB Node.js Driver or an ODM such as Mongoose, which manages the connection and sends database operations over the MongoDB protocol.

In Node.js, MongoDB communication is handled through the official MongoDB Node.js Driver, which provides MongoClient to establish a connection and methods to perform CRUD operations on MongoDB databases and collections.

```js
// MongoDB Driver install
// 1. Import MongoDB Driver

const { MongoClient } = require("mongodb");
// 2. MongoDB Connection URI

// Local MongoDB server
// 27017 = MongoDB  default port

const uri = "mongodb://127.0.0.1:27017";

// 3. Create MongoDB Client

const client = new MongoClient(uri);

// 4. Connect to MongoDB
async function connectDB() {

  try {
    // Connect Node.js → MongoDB
    await client.connect();

    console.log("MongoDB connected successfully");

    // 5. Select Database
    const db = client.db("myapp");

    // 6. Select Collection
    const users = db.collection("users");

    // 7. CREATE / INSERT
    const insertResult = await users.insertOne({
      name: "Priti",
      age: 25,
    });

    console.log("Inserted:", insertResult);

    // 8. READ / FIND
    const data = await users
      .find()
      .toArray();

    console.log("Users:", data);

    // 9. UPDATE
    const updateResult = await users.updateOne(
      {
        name: "Priti",
      },
      {
        $set: {
          age: 26,
        },
      }
    );
    console.log("Updated:", updateResult);

    // 10. DELETE
    const deleteResult = await users.deleteOne({
      name: "Priti",
    });
    console.log("Deleted:", deleteResult);
  } catch (error) {
    // 11. Error Handling
    console.error("MongoDB Error:", error);

  } finally {
    // 12. Close Connection
    await client.close();
    console.log("MongoDB connection closed");
  }
}
connectDB();
```

# CRUD in Node js 
```js
// IMPORT MODULES
const http = require("http");
const { MongoClient, ObjectId } = require("mongodb");

// MONGODB CONFIGURATION
const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);

// SERVER CONFIGURATION

const PORT = 3000;
// DATABASE CONNECTION

let todosCollection;

// HELPER: SEND JSON RESPONSE

function sendResponse(res, statusCode, data) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json",
  });
  res.end(JSON.stringify(data));
}

// HELPER: READ REQUEST BODY

function getRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";

    // Request body chunks mein aa sakti hai
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    // Jab complete body aa jaye
    req.on("end", () => {
      try {
        const data = body ? JSON.parse(body) : {};
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", (error) => {
      reject(error);
    });
  });
}

// CREATE TODO
// POST /todos

async function createTodo(req, res) {
  try {
    const body = await getRequestBody(req);
    const { title } = body;

    // Validation
    if (!title) {
      return sendResponse(res, 400, {
        message: "Title is required",
      });
    }

    // Todo object
    const todo = {
      title,
      completed: false,
      createdAt: new Date(),
    };

    // MongoDB mein insert
    const result = await todosCollection.insertOne(todo);
    sendResponse(res, 201, {
      message: "Todo created",
      todo: {
        _id: result.insertedId,
        ...todo,
      },
    });

  } catch (error) {
    console.error(error);
    sendResponse(res, 500, {
      message: "Failed to create todo",
    });
  }
}

// GET ALL TODOS
// GET /todos

async function getTodos(req, res) {
  try {
    const todos = await todosCollection
      .find()
      .toArray();
    sendResponse(res, 200, {
      todos,
    });
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, {
      message: "Failed to fetch todos",
    });
  }
}

// GET SINGLE TODO
// GET /todos/:id

async function getTodo(req, res, id) {
  try {
    // String ID ko MongoDB ObjectId mein convert
    const todoId = new ObjectId(id);
    const todo = await todosCollection.findOne({
      _id: todoId,
    });

    if (!todo) {
      return sendResponse(res, 404, {
        message: "Todo not found",
      });
    }
    sendResponse(res, 200, {
      todo,
    });
  } catch (error) {
    console.error(error);
    sendResponse(res, 400, {
      message: "Invalid todo ID",
    });
  }
}

// UPDATE TODO
// PATCH /todos/:id

async function updateTodo(req, res, id) {
  try {
    const body = await getRequestBody(req);
    const todoId = new ObjectId(id);
    const updateData = {};

    // Agar title diya gaya hai
    if (body.title !== undefined) {
      updateData.title = body.title;
    }

    // Agar completed diya gaya hai
    if (body.completed !== undefined) {
      updateData.completed = body.completed;
    }

    // MongoDB update
    const result = await todosCollection.updateOne(
      {
        _id: todoId,
      },
      {
        $set: updateData,
      }
    );
    if (result.matchedCount === 0) {
      return sendResponse(res, 404, {
        message: "Todo not found",
      });
    }
    sendResponse(res, 200, {
      message: "Todo updated",
    });
  } catch (error) {
    console.error(error);
    sendResponse(res, 400, {
      message: "Invalid todo ID",
    });
  }
}

// DELETE TODO
// DELETE /todos/:id

async function deleteTodo(req, res, id) {
  try {
    const todoId = new ObjectId(id);
    const result = await todosCollection.deleteOne({
      _id: todoId,
    });
    if (result.deletedCount === 0) {
      return sendResponse(res, 404, {
        message: "Todo not found",
      });
    }
    sendResponse(res, 200, {
      message: "Todo deleted",
    });

  } catch (error) {
    console.error(error);
    sendResponse(res, 400, {
      message: "Invalid todo ID",
    });
  }
}

// HTTP SERVER
const server = http.createServer(async (req, res) => {
  const method = req.method;
  // Example:
  // /todos
  // /todos/65abc123...

  const url = new URL(
    req.url,
    `http://${req.headers.host}`
  );
  const pathname = url.pathname;
  console.log(method, pathname);

  // POST /todos
  if (
    method === "POST" &&
    pathname === "/todos"
  ) {
    return createTodo(req, res);
  }

  // GET /todos
  if (
    method === "GET" &&
    pathname === "/todos"
  ) {
    return getTodos(req, res);
  }

  // /todos/:id
  if (pathname.startsWith("/todos/")) {
    const id = pathname.split("/")[2];

    // GET /todos/:id
    if (method === "GET") {
      return getTodo(req, res, id);
    }

    // PATCH /todos/:id
    if (method === "PATCH") {
      return updateTodo(req, res, id);
    }

    // DELETE /todos/:id
    if (method === "DELETE") {
      return deleteTodo(req, res, id);
    }
  }

  // ROUTE NOT FOUND
  sendResponse(res, 404, {
    message: "Route not found",
  });
});

// START DATABASE + SERVER
async function startServer() {
  try {
    // MongoDB connection
    await client.connect();
    console.log("MongoDB connected");

    // Database select
    const db = client.db("todoApp");

    // Collection select
    todosCollection = db.collection("todos");

    // Start HTTP server
    server.listen(PORT, () => {
      console.log(
        `Server running at http://localhost:${PORT}`
      );
    });
  } catch (error) {
    console.error(
      "Failed to start server:",
      error
    );
    process.exit(1);
  }
}
startServer();
```

# What is Mongoose kya hai?
Mongoose is an ODM (Object Data Modeling) library for Node.js and MongoDB that provides schemas, models, validation, and convenient methods for interacting with MongoDB.
```js
const mongoose = require("mongoose");

// Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  age: {
    type: Number
  }
});

// Model
const User = mongoose.model("User", userSchema);

// Create user
const user = await User.create({
  name: "Priti",
  age: 25
});
```

# What is Mongoose schema ?
A Mongoose Schema is a blueprint that defines the structure, types, validation rules, and other behavior of documents managed by a Mongoose model.
```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  age: {
    type: Number,
    min: 18
  }
});
```

# What is Model?
A Mongoose Model is a JavaScript object created from a Schema that provides an interface to interact with a MongoDB collection and perform database operations like create, read, update, and delete (querying documents).
```js
// Schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// Model
const User = mongoose.model("User", userSchema);

// Model already registered error
const User=  mongoose.models.User ||
  mongoose.model("User", userSchema);

// operations 
// 1. Create Methods
              Model.create()//mongoose
              Model.insertMany()//mongoose 
              Model.insertOne()//mongodb
// 2. Read Methods
                  Model.find()
                  Model.findOne()
                  Model.findById()
                  Model.exists()
                  Model.countDocuments()
                  Model.distinct()
// 3. Update Methods
                  Model.updateOne()
                  Model.updateMany()
                  Model.findByIdAndUpdate()
                  Model.findOneAndUpdate()
// 4. Delete Methods
                  Model.deleteOne()
                  Model.deleteMany()
                  Model.findByIdAndDelete()
                  Model.findOneAndDelete()

// 5. Query / Advanced Methods/method chaining 
                  Model.bulkWrite()
                            find()
                            sort()
                            skip()
                            limit()
                            select()
                            populate()
                            lean()
```

- # What is populate() in Mongoose?
populate() is a Mongoose method used to replace referenced MongoDB ObjectIds with the corresponding (actual data ) documents from another collection.

Populate chaining is used to populate multiple references in a query, while nested populate is used when a referenced document itself contains another reference that also needs to be populated.
```js
const postSchema = new mongoose.Schema({
  title: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,// this store reference id of User 
    ref: "User"
  }
});
// Without populate
const post = await Post.findOne();
console.log(post);
{
  "title": "Learn Node.js",
  "author": "64abc123"// Without populate we gets ref id only ,Not actual Data
}

// With populate()
const post = await Post.findOne().populate("author")
console.log(post);// gets  exact data 

{
  "title": "Learn Node.js",
  "author": {                         // gets  exact data 
    "_id": "64abc123",
    "name": "Priti",
    "email": "priti@gmail.com"
  }
}

// Specific fields bhi le sakte ho
const post = await Post
  .findOne()
  .populate("author", "name email");// this time we didn't get id 

  {
  "title": "Learn Node.js",
  "author": {
    "name": "Priti",
    "email": "priti@gmail.com"
  }
}

// Suppose  have 
// 1. User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String
});
// 2. Category Schema
const categorySchema = new mongoose.Schema({
  name: String
});
// 3. Comment Schema
const commentSchema = new mongoose.Schema({
  text: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});
// 4. Post Schema
const postSchema = new mongoose.Schema({
  title: String,

  content: String,

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  },

  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

// we gets data like this without populate
{
  "_id": "post101",
  "title": "Learn Node.js",
  "content": "Node.js is a runtime...",
  "author": "user101",
  "category": "cat101",
  "comments": [
    "comment101",
    "comment102"
  ]
}

// Multiple fields populate
// → Same document ke multiple references
const post = await Post
  .findById(postId)
  .populate("author")
  .populate("category");
  .populate("comments");

// Now getting 
{
  "title": "Learn Node.js",
  "author": {
    "name": "Priti"
  },
  "category": {
    "name": "Programming"
  },
  "comments": [
    {
      "_id": "comment101",
      "text": "Very useful!"
    },
    {
      "_id": "comment102",
      "text": "Nice explanation!"
    }
  ]
}

// Nested populate
// → Populated document ke andar ka reference
const post = await Post
  .findById(postId)
  .populate("author")
  .populate("category")
  .populate({
    path: "comments",
    populate: {
      path: "user"
    }
  });
//
  {
  "title": "Learn Node.js",
  "author": {
    "name": "Priti"
  },
  "category": {
    "name": "Programming"
  },
  "comments": [
    {
      "text": "Very useful!",
      "user": {
        "name": "Rahul",
        "email": "rahul@gmail.com"
      }
    },
    {
      "text": "Nice explanation!",
      "user": {
        "name": "Amit",
        "email": "amit@gmail.com"
      }
    }
  ]
}
```

# What is MongoDB indexing?
MongoDB indexing is a data-optimization technique that creates indexes on fields to speed up query operations by avoiding unnecessary full collection scans.

```js
db.users.find({
  email: "priti@gmail.com"
});// this scan whole document one by one 

//✅ With Index (mongodb)

db.users.createIndex({
  email: 1
});

// mongoose index 
const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    index: true// adding
  }
});
// or  use this 
userSchema.index({
  email: 1
});
              // 1  → Ascending
              // -1 → Descending


// Compound Index
// Multiple fields par ek index:
db.users.createIndex({
  age: 1,
  city: 1
});
//usefull query 
db.users.find({
  age: 25,
  city: "Delhi"
});

// Unique Index
db.user.createIndex({
  {email:1},
  {unique:true}
})
```


# find() vs findOne()
find() returns an array containing all matching documents or [] if no document matches, whereas findOne() returns the first matching document or null if no document matches.

```js
Collection
│
├── Priti   age: 25  ← match
├── Vipin   age: 25  ← match
├── Amit    age: 25  ← match
└── Neha    age: 30

const users = await User.find();// return array of doc

[
  {name:"Priti",age:25},
  {name:"Vipin",age:25},
  {name:"Amit",age:25},
  {name:"Neha",age:30},
]


const users = await User.find({ age: 25 })// 
[
  {name:"Priti",age:25},
  {name:"Vipin",age:25},
  {name:"Amit",age:25},
]

//first matching document
const users= await User.findOne({age:25});//priti
//Priti  

// const user = await User.findOne({
//   email: "priti@gmail.com"
// });

```

# findById()
findById() returns the document matching the specified _id, or null if no matching document exists.
```js
User.findById(req.params.id)
// __id
const user = await User.findById("64abc123...");
```

# insertOne() vs insertMany()   in MongoDB?
insertOne() inserts a single document into a MongoDB collection and returns an InsertOneResult containing the ID of the inserted document.

```js
const result = await db.collection("users").insertOne({
  name: "Priti",
  age: 25
});
console.log(result);
// Returns 
{
  acknowledged: true,
  insertedId: ObjectId("...")
}
```

insertMany() inserts multiple documents into a MongoDB collection and returns an InsertManyResult containing the IDs of the inserted documents.
```js
const result = await db.collection("users").insertMany([
  {
    name: "Priti",
    age: 25
  },
  {
    name: "Rahul",
    age: 30
  }
]);

console.log(result);

// Returns 
{
  acknowledged: true,
  insertedIds: {
    0: ObjectId("..."),
    1: ObjectId("...")
  }
}
```



# what is Model.create()  insertMany() in mongoose ?
**Model.create()**
Creates one or more documents through a Mongoose model and returns the created document(s).
```js
const user = await User.create({
  name: "Priti",
  age: 25
});

console.log(user);

//   Returns: created Mongoose document
{
  _id: "...",
  name: "Priti",
  age: 25
}
```
**Model.insertMany()**
Inserts multiple documents into a MongoDB collection through Mongoose and returns the inserted documents as an array.
```js
const users = await User.insertMany([
  {
    name: "Priti",
    age: 25
  },
  {
    name: "Rahul",
    age: 30
  }
]);

console.log(users);
// Returns  Array of inserted documents
[
  {
    _id: "...",
    name: "Priti",
    age: 25
  },
  {
    _id: "...",
    name: "Rahul",
    age: 30
  }
]
```


# Model.updateOne()  , Model.updateMany()
updateOne() updates the first document that matches the filter and returns an update result, not the updated document itself.
```js
const result = await User.updateOne(
  { name: "Priti" },
  {
    $set: {
      age: 26
    }
  }
);

console.log(result);

// Returns 
{
  acknowledged: true,
  matchedCount: 1, (kitne documents match hue)
  modifiedCount: 1  (kitne actually update hue)
}
```
updateMany() updates all documents that match the filter and returns an update result.

```js
[
  { name: "Priti", age: 25 },
  { name: "Vipin", age: 25 },
  { name: "Divy", age: 30 }
]
const result = await User.updateMany(
  { age: 25 },
  {
    $set: {
      verified: true
    }
  }
);
console.log(result);
// Returns
{
  acknowledged: true,
  matchedCount: 2,
  modifiedCount: 2
}
```

# Model.findByIdAndUpdate()   VS Model.findOneAndUpdate()
findByIdAndUpdate() finds a document by its _id, updates it, and can return the document.
```js
const user = await User.findByIdAndUpdate(
  userId,
  {
    $set: {
      age: 26
    }
  },
  {
    new: true
  }
);
console.log(user);

// Return With 
{
  new: true// it returns the updated document:
}
// result 
{
  _id: "...",
  name: "Priti",
  age: 26
}

// With out new:true by default it returns the document before the update.
```

findOneAndUpdate() finds the first document matching a specified condition, updates it, and can return the document.

```js
// PUT is used to completely replace an existing resource with a new representation.
// PATCH is used to partially modify an existing resource by changing only the specified fields.

const user = await User.findOneAndUpdate(
  {
    email: "priti@gmail.com"
  },
  {
    // A partial update means modifying only specific fields of an existing document without replacing the entire document.
    $set: {// partial update
      age: 26
    }
  },
  {
    new: true
  }
);

console.log(user);
//Returns 
{
  _id: "...",
  name: "Priti",
  email: "priti@gmail.com",
  age: 26
}
```


# Model.deleteOne() VS   Model.deleteMany()
deleteOne() deletes the first document that matches the specified filter and returns a delete result. instead of returning deleted record deleteOne() and deleteMany() always return a result object (deletedCount tells whether anything was deleted),

```js
const result = await User.deleteOne({
  email: "priti@gmail.com"
});
// return result 
{
  acknowledged: true,
  deletedCount: 1
}
``` 

deleteMany() deletes all documents that match the specified filter and returns a delete result. instead of returning deleted records 

```js
const result = await User.deleteMany({
  age: 25
});
// Returns 
{
  acknowledged: true,
  deletedCount: 3
}
```

# Model.findByIdAndDelete()    VS Model.findOneAndDelete()
findByIdAndDelete() finds a document by its _id, deletes it, and returns the deleted document. or null if  no match found

```js
const user = await User.findByIdAndDelete(userId);
// Returns 
{
  _id: "...",
  name: "Priti",
  age: 25
}
```
findOneAndDelete() finds the first document matching the specified filter, deletes it, and returns the deleted document. or null if no match found

```js
const user = await User.findOneAndDelete({
  email: "priti@gmail.com"
});

// Returns
{
  _id: "...",
  name: "Priti",
  email: "priti@gmail.com",
  age: 25
}
```


deleteOne() and deleteMany() always return a result object (deletedCount tells whether anything was deleted), whereas findByIdAndDelete() and findOneAndDelete() return the deleted document, or null if no matching document exists.

# What is Projection?
Projection is used to include only the required fields or exclude unnecessary fields from MongoDB query results. It improves data security, reduces response size, and can improve query efficiency.
**USEFULL**
1. 🔐 Sensitive data hide
2. 📦 Reduce Response size
3. ⚡ Performance improve
4. 🧹 Clean API response
```js
{
  name: "Priti",
  email: "priti@gmail.com",
  age: 25,
  password: "123456",
  city: "Delhi"
}
// Need Only name and  email
const users = await User.find()
  .select("name email");
  //Returns
  {
  name: "Priti",
  email: "priti@gmail.com"
}
// Password exclude
const users = await User.find()
  .select("-password");// excluded password 

                                                                  1 → Include ✅
                                                                  0 → Exclude ❌

User.find(
  { email: "priti@gmail.com" }, // Filter query 
  { name: 1, email: 1 }         // Projection
  { password: 0}                   //excluded 
);
```


# What is Aggregation in mongoDB
MongoDB Aggregation is a data processing framework that transforms documents through a sequence of pipeline stages such as $match, $group, $sort, $project, and $lookup to produce a computed result.

```js
// Order collection 

{
  _id: 1,
  userId: 101,
  productId: 501,
  quantity: 2,
  price: 500,
  status: "completed"
}
//User collection
{
  _id: 101,
  name: "Priti",
  city: "Delhi"
}

const result = await Order.aggregate([
  // 1. $match
  // Sirf completed orders lenge

  {
    $match: {
      status: "completed"
    }
  },
  // 2. $lookup
  // orders ko users collection ke saath join karenge
  {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "user"
    }
  },
  // 3. $unwind
  // user array ko object mein convert karega
  {
    $unwind: "$user"
  },
  // 4. $group
  // City ke according orders group karenge

  {
    $group: {
      _id: "$user.city",

      totalOrders: {
        $sum: 1
      },

      totalRevenue: {
        $sum: {
          $multiply: [
            "$quantity",
            "$price"
          ]
        }
      }
    }
  },
  // 5. $project
  // Final output ka structure define karenge

  {
    $project: {
      _id: 0,

      city: "$_id",

      totalOrders: 1,

      totalRevenue: 1
    }
  },
  // 6. $sort
  // Highest revenue first

  {
    $sort: {
      totalRevenue: -1
    }
  },
  // 7. $skip
  // First result skip

  {
    $skip: 0
  },

  // 8. $limit
  // Sirf top 10 cities
  {
    $limit: 10
  }
]);

console.log(result);
```



# $lookup in mongodb
$lookup is a MongoDB aggregation stage used to combine documents from one collection with related documents from another collection, similar to a JOIN in SQL.

```$lookup performs a left outer join between two MongoDB collections by matching a field from the current collection with a field from another collection.```

```js
{
  $lookup: {
    from: "users",          // jis collection se data lana hai
    localField: "userId",   // current collection ka field
    foreignField: "_id",    // other collection ka matching field
    as: "user"              // result kis field mein aayega
  }
}

// Order collection
{
  _id: 1,
  userId: 101,
  product: "Laptop"
}
// User collection
{
  _id: 101,
  name: "Priti",
  email: "priti@gmail.com"
}
// $lookup code
const result = await Order.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "user"
    }
  }
]);

// Result 
{
  _id: 1,
  userId: 101,
  product: "Laptop",

  user: [
    {
      _id: 101,
      name: "Priti",
      email: "priti@gmail.com"
    }
  ]
}
```


# What is Connection pooling  ?
Connection pooling is a mechanism that maintains a set of reusable database connections and assigns them to requests as needed, reducing the overhead of repeatedly creating and closing connections.



# What Does Database connection pool ?
Database connection pooling is important because it reuses a limited number of database connections, reducing connection-creation overhead, improving performance, controlling database resources, and allowing applications to handle concurrent requests efficiently.

1. 🚀 Performance improve
2. ♻️ Connection reuse
3. 📈 handle  High traffic
4. 🧠 Database resources save
5. ⚡ Connection creation  overhead  Reduce

```js
// Connection Pool = Create once → Reuse many times → Better performance + scalability
mongoose.connect(MONGO_URI, {
  maxPoolSize: 10
});
```

# What is  Transaction?
A transaction is a group of database operations that are treated as one unit of work. Either all operations succeed, or all of them are rolled back if any operation fails.

```js
Transaction START
       ↓
Deduct ₹500
       ↓
Add ₹500
       ↓
Both successful?
   ↓            ↓
  YES        NO
   ↓            ↓
COMMIT   ROLLBACK
   ↓            ↓
Save         Undo changes


COMMIT vs ROLLBACK
COMMIT-->> All operations successful → changes permanently save.
ROLLBACK--->> Any operation fails → transaction ke changes undo.

// it use session  
const session = await mongoose.startSession();
 session.startTransaction(); 
 session.commitTransaction();
 session.abortTransaction();
 session.endSession();
```
# What is Helmet ?
Helmet is an Express.js middleware that improves application security by setting HTTP response headers that protect against common web vulnerabilities.
```js
npm install helmet
const express = require("express");
const helmet = require("helmet");
const app = express();
app.use(helmet());
app.get("/", (req, res) => {
  res.send("Hello");
});
app.listen(3000);
```

# What is sharding ? 
Sharding is a horizontal scaling technique in which data is distributed across multiple MongoDB servers (shards) using a shard key instead of storing all data on a single server.

Without Sharding
```js
                          MongoDB Server
                                      ↓
                      ┌─────────────────┐
                      │   1 TB Data                  │
                      │   10M Users                │
                      └─────────────────┘
```
With Sharding

```js
Suppose users collection have 30millian user
Shard 1 → User 1 - 10 million
Shard 2 → User 10 - 20 million
Shard 3 → User 20 - 30 million

                                     MongoDB
                                            ↓
                        ┌─────────┼─────────┐
                        ↓                  ↓                  ↓
                    Shard 1           Shard 2       Shard 3
                        ↓                  ↓                  ↓
                    Users              Users           Users
                    1-10M              10-20M        20-30M
                    Data multiple servers par distribute ho jata hai.
```

# shard key ?
Shard key is the field or combination of fields MongoDB uses to distribute documents across shards.

```js
{
  userId: 101,//userId shard key
  name: "Priti"
}

Sharding = Data split across servers
Replication = Data copied across servers  (Replication = Same data ki multiple copies, multiple servers par.)
```

# Replication
Replication is the process of maintaining copies of the same data on multiple MongoDB servers to provide high availability, fault tolerance, and redundancy.

```js
                            MongoDB Replica Set
                                        │
                            ┌─────┴─────┐
                            ↓                      ↓
                        Primary             Secondary
                            │                      │
                          Read/Write        Copy
                            │                      │
                            └─────┬─────┘
                                        ↓
                                   Secondary
                                        │
                                     Copy
```
Primary is the MongoDB replica-set member that normally receives all write operations.

Secondary is a replica-set member that maintains a copy of the Primary's data and can become Primary if the current Primary fails.

# What is Horizontal scaling?
Horizontal scaling means adding more servers/instances to handle increased traffic.
```js
 Client
    ↓
Server 1
// After
                                Client
                                  │
                                  ▼
                              NGINX/Reverse proxy
                          Load Balancer
                                  │
          ┌───────────┼───────────┐
          ▼                      ▼                       ▼
       Node 1              Node 2             Node 3
       :3001                  :3002                :3003
```

# What is Vertical scaling?
Vertical scaling means increasing the CPU, RAM, storage, or other resources of an existing server.
```js
                  Before                              After
                ┌─────────┐        ┌─────────────┐
                │ Server        │   →   │   Server             │
                │ 4 CPU         │        │  16 CPU              │
                │ 8 GB          │        │  32 GB RAM        │
                └─────────┘        └─────────────┘
```

# What is  Caching ?
Caching is a technique of temporarily storing frequently accessed data in a fast storage layer so that future requests can retrieve it faster instead of fetching it again from the original source.
⚡ Response time improves
🗄️ Database load reduce 
📈 High traffic handle
💰 Database resources bachane 

**cache aside pattern**
Cache-aside pattern is a caching strategy where the application first checks the cache for data. If the data is found, it returns it; if not, it fetches the data from the database, stores it in the cache, and then returns it.

Without caching
Client
  ↓
Node.js
  ↓
MongoDB
  ↓
Data
  ↓
Node.js
  ↓
Client
```js
// With caching 
                      Client
                        ↓
                      Node.js
                        ↓
                      Redis Cache
                        │
                        ├── Data found? → Return immediately ⚡
                        │
                        └── Not found?
                                ↓
                            MongoDB
                                ↓
                            Data (stores )
                                ↓
                            Redis
                                ↓
                            Client
            
            
const products = await Product.find();

First request:
Client
 ↓
Redis ❌
 ↓
MongoDB
 ↓
Products
 ↓
Redis ✅
 ↓
Client


Next request:
Client
 ↓
Redis ✅
 ↓
Products ⚡
```

# Cache Hit vs Cache Miss
A cache hit occurs when the requested data is already available in the cache, so the application can return the data directly from the cache without accessing the original data source.
```js
            Client
              ↓
            Cache
              ↓
            Data found ✅
              ↓
            Return data
        
const data = await redis.get("users");

if (data) {
  return JSON.parse(data); // Cache Hit
}
```
A cache miss occurs when the requested data is not available in the cache, so the application must fetch it from the original data source, such as a database, and may store it in the cache for future requests.

```js
              Client
                ↓
              Cache
                ↓
              Data not found ❌
                ↓
              MongoDB
                ↓
              Get data
                ↓
              Store in Cache
                ↓
              Return data
```
```js
const cachedData = await redis.get("users");
if (!cachedData) {
  const users = await User.find();
  await redis.set(
    "users",
    JSON.stringify(users)
  );
  return users; // Cache Miss
}
```

# What is Redis kya hai?
Redis (Remote Dictionary Server) is an in-memory database that stores data in RAM instead of disk, making it extremely fast. It is mainly used to cache frequently used data and reduce the load on the main database, which improves system performance and response time.

Stores frequently accessed data so applications can retrieve it quickly without querying the main database, improving performance and response time.
Used to store user sessions for fast authentication and helps manage queues, leaderboards, and analytics in applications requiring quick updates.
```js
const cachedProducts = await redis.get("products");

if (cachedProducts) {
  return JSON.parse(cachedProducts);
}
const products = await Product.find();
await redis.set(
  "products",
  JSON.stringify(products),
  { EX: 60 }
);

return products;
```

```js
                             Client
                                ↓
                              Nginx
                                ↓
                          Load Balancer
                                ↓
              ┌────────┴────────┐
              ↓                                  ↓
          Node Server 1        Node Server 2
              │                                  │
              └────────┬────────┘
                                ↓
                             Redis
                                 │
             ┌─────────┼─────────┐
             ↓                  ↓                  ↓
           Cache          Session    Queue
                                 │
                                 ↓
                           MongoDB
```

# What is  Cache invalidation ?
Cache invalidation is the process of removing, updating, or marking cached data as stale when the original data changes, so users don't receive outdated information.
```js
{
  name:"Laptop",
  price:50000
}
In mongodb price: 50000 → 45000

In Redis price: 50000 

                          Update MongoDB
                              ↓
                          Price = 45000
                              ↓
                          Invalidate Redis
                              ↓
                          Delete old cache
                              ↓
                          Next request
                              ↓
                          Cache MISS
                              ↓
                          MongoDB
                              ↓
                          45000
                              ↓
                          Store new value in Redis
      
Database changes
      ↓
Cache has old data
      ↓
Invalidate
      ↓
Remove / Update cache
      ↓
Fresh data ✅
```
```js
await Product.findByIdAndUpdate(
  productId,
  { price: 45000 }
);
// Old cached value remove
await redis.del(`product:${productId}`);

// Next request:
const cached = await redis.get(`product:${productId}`);

if (cached) {
  return JSON.parse(cached);
}

// Cache miss
const product = await Product.findById(productId);

await redis.set(
  `product:${productId}`,
  JSON.stringify(product),
  { EX: 60 }
);

return product;


//TTL - Cache automatically expire:
await redis.set(
  "product:101",
  JSON.stringify(product),
  { EX: 60 } //  Cache automatically expire:  After 60 seconds  cache expire 
);
```

# What is TTL ?
TTL (Time To Live) defines how long a piece of data remains valid or stored before it automatically expires.
```js
await redis.set(
  "product:101",
  JSON.stringify(product),
  {
    EX: 60
  }
);
```

# Why we used Redis in   Node.js ?
Redis is used with Node.js as a high-speed in-memory data store to reduce database load, improve response time, manage sessions, implement rate limiting, and process background jobs through queues.
1. ⚡ Faster response
2. 🗄️Reduce  Database load
3. 🔄 Cache Hit / Miss
4. 🔐 Session management
5. 🚦 Rate limiting
6. 📩 Background jobs / queues




# Load Balancer
A load balancer distributes incoming requests across multiple servers to prevent overload and improve scalability, performance, and availability.
Users
  ↓
Node.js Server

```js
                                Client
                                  │
                                  ▼
                              NGINX
                          Load Balancer
                                  │
          ┌───────────┼───────────┐
          ▼                      ▼                       ▼
       Node 1              Node 2             Node 3
       :3001                  :3002                :3003

// 1000
        1000 Requests
               ↓
        Load Balancer
          ↙   ↓   ↘
        300   350   350
        ↓     ↓     ↓
        S1    S2    S3 
```
Scalability → multiple servers use kar sakte hain.
High availability → ek server fail ho jaye to traffic dusre servers par ja sakta hai.
Performance → workload distribute hota hai.
Fault tolerance → unhealthy servers ko traffic se remove kiya ja sakta hai.

# Rate Limiting
Rate limiting is a mechanism that controls how many requests a client can make to a server or API within a defined time window, helping prevent abuse, brute-force attacks, and excessive server load.

```js
const express = require("express");
const rateLimit = require("express-rate-limit");
const app = express();
app.use(express.json());

// 1. Login Rate Limiter

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes

  max: 5, // Maximum 5 requests per IP

  message: {
    success: false,
    message: "Too many login attempts. Please try again later."
  },

  standardHeaders: true,
  legacyHeaders: false
});
// 2. Login API
app.post(
  "/api/auth/login",
  loginLimiter,
  async (req, res) => {
    const { email, password } = req.body;
    console.log("Login attempt:", email);

    // Normally:
    //
    // 1. User database se find hoga
    // 2. Password bcrypt se compare hoga
    // 3. JWT generate hoga

    res.json({
      success: true,
      message: "Login request received"
    });
  }
);
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```
```js
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5
});

const otpLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 3
});

const apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100
});

app.post(
  "/api/auth/login",
  loginLimiter,
  loginController
);

app.post(
  "/api/auth/send-otp",
  otpLimiter,
  sendOtpController
);

app.use(
  "/api",
  apiLimiter
);
```
In a production Express application, I would apply stricter rate limits to sensitive endpoints such as login, OTP, and password-reset APIs. For a single instance, an in-memory limiter can work, while a distributed deployment with multiple Node.js instances should use a shared store such as Redis so that all instances enforce the same limit.

 # What is  Nginx + Node.js  architecture?
Client → Nginx → Node.js
Nginx is a high-performance web server and reverse proxy that forwards client requests to backend servers.

Nginx is a high-performance web server and reverse proxy commonly used to serve static content, route requests to backend servers, load-balance traffic, handle HTTPS, and improve application performance and availability.

# What is Reverse Proxy?
A reverse proxy is a server that sits between clients and backend servers and forwards client requests to the appropriate backend server.
Client
  ↓
Reverse Proxy = Gatekeeper 🚪
  ↓
Backend Server



# Redis vs MongoDB?
MongoDB is primarily a persistent NoSQL document database, while Redis is primarily an in-memory data store commonly used for caching, sessions, queues, and fast temporary data.
```js
// Mongodb  stores data like this (persistent)
{
  _id: 101,
  name: "Laptop",
  price: 50000,
  stock: 20
}

// Radis stores data   (where  from fast access )
product:101
    ↓
{
  name: "Laptop",
  price: 50000
}
TTL: 60 seconds
```

# What is Session storage using Redis?
Session storage using Redis means storing a user's session data in Redis instead of keeping it inside the Node.js server's memory.
```js
app.use(session({
  store: new RedisStore({
    client: redisClient
  }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60
  }
}));
```


- Distributed caching kya hai?


- Brute-force attack?
- SQL Injection?
- NoSQL Injection?

- TLS ka basic working?
- Secrets/environment variables safely kaise manage karoge?
- API security ke best practices?






- ===================================================================================
