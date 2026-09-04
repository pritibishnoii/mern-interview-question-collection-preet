## 📚  Questions
## 📚 Table of Contents
 
1. [What is JavaScript?](#what-is-javascript)
2. [What are the var vs let vs const](#what-are-the-var-vs-let-vs-const)
3. [What is Hoisting](#what-is-hoisting-)
  [What is variable shadowing?](#what-is-variable-shadowing)
4. [What is Temporal Dead Zone?](#what-is-temporal-dead-zone)
5. [Scope & Lexical Scope](#scope-lexical-scope)
6. [What is Closures](#what-is-closures)
7. [why is a closure?](#why-is-a-closure)
    [Does closure capture a snapshot?](#does-closure-capture-a-snapshot)
8. [Why does Closure preserve variables?](#why-does-closure-preserve-variables)
    [What is IIFI](#what-is-iifi)
    [How does JavaScript execute code](#how-does-javaScript-execute-code)
9. [Execution Context](#execution-context)
10. [What is the Lexical Environment?](#what-is-the-lexical-environment)
11. [What is the Variable Environment?](#what-is-the-variable-environment)
12. [Objects, Prototypes & this](#objects-prototypes-this)
13. [Why Prototype?](#why-prototype)
14. [Prototype  vs  __proto__ ?](#prototype-vs-__proto__)
15. [Why does it exist?](#why-does-it-exist)
16. [🧬 Prototype Chain](#prototype-chain)
17. [Difference between __proto__ and prototype?](#difference-between-__proto__-and-prototype)
18. [Constructor function vs Class?](#constructor-function-vs-class)
19. [What is Object.create()?](#what-is-objectcreate)
20. [Object.create() vs {}](#objectcreate-vs)
21. [Object.create() vs new?](#objectcreate-vs-new)
22. [What happens when a property doesn't exist on an object?](#what-happens-when-a-property-doesnt-exist-on-an-object)
23. [Property Lookup Process How does property lookup work?](#property-lookup-process-how-does-property-lookup-work)
24. [Object.freeze() vs Object.seal()?](#objectfreeze-vs-objectseal)
25. [Object.preventExtensions()?](#objectpreventextensions)
26. [How do getters and setters work?](#how-do-getters-and-setters-work)
27. [What is a Proxy?](#what-is-a-proxy)
28. [Call() Apply(), Bind ()](#call-apply-bind)
29. [== vs ===](#vs)
30. [Type Coercion](#type-coercion)
31. [Difference between Type Conversion and Type Coercion](#difference-between-type-conversion-and-type-coercion)
32. [Pass by values pass by reference](#pass-by-values-pass-by-reference)
33. [Is JavaScript pass-by-reference?](#is-javascript-pass-by-reference)
34. [Mutation vs Reassignment (Object  Reference type)](#mutation-vs-reassignment-object-reference-type)
35. [Primitive](#primitive)
36. [NaN](#nan)
37. [Shallow vs Deep Copy](#shallow-vs-deep-copy)
   - [Shallow Copy -- creates a new object, but nested objects are still shared between the original and copied object.](#shallow-copy-creates-a-new-object-but-nested-objects-are-still-shared-between-the-original-and-copied-object)
38. [Deeep Copy](#deeep-copy)
   - [--  creates a completely independent copy, including nested objects.](#creates-a-completely-independent-copy-including-nested-objects)
39. [Spread vs Rest](#spread-vs-rest)
40. [Destructuring](#destructuring)
41. [Higher-Order Functions](#higher-order-functions)
42. [Callback](#callback)
43. [Callback Hell](#callback-hell)
44. [Promises](#promises)
45. [Pomise Chain](#pomise-chain)
46. [async/await](#asyncawait)
47. [Asynchronous JavaScript](#asynchronous-javascript)
48. [Call Stack](#call-stack)
49. [Event Loop](#event-loop)
50. [Microtask vs Macrotask](#microtask-vs-macrotask)
51. [Debouncing](#debouncing)
52. [Throttling](#throttling)
53. [Event Propagation](#event-propagation)
54. [Event Bubbling/Capturing](#event-bubblingcapturing)
55. [stopPropagation() vs stopImmediatePropagation()](#stoppropagation-vs-stopimmediatepropagation)
56. [Event Delegation](#event-delegation)
57. [Currying](#currying)
58. [Array Methods](#array-methods)
59. [map, filter, reduce](#map-filter-reduce)
60. [filter()](#filter)
61. [reduce()](#reduce)
62. [slice()](#slice)
63. [splice()](#splice)
64. [find()](#find)
65. [lastIndexOf()](#lastindexof)
66. [indexOf()](#indexof)
67. [findIndex()](#findindex)
68. [some()](#some)
69. [every()](#every)
70. [sort()](#sort)
71. [includes()](#includes)
72. [flat()](#flat)
73. [flatMap()](#flatmap)
74. [Array.from()](#arrayfrom)
75. [Array.isArray()](#arrayisarray)
76. [Map() Data Structure](#map-data-structure)
77. [Map vs Object](#map-vs-object)
78. [Set](#set)
79. [Memoization](#memoization)
80. [Generator Functions](#generator-functions)
81. [Iterators](#iterators)
82. [Modules](#modules)
83. [How does the JavaScript engine manage memory?](#how-does-the-javascript-engine-manage-memory)
84. [What causes Stack Overflow?](#what-causes-stack-overflow)
85. [DOM](#dom)
86. [1. What is DOM?](#1-what-is-dom)
   - [Definition](#definition)
87. [2. DOM Tree](#2-dom-tree)
   - [Definition](#definition-1)
88. [3. querySelector vs querySelectorAll](#3-queryselector-vs-queryselectorall)
   - [Definition](#definition-2)
89. [4. getElementById](#4-getelementbyid)
   - [Definition](#definition-3)
90. [5. textContent vs innerHTML](#5-textcontent-vs-innerhtml)
   - [textContent](#textcontent)
   - [innerHTML](#innerhtml)
91. [6. createElement](#6-createelement)
   - [Definition](#definition-4)
92. [7. append vs appendChild](#7-append-vs-appendchild)
   - [append()](#append)
   - [appendChild()](#appendchild)
93. [8. remove()](#8-remove)
   - [Definition](#definition-5)
94. [9. setAttribute/getAttribute](#9-setattributegetattribute)
   - [setAttribute()](#setattribute)
   - [getAttribute()](#getattribute)
95. [10. classList](#10-classlist)
   - [Definition](#definition-6)
96. [11. addEventListener](#11-addeventlistener)
   - [Definition](#definition-7)
97. [Event Object](#event-object)
   - [Definition](#definition-8)
   - [Definition](#definition-9)
   - [event.target](#eventtarget)
   - [event.currentTarget](#eventcurrenttarget)
98. [19. DOM Traversal](#19-dom-traversal)
   - [Definition](#definition-10)
99. [DOMContentLoaded vs load](#domcontentloaded-vs-load)
   - [DOMContentLoaded](#domcontentloaded)
   - [load](#load)
100. [Reflow vs Repaint](#reflow-vs-repaint)
   - [Reflow](#reflow)
   - [Repaint](#repaint)
101. [DocumentFragment](#documentfragment)
   - [Definition](#definition-11)
102. [Real DOM vs Virtual DOM](#real-dom-vs-virtual-dom)
   - [Real DOM](#real-dom)
   - [Virtual DOM](#virtual-dom)
103. [Stack vs Heap?'](#stack-vs-heap)
104. [How are objects stored in memory?](#how-are-objects-stored-in-memory)
105. [What is Garbage Collection?](#what-is-garbage-collection)
106. [What is Reflect?](#what-is-reflect)
107. [What is ToPrimitive?](#what-is-toprimitive)
108. [What is ToString?](#what-is-tostring)
109. [What is ToNumber?](#what-is-tonumber)
110. [What is Symbol.toPrimitive?](#what-is-symboltoprimitive)
111. [What is Function Composition?](#what-is-function-composition)
112. [Why Use It?](#why-use-it)
113. [What is Pure Function?](#what-is-pure-function)
114. [What is Immutability?](#what-is-immutability)
115. [First-Class Function in JavaScript](#first-class-function-in-javascript)
116. [1. Function Stored in a Variable](#1-function-stored-in-a-variable)
117. [2. Function Passed as an Argument](#2-function-passed-as-an-argument)
118. [3. Function Returned from Another Function](#3-function-returned-from-another-function)
119. [Implement an Event Emitter.](#implement-an-event-emitter)


# JavaScript Interview Question Collection
# What is JavaScript? 
JavaScript is a high-level, dynamically typed programming language mainly used to add behavior and interactivity to web applications. It runs in browsers using JavaScript engines like V8, and with Node.js it can also run on the server.

**Dynamica type**
JavaScript is dynamically typed because variables don't have a fixed type. The type belongs to the value and is determined at runtime. A variable can hold a number at one point and later hold a string or boolean. JavaScript still has types; the difference is that type checking is dynamic rather than requiring every variable to have a fixed declared type."

```JS
const name = "Priti";
console.log(`Hello ${name}`);

// Dynamic type  
let x = 10;   // x type is not fix   once it holds a number later it could hold   another type  

console.log(typeof x); // "number"

x = "Hello";   

console.log(typeof x); // "string"

x = true;

console.log(typeof x); // "boolean"
```


# What are the <pre><code>var vs let vs const</code></pre>
var, let, and const are used to declare variables in JavaScript, but they differ mainly in scope, redeclaration, reassignment, and hoisting behavior.

var is a JavaScript keyword used to declare a variable that is function-scoped and can be redeclared and reassigned.
```JS
var name = "Priti";
name = "Vipin"; // ✅
var name = "Amit"; // ✅
```
let is a JavaScript keyword used to declare a variable that is block-scoped and can be reassigned but not redeclared in the same scope.
```javascript
let age = 25;
age = 26; // ✅
// let age = 27; // ❌
```
const is a JavaScript keyword used to declare a block-scoped variable whose binding cannot be reassigned after initialization.
```javascript
const country = "India";
// country = "USA"; // ❌
```


# What is hoisting ?
Hoisting is the behavior in JavaScript where declarations are processed before execution. var is initialized with undefined, while let and const are hoisted but remain in the TDZ until initialization. Function declarations can be called before their declaration.
var       → Hoisted + initialized as undefined
let       → Hoisted + TDZ
const     → Hoisted + TDZ
function  → Hoisted with function definition
```javascript
console.log(a);
var a = 10; // undefined

Conceptually, JavaScript behaves like:
var a;
console.log(a); // undefined
a = 10;

with let & const
console.log(a); // ReferenceError
let a = 10; 

// function 
sayHello();
function sayHello() {
  console.log("Hello");
}
```

## 1. How var Hoisting Works Internally
Many beginners imagine JavaScript executing it literally from top to bottom:
But that's not the best mental model.
```js
console.log(name); //❓ name doesn't exist yet  
var name = "Priti";
console.log(name);
```
Think in two stages

JavaScript execution involves a setup/creation phase before the statements execute.
```js
                 JavaScript Execution
                         │
   ┌──────────┴──────────┐
   │                                          │
Creation Phase               Execution Phase
        │                                     │
var name → undefined     console.log(name)
                                               ↓
                                         undefined
                                               ↓
                                      name = "Priti"
                                            ↓
                                      console.log(name)
                                            ↓
                                          Priti
      
```
```js
var name;          // declaration
name = "Priti";    // assignment
```
The declaration is hoisted.

The assignment stays exactly where it was.

var is hoisted and initialized with undefined, but its assignment happens during the execution phase at the original line.


```js
var x = 10;
function test() {
    console.log(x);//undefined    (hoisted to function scope)    (function-scoped + hoisted)
    var x = 20;
    console.log(x); //20
}
test();
// undefined
// 20
```
Because the function has its own local var x.

**Scope diagram**
```js
Global Scope
│
├── x = 10
│
└── test()
     │
     └── Function Scope
          │
          └── x = undefined
```
When JavaScript executes:
```js
console.log(x);
```
inside test() function
```js
Look in local function scope
        ↓
Found x
        ↓
x = undefined
```
It doesn't continue looking at the global x because the local x already exists.

This is an extremely important connection between:

Hoisting + Scope + Shadowing

```js
var x = 1;
function foo() {
    console.log(x);
    if (true) {
        var x = 2;
    }
    console.log(x);
}
foo();
// undefined
// 2
```
var does not have block scope.
The function effectively behaves like:

```js
var x = 1;
function foo() {
    var x; // function-scoped + hoisted
    console.log(x);
    if (true) {
        x = 2;
    }
    console.log(x);
}
foo();
```
var ignores block boundaries:
```js
if (true) {
    var x = 10;
}
console.log(x); // 10
```
But let behaves differently:
```js
if (true) {
    let x = 10;
}
console.log(x); // ReferenceError
```
# What is hoisting in JavaScript, and what happens when you access a var variable before its declaration?

Hoisting is the behavior where JavaScript processes declarations before executing the code in their scope. For var, the declaration is hoisted to the top of its function scope and the variable is initialized with undefined. The assignment remains at its original position. Therefore, if we access a var variable before its assignment, we get undefined rather than a ReferenceError.

**var Inside Loops**
```js
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
//3
// 3
// 3
```
Because var is function-scoped, not block-scoped.

All three callbacks refer to the same i.

By the time the callbacks execute:

Loop finishes
     ↓
i = 3
     ↓
Callbacks execute
     ↓
3
3
3

Because let creates block-scoped bindings for the iterations.

**Scope**

Where can I access this variable?
```js
function test() {
    var x = 10;
}
console.log(x);// ReferenceError
```
Because x belongs to the function scope of test.

**var vs let**
Both declarations are hoisted in the JavaScript execution model, but their initialization behavior differs.
```js
console.log(a);
var a = 10;//undefined

// let 
console.log(a);
let a = 10;//referenceError
```
let and const declarations are hoisted in the sense that their bindings are created before execution, but they remain uninitialized in the Temporal Dead Zone until execution reaches the declaration.


**Function Declaration vs var**

```js
foo();// TypeError: foo is not a function

var foo = function () {
    console.log("Hello"); 
};
```
The var foo declaration is hoisted and initialized to undefined.
Conceptually:
```js
var foo;
foo(); // undefined()
```
Compare that with a function declaration:
```js
foo();//Hello
function foo() {
    console.log("Hello");
}
```
This works because function declarations are available during the setup of the execution context.
Because a function declaration is hoisted with its function definition, not merely initialized to undefined.

```js
Global Execution Context
│
├── foo → function foo() { ... }   //foo already points to the actual function.
│
└── execution starts
```
So when JavaScript reaches:  foo();
foo already points to the actual function.
```js
// Creation phase
foo = function foo() {
    console.log("Hello");
};
// Execution phase
foo();
```
Function declarations are hoisted with their complete function definition, so they can be called before their declaration. var function expressions only hoist the variable and initialize it to undefined; the function assignment happens later.

**DRY RUN**
```js
Step 1 — Identify the scope
Ask:
Is this variable global?
Function-scoped?
Block-scoped?

Step 2 — Find declarations
Look for:
var
let
const
function

Step 3 — Separate declaration from assignment
Convert mentally:
                      var x = 20; 
INTO -->
          var x;
          x = 20;
    
Step 4 — Execute line by line

var x = 10;
function test() {
    console.log(x);
    var x = 20;
    console.log(x);
}

test();

Mental transformation:
var x = 10;

function test() {
    var x;
    console.log(x);//undefined
    x = 20;
    console.log(x);//20 
}

test();


THEN:
First console → undefined
Assignment    → x = 20
Second console → 20
```

#  What is Temporal Dead Zone? 
Temporal Dead Zone is the period between entering a scope where a let or const binding exists and the point where its declaration is executed. During this period the binding is uninitialized, so accessing it throws a ReferenceError. let and const are therefore hoisted in the sense that their bindings are created before execution, but unlike var, they are not initialized with undefined.

Why does TDZ exist?
```js
It is the period from:

Entering the scope

until:

The declaration is executed
```

It prevents you from accidentally using a variable before it has been initialized.

```javascript
{
  // TDZ is the time during which the lexical binding exists but hasn't been initialized.
    // TDZ starts 
    console.log(age); // ❌ ReferenceError
    let age = 25;

    // TDZ ends
    console.log(age); // ✅ 25
}
```
```javascript 
var
 ↓
Hoisted
 ↓
Initialized with undefined
 ↓
Can access before declaration


let / const
 ↓
Hoisted
 ↓
TDZ
 ↓
Cannot access
 ↓
Initialization
 ↓
Can access
```
let and const declarations are hoisted, but their bindings are not initialized until execution reaches the declaration. The period between entering the scope and reaching the declaration is called the Temporal Dead Zone (TDZ).

Scope starts
     ↓
age exists as age binding
     ↓
❌ NOT initialized
     ↓
     TDZ
     ↓
let age = 25
     ↓
age becomes initialized


So when JavaScript encounters:
```js
console.log(age); //it finds the binding, but the binding is still uninitialized.  Therefore: Reference Error
```
it finds the binding, but the binding is still uninitialized.


This is where scope + TDZ become important.
```js
let x = 100;

{
    console.log(x);  // Reference Error

    let x = 200; //    

    console.log(x);
}
```
You might think:   There is an outer x = 100, so the first console.log(x) should print 100. but  ❌ It doesn't.
Because the block creates another x:
```js
{
    let x = 200;
}
```
That x belongs to the block.

The local x shadows the outer x.
Therefore JavaScript does not say:  "Local x isn't initialized, so let's use outer x."

```js
let x = 10;

function test() {
    console.log(x);

    let x = 20;
}

test();
//Reference Error
// Because test() creates a new lexical environment.
Conceptually:
let x = 10;

function test() {

    let x; // uninitialized

    console.log(x); // ❌ TDZ

    x = 20;
}

test();

The local x shadows the global x.

Therefore the outer x is not used.
```
Yes, let and const declarations are hoisted in the sense that their lexical bindings are created when the scope is initialized. However, unlike var, they are not initialized with undefined. They remain uninitialized until execution reaches their declaration. The period between entering the scope and reaching the declaration is called the Temporal Dead Zone. Accessing the variable during this period results in a ReferenceError.
```js
console.log(x);  //ReferenceError
// The binding exists, but:  x → uninitialized
// Therefore: ReferenceError
let x = 10;
// After:  let x = 10; the binding becomes initialized.


console.log(typeof somethingThatDoesNotExist);//  returns:  "undefined"

// BUT
console.log(typeof x);  //ReferenceError   Because x is in the TDZ.    So don't memorize:
let x = 10;


console.log(typeof abc); // "undefined"

console.log(typeof xyz); // ReferenceError

let xyz = 10;
```

**const Does NOT Make Objects Immutable**
```js
const user = {
    name: "Priti"
};
user.name = "Vipin";// This is allowed.  
// because const prevents reassignment of the binding, not mutation of the object.

// YOU CON"T DO
const user = {
    name: "Priti"
};
user = {};// YOU CON"T DO

// BUT YOU CAN DO 
user.name = "Vipin";//user cannot point to another object, but the existing object can be mutated.
```


**TDZ + Closures**
```js
function outer() {
    let count = 0;   //There is only one count:  No Shadowing
    return function inner() {
        count++;
        console.log(count);
    };
}
const increment = outer();
increment();
increment();


// INSTEAD OF  
let count = 100;
function outer() {
    let count = 0;   // local count shadows the global count  (a variable declared in an inner scope has the same name as a variable in an outer scope. The inner variable takes precedence within that scope and hides the outer variable.)
    function inner() {
        console.log(count);//0
    }
    inner();
}
outer();
```

# What is variable shadowing?
Variable shadowing occurs when a variable declared in an inner scope has the same name as a variable in an outer scope. The inner variable takes precedence within that scope and hides the outer variable.

```js
let x = 10;

function test() {
    let x = 20; // LOCAL x 
    console.log(x); // 20
}
test();
```

# Function Declaration vs Function Expression Hoisting
Function declarations are fully hoisted — both their name and function body are available before the declaration. Function expressions are not fully hoisted; the variable follows the hoisting rules of var, let, or const.

# Function Declaration vs Function Expression**
**Function Declaration**
```js
// This is a function declaration.
function greet() {
    console.log("Hello");
}
```
**Function Expression**
```js
// The function is being created as part of an expression and assigned to a variable.
const greet = function () {
    console.log("Hello");
};

// const greet
//       ↓
// stores
//       ↓
// function
```

**Arrow Function**
This is also a function expression.
The arrow function itself doesn't get special function-declaration hoisting.
Its availability depends on the variable:
                                                      const → TDZ
                                                      let   → TDZ
                                                      var   → undefined
```js
const greet = () => {
    console.log("Hello");
};
```

# Function Declaration Hoisting
```js
// Because the function declaration is fully available when the execution context is initialized.
foo();
function foo() {
    console.log("Hello");//hello
}

// Conceptual setup  in JS EXECUTION PHASE 

foo = function foo() {
    console.log("Hello");
};

// Actual execution

foo();
```

# Function Expression + var
```js
foo();

var foo = function () {
    console.log("Hello");
};

// This does not work.
// You get:
// TypeError: foo is not a function 
// Because only the var declaration is hoisted.

// CONCEPTUALLY    During the creation phase:  foo =undefined NOT foo → function
var foo;
foo(); // ❌ foo is undefined

foo = function () {
    console.log("Hello");
};
```

```js
var foo = "global";
function test() {
    console.log(foo);  //[Function: foo]   Because inside test() there is a function declaration named foo.
    // The local function declaration is fully hoisted.

    function foo() { //function declaration named foo.
        console.log("function");
    }
}
test();
```

# What is the difference between function declaration and function expression in terms of hoisting?
A function declaration is fully hoisted, meaning both its function name and complete function body are available during the creation phase of the execution context. Therefore, we can call a function declaration before it appears in the source code.

A function expression does not behave the same way. If it is assigned to a var, only the variable declaration is hoisted and initialized to undefined; the function assignment happens during execution. Calling it before the assignment results in a TypeError.

If the function expression is assigned to let or const, the variable is in the Temporal Dead Zone until its declaration is executed, so accessing it before that point results in a ReferenceError.

An arrow function expression doesn't receive function-declaration hoisting. Its availability follows the hoisting behavior of the variable holding it.

```js
console.log(foo);  // The arrow function itself isn't available yet; foo is merely initialized to undefined.
var foo = () => {
    console.log("Hello");
};


// LET 
console.log(foo);//ReferenceError   Because foo is in TDZ.
let foo = () => {
    console.log("Hello");
};

// CONST 
console.log(foo);//ReferenceError
const foo = () => {
    console.log("Hello");
};
```
Hoisting does not mean "the code physically moves to the top." It describes how JavaScript creates and initializes bindings before executing the code.

# Scope & Lexical Scope
# What is lexical scope in JavaScript?
Lexical scope means that the scope of a variable or function is determined by where it is written in the source code, rather than where the function is called. When JavaScript looks up a variable, it starts from the function's current lexical environment and moves outward through its lexical scope chain until it finds the variable or reaches the global scope.

Lexical Scope means scope is determined by where the code is written, not where the function is called.

JavaScript decides variable access by looking at the physical/nested structure of the code.
```js
let name = "Priti";
function greet() {
    console.log(name);
}
greet();
```
greet() can access name because greet was written inside the scope where name exists. This is called lexical scope

# How Lexical Scope Works Internally
```js
let x = 10;
function outer() {
    let y = 20;
    function inner() {
        let z = 30;
        console.log(x);
        console.log(y);
        console.log(z);
    }
    inner();
}
// JS search for x 
// inner scope X 
//     ↓
// not found
//     ↓
// outer scope  X 
//     ↓
// not found
//     ↓
// global scope  X
//     ↓
// x found    
// This is the scope chain.
```
# Why Is It Called "Lexical"?
"Lexical" basically means:  Based on where the code is written.
Look At:
```js
let x = 10;
function test() {//
    console.log(x);
}
```
When JavaScript sees the function definition:
it can determine the surrounding lexical environment from the code structure.

It doesn't matter where you eventually call it.

```js
let x = 10;
function test() {
    console.log(x);//10
}
function another() {
    let x = 100;
    test();//It doesn't matter where you eventually call it.
}
another(); 
// output is 10 NOT 100
// Because test was written in the global scope, where x = 10 exists.
// It was not written inside another().
```
The function doesn't need to be called immediately.
Its lexical scope is determined when the function is defined/written.

**Nested Functions**
```js
function outer() {
    let name = "Priti";
    function inner() {
        console.log(name);//priti
    }
    inner();
}
outer();

// Why can inner() access name?
// Because inner is written inside outer.
// This is lexical scope.
```
Why can inner() access name?
Because inner is written inside outer.

**"Where Called" vs "Where Written"**
Never think:  "A function uses the variables from where it is called."

Instead think:  "A function uses variables according to where it was defined."

```js
let name = "Global";
function printName() {
    console.log(name);
}
function test() {
    let name = "Local";
    printName();
}
test();
```
printName was written here
        ↓
Global Scope
        ↓
name = "Global"

Even though: printName() was called inside test()

# Lexical Scope vs Shadowing
```js
let x = 10;
function outer() {
    let x = 20;
    function inner() {
        console.log(x); //20
    }
    inner(); 
}
outer();

// inner searches its lexical scope:
// inner
//  ↓
// outer
//  ↓
// x = 20
// It finds the nearest x.
// The global:  x = 10  is shadowed.
```

# Lexical Scope vs Closure
Lexical : Where a function can access variables based on where it was written.
Closure:When a function retains access to variables from its outer lexical environment even after the outer function has finished executing.


# "Is scope the same as lexical scope?"
No. Scope is the accessibility region of a variable. Lexical scope is the rule JavaScript uses to determine that accessibility based on where variables and functions are written in the source code. JavaScript uses lexical scoping.

SCOPE
↓
Where can I access the variable?

LEXICAL SCOPE
↓
Where the code is written determines
which variables it can access.


# TYPES OF SCOPS:   ↓

```javascript
Global Scope
    ↓
Function Scope
    ↓
Block Scope/Lexical
    ↓
Module Scope
```
Global Scope
A global variable refers to a variable that is declared outside any function or block {}, so it can be used anywhere in the program, both inside functions and in the main code. 
```javascript
let globalVar = "I am global";
function test() {
    console.log(globalVar); // Accessible here
}
```

Local Scope
A local variable is a variable declared within a function, making it accessible only inside that function. It cannot be used outside the function. When you put a let or const variable inside any curly braces {}—like an if statement or a for loop—it becomes local to that specific block
```javascript
if (true) {
    let localToBlock = "Secret";
    // This variable only exists inside these braces
}
console.log(localToBlock); // ReferenceError: Not defined outside!
```
Function Scope
Each function creates its own scope. Variables declared inside a function (whether using var, let, or const) Any variable declared inside a function is local to that function. Nothing leaks out are only visible inside that specific function
```javascript 
function myFunction() {
    var x = 1;
    let y = 2;
}
console.log(x); // Error! (Function scope protected it)
```

Block Scope/Lexical scope
Block scope in JavaScript means variables declared with let or const inside { } are accessible only within that block, and accessing them before declaration (TDZ) causes a ReferenceError.

```Variables declared with var do not have block scope. If declared inside a function, they are accessible throughout that function regardless of blocks such as if statements or loops. In classic scripts, a var declared outside any function becomes globally scoped. In ES modules, top-level var is module-scoped.```

```javascript
if (true) {
    let blockVar = "I am trapped in this block";
    var notBlocked = "I escape block scope"; 
}
console.log(notBlocked); // Works fine!
console.log(blockVar);   // ReferenceError: blockVar is not defined

function outer(){
    let x= 10 ; // Local variable 
    {
        let y=20;
        console.log(y)// block scope
    }
    function inner(){
        console.log(x)//Lexical scope
    }
    inner()
}
outer()
```

Module scope
When working with JavaScript modules (type="module"), variables declared at the top level of a file are private to that file unless they are explicitly exported

# What is the scope chain in JavaScript?
Scope Chain = the path JavaScript follows when it tries to find a variable.

If JavaScript cannot find a variable in the current scope, it searches the outer/enclosing lexical scope, then continues outward until the global scope. If it still cannot find it, you get a ReferenceError

The chain is determined by lexical structure / where the function is defined, not by where the function is called.

The scope chain is the chain of lexical environments JavaScript follows when resolving a variable. When a variable is not found in the current scope, JavaScript searches the enclosing lexical scope, then continues outward until it reaches the global scope. If the variable is not found anywhere in the chain, JavaScript throws a ReferenceError. The scope chain is determined by the lexical structure of the code, meaning where a function is defined, not where it is called.
```js
let a = 10;
function outer() {
    let b = 20;
    function inner() {
        let c = 30;
        console.log(c);
        console.log(b);
        console.log(a);
    }
    inner();
}
outer();
```

**How It Works Internally**
When JavaScript creates a function, conceptually the function has a connection to the lexical environment where it was created.

Function
   │
   ├── function code
   │
   └── outer lexical environment
                │
                ▼
          parent scope

**Scope Chain Is NOT Created When the Function Is Called**
```js
let x = 10;
function foo() {
    console.log(x);
}
function bar() {
    let x = 20;
    foo();
}
bar();

```
foo() is called inside bar(), so it should use bar's x  No.
Because foo was defined in the global scope.
Its lexical relationship is
foo
 ↓
Global
 ↓
x = 10

SO:
WHERE FUNCTION IS WRITTEN
             ↓
      determines scope chain

NOT :
     WHERE FUNCTION IS CALLED

 ```js
 function test() {
    console.log(x);  Reference Error
}

test();
Find variable
        ↓
Current scope
        ↓
    Found?
 ┌───┴────┐
YES           NO
 │               │
Return        ▼
value   Outer scope
                 ↓
            Found?
          ┌───┴────┐
      YES               NO
       │                  │
     Return            ▼
                    Continue
                      ↓
                    Global
                      ↓
                  Not found
                      ↓
                ReferenceError
 ```
The scope chain is the chain of lexical environments JavaScript follows when resolving a variable. When a variable is not found in the current scope, JavaScript searches the enclosing lexical scope, then continues outward until it reaches the global scope. If the variable is not found anywhere in the chain, JavaScript throws a ReferenceError. The scope chain is determined by the lexical structure of the code, meaning where a function is defined, not where it is called.

# Scope Chain ≠ Call Stack
```js
let x = 10;

function foo() {
    console.log(x);
}

function bar() {
    let x = 20;
    foo();
}

bar();
//The call stack during execution looks roughly like:
// bar()
//  ↓
// foo()
// But foo's lexical scope chain is:
// foo
//  ↓
// global'

// SO:
// Call Stack
// → Where the function was called from

// Scope Chain
// → Where the function was defined
```
🚨 Scope chain follows lexical structure, not the call stack. A function searches the scope where it was defined and its enclosing scopes — not the scope from which it was called.

#  What is Closures
Lexical Scope → Scope Chain → Functions → Closures → Callbacks → setTimeout → Data Privacy

A closure is created when a function retains access to variables from its outer lexical scope even after the outer function has finished executing. The inner function maintains access to the outer lexical environment rather than simply copying the values. Closures are useful for data privacy, maintaining state between function calls, callbacks, event handlers, and asynchronous code.

```javascript
function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}
const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3
// JavaScript copies count into inner.
```
The JavaScript engine's garbage collector can reclaim objects/environments that are no longer reachable. But because the returned function still has a reference path to the needed lexical environment, that environment remains reachable.

#  why is a closure?
Closures exist because sometimes a function needs to remember and access data from its outer scope even after the outer function has finished executing.

Closure gives a function “memory”.
```javascript
without clousre;
function outer(){
    let count =0
}
outer() //outer finish you can't directly access count;
with clousre
function outer() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3
Why is this useful?

Because counter remembers count.
```

# Closure Captures a Reference, Not a Snapshot

OUTPUT :
1
2
3

Why isn't it:
1
1
1

Because the closure doesn't capture: count = 0  as a frozen snapshot.  It retains access to the same variable binding.


***What's happening?**

createCounter() runs once.
```js
function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());
```
createCounter() runs once.
It creates:  count = 0
THEN:  returns a function
NOW : counter() access the same count 


# Why does Closure preserve variables?
Because the inner function still has a reference to the lexical environment where those variables were created.

# Does closure capture a snapshot? 
No. It retains access to the variable/binding, so changes to that variable can be observed by the closure
```js
// Closure Captures Variables, Not Values  (variable/binding  ,, X  not  10  closure does not copies 10 ,,  closure  copies  x)
function outer() {
    let x = 10;
    return function () {
        console.log(x);//10
    };
}
const fn = outer();
fn();
```
 NOW :
 ```js
 function outer() {
    let x = 10;
    return {
        get: function () {
            return x;
        },
        set: function (value) {
            x = value;
        }
    };
}
const obj = outer();
console.log(obj.get());//10
obj.set(50);
console.log(obj.get()); //50

// Both functions close over the same x binding.
// Closure value ki frozen copy nahi rakhta; closure variable/binding (X) tak access retain karta hai.
// Binding = variable name ka kisi stored value/environment ke saath connection.
// let x= 10 
// x ─────────► 10
// ↑
// binding
// THEN:
// x = 50;
// same binding ke through value change  (X  is Same only Value changed)
// x ─────────► 50
```

🚨 A closure doesn't remember "what the value was"; it remembers how to access the variable from its surrounding lexical environment.


# What is IIFI 
IIFE = Immediately Invoked Function Expression
An IIFE is a function expression that is created and executed immediately.
IIFE creates a private function scope an immedetly runs it

An IIFE, or Immediately Invoked Function Expression, is a function expression that is executed immediately after it is created. It creates its own function scope, which allows variables declared inside it to remain private and prevents them from polluting the global scope. Before ES6 modules and block-scoped let and const became widely used, IIFEs were commonly used to implement private state and module-like patterns. IIFEs can also create closures when inner functions retain access to variables from the IIFE.
```js
(function () {
    console.log("Hello");
})();

// The first part creates a function expression.
// () The second part immediately calls it
```
Before ES6 introduced let, const, and ES modules, IIFEs were commonly used to prevent variables from polluting the global scope and to create private state.

**IIFE Creates Private Scope**
```js
(function () {
    let secret = "password123";

    console.log(secret);
})();

//this works: password123
//but outside 
(function () {
    let secret = "password123";
})();
  console.log(secret);// Reference error


  // secret belongs to the IIFE's scope.
  // The global scope cannot directly access it
```
Private Variable
```js
const counter = (function () {
    let count = 0;
    return {
        increment: function () {
            count++;
        },

        getCount: function () {
            return count;
        }
    };
})();
console.log(counter.getCount());//0
counter.increment();//
counter.increment();
console.log(counter.getCount());//2
```
What's happening?

The IIFE runs immediately:
```js
(function () {
    let count = 0;
    return {
        increment() {
            count++;
        },
        getCount() {
            return count;
        }
    };
})();
//It returns an object.

// That object is stored in:  const counter
// But const itself not returned
// SO :
// counter
// │
// ├── increment()
// │
// └── getCount()

// Private:
// count = 0
// Both methods close over the count 
// This gives us:

// IIFE + Closure + Private State

```
# IIFI with Argument
```js
(function (name) {
    console.log("Hello " + name);
})("Priti");
```
# IIFE Can Return a Value
```js
const result = (function () {
    const a = 10;
    const b = 20;

    return a + b;
})();

console.log(result);
```
# Why the Parentheses?
he parentheses essentially tell JavaScript:
"Treat this function as an expression."






# How does JavaScript execute code?
When JavaScript code runs, the JavaScript engine creates an execution context. During the creation phase, it sets up variables, functions, and the lexical environment. During the execution phase, the code is executed. Function calls are managed through the call stack. For asynchronous operations, the event loop coordinates callbacks and queues with the call stack..
```javascript 
             JavaScript Code
                    ↓
             JavaScript Engine
                    ↓
          Create Execution Context
                    ↓
             Creation Phase
          ┌─────────┴─────┐
          ↓                              ↓
     Hoisting          Lexical Environment
          │
          ↓
             Execution Phase
                    ↓
               Call Stack
                    ↓
          Synchronous Execution
                    ↓
       Async work → Event Loop
                    ↓
               Final Output
```




#  Execution Context
JavaScript creates an Execution Context to execute code.
There are mainly:

Global Execution Context
Function Execution Context
Eval Execution Context

Creation Phase

Before executing the statements, JavaScript prepares the execution context.

For example:
```javascript
var x = 10;


function test() {
  console.log("Hello");
}

Conceptually:

Creation Phase
│
├── x → undefined
│
└── test → function definition
```
This is related to hoisting.

Execution Phase

Now JavaScript executes the code.
```javascript
var x = 10;
console.log(x);

Conceptually:

Creation Phase
     ↓
x → undefined
     ↓
Execution Phase
     ↓
x → 10
     ↓
console.log(x)
     ↓
10
```
```javascript
Execution Context
│
├── Creation Phase
│   ├── Memory setup
│   ├── Variables setup
│   ├── Function declarations setup
│   └── Lexical Environment setup
│
└── Execution Phase
    ├── Code line-by-line execute 
    ├── Variables ko values milti hain
    └── Functions execute hote hain
```

Creation phase and execution phase are two phases of an execution context. First, JavaScript creates the execution context and prepares its environment; then it executes the code.
```javascript
Global Execution Context
        │
        ├── Creation Phase
        │      ↓
        │   x → undefined
        │   test → function
        │
        └── Execution Phase
               ↓
             x = 10
               ↓
             test()
               ↓
          Function Execution Context
               │
               ├── Creation Phase
               └── Execution Phase
```


# What is the Lexical Environment?
A Lexical Environment is a specification-level structure that stores identifier bindings and maintains a reference to its outer environment, allowing JavaScript to resolve variables through the scope chain."

```javascript
const name = "Priti";

function greet() {
  const message = "Hello";

  console.log(name);
  console.log(message);
}

greet();

Global Lexical Environment
│
├── name → "Priti"
│
└── greet → function
       │
       ↓
   Function Lexical Environment
   │
   └── message → "Hello"
       │
       └── Outer → Global Environment

When greet() looks for:

name

it doesn't find name in its own environment, so it follows the outer environment reference:
This is the basis of the scope chain.
```

# What is the Variable Environment?
A Variable Environment is the execution-context component used for variable and function declarations, traditionally associated with var and function declarations.

```javascript
var x = 10;

function test() {
  var y = 20;

  console.log(x);
  console.log(y);
}

test();
Global Execution Context
│
├── Variable Environment
│     ├── x
│     └── test
│
└── Lexical Environment
      └── let/const/class bindings

inside text()
Function Execution Context
│
├── Variable Environment
│     └── y
│
└── Lexical Environment
      └── ...
```

# Objects, Prototypes & this

# What is [[Prototype]]? 
JavaScript object has an internal [[Prototype]] slot. It stores a reference to another object—or null. When JavaScript can't find a property on the current object, it follows this reference to search the prototype chain

Every JavaScript object has an internal [[Prototype]] slot that points to another object or null. When we access a property, JavaScript first checks the object's own properties. If the property isn't found, it follows the object's [[Prototype]] and continues searching up the prototype chain until the property is found or the chain reaches null. This mechanism enables prototype-based inheritance and property sharing between objects.

object
   |
   | [[Prototype]]
   ↓
another object
   |
   | [[Prototype]]
   ↓
another object
   |
   ↓
null

This is the foundation of prototype chain

you can not do 👇 
obj.[[Prototype]]

Instead, JavaScript provides ways to access/manipulate it, such as:
```js
Object.getPrototypeOf(obj)
// and historically:
obj.__proto__

const obj = {};

console.log(Object.getPrototypeOf(obj));
// gives:👇

Object.prototype
```

```js

person
┌────────────┐
│ name: "Priti"   
│                 │
│ [[Prototype]] ───────┐
└────────────┘      
                                   ↓
                  Object.prototype
                  ┌──────────┐
                  │ toString: fn     
                  │ hasOwnProperty   
                  │ valueOf          
                  │ ...              
                  │                  
                  │ [[Prototype]] ─────→ null
                  └──────────┘
```

```js
console.log(Person.prototype);
console.log(Object.getPrototypeOf(person));

// They refer to the same object:
Person.prototype === Object.getPrototypeOf(person)//true
```
 
 # Why does [[Prototype]] exist?
 The main purpose is property and method inheritance.

 before learning prototype
what is the output 
```javascript
let numberArr = [10, 20, 30];
console.log(numberArr.length); // 3
console.log(numberArr.push); // [Function :push]
console.log(numberArr.map); // [Function :map]

```
come from? did we write them ?
no then who creted them ?
```javascript
let userObj = {
name: "PRiti",
};
console.log(userObj.toString); // [Function: toString

```
did we write toString(); ? no
then where did it come from
- call, apply, bind
```javascript
function demo() {}
console.log(demo.bind);
console.log(demo.call);
console.log(demo.apply);
```
 ```javascript has a mechanism called Prototype  -everything starts from prototype.```
first understand Object
when you create
```javascript
let user = {
name: "Priti",
};
```
user created in memory -> user={name:"Priti"}
now looks
user.name
js ask ?
does user have "name"?
answer ? yess
```javascript
return Priti
```
```javascript
user.toString()
```
there is no toString() inside user
then why does this work ?

javascript search process
js does not stop
instead it ask's 
current Object (user) ?Found ? no
Then -->   Go to prototype  & search again
That hidden link is called [[prototype]] or __proto__
thats why "user.toString()" works
```javascript
Object.prototype
toString()
hasOwnProperty()
valueOf()
```

The object doesn't own those methods.  It borrows them
```javascript
Array.prototype
push()
pop()
map()
filter()
reduce()
sort()
```
All array methods live inside
 ```javascript
 Array.prototype 
 ```
 every array points to the same prototype
Every Type Has Its Own Prototype
Value Prototype
Array Array.prototype
Function Function.prototype
Object Object.prototype
String String.prototype
Number Number.prototype
Boolean Boolean.prototype

- Prototype & Prototype Chain ?
```javascript
let = arr = [1, 2, 3];
console.log(arr.xyz);
```
javscript search in arr  ? Found ? No Then it check Array.prototype ? Found ? No  --> it check Object.prototype ?Found ? No   -- return Null  and stop . 
this is called prototype chain
```javascript
let ar = [];
console.log(ar.__proto__ == Array.prototype); // true
// because ever arrays prototype points to Array.prototype
console.log(Array.prototype.__proto__ === Object.prototype); // true

// Because Array.prototype
// Object.prototyp
console.log(Object.prototype.proto);//null undefined
// Because the prototype chain ends there
```


 ```javascript 
let arr1=[]
let arr2=[]
let arr3=[]
 ```
 if Every array stroes its own -

 ```javascript
    push()
    map()
    filter()
    reduce()
```
memory would explode , instead, javascript stroes them once 

# Prototype  vs  __proto__ ? 
these are the same ? No 
```javascript
function Person(){}
console.log(Person.prototype)//{}
console.log(Person.__proto__)// [Function(anonymous)]Object

```

```javascript 
when you create
 function Person(){} 
javascript creates a function object 

Person
├── name
├── length
├── prototype 
└── proto****
A fucntion has both prototype and __proto__ but they mean different things 
Every normal function automatically gets a property called  prototype

function Person(){}//
console.log(Person.prototype)// { constructor:Person}

initialy its only contains constructor 

```
# Why does it exist? 
because later when someone writes 
```javascript
new Person();
```
javascript needs somewhere to stored methods, that place is .Person.prototype
```javascript
function Person(name){
    this.name=name;
}
Person.prototype.sayHello=function(){
    console.log(`hello ${this.name}`)
}

let p = new Person("vipin");

p.sayHello()//
// memory -- Person --> prototype-->{sayHello}
Person
  │
  └── prototype
        │
        ▼
   ┌───────────────┐
   │ Person.prototype     
                      │
   │ sayHello: function() 
   └───────────────┘

   Object.getPrototypeOf(p) === Person.prototype//true

p
├── name: "vipin"
└── ❌ sayHello nahi
// But internally JavaScript performs 4 steps
// function Person(name) {
// this.name = name;
// }
// let p = new Person("vipin);//   this becomes p={name:"vipin"}
// step 1  
// js creates empty {}  when  sees new Person("vipin)
// step 2 
// object.__proto__=Person.prototype (connect the prototype)
// step 3 
// Person.call(Object,"vipin")
```
# Property Shadowing
```js
const parent = {
    name: "Parent"
};

const child = Object.create(parent);

console.log(child.name);

child.name = "Child";

console.log(child.name);
console.log(parent.name);

// Output:

// Parent
// Child
// Parent

// child.name// finds the property on parent.

// Then:

// child.name = "Child";

// creates an own property on child.


const parent = {
    x: 10
};

const child = Object.create(parent);

console.log(child.x);
console.log(child.hasOwnProperty("x")); //hasOwnProperty  Checks only the object itself:

console.log("x" in child);  //in   Checks the entire prototype chain:
// 10
// false
// true
```

null Prototype

You can intentionally create an object whose prototype is null:
```js
const obj = Object.create(null);

console.log(Object.getPrototypeOf(obj));//null
// obj.toString//undefined 
```
# prototype vs [[Prototype]]
Objects have an internal [[Prototype]]; functions used as constructors have a prototype property.
```js

[[Prototype]]	 Internal link from an object to another object
prototype	    Property on constructor functions used as the prototype for objects created with new
__proto__	    Accessor for an object's [[Prototype]]
Prototype     chain	Sequence formed by following [[Prototype]] links
```

# 🧬 Prototype Chain
"p" object  does not  contain  directly sayHello inside it .
When new Person() creates p, the new object's internal [[Prototype]] is set to Person.prototype. The sayHello method is stored on Person.prototype, not on every instance. When we call p.sayHello(), JavaScript first searches p, doesn't find the method, and then searches its prototype Person.prototype, where it finds and executes sayHello.


Person is itself a function object.
All functions inherit from  Function.prototype


```js
const parent = {
    greet() {
        console.log("Hello from parent");
    }
};

const child = {};

Object.setPrototypeOf(child, parent);

child.greet();

console.log(Object.getPrototypeOf(child) === parent);  //true   returns the object stored in: child.[[Prototype]]

// Hello from parent

child
  |
  | [[Prototype]]
  ↓
parent

// When JavaScript sees:
child.greet()

// it checks:

child.greet

// Not found.

// Then:

child.[[Prototype]]

// which is:  parent

// Then:

parent.greet
// Found!  Returns  Hello from parent
```

```js
const animal = {
    eats: true
};

const dog = Object.create(animal);

dog.barks = true;

console.log(dog.barks);
console.log(dog.eats);

dog
│
├── barks: true       ← own property
│
└── [[Prototype]]
        ↓
      animal
        │
        ├── eats: true       ← inherited property
        │
        └── [[Prototype]]
                ↓
          Object.prototype
                │
                ↓
               null


dog
 ↓
Does dog have eats?
NO
 ↓
animal
 ↓
Does animal have eats?
YES ✅


// STOP AT FIRST MATCH:
const  animal={
    sound: "Animal sound"
};

const dog = Object.create(animal);

dog.sound = "Bark";
console.log(dog.sound);//Bark   
```

# What happens internally when you access obj.property?
When JavaScript evaluates obj.property, it first checks whether the property exists as an own property of obj. If it exists, JavaScript returns that value immediately. If it doesn't, JavaScript follows the object's internal [[Prototype]] link and checks the prototype. It continues traversing the prototype chain until it finds the property or reaches null. If the property is not found anywhere in the chain, the result is undefined.
```js
const grandParent = {
    country: "India"
};

const parent = Object.create(grandParent);

const child = Object.create(parent);

console.log(child.country);

```

# Define prototype chain lookup
Prototype chain lookup is JavaScript's property-resolution mechanism where it searches an object's own properties first and, if the property isn't found, recursively searches its [[Prototype]] chain until the property is found or the chain reaches null.

#  Difference between __proto__ and prototype?
Every JavaScript object can have an internal link to another object called its prototype.

__proto__ → belongs to an object → points to its prototype.
.prototype → belongs to a constructor function → becomes the prototype of objects created with new.


__proto__ represents the prototype relationship of an object. It allows us to access the object's internal [[Prototype]]. On the other hand, .prototype is a property that constructor functions have. When we create an object using new Constructor(), the new object's [[Prototype]] is set to Constructor.prototype.

For example, if const user = new User(), then Object.getPrototypeOf(user) === User.prototype.

The prototype chain is then used for property lookup: if a property isn't found directly on the object, JavaScript searches its prototype, then that prototype's prototype, and so on until it reaches null.



```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hello ${this.name}`);
};
const p1 = new Person("Priti");

Person
  │
  └── prototype
        │
        └── sayHello()


p1
 │
 └── [[Prototype]] ─────→ Person.prototype

 p1.sayHello();
 works even though sayHello isn't directly stored on p1.

__proto__ is a legacy accessor that exposes an object's internal [[Prototype]] relationship.

 const p1 = new Person("Priti");

console.log(p1.__proto__ === Person.prototype);//true

// Object.getPrototypeOf()

p1.__proto__

// modern code should generally use:
Object.getPrototypeOf(p1);

Object.getPrototypeOf(p1) === Person.prototype;
// true
// To set a prototype:
Object.setPrototypeOf(obj, prototype);
```

__proto__ is the prototype link of an object. .prototype is a property on constructor functions, and that object becomes the prototype of instances created with new.
```js
Object instance
    │
    └── __proto__ ──→ prototype object

Constructor function
    │
    └── .prototype ──→ prototype object


    // RELATION:
  Person.prototype
       ↑
       │ becomes
       │
person.__proto__

```
#  Explain constructor functions and prototypes."
A constructor function is a regular function intended to be called with new. new creates a new object, sets its internal [[Prototype]] to the constructor's .prototype, calls the constructor with this referring to that object, and returns the object. Properties assigned through this become own properties, while methods placed on Constructor.prototype are shared by all instances through the prototype chain

```js
function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log(`Hello ${this.name}`);
};

function Developer(name, language) {
    Person.call(this, name);
    this.language = language;
}

Developer.prototype = Object.create(Person.prototype);

Developer.prototype.constructor = Developer;

Developer.prototype.code = function () {
    console.log(`${this.name} codes in ${this.language}`);
};

const dev = new Developer("Priti", "JavaScript");

console.log(dev.constructor === Developer);//true


// ````A constructor function is a regular JavaScript function that is called with new. The new keyword creates a new object, connects that object to the constructor's .prototype, binds this to the new object, and returns the object.````
```

#  Constructor function vs Class?
Constructor functions are the traditional way of creating objects and implementing inheritance in JavaScript using functions and prototypes. ES6 classes provide a cleaner syntax for the same prototype-based object model. Classes have stricter behavior, require new, and provide cleaner inheritance using extends and super. Internally, class methods are still stored on the prototype.

```javascript
// Constructor Function 
function User(name, age) {
  this.name = name;
  this.age = age;
}
User.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};
const user1 = new User("Priti", 25);
user1.greet();

user1.__proto__ === User.prototype
// true

//Inheritance with Constructor function 
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log("Animal speaks");
};
function Dog(name) {
  Animal.call(this, name);
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
  console.log("Woof!");
};
```
1. New empty object create
        ↓
2. Object ka prototype User.prototype se link
        ↓
3. `this` → new object
        ↓
4. Constructor function execute
        ↓
5. Object return

```javascript
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}
const user1 = new User("Priti", 25);
user1.greet();

// Inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  bark() {
    console.log("Woof!");
  }
}

```
Biggest Difference: new

```javascript
function User(name) {
  this.name = name;
}
const user = User("Priti");
console.log(user);


class User {
  constructor(name) {
    this.name = name;
  }
}

const user = User("Priti");//TypeError: Class constructor User cannot be invoked without 'new'
// Class constructor ko new ke saath hi call karna padta hai.
```
# Is an ES6 class really different from constructor functions and prototypes? Explain how classes work internally.
JavaScript classes are built on top of the existing prototype-based object model. A class declaration defines a constructor and methods, but the methods defined in the class body are placed on the class's prototype rather than copied onto every instance. When we create an object using new, the object's internal [[Prototype]] is linked to ClassName.prototype. Therefore, property lookup can traverse from the instance to the class prototype and then further up the prototype chain.

With extends, JavaScript establishes prototype inheritance so that Child.prototype inherits from Parent.prototype. This allows child instances to access methods defined on the parent prototype.

So classes provide cleaner syntax and additional class semantics, but they still fundamentally use JavaScript's prototype-based inheritance model.


Class methods are not own properties :
```js
class User {
    greet() {
        console.log("Hello");
    }
}

const user = new User();

console.log(user.hasOwnProperty("greet"));//false
console.log(User.prototype.hasOwnProperty("greet")); //true

// Because 
user
 └── [[Prototype]]
          ↓
     User.prototype
          └── greet

```

# Why Does .prototype Exist?
# "Why don't we simply put methods inside the constructor?"
```js
function Person(name) {
    this.name = name;

    this.sayHello = function () {
        console.log(`Hello ${this.name}`);
    };
}

const objP1= Person("Preeti");  // Each object gets its own function: objP1 → sayHello function A
const objP2= Person("Vipin");  // Each object gets its own function: objP2 → sayHello function B
const objP3=Person("priti");  //Each object gets its own function: objP2 → sayHello function A
```
Instead of : 👇
```js
function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log(`Hello ${this.name}`);
};

p1 ───┐
          │
p2 ───┼──→ Person.prototype
           │        │
p3 ───┘         └── sayHello()

// The method can be shared.

// This is one reason prototype-based inheritance is useful.
```
Changing .prototype after creating instances
```js
function Person() {}

const p1 = new Person();

Person.prototype.sayHello = function () {
    console.log("Hello");
};

p1.sayHello();  //This works.  Because p1 already points to the same prototype object:👇 
p1
 ↓
Person.prototype

// When you add a property to that object:   p1 can see it.



// But this is different:👇 
function Person() {}
const p1 = new Person();
Person.prototype = {
    sayHello() {
        console.log("Hello");
    }
};
const p2 = new Person();
console.log(p1.sayHello);   // p1.sayHello → undefined
console.log(p2.sayHello);  // p2.sayHello → function

// Because p1 already has its [[Prototype]] pointing to the old object.

// Changing:  Person.prototype = newObject;     doesn't magically change the prototype of existing instances.
```

# What is default binding of this in JavaScript?
Default binding is the rule applied when a regular function is invoked as a standalone function, without an explicit receiver or explicit this binding. In non-strict mode, this is bound to the global object, such as window in a browser. In strict mode, this is undefined.

# JavaScript this — Default Binding
Default binding applies when a regular function is called as a standalone function.

In non-strict mode → this is the global object (window in browsers).
In strict mode → this is undefined.

1. First: What is this?
this is a special value provided when a function executes.

Unlike a normal variable:

let name = "Priti";

you don't determine this simply by looking at where it was declared.

You primarily determine it by looking at how the function was called.

For a normal function call:
foo();
JavaScript asks:

"Is this function being called as a method? With new? With call/apply? Or just by itself?"

If it's simply:

foo();

then default binding applies.

2. Simple Default Binding
```js
function greet() {
    console.log(this); //global window in browser 
}

greet();

// IN STRICT MOOD 
"use strict";

function greet() {
    console.log(this);//undefined
}

greet();
```
For a standalone regular-function call, default binding gives the global object in non-strict mode and undefined in strict mode.

# this Inside a Method
```js
const user = {
    name: "Priti",
    greet: function () {
        console.log(this.name);
    }
};
user.greet();
```
Is this default binding? NO 
Because this is not  : greet() 
it is : user.greet();
This function is being called as a method  So the relevant this is  user.greet()
user.greet()
     ↓
this = user

THEREFORE:  this.name means user.name and gives priti

```js
const user = {
    name: "Priti",

    greet: function () {
        console.log(this.name);
    }
};

const greet = user.greet; // Priti  // does not preserve the user receiver.  It simply stores the function in another variable.
greet()  // undefine

// Now it's a standalone call.

greet()
 ↓
default binding

So in non-strict mode:

this → global object

and in strict mode:

this → undefined
```

3. Passing a Method as a Callback**
```js
const user = {
    name: "Priti",

    greet: function () {
        console.log(this.name);
    }
};

setTimeout(user.greet, 1000); //The callback is eventually invoked without the user receiver.
// So the original:  user.greet();  relationship has been lost.
// This is why methods often "lose this" when passed as callbacks.
```


# How bind() Fixes It
bind() doesn't immediately execute the function.

It returns a new function with this bound.
```js
const user = {
    name: "Priti",
    greet: function () {
        console.log(this.name);
    }
};
setTimeout(user.greet.bind(user), 1000);
//Priti


bind(user)
    ↓
creates new function
    ↓
this permanently bound to user
    ↓
callback executes
    ↓
this = user
```
call() invokes the function immediately.
```js
function greet() {
    console.log(this.name);
}

const user = {
    name: "Priti"
};
// Explicit binding
greet.call(user);
```
apply() also invokes immediately, but arguments are supplied as an array-like value.
```js
function greet(message) {
    console.log(message, this.name);
}

const user = {
    name: "Priti"
};
// Explicit binding
greet.apply(user, ["Hello"]);
```
Arrow functions are special.

They do not have their own this binding.
Arrow functions take this lexically from their surrounding scope.
```js
const user = {
    name: "Priti",
    greet: () => {
        console.log(this.name);//name  is found through lexical scope.
    }
};

// user.greet();

// Arrow function
//  ↓
// doesn't create its own this
//  ↓
// inherits lexical this
```

#  Call() Apply(), Bind ()
call, apply, and bind are used to explicitly set this for a function. call invokes the function immediately with arguments passed individually, apply invokes it immediately with arguments passed as an array, and bind returns a new function with this bound, which can be called later

call() immediately invokes the function and allows us to specify this.
```javascript
function greet(city) {
  console.log(`Hello ${this.name} from ${city}`);
}
const user = {
  name: "Priti"
};
greet.call(user, "Indore"); // Hello fro m  indore

greet.call(user, "Indore")
       ↓
   this = user
       ↓
   execute now
```
apply()

apply() works almost exactly like call(), but arguments are passed as an array/array-like object
```javascript
function greet(city, country) {
  console.log(this.name, city, country);
}
const user = {
  name: "Priti"
};
greet.apply(user, ["Indore", "India"]);
```

bind()
bind() does not execute the function immediately.It returns a new function with this permanently bound to the provided object.
```javascript
function greet() {
  console.log(`Hello ${this.name}`);
}
const user = {
  name: "Priti"
};
const newGreet = greet.bind(user);
newGreet();//Hello Priti
```

# What is implicit binding in JavaScript, and what happens when you detach a method from its object?
Implicit binding occurs when a regular function is called as a method using dot notation, such as obj.method(). In that case, the object before the dot becomes the function's this value. However, if the method is detached and stored in another variable, such as const fn = obj.method, calling fn() becomes a standalone function call, so the original object is no longer the implicit receiver. Default binding rules then apply.

Implicit Binding is the rule used when a regular function is called as an object method.

The core rule is:

When you call obj.method(), this inside method refers to the object immediately before the dot.
```js
const user = {
    name: "Priti",
    greet() {
        console.log(this.name);
    }
};
user.greet(); // Priti
const fn = user.greet;
fn(); // this is no longer user
```
What object is immediately before the dot?

That object becomes this.
```js
const user = {
    name: "Priti",
    greet() {
        console.log(this.name);
    }
};
const admin = {
    name: "Admin"
};
admin.greet = user.greet;
user.greet();
admin.greet();
```
# JavaScript Explicit Binding — call(), apply(), bind()
Explicit binding means we explicitly tell a regular function what this should be.

```js
const user = {
    name: "Priti"
};

function greet() {
    console.log(this.name);
}

greet();//default binding
```
If greet() is a standalone call, default binding applies.

But what if we want:

this → user

without writing:
```js
user.greet= greet;
user.greet()  //implicit binding
```
We can explicitly provide this:
```js
greet.call(user)  //That's explicit binding.
```
All three methods can explicitly control the this value of a regular function. call() invokes the function immediately and accepts arguments individually. apply() also invokes the function immediately, but accepts arguments as an array or array-like object. bind() does not invoke the function immediately; it returns a new function with this bound to the provided object, and it can also pre-fill arguments.


# What happens internally when you use new with a constructor function?
When a constructor function is called with new, JavaScript creates a new object, makes that object the function's this, runs the constructor body, and normally returns that object.

When a constructor function is called with new, JavaScript creates a new object, links that object's internal [[Prototype]] to the constructor's prototype, binds this inside the constructor to the newly created object, and executes the constructor body. Normally the newly created object is returned. However, if the constructor explicitly returns an object, that returned object is used instead. Returning a primitive does not replace the newly created object.

```js
function User(name) {
    this.name = name;
}
const user = new User("Priti");
console.log(user.name);

// function User(name) {
//     this.name = name;

//     this.greet = function () {
//         console.log(this.name);
//     };
// }
```

1. What exactly happens when we write new User()?
```js
const user = new User("Priti");

new User("Priti")
       │
       ▼
1. Create a new empty object  like this   {}
       │
       ▼
2. Link object to User.prototype   
       │
       ▼
3. Set this = new object
       │
       ▼
4. Execute User("Priti")
       │
       ▼
5. Return the new object
```
Normally new returns the newly created object.

But there's an important exception:

If the constructor explicitly returns an object, that object becomes the result of the new expression.
```js
function User(name) {
  this.name = name;

  return {
    name: "Returned Object",
  };
}

const user = new User("Priti");

console.log(user.name); //Returned Object
```

# What If Constructor Returns a Primitive?
```js
function User(name) {
    this.name = name;
    return 100;// A primitive return does not replace the newly created object.
}

const user = new User("Priti");

console.log(user.name);//priti  
```

#  What is Object.create()?
Object.create(proto) creates a new object whose internal [[Prototype]] points to the object passed as proto.

Object.create(proto) creates a new object and sets its internal [[Prototype]] to the object passed as proto. The new object doesn't copy the prototype's properties; instead, property lookup follows the prototype chain when a property isn't found directly on the object. Unlike new, Object.create() doesn't invoke a constructor. It's therefore a direct way to create objects with prototype-based inheritance

```javascript
const userPrototype = {
  greet() {
    console.log("Hello!");
  }
};
const user = Object.create(userPrototype);
user.name = "Priti";
console.log(user.name); // Priti
user.greet(); // Hello!
```


# What is the difference between this in a regular function and an arrow function?

A regular function has its own this, and its value is determined by how the function is invoked. For example, when called as obj.method(), this refers to obj. An arrow function does not have its own this; instead, it lexically inherits this from its surrounding scope where the arrow was created. Therefore, call(), apply(), and bind() cannot change an arrow function's this, and arrow functions cannot be used as constructors with new.

# What is the precedence of this binding rules in JavaScript?
For regular functions, the common interview priority is new binding first, then explicit binding through call, apply, or bind, then implicit binding through obj.method(), and finally default binding through a standalone function call. Arrow functions are different because they don't have their own this; they lexically inherit it from their surrounding scope, so the normal binding rules don't override it.

Then add:

bind() is special because it creates a bound function. Once a regular function's this is bound, subsequent call() or apply() calls on that bound function don't replace its bound this. However, when a constructable bound function is called with new, construction uses the newly created instance as this.
```js
new Foo()
→ new binding

foo.call(obj)
→ explicit binding

obj.foo()
→ implicit binding

foo()
→ default binding
```

# Why does this get lost when a class method is passed as a callback, and how do you fix it?
A class method is not automatically bound to its instance. When the method is called as instance.method(), implicit binding makes this equal to the instance. But when the method is passed as a callback, such as setTimeout(instance.method, 1000), it is later invoked without the original instance as its receiver. Since class bodies run in strict mode, this becomes undefined. We can preserve the instance context by binding the method with bind(this) in the constructor or by using an arrow class field, which lexically captures this.

this in Classes
Core rule: In a normal class method, this refers to the instance when the method is called through that instance.
```js
class User{
  constructor(name){
    this.name=name;
  }
  greet(){
    console.log(`Hello ${this.name}`)//priti
  }
}
const user = new User("priti");
user.greet()//
```
user.greet()
     ↓
method call
     ↓
this = user

BUT :
```js
const fn = user.greet;
fn()
```
Now the method is detached from user, so the original this is lost.

1. How this Works Internally in a Class
When you execute:
```js
const user = new User("priti")//new create instance

// new creates an instance
        User.prototype
                   │
                   │
             ┌──▼────┐
             │   user    │
             │              │
             │ name:    │
             │ "Priti"     │
             └───────┘
```
The greet() method is associated with the class prototype.

2. Class Methods Are NOT Automatically Bound

Because greet() is inside a class, this is permanently connected to the instance.  NO 
This works:
```js
// This works:
user.greet()

// because of implicit binding:
// user.greet()
//      ↓
// implicit binding
//      ↓
// this = user


// BUT 
const fn = user.greet;

fn();
// is now a standalone function call.

// The user receiver is gone.


// fn()
//  ↓
// standalone call
//  ↓
// user is no longer receiver
```
3. Why Is this undefined?
Class bodies automatically run in strict mode.
```js
"use strict"
```
inside a class
So when a normal class  method is  detached: like this 👇
```js
const fn= user.greet;
fn()
```
the standalon call uses strict mood behavior:
```js
this=undefined

// Therefore :
this.name

// is effectivelly trying to do :

undefined.name

// which produces a TypeError
```

**Callback Problem**
```js
class User {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log("Hello " + this.name);
    }
}
const user = new User("Priti");
// You're passing the function itself:👇
setTimeout(user.greet, 1000);
```
You're passing the function itself:
```js
setTimeout(user.greet, 1000);

Later, the callback is invoked without:👇
user.greet()

So the original receiver is lost.

Because class methods are strict:

this = undefined  
// AND 
this.name   causes a TypeError.
```

6. Fix #1 — bind(this) in Constructor

```js
class User {
    constructor(name) {
        this.name = name;

        this.greet = this.greet.bind(this);
    }

    greet() {
        console.log("Hello " + this.name);
    }
}

const user = new User("Priti");

setTimeout(user.greet, 1000);
```

this.greet = this.greet.bind(this);
original greet
      ↓
bind(instance)
      ↓
new bound function
      ↓
this always refers to instance

7. Fix #2 — Arrow Class Field

Here greet is an arrow function.

Arrow functions don't create their own this.

They capture the surrounding this lexically.
```js
class User {
    constructor(name) {
        this.name = name;
    }

    greet = () => {
        console.log("Hello " + this.name);
    };
}

const user = new User("Priti");

setTimeout(user.greet, 1000);
```

# What does new actually do?
it looks like new User() is simply "calling a function."

But internally, JavaScript performs roughly four important steps:

new User("Priti", 25)
        ↓
1. Create empty object
        ↓
2. Connect object to User.prototype
        ↓
3. Call User with this = new object
        ↓
4. Return object

2. Step 1 — Create an empty object
```js
// suppose 
function User(name, age) {
    this.name = name;
    this.age = age;
}

const user = new User("Priti", 25);

// Before the constructor runs, JavaScript conceptually creates:   {}

// Let's call it:  newObject

new User()

        ↓

newObject = {}

// At this point: newObject is empty {}
```
3. Step 2 — Connect to the prototype
```js
newObject.__proto__ = User.prototype;


newObject
   |
   | [[Prototype]]
   ↓
User.prototype


// LIKE THIS: 
User.prototype.sayHello = function () {
    console.log("Hello");
};

// NOW :
const user = new User("Priti", 25);
user.sayHello();

// JavaScript doesn't find sayHello directly on user.
// It searches:👇
user
 ↓
User.prototype
 ↓
sayHello()
```
4. Step 3 — Constructor executes with this
```js
User("Priti", 25)

// but with:👇
this = newObject

// So:
function User(name, age) {
    this.name = name;
    this.age = age;
}

// BECOMES:
newObject.name = "Priti";
newObject.age = 25;

{
    name: "Priti",
    age: 25
}
```

5. Step 4 — What does new return?
```js
function User(name) {
    this.name = name;
}

const user = new User("Priti");

// RETURNS THE NEWLY CREATED OBJECT :👇
{
    name: "Priti"
}


// But there's an important exception.
// If the constructor explicitly returns an object, that object can replace the automatically created object


new Constructor(args)

        ↓

① Create new object

        ↓

② Link object to
   Constructor.prototype

        ↓

③ Execute Constructor
   with this = object

        ↓

④ If constructor returns
   an object → return it

   otherwise → return
   the new object
```

#  What does Object.create() do?"
Object.create(proto) creates a new object and sets its internal [[Prototype]] to the object passed as proto. It doesn't copy the prototype's properties and it doesn't invoke a constructor. When we access a property that isn't found directly on the object, JavaScript follows this prototype link and continues up the prototype chain. It's therefore a simple way to implement prototype-based inheritance without constructor functions.

Object.create(proto) creates a brand-new object whose internal [[Prototype]] points to proto.

It does not copy the properties of proto.

It creates a prototype relationship.

Object.create creates a child and links the child to the parent through [[Prototype]]
**Object.create(proto) with copying proto**
```js
const parent = {
    score: 100
};

const child = Object.create(parent);// This creates a new object whose internal prototype ([[Prototype]]) points to parent.

child.score = 200;

// doesn't modify:   parent.score
// because child.score = 200 creates/shadows the child's property.
console.log(child.score);  // 200
console.log(parent.score); // 100


// But be careful with nested mutable objects.
const parent = {
    settings: {
        theme: "dark"
    }
};

const child = Object.create(parent);// ;// This creates a new object whose internal prototype ([[Prototype]]) points to parent.

child.settings.theme = "light";

console.log(parent.settings.theme);//light
// Because child.settings was found through the prototype chain and points to the same object:
// So:

// Object.create() does not deep-copy inherited objects.
```

# Object.create() Can Also Define Properties
Object.create() allows you to explicitly choose the object's prototype.
```js
// Object.create(proto, propertiesObject)
const person = {
    greet() {
        console.log("Hello");
    }
};

const user = Object.create(person, {
    name: {
        value: "Priti",
        writable: true,
        enumerable: true,
        configurable: true
    }
});
console.log(user.name);
user.greet();
``` 

**Property Shadowing**
The child's own property shadows the inherited property.
The parent property hasn't disappeared.

It's simply no longer reached when looking up child.name.
```js
const parent = {
    name: "Parent"
};

const child = Object.create(parent);

console.log(child.name);

child.name = "Child";

console.log(child.name);
console.log(parent.name);
```

```js
const parent = {
    x: 10
};

const child = Object.create(parent);

console.log(Object.getPrototypeOf(child) === parent);

// To change a prototype after creation, there's also:
Object.setPrototypeOf(child, anotherObject);
```

#  Object.create() vs {}
Object.create(proto) directly creates an object with its internal [[Prototype]] set to proto, without invoking a constructor. new Constructor() creates a new object whose prototype is Constructor.prototype, invokes the constructor with the new object as this, and returns the resulting object according to the constructor-return rules

Object.create(proto) creates a brand-new object whose internal [[Prototype]] points to proto.

It does not copy the properties of proto.

It creates a prototype relationship.

```javascript
const user = {};
console.log(user.toString); 
// function
```
Its prototype is:
    user
    ↓
    Object.prototype
    ↓
    null

Object.create()
```javascript
const user = Object.create(null);
console.log(user.toString);
// undefined
```
Its prototype is:
user
 ↓
null

```javascript
const dictionary = Object.create(null);
dictionary.name = "Priti";
dictionary.age = 25;

// This object has no Object.prototype in its prototype chain.

// Therefore:
dictionary.toString  //undefined 
// because toString() normally comes from Object.prototype.
```

#  Object.create() vs new?
Object.create(proto) directly creates an object with its internal [[Prototype]] set to proto, without invoking a constructor. new Constructor() creates a new object whose prototype is Constructor.prototype, invokes the constructor with the new object as this, and returns the resulting object according to the constructor-return rules

Object.create(proto) creates a brand-new object whose internal [[Prototype]] points to proto.

It does not copy the properties of proto.

It creates a prototype relationship.


When the new operator is used with a constructor function, JavaScript creates a new object, sets its internal [[Prototype]] to the constructor's prototype object, invokes the constructor with the newly created object as this, and then returns the new object unless the constructor explicitly returns an object or function.

```javascript
function User(name) {
  this.name = name;
}

User.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};
// Using new
const user1 = new User("Priti");
// Constructor execute
user1.name // "Priti"


// Using Object.create()    
const user2 = Object.create(User.prototype);
// Prototype set hua, but constructor execute nahi hua.
// Therefore:
console.log(user2.name);
// undefined
// You would have to manually initialize it:
user2.name = "Priti";
user2.greet();

//////////////////////////////////////
const parent = {
  greet() {
    console.log("Hello");
  }
};
// Object.create() lets you establish the prototype relationship directly:
const child = Object.create(parent);
Object.getPrototypeOf(child) === parent
// true
child.__proto__ === parent
// true
Object.getPrototypeOf(child)
Object.setPrototypeOf(child, parent)
```

# What happens when a property doesn't exist on an object?
When a property doesn't exist directly on an object, JavaScript searches for that property in the object's prototype chain. If it finds the property, it returns its value. If the property isn't found anywhere in the prototype chain and the chain reaches null, JavaScript returns undefined.
```javascript
const user = {
  name: "Priti"
};

console.log(user.age);
```

# Property Lookup Process How does property lookup work?
```javascript
const parent = {
  age: 25
};
const child = Object.create(parent);
child.name = "Priti";
console.log(child.age); //age is not  inside child.
```
JavaScript  follows prototype chain
```javascript
child
 ├── name: "Priti"
 │
 ↓ [[Prototype]]

parent
 ├── age: 25
 │
 ↓ [[Prototype]]

Object.prototype
 │
 ↓
null

So:
console.log(child.age);
// 25
```


# Object.freeze() vs Object.seal()?
Object.seal() prevents adding and deleting properties, but allows modification of existing property values. Object.freeze() goes one step further and also prevents modification of existing properties. Both are shallow operations.

```javascript
const user = {
  name: "Priti",
  age: 25
};
Object.seal(user);
console.log(Object.isSealed(user));
user.name = "Vipin";  // ✅ Allowed
user.city = "Delhi";  // ❌ Not allowed
delete user.age;      // ❌ Not allowed

// Object.freeze()
// ❌ New properties
// ❌ Delete properties
// ❌ Modify existing properties

console.log(Object.isFrozen(user));
user.name = "Vipin";  // ❌
user.city = "Delhi";  // ❌
delete user.age;      // ❌

// Object.freeze() is shallow, not deep.

const user = {
  name: "Priti",

  address: {
    city: "Bhopal"
  }
};

Object.freeze(user);
// Can  Not  change:
user.name = "Vipin";
// but  can change 
user.address.city = "Delhi";
```
# Object.preventExtensions()?
Object.preventExtensions() is a static JavaScript method that prevents new properties from ever being added to an object.It stops the object from growing, but it does not protect existing properties from being deleted or modified.
Blocks additions: Any attempt to add new properties will fail (silently in non-strict mode, or throw a TypeError in strict mode).
Allows deletions: Existing properties can still be completely removed.
Allows modifications: Existing property values can still be changed.
Irreversible: Once an object is made non-extensible, it cannot be made extensible again.
```javascript
"use strict";
const user = { name: "Alice" };
// Prevent new properties
Object.preventExtensions(user);
// ❌ Throws TypeError: Cannot add property age, object is not extensible
user.age = 25; 
//  Works fine (Modifying existing properties is allowed)
user.name = "Bob"; 
//  Works fine (Deleting existing properties is allowed)
delete user.name; 

```

# How do getters and setters work?
Getters and setters are special methods that let you control how a property is read and updated.

Getters and setters are accessor properties in JavaScript. A getter is automatically executed when a property is read, while a setter is automatically executed when a property is assigned a value. They are commonly used for computed properties, validation, transformation, and controlling access to internal data.
```javascript
const user = {
  firstName: "Priti",
  lastName: "Bishnoi",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value) {
    const [first, last] = value.split(" ");

    this.firstName = first;
    this.lastName = last;
  }
};
console.log(user.fullName);
// We don't call it like a function:
user.fullName();
user.fullName = "Alice Doe";

// Setters are useful when you want to validate or transform data before storing it
const user = {
  _age: 0,

  set age(value) {
    if (value < 0) {
      throw new Error("Age cannot be negative");
    }

    this._age = value;
  },

  get age() {
    return this._age;
  }
};
user.age = 25;
console.log(user.age);
```

#  What is a Proxy?
A Proxy is a JavaScript object that wraps another object or function and allows us to intercept and customize operations such as property access, assignment, deletion, and function calls using traps like get, set, deleteProperty, and apply.
```javascript
const proxy = new Proxy(target, handler);
const user = {
  name: "Priti",
  age: 25,
  role: "Developer"
};

const proxyUser = new Proxy(user, {

  // 1️⃣ GET
  // Triggered when reading a property
  get(target, property) {
    console.log(`GET → Reading property: ${String(property)}`);

    return target[property];
  },

  // 2️⃣ SET
  // Triggered when adding/updating a property
  set(target, property, value) {
    console.log(
      `SET → Changing ${String(property)} from ${target[property]} to ${value}`
    );

    // Validation
    if (property === "age" && value < 0) {
      throw new Error("Age cannot be negative");
    }

    target[property] = value;

    // IMPORTANT:
    // set trap must return true if operation succeeds
    return true;
  },

  // 3️⃣ HAS
  // Triggered by: "property" in object
  has(target, property) {
    console.log(`HAS → Checking property: ${String(property)}`);

    return property in target;
  },

  // 4️⃣ DELETE
  // Triggered by: delete object.property
  deleteProperty(target, property) {
    console.log(`DELETE → Deleting property: ${String(property)}`);

    if (!(property in target)) {
      console.log("Property does not exist");
      return false;
    }

    delete target[property];

    return true;
  }
});
// get 
console.log(proxyUser.name);

                                                                                    proxyUser.       name
                                                                                            ↓
                                                                                        get()
                                                                                            ↓
                                                                                        target.name
                                                                                            ↓
                                                                                        "Priti"
proxyUser.name = "vipin";//  SET → Changing name from Priti to vipin
console.log(proxyUser.name);//GET → Reading property: name vipin

// SET
proxyUser.age = 30;

// HAS
console.log("role" in proxyUser);

// DELETE
delete proxyUser.role;

// HAS again
console.log("role" in proxyUser);

```

# What does instanceof actually do?
obj instanceof Constructor checks whether Constructor.prototype is found anywhere in obj's prototype chain.

```js
function Person(name) {
    this.name = name;
}

const person = new Person("Priti");//JavaScript creates an object whose prototype points to:  Person.prototype

console.log(person instanceof Person); // true  it means "Is Animal.prototype somewhere in dog's prototype chain?"
console.log(person instanceof Object); // true    because Object.prototype is also in the chain.

// const person = new Person("Priti");//JavaScript creates an object whose prototype points to:

// Person.prototype


// Manually Creating the Prototype Relationship

const person = Object.create(Person.prototype);

console.log(person instanceof Person);
console.log(person.constructor === Person);
console.log(person instanceof Person);


function Animal() {}

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);

const dog = new Dog();

console.log(dog instanceof Dog);
console.log(dog instanceof Animal);
console.log(dog instanceof Object);
```

# How does instanceof work in JavaScript?
instanceof checks whether the prototype property of a constructor exists anywhere in the prototype chain of an object. For obj instanceof Constructor, JavaScript starts from the object's internal [[Prototype]] and walks upward until it finds Constructor.prototype or reaches null. If it finds it, the result is true; otherwise it's false. It's therefore a prototype-chain check rather than simply a check of which constructor created the object. Its behavior can also be customized using Symbol.hasInstance

# What is the difference between instanceof and typeof in JavaScript?
typeof tells us the general JavaScript type/category of a value, while instanceof checks whether an object's prototype chain contains a particular constructor's prototype.


# hasOwnProperty() vs in
# Where does this property come from — the object itself, or its prototype chain

hasOwnProperty() checks only own properties, while in checks both own and inherited properties.

hasOwnProperty() checks whether a property exists directly on the object itself, whereas the in operator checks whether the property exists either directly on the object or anywhere in its prototype chain.

For example, if an object inherits name from its prototype, name in obj returns true, but obj.hasOwnProperty("name") returns false.

In modern JavaScript, I prefer Object.hasOwn(obj, "name") because it safely checks own properties without relying on the object's hasOwnProperty method.
```js
const parent = {
    role: "admin"
};

const user = Object.create(parent);

user.name = "Priti";

user.hasOwnProperty("name"); // true
user.hasOwnProperty("role"); // false



"name" in user; // true      in does not checks the value 
"role" in user; // true

// ************************************************
hasOwnProperty
      ↓ comes from 👇
ONLY object itself

     in
      ↓
object itself
      ↓
prototype
      ↓
prototype's prototype
      ↓
...
      ↓
    null

// hasOwnProperty() checks only own properties, while in checks both own and inherited properties.

// *****************************************
Object.hasOwn(obj, "property");   //It was introduced in ES2022.

const user = {
    name: "Priti"
};

console.log(Object.hasOwn(user, "name"));
// true

console.log(Object.hasOwn(user, "toString"));
// false



// ***************************************************************
const obj = {
    name: "Priti",
    hasOwnProperty: function () {
        return false;
    }
};

console.log(obj.hasOwnProperty("name"));//false 

// Because obj itself contains:👇

hasOwnProperty: function () {
    return false;
}

// So this:👇
obj.hasOwnProperty("name");
// doesn't call the original Object.prototype.hasOwnProperty.

// It calls the object's own function:

obj
│
├── name
│
└── hasOwnProperty()  ← this shadows Object.prototype method


// How to safely check it

// Use:
console.log(Object.hasOwn(obj, "name")); // this works 
// true


// **********************
const obj = Object.create(null);

obj.name = "Priti";

console.log(obj.hasOwnProperty("name"));//TypeError: obj.hasOwnProperty is not a function

// BECAUSE:  Object.create(null)   ← creates an object with no prototype.   Therefore it doesn't inherit:  hasOwnProperty  from Object.prototype

// Object.create(null)
//    ↓
// null


// in does not checks the values   Even though: obj.name==undefined   
const obj={
  name:undefined,
}
const name= "name" in obj;
console.log(name)// true    because The Property exists

// So don't do this:👇
if (obj.name !== undefined) {
    // property exists
}


// ****Constructor Function *********
function User(name) {
    this.name = name;
}

User.prototype.sayHello = function () {
    console.log(`Hello ${this.name}`);
};

const user = new User("Priti");
Object.hasOwn(user, "name");
// true

Object.hasOwn(user, "sayHello");
// false

"sayHello" in user;
// true
// This explains why prototype methods can be shared by all instances.

// for in loop 
const parent = {
    role: "admin"
};

const child = Object.create(parent);

child.name = "Priti";

for (const key in child) {
    console.log(key);  // Because for...in can enumerate enumerable inherited properties too.
}// name role


// BUT  Object.keys(child);  returns only own enumerable properties:
Object.keys(child);  //["name"]
```


# What is prototype pollution, and why is it dangerous?
Prototype pollution means changing Object.prototype.

Prototype Pollution is a JavaScript security vulnerability where an attacker is able to modify a shared prototype, commonly Object.prototype. Since normal JavaScript objects inherit from Object.prototype, polluted properties can become visible on many unrelated objects.

For example, if Object.prototype.isAdmin = true, then an object like {} can access user.isAdmin even though isAdmin was never defined directly on user.

This can lead to security issues when application logic trusts inherited properties, such as checking if (user.isAdmin).

Prototype pollution commonly occurs through unsafe handling of user-controlled keys such as __proto__, constructor, and prototype, especially in recursive merge or object-path utilities.

To prevent it, we should validate keys, avoid modifying built-in prototypes, safely handle untrusted object paths, and use objects created with Object.create(null) when we need a dictionary that doesn't inherit from Object.prototype

1. What exactly is Prototype Pollution?
First remember the prototype chain:

user
  ↓
Object.prototype
  ↓
null

Suppose:
```js
const user = {
    name: "Priti"
};
```
user
 │
 ├── own properties
 │      name: "Priti"
 │
 ↓
Object.prototype
 │
 ├── toString
 ├── hasOwnProperty
 └── ...
 │
 ↓
null

Now imagine someone does:
```js
Object.prototype.admin = true;

// THEN
const user = {};

console.log(user.admin);  //true

// But we never actually put admin inside user.
user.admin
    ↓
Does user have "admin"?
    ↓
NO
    ↓
Check user.__proto__
    ↓
Object.prototype
    ↓
Does Object.prototype have "admin"?
    ↓
YES
    ↓
true

// So prototype pollution is essentially poisoning the prototype chain.
```
2. Why is it dangerous?
Imagine an application contains:
```js
function isAdmin(user){
return user.admin==true
}

const user = {
    name: "Priti"
};

console.log(isAdmin(user));//flase

// BUT
Object.prototype.admin = true;
console.log(isAdmin(user));//true

// The application may accidentally believe that every user is an admin.

// That's why prototype pollution is a security issue.

console.log(Object.hasOwn(user, "isAdmin"));//false   
console.log("isAdmin" in user);//true   Because in checks the prototype chain too.



const obj = {};

obj.__proto__.admin = true;

const user1 = {};
const user2 = {};

console.log(user1.admin);
console.log(user2.admin);
// obj.__proto__   points to:  Object.prototype




const payload = JSON.parse(
    '{"__proto__": {"isAdmin": true}}'
);

console.log(payload.isAdmin); //undefined

// Because JSON.parse() creates an own property literally named __proto__. It does not automatically invoke the legacy __proto__ setter just because the JSON contains that key.

```


Fix this using :
1. Never directly modify Object.prototype Avoid 
Object.prototype.admin = true;
obj.__proto__.admin = true;
Because if obj.__proto__ is Object.prototype, you're modifying the shared prototype.

2. Use Object.create(null) for dictionaries instead of const data = {};
```js
const data = Object.create(null);

data.name = "Priti";
data.age = 25;

console.log(data.name);
```

3. Freeze prototypes when appropriate

I prevent prototype pollution by never modifying Object.prototype, validating or allowlisting keys from untrusted input, blocking dangerous keys such as __proto__, constructor, and prototype, avoiding unsafe recursive merge operations, and using Object.create(null) or Map for dictionary-like data. I also use Object.hasOwn() when I need to distinguish own properties from inherited properties.


# == vs ===
== performs loose equality comparison and can convert types before comparing. === performs strict equality comparison, so both the type and value must match. In modern JavaScript, === is generally preferred because it avoids unexpected type coercion.

==  → value comparison + type coercion
=== → value + type comparison
```javascript
[]==false// true  because == performs type coercion but
[]===false// fasle --   []-object and false- boolean     different types   
10 == 10       // true
10 === 10      // true

10 == "10"     // true
10 === "10"    // false

true == 1      // true
true === 1     // false

false == 0     // true
false === 0    // false

null == undefined   // true
null === undefined  // false
```
#  Type Coercion
Type coercion is the automatic or implicit conversion of a value from one data type to another by JavaScript.
```javascript
console.log("5" + 2);
// "5" --> String
//  + 
// 2-- Number
// js coverts 2-"2"
// "5"+"2"
// "52"
console.log("5" - 2);//3 
//"5" becomes Number 5 
//5-2=3
5=="5// true 
// 5--converted to "5"   5==5
5==="5"//false --because === doesn't perform this coercion.
```

# Difference between Type Conversion and Type Coercion 

Type conversion is the explicit conversion of a value from one type to another by the developer, while type coercion is the implicit conversion automatically performed by JavaScript during certain operations.

```JS
// Type conversion is when the developer intentionally converts a value from one data type to another.
const value = "100";
const number = Number(value);
console.log(number);        // 100
console.log(typeof number); // "number"
String(100);
// "100"
Number("50");
// 50
Boolean(1);
// true
Boolean(0);
// false

// Type Coercion

// Type coercion is when JavaScript automatically converts a value from one type to another during an operation.

console.log("5" - 2);
console.log(5 == "5");
```

# Pass by values pass by reference
Pass by value means a copy of the value is passed to a function, so changing the parameter does not change the original variable.

Pass by reference means the reference to the same object is passed, so changes can affect the original object.


# Is JavaScript pass-by-reference?
JavaScript uses pass-by-value. For objects, the value passed to a function is a reference to the object. Therefore,
mutating the object's properties inside the function affects the original object, but reassigning the parameter does
not change the caller's variable.


```javascript 
// #Pass by Value
let a= 10 ;
let b= a;
b= 20;
console.log(a)//10
console.log(b)//20
```
```javascript
// function Example
let a = 10;
function change(x) {
  x = 20;// here X gets a copy of  a 10  changing x does not change a
}
change(a);
console.log(a); // 10
```
Pass by Reference  ->
```javascript
const Person={
    name:"priti"
}
//there is one object two variable hold a reference to that object ,this will chnage the orignal object too
function changeName(user){
    user.name="Vipin";
}
changeName(Person)
console.log(Person.name)// vipin  
```

why? 
Before function call: 
```javascript
Person={name:priti}
Then :
changeName(Person) 

The Function recieves the value stored in Person object  
For an Object ,that value is a reference to the object.inside
function changeName(userData){}
Now :
person ──────┐
                       │
                       ▼
                   Object
                       ▲
                       │
user ────────    

Both points the same object
```
```javascript 
 # Mutation 
inside the  fucntion  :
user.name="vipin"
We are modifying the shared object
Person ──────┐
                       │
                       ▼
┌───────────────┐
│ name: Vipin            │
└───────────────┘
                        ▲
                        │
user ────────┘
Therefore: 
console.log(Person.name)//vipin

this is call by reference ?Object are passed by reference
javascript passes the value .
For an object,that value happens to be a reference.
javascript pass by value  ,   Object's value= reference
```

Mutaion happens,
but now 
```javascript
function changeName(user){
    user={
        name:"vipin"
    };//Reassignment
}
const Person={
    name:"priti",
}
changeName(Person);
console.log(Person.name)//priti
```
why? 
# Mutation vs Reassignment (Object  Reference type)
initially :
```javascript
person ───────┐
                         ▼
                    Object A
                    name:Priti
user ─────────┘

inside function
user={name:"priti"}// 
Now user is Reassigned
person ─────────────► Object A 
                                                 name: Priti

user ────────────────► Object B 
                                                name: Vipin


The Orignal Person still points to object A so 
console.log(Person.name);//returns priti



#Mutation 
user.name="vipin"   chnages the orignal object

#Reassignment
user={name:"vipin"}
 Only changes what the local paramenter variable points to

Mutation
↓
Shared object changes
but----------->
Reassignment
↓
Local variable gets new reference
```


# Primitive  
```javascript
function change(x){
    // x gets its own copy of the value
    x=20;// then x=20 only changes x 
}
let a= 10;
change(a);
console.log(a)//10  

                               JavaScript
                                     │
                            Pass by Value
                                     │
               ┌──────────┴────────┐
               ↓
            Primitive                              ↓
                 │                               Object
                 │                                   ↓
                 │
                 ↓
            Value copied

                                    Reference value copied
                                                │
                            ┌─────────┴─────────┐
                            ↓                                      ↓
                        Mutation                       Reassignment
                            │                                        ↓
                            ↓                                 Only local
                                                               parameter changes
                            ↓                                    
                    Original object
                        changes
                            
                            
JavaScript is pass-by-value. For primitive values, the actual value is copied. For objects, the value being copied is a reference to the object, so both the original variable and the parameter can refer to the same object. Therefore, mutating the object inside the function can affect the original object, but reassigning the parameter does not.
```


#  NaN
NaN stands for Not-a-Number. It is a special value of the JavaScript number type that represents an invalid or undefined numeric result. Interestingly, NaN is not equal to itself, so we use Number.isNaN() to check for it.
NaN is actually of type number.
```javascript
typeof NaN
// "number"
console.log("hello" - 5);//NaN  Because JavaScript tries to convert "hello" into a number, but it cannot.
0 / 0   // NaN

Number("hello") // NaN
const result = "abc" - 10;//NaN  Instead of crashing JavaScript, the result becomes:NaN
console.log(NaN === NaN);//false
NaN == NaN //false
// NaN represents an invalid/unrepresentable numeric result, and it is defined to be unequal to itself.
Number.isNaN(value)

Number.isNaN(NaN);
// true

Number.isNaN(10);
// false
```


#  Shallow vs Deep Copy
A shallow copy creates a new top-level object, but nested objects and arrays still share their references with the original object. For example, the spread operator and Object.assign() perform shallow copies. Therefore, modifying a nested object in the copy can also modify the original. A deep copy recursively creates independent copies of nested objects as well, so changes to the copy don't affect the original. In modern JavaScript, structuredClone() can be used for deep cloning of supported values.

```javascript 
Shallow copy creates a new object, but nested objects are still shared between the original and copied object.

Deep copy creates a completely independent copy, including nested objects.

objects are reference types in JS. A plain assignment copies the reference, not the object.
const user1= {
    name:"priti"
    };
const user2=user1;// same object ,two labels
user2.name= "vipin";
console.log(user1.name)// vipin--  They were never sesparte object
```
##  Shallow Copy -- creates a new object, but nested objects are still shared between the original and copied object.
```javascript
const user1= {
    name:"priti",
    address:{
        city:"Delhi"
    }
    }
const user2= {...user1}// / or Object.assign({}, user1)
user2.name="vipin";
console.log(user1.name)// priti  -
// fine ,primitive field 
// Both the spread operator ({...obj} ) and  Object.assign() are shallow — they don't recursively clone nested objects/arrays
user2.address.city="Mumbai"
console.log(user1.address.city)// Mumbai" — leaked! nested object is shared

```

# Deeep Copy
## --  creates a completely independent copy, including nested objects.
```javascript
const user2 = JSON.parse(JSON.stringify(user1));
// But JSON.parse(JSON.stringify(...)) has limitations and should not be treated as a general-purpose deep-copy solution.
const user2 = structuredClone(user1);
user2.address.city="Mumbai";
console.log(user1.address.city)// "delhi" ffully independent 



const [user, setUser] = useState({
  name: "Priti",
  age: 25,
  address: {
    city: "Indore",
    country: "India"
  }
});
//new reference at each level that changed
//updating nested state without mutating the original object.
setUser({
    ...user,// the spread create new top -evel object  copy 
address:{ // we are assigning  a new  object   to address properties (reassign/replace) 
//then  
    ...user.address,  // copies the existing address properties
    city:"mumbai"// override city  update city
}})
```

# ES6 + Modern javascript

# Arrow function 
Arrow functions do not create their own this, arguments, or prototype, and they cannot be used as constructors.

Arrow functions were introduced in ES6. They provide concise function syntax, support implicit returns for expression bodies, and most importantly they have lexical this rather than their own dynamically determined this. They also don't have their own arguments, don't have a prototype, and cannot be called with new. They're especially useful for callbacks and nested functions where I want to preserve the surrounding this, but I generally avoid them for object methods when the method needs the object's this
```js
const add = (a, b) => {
    return a + b;
};

// Normal function gets its own this
const user = {
    name: "Priti",

    greet: function () {
        console.log(this.name);
    }
};

user.greet();

// Arrow function does NOT create this
const user = {
    name: "Priti",

    greet: () => {
        console.log(this.name);// An arrow function gets this lexically from its surrounding scope.
    }
};

user.greet();

// Arrow Functions and arguments
// Normal functions have their own arguments object:
function test(a, b) {
    console.log(arguments);
}

test(10, 20);

// arguments
//     ↓
// {
//     0: 10,
//     1: 20
// }
// Arrow functions don't have their own arguments.
const test = () => {
    console.log(arguments);
};

// This does not create an arrow-specific arguments.

// Instead, if an outer normal function has arguments, the arrow can access that outer arguments.
function outer(a, b) {

    const inner = () => {
        console.log(arguments[0]);
    };

    inner();
}

outer(10, 20);

const test = (...args) => {
    console.log(args);
};

test(10, 20, 30);

// Arrow Functions Have No prototype
// Normal functions can have a prototype property:
function Person(name) {
    this.name = name;
}

console.log(Person.prototype);

// You get an object.

// But: With arrow function   Arrow Functions Have No prototype
// Because arrow functions aren't designed to participate in constructor-based prototype inheritance.

const Person = (name) => {
    this.name = name;
};

console.log(Person.prototype);

Output:

undefined

// Arrow Functions Cannot Be Constructors
function Person(name) {
    this.name = name;
}

const p = new Person("Priti");

console.log(p.name);//priti

const Person = (name) => {
    this.name = name;
};

const p = new Person("Priti");

// Throws:

// TypeError: Person is not a constructor

// Why?

// Because new expects a constructor function.
```
# What is the difference between normal functions and arrow functions?
The biggest difference is how this works. Normal functions have their own this, and its value is determined by how the function is called. Arrow functions don't have their own this; they lexically capture this from the surrounding scope.

# Spread vs Rest

```Spread and Rest both use the ... syntax, but   their purpose is opposite .Spread expands or unpacks elements from an array or properties from an object, while Rest collects multiple values or remaining properties into a single array or object.```
```javascript
// Spread {...}
const arr = [10,20,30];
const newArrClopy= [...arr]//
console.log(newArrClopy);
const user = {
  name: "Priti",
  age: 25
};
const copy = {
  ...user
};

// Rest Operator (...)
const function sum(...num){
    console.log(num)
}
const number = [1,2,3,4,5]

// Rest in Destructuring

const [first ,...rest]= number;
console.log(first)//1
console.log(rest)//[2,3,4,5]

// Object Rest
const user = {
  name: "Priti",
  age: 25,
  city: "Mumbai"
};

const { name, ...otherDetails } = user;

console.log(name);
// Priti

console.log(otherDetails);
// { age: 25, city: "Mumbai" }

// Spread with object 
const user = {
    name: "Priti",
    age: 24
};

const updatedUser = {
    ...user,
    role: "Developer"
};

console.log(updatedUser);


// Rest + spread 
function addBonus(...numbers) {
    return [...numbers, 100];
}

const result = addBonus(10, 20, 30);

console.log(result);
```
# Destructuring
```Destructuring is an ES6 feature that allows us to extract values from arrays or properties from objects and assign them to variables using a concise syntax. Array destructuring works based on position, while object destructuring works based on property names..```
```javascript
// without destructuring
const user={
    name:"priti",
    age:25,
     address: {
    city: "Mumbai",
    country: "India"
  }
}
const name=user.name;
const age= user.age;


// with destructuring 
const {name,age}= user;

// Rename Object Property
const { name: userName, age: userAge } = user;
console.log(userName); // Priti
console.log(userAge);  // 25

// Default Value 
const { name, age = 25 } = user;

// Nested Destructuring
const {
  address: { city }
} = user;

// Array 
onst numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

// Skip values
const [first, , third] = numbers;
console.log(first); // 10
console.log(third); // 30

// Skipping values/

// You can skip elements using an empty comma:
const arr = ["A", "B", "C"];

const [a, , c] = arr;

console.log(a); // A
console.log(c); // C


// Renaming During Destructuring
const user = {
  name: "Priti",
  
};

// You want the variable to be called username.

// Write:👇

const { name: username } = user;

console.log(username); // Priti

// Default Values

// You can provide a default value.
const { name, age = 25 } = user; // Because age doesn't exist, the default is used.

const { x: renamed = defaultValue } = obj;



const user = {
  name: "Priti",
  address: {
    city: "Indore"
  }
};

const {
  name: username,
  age = 25,
  address: {
    city
  }
} = user;

console.log(username); // Priti
console.log(age);      // 25
console.log(city);     // Indore

// for...of + Destructuring
const users = [
  { name: "A", age: 20 },
  { name: "B", age: 25 },
  { name: "C", age: 30 }
];

for (const { name, age } of users) {
  console.log(name, age);
}
const users = [
  { name: "A", age: 20 },
  { name: "B", age: 25 },
  { name: "C", age: 30 }
];

for (const { name, age } of users) {
  console.log(name, age);
}


// undefined vs null
// Default values activate only when the extracted value is:undefined 
// undefined → default applies
// null      → default does NOT apply
const user = {
  name: undefined,
  age: null
};

const {
  name = "Guest",
  age = 18
} = user;

console.log(name);
console.log(age);


// ({ name } = user);
// The parentheses tell JavaScript:

// "This is an expression/assignment, not a block."
let name;

const user = {
  name: "Priti"
};

({ name } = user);

console.log(name); // Priti

// Destructuring + Rest 
const user = {
  name: "Priti",
  age: 25,
  city: "Indore"
};

const { name, ...other } = user;

console.log(name);  // Priti
console.log(other); // { age: 25, city: "Indore" }

// Destructuring → extracting
// Rest          → collecting remaining values


// Destructuring vs Spread
const newUser = {
  ...user// Expands/copies properties into another object.
};
```

# What is the difference between array and object destructuring?
Array destructuring is positional, while object destructuring is property-name based.

In array destructuring, variables receive values according to their position in the iterable:

const [a, , c] = arr;

Here a receives the first value and c receives the third value.

In object destructuring, variables are matched with object properties by name:
const { name, age } = user;

We can also rename properties and provide defaults:

const { name: username, age = 18 } = user;

Destructuring can also be used in function parameters, loops, and other ES6+ syntax.

#  computed property names [ ]
Computed property names let you create object keys dynamically inside an object literal. You wrap a variable, function call, or string math expression in square brackets []. JavaScript evaluates this code at runtime to set the final property name

```js
const dynamicKey = "role";
const user = { [dynamicKey]: "Admin" };
// Result: { role: "Admin" }


const prefix = "item";
const cart = { [`${prefix}_id`]: 101 };
// Result: { item_id: 101 }
```


# Optional Chaining ?.
Optional chaining ?. is a modern JavaScript operator that safely accesses properties, methods, or computed properties by short-circuiting to undefined when the value being accessed is null or undefined, instead of throwing a TypeError.

?. lets you safely access a property, method, or array element when the value before it might be null or undefined.
```js
const user = null;

// without ? 
// null.name

// That's invalid → TypeError.
console.log(user?.name);//undefined

console.log(user.name);

// You get: / TypeError: Cannot read properties of null

const user = {
    name: "Priti"
};

console.log(user?.name);

// JavaScript essentially performs this check:👇

if (user === null || user === undefined) {
    return undefined;
} else {
    return user.name;
}


// Three ways to use Optional Chaining
//A  Property access
obj?.property

// B. Method call
obj?.method()

// C. Bracket / array access
obj?.[key]


const user = {
    profile: {
        name: "Priti"
    }
};

console.log(user?.profile?.name);


const users = ["Priti", "Vipin", "Aman"];

console.log(users?.[0]);

// Optional Chaining + Dynamic Properties
const user = {
    name: "Priti",
    age: 24
};

const key = "name";

console.log(user?.[key]);




// Protect the object
// user?.greet()

// If user is null/undefined → undefined.

// But if greet exists and isn't a function → error.

// 2. Protect the method
// user.greet?.()

// If greet is null/undefined → undefined.
const user = {};

console.log(user.greet?.());//undefind 


// Optional Chaining + Nullish Coalescing👇
const value = obj?.property ?? defaultValue;

// This is better than blindly using || when 0, false, or "" are valid values.
const user = null;

const name = user?.name ?? "Guest";

console.log(name);



const user = {
    age: 0
};

console.log(user?.age ?? 18);//18 because 0 is falsy 



// Optional Chaining + Functions
function processData(callback) {
    callback?.("Data processed");
}

processData();
```
Optional chaining does not protect against every kind of error. It only short-circuits when the value being optionally accessed is null or undefined. It can be used for property access, method calls, and computed property access such as obj?.[key].


# Nullish Coalescing (??) vs OR (||)
# What is the difference between || and ?? in JavaScript? When would you use one over the other?
"|| uses JavaScript truthiness and returns the right-hand value when the left-hand value is falsy, such as 0, false, an empty string, NaN, null, or undefined.

?? is the nullish coalescing operator. It returns the right-hand value only when the left-hand value is null or undefined.

Therefore, I use ?? when values like 0, false, or "" are valid and should be preserved. I use || when any falsy value should trigger the fallback.

```js
a ?? b
   ↓
Use b ONLY when a is null or undefined

a || b
   ↓
Use b when a is ANY falsy value
```

```js
a ?? b

means:

if (a === null || a === undefined) {
    return b;
}

return a;

So only two values trigger the fallback:

null
undefined

Everything else is preserved:

0
""
false
NaN

a || b

works using JavaScript's truthiness.

Conceptually:

if (!a) {
    return b;
}

return a;
The following are falsy:

false
0
-0
0n
""
null
undefined
NaN
```

```js
const username = null;

console.log(username ?? "Guest");
console.log(username || "Guest");

const age = 0;

console.log(age ?? 18);// 0
console.log(age || 18);


const user = {
    name: "Priti",
    age: 0,
    isAdmin: false,
    bio: ""
};

Suppose we want defaults:

console.log(user.age ?? 18);//0
console.log(user.isAdmin ?? true);//false
console.log(user.bio ?? "No bio"); //""

console.log(user.age || 18);//18
console.log(user.isAdmin || true); //true
console.log(user.bio || "No bio"); //No bio


console.log(false || "JavaScript");
console.log(false ?? "JavaScript");

console.log(0 || 100);
console.log(0 ?? 100);

console.log("" || "Default");
console.log("" ?? "Default");

console.log(NaN || 50);
console.log(NaN ?? 50);


// Traditional approach
// Before ??, developers often wrote:

const username =
    value === null || value === undefined
        ? "Guest"
        : value;

// With nullish coalescing:

const username = value ?? "Guest";
```


# Template Literal 
# What are tagged template literals, and what arguments does the tag function receive?
A tagged template literal allows a function to process a template literal before the final string is created. The tag function receives the static string portions as its first argument and the evaluated interpolation values as the remaining arguments, commonly captured using ...values.

For example, tag\Hello ${name}!`gives the tag something conceptually equivalent tostrings = ["Hello ", "!"]andvalues = [name]`. The tag can then transform, validate, escape, format, or combine those pieces to produce a final result.

Tagged templates are used in libraries such as CSS-in-JS solutions and SQL/query builders.
```js
function tag(strings, ...values) {
    console.log("strings:", strings);
    console.log("values:", values);
}

const name = "Priti";
const age = 25;

tag`Hello ${name}, you are ${age} years old.`;


const Button = styled.button`
    color: red;
    padding: 10px;
`;

```
# What is the difference between ||=, &&=, and ??=?
Logical assignment operators combine logical short-circuiting with assignment. ||= assigns the right-hand value when the left-hand value is falsy, &&= assigns when the left-hand value is truthy, and ??= assigns only when the left-hand value is null or undefined. The important distinction is that ||= treats values like 0, false, and "" as needing a default, while ??= preserves those valid values and only replaces missing values.

```js
// &&= practical use
// &&= is useful when you want to modify something only if it already exists / is enabled.

let user = {
    isActive: true
};

user.isActive &&= false;

console.log(user.isActive);//false


const data = {};

data.items ??= [];

data.items.push("JavaScript");

console.log(data);//{ items:["javascript"]}

const config = {
    debug: false
};

config.debug ??= true;

console.log(config.debug);//false  Because false isn't nullish.


let enabled = false;

enabled ||= true;

console.log(enabled);//true



if (isLoggedIn) {
    isLoggedIn = false;
}

// Modern:👇

isLoggedIn &&= false;


if (!name) {
    name = "Guest";
}

Modern:

name ||= "Guest";


let a = 0;
let b = "";
let c = null;
let d = false;
let e = undefined;

a ||= 10;
b ??= "Hello";
c ??= "World";
d &&= true;
e ||= 20;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
```

# What's the difference between property shorthand and computed property names?
Property shorthand is used when the variable name and object property name are the same. For example, { name } is equivalent to { name: name }.

Computed property names allow us to dynamically determine an object's property name using an expression inside square brackets, such as { [key]: value }. The expression is evaluated at runtime and its result becomes the property key.

# What are Object Shorthand & Computed Keys?

```js
// befor ES6
const name = "Priti";
const age = 25;

const user = {
    name: name,
    age: age
};

console.log(user);

// ES6 let us write 
const user = {
  name,
  age
}
// javascript undastand it 
{
    name: name,
    age: age
}



const name = "Priti";

const user = {
    name
};

// Conceptually JavaScript interprets it as:

const user = {
    name: name
};


// Computed Property Names
// Sometimes you don't know the property name until runtime.
const key = "name";

const user = {
    [key]: "Priti"
};

console.log(user);

{
    name: "Priti"
}
// [key ] means Evaluate key first and use its resulting value as the property name.

// Computed keys become especially useful when creating objects dynamically.

function createUser(key,value){
  return {
    [key]:value
  }
}

const user1= createUser("name","priti")
const user2= createUser("age",24)
console.log(user1)//{name:"priti"}
console.log(user2)// {age:24}


const name = "Priti";
const age = 25;

const methodName = "greet";

const user = {
    name,
    age,

    [methodName]() {
        return `Hello ${this.name}`;
    }
};

console.log(user.greet());

// Computed Keys Can Use Expressions
// The expression inside [] doesnot have to be a variable 


const prefix ='user'
const obj={
  [`${prefix}_name]:"priti",
  [`${prefix}_age]:24
}
console.log(obj)
// output 👇
{
    user_name: "Priti",
    user_age: 25
}

// computed keys also work with method 
const action ="login"
const user ={
  [action](){
    return "user logged in"
  }
};
console.log(user.login())//user logged in


const environment = "production";

const config = {
    [`${environment}Url`]: "https://api.example.com"
};

console.log(config);
```




#  Higher-Order Functions
```A Higher-Order Function is a function that takes one or more functions as arguments or returns a function. Common examples in JavaScript are map, filter, and reduce. Higher-order functions are useful for abstraction, code reuse, and functional programming.```

```javascript 
 function greet(name){
return `Hello ${name}`
}
function processUser(callback) {
  callback("Priti");
}
processUser(greet);// Higher-Order Function because it accepts a function.

// Function Returning a Function
function multiplyBy(x) {
  return function (y) {
    return x * y;
  };
}
const double = multiplyBy(2);// multiplyBy is a Higher-Order Function because it returns a function.
console.log(double(5)); // 10

const numbers = [1, 2, 3];

const result = numbers.map(function (num) {
  return num * 2;
});

console.log(result);
// [2, 4, 6]
```
# Callback

```A callback is a function that is passed as an argument to another function and is called by that function at a later time or when a specific operation is completed```
```javascript 
function getUser(callback) {
  console.log("Fetching user...");

  setTimeout(() => {
    const user = {
      id: 1,
      name: "Priti"
    };

    callback(user);
  }, 2000);
}

function showUser(user) {
  console.log("User:", user.name);
}

getUser(showUser);

```
#  Callback Hell
```Callback Hell occurs when multiple asynchronous operations are (nested inside each other) handled through deeply nested callbacks. It makes code difficult to read, maintain, debug, and handle errors. Promises and async/await help flatten this structure and make asynchronous code easier to manage.```

```javascript
// 1 login user 
fucntion loginUser(callback){
setTimeout(()=>{
    console.log("user Logged in")
    const user={
        id:1,
        name:"priti"
    }
    callback(user)
},1000)
}
// 2 get user details 
function getUser(user,callback){
    setTimeout(()=>{
        console.log("getting user details ")
        const userData={
            ...user,
            email:"priti@gmail.com"
        };
        callback(userData)
    },1000)
}

// 3 get orders 
function getOrders(userData,callback){
    setTimeout(()=>{
        console.log("Getting orders...");
        const order=[
            {
                id:101,
                product:"laptop",
                price:50000,
            },
             {
        id: 102,
        product: "Phone",
        price: 30000
      },
        ]
        callback(orders)
    },1000)

}

// 4. Get payment
function getPayment(orders, callback) {
  setTimeout(() => {
    console.log("Processing payment...");

    const payment = {
      orderId: orders[0].id,
      amount: orders[0].price,
      status: "success"
    };

    callback(payment);
  }, 1000);
}


// 5. Send email
function sendEmail(payment, callback) {
  setTimeout(() => {
    console.log(
      `Email sent. Payment status: ${payment.status}`
    );

    callback();
  }, 1000);
}

loginUser((user) => {
  getUser(user, (userData) => {
    getOrders(userData, (orders) => {
      getPayment(orders, (payment) => {
        sendEmail(payment, () => {
          console.log("Done");
        });
      });
    });
  });
});
```
````Here each asynchronous operation depends on the result of the previous operation. Because each callback is nested inside the previous callback, the code becomes deeply nested and difficult to maintain. This is called callback hell.```


# Promises
```A Promise represent future result```
A Promise is an object representing the eventual completion or failure of an asynchronous operation. It has three
states: pending, fulfilled, and rejected. resolve() fulfills the Promise, reject() rejects it, and .then(), .catch(),
and .finally() register callbacks to handle those outcomes. Every call to .then() returns a new Promise, which enables
Promise chaining
```javascript 
let promise = new Promise(); // Promise {pending
let promise = new Promise((resolve,reject)=>{
    resolve("Pizza Delivered");
})
promise.then((result)=>{
    console.log(result)
})
// Promise{
//state:"pending"
// value:undefined
//}
// after resolve  
// Promise{
//state:"Fullfilled"
// value:"pizza Delivered"
//}
// then() return a new promise 

```
```javascript
function loginUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve({
          id: 1,
          name: "Priti"
        });
      } else {
        reject("Login failed");
      }
    }, 2000);
  });
}

loginUser()
  .then((user) => {
    console.log("User:", user);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
```
# Pomise Chain
```Promise chaining is the process of connecting multiple .then() handlers so that the result of one asynchronous operation is passed to the next operation in sequence.```

```javascript
loginUser((user) => {
  getUser(user, (userData) => {
    getOrders(userData, (orders) => {
      getPayment(orders, (payment) => {
        sendEmail(payment, () => {
          console.log("Done");
        });
      });
    });
  });
});
loginUser()
  .then((user) => getUser(user))
  .then((userData) => getOrders(userData))
  .then((orders) => getPayment(orders))
  .then((payment) => sendEmail(payment))
  .then(() => {
    console.log("Done");
  })
  .catch((error) => {
    console.log(error);
  });
  ```Promise chaining allows multiple asynchronous operations to be executed sequentially by returning a Promise from each .then() and passing its resolved value to the next .then().```
```
```javascript
#  Promise.all()
let p1= Promise.resolve("user");
let p2= Promise.resolve("oder");
let p3 = Promise.resolve("message");
Promise.all([p1,p2,p3]).then((result)=>{
    console.log(result)
}).catch(err){
    console.log(err)
}
//everyone must finish successfully
// if one Promise fails everything fails
// JavaScript doesn't wait for the remaining results once it knows the combined Promise must reject
const [user,post,comment]= await Promise.all([
    fetchUser(),
    fetchPost(),
    fetchComments()
])
```
instead of writting one by one 
```javascript
Promise.allSettled()
// Evene if one API fails 
// You still want all result


let p1= Promise.resolve("user");
let p2= Promise.reject("oder");// fails
let p3 = Promise.resolve("message");
Promise.allSettled([p1,p2,p3])then((result) => console.log(result));
// 
[
{ status: "fulfilled", value: "User" },
{ status: "rejected", reason: "ERROR" },
{ status: "fulfilled", value: "Order" }
]
// ````nothing fails you recieve the status of evry Promise```


Promise.race()//hoerver finishes FIRST wins
let p1 = new Promise((resolve) => {
setTimeout(() => resolve("A Promise"), 3000);
});
let p2= new Promise(
(resolve) => setTimeout(() => resolve("B Promise")),
1000
);
Promise.race([p1, p2]).then((result) => console.log(result));
// outpiut- B Promise



Promise.any()// Any First success wins, ignore Failures

let pr1 = Promise.reject("Serve 1");
let pr2 = Promise.resolve("SErver2 ");
let pr3 = Promise.resolve("Server 3");
Promise.any([pr1, pr2, pr3]).then((res) => console.log(res));//server 2

// it ignored server 1 because it failed
//what if all fail?   
// Promise.any([
// Promise.reject("SA")
// Promise.reject("AA")
// ])
//AggregateError

Promise.all() waits for all Promises to fulfill. If even one Promise rejects, the returned Promise rejects immediately with that rejection reason.

Promise.allSettled() waits for every Promise to settle and returns the status and result of each Promise, whether fulfilled or rejected.

Promise.race() settles as soon as the first Promise settles, whether that first Promise fulfills or rejects.

Promise.any() fulfills when the first Promise fulfills and rejects with an AggregateError only when all Promises reject.

```

Promise.resolve() creates a resolved Promise from a value or an existing Promise
```javascript
Promise.resolve("Success")
  .then((value) => console.log(value));//Success
  ```
Promise.reject() creates a rejected Promise with the provided reason."
```javascript
Promise.reject("Something went wrong")
  .catch((error) => console.log(error));
```

# Can a Promise change its state after it is fulfilled or rejected?"
No. A Promise starts in the pending state and can transition only once to either fulfilled or rejected. Once it becomes fulfilled or rejected, it is settled and its state is immutable. Any subsequent calls to resolve() or reject() are ignored.


# What happens when you return a value, return a Promise, or throw an error inside .then()?
.then() always returns a new Promise. If the callback returns a normal value, the new Promise fulfills with that value, conceptually through Promise.resolve(). If the callback returns a Promise, the new Promise adopts the state of that returned Promise and waits for it to settle. If the callback throws an error, the new Promise becomes rejected with that error. This behavior allows us to build Promise chains where values flow forward and errors propagate down to .catch().
```js
Promise.resolve("Start")
    .then((value) => {
        console.log(value);

        throw new Error("Something failed");
    })
    .then((value) => {
        console.log("This will NOT execute");
    })
    .catch((error) => {
        console.log("Caught:", error.message);
    });
```

# What is the difference between sequential await and Promise.all()? When would you use each?
In sequential execution, each await waits for the previous asynchronous operation to complete before starting the next one. For example, await a(); await b(); means b() isn't called until a() has resolved.

With Promise.all(), the asynchronous operations are started before we await their combined result. For example, await Promise.all([a(), b()]) starts both operations without waiting for the first one to finish, so independent operations can overlap and usually complete faster.

I use sequential execution when the second operation depends on the result of the first, and Promise.all() when the operations are independent and I need all their results.
```js
const user = await getUser();
const posts = await getPosts();

const [user, posts] = await Promise.all([
    getUser(),
    getPosts()
]);
```


# What's the difference between .catch() and try/catch with async/await, and what happens if you forget to await a Promise inside a try block?
.catch() handles rejected Promises in a Promise chain. With async/await, a rejected Promise can be caught using try/catch when the Promise is awaited inside the try block.

A key difference is that try/catch doesn't automatically catch an asynchronous Promise rejection just because the Promise was created inside the try block. If I forget to use await, the Promise can reject later after the try block has already completed, so the local catch won't handle that rejection.

Therefore, for an awaited asynchronous operation, I would write try { await operation(); } catch (error) { ... }, or explicitly attach .catch() to the Promise.


# What actually happens with async/await?
async/await looks synchronous, but it does not block JavaScript's main thread. It is essentially a cleaner syntax built on top of Promises + the Event Loop + Microtask Queue.
```js
async function getData() {
    const result = await fetch("/users");

    console.log(result);
}

getData();
```
await pause async function not the entire javascript program/code 
Call async function
      ↓
Function starts executing
      ↓
fetch() returns Promise
      ↓
await sees Promise
      ↓
PAUSE async function
      ↓
async function immediately returns Promise
      ↓
JavaScript continues executing other code
      ↓
Promise settles
      ↓
continuation goes to Microtask Queue
      ↓
Event Loop picks microtask
      ↓
async function resumes
      ↓
console.log()

# s async/await synchronous or asynchronous?
async/await is asynchronous. An async function always returns a Promise. When execution reaches an await, the async function is suspended until the awaited Promise settles. The rest of the function is then scheduled as a microtask, while the JavaScript thread continues executing other synchronous code. Therefore, await pauses only the async function, not the entire JavaScript runtime.

# async/await
```async/await is Promise-based syntax that makes asynchronous code easier to read. An async function always returns a Promise, and await pauses that async function until the Promise settles and gives access to its fulfilled value. Errors are commonly handled using try/catch.```

```javascript
function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Priti");
    }, 2000);
  });
}

console.log("1");

getUser().then((user) => {
  console.log(user);
});

console.log("3");// 
// 1
//3
//priti
```
```javascript
// with async await 
function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Priti");
    }, 2000);
  });
}
async function main() {
  console.log("1");
  const user = await getUser();
  console.log(user);
  console.log("3");
}
console.log("C");
main();
//1
//c
//priti
//3
```


# Asynchronous JavaScript
```javascript is single threaded what does it mean? ```
Javascript can execute only One Piece of Code at a time .

```javascript
console.log("start");
setTimeout(() => {
console.log("Tiemer");
}, 2000);
console.log("end");
// start 
//end 
// Timer
```
There are 6 important parts
         -Call Stack
         -Web APIs (browser/node APIs)
         -Callback Queue
         -MicroTask Queue - (Microtask vs Macrotask)
         -Event Loop


# JavaScript is single-threaded. Then how does it handle asynchronous operations without blocking?"
JavaScript has a single call stack, so synchronous JavaScript executes one thing at a time. Asynchronous operations are handled by the browser or Node.js runtime APIs. Once they complete, their callbacks are queued, and the Event Loop schedules them when the call stack is free. Promise microtasks are processed before the next task. That's how JavaScript achieves non-blocking asynchronous behavior despite having a single main JavaScript thread."

# Call Stack
```The Call Stack is a LIFO data structure used by JavaScript to manage function execution. Whenever a function is called, its execution context is pushed onto the stack, and when it finishes, it is popped from the stack. JavaScript executes the function at the top of the stack```


The Call Stack is a LIFO data structure used by JavaScript to keep track of function execution. Whenever a function is called, an execution frame is pushed onto the stack. JavaScript executes the function at the top of the stack. When that function returns, its frame is popped and execution resumes from the previous frame. Because JavaScript executes synchronous code through the Call Stack, deeply nested or infinite recursion can cause a stack overflow. For asynchronous operations such as timers, promises, and I/O, their callbacks don't execute immediately on the Call Stack; they are handled through the host environment and later scheduled by the Event Loop when the Call Stack becomes available.

```javascript 
// call stack
console.log("start");
// next line
setTimeout(()=>{},2000)
//does Javascript wait for 2 sec ? No
//What happens? 
//Javascript Immidetly sends  setTimeout(()=>{},2000) to the Web APIs
// Web APIs Timer start 
// The callback is stored there 
          // The call Stack is free again  
          //Js Continue Next Line
          console.log("end")//end  

        //   Call Stack empty 

// After 2 sec  The Browser says Timer finished
//The Callback is not Directly pushed into the Call Stack ,instead it goes to Callback Queue
console.log("Timer")
// Event Loop continusely ask  ,if Yes  Moves the callback  into the Callback Queue   Then Call Stack Execute it
// >Execute setTimeout() does NOT execute the callback after exactly 2000 ms.
// It means
// "Wait at least 2000 ms, then put the callback into the Callback Queue."
// If the Call Stack is busy,
// the callback waits longer

console.log("A");
Promise.resolve().then(() => {
console.log("B");
});
console.log("C");
//A
//C
//B
//Because Promises Does not use the Callback Queue They use Another Queue   (Microtask Queue)

//JS has Two Queue
     // 1.  Callback Queue
                 //That Holds 
                 setTimeout()
                 setInterval()
                 DOM Event
    // 2. Microtask Queue
              //That holds Promises .then()
              Promise().then()

//Microtask Queue has higher priority Always  Call Stack Empty check Microtask Queue   Execute All Microtasks then Callback Queue's

await 
     // it only Pauses one async function, While the rest of JS keep Running.
```

 # What is a Stack Frame?
 Every function call creates an execution context/frame containing information needed while that function executes.
'

# What are Web APIs / Node APIs?
The JS engine executes JavaScript, but the environment provides capabilities around it.
setTimeout() is not implemented by the core JavaScript language itself.

The host environment provides it.

In a browser, that capability comes from browser APIs.

In Node.js, it comes from Node's runtime APIs.


Web APIs / Node APIs are host-environment capabilities that extend JavaScript beyond the core language. They handle things such as timers, networking, DOM events, file-system operations, and other asynchronous work. Once the work is ready, the associated callback or promise reaction is scheduled through the runtime's queues, and the event loop coordinates its execution by the JavaScript engine.
```js
┌──────────────────────────────────────┐
│          JavaScript Engine           │
│                                      │
│  Call Stack                          │
│  Heap                                │
│  Execution of JS code                │
└──────────────────────────────────────┘
                 │
                 │ uses
                 ▼
┌──────────────────────────────────────┐
│       Host Environment APIs          │
│                                      │
│ Browser:                             │
│  setTimeout   fetch   DOM events     │
│                                      │
│ Node.js:                             │
│  fs           HTTP     timers        │
│  networking   streams  etc.          │
└──────────────────────────────────────┘
```

# Are Web APIs part of the JavaScript engine?
No. Web APIs are not part of the JavaScript engine. The JavaScript engine, such as V8, is responsible for executing JavaScript code using components like the call stack and heap. APIs such as setTimeout, fetch, and DOM event handling are provided by the host environment, such as the browser. In Node.js, Node provides its own runtime APIs such as fs, HTTP, streams, and timers. These APIs handle asynchronous operations and, when the operation is ready, make callbacks or promise reactions eligible for execution through the event-loop mechanism.

For example, when setTimeout() is called, the timer is handled by the host environment rather than blocking the JavaScript call stack. Once the timer is ready, its callback is queued. The event loop eventually schedules that callback when the JavaScript execution context is ready.

```js
button.addEventListener("click", () => {
    console.log("Clicked");
});

addEventListener() is provided by the browser environment.


setInterval(() => {
    console.log("Hello");
}, 1000);

setTimeout()
setInterval()
fetch()
addEventListener()
localStorage
WebSocket
DOM APIs
```


#  Event Loop
```The Event Loop is the mechanism that allows JavaScript to handle asynchronous operations while JavaScript itself executes code on a single main thread. It continuously checks whether the Call Stack is empty and then moves eligible callbacks from queues to the Call Stack for execution.```

```Microtask Queue and Macrotask Queue are queues used by the JavaScript runtime to schedule asynchronous callbacks. After the Call Stack becomes empty, the Event Loop prioritizes microtasks before moving to the next macrotask.```

JavaScript executes synchronous code on the call stack. Once the current synchronous execution finishes, the runtime drains the microtask queue, which includes Promise reactions and queueMicrotask callbacks. Then it selects a task, such as a timer or event callback, executes it, and drains the microtask queue again. In browsers, rendering can occur between these steps when appropriate. This process repeats continuously, allowing JavaScript to handle asynchronous operations without blocking the main JavaScript execution thread.

setTimeout(fn, 0) schedules fn as a future task; the callback runs only after the timer is eligible, the current JavaScript execution finishes, and the relevant microtask checkpoint has been processed.

#  Microtask vs Macrotask(task)
The task or macrotask queue contains callbacks from asynchronous task sources such as timers, I/O, and user events. The microtask queue contains things such as Promise reactions and queueMicrotask() callbacks. After the current synchronous JavaScript execution finishes, the runtime performs a microtask checkpoint and processes pending microtasks before moving on to the next task. Therefore, in the common browser model, microtasks have priority over the next task. This is why a resolved Promise callback usually runs before a setTimeout(..., 0) callback."

Typical macrotask/task sources include:
setTimeout
setInterval
I/O callbacks
UI events
MessageChannel / posted messages
Node.js timers and certain I/O callbacks

Microtask Queue
│
├── Promise.then()
├── Promise.catch()
├── Promise.finally()
├── queueMicrotask()
└── MutationObserver



# Why is Microtask Queue higher priority?
Because microtasks are designed for work that should happen as soon as the current JavaScript execution and current task complete, before the event loop moves on to another task.
```js
Promise.resolve().then(() => {
    console.log("microtask");
});

setTimeout(() => {
    console.log("macrotask");
}, 0);

microtask
macrotask
```

```js
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");
```

JavaScript first executes all synchronous code on the call stack, so "Start" and "End" are printed first. The Promise.then() callback is placed into the microtask queue, while the setTimeout() callback is placed into the task/macrotask queue. Once the synchronous code finishes, the event loop drains the microtask queue before processing the next macrotask. Therefore "Promise" is printed before "Timeout"


# Why doesn't setTimeout(fn, 0) execute immediately?
setTimeout(fn, 0) schedules the callback as a task after the timer becomes eligible. It cannot interrupt currently executing synchronous JavaScript. Once the current task finishes, the runtime drains pending microtasks, and only then can the timer callback execute as a subsequent task



# 
Microtask starvation occurs when the microtask queue continuously adds new microtasks, so the event loop never gets a chance to process macrotasks such as setTimeout, user events, I/O, or rendering.
The event loop essentially keeps doing:
Take a macrotask
      ↓
Execute it
      ↓
Is microtask queue empty?
      ↓
     NO
      ↓
Run microtask
      ↓
Did it create another microtask?
      ↓
     YES
      ↓
Run that microtask
      ↓
Repeat until queue is empty
      ↓
Only THEN continue


Why Can Starvation Happen?
Microtask #1
    ↓
creates Microtask #2
    ↓
creates Microtask #3
    ↓
creates Microtask #4
    ↓
creates Microtask #5
    ↓
...

The queue never becomes empty.

And because the event loop wants to fully drain the microtask queue, it cannot move forward to the next macrotask.

 Macrotask blocked
                ↓
      Rendering blocked

This is microtask starvation.

A microtask is allowed to enqueue another microtask, and that newly created microtask must also be processed before the queue is considered drained.


# Can a Promise or microtask block a setTimeout(..., 0)?"
Yes.

Promise.then(), queueMicrotask(), and other microtask-producing mechanisms are processed in the microtask checkpoint before the event loop proceeds to another macrotask/task.

If a microtask continuously schedules another microtask, the microtask queue may never become empty. As a result, the event loop cannot proceed to pending macrotasks such as setTimeout, and in browsers rendering and user-event processing can also be delayed.

sort :👇
Yes. setTimeout(fn, 0) only makes the callback eligible to run in a future task; it doesn't give it priority. The event loop processes the current task and then drains the microtask queue. If microtasks keep adding more microtasks, the queue never becomes empty, so the event loop can starve subsequent tasks and, in a browser, delay rendering and user events.



# Map() Data Structure

Map is a built-in JavaScript data structure used to store key-value pairs.    Unlike regular objects, Map allows keys of any data type and provides methods such as set, get, has, delete, and clear. It is commonly used for frequency counting, caching, lookup tables, and DSA problems such as Two Sum."
```JS
const map = new Map();
// Map keys can be ANY type.
map.set("name", "Priti");
map.set("age", 25);

map.set(100, "Hundred");
map.set(true, "Boolean");

const objKey = { id: 1 };

map.set(objKey, "Object Key");

console.log(map.get(objKey)); // Object Key
console.log(map.get("name")); // Priti
console.log(map.get("age"));  // 25
has()   // Checks whether a key exists.
console.log(map.has("name"));
// true

console.log(map.has("city"));
// false
map.delete("age");//Removes a key-value pair.
console.log(map.size);//Returns the number of entries.
map.clear();//Removes everything.

                                      Key        Value
                                      ↓           ↓
                                      "name"  →  "Priti"
                                      "age"   →  25

const users = new Map();

users.set("user1", "Priti");
users.set("user2", "Rahul");

for (const [key, value] of users) {
  console.log(key, value);
}
```


#  Map vs Object
Both Map and Object can store key-value pairs, but Map is specifically designed as a key-value collection, while Object is primarily used to represent structured data.
A Map can use any value as a key:

```javascript
const cart = new Map();

cart.set(101, {
  name: "Laptop",
  quantity: 1,
  price: 50000
});

cart.set(102, {
  name: "Mouse",
  quantity: 2,
  price: 1000
});
console.log(cart)
const product = cart.get(101);

console.log(product);
// cart.set(101, updatedProduct);
cart.get(101);
cart.delete(101);
cart.has(101);
cart.size()
cart.clear()
// Map(2) {
//   101 => { name: 'Laptop', quantity: 1, price: 50000 },
//   102 => { name: 'Mouse', quantity: 2, price: 1000 }
// }


const products = [
  "Laptop",
  "Phone",
  "Laptop",
  "Mouse",
  "Phone",
  "Laptop"
];
const frequency = new Map();
for (const product of products) {
  frequency.set(
    product,
    (frequency.get(product) || 0) + 1
  );
}

console.log(frequency);

// A Map can use any value as a key:
const map = new Map();
const objKey = { id: 1 };
map.set(objKey, "User Data");

console.log(map.get(objKey)); //User Data


```

#  Set
Set is a built-in JavaScript collection that stores unique values. It is useful when we need uniqueness, such as removing duplicate IDs, checking whether a value already exists, or tracking unique users. Common methods are add(), has(), delete(), and clear()."
```javascript
const productIds = [
  101,
  102,
  101,
  103,
  102,
  104
];
const uniqueProductIds = [...new Set(productIds)];
console.log(uniqueProductIds);
// Example 2
const loggedInUsers = new Set();

loggedInUsers.add(101);
loggedInUsers.add(102);
loggedInUsers.add(103);

console.log(loggedInUsers.has(102));
// true

console.log(loggedInUsers.has(999));
// false
loggedInUsers.delete(102);

console.log(loggedInUsers.has(102));
// false
```

# Generator Functions
A Generator Function is a special JavaScript function that can pause its execution using yield and resume later. It is declared using function* and returns a Generator object when called.

```javascript
function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = numbers();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: undefined, done: true }

function* batches(data, size) {
  for (let i = 0; i < data.length; i += size) {
    yield data.slice(i, i + size);
  }
}

const users = [
  1, 2, 3, 4, 5,
  6, 7, 8, 9, 10
];

const generator = batches(users, 3);

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
```

# Iterators
An iterator is an object that follows the iterator protocol by providing a next() method. Each call to next() returns an object containing value and done. Iterators are used by constructs such as for...of to consume iterable data one value at a time.
```javascript
const users = ["Priti", "Vipin", "Ram"];

const iterator = users[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
// { value: "Priti", done: false }
// { value: "Vipin", done: false }
// { value: "Ram", done: false }
// { value: undefined, done: true }


```

#  Modules
A module is a self-contained unit of JavaScript code that encapsulates related functionality. Modules allow us to organize applications into separate files and explicitly share functionality using mechanisms such as ES module export and import. This improves maintainability, reusability, and encapsulation.

```javascript
// utils/password.js
export function hashPassword(password) {
  // hashing logic
}

export function comparePassword(password, hash) {
  // comparison logic
}

// main.js
import {
  hashPassword,
  comparePassword
} from "../utils/password.js";

export async function register(req, res) {
  const hashedPassword = await hashPassword(req.body.password);

  // create user...
}
```


# How does the JavaScript engine manage memory?
JavaScript uses automatic memory management. The engine allocates memory for variables, objects, and execution contexts, typically using stack and heap areas. A garbage collector periodically identifies objects that are no longer reachable from the program's roots and reclaims their memory. Memory leaks can still occur when unnecessary objects remain reachable through references such as globals, event listeners, timers, or closures."




# What causes Stack Overflow?
Stack Overflow occurs when the Call Stack exceeds its maximum capacity. The most common cause in JavaScript is infinite or excessively deep recursion, where new function calls keep being added to the stack without enough calls returning.
```javascript
// Infinite Recursion
// Har test() call Call Stack mein ek new execution frame add karta hai.
// ecause function kabhi return nahi karta:
function test() {
  test();
}
test();

// Circular function calls
function a() {
  b();
}

function b() {
  a();
}

a();
```
Recursion with Base Condition
```javascript
function countdown(n) {
  if (n === 0) {
    return;
  }

  console.log(n);

  countdown(n - 1);
}

countdown(5);
```

 # Regular function vs arrow function?
A regular function has its own this, arguments, and prototype, and it can be used as a constructor with new. An arrow function has a shorter syntax and does not have its own this, arguments, or prototype. Its this is lexically inherited from the surrounding scope. Arrow functions are especially useful for callbacks, while regular functions are often preferred when a function needs its own dynamic this.

```javascript
function greet(name) {
  console.log(`Hello ${name}`);
}
greet("Priti");
```

An arrow function is a shorter function syntax introduced in ES6. It does not have its own this, arguments, or prototype; instead, it inherits this from its surrounding lexical scope.

```javascript
const greet = (name) => {
  console.log(`Hello ${name}`);
};
greet("Priti");
```




# DOM 
he DOM (Document Object Model) is a tree-like, in-memory object representation of the HTML document, built by the browser's parser. JavaScript reads/modifies this object model — not the original HTML file.

# What is the DOM, and how is the DOM represented internally?
The DOM, or Document Object Model, is a programming interface created by the browser from an HTML document. The browser parses the HTML and represents it as a hierarchical tree of nodes. The document object is the root, HTML elements become Element nodes, and text and comments are represented as separate nodes. JavaScript can traverse this tree using relationships such as parentElement, children, and nextElementSibling, and can manipulate the nodes using APIs such as createElement, appendChild, remove, and textContent. Events also use this tree structure for propagation through capturing and bubbling.

# 1. What is DOM?

## Definition

**DOM (Document Object Model)** is a programming interface provided by
the browser that represents an HTML document as a **tree of
objects/nodes**.

JavaScript uses the DOM to:

-   Read HTML elements
-   Change content
-   Change styles
-   Add/remove elements
-   Handle user events
-   Modify attributes

### Example

``` html
<h1 id="title">Hello</h1>
<button id="btn">Change Text</button>

<script>
  const title = document.getElementById("title");
  const btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    title.textContent = "Hello Priti!";
  });
</script>
```

### Interview Answer

> "DOM stands for Document Object Model. It is a tree-like
> representation of an HTML document created by the browser. JavaScript
> can use the DOM API to dynamically read, modify, create, and remove
> elements and handle events."

------------------------------------------------------------------------

# 2. DOM Tree

## Definition

The browser converts HTML into a **tree structure** called the DOM Tree.

Example:

``` html
<html>
  <body>
    <div id="app">
      <h1>Hello</h1>
      <p>Welcome</p>
    </div>
  </body>
</html>
```

Conceptually:

``` text
Document
   |
  html
   |
  body
   |
  div#app
  /     \
h1       p
|        |
Hello   Welcome
```

Every part can be represented as a node.

### Common Node Types

``` text
Document
 ├── Element Node
 ├── Text Node
 ├── Comment Node
 └── Attribute
```

### Interview Answer

> "The DOM Tree is a hierarchical object representation of an HTML
> document. Each HTML element becomes an element node, and text becomes
> a text node. JavaScript can navigate and manipulate this tree."

------------------------------------------------------------------------

# What is the difference between querySelectorAll() and getElementsByClassName()?"


querySelectorAll() accepts a CSS selector and returns a static NodeList containing all matching elements. getElementsByClassName() accepts class names and returns a live HTMLCollection. The important difference is that a static NodeList doesn't automatically reflect later DOM changes, while a live HTMLCollection does.

```js
const staticList =
  document.querySelectorAll(".item");

const liveCollection =
  document.getElementsByClassName("item");
  ```
# 3. querySelector vs querySelectorAll


## Definition

Both methods use **CSS selectors** to find elements.

### `querySelector()`

Returns the **first matching element**.

``` js
const element = document.querySelector(".card");

console.log(element);
```

HTML:

``` html
<div class="card">Card 1</div>
<div class="card">Card 2</div>
```

Output:

``` text
Card 1
```

### `querySelectorAll()`

Returns **all matching elements** as a static `NodeList`.

``` js
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  console.log(card.textContent);
});
```

Output:

``` text
Card 1
Card 2
```

### Difference

  Feature             querySelector    querySelectorAll
  ------------------- ---------------- -----------------------
  Returns             First element    All matching elements
  Result              Element / null   NodeList
  CSS selector        Yes              Yes
  Multiple elements   No               Yes

### Interview Answer

> "`querySelector` returns the first element matching a CSS selector,
> while `querySelectorAll` returns all matching elements as a static
> NodeList."

------------------------------------------------------------------------

# 4. getElementById

## Definition

`getElementById()` finds an element using its `id`.

``` html
<h1 id="title">Hello</h1>

<script>
  const title = document.getElementById("title");

  console.log(title);
</script>
```

### Important Point

You **do not** use `#` with `getElementById()`.

Correct:

``` js
document.getElementById("title");
```

Incorrect:

``` js
document.getElementById("#title");
```

### Interview Answer

> "`getElementById` returns the element whose id matches the provided
> string. It is specifically designed for ID lookup and does not require
> a CSS selector."

------------------------------------------------------------------------

# 5. textContent vs innerHTML

## `textContent`

Gets or sets **plain text**.

``` html
<div id="box"></div>

<script>
  const box = document.getElementById("box");

  box.textContent = "<h1>Hello</h1>";
</script>
```

The browser displays:

``` text
<h1>Hello</h1>
```

It does not interpret the string as HTML.

## `innerHTML`

Gets or sets HTML markup.

``` js
box.innerHTML = "<h1>Hello</h1>";
```

The browser renders:

``` text
Hello
```

### Important Security Point

Avoid putting untrusted user input directly into `innerHTML`.

Potentially dangerous:

``` js
box.innerHTML = userInput;
```

Prefer:

``` js
box.textContent = userInput;
```

### Interview Answer

> "`textContent` works with text and treats HTML tags as plain text,
> while `innerHTML` parses a string as HTML. `textContent` is generally
> safer when inserting untrusted text."

------------------------------------------------------------------------

# 6. createElement

## Definition

`document.createElement()` creates a new DOM element in memory.

``` js
const button = document.createElement("button");

button.textContent = "Click Me";

document.body.append(button);
```

### Real Project Example

``` js
const card = document.createElement("div");
const title = document.createElement("h2");

title.textContent = "Product";
card.append(title);

document.body.append(card);
```

### Interview Answer

> "`createElement` creates a new element node. The element exists in
> memory until it is inserted into the DOM using methods such as
> `append()` or `appendChild()`."

------------------------------------------------------------------------

# 7. append vs appendChild

Both can insert nodes into the DOM.

## `append()`

Can append:

-   Elements
-   Text
-   Multiple values

``` js
const div = document.createElement("div");

div.append("Hello", " World");
```

It can also accept multiple arguments:

``` js
parent.append(child1, child2, "Hello");
```

## `appendChild()`

Accepts **one Node**.

``` js
parent.appendChild(child);
```

It returns the appended node.

### Difference

  Feature              append        appendChild
  -------------------- ------------- ---------------
  Multiple arguments   Yes           No
  String allowed       Yes           No
  Returns              `undefined`   Appended node
  Node accepted        Yes           Yes

### Interview Answer

> "`append` is more flexible because it accepts multiple nodes and
> strings. `appendChild` accepts a single Node and returns the appended
> node."

------------------------------------------------------------------------

# 8. remove()

## Definition

`remove()` removes an element from its parent.

``` js
const box = document.querySelector(".box");

box.remove();
```

Before:

``` html
<div class="box">Hello</div>
```

After:

``` html
<!-- element removed -->
```

### Interview Answer

> "`remove()` directly removes an element from the DOM."

------------------------------------------------------------------------

# 9. setAttribute/getAttribute

## `setAttribute()`

Creates or updates an attribute.

``` js
const link = document.querySelector("a");

link.setAttribute("href", "https://example.com");
link.setAttribute("target", "_blank");
```

## `getAttribute()`

Reads an attribute.

``` js
const href = link.getAttribute("href");

console.log(href);
```

### Example

``` html
<input id="username" type="text" />

<script>
  const input = document.getElementById("username");

  input.setAttribute("placeholder", "Enter username");

  console.log(input.getAttribute("placeholder"));
</script>
```

### Interview Answer

> "`setAttribute` creates or updates an HTML attribute, while
> `getAttribute` reads the current value of an attribute."

------------------------------------------------------------------------

# 10. classList

## Definition

`classList` provides an API to manage CSS classes.

### `add()`

``` js
element.classList.add("active");
```

### `remove()`

``` js
element.classList.remove("active");
```

### `toggle()`

``` js
element.classList.toggle("active");
```

### `contains()`

``` js
element.classList.contains("active");
```

### `replace()`

``` js
element.classList.replace("old", "new");
```

### Real Example

``` js
const menu = document.querySelector(".menu");
const button = document.querySelector(".menu-btn");

button.addEventListener("click", () => {
  menu.classList.toggle("open");
});
```

### Interview Answer

> "`classList` provides convenient methods such as add, remove, toggle,
> contains, and replace for managing an element's CSS classes."

------------------------------------------------------------------------

# 11. addEventListener

## Definition

`addEventListener()` attaches an event handler to an element.

Syntax:

``` js
element.addEventListener(event, handler, options);
```

Example:

``` js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  console.log("Button clicked");
});
```

### Multiple Events

``` js
button.addEventListener("mouseenter", () => {
  console.log("Mouse entered");
});

button.addEventListener("mouseleave", () => {
  console.log("Mouse left");
});
```

### Named Handler

``` js
function handleClick() {
  console.log("Clicked");
}

button.addEventListener("click", handleClick);
```

Remove it:

``` js
button.removeEventListener("click", handleClick);
```

### Interview Answer

> "`addEventListener` registers a function to run when a specific event
> occurs. It supports multiple listeners for the same event and provides
> options such as capture, once, and passive."

------------------------------------------------------------------------

# Event Object

## Definition

When an event occurs, the browser passes an **Event Object** containing
information about that event.

``` js
button.addEventListener("click", (event) => {
  console.log(event);
});
```

Common properties/methods:

``` js
event.type
event.target
event.currentTarget
event.preventDefault()
event.stopPropagation()
```

### Example

``` js
button.addEventListener("click", (event) => {
  console.log(event.type);
  console.log(event.target);
});
```

### Keyboard Example

``` js
document.addEventListener("keydown", (event) => {
  console.log(event.key);
  console.log(event.code);
});
```

### Interview Answer

> "The Event Object is automatically provided by the browser to an event
> handler and contains information about what happened, where it
> happened, and methods to control event behavior."

------------------------------------------------------------------------

 ### preventDefault

## Definition

`preventDefault()` prevents the browser's **default behavior** for an
event.

### Link Example

``` html
<a href="https://google.com" id="link">Google</a>
```


``` js
link.addEventListener("click", (event) => {
  event.preventDefault();

  console.log("Navigation prevented");
});
```

### Form Example

``` js
form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log("Form submitted using JavaScript");
});
```

``` text
preventDefault()
        ↓
Stops browser's default action

stopPropagation()
        ↓
Stops event propagation
```

### Interview Answer

> "`preventDefault` prevents the browser's default behavior, such as
> link navigation or form submission. It does not stop event
> propagation."



target vs currentTarget ⭐

This is a very common interview question.

## `event.target`

The **actual element where the event originated**.

## `event.currentTarget`

The element on which the **current event listener is running**.

### Example

``` html
<div id="parent">
  <button id="child">Click Me</button>
</div>
```

``` js
parent.addEventListener("click", (event) => {
  console.log("target:", event.target);
  console.log("currentTarget:", event.currentTarget);
});
```

If the button is clicked:

``` text
target         → button
currentTarget  → div#parent
```

### Easy Trick

``` text
target
   ↓
Where did the event happen?

currentTarget
   ↓
Which element's listener is running?
```

### Interview Answer ⭐

> "`event.target` refers to the original element that triggered the
> event, while `event.currentTarget` refers to the element whose event
> listener is currently executing."

------------------------------------------------------------------------


# 19. DOM Traversal

## Definition

DOM traversal means moving through the DOM Tree to find related
elements.

### Parent

``` js
element.parentElement;
```

### Children

``` js
element.children;
```

### First Child

``` js
element.firstElementChild;
```

### Last Child

``` js
element.lastElementChild;
```

### Next Sibling

``` js
element.nextElementSibling;
```

### Previous Sibling

``` js
element.previousElementSibling;
```

### Closest Ancestor

``` js
element.closest(".card");
```

### Example

``` html
<div class="card">
  <h2>Product</h2>
  <button>Buy</button>
</div>
```

``` js
const button = document.querySelector("button");

console.log(button.parentElement);
console.log(button.closest(".card"));
```

### Interview Answer

> "DOM traversal means navigating between related nodes such as parents,
> children, siblings, and ancestors using DOM properties and methods."

------------------------------------------------------------------------

# Event Propagation

Event propagation is the process by which an event travels through the DOM from the target element to other elements in the DOM hierarchy.
Event propagation has 3 phases:
            1. Capturing Phase
                  ↓
            2. Target Phase
                 ↓
            3. Bubbling Phase
```Event propagation is the mechanism through which an event travels through the DOM. It has three phases: capturing, where the event travels from the root toward the target; target phase, where it reaches the target element; and bubbling, where it travels back from the target toward the root. By default, most event listeners handle events during the bubbling phase.```

# Event Bubbling/Capturing

Event Bubbling is the process in which an event starts from the target element and propagates upward through its parent elements.
```javascript
Bubbling-
            button
            ↑
            div
            ↑
            body
            ↑
            html

<div id="parent">
  <button id="child">
    Click Me
  </button>
</div>

const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", () => {
  console.log("Parent");
});

child.addEventListener("click", () => {
  console.log("Button");
});
//Button 
//Parent
```

Event Capturing is the process in which an event propagates from the top-level ancestor down toward the target element.
```javascript
Capturing-
                html
                ↓
                body
                ↓
                div
                ↓
                button

parent.addEventListener(
  "click",
  () => {
    console.log("Parent");
  },
  true
);
//Parent
//Button
```
# stopPropagation() vs stopImmediatePropagation()
stopPropagation() stops the event from propagating to other elements in the capturing or bubbling phase, but it does not stop other event listeners on the same element.

```javascript
button.addEventListener("click", () => {
  console.log("Listener 1");
  event.stopPropagation();
});

button.addEventListener("click", () => {
  console.log("Listener 2");
});
//Button
//stopPropagation()  stop 
//Does not execute parent handler
//button
  //↓
//stopPropagation()
 // ↓
//🛑 Parent propagation stops
```
stopImmediatePropagation() stops the event from propagating AND prevents any remaining event listeners on the same element from executing.

```javascript
button.addEventListener("click", (event) => {
  console.log("Listener 1");

  event.stopImmediatePropagation();
});

button.addEventListener("click", () => {
  console.log("Listener 2");
});
//Listener 1
// Listener 2 will not execute.

button
  │
  ├── Listener 1
  │      ↓
  │  stopImmediatePropagation()
  │      ↓
  🛑 Listener 2
  🛑 Parent
```


#  Event Delegation
 
 Event Delegation is a technique where we attach a single event listener to a parent element instead of attaching separate listeners to each child element, and use event bubbling to determine which child triggered the event.


Event delegation is a technique where we attach a single event listener to a common parent instead of attaching separate listeners to each child. It works because events such as click bubble from the target element up through its ancestors. Inside the parent listener, we use event.target or methods like closest() to determine which child triggered the event.

It reduces the number of event listeners, which can improve memory usage and simplify event handling. Another major advantage is that it works naturally with dynamically added child elements because the parent listener already exists.
 ```javascript
//  without Event Delegation
const buttons = document.querySelectorAll("button");
//100 buttons
//100 event listeners
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.textContent);
  });
});

// when nested elements are involved:
// event.target.closest(".some-selector")

// With Event Delegation 
<ul id="users">
  <li>Priti</li>
  <li>Vipin</li>
  <li>John</li>
</ul>
const users = document.getElementById("users");

users.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log(event.target.textContent);
  }
});

                     ul
                      │
      ┌───────┼───────┐
      ↓              ↓              ↓
      li               li             li
      Priti           Vipin    John
      │
      │ click
      ↓
   bubbling
      ↓
      ul
      ↓
parent listener

 ```

# DOMContentLoaded vs load

## `DOMContentLoaded`

Fires when the HTML document has been completely parsed and the DOM has
been built.

``` js
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM is ready");
});
```

It does **not** wait for all images and other external resources to
finish loading.

## `load`

Fires after the whole page and its dependent resources have loaded.

``` js
window.addEventListener("load", () => {
  console.log("Everything loaded");
});
```

### Difference

``` text
DOMContentLoaded
       ↓
HTML parsed + DOM created

load
       ↓
DOM + images + CSS + other resources loaded
```

### Interview Answer

> "`DOMContentLoaded` fires when the HTML is parsed and the DOM is
> ready. `load` waits for the entire page, including resources such as
> images, to finish loading."

------------------------------------------------------------------------

# Reflow vs Repaint

These are important browser performance concepts.

## Reflow

**Reflow** happens when the browser must recalculate the layout/geometry
of elements.

Examples:

``` js
element.style.width = "500px";
element.style.height = "300px";
element.style.display = "none";
```

Changes such as width, height, position, font size, and display can
cause layout recalculation.

## Repaint

**Repaint** happens when the browser redraws pixels because the visual
appearance changed but layout does not necessarily change.

Example:

``` js
element.style.color = "red";
element.style.backgroundColor = "black";
```

### Simplified Flow

``` text
DOM/CSS Change
      ↓
Style Calculation
      ↓
Layout / Reflow
      ↓
Paint / Repaint
      ↓
Composite
```

### Performance Tip

Avoid repeatedly forcing layout in large loops.

Bad pattern:

``` js
for (const item of items) {
  item.style.width = item.offsetWidth + 10 + "px";
}
```

A read such as `offsetWidth` can force the browser to calculate
up-to-date layout.

### Interview Answer

> "Reflow is the recalculation of element layout and geometry. Repaint
> is the redrawing of pixels when visual styles change. Reflow is
> generally more expensive because it can affect the layout of other
> elements."

------------------------------------------------------------------------

# DocumentFragment

## Definition

`DocumentFragment` is a lightweight DOM container used to build a group
of nodes before inserting them into the actual DOM.

### Example

``` js
const fragment = document.createDocumentFragment();

for (let i = 1; i <= 5; i++) {
  const li = document.createElement("li");

  li.textContent = `Item ${i}`;

  fragment.append(li);
}

document.querySelector("ul").append(fragment);
```

### Why Use It?

Instead of repeatedly modifying the live DOM:

``` text
Create element
    ↓
Insert into live DOM
    ↓
Create element
    ↓
Insert into live DOM
```

We can build first:

``` text
Create nodes
    ↓
DocumentFragment
    ↓
Single insertion into DOM
```

### Important Point

When a `DocumentFragment` is appended, its children are moved into the
DOM. The fragment itself does not become a visible DOM element.

### Interview Answer

> "`DocumentFragment` is an off-DOM container that allows us to build
> multiple nodes before inserting them into the live DOM. It can reduce
> repeated DOM manipulation and make bulk updates cleaner."

------------------------------------------------------------------------

# Real DOM vs Virtual DOM

## Real DOM

The **Real DOM** is the browser's actual DOM tree representing the
webpage.

Example:

``` html
<div>
  <h1>Hello</h1>
</div>
```

The browser creates actual DOM nodes for these elements.

JavaScript can modify them:

``` js
document.querySelector("h1").textContent = "Hello World";
```


## Virtual DOM

The **Virtual DOM** is an in-memory representation of UI used by
libraries/frameworks such as React.

Example concept:

``` js
{
  type: "h1",
  props: {
    children: "Hello"
  }
}
```

When state changes, React can compare the new UI representation with the
previous one and determine what needs to be updated in the actual DOM.

### Simplified React Flow

``` text
State Change
     ↓
New UI Representation
     ↓
Compare with Previous Representation
     ↓
Determine Required Changes
     ↓
Update Real DOM
```

### Real DOM vs Virtual DOM

  -----------------------------------------------------------------------
  Feature                 Real DOM                Virtual DOM
  ----------------------- ----------------------- -----------------------
  What is it?             Browser's actual        In-memory UI
                          document tree           representation

  Lives where?            Browser                 JavaScript memory

  Directly rendered?      Yes                     No

  Used by                 Browser                 Libraries/frameworks
                                                  such as React

  Update strategy         Direct DOM operations   Framework-managed
                                                  reconciliation/update
                                                  process
  -----------------------------------------------------------------------

### Important Interview Point

Virtual DOM does **not** mean that the browser has a second real DOM.

It is a programming abstraction used by UI libraries/frameworks to help
manage UI updates.

### Interview Answer ⭐

> "The Real DOM is the actual tree maintained by the browser. A Virtual
> DOM is an in-memory representation of UI used by libraries such as
> React. When UI state changes, React determines the necessary DOM
> updates and applies them to the Real DOM."

------------------------------------------------------------------------



# What is MutationObserver and why is it asynchronous?

MutationObserver is a browser API that asynchronously watches the DOM for mutations such as added or removed nodes, attribute changes, and text changes. When a matching mutation occurs, the browser creates MutationRecords and delivers them to the observer callback during microtask processing. Unlike deprecated MutationEvents, it allows DOM changes to be handled asynchronously and efficiently.

When a matching DOM mutation occurs, the browser creates a MutationRecord and queues it for the observer. The observer callback is then delivered during microtask processing rather than executing synchronously at the exact point of the DOM mutation.

This makes it much more efficient than the old MutationEvent approach and allows multiple DOM changes to be collected and delivered together.

# What is MutationObserver?

MutationObserver is a browser API that lets JavaScript watch for changes made to the DOM.

For example, you can observe:

A new element being added
An element being removed
An attribute changing
Text/content changing
Changes inside an entire subtree

MutationObserver asynchronously observes changes to the DOM and executes a callback with information about those changes.

```js
const observer = new MutationObserver((mutations) => {
    console.log(mutations);
});

observer.observe(targetNode, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
});
```
Three important steps:

```js
Step 1 — Create observer
const observer = new MutationObserver(callback);
Step 2 — Tell it what to observe
observer.observe(element, options);
Step 3 — Stop observing when necessary
observer.disconnect();
```

# What is IntersectionObserver?
IntersectionObserver is a browser Web API that lets JavaScript observe whether one element is intersecting with another element, most commonly:

When the element enters or leaves the viewport, the browser tells your JavaScript.
```js
<img
    class="lazy"
    data-src="large-photo.jpg"
    width="400"
    height="300"
/>

<script>
const images = document.querySelectorAll(".lazy");

const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const img = entry.target;

            img.src = img.dataset.src;

            img.onload = () => {
                img.classList.add("loaded");
            };

            observer.unobserve(img);
        });
    },
    {
        rootMargin: "200px"
    }
);

images.forEach((image) => {
    observer.observe(image);
});
</script>
```

# Why use IntersectionObserver instead of a scroll event with getBoundingClientRect()?"

IntersectionObserver is designed specifically for detecting intersection between an element and a root such as the viewport. Instead of manually handling frequent scroll events and repeatedly calculating element positions with APIs such as getBoundingClientRect(), we let the browser perform the intersection tracking and notify our callback when the relevant intersection thresholds are crossed. This generally produces cleaner and more efficient code and avoids having to build our own visibility-detection logic. It's commonly used for lazy loading, infinite scrolling, animations, and impression tracking.

Short version for a fast interview:

"IntersectionObserver lets the browser track element visibility for us, instead of manually listening to scroll and calculating positions. It's cleaner, usually more efficient, and supports thresholds, root margins, and custom scroll containers."


# What is DocumentFragment, and why is it useful?

DocumentFragment is a lightweight DOM container that is not attached to the document. We can create and modify multiple DOM nodes inside the fragment and then append the fragment to the live DOM. When the fragment is appended, its children are moved into the target element and the fragment becomes empty. This is useful for batching DOM construction and reducing unnecessary interaction with the live DOM. For performance, we should also avoid repeatedly alternating DOM writes with layout-triggering reads because that can cause layout thrashing.

```js
<ul id="users"></ul>
const users = ["Priti", "Vipin", "Aman"];

const ul = document.querySelector("#users");

const fragment = document.createDocumentFragment();

users.forEach(user => {
    const li = document.createElement("li");

    li.textContent = user;

    fragment.appendChild(li);
});

ul.appendChild(fragment);
```

#  Stack vs Heap?'
The Stack stores fixed-size primitive values and execution frames, while the Heap stores dynamic, complex reference types (objects, arrays, functions).

```javascript
let age = 30;                      // Primitives go directly on the Stack
let user = { name: "Alice" };      // Object details go to Heap; "user" reference goes to Stack

Memory 
Stack:
            age → 30
            user → Memory Address #001X
Heap:
            #001X → { name: "Alice" }
```


#  How are objects stored in memory?
 a hybrid approach: the actual object contents are stored dynamically in the Heap, while a fixed-size pointer (memory reference) to that data is stored on the Stack.

 Because objects can grow, shrink, or change shape at runtime, the JavaScript engine cannot allocate a fixed chunk of stack memory for them
```JS
let player = { score: 100 };:

 THE STACK                                                        THE HEAP
[ Fixed-size references ]                                      [ Unstructured data ]
┌───────────────────────┐               ┌────────────────────────────────┐
│ player: 0x7fff5fb...  ├──────────────►│ 0x7fff5fb... ── { score: 100 } │
└───────────────────────┘               └────────────────────────────────┘
```
Heap Allocation: The JavaScript engine finds an open block of unstructured space in the Heap and writes the key-value pair { score: 100 }.

Address Generation: The engine generates a unique memory address (e.g., 0x7fff5fbff61a) for that specific location in the heap.

Stack Push: The variable name player and its assigned memory address pointer are pushed onto the active frame of the execution Stack.


# What is Garbage Collection?
Garbage Collection (GC) is an automated memory management process in JavaScript that frees up memory by deleting objects that are no longer needed.
```JS
function createUser() {
  let user = { name: "Alex" }; // 1. Allocated in Heap; point in Stack
  return user;
}
let activeUser = createUser(); 
// 2. "activeUser" outside the function keeps the heap object reachable.
activeUser = null; 
// 3. The link is broken. The object { name: "Alex" } is now completely unreachable.
// 4. During the next GC cycle, it will be swept from the Heap.
```

# What is Reflect?
Reflect is a built-in global object in JavaScript that provides static methods for intercepting, inspecting, and manipulating object operations at runtime.


These four concepts are part of JavaScript's abstract type-conversion operations.
# What is ToPrimitive?
  ToPrimitive is an internal JavaScript operation that converts an object into a primitive value such as a string, number, bigint, boolean, symbol, or undefined.
```JS
const obj = {
  valueOf() {
    return 10;
  }
};

console.log(obj + 5);
```
# What is ToString?
ToString is an internal JavaScript operation that converts a value into a string.
```JS
String(123);       // "123"
String(true);      // "true"
String(null);      // "null"
String(undefined); // "undefined"
```
#  What is ToNumber?
ToNumber is an internal JavaScript operation that converts a value into a Number.
```JS
Number("123");   // 123
Number("10.5");  // 10.5
Number(true);    // 1
Number(false);   // 0
Number(null);    // 0
Number("");      // 0
Number("hello"); // NaN
```
# What is Symbol.toPrimitive?
Symbol.toPrimitive is a special well-known symbol that allows an object to customize how it is converted to a primitive value.

```JS
const user = {
  name: "Priti",

  [Symbol.toPrimitive](hint) {
    if (hint === "string") {
      return this.name;
    }

    if (hint === "number") {
      return 100;
    }

    return "User";
  }
};

console.log(String(user)); // "Priti"
console.log(Number(user)); // 100
console.log(user + "");     // "User"
```


# What is Function Composition?
Function composition means taking several small functions and combining them into one larger function.

Function composition is a functional programming concept where you combine two or more functions to create a new function.
In composition, the output of one function automatically becomes the input of the next function. It follows the mathematical principle of \(f(g(x))\), executing from the rightmost (innermost) function to the leftmost (outermost) function.

```JS
const addOne = x => x + 1;
const double = x => x * 2;
const square = x => x * x;

// Instead of doing:
const result = square(double(addOne(2)));
console.log(result);
// we can create one function:
const composed = compose(square, double, addOne);

console.log(composed(2)); // 36

```

# What is pipe()?

pipe() does the same general job, but functions execute LEFT → RIGHT.
pipe and compose are higher-order functions because they accept functions as arguments and return a new function. pipe executes those functions from left to right, while compose executes them from right to left. I can implement pipe using reduce() and compose using reduceRight(). The returned function closes over the functions array."

```js
const addOne = x => x + 1;
const double = x => x * 2;
const square = x => x * x;

const piped = pipe(
    addOne,
    double,
    square
);

console.log(piped(2)); // 36

compose(square, double, addOne)(2)

// and

pipe(addOne, double, square)(2)

// produce the same result.

// The ordering of the function arguments is what differs.


const getUser = id => ({
    id: id,
    name: "Priti"
});

const getNameLength = name => name.length;

const pipeline = pipe(
    getUser,
    getNameLength
);

console.log(pipeline(10));
```

# Why Use It?
Instead of creating monolithic, complex functions, function composition allows you to build small, reusable, single-responsibility functions and glue them together. This results in cleaner, more testable, and declarative code.





# Pure Function Connection

A pure function is a function that always produces the same output for the same input and has no side effects. It doesn't modify external state, mutate its arguments, perform I/O, or depend on changing external values such as time or random numbers.

Same input
   ↓
Same output
and doesn't produce side effects

Same inputs → same output
No external variable modified
No DOM
No API
No console dependency
No random value
```js
const square = x => x * x;//this is pure 
function multiply(a, b) {
  return a * b;
}

console.log(multiply(4, 5)); // 20
console.log(multiply(4, 5)); // 20
console.log(multiply(4, 5)); // 20
// but
let total = 0;

const add = x => {
    total += x;
    return total;
};//has a side effect because it modifies external state.


let multiplier = 2;

function multiply(a) {
  return a * multiplier;
}
multiply(5); // 10
multiplier = 10;

multiply(5); // 50
Same argument:

5

but different output:

10
50


// Arrays and Mutation
function addItem(arr, item) {
  arr.push(item);

  return arr;
}//this is impure.  because arr.push(item);  mutates the original array.



// Pure version

// Create a new array:
function addItem(arr, item) {
  return [...arr, item];
}

const numbers = [1, 2, 3];

const result = addItem(numbers, 4);

console.log(result);  // [1, 2, 3, 4]
console.log(numbers); // [1, 2, 3]


const user = {
  name: "Priti",
  age: 25
};

function updateAge(user) {
  user.age = 30;
  return user;
}

const result = updateAge(user);

console.log(result);
console.log(user);
// The function mutates the object:  user.age = 30;

// external object
//       ↓
//    modified

// The function has a side effect.


// PURE Version 
function updateAge(user) {
  return {
    ...user,
    age: 30
  };
}

const user = {
  name: "Priti",
  age: 25
};

const result = updateAge(user);

console.log(result);
// { name: "Priti", age: 30 }

console.log(user);
// { name: "Priti", age: 25 }

// Now the original object remains unchanged.

```

# What is Pure Function?
"A pure function is a function that always produces the same output for the same input and has no side effects. It doesn't modify external state or depend on external mutable data. Because of this, pure functions are predictable, reusable, and easy to test."

```JS
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5

// Impure function 
let count = 0;

function increment() {
  count++;
  return count;
}
```

# What is Immutability?
Immutability means that once a value or data is created, we do not directly modify the original data. Instead, we create a new value or object with the required changes.


```JS
// Immutabillity
const user = {
  name: "Priti",
  age: 25
};

const updatedUser = {
  ...user,
  age: 26
};

console.log(user);
console.log(updatedUser);
//Muttablity
const user = {
  name: "Priti"
};

user.name = "Vipin"; //Because const prevents reassignment of the variable, not mutation of the object
// Immutability means not modifying existing data directly. Instead, when we need to make a change, we create a new object or array containing the updated data.
```

# First-Class Function in JavaScript
In JavaScript, functions are first-class citizens, which means a function can be treated like any other value.

So a function can be:

Stored in a variable
Passed as an argument
Returned from another function
Stored inside an object or array

JavaScript treats functions as first-class citizens, meaning functions can be assigned to variables, passed as arguments, returned from other functions, and stored in objects or arrays, just like other values."

# 1. Function Stored in a Variable
A function can be assigned to a variable.
```JS
const greet = function () {
  console.log("Hello");
};

greet();
// or 
const greet = () => {
  console.log("Hello");
};
```
# 2. Function Passed as an Argument
A function can be passed to another function.
```JS
function greet() {
  console.log("Hello");
}

function execute(fn) {
  fn();
}

execute(greet);
```

# 3. Function Returned from Another Function
A function can also return another function.
 ```JS
function outer() {
  return function inner() {
    console.log("Hello");
  };
}

const result = outer();

result();
 ```

 # 4. Function Stored in an Array
Functions can be stored inside arrays
 ```JS
const operations = [
  () => console.log("Add"),
  () => console.log("Delete"),
  () => console.log("Update")
];
operations[0]();
operations[1]();
 ```

 # 5. Function Stored in an Object
 ```JS
const user = {
  name: "Priti",
  greet() {
    console.log(`Hello ${this.name}`);
  }
};
user.greet();
 ```

# Implement an Event Emitter.
An EventEmitter is a design pattern (and a built-in module in Node.js) that allows objects to communicate with each other by emitting named events and registering listener functions to handle them




# localStorage vs sessionStorage

Both are browser-provided Web Storage APIs that let JavaScript persist string key-value data. The biggest difference is lifetime and scope.



# What is the difference between localStorage and sessionStorage?
Both localStorage and sessionStorage are browser Web Storage APIs that store key-value data as strings. The main difference is their lifetime and scope. localStorage persists after the tab and browser are closed and is shared across pages and tabs of the same origin. sessionStorage is associated with a particular page session/tab, so it is isolated between tabs and is normally cleared when that tab is closed. Both APIs are synchronous and have browser-dependent storage limits, typically around a few megabytes.

Then give an example:

I would use localStorage for things like theme preferences or non-sensitive persisted UI settings, while I would use sessionStorage for temporary tab-specific state, such as a multi-step form state that shouldn't be shared with another tab.



# What does "same-origin" mean?

An origin is roughly:

protocol + hostname + port

For example:

https://example.com:443

If two pages have the same origin, they can access the same localStorage.

For example:

Tab 1:
https://example.com/page1

Tab 2:
https://example.com/page2

Both have the same origin.

Therefore:
```js
localStorage.setItem("theme", "dark");
```
in Tab 1 can be read from Tab 2:

```js
localStorage.getItem("theme");
```
But sessionStorage is different

Each tab gets its own session storage.

Tab A
example.com
sessionStorage
     ↓
theme = dark


Tab B
example.com
sessionStorage
     ↓
theme = light

Same origin doesn't mean same sessionStorage.

window.localStorage
window.sessionStorage
localStorage.setItem("name", "Priti");

is conceptually:

window.localStorage.setItem("name", "Priti");

The browser then manages the actual persistence.

```js
localStorage.setItem("name", "Priti");

const name = localStorage.getItem("name");

console.log(name);
console.log(typeof name);

localStorage.removeItem("name");

console.log(localStorage.getItem("name"));//null

localStorage.clear();
```

```js
const settings = {
    theme: "dark",
    fontSize: 18,
    language: "en"
};

localStorage.setItem(
    "settings",
    JSON.stringify(settings)
);

const storedSettings = JSON.parse(
    localStorage.getItem("settings")
);

console.log(storedSettings);
```


Storage Events
```js
window.addEventListener("storage", (event) => {
    console.log("Key:", event.key);
    console.log("Old value:", event.oldValue);
    console.log("New value:", event.newValue);
});
```

```js
// Store data
sessionStorage.setItem("username", "Priti");

// Get data
const username = sessionStorage.getItem("username");

console.log(username);
sessionStorage.removeItem("username");

console.log(sessionStorage.getItem("username"));

const user = {
    name: "Priti",
    age: 25
};

sessionStorage.setItem("user", JSON.stringify(user));

const storedUser = JSON.parse(
    sessionStorage.getItem("user")
);

console.log(storedUser);
console.log(storedUser.name);

```


# Cookies in JavaScript

A cookie is a small piece of data stored by the browser and associated with a website/domain. Unlike localStorage, cookies can be automatically attached to matching HTTP requests to the server.


Cookie = Browser storage + HTTP request metadata + security rules

# How Cookies Work Internally
There are two major ways cookies get created.

A. Server creates cookie

Server response:

HTTP/1.1 200 OK
Set-Cookie: sessionId=abc123; HttpOnly; Secure; SameSite=Lax

The browser's cookie storage receives:

Domain: example.com
Name: sessionId
Value: abc123
HttpOnly: true
Secure: true
SameSite: Lax

Then, when a matching request is made:

GET /dashboard
Cookie: sessionId=abc123

The browser handles this automatically.

B. JavaScript creates cookie

JavaScript can use:

document.cookie = "theme=dark";

The browser stores it.

Then:

console.log(document.cookie);

might produce:

theme=dark

But JavaScript cannot see HttpOnly cookies.


HttpOnly
Set-Cookie: sessionId=abc123; HttpOnly

Then:

console.log(document.cookie);

will not show:

sessionId=abc123

Why?

Because the browser prevents JavaScript from reading an HttpOnly cookie.

This is useful against cookie theft through many XSS scenarios.

Secure
Set-Cookie: sessionId=abc123; Secure

The browser sends it only over HTTPS.

Conceptually:

https://example.com
       ↓
   Cookie ✅

http://example.com
       ↓
   Cookie ❌
SameSite

Controls when cookies are included in cross-site requests.

Common values:

SameSite=Strict
SameSite=Lax
SameSite=None
```js
// Create cookie
document.cookie = "username=priti";
document.cookie = "theme=dark";
document.cookie =
  "theme=dark; Max-Age=3600; Secure; SameSite=Lax";

  // You can also use Path:

document.cookie =
  "adminMode=true; Path=/admin; Max-Age=3600";

// Now the browser associates that cookie with /admin paths.

// Read cookies
console.log(document.cookie);



// Deleting a Cookie
document.cookie = "theme=dark; Max-Age=3600";

// To delete it: browser romoves it 

document.cookie = "theme=; Max-Age=0";

document.cookie =
  "theme=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
```

# Cookies vs localStorage — What's the difference
Cookies and localStorage are both browser-side storage mechanisms, but they serve different purposes. Cookies are primarily designed to participate in HTTP communication and can be automatically sent with matching requests to the server. localStorage is client-side storage that JavaScript must explicitly read and send to the server. Cookies also support security and lifecycle attributes such as HttpOnly, Secure, SameSite, Expires, and Max-Age, while localStorage does not provide equivalent cookie attributes.


Suppose your frontend is:

https://app.example.com

and API:

https://api.example.com

For cookie-based authentication, requests may need credentials enabled depending on whether the request is same-origin or cross-origin.

For cross-origin fetch:

fetch("https://api.example.com/profile", {
  credentials: "include"
});

Then the server must also be configured appropriately for credentialed CORS.

This connects cookies directly with:


# What is IndexedDB?
IndexedDB is a browser-provided asynchronous, transactional, NoSQL database. It lets a web application store large amounts of structured data locally, including objects, arrays, and Blob/binary data.
Browser
│
├── localStorage
│     └── simple key → value
│
├── sessionStorage
│     └── temporary key → value
│
├── Cookies
│     └── small data sent with HTTP requests
│
└── IndexedDB
      └── Full client-side database
          ├── Objects
          ├── Arrays
          ├── Blobs
          ├── Indexes
          └── Transactions

It is particularly useful for:

Offline-first applications
PWAs
Caching API responses
Storing large datasets
Storing files/images/blobs
Applications that need data persistence without a server connection


# Why is IndexedDB asynchronous?

Suppose you had:

const users = indexedDB.getAllUsers();

If the browser had to synchronously read a huge database from disk:

JS
 ↓
Read database
 ↓
Disk/storage
 ↓
Wait...
 ↓
Return data

That could block the main thread.

JavaScript in the browser needs to keep the UI responsive.

So IndexedDB uses an asynchronous request model:


```js
const request = indexedDB.open("MyDB", 1);

request.onupgradeneeded = function (event) {
    const db = event.target.result;

    db.createObjectStore("users", {
        keyPath: "id"//The id property inside each object becomes the key.   101 → { id: 101, name: "Priti" }
        //  autoIncrement: true// Now IndexedDB can generate keys.
    });
};

request.onsuccess = function (event) {
    const db = event.target.result;

    const transaction = db.transaction("users", "readwrite");

    const store = transaction.objectStore("users");

    store.add({
        id: 1,
        name: "Priti",
        role: "Developer"
    });

    transaction.oncomplete = function () {
        console.log("User saved");
    };
};

request.onerror = function () {
    console.log("Database error");
};
```

```js
const request = indexedDB.open("AppDB", 1);

request.onupgradeneeded = function (event) {
    const db = event.target.result;

    const store = db.createObjectStore("users", {
        keyPath: "id"
    });

    store.createIndex(
        "emailIndex",
        "email",
        { unique: true }
    );
};

request.onsuccess = function (event) {
    const db = event.target.result;

    // WRITE
    const writeTransaction =
        db.transaction("users", "readwrite");

    const store =
        writeTransaction.objectStore("users");

    store.put({
        id: 1,
        name: "Priti",
        email: "priti@example.com"
    });

    writeTransaction.oncomplete = function () {

        // READ
        const readTransaction =
            db.transaction("users", "readonly");

        const userStore =
            readTransaction.objectStore("users");

        const emailIndex =
            userStore.index("emailIndex");

        const request =
            emailIndex.get("priti@example.com");

        request.onsuccess = function () {
            console.log(request.result);
        };
    };
};





// Deleting data

// Delete one record:

const transaction =
    db.transaction("users", "readwrite");

const store =
    transaction.objectStore("users");

store.delete(1);

// Clear all records:

store.clear();

// Delete the entire database:

indexedDB.deleteDatabase("MyDB");
```

add()

Adds a new record.

store.add({
    id: 1,
    name: "Priti"
});

If key 1 already exists:

ERROR
put()

Adds or replaces a record.

store.put({
    id: 1,
    name: "Priti"
});

If 1 doesn't exist:
Create

If 1 exists:

Update

# What is IndexedDB, and how is it different from localStorage?
IndexedDB is an asynchronous, transactional, NoSQL database built into the browser. It is designed for storing larger amounts of structured data, including objects and binary data such as Blobs. It supports object stores, indexes, keys, cursors, and transactions.

localStorage, on the other hand, is a much simpler synchronous key-value storage API that stores strings. It doesn't provide database-style transactions, indexes, or querying capabilities.

Because IndexedDB is asynchronous and supports structured data and transactions, it's more suitable for applications such as offline-first PWAs, large client-side caches, and applications that need persistent local data.










# Fetch apis 
fetch() is the modern browser API for making HTTP requests. It returns a Promise, and the returned Response contains a ReadableStream body that you explicitly consume with .json(), .text(), .blob(), etc.

fetch("https://api.example.com/users");

fetch() does not immediately give you the data.
```js
fetch("/api/users")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });

  // or 
  async function getUsers() {
  const response = await fetch("/api/users");

  const data = await response.json();

  console.log(data);
}


// The Response object
// A Response contains information such as:

response.status
response.ok
response.statusText
response.headers
response.body

// Example:

const response = await fetch("/api/users");

console.log(response.status);
console.log(response.ok);
console.log(response.headers);
console.log(response.body);

const data = await response.json();
// Plain text
const text = await response.text();
// Binary/file data
const blob = await response.blob();


// Fetched with headers 
const response = await fetch("/api/users", {
  method: "GET",

  headers: {
    "Authorization": "Bearer token123",
    "Content-Type": "application/json"
  }
});

// Axios also provides conveniences such as interceptors and automatic JSON handling.

// But Fetch is a native Web API and doesn't require an additional library.
  ```


  # What is the difference between fetch() rejecting and receiving an HTTP error such as 404?"
fetch() returns a Promise that resolves to a Response once the browser receives a response from the server. HTTP status codes like 404 or 500 normally do not cause the Promise to reject. Instead, the Promise resolves with a Response where response.ok is false. The Promise rejects for failures such as network errors or an aborted request. Therefore, in production code I explicitly check response.ok or response.status before processing the response body.




# What is CORS?
CORS = Cross-Origin Resource Sharing.

It is a browser security mechanism that controls whether JavaScript running on one origin can access resources from another origin.

CORS, or Cross-Origin Resource Sharing, is a browser security mechanism that allows a server to specify which cross-origin requests can be accessed by frontend JavaScript. By default, the browser follows the Same-Origin Policy and restricts JavaScript from reading cross-origin responses.

For a simple cross-origin request, the browser can send the actual request with an Origin header. The server responds with Access-Control-Allow-Origin, and the browser checks whether the requesting origin is allowed.

For non-simple requests, such as requests using certain methods or custom headers, the browser first sends an OPTIONS preflight request. The preflight includes headers such as Origin, Access-Control-Request-Method, and Access-Control-Request-Headers. The server responds with headers such as Access-Control-Allow-Origin, Access-Control-Allow-Methods, and Access-Control-Allow-Headers. If the CORS policy permits the request, the browser sends the actual request.

An important point is that CORS is enforced by browsers, not by the HTTP server itself. That's why an API can work in Postman or curl but fail when called from browser JavaScript.

An origin consists of:

protocol + host + port

For example:

http://localhost:3000

and

http://localhost:5000

are different origins because the ports differ.

Similarly:

http://example.com
https://example.com

are different origins because the protocols differ.
And:

https://example.com
https://api.example.com

are different origins because the hosts differ.


# Why does CORS exist?

Imagine you're logged into:

https://bank.com

Your browser has your bank cookies.

Now you visit a malicious website:

https://evil.com

Its JavaScript tries:

fetch("https://bank.com/account");

Without browser security restrictions, evil.com could potentially read sensitive data returned by your bank.

So browsers enforce the Same-Origin Policy (SOP).

```js
const cors = require("cors");
app.use(cors({
    origin: "http://localhost:3000"
}));


// YOU CAN ALLOW  MULTIPLE KNOWN ORIGIN
const allowedOrigins = [
    "http://localhost:3000",
    "https://myapp.com"
];

app.use(cors({
    origin: function (origin, callback) {

        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    }
}));


app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));


// Access-Control-Allow-Origin

// Server says which origin is allowed:

// Access-Control-Allow-Origin: http://localhost:3000

// Can also be:

// Access-Control-Allow-Origin: *

// Access-Control-Allow-Methods


// Access-Control-Allow-Methods: GET, POST, PUT, DELETE
// Access-Control-Allow-Headers

// Access-Control-Allow-Headers: Content-Type, Authorization

// Access-Control-Allow-Credentials

// Used when cross-origin requests involve credentials such as cookies.

// Access-Control-Allow-Credentials: true



// CORS + COOKIE
// For cross-origin credentialed requests:
fetch("https://api.example.com/profile", {
    credentials: "include"
});

// The server needs appropriate CORS configuration.

// For example:

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
```


# Explain Web Workers
Web Workers are a browser API that executes JavaScript in a separate thread and communicates with the main thread through messages, allowing CPU-intensive work to happen without blocking UI responsiveness.

# What is a Web Worker, and how is it different from the JavaScript event loop?
A Web Worker allows JavaScript to execute in a separate browser thread, independently of the main UI thread. It is useful for CPU-intensive tasks such as parsing large data, image processing, encryption, or complex calculations because those tasks can otherwise block the main thread and make the UI unresponsive.

Workers cannot directly access the DOM or window. The main thread and worker communicate through postMessage() and message events. Data is generally transferred using the structured clone algorithm, with transferable objects available when ownership transfer is preferable.

The JavaScript event loop, on the other hand, coordinates asynchronous callbacks and tasks within an execution environment. It doesn't automatically move CPU-heavy JavaScript to another thread. A Web Worker provides the separate execution context/thread that can perform that work without blocking the main UI thread.

# Does JavaScript become multithreaded?
JavaScript execution in the browser is traditionally single-threaded per execution context, but browsers provide Web Workers that allow JavaScript code to run in separate worker threads. These contexts don't normally share ordinary JavaScript objects and communicate through messages.


```js
const worker = new Worker("worker.js");// This tells the browser: "Create a worker thread and execute worker.js there.

// Then communication happens using:
worker.postMessage(data);
worker.postMessage("Hello Worker");
// self.postMessage(data);

// The worker listens using:
self.onmessage = (event) => {
    console.log(event.data);// Communication is message-based.
};

// The worker does not share the same normal JavaScript execution environment with the main thread.
// Web Worker has its own global scope

// Inside a worker:

console.log(self);// 


// window is not available like it is on the page.

// Workers also don't have normal DOM access:    document.querySelector(...)   ❌ Not available.



// document.body.innerHTML = "Hello" ;  ❌ Not available.

// The DOM belongs to the page/main-thread environment.

Main Thread
│
├── window
├── document
├── DOM
└── UI


Worker Thread
│
├── JavaScript
├── self
├── fetch()
├── timers
└── computation



// main.js
const worker = new Worker("worker.js");

worker.postMessage(10); //postMessage() sends a message, not a live reference to your variable.

worker.onmessage = (event) => {
    console.log("Result from worker:", event.data);
};


// worker.js
self.onmessage = (event) => {
    const number = event.data;

    const result = number * 2;

    self.postMessage(result);
};

// Worker doesn't make the calculation itself faster
// Worker makes the MAIN THREAD available
// The goal is primarily responsiveness, not automatically faster computation.

worker.onerror = (error) => {
    console.error("Worker error:", error);
};

worker.terminate();//This immediately stops the worker from the main thread side.
self.close()//Worker can also terminate itself:


```


# What is a Service Worker, and how does its lifecycle work?
A Service Worker is a browser-managed JavaScript worker that acts as a programmable network proxy between a web application and the network. It can intercept requests, serve cached responses, provide offline functionality, and support features such as push notifications and background processing.

Its lifecycle primarily consists of installation, activation, and fetch handling. During install, we commonly pre-cache application resources. During activate, we can clean up old caches and take control of clients. Once active and controlling a page, the Service Worker can intercept requests through the fetch event and decide whether to respond from cache or fetch from the network.

Unlike normal page JavaScript, it doesn't directly manipulate the DOM and runs in a worker context.


It allows web applications to implement custom caching and offline strategies, making applications faster and more resilient to network failures. It's also one of the core technologies behind Progressive Web Apps.

"Service Workers require a secure context, normally HTTPS, with localhost being allowed for development.

Service Workers can explicitly interact with the Cache Storage API:

caches.open(...)
caches.match(...)
cache.put(...)
cache.delete(...)

# What exactly is a Service Worker?

the Service Worker sits between the browser/page and network requests.

Request
   ↓
Should I:
   ├── return cached response?
   ├── fetch from network?
   ├── return fallback?
   └── do something else?


   A Service Worker is JavaScript, but it does not run like your normal page JavaScript.

For example:

console.log(window);

Inside a Service Worker, you don't have normal DOM globals like:

window
document

Instead, you typically work with:

self

and browser APIs such as:

caches
fetch
clients



The three lifecycle events you should immediately remember are:
```js
install → activate → fetch
install

Used for initial setup.

Usually:

self.addEventListener("install", event => {
    // Pre-cache important files
});
activate

Used for cleanup/upgrading.

For example:

self.addEventListener("activate", event => {
    // Delete old caches
});
fetch

Used to intercept network requests.

self.addEventListener("fetch", event => {
    // Decide how to respond
});
```

register a Service Worker
```js
// main.js
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js")
        .then(registration => {
            console.log("Service Worker registered");
        })
        .catch(error => {
            console.error("Registration failed", error);
        });
}


// then create  
// sw.js
self.addEventListener("install", event => {
    console.log("Service Worker installed");
});

self.addEventListener("activate", event => {
    console.log("Service Worker activated");
});

self.addEventListener("fetch", event => {
    console.log("Request:", event.request.url);
});


// Registration is done from the page:

// navigator.serviceWorker.register("/sw.js");

// But the Service Worker itself runs separately from the page's normal JS execution context
```

"If the resource is cached, use cache. Otherwise go to network."

```js
const CACHE_NAME = "app-v1";

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll([
                    "/",
                    "/index.html",
                    "/style.css",
                    "/app.js"
                ]);
            })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {

                if (cachedResponse) {
                    return cachedResponse;
                }

                return fetch(event.request);
            })
    );
});

```


# What is AbortController?
AbortController is a Web API that lets you cancel certain asynchronous browser operations.
For fetch(), the pattern is:
```js
const controller = new AbortController();

fetch(url, {
    signal: controller.signal
});

// Cancel the request
controller.abort();
```


AbortController doesn't directly cancel fetch().
You give the fetch request the controller's signal, and then calling abort() tells that signal to become aborted.

# How does it work internally?
```js
// Create controller
const controller= new AbortController();

// The browser creates something like :
controller={
  signal:AbortSignal,
  abort:function(){
    // tell signal to abort 
  }
}




// step 2  pass the signal to fetch
// The fetch request is listening to that signal.
fetch("/users",{
  signal:controller.signal
})


// step 3 Abort 
controller.abort();
// the signal becomes aborted /




// YOU CAN CHECK 
console.log(controller.signal.aborted);
// false

controller.abort();

console.log(controller.signal.aborted);
// true


// step 4  fetch rejects
// If the fetch is still in progress, aborting it causes the fetch promise to reject.

// AbortError


try {
  const response await fetch("users",{
    signal:controller.signal,
  })
}catch(err){
  console.log(err)
}



// example 
const controller = new AbortController();

fetch("https://jsonplaceholder.typicode.com/users", {
    signal: controller.signal
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        if (error.name === "AbortError") {
            console.log("Request cancelled");
        } else {
            console.log("Network error:", error);
        }
    });

// Cancel request
controller.abort();
```


```js
useEffect(() => {
    fetch("/api/users")
        .then(res => res.json())
        .then(data => {
            setUsers(data);
        });
}, []);

Potential problem:

Component mounted
      ↓
fetch starts
      ↓
Component unmounts
      ↓
request still running
      ↓
response arrives
      ↓
.then()
      ↓
setUsers()

// You don't want an old request continuing to affect your component logic.

// The better pattern is:

useEffect(() => {
    const controller = new AbortController();

    fetch("/api/users", {
        signal: controller.signal
    })
        .then(res => res.json())
        .then(data => {
            setUsers(data);
        })
        .catch(error => {
            if (error.name === "AbortError") {
                console.log("Fetch cancelled");
            } else {
                console.error(error);
            }
        });

    return () => {
        controller.abort();
    };
}, []);


// This uses the exact effect cleanup idea from your prep material: React runs cleanup when the component unmounts, and cleanup is also used before a changed effect is replaced.



useEffect(() => {
    const controller = new AbortController();

    fetch(`/api/users/${userId}`, {
        signal: controller.signal
    })
        .then(res => res.json())
        .then(data => {
            setUser(data);
        })
        .catch(error => {
            console.log(error.name);
        });

    return () => {
        controller.abort();
    };
}, [userId]);
```



# How do you cancel a fetch request in JavaScript?

We can cancel an in-flight fetch() request using the browser's AbortController API. We create an AbortController, pass its signal to the fetch options, and call controller.abort() when we want to cancel the request. The fetch promise then rejects, typically with an AbortError, which we can handle separately from genuine network or server errors. In React, this is commonly used inside useEffect, where the controller is created inside the effect and controller.abort() is called from the cleanup function when the component unmounts or the effect needs to be replaced


```js
useEffect(() => {
    const controller = new AbortController();

    async function loadUsers() {
        try {
            const response = await fetch("/api/users", {
                signal: controller.signal
            });

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            const data = await response.json();

            setUsers(data);
        } catch (error) {
            if (error.name === "AbortError") {
                // Expected when cleanup cancels the request
                return;
            }

            console.error("Failed to fetch users:", error);
        }
    }

    loadUsers();

    return () => {
        controller.abort();
    };
}, []);
```

# "What does it mean that functions are first-class citizens in JavaScript?

JavaScript treats functions as first-class values. This means functions can be assigned to variables, passed as arguments, returned from other functions, and stored in objects or arrays. Because of this, JavaScript can implement callbacks and Higher-Order Functions. Methods like map, filter, and reduce rely heavily on this behavior. First-class functions, together with closures and lexical scope, are also fundamental to Functional Programming in JavaScript.

# What are First-Class Functions?


functions are values, we can:

Store them in variables
Pass them as arguments
Return them from other functions
Store them inside arrays/objects
Assign them to properties

These capabilities are what we mean when we say:

JavaScript has first-class functions.

# How Does It Work Internally?

```js
function greet() {
    console.log("Hello");
}

const fn = greet;

```

```js
// Step 1 — Function object is created
// When JavaScript evaluates:

function greet() {
    console.log("Hello");
}

a function object is created.
// The variable greet contains a reference to that function object.


// Step 2 — Assignment copies the reference
const fn = greet;

// This does not create another function.

greet ──────┐
                      ↓
       Function Object
                      ↑
fn ─────────┘


console.log(greet === fn);// true
// Both variables refer to the same function object.
```

#  First-Class Function vs Calling a Function


```js
Passing the function
function greet() {
    console.log("Hello");
}

const fn = greet;// Here we are passing the function itself.


// Calling the function
const fn = greet();
// Now we are executing the function.

// If greet() doesn't return anything: 
console.log(fn)// undefined

greet     // function value
greet()   // function execution/result




function greet() {
    console.log("Hello!");
}

const sayHello = greet;

sayHello();//Hello

// greet and sayHello point to the same function.

console.log(greet === sayHello);//true


// A function can be assigned to another variable just like a number or string.

// Passing Functions as Arguments
function add(a, b) {
    return a + b;
}

function calculate(a, b, operation) {
    return operation(a, b);
}

console.log(calculate(10, 5, add));




function outer() {
    return function inner() {
        console.log("Hello");
    };
}

const result = outer();

console.log(typeof result);//funcction

result();//Hello   result ───────→ inner Function Object'''


// fn    → function itself
// fn()  → result of executing function
function greet() {
    return "Hello";
}

function execute(fn) {
    console.log(fn);
}

execute(greet);// passes the function  means: execute recieves function

// but 
execute(greet())// executes the function first  means:   greet() --> Hello--> execute("hello")



// SO 
function excute(fn){
  fn()
}


// REQUIRES
execute(greet)

// NOT 
execute(greet())
// First-Class Function

// A language feature/property:

// Functions can be treated as values.

// Higher-Order Function

// A function that:

// Accepts a function as an argument OR returns a function.



// Function inside arraya 
// because functions are values :
const opetrations=[
function (a,b){
  return a+b;
},
function (a,b){
  return a-b
},
function (a,b){
  return a*b
},
]

conssole.log(operations[0](10,5)) //15
conssole.log(operations[1](10,5))// 5
conssole.log(operations[2](10,5))// 50



// FUNCTION INSIDE OBJECTS 
const calculator={
  add:function(a,b){
    return a+b
  },
  subtract:function(a,b){
    return a-b
  }
}

console.log(calculator.add(10,20))


// Anonymous Function 
// Because functions are values , they don't necessarily need a name
const greet= function(){
  console.log("hello")
}
// this is anonymos function expression 
// YOU can also pass one directly 
setTimeout(function(){
  console.log("hello")
},1000)

// The function is created and passed as a value 


// Arrow function 
const add = (a,b)=>{
return a+b
}
const add =(a,b)=>a+b

// Can be passed around 
function execute(fn){
  return fn(10,20)
}
console.log(execute(add))//30  

const x= add() //executing the function and storing its result?
const x= add; // storing  the function
```
JavaScript is a multi-paradigm language that supports functional programming because functions are first-class values and JavaScript provides features such as closures, higher-order functions, map/filter/reduce, and function composition.





# Array Methods
# map, filter, reduce
 # map()
 map() is an array method used to transform each element of an array and return a new array of the transformed
values. Internally, JavaScript creates a new array, iterates over the original array once, calls the provided callback
for every element (passing the current value, index, and original array), stores the callback's return value in the new
array, and finally returns that new array. The original array is never modified.
```javascript

let arr = [2, 30, 4, 50];
const result=arr.map((val,index,arr)=>{
    return val*2
})
console.log(result)
```

# map() — Transform Every Element
Definition

map():

visits every element
calls your callback
stores each returned value
returns a new array
result has the same length as the original array

```js
Array.prototype.myMap = function(callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }

    return result;
};

// usage
const numbers = [1, 2, 3];

const result = numbers.map(x => x * 2);
```




# What is the difference between map(), filter(), and reduce()?

map() is used when I want to transform every element of an array. It returns a new array with the same number of elements.

filter() is used when I want to select elements based on a condition. It returns a new array containing only the elements for which the callback returns a truthy value.

reduce() is used when I want to accumulate or combine array elements into a single result. The result can be a number, string, object, array, or another data structure.

All three methods accept callback functions, so they are examples of higher-order functions. They don't mutate the original array by themselves.


```js
// reduce () can build objects 

const users=[
  {id:1,name:"A"},
  {id:2,name:"B"},
  {id:3,,name:"C"}
]

//Convert it into 
{
  1:"A",
  2:"B",
  3:"C"
}


// SOLUTION :
const result = users.reduce((acc,user)=>{
acc[user.id]= user.name
return acc;
},{})
console.log(result)
```

# Can map() / filter() Mutate Objects?
The methods themselves don't mutate the array.

But your callback can mutate objects inside the array.

map(), filter(), and reduce() don't inherently mutate the original array, but the callback can still mutate referenced objects or other external state.
```js
const users=[
  {name:"A",age:20},
  {name:"B",age:25}
];

const result = users.map(user=>{
  user.age++;
  return user;
})
console.log(users)




// The Orignal objects have changed ,
// because array contains references to objects 
// map() creates a new array, but the objects can still be the same references.
// map() never mutates anything
```
# filter()
filter() iterates through every element of an array and calls the callback function with the current value, index, and
original array. If the callback returns a truthy value, the original element is added to a new array. If it returns a falsy
value, the element is skipped. After processing all elements, filter() returns the new filtered array without modifying
the original array.

```javascript
let users=[
    {name:"priti",age:24},
    {name:"vipin",age:14},
    {name:"Preeti",age:50},
]
const result = users.filter((user)=>{
    return user.age>=18
})
console.log(result)
```

# filter() — Select Elements

filter() answers:

"Which elements should I keep?"

The callback must return something truthy/falsy.
Unlike map(), the output can have a different length.

```js
Array.prototype.myFilter = function(callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }

    return result;
};


[1, 2, 3].filter(() => "hello");

// "hello" is truthy, so all elements survive.

const users = [
    { name: "A", age: 17 },
    { name: "B", age: 25 },
    { name: "C", age: 30 },
    { name: "D", age: 15 }
];

// We want names of users who are adults.
const adultNames= users.filter(user=>user.age>=18).map(user=>user.name)

console.log(adultNames)// ["b","c"]
```

# reduce() — Fold Everything Into a Result
combine all these elements into one result?
It can be:

number
string
object
array
Map
Set
etc.

what happen if we don't provied acc initial value ? 
JavaScript uses the first array element as the initial accumulator.
```js
Array.prototype.myReduce = function(callback, initialValue) {

    let accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
        accumulator = callback(
            accumulator,
            this[i],
            i,
            this
        );
    }

    return accumulator;
};


const numbers = [1, 2, 3, 4];

const sum = numbers.reduce(
    (accumulator, current) => accumulator + current,
    0
);

console.log(sum);
```
# reduce()
Unlike map() or filter(), reduce() returns ONE final value.
It could be:
✅Number 
✅String 
✅Object 
✅Array 
✅Map 
Anything
reduce() iterates over an array and combines all elements into a single accumulated result. It starts with an initial
accumulator value, calls the callback for each element, updates the accumulator with the callback's return value,
and finally returns the accumulated result. Unlike map() or filter(), reduce() produces one final value instead of a
new array.

```javascript
const arr = [1,2,3,5,6,7,8,9,10]
let sum = arr.reduce((accumulator, current) => {
return accumulator + current;
}, 0);
```


# slice()
slice(start, end) creates and returns a new array containing elements from the start index up to, but not including,
the end index. It does not modify the original array. Internally, it copies references or values into a new array. 

# splice()
splice(start, deleteCount, ...items) modifies the original array. It can remove, insert, or replace elements. Internally,
JavaScript removes the specified elements, shifts the remaining elements as needed, inserts any new items, and
returns an array of the removed elements

# find()
find() iterates over an array and calls the callback function for each element. As soon as the callback returns a
truthy value, find() immediately returns that original element and stops iterating. If no element satisfies the
condition, it returns undefined. Unlike filter(), it does not create a new array and only returns the first matching
element.

It checks every element until it finds the first match.
If callback returns true 
✅
Return that element immediately.
Stop the loop.
If callback returns false 
❌
Continue searching.
If no element matches
Return undefined

```javascript
let users=[
    {name:"priti",age:24},
    {name:"vipin",age:14},
    {name:"Preeti",age:50},
]
const result= users.find((user)=>{
    return user.name=="vipin"
})
console.log(result)
```

# lastIndexOf()
lastIndexOf() searches an array or string from the end and returns the index of the last occurrence of the specified value. If the value is not found, it returns -1
```javascript
let sentence = ["JS", "React", "Node", "React", "MongoDB"];
console.log(sentence.lastIndexOf("React"));//3

```


# indexOf()
indexOf() is an Array/String method that searches for a specified value and returns the index of its first occurrence. If the value is not found, it returns -1

indexOf() searches for an exact value.
findIndex() lets you define a condition.

Left → Right
First matching index using a callback

```javascript
let sentence = ["JS", "React", "Node", "React", "MongoDB"];
console.log(sentence.lastIndexOf("React"));//3


let usersList=[
    { id: 1, name: "Priti" },
    { id: 2, name: "Vipin" },
]

const find_user= usersList.indexOf({id:2,name:"vipin"})
console.log(find_user)//-1 Won't work because objects are compared by reference
```

# findIndex() 
findIndex() iterates through the array and executes the callback for each element. As soon as the callback returns
true, it immediately returns that element's index and stops iterating. If no element satisfies the condition, it returns -1.
Unlike indexOf(), it searches using a callback condition instead of exact value comparison.

```javascript 

let usersList=[
    { id: 1, name: "Priti" },
    { id: 2, name: "Vipin" },
]

const find_user= usersList.findIndex((user)=>{
    return user.id==2
})
console.log(find_user)//Vipin
```


# some() 
 At least one condition satisfies the conditon ,return true otherwise false

```javascript 
const arr = [10,20,30,40];
const result = arr.some((num)=>num>25)//true
console.log(result);
```

# every()
It Check if All Matches return ture Oterwise false

```javascript 
const  users1 = [{ role: "USER" }, { role: "ADMIN" }, { role: "USER" }];
const users1 = [{ verified: true }, { verified: true }, { verified: true }]
const result = users1.every((user)=>user.verified)//true
console.log(result);

```
# What's the difference between find, findIndex, some, and every?

find() returns the first element that satisfies the predicate, or undefined if no element matches.

findIndex() returns the index of the first matching element, or -1 if no element matches.

some() checks whether at least one element satisfies the predicate and returns a boolean.

every() checks whether all elements satisfy the predicate and returns a boolean.

find, findIndex, some, and every can short-circuit, meaning they stop iterating as soon as the final answer is known.

```js
const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers
    .filter(x => x % 2 === 0)
    .map(x => x * x)
    .reduce((sum, x) => sum + x, 0);

console.log(result);


const arr = [1, , 3];
console.log(arr.length);

const result = arr.map(x => x * 2);

console.log(result);//[2, empty, 6]

// Output:3

// There is a "hole" at index 1.

// Array iteration methods such as map() generally skip holes rather than treating them as an explicit undefined element.
```

# sort()

```javascript 
const number = [1,2,10,5];
number.sort();
console.log(number)//[1,10,2,5]
// Why ? because Javascript Does not sort numbers by default it Convert everything into String first

// Javascript internally convert Them to String 
// "1"
//"10"
//"2"
//"5"

// using compare function 
// [30,10,20]
number.sort((a,b)=>a-b)//
//30-10=  20  positive  swap them [10,30]
//return 10 30
//now compare  30-20=10 positive  swap them [20 30]
// return [10,20,30]
// If
// Negative
// Keep order


const  fruits = ["banana", "apple", "mango"];
fruits.sort()// apple, banana,mango
// String are already sorted Alphabetically

const users=[
    { name: "Priti", age: 24 },
{ name: "Rahul", age: 18 },
{ name: "Aman", age: 30 },
]

users.sort((a,b)=>a.age-b.age)

```

# includes()
includes() checks whether an array or string contains a specified value. It iterates through the elements and returns
true as soon as it finds a match; otherwise it returns false. Unlike indexOf(), it returns a boolean instead of an index. 

```javascript
const  fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("banana"))//true

const users = [{ id: 1 }, { id: 2 }];
console.log(users.includes({ id: 1 })); // object are compare by refrence not value  false
```


# flat()
flat() creates a new array by removing nested array levels. By default, it flattens one level (depth = 1). You can pass
a depth such as flat(2) or flat(Infinity) to flatten deeper nested arrays. It does not modify the original array.

```javascript
const  strings = ["Hello World", ["JavaScript is Awesome"]];
const flatArr= strings.flat();

console.log(flatArr)//[ 'Hello World', 'JavaScript is Awesome' ]

const users = [
  {
    name: "Priti",
    skills: ["JavaScript", "React"]
  },
  [
    {
    name: "Vipin",
    skills: ["Node.js", "MongoDB"]
  }
  ]
];

const flatUsers= users.flat()

console.log(flatUsers)
```

# flatMap()
flatMap() combines the behavior of map() and flat(1). It applies a callback to every element, expects the callback to
return an array or value, and then automatically flattens the result by one level. It returns a new array and does not
modify the original array.

```javascript
// flatMap() is a combination of map() and one-level flat(). It transforms each element and then flattens the resulting array by one level.


const users = [
  {
    name: "Priti",
    skills: ["JavaScript", "React"]
  },
  {
    name: "Vipin",
    skills: ["Node.js", "MongoDB"]
  }
];
const skills = users.map((user) => user.skills);

console.log(skills);//
 [
   ["JavaScript", "React"],
   ["Node.js", "MongoDB"]
 ]

// but we want 
[
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB"
]
// With flatMap()
const skills = users.flatMap((user) => user.skills);
console.log(skills);
```

# What is the difference between map(), flat(), and flatMap()?
map() transforms every element and returns an array with the same number of elements. flat() removes nested array levels up to the specified depth and returns a new array. flatMap() combines mapping with flattening by one level, so it is useful when each input element can produce zero, one, or multiple output elements. Conceptually, arr.flatMap(fn) is equivalent to arr.map(fn).flat(1).


```js
const users = ["Priti", "Vipin"];

const a = users.flatMap(name => [name, name.length]);

const b = users.map(name => [name, name.length]).flat();

console.log(a);
console.log(b);

// [
//     "Priti",
//     5,
//     "Vipin",
//     5
// ]
```
# Objects Are Not Flattened

flat() only knows about arrays
```js
const arr = [
    [1, 2],
    { name: "Priti" }
];

console.log(arr.flat());// 

[
    1,
    2,
    { name: "Priti" }
]

// It doesn't somehow flatten object properties.

// flattening doesn't perform a deep clone.
const obj = {
    name: "Priti"
};

const arr = [[obj]];

const result = arr.flat(2);

result[0].name = "Vipin";

console.log(obj.name);//Vipin
// Because flat() creates a new array, but object references inside it are still references to the same object.



const users = [
    {
        name: "Priti",
        tags: ["JS", "React"]
    },
    {
        name: "Rahul",
        tags: ["Node", "MongoDB"]
    }
];
// You want all tags in one array
const tags = users.flatMap(user => user.tags);

console.log(tags);//[ "JS",  "React",  "Node",  "MongoDB"]


// Without flatMap():

const tags = users
    .map(user => user.tags)
    .flat();



    const sentences = [
    "hello world",
    "javascript is awesome"
];

// Convert every sentence into its individual words:
const words = sentences.flatMap(sentence => sentence.split(" "));

console.log(words);
[
    "hello",
    "world",
    "javascript",
    "is",
    "awesome"
]
```
# What is the difference between map() and forEach()?

forEach() is primarily used when I want to execute a function for every element, especially when I'm performing side effects. It returns undefined, so it isn't intended for chaining.

map() is used when I want to transform every element of an array. It returns a new array containing the callback's return values, so it can be chained with other array methods.

For example, if I want to log every value, I'd use forEach(). If I want to double every number and get a new array, I'd use map().

I avoid using map() only for side effects because that doesn't use its return-value semantics correctly."

```js
const users = [
    { name: "Priti", age: 22 },
    { name: "Rahul", age: 17 },
    { name: "Aman", age: 25 },
    { name: "Neha", age: 16 }
];

let names=[]
users.forEach(user=>{
names.push(user.name)
})
```

# Array.from()
Array.from(iterable, mapFunction)

imagine you have something that looks like an array but isn't actually an array.

Array.from() creates a new array from an iterable (like a string, Set, or Map) or an array-like object (such as { length:n }). It can also take an optional mapping function that transforms each element while creating the new array. It
returns a new array without modifying the original source.

```javascript
"Hello".map(s=>s)//  TypeError "Hello".map is not a function

const string = "Hello"
console.log(typeof string) //string
const newStr = Array.from(string);
console.log(newStr)//[ 'H', 'e', 'l', 'l', 'o' ]]
console.log(typeof newStr) //object

const number = Array.from({length:5});
console.log(number)// [ undefined, undefined, undefined, undefined, undefined ]]

const  numbers = Array.from({length:10},(_,i)=>i+1) 
console.log(numbers)//Array.from() also accepts a mapping function, just like map()
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]

// Set to array 
const set = new Set([10, 20, 30]);

const result = Array.from(set);

console.log(result);

// NodeList to Array 
const elements = document.querySelectorAll("div");

const arr = Array.from(elements);

console.log(arr);


// Array.from() also accepts a mapping function, just like map()
const result = Array.from([1, 2, 3], (num) => {
  return num * 2;
});

console.log(result);

// Similar to 
Array.from([1, 2, 3]).map((num) => num * 2);
```



# Array.isArray()
Array.isArray() is a static method used to check whether a value is actually an Array. It returns true for arrays and false for other values.

```javascript
const arr= [1,2,3];
console.log(typeof arr==="Array")// false

// solution 
console.log(Array.isArray(arr))//true
console.log(Array.isArray({})) //false
console.log(Array.isArray("Hello"));//false
console.log(Array.isArray(100));//false
console.log(Array.isArray(true));//false

```



Partial application means pre-filling some arguments of a function now, producing a new function that needs fewer arguments later
```js
function add(a, b, c) {
  return a + b + c;
}

const add10 = partial(add, 10);

add10(20, 30); // 60
// Here 10 is fixed in advance. The new function only needs b and c.

```
# How Partial Application Works Internally

JavaScript doesn't have a special partial keyword.

We usually implement partial application using:

Higher-order functions
Closures
Function.prototype.apply() / call()
Argument collection using ...args

```js
function partial(fn, ...fixedArgs) {
  return function (...remainingArgs) {
    return fn(...fixedArgs, ...remainingArgs);
  };
}

function add(a, b, c) {
  return a + b + c;
}

const add10 = partial(add, 10);

console.log(add10(20, 30));
```

```js
function createUser(role, country, name, age) {
  return {
    role,
    country,
    name,
    age
  };
}

function partial(fn, ...fixedArgs) {
  return function (...remainingArgs) {
    return fn(...fixedArgs, ...remainingArgs);
  };
}

const createIndianUser = partial(
  createUser,
  "developer",
  "India"
);

console.log(
  createIndianUser("Priti", 25)
);
```

# What is the difference between partial application and currying?"

Partial application is the technique of pre-filling some arguments of a function and returning a new function that requires the remaining arguments.

Currying, on the other hand, transforms a function that takes multiple arguments into a sequence of functions, where each function generally accepts one argument.

For example, if we have add(a, b, c), partial application could produce add10 = partial(add, 10), so add10(20, 30) works.

With currying, the function would be transformed into something like add(10)(20)(30).

So the key difference is: partial application fixes arguments, while currying transforms the function's calling structure.




# Currying

Currying is a technique of transforming a function that takes multiple arguments into a sequence of functions, where each function takes one argument.


# What is currying in JavaScript, and how would you implement it?"

Currying is a functional programming technique where a function that accepts multiple arguments is transformed into a sequence of functions, with each function accepting one argument and returning another function until all required arguments have been collected.

For example, add(a, b, c) can be transformed into add(a)(b)(c).

In JavaScript, currying is commonly implemented using closures because each returned function needs to remember the arguments passed during previous calls.

```javascript
// Normal function
function add(a, b, c) {
  return a + b + c;
}

add(10, 20, 30);

// Currying 
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

add(10)(20)(30);
//60
Currying allows us to provide arguments gradually and create reusable, specialized functions.
```

Suppose we have:
```javascript
function multiply(a, b) {
  return a * b;
}

```
We frequently want to multiply something by 10.

Without currying:
```javascript
multiply(10, 5);
multiply(10, 8);
multiply(10, 20);
```
with Currying

```javascript
function multiply(a) {
  return function (b) {
    return a * b;
  };
}
const multiplyBy10 = multiply(10);
multiplyBy10(5);  // 50
multiplyBy10(8);  // 80
multiplyBy10(20); // 200



multiply(10)
     ↓
returns function
     ↓
multiplyBy10
     ↓
multiplyBy10(5)
     ↓
50
```
Real Use Of Currying
```javascript
// Instead of repeatedly writing:
fetch("/api/users", {
  headers: {
    Authorization: "Bearer TOKEN"
  }
});

fetch("/api/orders", {
  headers: {
    Authorization: "Bearer TOKEN"
  }
});
// We can create a reusable curried function:
function createApiRequest(token){
    return function(url){
        return fetch(url,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
    }
}

const apiRequest = createApiRequest("MY_TOKEN");

apiRequest("/api/users");
apiRequest("/api/orders");
apiRequest("/api/products");
```



# Debouncing
Debounce = "Keep resetting the timer; execute only when the calls stop.

Both are performance optimization techniques used when an event fires many times, such as:
input
scroll
resize
mousemove
keyup
```Debouncing ensures that a function executes only after a specified amount of time has passed since the last event.```

🧠 Remember   - Debounce = "Wait until the user stops."

```js
User types:   H → He → Hel → Hell → Hello
              ↓    ↓     ↓      ↓      ↓
Timer:        reset reset reset  reset  wait 500ms
                                             ↓
                                         API call
```
So instead of making 5 API calls, we make 1 API call for "Hello".

Debounce is built mainly using:

Closures
setTimeout()
clearTimeout()
Function arguments
this handling
```js
// Step 1 — Closure stores the timer
let timer;

// timer belongs to the outer debounce() function.

// But the returned function can still access it.
// The timer variable survives after debounce() has finished because the returned function closes over it.

// Step 2 — Every call cancels the previous timer
clearTimeout(timer);

// Suppose:

// Call 1 → timer A
// Call 2 → cancel A → timer B
// Call 3 → cancel B → timer C
// Call 4 → cancel C → timer D

// Only the last timer survives.

// Step 3 — Start a new timer
timer = setTimeout(() => {
    fn.apply(this, args);
}, delay);

// The function doesn't execute immediately.

// It says:
// "Wait delay milliseconds. If nobody calls me again, execute."

// Step 4 — Why closure is essential

// Imagine:

const search = debounce(function (value) {
    console.log(value);
}, 500);

// Then:

search("r");
search("re");
search("rea");
search("reac");
search("react");

// All calls share the same timer.
```
# What is debounce and how would you implement it?"
Debouncing is a technique used to ensure a function executes only after a certain period of inactivity. Every time the debounced function is called, we clear the previous timer and create a new one. The timer is stored in a closure, so all calls to the same debounced function share that timer. It's commonly used for search inputs, autocomplete, validation, and resize events. The key difference from throttling is that debounce waits until activity stops, whereas throttle limits execution to a fixed frequency
```js

const debouncedSearch = debounce(search, 500);

input.addEventListener("input", (event) => {
    debouncedSearch(event.target.value);
});


function debounce(fn, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}
```
```javascript
function debounce(fn, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

function searchAPI(query) {
    console.log("Calling API for:", query);
}

const debouncedSearch = debounce(searchAPI, 500);

const input = document.querySelector("#search");

input.addEventListener("input", function (event) {
    debouncedSearch(event.target.value);
});
```
The function returns a new function that closes over a timer variable. Every time the returned function is called, it clears the previous timeout and creates a new one. Therefore, the original function executes only when there has been no invocation for the specified delay.

# Throttling

Throttle guarantees that a function executes at most once during every N milliseconds, even if the function is called hundreds of times.

We build it using:

Closures
Date.now()
timers such as setTimeout
function invocation using fn()
sometimes this and arguments

 ```javascript
function handleScroll() {
  console.log("Scroll event");
}

function throttle(callback, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      callback(...args);
    }
  };
}
const handleScrollThrottled = throttle(handleScroll, 1000);
  ```

  ```js
  // this + arguments
  function throttle(fn, delay) {
    let lastTime = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastTime >= delay) {
            lastTime = now;
            fn.apply(this, args);
        }
    };
}
const user = {
    name: "Priti",

    handleMove(x, y) {
        console.log(this.name, x, y);
    }
};

user.handleMove = throttle(user.handleMove, 1000);

user.handleMove(100, 200);

// Why do we use:
// fn.apply(this, args);

// instead of:
// fn();

// Because we want to preserve the original call context.
obj.method();

// normally gives:

this === obj

// But if we lose that context inside our wrapper, this may no longer refer to obj.
  ```

Throttle

Throttle ensures a function executes at most once within a specified time interval, even if it is invoked repeatedly.

Debounce

Debounce delays function execution until a specified amount of time has passed since the last invocation.

Memoization

Memoization caches function results based on inputs so repeated calls can avoid recomputation.


# Implement debounce and explain how leading and trailing execution works.
Debouncing ensures that a function executes only after calls to it have stopped for a specified amount of time. Internally, I keep a timer in a closure. Every invocation clears the previous timer and creates a new setTimeout. This gives us trailing-edge debounce because the function executes only after the final call has been followed by the delay. For leading-edge debounce, I execute immediately when there is no active timer, then suppress calls until the timer expires. The leading option is useful when I want immediate responsiveness, while trailing is useful when I care about the final value, such as search input.

```js
function debounce(fn, delay, options = {}) {
    let timer;

    const {
        leading = false,
        trailing = true
    } = options;

    return function (...args) {
        const callNow = leading && !timer;

        clearTimeout(timer);

        timer = setTimeout(() => {
            timer = null;

            if (trailing && !callNow) {
                fn.apply(this, args);
            }
        }, delay);

        if (callNow) {
            fn.apply(this, args);
        }
    };
}

// Trailing mode
const search = debounce(
    (query) => {
        console.log("Search:", query);
    },
    500,
    {
        leading: false,
        trailing: true
    }
);

search("j");
search("ja");
search("jav");

// Result:

// 500ms after final call:
// Search: jav


// Leading mode
const save = debounce(
    () => {
        console.log("Saving...");
    },
    1000,
    {
        leading: true,
        trailing: false
    }
);

save();
save();
save();

// Result:

// Immediately:
// Saving...

// The next calls during the 1-second window are ignored.
```


# Memoization

Memoization is an optimization technique where we cache the result of a function based on its input arguments. When the function is called again with the same arguments, we return the cached result instead of recalculating it.

It is most effective for pure and expensive functions because the same inputs should always produce the same output. In JavaScript, memoization is commonly implemented using a closure to keep a cache private and persistent between function calls.

```javascript
function square(n) {
  console.log("Calculating...");
  return n * n;
}
square(5);
square(5);
square(5);
// Calculating...
// Calculating...
// Calculating...
// Same calculation 3 times ho rahi hai.
function memoize(fn) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn(...args);

        cache.set(key, result);

        return result;
    };
}

function square(n) {
  return n * n;
}
const memoizedSquare = memoize(square);
console.log(memoizedSquare(5));
console.log(memoizedSquare(5));
console.log(memoizedSquare(10));
console.log(memoizedSquare(5));
```

# Memoize with WeakMap
If a function receives an object as an argument, you can use that object itself as the cache key in a WeakMap. When that object is no longer referenced anywhere else, JavaScript can garbage-collect it along with the cached entry.

```js
// Suppose our function receives an object:
function calculateUser(user) {
    console.log("Calculating...");

    return user.age * 2;
}

//  you might want 

const user={
  name:"priti",
  age:24
}
//  as the cache key.

// A Map can do that:
const cache = new Map();

cache.set(user, 50);


// The problem is:

Map
 ↓
object key
 ↓
cache keeps reference to object
 ↓
object cannot be garbage collected

// So if you create thousands of temporary objects, the Map can keep those objects alive.


// WeakMap solves this
const cache = new WeakMap();

cache.set(user, 50);

  WeakMap
           │
           │ weak reference
           ↓
        user object
           │
           ↓
        cached result

// If the object is no longer referenced anywhere else:
let user = {
    name: "Priti",
    age: 25
};

const cache = new WeakMap();

cache.set(user, 50);

user = null;

// Then the object becomes eligible for garbage collection.

user variable
     ↓
    null

WeakMap
  - - -→ old object

// Object can be GC'd
// WeakMap does not prevent its object keys from being garbage-collected.
// WeakMap keys must be objects or non-registered symbols.
const cache = new WeakMap();

const obj = {};

cache.set(obj, 100);

// This doesn't:

cache.set("hello", 100);  // Nor:   

cache.set(10, 100);  // Nor:

cache.set(true, 100);  // Nor:

// Because WeakMap needs an object identity that can become unreachable.

```

```js
// Memoizing an Object Argument
const cache= new WeakMap();
function expensiveCalculation(obj){
  if(cache.has(obj)){
    console.log("Returning cached result")
    return cache.get(obj)
  }
  console.log("Calculatiing...");
  const result = obj.a+obj.b;
  cache.set(obj,result)
  return result;
}

const data={
  a:10,
  b:20
}
console.log(expensiveCalculation(data))//
//Calculatiing..
//30
console.log(expensiveCalculation(data))//
//Returning cached result
//30
```

```js
// create a reusable memoization function.
function memoizeWeak(fn){
  const cache= new WeakMap();
  return function (obj){
    if(cache.has(obj)){
      return cache.get(obj);
    }
    const result = fn(obj);
    cache.set(obj,result);
    return result;
  }
}


// use it 
function calculate(obj) {
    console.log("Expensive calculation...");

    return obj.price * obj.quantity;
}

const memoizedCalculate = memoizeWeak(calculate);

const product = {
    price: 100,
    quantity: 5
};

console.log(memoizedCalculate(product));
// Expensive calculation...
// 500

console.log(memoizedCalculate(product));
// 500

console.log(memoizedCalculate(product));
// 500

// Only the first call performs the calculation 
// WeakMap Is NOT Iterable
// WeakMap intentionally does'nt provied itreation 
const cache = new WeakMap();

cache.set({}, 100);
cache.set({}, 200);

console.log(cache.size);//undefined
```

# Why would you use WeakMap instead of Map when memoizing functions that accept objects as arguments?
When memoizing a function that accepts objects, WeakMap allows us to use the object itself as the cache key. Unlike Map, WeakMap does not keep a strong reference to its object keys. Therefore, when an object is no longer referenced elsewhere in the application, it can be garbage-collected along with its cached entry. This helps prevent the cache from unnecessarily retaining objects and causing memory growth.
```js
const cache = new WeakMap();

function memoizedFunction(obj) {
    if (cache.has(obj)) {
        return cache.get(obj);
    }

    const result = expensiveFunction(obj);

    cache.set(obj, result);

    return result;
}
```

# WeakMap Does NOT Automatically Make Every Memoization Safe
```js
function memoizeWeak(fn) {
    const cache = new WeakMap();

    return (obj) => {
        if (cache.has(obj)) {
            return cache.get(obj);
        }

        const result = fn(obj);

        cache.set(obj, result);

        return result;
    };
}
// this assumes  : 
// input->object
// if someone does
memoizedFunction(10)
// you will get an error because primitive value can not  be WeakMap keys
```
valid version 
```js
function memoizeWeak(fn){
  const cache= new WeakMap();
  return function(obj){
    if((typeof obj !=="object" || obj===null) && typeof obj !=="function"){
      throw new TypeError("WeakMap key must be  an object ")
    }
    if(cache.has(obj)){
      return cache.get(obj);
    }
    const result = fn(obj);
    cache.set(obj,result);
    return result ;
  }
}

```


# Implement a once() function in JavaScript
Execute only one time
once is a higher-order function that accepts a function and returns a wrapper function. The wrapper creates a closure over called and result. On the first invocation, called is false, so the original function executes and its return value is stored in result. Then called becomes true. On subsequent invocations, the original function isn't executed; the cached result is returned. I use a separate boolean flag instead of checking result, because the original function may legitimately return falsy values such as 0, false, null, or undefined. apply preserves the caller's this and forwards the arguments.

```js

function once(fn){
  let called= false;
  let result ;
  return function(...args){
    if(!called){
      // result= fn(...args);
      rersult= fn.apply(this,args)
      called=true
    }
    return result
  }
}

// If your once() implementation doesn't preserve this, you can lose the object's context.

const user = {
    name: "Priti",

    greet(city) {
        return `Hello ${this.name} from ${city}`;
    }
};

user.greetOnce = once(user.greet);

console.log(user.greetOnce("Indore"));
console.log(user.greetOnce("Delhi"));

// Call → Execute
// Call → Ignore
// Call → Ignore
// Call → Ignore
```