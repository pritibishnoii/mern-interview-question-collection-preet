# JavaScript Interview Question Collection
-What is JavaScript? 
JavaScript is a high-level, dynamically typed programming language mainly used to add behavior and interactivity to web applications. It runs in browsers using JavaScript engines like V8, and with Node.js it can also run on the server.
```javascript
const name = "Priti";
console.log(`Hello ${name}`);
```

-What are the <pre><code>var vs let vs const</code></pre>
var, let, and const are used to declare variables in JavaScript, but they differ mainly in scope, redeclaration, reassignment, and hoisting behavior.

var is a JavaScript keyword used to declare a variable that is function-scoped and can be redeclared and reassigned.
```javascript
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


- What is Hoisting ?
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




- What is Temporal Dead Zone? 
Temporal Dead Zone is the period between entering a block and the point where a let or const variable is initialized. During this period, accessing the variable causes a ReferenceError.
Why does TDZ exist?

It prevents you from accidentally using a variable before it has been initialized.
```javascript
{
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



-Scope & Lexical Scope
Scope in JavaScript defines where a variable can be accessed or used within a program. It controls the visibility and lifetime of variables across different parts of the code.

Types of Scope->

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



- Closures
A closure is created when an inner function remembers and can access variables from its outer function's lexical scope even after the outer function has finished executing.
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
```
-why is a closure?
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


-Why does Closure preserve variables?
Because the inner function still has a reference to the lexical environment where those variables were created.


- How does JavaScript execute code?
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
Execution Context
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



-Objects, Prototypes & this
- this keyword-

this is a special JavaScript keyword whose value is determined by the function's invocation context. In regular functions, it depends on how the function is called. In object methods, it usually refers to the object calling the method. Arrow functions don't have their own this; they inherit it from their lexical surrounding scope.

```javascript
"use strict"
function showMe(){
    console.log(this)//undefined
}
showMe();

// this==window;

```
```javascript
let person={
    name:"vipin",
    age:25,
    greet(){
        console.log(this.name)//vipin 
    }
}
//Current this Who called?
person.greet()/
//  therefor this person 

// nested function 

let user = {
    name:"priti",
    show(){
        function inner(){
            console.log(this)//this inside inner() is NOT user  --global object
        }
        inner()//is a normal function call. noboody owns it  Therefore  this  Global (non-strict) or undefined (strict/)
     }
}
user.show()
//
```
 
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
![JavaScript Prototype Chain](././images/prototype.png)
![JavaScript Prototype Chain](././images/prototypechain.png)
## H2 — Why Prototype? 
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

## H2 —  __proto__ vs Prototype? 
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
## H3 — Why does it exist? 
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
# H-4🧬 Prototype Chain
"p" object  does not  contain  directly sayHello inside it .
When new Person() creates p, the new object's internal [[Prototype]] is set to Person.prototype. The sayHello method is stored on Person.prototype, not on every instance. When we call p.sayHello(), JavaScript first searches p, doesn't find the method, and then searches its prototype Person.prototype, where it finds and executes sayHello.


Person is itself a function object.
All functions inherit from  Function.prototype



# H-2 Call() Apply(), Bind ()
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


# H-3 == vs ===
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



# H-2- Type Coercion
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

# H-2 Pass by values pass by reference
Pass by value means a copy of the value is passed to a function, so changing the parameter does not change the original variable.

Pass by reference means the reference to the same object is passed, so changes can affect the original object.


# H-2 Is JavaScript pass-by-reference?
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
# H-4 Mutation vs Reassignment
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


# H-3 Primitive 
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
                            
                            

```




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
