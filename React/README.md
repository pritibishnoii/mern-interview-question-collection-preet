# React Interview Question Collection
1. [What is React](#what-is-react)
2. [What is JSX](#what-is-jsx)
3. [What is Declarative/Imperative Syntax](#what-is-declarativeimperative-syntax)
4. [Components in React](#components-in-react)
5. [Component vs HTML Element](#component-vs-html-element)
6. [React Element vs DOM Element](#react-element-vs-dom-element)
7. [React Element vs React Component](#react-element-vs-react-component)
8. [React Elements Are Immutable](#react-elements-are-immutable)
9. [JSX and React Element](#jsx-and-react-element)
10. [Why Do We Use JSX?](#why-do-we-use-jsx)
11. [What is Babel](#what-is-babel)
12. [Props vs State](#props-vs-state)
13. [What Happens When Parent Props Change?](#what-happens-when-parent-props-change)
14. [What if the Prop Doesn't Change?](#what-if-the-prop-doesnt-change)
15. [How to prevent Child Render](#how-to-prevent-child-render)
16. [Can React.memo prevent child re-render when props change?"](#can-reactmemo-prevent-child-re-render-when-props-change)
17. [Controlled vs Uncontrolled Components](#controlled-vs-uncontrolled-components)
18. [useState](#usestate)
19. [What is React batching ?](#what-is-react-batching)
20. [Functional State Updates ⭐\*\*](#functional-state-updates)
21. [useEffect](#useeffect)
22. [useLayoutEffect](#uselayouteffect)
23. [useRef](#useref)
24. [useMemo](#usememo)
25. [useCallback](#usecallback)
26. [useReducer](#usereducer)
27. [Prop Drilling](#prop-drilling)
28. [Context API](#context-api)
29. [State Lifting in React](#state-lifting-in-react)
30. [Why Do We Lift State?](#why-do-we-lift-state)
31. [Keys in React](#keys-in-react)
32. [Why Do We Need Keys?](#why-do-we-need-keys)
33. [Why Not Use Array Index?](#why-not-use-array-index)
34. [What Happens When Key Changes?](#what-happens-when-key-changes)
35. [Custom Hooks](#custom-hooks)
36. [Component Lifecycle](#component-lifecycle)
37. [Lifecycle methods](#lifecycle-methods)
38. [What is Virtual DOM](#what-is-virtual-dom)
39. [How Virtual Dom Works](#how-virtual-dom-works)
40. [Reconciliation](#reconciliation)
41. [React Fiber](#react-fiber)
42. [Fiber tree vs DOM tree?](#fiber-tree-vs-dom-tree)
43. [What is a Fiber Node?](#what-is-a-fiber-node)
44. [Forms](#forms)
45. [Code Splitting](#code-splitting)
46. [How can you implement code splitting in React?](#how-can-you-implement-code-splitting-in-react)
47. [Lazy Loading](#lazy-loading)
48. [Why do we use Suspense with React.lazy()?](#why-do-we-use-suspense-with-reactlazy)
49. [Error Boundaries](#error-boundaries)
50. [Can Error Boundaries be created using functional components?](#can-error-boundaries-be-created-using-functional-components)
51. [Higher-Order Component](#higher-order-component)

#  React Collection
# What is React?
React is a JavaScript library developed by Meta for building interactive user interfaces. It uses a component-based and declarative approach, allowing developers to build reusable UI components. React manages UI updates based on changes in state and props and uses an in-memory UI representation to efficiently determine updates to the browser DOM.


# What is JSX
# What is Declarative/Imperative  Syntax 
Declarative UI means we describe what the UI should look like based on the current state, while the framework handles the necessary updates. Imperative UI means we explicitly write the steps for how the UI or DOM should be changed. React primarily follows a declarative approach.

Instead of telling the browser exactly how to modify the DOM:
```JS
// Imperative
// Imperative UI means you explicitly tell the program HOW to perform each step needed to update the UI.
<button id="btn">Count: 0</button>
let count = 0;
const button = document.getElementById("btn");
button.addEventListener("click", () => {
  count++;
  button.textContent = `Count: ${count}`;
});
```
**you explicitly tell JavaScript:**
                                    1. Get the button
                                        ↓
                                    2. Listen for click
                                        ↓
                                    3. Increase count
                                        ↓
                                    4. Change button text


```JS
// Declarative UI means you describe WHAT the UI should look like, and the framework/library handles HOW to update the UI.
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```
***You describe WHAT the UI should be.**
                        You
                        ↓
                        Desired UI
                        ↓
                        React
                        ↓
                        DOM updates

# Components in React
Components are the fundamental building blocks of React applications. A component encapsulates a piece of UI and its related logic, can receive data through props, manage local state, and compose with other components to build larger interfaces. Modern React primarily uses function components with Hooks.

***Component Types**
**Functional ComponentS**
```JS
function User() {
  return <h1>User</h1>;
}
```
**Class Component**
```JS
class User extends React.Component {
  render() {
    return <h1>User</h1>;
  }
}
```
# Component vs HTML Element
A React component:
```JS
<UserCard />
```
is not itself an HTML element.
It is a React component that may return HTML-like JSX:

```JS
function UserCard() {
  return (
    <div className="card">
      <h2>Priti</h2>
    </div>
  );
}
```


# React Element vs DOM Element
A React Element is a lightweight, immutable JavaScript object that serves as a blueprint for the UI, whereas a DOM Element is the actual, heavy physical node rendered inside the browser window.

**React Element**
```js
// This JSX code...
const element = <h1 className="title">Hello</h1>;

// ...compiles down into a plain object that looks roughly like this:
{
  type: 'h1',
  props: {
    className: 'title',
    children: 'Hello'
  }
}
```

***Dom Element**
This is the real HTML element that lives inside the browser's ecosystem. It is attached directly to the global document and has hundreds of native methods and properties (such as .appendChild(), .getBoundingClientRect(), or .style). Modifying this directly causes the browser to recalculate the page layout, which can slow down web application performance

```js
// 1. Create the real DOM element in browser memory
const myElement = document.createElement('div');

// 2. Modify its properties and attributes directly (DOM elements are mutable)
myElement.id = 'unique-card';
myElement.className = 'card active';
myElement.textContent = 'This is a real DOM element!';
myElement.style.backgroundColor = 'lightblue';

// 3. Inject it into the webpage so it actually renders on screen
document.body.appendChild(myElement);

// 4. Access it later using browser selection tools
const foundElement = document.getElementById('unique-card');
console.log(foundElement.className); // Outputs: "card active"

```

# React Element vs React Component
A React Element is a lightweight, immutable JavaScript object that serves as a blueprint for the UI,
Describes what should be rendered.
```js
const element = <h1>Hello</h1>;
```
React Component is a  reusable piece of code that returns React elements.
```js
function Welcome() {
  return <h1>Hello</h1>;
}

<Welcome/>//JSX represents a React element whose type is the Welcome component.
```

# React Elements Are Immutable
Once created, you don't modify a React element directly.
```js
const element = <h1>Hello</h1>;
```
Instead of changing that element, you create/render a new element:
```js
const newElement = <h1>Hello Priti</h1>;
```
React then uses the new render result during reconciliation.

# JSX and React Element

JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows us to write HTML-like markup inside JavaScript. JSX makes React UI code easier to read and is transformed into JavaScript representations of React elements.SX itself is not HTML.

```js
function User() {
  return <h2>Priti</h2>;
}
function App() {
  return (
    <div>
      <User />
    </div>
  );
}
```

# Why Do We Use JSX?
Without JSX, creating React elements can be more verbose:
```js
import { createElement } from "react";
const element = createElement(
  "h1",
  null,
  "Hello Priti"
);
```
With JSX:
```js
const element = <h1>Hello Priti</h1>;
```

# What is Babel
Babel is a JavaScript compiler/transformation tool. It takes source code containing modern JavaScript syntax, JSX, and other supported syntax and transforms it into JavaScript suitable for the configured target environment. In React projects, Babel can transform JSX into JavaScript that React's runtime can use."

**Babel with Modern JavaScript**
```js
// Modern js 
const add = (a, b) => a + b;
// transform modern syntax for older target environments:👇
// older Normal 
var add = function (a, b) {
  return a + b;
};

// In React 
const element = <h1>Hello Priti</h1>;

// Babel can transform it into JavaScript that represents the React element:👇
const element = React.createElement(
  "h1",
  null,
  "Hello Priti"
);
```

# Props vs State
Props are inputs to a React component and are provided by its parent or another source. The receiving component should treat them as read-only. State represents data that a component manages over time. When state is updated through React's state update mechanism, React schedules the component to render again and updates the UI where necessary.
**Props**
```js 
function User({ name }) {
    // Props are read-only from the receiving component's perspective.
    // The parent can provide a different prop on a later render: setName("priti");
    //If the value needs to change, the parent should generally provide a new prop. 
  return <h2>Hello {name}</h2>; // ❌ Don't mutate props
}

function App() {
    const [name, setName] = useState("vipin");

//   return <User name="Priti" />;// name prop
  return <User name={name} />;// name prop

}

// Props Can Be Functions
//Child.js
function Child({ onClick }) {
  return (
    <button onClick={onClick}>
      Click
    </button>
  );
}

//Parent.js
function Parent() {
  function handleClick() {
    console.log("Clicked");
  }

  return <Child onClick={handleClick} />;
}
```

**State**
```js
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

# What Happens When Parent Props Change?
When a parent component re-renders and passes a new prop value to a child, React renders the child with the new props. React then reconciles the child's new output with its previous output and commits any necessary UI changes

```js
//Parent.js
import { useState } from "react";

function Parent() {
  const [name, setName] = useState("Priti");

  return (
    <>
      <button onClick={() => setName("Vipin")}>
        Change Name
      </button>

      <Child name={name} />
    </>
  );
}
// Child.js
function Child({ name }) {
  console.log("Child rendered");

  return <h2>Hello {name}</h2>;
}
```

```js
                Parent State Changes
                        ↓
                Parent Re-renders
                        ↓
                New Prop
                name = "Vipin"
                        ↓
                Child receives new props
                        ↓
                Child renders
                        ↓
                Reconciliation
                        ↓
                Necessary DOM update
```

# What if the Prop Doesn't Change?
When a parent re-renders and passes a changed prop to a child, React renders the child with the new props. The child doesn't lose its local state just because props changed, as long as it remains the same component at the same position/key. React then reconciles the new output and commits only the necessary DOM changes. If the parent re-renders but the child's props remain equal, the child may still render by default, but React.memo can skip the render when its props are equal.

Suppose:
```js
<Child name="Priti" />
```
The parent re-renders for some other reason.

By default, the child may also be rendered again:

                Parent renders
                    ↓
                Child renders
Even if:    name = "Priti"    has the same value.


# How to prevent Child Render 
When a parent re-renders and passes a changed prop to a child, React renders the child with the new props. The child doesn't lose its local state just because props changed, as long as it remains the same component at the same position/key. React then reconciles the new output and commits only the necessary DOM changes. If the parent re-renders but the child's props remain equal, the child may still render by default, but React.memo can skip the render when its props are equal.

```js
React.memo(Child)
```
to skip a child render when its props are considered equal.

```js
const Child = React.memo(function Child({ name }) {
  console.log("Child rendered");

  return <h2>{name}</h2>;
});
```
                Parent re-renders
                    ↓
                Props unchanged
                    ↓
                React.memo
                    ↓
                Child render can be skipped
```js 
// Child.js
import { useState } from "react";
import React from "react";

function Child({ name }) {
  console.log("Child rendered");

  return <h2>Hello {name}</h2>;
}

const MemoizedChild = React.memo(Child);

// Parent.js
function Parent() {
  const [name, setName] = useState("Priti");
  const [count, setCount] = useState(0);

  console.log("Parent rendered");

  return (
    <div>
      <h1>Parent Component</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <button onClick={() => setName("vipin")}>
        Change Name
      </button>

      <MemoizedChild name={name} />
    </div>
  );
}

export default Parent;
```
# Can React.memo prevent child re-render when props change?"
No. If the child's props actually change, React.memo will normally allow the child to render because the child needs to process the new props. React.memo is useful for skipping renders when props are unchanged. If unnecessary prop changes are caused by new object or function references, we can stabilize them with useMemo or useCallback where appropriate.

React.memo skips the child when its props are equal
The props passed to the child are the same as the props from the previous render.

# Controlled vs Uncontrolled Components
Controlled components keep form data in React state, making React the source of truth. Every input change updates state, and the state is passed back through the value prop.

Uncontrolled component, the DOM maintains the input value, and React accesses it using a ref when needed."
**Controlled Component**
```js
import { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(name);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button type="submit">
        Submit
      </button>
    </form>
  );
}
export default ControlledForm;
```
**Uncontrolled Component**
```js
import { useRef } from "react";

function ProfileUpload() {
  const fileRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    const file = fileRef.current.files[0];

    if (!file) {
      alert("Please select a file");
      return;
    }

    console.log("Selected file:", file);
    console.log("File name:", file.name);
    console.log("File size:", file.size);
    console.log("File type:", file.type);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Upload Profile Picture</h2>

      <input
        type="file"
        ref={fileRef}
      />

      <button type="submit">
        Upload
      </button>
    </form>
  );
}
export default ProfileUpload;
```

**value vs defaultValue**
```js
// Controlled  
//value is controlled by React.
<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
// Uncontrolled
// defaultValue provides the initial value. After that, the DOM manages the current value.
<input
  defaultValue="Priti"
  ref={inputRef}
/>
```

## HOOKS 
Hooks are special React functions that let function components use React features such as state, effects, context, refs, and other React functionality without using class components.


# useState
useState is a React Hook that lets function components manage local state. It returns the current state value and a setter function. Calling the setter schedules a React update, and the component can render again with the updated state
```js
const [state, setState] = useState(initialValue);

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
export default Counter;
```

**Updating State**
Direct value
```js
setCount(count + 1);
```
***Functional update**
When the new state depends on the previous state, prefer:

Functional updates are a way of updating React state by passing a function to the state setter. The function receives the previous state value and returns the new state value.

```js
setCount((prevCount) => prevCount + 1);

function Counter() {
  const [user, setUser] = useState({
  name: "Priti",
  age: 25
});


 function updateAge() {
  setUser((prev) => ({
    ...prev,
    age: 26
  }));
}
  return (
    <button onClick={increment}>
      {count}
    </button>
  );
}
```

Don't mutate the existing state directly:
```js
user.age = 26; // ❌
```

Instead, create the updated object:
```js
setUser((prev) => ({
  ...prev,
  age: 26
}));
```
# What is React batching ?
React batching is the process of grouping multiple state updates into a single render. This improves performance by reducing unnecessary renders. In modern React 18, automatic batching also applies to updates originating from many asynchronous contexts, such as promises, timeouts, and native event handlers when using the modern root API.

Multiple state updates → React groups them → fewer renders.
**Batching Does NOT Mean State Changes Immediately**
```js
function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Priti");

  function handleClick() {
    setTimeout(() => {
      setCount(1);
      setName("vipin");
    }, 1000);
  }

  return (
    <button onClick={handleClick}>
      Update
    </button>
  );
}
// When the button is clicked:

                        // setCount(1)
                        //     +
                        // setName("vipin")
                        //     ↓
                        // React batches the updates
                        //     ↓
                        // One render
                        //     ↓
                        // Updated UI
// Instead of:
                                // setCount()
                                // ↓
                                // Render ❌

                                // setName()
                                // ↓
                                // Render ❌
// In React 18+ with createRoot, these updates can also be automatically batched:
```

# Functional State Updates ⭐**
A functional update is a state update where we pass a function to the setter that receives the previous state and returns the next state. It is preferred when the next state depends on the previous state, especially when multiple updates may be queued or batched

When multiple updates depend on the previous state, use the functional form:
```js
function handleClick() {
  setCount((prev) => prev + 1);
  setCount((prev) => prev + 1);
  setCount((prev) => prev + 1);
}
```

# useEffect
useEffect is a React Hook used to synchronize a component with external systems and perform side effects after React commits a render. It can optionally return a cleanup function for removing subscriptions, timers, event listeners, or other resources.
**Dependency Array**
**No dependency array**
```js
useEffect(() => {
  console.log("Effect runs after every committed render");
});
```
**Empty dependency array**
```js
useEffect(() => {
  console.log("Effect runs after the initial mount");
}, []);
```
**Dependency array**
```js
useEffect(() => {
  console.log("Count changed");
}, [count]);
```

```js
useEffect(() => {
  // side effect

  return () => {
    // cleanup
  };
}, [dependencies]);

import { useEffect } from "react";

function App() {
  useEffect(() => {
    function handleResize() {
      console.log(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <h1>Hello</h1>;
}
```
# useLayoutEffect
useLayoutEffect is a React Hook that runs after React has committed DOM updates but before the browser paints the updated screen. It is mainly used when you need to read or synchronously modify the DOM before the user sees the result.

```js
import { useLayoutEffect, useRef } from "react";

function Chat({ messages }) {
  const chatRef = useRef(null);

  useLayoutEffect(() => {
    const chat = chatRef.current;

    if (!chat) return;

    chat.scrollTop = chat.scrollHeight;
  }, [messages]);

  return (
    <div
      ref={chatRef}
      style={{
        height: "300px",
        overflowY: "auto",
      }}
    >
      {messages.map((message, index) => (
        <p key={index}>
          {message}
        </p>
      ))}
    </div>
  );
}
```

# useRef
useRef is a React Hook that lets you store a mutable value that persists across renders without causing a re-render when that value changes. It is also commonly used to access a DOM element directly.
```js
const ref = useRef(initialValue);
// The value is accessed through:
ref.current

// Timer.js
import { useRef } from "react";

function Timer() {
  const timerRef = useRef(null);

  function startTimer() {
    timerRef.current = setInterval(() => {
      console.log("Running...");
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerRef.current);
  }

  return (
    <>
      <button onClick={startTimer}>
        Start
      </button>

      <button onClick={stopTimer}>
        Stop
      </button>
    </>
  );
}

export default Timer;

// App.js

function App() {
  const countRef = useRef(0);

  function handleClick() {
    countRef.current++;
    console.log(countRef.current);
  }

  return (
    <button onClick={handleClick}>
      Click
    </button>
  );
}


```
Every click changes:
```js
countRef.current
```
but React does not re-render the component because changing .current does not schedule a React update.

***useRef Persists Between Renders**
```js
// The ref object persists for the lifetime of that component instance.
function App() {
  const countRef = useRef(0);

  console.log(countRef.current);

  return (
    <button onClick={() => countRef.current++}>
      Increment
    </button>
  );
}

                                        // Render 1
                                        // countRef.current = 0
                                        //     ↓
                                        // Render 2
                                        // countRef.current = 1
                                        //     ↓
                                        // Render 3
                                        // countRef.current = 2
```

# useMemo
useMemo is a React Hook that memoizes (caches) the result of a calculation and recomputes it only when its dependencies change.
```js
// const memoizedValue = useMemo(() => {
//   return calculation();
// }, [dependencies]);

import { useMemo, useState } from "react";

function ProductList({ products }) {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");

    return products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [products, search]);

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products"
      />

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      {filteredProducts.map((product) => (
        <p key={product.id}>
          {product.name}
        </p>
      ))}
    </div>
  );
}
```
Without useMemo

Every render:
                    Component renders
                        ↓
                    filter() runs
                        ↓
                    Thousands of products processed

With useMemo:
                        Component renders
                                       ↓
                        Check products/search
                                       ↓
                                  Changed?
                                ┌────┴────┐
                                Yes               No
                                ↓                   ↓
                            Calculate      Return cached result

# useCallback
useCallback is a React Hook that memoizes a function reference and returns the same function between renders until one of its dependencies changes.

```js
const memoizedFunction = useCallback(() => {
  // logic
}, [dependencies]);

// With out useCallback()
import React, { useState } from "react";

const Child = React.memo(function Child({ onClick }) {
  console.log("Child rendered");

  return (
    <button onClick={onClick}>
      Child Button
    </button>
  );
});

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <Child onClick={handleClick} />
    </div>
  );
}

export default Parent;
```

Click:  Increment

Parent renders again.

But this function:
```js
const handleClick = () => {
  console.log("Clicked");
};
```
is created again.

Render 1 → function A
Render 2 → function B
Render 3 → function C


Even though the function code is identical:

A !== B

Because functions are objects/references in JavaScript.

Therefore React.memo sees:
                                    Previous prop:
                                    onClick → function A

                                    New prop:
                                    onClick → function B

                                    A !== B

So the child renders again.

**With useCallback()**
```js
import React, {
  useCallback,
  useState
} from "react";

const Child = React.memo(function Child({ onClick }) {
  console.log("Child rendered");

  return (
    <button onClick={onClick}>
      Child Button
    </button>
  );
});

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <Child onClick={handleClick} />
    </div>
  );
}

export default Parent;
```

# useReducer
useReducer is a React Hook used to manage state through a reducer function. Instead of directly setting state, you dispatch an action, and the reducer determines the next state.

useReducer is useful when state logic is complex or multiple state values and transitions are related. It returns the current state and a dispatch function. When an action is dispatched, React calls the reducer with the current state and action, and the reducer returns the next state. The reducer should be pure and should not perform side effects."
```js
const [state, dispatch] = useReducer(reducer, initialState);
Where:-
                    state
                    ↓
                    Current state

                    dispatch
                    ↓
                    Send action

                    reducer
                    ↓
                    Decides next state
```

```js
import { useReducer } from "react";

const initialState = {
  email: "",
  password: "",
  loading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
      };

    case "SET_PASSWORD":
      return {
        ...state,
        password: action.payload,
      };

    case "LOGIN_START":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
      };

    case "LOGIN_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}

function Login() {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <form>
      <input
        type="email"
        value={state.email}
        onChange={(e) =>
          dispatch({
            type: "SET_EMAIL",
            payload: e.target.value,
          })
        }
      />

      <input
        type="password"
        value={state.password}
        onChange={(e) =>
          dispatch({
            type: "SET_PASSWORD",
            payload: e.target.value,
          })
        }
      />

      <button type="submit">
        {state.loading ? "Logging in..." : "Login"}
      </button>

      {state.error && <p>{state.error}</p>}
    </form>
  );
}

export default Login;
```



# Prop Drilling
Prop drilling is the process of passing data through multiple intermediate components via props, even when those intermediate components do not need the data themselves, just to reach a deeply nested child component.
                          App
                            ↓
                          Parent
                            ↓
                          Child
                            ↓
                        GrandChild

```js
function App() {
  const userName = "Priti";

  return <Parent userName={userName} />;
}

function Parent({ userName }) {
  return <Child userName={userName} />;
}

function Child({ userName }) {
  return <GrandChild userName={userName} />;
}

function GrandChild({ userName }) {
  return <h2>Hello {userName}</h2>;
}
```

# Context API
Context API is a built-in React mechanism that allows data to be shared with components deep in the component tree without manually passing props through every intermediate component.

```js
                                  App
                                    ↓
                            Context Provider
                                    ↓
                    ┌───────┼───────┐
                    ↓              ↓              ↓
                        Parent   Child   Profile
                                        ↓
                                useContext()
```

```js
import { createContext, useContext } from "react";

const UserContext = createContext(null);

function App() {
  const user = {
    name: "Priti",
    role: "Developer",
  };

  return (
    <UserContext.Provider value={user}>
      <Dashboard />
    </UserContext.Provider>
  );
}

function Dashboard() {
  return <Profile />;
}

function Profile() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.role}</p>
    </div>
  );
}

export default App;
```
How It Works
Step 1 — Create Context
const UserContext = createContext(null);

This creates a Context object.
```js
UserContext
     ↓
Can provide data
     ↓
Can consume data
```
Step 2 — Provide Data
```js
<UserContext.Provider value={user}>
  <Dashboard />
</UserContext.Provider>

```
The value contains:
```js
{
  name: "Priti",
  role: "Developer"
}
so: 
                UserContext
                    ↓
                 value
                    ↓
                {
                name: "Priti",
                role: "Developer"
                }
```
step 3 Consume Data

Inside a deeply nested component:

```js
const user = useContext(UserContext);
user.name//priti
```

# State Lifting  in React
State lifting, or "lifting state up," means moving shared state from a child component to their closest common parent so that multiple child components can access and update the same source of truth through props.

# Why Do We Lift State?
When multiple components need to access or modify the same piece of state, we lift that state to their closest common ancestor. The parent owns the state and passes the current value and update handlers to its children through props. This creates a single source of truth and keeps the components synchronized


Suppose:
```js
         Parent
         /      \
        ↓      ↓
   Child A  Child B
```
Both children need the same data.

Instead of keeping separate states:

```js
Child A → state ❌
Child B → state ❌
```
we move the state to the parent:

```js
        Parent
        State 
        /    \
       ↓      ↓
   Child A  Child B
   Now the parent becomes the single source of truth.
```
**Without State Lifting**
```js
function Input() {
  const [name, setName] = useState("");

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}

function Preview() {
  // How does Preview get name?
//   The state is trapped inside Input.

// Preview cannot directly access it.
// need to define the local state 
const [name, setName] = useState("");
return(
    <h1>{name}</h1>
)
}
```

***With State Lifting**
```js
import { useState } from "react";

function Parent() {
  const [name, setName] = useState("");

  return (
    <div>
      <NameInput
        name={name}
        setName={setName}
      />

      <Preview name={name} />
    </div>
  );
}
function NameInput({ name, setName }) {
  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your name"
    />
  );
}
function Preview({ name }) {
  return <h2>Hello {name}</h2>;
}
export default Parent;
```
```js
                        Parent
                            │
                        name = ""
                            │
          ┌────────┴────────┐
          ↓                                  ↓
    NameInput                     Preview
          │                                  │
     setName()                          │
          │                                  │
          └───────┬─────────┘
                          ↓
                    Parent State
                          ↓
                    New name
                          ↓
                Both children update
```
# Keys in React
In React, keys are special, string attributes that you must include when rendering dynamic lists of elements. They give list items a stable identity, allowing React's virtual DOM reconciliation algorithm to identify which items have changed, been added, or been removed

The key attribute must be placed directly on the outermost element inside your loop (usually inside .map())


```js
function Users() {
  const users = [
    { id: 1, name: "Priti" },
    { id: 2, name: "Vipin" },
    { id: 3, name: "Preeti" },
  ];
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>//it gives each list item a stable identity.
          {user.name}
        </li>
      ))}
    </ul>
  );
}
```
# Why Do We Need Keys? 
Suppose previous list is:
1 → Priti
2 → Vipin
3 → Preeti

Now Vipin  is removed:
                                1 → Priti
                                3 → Preeti

With stable keys, React can understand:
                                                key 1 → same Priti
                                                key 3 → same Preeti
                                                key 2 → removed

This helps React reconcile the list correctly.


# Why Not Use Array Index?
```js
users.map((user, index) => (
  <li key={index}>
    {user.name}
  </li>
));
```
This can be problematic when the list can be:

                    Reordered
                    Inserted into
                    Deleted from
Index 0 → Priti
Index 1 → Vipin
Index 2 → Preeti

Remove Priti:
            Index 0 → Vipin
            Index 1 → Preeti

The indexes changed even though Vipin and Preeti are the same logical items.


# What Happens When Key Changes?
Suppose:
```js
<User key={1} />
```
becomes:
```js
<User key={2} />
```
React can interpret this as:
                                    Old component
                                        ↓
                                    {key = 1}
                                        ↓
                                    Removed

                                    New component
                                        ↓
                                    {key = 2}
                                        ↓
                                    Created
            
So changing a component's key can cause React to remount that component, which means its local state is reset.

```js
<User key="priti" name="Priti" />
// and later change to:
<User key="vipin" name="vipin" />
// React sees a different identity.
                                                key = "priti"
                                                    ↓
                                                Old component
                                                        ≠(not equal )
                                                key = "vipin"
                                                    ↓
                                                New component
The old component can be unmounted and the new one mounted, so its state starts fresh.
```
**Key Is Not Passed as a Normal Prop**
```js
<User key={user.id} />

// You cannot access it like:
function User(props) {
  console.log(props.key); // ❌
}

// key is a special React prop used by React itself.
// If your component needs the ID, pass it separately:
<User
  key={user.id}
  userId={user.id}
/>

// Use it like this :
function User({ userId }) {
  console.log(userId); // ✅
}
```




# Custom Hooks
Custom Hooks are reusable JavaScript functions that start with use and allow us to extract and share stateful logic between React components.

```js
import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();

        setData(result);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}
```
Now any component can reuse the logic:
```js
function Users() {
  const {
    data,
    loading,
    error,
  } = useFetch("/api/users");

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      {data?.map((user) => (
        <p key={user.id}>
          {user.name}
        </p>
      ))}
    </div>
  );
}

// Another component can use the same logic:
function Products() {
  const {
    data,
    loading,
    error,
  } = useFetch("/api/products");

  // UI specific to products
}
```

# Component Lifecycle
Component Lifecycle is the sequence of stages a React component goes through during its existence: mounting, updating, and unmounting.
componentDidMount()
componentDidUpdate()
componentWillUnmount()

```js
                    Component Created
                        ↓
                    Mounting
                        ↓
                    Updating
                        ↓
                    Updating...
                        ↓
                    Unmounting
                        ↓
                    Component Removed
```
**Mounting**
Mounting is when a component is created and inserted into the UI for the first time.
```js
function User() {
  return <h2>Hello Priti</h2>;
}
When <User /> first appears:
                                        Component created
                                            ↓
                                        Render
                                            ↓
                                        DOM Commit
                                            ↓
                                        Mounted
```
***Updating**
Updating occurs when a component re-renders because its state, props, or relevant context changes.
```js
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
} 
// When runs :
setCount(count + 1);
                                        State changes
                                            ↓
                                        Component renders again
                                            ↓
                                        Reconciliation
                                            ↓
                                        Commit if necessary
                                            ↓
                                        Updated UI
```

**Unmounting**
Unmounting occurs when React removes a component from the UI.

```js
function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <button onClick={() => setShow(!show)}>
        Toggle
      </button>

      {show && <Child />}
    </>
  );
}

// When:

show = true
                    App
                    ↓
                    Child mounted

// When:
show = false
                    App
                    ↓
                    Child removed
                    ↓
                    Child unmounted
```
**Cleanup During Unmount**

```js
import { useEffect } from "react";

function Timer() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Running...");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Timer cleaned up");
    };
  }, []);

  return <h2>Timer</h2>;
}
                    //   Lifecycle:
                                        // Mount
                                        //    ↓
                                        // Effect setup
                                        //    ↓
                                        // Timer starts
                                        //    ↓
                                        // Component unmounts
                                        //    ↓
                                        // Cleanup
                                        //    ↓
                                        // Timer stops

// Cleanup is also run before an effect's next setup when its dependencies change.
```



# Lifecycle methods
Lifecycle methods are special methods in React class components that run at specific stages of a component's lifecycle: mounting, updating, and unmounting.

**Mounting Methods**
Mounting means the component is being created and added to the DOM.
constructor()
Used for initializing state and binding methods.
```js
constructor(props) {
  super(props);

  this.state = {
    count: 0,
  };
}
```
render()
render() returns the UI that React should render.
```js
render() {
  return <h1>{this.state.count}</h1>;
}
```
render() should be kept free of side effects.

componentDidMount()

Runs after the component has been mounted into the DOM.
Common uses:
                    API calls
                    Event subscriptions
                    Timers
                    DOM operations
```js
componentDidMount() {
  console.log("Component mounted");

  fetch("/api/users")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
```
**Updating Methods**
Updating happens when props or state change.

componentDidUpdate()

Runs after a component has been updated and the DOM has been committed.
```js
componentDidUpdate(prevProps, prevState) {
  if (prevState.count !== this.state.count) {
    console.log("Count changed");
  }
}
```
shouldComponentUpdate()

Determines whether a class component should re-render.
```js
shouldComponentUpdate(nextProps, nextState) {
  return nextState.count !== this.state.count;
}
```
If it returns:

true

React continues with the update.

If:

false

React skips the update for that component.

**Unmounting**

componentWillUnmount()
Runs immediately before a component is removed from the DOM.

Used for cleanup:
```js
componentWillUnmount() {
  clearInterval(this.timer);

  window.removeEventListener(
    "resize",
    this.handleResize
  );
}
```
React lifecycle methods are special methods available in class components that execute during mounting, updating, and unmounting. Important methods include constructor, render, componentDidMount, shouldComponentUpdate, componentDidUpdate, and componentWillUnmount. In modern React, function components and Hooks are preferred over class lifecycle methods.

# What is Virtual DOM
Virtual DOM is an in-memory representation of the UI used by React. It is a lightweight JavaScript representation of the elements that React wants to render in the browser.   When state or props change, React creates a new UI representation, compares it with the previous one during reconciliation, determines the necessary changes, and then commits those changes to the Real DOM

```JS
function App() {
  return <h1>Hello Priti</h1>;
}
// React creates an in-memory representation conceptually similar to:
{
  type: "h1",
  props: {
    children: "Hello Priti"
  }
}
// The browser ultimately has:
<h1>Hello Priti</h1>
```

# How Virtual Dom Works 
Virtual DOM works by keeping an in-memory representation of the UI. When state or props change, React creates a new UI representation, compares it with the previous one through reconciliation, determines what needs to change, and then commits the required updates to the Real DOM.
**Initial Render**
```JS
function App() {
  return (
    <div>
      <h1>Hello Priti</h1>
      <p>Welcome</p>
    </div>
  );
}
// React creates a representation of this UI:
                                        App
                                        │
                                        └── div
                                            ├── h1
                                            │    └── "Hello Priti"
                                            │
                                            └── p
                                                └── "Welcome"
```
***State Changes**
```JS
function App() {
  const [name, setName] = useState("Priti");
// Initially:
         // name = "Priti"
  return (
    <div>
      <h1>Hello {name}</h1>
      <button onClick={() => setName("Vipin")}>
        Change Name
      </button>
    </div>
  );
}

// When the button is clicked:
setName("Vipin");
// State changes:
                "Priti"
                  ↓
                "Vipin"
```
***Component Re-renders**
React calls the component again to calculate the new UI.

```JS
// Previous result:
<h1>Hello Priti</h1>
// New result:
<h1>Hello Vipin</h1>
```
***Reconciliation**
React now compares the previous UI representation with the new one.
```JS
                Previous Tree          New Tree

                        div                    div
                         │                      │
                        h1                     h1
                         │                      │
                      "Priti"                 "Vipin"


// React determines:
div → same
h1  → same
text → changed
So it doesn't need to recreate the entire structure.

Conceptually:
Only text content changed
          ↓
Update that DOM node
```
***Commit Phase**
After React determines the required changes, it applies them to the Real DOM.
```JS
                        Reconciliation
                            ↓
                        Changes identified
                            ↓
                        Commit
                            ↓
                        Real DOM

***The browser ends up with:***
<h1>Hello vipin</h1>

                                                React
                                                    │
                                            State / Props
                                                    ↓
                                            Render Phase
                                                    ↓
                                            New React Element Tree
                                                    ↓
                                            Reconciliation
                                                    ↓
                                            Determine Changes
                                                    ↓
                                            Commit Phase
                                                    ↓
                                            Real DOM
                                                    ↓
                                            Browser

```
When state or props change, React renders the component to produce a new React element tree. React's reconciliation process determines what needs to change, and during the commit phase React applies the required changes to the host environment, such as the browser DOM.
***Render Phase**
React calculates what the UI should look like.
**Reconciliation**
React determines how the new UI differs from the previous one.
***Commit Phase**
React applies the necessary DOM changes.


# Reconciliation
"Reconciliation is React's process of comparing the previous and newly rendered UI representations to determine what has changed and what updates need to be applied."
When state or props change, React renders the component again and produces a new React element tree. React's reconciliation process compares this new tree with the previous one, determines the necessary changes, and then the commit phase applies those changes to the browser DOM."
```JS
                    State / Props Change
                            ↓
                    Component Re-renders
                            ↓
                    New React Element Tree
                            ↓
                    Reconciliation
                            ↓
                    Compare Previous vs New
                            ↓
                    Determine Required Changes
                            ↓
                    Commit Phase
                            ↓
                    Real DOM Update
```
```JS 
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter</h1>

      <p>{count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

Initially:
            div
            ├── h1 → Counter
            ├── p  → 0
            └── button → Increment
After clicking:
            div
            ├── h1 → Counter
            ├── p  → 1
            └── button → Increment
React compares:
                            Previous Tree          New Tree

                            div                           div
                            ├── h1 Counter         ├── h1 Counter
                            ├── p  0                    ├── p  1       ← changed
                            └── button                └── button

React determines that the relevant change is:
                                                            <p>0</p>
                                                            ↓
                                                            <p>1</p>
It then commits the necessary update to the Real DOM
```

# React Fiber
React Fiber is the internal reconciliation architecture introduced in React 16  

Fiber is React's internal architecture for reconciliation and scheduling. Each component or host element can be represented by a Fiber node. Fiber allows React to break rendering work into smaller units and coordinate that work based on priority. The render phase can be interruptible, while the commit phase applies the finalized changes to the host environment such as the browser DOM.

Before Fiber, React's reconciliation work was largely synchronous.
```JS
                        App
                        ├── Header
                        ├── Sidebar
                        ├── Main
                        │    ├── Card
                        │    ├── Card
                        │    ├── Card
                        │    └── ...
                        └── Footer
```
If React started a large rendering task, it could spend a lot of time working through that tree before yielding.

That could make the browser less responsive.

Fiber was designed to make rendering work more interruptible and schedulable.

#  Fiber tree vs DOM tree?
The DOM Tree represents the browser’s actual UI structure, while the Fiber Tree is React’s internal blueprint used to calculate changes before touching the browser.

React uses a two-phase system to sync these trees efficiently:

1. The Render Phase (Fiber Tree): When state changes, React builds a new "work-in-progress" Fiber Tree in memory. It compares this new tree with the current Fiber Tree to find the exact differences. This phase can be paused if a higher-priority task (like a user typing) comes in.

2. The Commit Phase (DOM Tree): Once the calculations are finished, React hands the exact list of changes to react-dom. The DOM tree is then updated all at once, ensuring the browser only paints the UI when necessary to prevent lag.

# What is a Fiber Node?

A Fiber Node is a JavaScript object used internally by React Fiber to represent a component, DOM element, or unit of work during the reconciliation process. It stores information such as props, state, parent-child relationships, sibling relationships, update flags, and references to the current and work-in-progress versions of the tree through the alternate field.

Every React Component or DOM Element has a corresponding Fiber Node inside React.

Conceptually, a Fiber can contain information such as:
```JS

React Component
      ↓
Fiber Node
      ↓
React uses it to track:
- Props
- State
- Effects
- Parent
- Child
- Sibling
- Updates 

            Fiber Node
            │
            ├── type          → Component/Element type
            ├── key           → List identification
            ├── memoizedProps → Old props
            ├── pendingProps  → New props
            ├── memoizedState → State
            │
            ├── child         → First child
            ├── sibling       → Next sibling
            ├── return        → Parent
            │
            ├── alternate     → Current ↔ WIP tree
            │
            └── flags         → Update/Delete/Insert
```

**Fiber Tree**
React maintains a tree of Fiber nodes.

```JS
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <p>Welcome</p>
    </div>
  );
}
                Fiber(App)
                    │
                    ▼
                Fiber(div)
                   /      \
                 ▼        ▼
            Fiber(h1)  Fiber(p)
fiber.child
fiber.sibling
fiber.return
```

**Fiber Node Contains:**
```JS
                const fiber = {
                tag: ,
                type: ,
                key: ,
                pendingProps: ,
                memoizedProps: ,
                memoizedState: ,
                child: ,
                sibling: ,
                return: ,
                alternate: ,
                flags:
                }
```
**type**
Tells React what component or element this Fiber represents.
```JS
tag:
     <h1>Hello</h1>
Fiber:
        fiber.type = "h1";


// For a component:
function User() {}
Fiber:
        fiber.type = User;


key:
    // Used during reconciliation for lists.
    {
  users.map(user => (
    <li key={user.id}>
      {user.name}
    </li>
  ))
}
Fiber:
        fiber.key = user.id;

pendingProps:
// New incoming props.
<User name="Priti" />
Before render:
                fiber.pendingProps = {
                name: "Priti"
                };

memoizedProps:
// Props from the previous completed render
            fiber.memoizedProps = {
            name: "Rahul"
            };

memoizedState:
// Stores component state.
const [count, setCount] = useState(0);
Fiber:
        fiber.memoizedState = {
        count: 0
        };

When state updates:
              setCount(1);
Fiber updates:
                    fiber.memoizedState = {
                    count: 1
                    };

child:
// Points to the first child Fiber.
<div>
  <h1 />
  <p />
</div>
            fiber.child = h1Fiber;

sibling:
// Points to the next sibling.
                h1Fiber.sibling = pFiber;

return: 
//  Points to the parent Fiber.
                h1Fiber.return = divFiber;
                pFiber.return = divFiber;

alternate:
// React keeps two Fiber Trees:
// This helps React prepare updates before committing them.
                Current Tree:
                             ( UI currently shown)
                    ↔
                Work-In-Progress Tree:
                             (New UI being prepared)


flags:
// Flags tell React what action needs to happen.
                -Placement
                -Update
                -Deletion
                                                fiber.flags = Update;
```



# Forms
Forms in React are used to collect, manage, validate, and submit user input such as text, email, password, checkbox, radio buttons, and select values.


# Code Splitting
Code Splitting is a performance optimization technique where we split a large JavaScript bundle into smaller chunks, so the browser doesn't have to download the entire application at once.
Code Splitting = splitting the code

Lazy Loading = deciding when to load that code

dynamic import returns a Promise:
```js
// dynamic import returns a Promise:
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Profile = lazy(() => import("./pages/Profile"));

function App() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Suspense>
  );
}
```
# How can you implement code splitting in React?
We can implement code splitting using JavaScript dynamic imports and React's React.lazy() API. Suspense is then used to provide fallback UI while the lazy component is loading.

# Lazy Loading
Lazy loading in React is a performance optimization technique where components are loaded dynamically only when they are required, reducing the initial JavaScript bundle size and improving initial application load performance.

```js
import { lazy, Suspense } from "react";
const About = lazy(() => import("./About"));
function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <About />
    </Suspense>
  );
}
```
Suppose your application has:
                                        src/
                                        ├── App.jsx
                                        ├── pages/
                                        │   ├── Home.jsx
                                        │   ├── Dashboard.jsx
                                        │   ├── Profile.jsx
                                        │   └── Settings.jsx

```js
// Instead of:
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
// use:
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Profile = lazy(() => import("./pages/Profile"));
const Settings = lazy(() => import("./pages/Settings"));

function App() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Dashboard />
    </Suspense>
  );
}

export default App;
```
Now React can split these components into separate chunks.

| Normal Import                    | Lazy Loading                    |
| -------------------------------- | ------------------------------- |
| Loaded immediately               | Loaded when needed              |
| Larger initial bundle            | Smaller initial bundle          |
| Faster access after initial load | Initial access may show loading |
| Simple applications              | Large applications              |
| No `Suspense` required           | `Suspense` required             |


# Why do we use Suspense with React.lazy()?
Because the lazy component is loaded asynchronously. While React is waiting for the component's code to download, Suspense displays a fallback UI.

```js
<Suspense fallback={<Loader />}>
  <Dashboard />
</Suspense>
```


# Error Boundaries
Error Boundary is a React component that catches JavaScript errors in its child component tree and displays a fallback UI instead of allowing the entire UI to crash.

```An Error Boundary is a React component that catches errors during rendering and lifecycle execution in its child component tree and displays a fallback UI instead of allowing the affected React UI to crash.```

# Can Error Boundaries be created using functional components?
Traditionally, React's built-in Error Boundary mechanism requires a class component using methods such as:

getDerivedStateFromError()    --This method is used to update state when an error occurs.
componentDidCatch()

```js
function Dashboard() {
  throw new Error("Something went wrong!");

  return <h1>Dashboard</h1>;
}

// creating Errorboundry 
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error:", error);
    console.error("Error Info:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }

    return this.props.children;
  }
}


//App.js
function App() {
  return (
    <ErrorBoundary>
      <Dashboard />
    </ErrorBoundary>
  );
}

```

# Higher-Order Component
A Higher-Order Component is a function that accepts a React component and returns a new enhanced component with additional behavior or functionality. HOCs are mainly used for reusing cross-cutting component logic such as authentication, permissions, loading states, logging, and feature access.

```js
function withAdmin(Component) {
  return function AdminComponent(props) {
    const role = localStorage.getItem("role");

    if (role !== "admin") {
      return <h2>Access Denied</h2>;
    }

    return <Component {...props} />;
  };
}
// use:
function AdminDashboard() {
  return <h1>Admin Dashboard</h1>;
}
const ProtectedAdminDashboard =
  withAdmin(AdminDashboard);

//   Now the same permission logic can be reused:
const AdminUsers = withAdmin(Users);
const AdminOrders = withAdmin(Orders);
const AdminSettings = withAdmin(Settings);
```











