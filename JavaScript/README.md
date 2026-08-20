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




# H-2 What is Temporal Dead Zone? 
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



# H-2 Scope & Lexical Scope
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



# H-2 Closures
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
# H-2 why is a closure?
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


# Why does Closure preserve variables?
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
# H-2 Execution Context
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


# H-2 What is the Lexical Environment?
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

# H-2 What is the Variable Environment?
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

# H-2 Objects, Prototypes & this
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


# H-2 Difference between __proto__ and prototype?
prototype belongs to functions. __proto__ belongs to objects.

prototype is a property of constructor functions that is used as the prototype object for instances created with new.
`
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

# H-2 Constructor function vs Class?
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

# H-2 What is Object.create()?
Object.create(proto) creates a new object whose internal [[Prototype]] points to the object passed as proto.

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

# H-2 Object.create() vs {}
```javascript
const user = {};
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

# H-2 Object.create() vs new?
Object.create() is a JavaScript method used to create a new object with a specified prototype. It does not execute a constructor; it simply creates the object and sets its internal [[Prototype]] to the supplied object.
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

const child = Object.create(parent);
Object.getPrototypeOf(child) === parent
// true
child.__proto__ === parent
// true
Object.getPrototypeOf(child)
Object.setPrototypeOf(child, parent)
```

# H-2 What happens when a property doesn't exist on an object?
When a property doesn't exist directly on an object, JavaScript searches for that property in the object's prototype chain. If it finds the property, it returns its value. If the property isn't found anywhere in the prototype chain and the chain reaches null, JavaScript returns undefined.
```javascript
const user = {
  name: "Priti"
};

console.log(user.age);
```

# H-2 Property Lookup Process How does property lookup work?
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


# H-2 Object.freeze() vs Object.seal()?
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
# H-2 Object.preventExtensions()?
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

# H-2 How do getters and setters work?
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

# H-2 What is a Proxy?
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

                                                                                    proxyUser.name
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
                            
                            
JavaScript is pass-by-value. For primitive values, the actual value is copied. For objects, the value being copied is a reference to the object, so both the original variable and the parameter can refer to the same object. Therefore, mutating the object inside the function can affect the original object, but reassigning the parameter does not.
```


# H-2 NaN
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


# H-2 Shallow vs Deep Copy
A shallow copy creates a new top-level object, but nested objects still share the same references. A deep copy recursively creates independent copies of nested objects, so changes to the copied object's nested data don't affect the original.

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
# Shallow Copy -- creates a new object, but nested objects are still shared between the original and copied object.
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

# Deeep Copy --  creates a completely independent copy, including nested objects.
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



# H-2 Spread vs Rest

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
```



# H-2 Destructuring
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


```


# H-2 Higher-Order Functions
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

# H-2 Callback

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


# H-2 Callback Hell
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


# H-2 Promise
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
# H-2 Pomise Chain
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

# H-2 async/await
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

# H-2 Asynchronous JavaScript
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

# H-2 Call Stack
```The Call Stack is a LIFO data structure used by JavaScript to manage function execution. Whenever a function is called, its execution context is pushed onto the stack, and when it finishes, it is popped from the stack. JavaScript executes the function at the top of the stack```

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

# H-2 Event Loop
```The Event Loop is the mechanism that allows JavaScript to handle asynchronous operations while JavaScript itself executes code on a single main thread. It continuously checks whether the Call Stack is empty and then moves eligible callbacks from queues to the Call Stack for execution.```

```Microtask Queue and Macrotask Queue are queues used by the JavaScript runtime to schedule asynchronous callbacks. After the Call Stack becomes empty, the Event Loop prioritizes microtasks before moving to the next macrotask.```

#  H-2 (Microtask vs Macrotask)
```Microtasks and macrotasks are different categories of asynchronous work. Promise callbacks such as .then() go into the microtask queue, while timer callbacks such as setTimeout are tasks. After the current JavaScript execution completes, the event loop processes pending microtasks before moving to the next task```

# H-2 Debouncing
Both are performance optimization techniques used when an event fires many times, such as:
input
scroll
resize
mousemove
keyup
```Debouncing ensures that a function executes only after a specified amount of time has passed since the last event.```

🧠 Remember   - Debounce = "Wait until the user stops."
```javascript
function searchAPI(query) {
  console.log("API call:", query);
}
let timer;
function debounce(callback, delay) {
  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
const handleSearch = debounce(searchAPI, 500);
```

# H-2  Throttling
```Throttling ensures that a function executes at most once within a specified time interval, even if the event keeps firing```

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
# H-2 Event Propagation

Event propagation is the process by which an event travels through the DOM from the target element to other elements in the DOM hierarchy.
Event propagation has 3 phases:
            1. Capturing Phase
                  ↓
            2. Target Phase
                 ↓
            3. Bubbling Phase
```Event propagation is the mechanism through which an event travels through the DOM. It has three phases: capturing, where the event travels from the root toward the target; target phase, where it reaches the target element; and bubbling, where it travels back from the target toward the root. By default, most event listeners handle events during the bubbling phase.```

# H-2  Event Bubbling/Capturing

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
# H-2 stopPropagation() vs stopImmediatePropagation()
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


# H-2  Event Delegation
 
 Event Delegation is a technique where we attach a single event listener to a parent element instead of attaching separate listeners to each child element, and use event bubbling to determine which child triggered the event.

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
# H-2  Currying

Currying is a technique of transforming a function that takes multiple arguments into a sequence of functions, where each function takes one argument.

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

# H-2 Array Methods
# H-2  map, filter, reduce
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

# H-2  Map vs Object
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

# H-2  Set
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

# H-2  Memoization
Memoization is a performance optimization technique where we cache the result of a function based on its inputs. When the function is called again with the same input, we return the cached result instead of recalculating it. It is useful for expensive, repeated, and preferably pure computations.

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

  return function (n) {
    if (cache.has(n)) {
      console.log("From cache");
      return cache.get(n);
    }

    console.log("Calculating...");

    const result = fn(n);

    cache.set(n, result);

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

# H-2 Generator Functions
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

# H-2  Iterators
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

# H-2  Modules
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


# H-2 How does the JavaScript engine manage memory?
JavaScript uses automatic memory management. The engine allocates memory for variables, objects, and execution contexts, typically using stack and heap areas. A garbage collector periodically identifies objects that are no longer reachable from the program's roots and reclaims their memory. Memory leaks can still occur when unnecessary objects remain reachable through references such as globals, event listeners, timers, or closures."




# H-2  What causes Stack Overflow?
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

 # H-2 Regular function vs arrow function?
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




# H-2 DOM 
he DOM (Document Object Model) is a tree-like, in-memory object representation of the HTML document, built by the browser's parser. JavaScript reads/modifies this object model — not the original HTML file.

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

# 12. Event Object

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

# 20. DOMContentLoaded vs load

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

# 21. Reflow vs Repaint

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

# 22. DocumentFragment

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

# 23. Real DOM vs Virtual DOM

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


# H-2 Stack vs Heap?'
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
Function composition is a functional programming concept where you combine two or more functions to create a new function.
In composition, the output of one function automatically becomes the input of the next function. It follows the mathematical principle of \(f(g(x))\), executing from the rightmost (innermost) function to the leftmost (outermost) function.

```JS
const double = (x) => x * 2;
const addTen = (x) => x + 10;
const result = addTen(double(5));
console.log(result);
```
# Why Use It?
Instead of creating monolithic, complex functions, function composition allows you to build small, reusable, single-responsibility functions and glue them together. This results in cleaner, more testable, and declarative code.



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

