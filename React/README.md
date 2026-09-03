# React Interview Question Collection
1. [What is React](#what-is-react)
2. [What is JSX](#what-is-jsx)
  [What is the Virtual DOM, and how does React use it to update the UI?](#what-is-the-virtual-dom-and-how-does-react-use-it-to-update-the-UI)
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
40. [  [How does React's reconciliation algorithm work, and why does it use keys?]](#reconciliation)

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
52. [What-is-nullish-coalescing-operator-(?? )](#What-is-nullish-coalescing-operator)
53. [What is Redux](#what-is-redux-)
53. [What is Redux Components](#what-is-redux-components)

#  React Collection
# What is React?
React is a JavaScript library developed by Meta for building interactive user interfaces. It uses a component-based and declarative approach, allowing developers to build reusable UI components. React manages UI updates based on changes in state and props and uses an in-memory UI representation to efficiently determine updates to the browser DOM.

# What is a React Fragment, and why would you use it instead of a <div>

A React Fragment allows a component to return multiple elements/Fiver Tree without adding an extra DOM node. It is useful when I need to group elements logically for React but don't want to change the resulting HTML structure. The shorthand syntax is <>...</>, while the full syntax is <React.Fragment>...</React.Fragment>. The full syntax is important when rendering fragments inside a list because it supports the key prop, whereas the shorthand does not.

Internally, React represents the Fragment in its element/Fiber tree, but it doesn't create a corresponding DOM element. Its children are reconciled normally and committed directly into the parent DOM structure.

```js
function App() {
  return (
    <React.Fragment>
      <h1>Hello</h1>
      <p>Welcome</p>
    </React.Fragment>
  );
}
```
# What is the Virtual DOM, and how does React use it to update the UI?
The Virtual DOM is a lightweight in-memory representation of the UI, represented primarily by React elements and processed through React's internal Fiber architecture. When state or props change, React renders the component again and produces a new element tree. React then performs reconciliation between the previous and new trees to determine what changed. During the commit phase, React applies the necessary changes to the actual DOM. The benefit is that developers don't have to manually calculate and coordinate DOM mutations; React handles that declaratively.

However, the Virtual DOM itself isn't simply "faster than the real DOM." The important benefit is that React can efficiently determine and coordinate UI updates, while its reconciliation and scheduling model manages when and how host mutations are committed.

```js
function App() {
    const name = "Priti";

    return (
        <div>
            <h1>Hello {name}</h1>
        </div>
    );
}
//  Conceptually 
// JavaScript objects

// React elements are represented as JavaScript data.
{
    type: "div",
    props: {
        children: {
            type: "h1",
            props: {
                children: "Hello Priti"
            }
        }
    }
}


// Immutability
// React state updates are typically modeled with new values rather than mutating existing state directly.
setUser({
    ...user,
    name: "Priti"
});
```

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



# Why do you no longer need import React from 'react' in JSX files with React 17+?

Starting with React 17, React introduced a new JSX transform. Previously, JSX was compiled into React.createElement(...), so the React identifier had to be in scope. The new transform automatically imports JSX runtime functions such as jsx and jsxs from react/jsx-runtime, so JSX files no longer need import React from 'react' just to use JSX.

  Before React 17 JSX is like this 👇 
  ```js
  const element = <h1>Hello</h1>;
  ```
  was transformed roughly into:👇 
  ```js
  const element = React.createElement("h1", null, "Hello");
  ```
  So You need to import 
  ```js
  import React from "react";
  ```
  because the generated JavaScript explicitly referenced React.


React 17+: the new JSX transform

With the new transform, JSX is compiled using special functions from React's JSX runtime:
```js
const element = <h1>Hello</h1>;

// Tranformed into:👇 
import { jsx as _jsx } from "react/jsx-runtime";

const element = _jsx("h1", {
    children: "Hello"
});
```

# Components in React
Components are the fundamental building blocks of React applications. A component encapsulates a piece of UI and its related logic, can receive data through props, manage local state, and compose with other components to build larger interfaces. Modern React primarily uses function components with Hooks.


***Component Types**
**Functional ComponentS**
# What is a functional component?
A functional component is a JavaScript function that receives props and returns React elements or JSX describing the UI. With Hooks, function components can manage state, effects, refs, context, and other React features.

```JS
function User() {
  return <h1>User</h1>;
}
```
**Class Component**
# What is a class component?
A class component is a JavaScript class extending React.Component. It receives props through this.props, can maintain state through this.state, and historically used lifecycle methods such as componentDidMount and componentDidUpdate.
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
# Why did React move from class components to functional components?
Functional components became the preferred approach because they provide a simpler JavaScript model and, with Hooks, can handle state, side effects, context, refs, and reusable stateful logic without class-specific concepts such as this, constructors, and lifecycle methods.

Class components are still supported, but modern React development generally uses function components with Hooks.

#  Does a functional component have an instance?
Not in the same sense as a class component. A function component is invoked as a function, while React associates its state and Hooks with its Fiber.


# Where is Hook state stored?
React maintains Hook state on the component's Fiber; the function reads the appropriate Hook state when React renders it.

# What are props in React, and why are they read-only?
Props are read-only inputs passed from a parent component to a child component. They are represented as values on the component's props object and can contain any JavaScript value such as strings, numbers, objects, arrays, functions, or React elements. Props follow one-way data flow, meaning data flows from parent to child. A child should never mutate its props because the parent owns that data, and object or array props may reference the same underlying JavaScript object. If the child needs to change something, it should either request the parent to change it through a callback prop or maintain its own state.

# Are props mutable?
Props should be treated as read-only by the receiving component. If data needs to change, the owner of that data should update it and pass the new value down.


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

# Why Do We Use JSX ? What is JSX
JSX is a syntax extension to JavaScript used to describe React UI in an HTML-like way. The browser cannot execute JSX directly, so a compiler such as Babel transforms it into JavaScript. Traditionally, JSX was transformed into React.createElement(type, props, ...children), which creates React Element objects. With the modern React JSX transform, it can instead compile to jsx and jsxs helpers from the JSX runtime, so React doesn't have to be imported just for JSX. React then uses these element objects as input to its rendering, Fiber, and reconciliation process before committing the necessary changes to the real DOM.


JSX returns  a React element, which is fundamentally a plain JavaScript object.it converted  into JavaScript using Babel
```js
const element = <h1 className="welcome">Hello, world!</h1>;

//it is same like this
const element = React.createElement(
  'h1',
  { className: 'welcome' },
  'Hello, world!'
);
```


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

```js
// primitive vs object props
import React, { useState } from "react";

const User = React.memo(function User({ user }) {
    console.log("User rendered");

    return <h2>{user.name}</h2>;
});

function App() {
    const [count, setCount] = useState(0);

    const user = {
        name: "Priti"
    };

    return (
        <>
            <button onClick={() => setCount(count + 1)}>
                {count}
            </button>

            <User user={user} />
        </>
    );
}


// Every time App renders: with this obj 👇

const user = {
    name: "Priti"
};

// creates a new object.

oldUser !== newUser

// Therefore:

Object.is(oldUser, newUser)

// is: false


// Fix with useMemo👇

 const user = useMemo(() => {
        return {
            name: "Priti"
        };
    }, []);

//     Render 1

// user → Object A

// Render 2:

// user → Object A

Object.is(oldUser, newUser);
// true   Therefore user skiped
```

```js
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

    const handleClick = () => { //this creates a new function on every render
        console.log("Clicked");
    };

    return (
        <>
            <button onClick={() => setCount(count + 1)}>
                Count: {count}
            </button>

            <Child onClick={handleClick} />
        </>
    );
}

// Will Child skip rendering when count changes?  No 
// Because:👇

const handleClick = () => {};
// creates a new function every render.
// Render 1:
// handleClick → Function A

// Render 2:
// handleClick → Function B

Object.is(FunctionA, FunctionB);
// false

// So React.memo says:
// Props changed
//    ↓
// Child renders


// Fix with useCallback
const handleClick = useCallback(() => {
        console.log("Clicked");
    }, []);

    // Now React keeps the same function reference:

//     Render 1
//    ↓
// handleClick → Function A

// Render 2
//    ↓
// handleClick → Function A
```
React.memo is a higher-order component used to memoize a functional component. It allows React to skip re-rendering the component when its props haven't changed according to a shallow comparison. React compares the previous and next prop values, effectively using Object.is for each prop. If the props are equal, React can reuse the previous result instead of rendering the component again.

However, React.memo does not prevent all renders. The component can still re-render when its own state changes or when a context value it consumes changes. Also, memoization can be defeated if we pass newly created objects, arrays, or functions as props on every parent render.

Therefore, React.memo is primarily a performance optimization and is most useful for components that render frequently and receive stable props.

# What are default props in React?
Default props provide fallback values when a component doesn't receive a prop. In modern React function components, I use JavaScript default parameters, for example function Button({ label = 'Click' }). The default is applied when the prop is undefined, including when the prop is omitted, but not when it's null, false, 0, or an empty string. Historically React supported Component.defaultProps, but React 19 removed defaultProps for function components and recommends parameter defaults instead. Class components still support defaultProps.

# What is the difference between defaultProps and default parameters?
defaultProps was the traditional React mechanism for providing fallback prop values. For function components, React 19 removed support for defaultProps, so the recommended approach is to use JavaScript default parameters or destructuring defaults such as function Button({ label = "Click" }). The default is applied when the prop value is undefined, including when the prop is omitted. It does not apply to values such as null, false, 0, or an empty string.
```js
function Button({ label = "Click" }) {
    return <button>{label}</button>;
}

<Button />
            <Button label={undefined} />
            <Button label={null} />
            <Button label="" />
            <Button label={0} />
            <Button label={false} />

// Multiple Default props
function Card({
    title = "Untitled",
    size = "medium",
    isFeatured = false
}) {
    return (
        <div className={`card ${size}`}>
            <h2>{title}</h2>

            {isFeatured && (
                <span>Featured</span>
            )}
        </div>
    );
}


// defaultProps vs Parameter Defaults
// defaultProps was the traditional React mechanism for providing fallback prop values. For function components, React 19 removed support for defaultProps, so the recommended approach is to use JavaScript default parameters or destructuring defaults such as function Button({ label = "Click" }). The default is applied when the prop value is undefined, including when the prop is omitted. It does not apply to values such as null, false, 0, or an empty string.

function Button(props) {
    return <button>{props.label}</button>;
}

Button.defaultProps = {
    label: "Click"
};
// Morder style
function Button({ label = "Click" }) {
    return <button>{label}</button>;
}


// Or DO THIS 
const result = value || "Default";
const result = value ?? "Default";
```

# Controlled vs Uncontrolled Components
A controlled component is a React form element whose current value is controlled by React state.

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

# What is a controlled component in React, and how is it different from an uncontrolled component?
A controlled component is a form element whose value is managed by React state. The state is passed to the element through the value prop, and user changes are handled through an event such as onChange, which updates the state.

For example, value={email} and onChange={e => setEmail(e.target.value)} make the input controlled.

This makes React the single source of truth and allows us to perform real-time validation, formatting, conditional rendering, and submit validation.

In an uncontrolled component, the DOM itself maintains the current value, and React typically accesses it using a ref, such as inputRef.current.value.

Controlled components provide more control over the form state, while uncontrolled components can be simpler when we don't need to react to every input change.


An uncontrolled component is a form element where the DOM is the source of truth instead of React state. We use defaultValue or defaultChecked to provide the initial value, and a ref such as useRef to access the DOM element and read its current value using ref.current.value. This avoids tracking every keystroke in React state and is useful for simple forms or one-off reads. File inputs are a common case because their value cannot be programmatically controlled like normal inputs. In contrast, controlled components use React state with the value prop and update that state through events such as onChange.
```js
function App() {
  const [checked, setChecked] = useState(false);
  const [country, setCountry] = useState("");

  return (
    <>
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />

      Accept terms
    </label>
    <select
      value={country}
      onChange={(e) => setCountry(e.target.value)}
    >
      <option value="">Select country</option>
      <option value="india">India</option>
      <option value="usa">USA</option>
      <option value="uk">UK</option>
    </select>
    </>
  );
}

// For text:  e.target.value

// For checkbox:  e.target.checked


import { useRef } from "react";

function LoginForm() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log({
      email,
      password
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>

        <input
          type="email"
          ref={emailRef}
          defaultValue=""
        />
      </div>

      <div>
        <label>Password:</label>

        <input
          type="password"
          ref={passwordRef}
        />
      </div>

      <button type="submit">
        Login
      </button>
    </form>
  );
}
```

# Explain PropTypes.
PropTypes is a runtime type-checking mechanism for React props provided by the prop-types package. We define validators on Component.propTypes, such as name: PropTypes.string.isRequired. During development, React can validate the component's incoming props against these validators and log warnings when the values don't match. PropTypes doesn't prevent incorrect values at runtime; it's mainly a development-time validation tool. In modern React applications, TypeScript is generally preferred because it provides static type checking before runtime.

# What is the difference between PropTypes and TypeScript?
PropTypes performs runtime validation of React props, usually in development, whereas TypeScript performs static type checking before the code runs. PropTypes can detect incorrect values at runtime, while TypeScript catches type errors during development/build time. In modern typed React applications, TypeScript is generally preferred because it provides broader static type safety, so PropTypes is often unnecessary.
```js

Component.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  active: PropTypes.bool,
  callback: PropTypes.func,
  user: PropTypes.object,
  items: PropTypes.array,
  anything: PropTypes.any,
  node: PropTypes.node,
  element: PropTypes.element,
};


import PropTypes from "prop-types";

<UserCard
  user={{
    name: "Priti",
    age: 25,
  }}
  skills={["JavaScript", "React", "Node"]}
  status="success"
/>

function UserCard({ user, skills, status }) {
  return (
    <div>
      <h2>{user.name}</h2>

      <p>Age: {user.age}</p>

      <p>Skills: {skills.join(", ")}</p>

      <p>Status: {status}</p>
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }).isRequired,

  skills: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,

  status: PropTypes.oneOf([
    "loading",
    "success",
    "error",
  ]).isRequired,
};

// shape() doesn't mean:
// "This object can contain ONLY these properties."
// It validates the specified properties.
// If you want stricter checking of extra properties, there's:
```


# What is props.children in React, and is it always an array?
props.children is the value React puts inside a component when that component is used with an opening and closing tag.
It is not a special JavaScript keyword. children is simply a property on the props object, with React/JSX determining what value gets assigned to it.


props.children is a special prop populated by React with whatever is placed between a component's opening and closing tags. For example, in <Card><h1>Hello</h1></Card>, the <h1> element becomes props.children inside Card. It is not always an array. A single child can be a single React element or another renderable value, while multiple children can represent multiple child values. Therefore, if I need to safely iterate or manipulate children, I can use utilities such as React.Children.map, React.Children.forEach, or React.Children.toArray.
```js
function Card(props) {
  return (
    <div className="card">
      {props.children}
    </div>
  );
}

function App() {
  return (
    <Card>
      <h1>Hello Priti</h1>
      <p>Welcome to React.</p>
    </Card>
  );
}
// props.children Represent a <h1> Hello </h1> and   <p>Welcome to React.</p>



function Layout({ children }) {
  return (
    <div>
      <header>
        <h1>My Website</h1>
      </header>

      <main>
        {children}
      </main>

      <footer>
        <p>Copyright 2026</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Layout>
      <h2>Dashboard</h2>
      <p>Welcome back!</p>
    </Layout>
  );
}

// React.Children Utilities
React.Children.map()
React.Children.forEach()
React.Children.count()
React.Children.toArray()
React.Children.only()


function Wrapper({ children }) {
  return (
    <div>
      {React.Children.map(children, child => (
        <div className="wrapper">
          {child}
        </div>
      ))}
    </div>
  );
}



function App() {
  const children = (
    <>
      <h1>Hello</h1>
      <p>World</p>
    </>
  );

  console.log(React.Children.count(children));  //count of children

  return null;
}
```

# Synthetic Events in React
Normally, the browser gives JavaScript a native event:
```js
// native event:
button.addEventListener("click", (event) => {
    console.log(event);
});
```
In React:
```js
function App() {
    function handleClick(event) {
        console.log(event);
         console.log("Type:", e.type);
        console.log("Target:", e.target);
        console.log("Current Target:", e.currentTarget);
           console.log("Native event:", e.nativeEvent);
    }

    return <button onClick={handleClick}>Click</button>;
}
```
The event received by handleClick is a React SyntheticEvent. 

# What is a SyntheticEvent in React, and how is it different from a native event?
A SyntheticEvent is React's wrapper around the browser's native event. It provides a consistent event interface across browsers and exposes common APIs such as target, currentTarget, preventDefault(), and stopPropagation().

React's event system handles the underlying native events and dispatches them to the appropriate React event handlers, using delegated event handling.

One important historical detail is that older React versions pooled SyntheticEvent objects. Because of pooling, asynchronous access to an event could require event.persist(). Starting with React 17, event pooling was removed, so event.persist() is generally no longer necessary.

```js
target
= original source of event

currentTarget
= element whose handler is running

function App() {
    function handleClick(e) {
        console.log("target:", e.target);
        console.log("currentTarget:", e.currentTarget);
    }

    return (
        <button onClick={handleClick}>
            <span>Click me</span>
        </button>
    );
}
```
This becomes extremely important when working with:

event bubbling
event delegation
nested elements
forms
click handlers


# Why do we use e.preventDefault() when handling form submission in React?

We use e.preventDefault() to prevent the browser's default form-submission behavior. Normally, submitting an HTML form can cause the browser to navigate to the form's action URL or reload the page. In React applications, we usually want to handle the submission ourselves—for example, validate the data, update state, or send it through fetch or Axios. Calling preventDefault() cancels that default browser action while allowing our onSubmit handler to continue executing.


# Handling Multiple Inputs in React

# How would you handle multiple form inputs using a single onChange handler?"
I would keep the form fields inside one object state and give each input a name attribute matching its state property. Then I can use a single onChange handler and dynamically update the corresponding property using a computed property name
.
If the email input triggers the event, e.target.name is "email" and e.target.value contains the new email. The spread operator preserves the other fields, while the computed property updates only the matching field.

I use the functional updater because the new object depends on the previous state, which makes the update safe when React batches multiple state updates.

```js
const [form, setForm] = useState({
  name: "",
  email: "",
  password: "",
  subscribed: false
});

// function handleChange(e) {
//   setForm(prev => ({
//     ...prev,
//     [e.target.name]: e.target.value// That's the key to handling multiple inputs with one handler.
//   }));
 function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  }

   return (
    <form>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
      />

      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />
 <label>
        <input
          name="subscribed"
          type="checkbox"
          checked={form.subscribed}
          onChange={handleChange}
        />

        Subscribe
      </label>

      <input
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
      />

      <p>Name: {form.name}</p>
      <p>Email: {form.email}</p>
    </form>
  );
}

// The square brackets mean:

// Evaluate this expression and use its result as the property name.

// This is called a computed property name.
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

# Why Does Hook Call Order Matter?
React doesn't identify hooks by variable names.

It relies on their consistent call order.
```js
function App() {
    const [count, setCount] = useState(0);

    const [name, setName] = useState("Priti");

    return <div>{count} {name}</div>;
}
// Hook #0 → count
// Hook #1 → name


// Wrong order 
function App() {
    if (someCondition) {
        const [count, setCount] = useState(0);
    }

    const [name, setName] = useState("Priti");
}
// Suppose first render:👇

someCondition = true

// React sees:👇
// Hook #0 → count
// Hook #1 → name

// Next render:👇
someCondition = false

// React sees:👇
// Hook #0 → name

// Now the Hook positions don't line up.
// That's why React's Rules of Hooks say:
```
# Don't mutate state directly
```js
const [user,setUser]= useState({
  name:"priti",
  age:25
});
function increasAge(){
  // After this 👇
  user.age++;   
  //The object changed, but its reference did not.
  setUser(user) // this is problematic  modifying the existing object  {name:"priti",age:25}--->  to -->  same object{name:"priti",age:26}
}

// Because user is still pointing to the same object.


// CREATE A NEW OBJECT
const newUser = {
  ...user,  // The spread copies the existing top-level properties:
  age: 26
};
setUser(newUser)

// Both can work in many situations.
// But the functional form is safer when the new state depends on the previous state.

function increasAge(){
  setUser(prev=>({
    ...prev,   // ...user  The spread copies the existing top-level properties:
    age:prev.age+1   // age:user.age+1
  }))
}
// Old Object ≠ New Object   React schedules a render.
// This matters because React state updates rely heavily on identity/reference comparisons when determining whether values have changed.


// Shallow copy 
const [user, setUser] = useState({
  name: "Priti",
  address: {
    city: "Delhi",
    pin: 110001
  }
});

setUser(prev => ({
  ...prev,
  address: {
    ...prev.address,
    city: "Mumbai"
  }
}));

// why do we need to spread both levels?
// Because:
{
  ...prev
}
// is only a shallow copy.
// It creates a new outer object but doesn't recursively clone nested objects.


function changeCity() {
  setUser(prev => {
    const newUser = {
      ...prev
    };

    newUser.address.city = "Mumbai";

    return newUser;
  });
}

//Both objects share the same nested address.
newUser.address.city = "Mumbai";
// actually mutates the old state's nested object.

// These methods mutate the array.👇
push()
pop()
splice()
reverse()
sort()

// Correct 
setNumbers(prev =>
  [...prev].sort((a, b) => a - b)
);

setUser(prev => ({
  ...prev,
  address: prev.address// still sharing the same address reference.
}));
```
# Why shouldn't you mutate React state directly?"
React state should be treated as immutable because mutating the existing object or array keeps the same reference and can prevent React and related optimizations from correctly recognizing what changed. Instead of modifying the existing state, we create a new object or array using techniques such as object spread, array spread, map, or filter. This also makes state updates predictable and avoids accidental mutation of previous state.


# Why does reference matter?
JavaScript objects and arrays are reference values. The variable doesn't contain the entire object; it refers to an object in memory. When I mutate the object, the reference remains the same. When I create a new object or array, the reference changes. React can use these identity changes as part of its state-update and rendering optimizations.

 #  State Object Is Not Automatically Merged
```js
const [user,setUser]= useState({
  name:"priti",
  age:25
})

// This  
setUser({
  name:"vipin"
})// Does not produce:👇 

{
  name:"vipin",
  age:25
}
//Instead the state becomes:👇 
{
  name:"vipin"
}

// SO USE  
setUser({
  ...user,
  name:"vipin"
})

setUser(prev => ({
    ...prev,
    name: "Rahul"
}));
```

# useState vs Normal JavaScript Variable
```js
function counter (){
  let  count =0;
  function increment(){
    count++;
    console.log(count)
  }
  return <button onClick={increment}>+</button>
}

// Every Time The component Renders:👇 
let count =0  // Runs again.   
// So the Value is not persistent across renders 

//That's by  React stores the state outside the ordinary local variable lifecycle of that particular function execution.

// Normal variable

// render
//  ↓
// create variable
//  ↓
// destroy after execution


// useState

// render
//  ↓
// retrieve Hook state
//  ↓
// use it
//  ↓
// store it for next render
```

**Updating State**
Direct value Normal update 
```js
setCount(count + 1);  //Here you're saying : Take the count value from this render and set the next state to count + 1.
```
***Functional update**  
When the new state depends on the previous state, prefer:

Functional updates are a way of updating React state by passing a function to the state setter. The function receives the previous state value and returns the new state value.

We use functional updates when the next state depends on the previous state. Instead of passing a value like setCount(count + 1), we pass an updater function like setCount(prev => prev + 1). React can then apply that function to the latest state when processing the update queue. This is especially important with batched updates, multiple state updates in the same event, and asynchronous callbacks where the state captured by a closure can become stale.

```js
// When you call : 👉setCount((prevCount) => prevCount + 1)  ==>  React doesn't immediately replace the state with a value.   Instead, conceptually, it puts an update function into an update queue:
setCount((prevCount) => prevCount + 1); // React, when processing this update, give me the latest state value and I'll calculate the next value from it

Update Queue

[
   prev => prev + 1
]
// If you call it three times:
Update Queue
[
  prev => prev + 1,
  prev => prev + 1,
  prev => prev + 1
]

// When React processes the queue:
state = 0
        ↓
update 1
prev = 0
next = 1
        ↓
update 2
prev = 1
next = 2
        ↓
update 3
prev = 2
next = 3

// Final :  State = 3 

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


// Normal update:
// setState(value)

// "Set state to this value."


// Functional update:
// setState(prev => newValue)

// "Calculate the next state from the latest state."
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

# State Is Preserved Even Though the Component Function Runs Again
```js
function Counter() {
    const [count, setCount] = useState(0);

    console.log("Component rendered");

    return (
        <button onClick={() => setCount(count + 1)}>
            {count}
        </button>
    );
}
// After clicking ":  Component function runs again

// So why don't   useState(0)   reset count back to 0?
// Because 0 is the initial value, not a command saying :  Reset state to zero every render.

// React uses the existing Hook state on subsequent renders.

// FIRST RENDER :👇 
// useState(0)
//      ↓
// No existing state
//      ↓
// Create state = 0


// SECOND RENDER:👇 
// useState(0)
//      ↓
// Existing Hook found
//      ↓
// Reuse existing state
//      ↓
// count = 1

// SO:👇 
Initial value
      ≠ NOT EQUAL
Value assigned on every render
```


# Lazy Initial State 
Lazy initialization means passing a function to useState instead of passing the initial value directly. For example, useState(() => expensiveComputation()). React can invoke this initializer when the state is initially created and store the returned value. On subsequent renders, React uses the stored state instead of recalculating the initial value. This is useful when calculating the initial state is expensive, such as parsing large data or reading and processing localStorage. It improves performance by avoiding unnecessary computation during re-renders

You can give  useState a function :
```js
const [value,setValue]= useState(()=>expensiveCalculation())//gives React an initializer function that React can use for initial state initialization.

// Instead of :
const [value,setValue]= useState(expensiveCalculation())// calls the function while evaluating the argument.

// Without lazy initillization
function App() {
    const [theme, setTheme] = useState(
        JSON.parse(localStorage.getItem("theme"))
    );

    return (
        <button onClick={() => setTheme("light")}>
            {theme}
        </button>
    );
}
// This:👉  JSON.parse(localStorage.getItem("theme"))     is evaluated every time App() executes.

// So :
// Render 1
//  ↓
// localStorage.getItem()
//  ↓
// JSON.parse()

// Render 2
//  ↓
// localStorage.getItem()
//  ↓
// JSON.parse()

// Render 3
//  ↓
// localStorage.getItem()
//  ↓
// JSON.parse()


// With Lazy initiallization
// React uses it for initial state calculation rather than recalculating the initial state on every render."
function App() {
    const [theme, setTheme] = useState(() => { 
      //React uses it for initial state calculation rather than recalculating the initial state on every render."
        const savedTheme = localStorage.getItem("theme");
        return savedTheme
            ? JSON.parse(savedTheme)
            : "light";
    });
    return (
        <button onClick={() => setTheme("dark")}>
            {theme}
        </button>
    );
}

// First initialization
//        ↓
// run initializer
//        ↓
// store result

// Later renders
//        ↓
// reuse stored state


// First render
//     ↓
// initializer()
//     ↓
// localStorage.getItem()
//     ↓
// JSON.parse()
//     ↓
// Store "dark"

// Future render
//     ↓
// Use stored "dark"
```

```js
Function invocation vs function reference

Invocation
calculate()
means: Execute it now.


Reference
calculate; 

means:  Here is the function itself.

Lazy initialization relies on giving React a function rather than immediately executing the expensive computation.
```

# What is React batching ?
React batching is the process of grouping multiple state updates into a single render. This improves performance by reducing unnecessary renders. In modern React 18, automatic batching also applies to updates originating from many asynchronous contexts, such as promises, timeouts, and native event handlers when using the modern root API.

Multiple state updates → React groups them → fewer renders.

# What is automatic batching in React 18, and how is it different from React 17?
Automatic batching means React groups multiple state updates that occur within the same update cycle and processes them together, resulting in fewer renders. In React 18, automatic batching was expanded so that updates are batched not only inside React event handlers but also in asynchronous contexts such as promises, timeouts, and other callbacks.

For example, if a timeout contains two setState calls, React 18 can batch them into a single render instead of rendering once for each update. If I need to force an update to be applied synchronously rather than batched, React provides flushSync.

However, batching does not change the fundamental behavior of state snapshots. If multiple updates depend on previous state, I should use the functional updater form, such as setCount(c => c + 1), to correctly compose the updates.

**Batching Does NOT Mean State Changes Immediately**
```js
// React can batch updates so multiple updates can be processed together.
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

# useEffect
useEffect is a React Hook used to synchronize a component with external systems such as APIs, timers, browser APIs, event listeners, subscriptions, or other non-React code. The Effect callback is executed after React commits the UI.

If there is no dependency array, the Effect runs after every completed render. If the dependency array is empty, it runs after the initial mount for that component instance. If dependencies are provided, React compares each dependency with its previous value using Object.is(), and the Effect re-runs when at least one dependency changes.

An Effect can return a cleanup function. React runs that cleanup before running the Effect again when dependencies change, and when the component unmounts. This is important for removing event listeners, clearing timers, cancelling subscriptions, and cleaning up external resources.

cleanup runs before a changed effect runs again and when the component unmounts,

**Dependency Array**
**No dependency array**
```js

// A side effect is an operation that intracts with something outside  the component

// fetch("/users")
// localStorage.setItem("theme","dark");
// document.title="hello";
// setTimeout(...);
// window.addEventListener(...)

useEffect(() => {
  console.log("Effect runs after every committed render");// Runs after every completed render.
});
```
**Empty dependency array**
On the initial render there is no previous dependency list, so React schedules the Effect. React then remembers the dependency list. On later renders there are no dependencies whose values can change, so the Effect doesn't re-run while that component instance remains mounted.
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


# When exactly does the cleanup function of useEffect run?"
The cleanup function runs before the next execution of that effect when its dependencies have changed, and when the component unmounts. It is used to undo or release resources created by the previous effect, such as timers, event listeners, subscriptions, sockets, or in-flight requests. React runs the previous cleanup before starting the new effect.


# Does cleanup run after every render?
No. Cleanup is associated with an effect execution. If the dependencies haven't changed, React doesn't need to re-run that effect, so it doesn't run its cleanup just because a render occurred.

# Does cleanup automatically prevent all memory leaks?
No.
Cleanup helps release resources that your effect created or subscribed to.
Without cleanup, the timer can remain active after the component is gone.


# Why do we need to include dependencies in useEffect?
We include every reactive value that the effect reads because React components create a new closure on every render. If a reactive value is omitted from the dependency array, React may not re-run the effect when that value changes, so the effect can continue using a closure containing an outdated value. The dependency array tells React which values should cause the effect to be synchronized again. React compares dependencies between renders using Object.is(). When any dependency changes, React runs the previous cleanup and then runs the new effect after commit.

# useLayoutEffect
useEffect is used for normal side effects and is scheduled so that it doesn't block the browser's paint. useLayoutEffect runs synchronously after React has committed DOM mutations but before the browser paints.

Therefore, I use useLayoutEffect when I need to synchronously read or modify the DOM, such as measuring an element's dimensions or positioning something, where doing it after paint could cause visible flickering.

For most side effects such as API calls, subscriptions, timers, logging, and updating external systems, I prefer useEffect because it doesn't unnecessarily block rendering.

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


# ⚛️ Race Conditions in JavaScript + React useEffect
# How would you prevent a race condition in useEffect when fetching data based on a changing dependency?
When an effect depends on a changing value such as a search query or user ID, a previous asynchronous request can finish after a newer request and overwrite the state with stale data.

I prevent this by using the effect's cleanup function. One approach is to create a local cancelled flag inside each effect invocation. The cleanup sets it to true, and the async callback checks the flag before calling setState.

Because the flag is local to the effect, each effect invocation has its own closure.

For fetch, I can also use AbortController and call abort() from the cleanup function, which cancels the previous request.
```js
useEffect(() => {
  let cancelled = false;

  fetch(`/api/users?q=${query}`)
    .then(res => res.json())
    .then(data => {
      if (!cancelled) {
        setUsers(data);
      }
    });

  return () => {
    cancelled = true;
  };
}, [query]);
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

# What is the difference between useRef and useState?
useState is used for data that affects the rendered UI. Updating state schedules a re-render, and React manages the state across renders.

useRef returns a stable mutable object with a .current property. Updating .current does not trigger a re-render. Because the ref object persists across renders, it can be used to store DOM references or mutable values such as timer IDs, previous values, or external library instances.

For DOM access, React assigns the DOM node to ref.current during the commit process after the element has been mounted.


# Why do we need forwardRef in React?
ref is treated specially by React and isn't automatically passed through function components like normal props. When we create reusable components such as an Input or Button, the parent may need imperative access to the underlying DOM node—for example, to call focus(). React.forwardRef allows the component to receive the parent's ref as a second argument and attach it to the desired child DOM element.
```js
// forwardRef allows a parent to pass a ref through a function component so the child can attach that ref to a specific DOM element, enabling imperative operations like focus() on reusable components.
const Input = forwardRef((props, ref) => {
  return <input ref={ref} />;
});

// app.js
const ref = useRef(null);

<Input ref={ref} />;

ref.current.focus();
```


# What is useImperativeHandle?
useImperativeHandle lets a child component customize what value is exposed to a parent through a ref.

useImperativeHandle is used with refs to customize the value exposed by a child component to its parent. Normally a DOM ref can expose the DOM element, but with useImperativeHandle, the child can expose only selected methods such as focus, reset, or scroll. forwardRef allows the ref to reach the child, while useImperativeHandle defines the child's public imperative API. Internally, the exposed methods can use closures and internal refs to interact with the child's implementation while keeping that implementation encapsulated.

```js
useImperativeHandle(ref, () => ({
    focus() {
        inputRef.current.focus();
    },

    reset() {
        inputRef.current.value = "";
    }
}));


ref.current = {
    focus: ...,
    reset: ...
};
```

let's child build a custom input 
```js
import {
    forwardRef,
    useImperativeHandle,
    useRef
} from "react";

const CustomInput = forwardRef(function CustomInput(props, ref) {

    const inputRef = useRef(null);

    useImperativeHandle(ref, () => ({

        focus() {
            inputRef.current.focus();
        },

        clear() {
            inputRef.current.value = "";
        },

        select() {
            inputRef.current.select();
        }

    }));

    return (
        <input
            ref={inputRef}
            defaultValue="Hello World"
        />
    );
});

// App.js parent
function App() {

    const inputRef = useRef(null);

    return (
        <>
            <CustomInput ref={inputRef} />

            <button onClick={() => inputRef.current.focus()}>
                Focus
            </button>

            <button onClick={() => inputRef.current.clear()}>
                Clear
            </button>

            <button onClick={() => inputRef.current.select()}>
                Select
            </button>
        </>
    );
}
```

# What is a callback ref, and when is it called?
A callback ref is a function passed to the ref prop instead of a ref object. React calls the function with the DOM node when the node is attached, and calls it with null when the node is detached. It is useful when we need to perform custom logic when a DOM element becomes available or is removed. Callback refs are handled during React's commit process, when React is applying DOM changes and attaching refs.
```js
function App() {
  return (
    <input
      ref={(node) => {
        if (node) {
          node.focus();
        }
      }}
    />
  );
}
```
Don't forget null

A common mistake is:

<input
  ref={(node) => {
    node.focus();
  }}
/>

This assumes node always exists.
But React can call:
callback(null);
when the ref is detached.
Therefore, safer code is:
```js
<input
  ref={(node) => {
    if (node) {
      node.focus();
    }
  }}
  // or 
  ref={(node) => {
  node?.focus();
}}
/>
```
Because:
null.focus()

causes:
TypeError
```js
function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <button onClick={() => setShow(!show)}>
        Toggle
      </button>

      {show && (
        <input
          ref={(node) => {
            if (node) {
              console.log("Mounted:", node);
            } else {
              console.log("Unmounted");
            }
          }}
        />
      )}
    </>
  );
}
```
# Explain callback refs in React
A callback ref is a function passed to the ref prop. React calls that function with the DOM node when the element is attached, and with null when the element is detached. This is useful when I need to perform custom logic exactly when a DOM node becomes available or unavailable. Unlike an object ref such as useRef, where React stores the node in ref.current, a callback ref gives me the node directly. Callback refs are handled during React's commit process, after React has applied the relevant DOM changes. I also need to be careful about callback identity because an inline callback creates a new function on each render, which can cause ref detach/attach behavior.

# What is React.memo, how does it work, and when would you use it?
React.memo is a higher-order component used to memoize a functional component. It allows React to skip rendering the component when its props are unchanged according to a shallow comparison.

React compares the previous and next props, conceptually using Object.is for individual prop values. Primitive values are usually straightforward, but objects, arrays, and functions are compared by reference.

Therefore, if a parent recreates an object or function on every render, React.memo may not prevent the child from rendering. In those cases, useMemo can preserve object or array references, while useCallback can preserve function references.

React.memo is useful when a component renders frequently, its rendering is relatively expensive, and it often receives the same props.

It is a performance optimization, not a guarantee that the component will never render. The component can still update because of its own state or relevant context changes.



# useMemo
useMemo is a React Hook that memoizes (caches) the result of a calculation and recomputes it only when its dependencies change.

useMemo is a React Hook used to memoize the result of a computation between renders. It accepts a function and a dependency array. On the initial render, React executes the function and stores the result. On subsequent renders, React compares the dependencies using Object.is semantics. If the dependencies haven't changed, React returns the previously calculated value; otherwise, it recalculates the value.

I would use useMemo primarily when a calculation is expensive or when I need to preserve the reference identity of an object or array passed to a memoized child. I wouldn't use it everywhere because memoization itself has overhead and makes code more complex. It should be used when it provides a measurable or meaningful performance benefit.
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

# What is the difference between useMemo and useCallback?"
useMemo memoizes a computed value, whereas useCallback memoizes a function reference.

useMemo is useful when an expensive calculation should not be repeated unnecessarily:

const result = useMemo(() => expensiveCalculation(data), [data]);

useCallback is useful when I want to preserve the identity of a function between renders:

const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);

This is especially useful when passing callbacks to a child component wrapped in React.memo, because without useCallback, a new function reference would normally be created on every parent render.

Both use dependency arrays to determine when the memoized value/reference should be updated.

# useCallback  >>> useCallback memoizes the function reference, not the result of calling the function.

useCallback is a React Hook that memoizes a function reference and returns the same function between renders until one of its dependencies changes.

useCallback memoizes a function reference so that the same function object can be reused across renders until its dependencies change.

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

# What is Referential Equality?
JavaScript compares primitive values by value, but objects, arrays, and functions by reference.
This becomes extremely important in React because React.memo, useMemo, and useCallback depend heavily on whether a reference stayed the same.

There are two major kinds of values in JavaScript.
Primitive values
```js
const a = 10;
const b = 10;

console.log(a === b); // true
```
Objects / Arrays / Functions

These are reference values.
```js
const a = {};
const b = {};

console.log(a === b); // false  becquse a and b point to the different object 


// Objects are equal only when both variables refer to the same object.
const user1 = {
    name: "Priti"
};

const user2 = user1;

console.log(user1 === user2); // true  Both variables point to the same object.


// Arrays Follow the Same Rule
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

console.log(arr1 === arr2); // false


const arr1 = [1, 2, 3];
const arr2 = arr1;

console.log(arr1 === arr2); // true
```
Functions Also Follow Referential Equality
```js
const fn1 = function () {};
const fn2 = function () {};

console.log(fn1 === fn2); // false
```

# Mutation vs New Object
```js
const user = {
    name: "Priti",
    age: 25
};

const sameUser = user;

user.age = 26;

console.log(user === sameUser); // true
console.log(sameUser.age);      // 26

// Why?  Because:

// sameUser = user;

// doesn't copy the object.

// It copies the reference.


// The spread creates a new object only top level properties

const user1 = {
    name: "Priti"
};

const user2 = {
    ...user1
};

console.log(user1 === user2); // false
```

useMemo Solves Object Reference Instability
```js
function App() {
    const [count, setCount] = useState(0);

    const user = useMemo(() => {
        return {
            name: "Priti"
        };
    }, []);

    return (
        <>
            <button onClick={() => setCount(count + 1)}>
                {count}
            </button>

            <Child user={user} />
        </>
    );
}
// Now React can preserve the memoized value between renders when its dependencies don't change.
```

useCallback Is the Same Idea for Functions
```js
function App() {
    const handleClick = useCallback(() => {
        console.log("clicked");
    }, []);

    return <Child onClick={handleClick} />;
}
```
# Explain referential equality and why it matters in React."
"Referential equality means comparing whether two variables refer to the exact same object, array, or function. JavaScript primitives are compared by value, while objects, arrays, and functions are compared by reference. So two separately created objects with identical contents are not equal using ===.

This matters in React because every render can create new object and function references. APIs like React.memo, useMemo, and useCallback rely on stable references to make memoization effective. useMemo can preserve a computed value's reference, useCallback can preserve a function reference, and React.memo can skip a child render when its props haven't changed according to its comparison. Therefore, understanding referential equality is essential for understanding React performance optimization."

# Why does {} === {} return false in JavaScript?
Objects, arrays, and functions are reference values in JavaScript. When using strict equality (===), JavaScript does not compare the contents of two separate objects. It checks whether both operands refer to the same object in memory. Since {} creates a new object each time, the two object literals have different references, so {} === {} is false. If two variables point to the same object, the comparison is true.

# === vs Object.is()
This is especially important because React uses Object.is() for dependency comparison.
For most normal objects:
```js
Object.is({}, {}) // false

Object.is([], []) // false

Object.is(() => {}, () => {}) // false

// Same reference:

const obj = {};

Object.is(obj, obj); // true

// The interesting differences between === and Object.is() are mainly primitives:
NaN === NaN
// false

Object.is(NaN, NaN)
// true
0 === -0
// true

Object.is(0, -0)
// false
```

# Why shouldn't we use useMemo, useCallback, and React.memo everywhere?
Memoization itself has a cost. useMemo and useCallback require React to retain cached values and dependencies and compare dependencies on subsequent renders. React.memo requires React to compare props to determine whether it can skip rendering. If the computation or component render is already cheap, these comparison and maintenance costs may provide little or no benefit. Memoization is most useful when profiling shows expensive work that can actually be skipped and the inputs remain stable enough for the cache to be effective. Otherwise, unnecessary memoization increases complexity and can make the code harder to understand. Therefore, I would optimize based on measurements rather than memoizing everything by default.


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

```js
const initialState = {
    name: "",
    email: "",
    password: "",
    isLoading: false,
    error: null
};

function reducer(state, action) {
    switch (action.type) {

        case "SET_FIELD":
            return {
                ...state,
                [action.field]: action.value
            };

        case "SUBMIT_START":
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case "SUBMIT_SUCCESS":
            return {
                ...state,
                isLoading: false
            };

        case "SUBMIT_ERROR":
            return {
                ...state,
                isLoading: false,
                error: action.error
            };

        default:
            return state;
    }
}


function Form() {
    const [state, dispatch] = useReducer(
        reducer,
        initialState
    );

    function handleChange(e) {
        dispatch({
            type: "SET_FIELD",
            field: e.target.name,
            value: e.target.value
        });
    }

    return (
        <form>
            <input
                name="name"
                value={state.name}
                onChange={handleChange}
            />

            <input
                name="email"
                value={state.email}
                onChange={handleChange}
            />

            <input
                name="password"
                value={state.password}
                onChange={handleChange}
            />

            {state.error && <p>{state.error}</p>}

            <button disabled={state.isLoading}>
                Submit
            </button>
        </form>
    );
}
```

# What is useReducer, and when would you use it instead of useState?
useReducer is a React Hook used to manage state through a reducer function. It returns the current state and a dispatch function:

const [state, dispatch] = useReducer(reducer, initialState);

The reducer is a pure function that receives the current state and an action and returns the next state:

nextState = reducer(state, action);

When we call dispatch(action), React schedules an update, invokes the reducer with the current state and action, and uses the returned state for the next render.

I prefer useReducer when state has multiple related values or complex transitions, because it centralizes state-update logic and makes the possible state transitions explicit.

The reducer should not mutate the existing state. It should return a new state object when something changes."


# Action Objects — useReducer & Complex State
An action object is a plain JavaScript object that describes what happened.

# What is an action in useReducer, and why do we use type and payload?
An action is a plain JavaScript object that describes an event or state change we want to perform. Conventionally, it contains a type property that identifies what happened and an optional payload containing additional data needed by the reducer. When we call dispatch(action), React passes the action to the reducer along with the current state. The reducer examines action.type, performs the appropriate state transition, and returns the new state. This separates the description of an event from the logic that changes the state and makes complex state management more predictable and easier to maintain.

```js
dispatch({
  type: "INCREMENT",
  payload: 5
});

Here:

Action
  ↓
{
  type: "INCREMENT",
  payload: 5
}
// The action does not normally change the state itself.
Instead:

dispatch(action)
      ↓
   reducer
      ↓
(currentState, action)
      ↓
   newState
      ↓
   React re-render


It commonly contains:

type

Describes what happened.

type: "INCREMENT"
payload

Contains additional information needed to perform the state transition.

payload: 5

The payload is optional.

So this is also valid:

{
  type: "RESET"
}

{
  type: "ADD_TODO",
  payload: {
    id: 1,
    text: "Learn reducers"
  }
}
```


# Why use useReducer + Context instead of just Context or useState?"
Context and useReducer solve different problems. Context is primarily a mechanism for sharing values across a component tree without prop drilling, while useReducer provides a structured way to manage complex state transitions. When combined, the Provider owns the reducer state and exposes both the current state and dispatch through Context. Consumers can then read the shared state and dispatch actions without passing props through intermediate components. This is useful for medium-sized application state where we want predictable state transitions without introducing Redux.


However, Context + useReducer is not automatically better than Redux. Context itself doesn't provide advanced state-management features such as middleware, devtools, or sophisticated subscription behavior. Also, when the Context value changes, consumers of that context can re-render, so large applications may need optimization or a more specialized state-management solution.

```js
import {
  createContext,
  useContext,
  useReducer
} from "react";

const CartContext = createContext();

const initialState = {
  items: []
};

function cartReducer(state, action) {
  switch (action.type) {

    case "ADD_ITEM":
      return {
        ...state,
        items: [
          ...state.items,
          action.payload
        ]
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter(
          item => item.id !== action.payload
        )
      };

    case "CLEAR_CART":
      return {
        ...state,
        items: []
      };

    default:
      return state;
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(
    cartReducer,
    initialState
  );

  return (
    <CartContext.Provider
      value={{ state, dispatch }}
    >
      {children}
    </CartContext.Provider>
  );
}

function Product() {
  const { dispatch } = useContext(CartContext);

  const product = {
    id: 1,
    name: "Laptop",
    price: 50000
  };

  function addToCart() {
    dispatch({
      type: "ADD_ITEM",
      payload: product
    });
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <button onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

function Cart() {
  const { state, dispatch } =
    useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>

      {state.items.map(item => (
        <div key={item.id}>
          {item.name}

          <button
            onClick={() =>
              dispatch({
                type: "REMOVE_ITEM",
                payload: item.id
              })
            }
          >
            Remove
          </button>
        </div>
      ))}

      <button
        onClick={() =>
          dispatch({ type: "CLEAR_CART" })
        }
      >
        Clear
      </button>
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <Product />
      <Cart />
    </CartProvider>
  );
}

export default App;
```


# Lazy Initialization in useReducer
The third argument enables lazy initialization: React calls init(initialArg) to create the initial state, which is useful for expensive initialization and keeps initialization logic separate from reducer update logic.

Normally you can write:
```js
const [state, dispatch] = useReducer(reducer, initialState);
```
Here, React takes initialState directly as the initial state.

But sometimes calculating the initial state is expensive:
```js
const [state, dispatch] = useReducer(
  reducer,
  initialValue,
  init
);
```
The third argument is the initializer function.
```js
function init(initialCount) {
  return {
    count: initialCount * 10
  };
}

const [state, dispatch] = useReducer(
  reducer,
  5,
  init
);
```
Why "lazy"?

Because instead of calculating the state value before calling useReducer, you give React a function that can calculate it when initialization actually happens.

```js
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1
      };

    case "decrement":
      return {
        count: state.count - 1
      };

    default:
      return state;
  }
}

function init(initialCount) {
  const savedCount = localStorage.getItem("count");

  return {
    count: savedCount !== null
      ? Number(savedCount)
      : initialCount
  };
}

function Counter() {
  const [state, dispatch] = useReducer(
    reducer,
    0,
    init
  );

  return (
    <div>
      <h1>{state.count}</h1>

      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +
      </button>
    </div>
  );
}
```
# Why would you use the third argument of useReducer instead of calculating the initial state directly?

The third argument provides a lazy initializer function. React calls init(initialArg) to calculate the initial state during initialization. This is useful when creating the initial state involves expensive computation or external initialization logic such as reading from localStorage. The important difference is that the initializer is used to create the initial state, while the reducer handles subsequent state updates. The initializer is not normally called for every dispatch.


# What are the Rules of Hooks?
There are two main rules.

Rule 1 — Only call Hooks at the top level

Don't call Hooks inside:

if
else
for
while
nested functions
callbacks
try/catch/finally
conditions/early-return paths that can change whether a Hook is called
```js
function Counter() {
    const [count, setCount] = useState(0);

    return <button>{count}</button>;
}
```
Rule 2 — Only call Hooks from React functions

Hooks should be called from:

React functional components
Custom Hooks
```js
function useCounter() {
  
    const [count, setCount] = useState(0);

    function increment() {
        setCount(c => c + 1);
    }

    return {
        count,
        increment
    };
}

function App() {
    const [count, increment] = useCounter();

    return <button onClick={increment}>
            {count}
        </button>
}
```
# Why can't React Hooks be called conditionally?
React Hooks cannot be called conditionally because React relies on the consistent order of Hook calls between renders to associate each Hook call with its stored state and other Hook data. If a Hook is called conditionally, the number or order of Hooks can change between renders. Then React may associate the current Hook call with the wrong previously stored Hook data. Therefore Hooks must always be called at the top level of a component or custom Hook, in the same order on every render.
```js
function App({ loggedIn }) {

    if (loggedIn) {
        const [user, setUser] = useState(null);
    }

    const [count, setCount] = useState(0);

    return <div>{count}</div>;
}

Render 1:
loggedIn = true

Hook #0 → user
Hook #1 → count


Render 2:
loggedIn = false

Hook #0 → count

The Hook order changed.

Therefore:
❌ Unstable Hook order
        ↓
❌ Wrong Hook association
        ↓
❌ React cannot reliably preserve Hook state
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

# What is a Custom Hook, and how is its state isolated between components?"


A custom Hook is a JavaScript function whose name starts with use and that uses one or more React Hooks internally. It allows us to extract and reuse stateful or effect-related logic across multiple components without duplicating that logic.

The important point is that the logic is shared, but the state is not. Every component that calls the custom Hook gets its own Hook state because React associates Hook state with that component's Fiber and Hook call order.

For example, if both ComponentA and ComponentB call useCounter(), they use the same counter logic, but each gets an independent count state.

Custom Hooks therefore provide logic reuse, not state sharing.


# How would you implement a usePrevious custom Hook?
usePrevious is a custom React Hook used to remember the value from the previous render.

I would use useRef to persist a mutable value across renders and useEffect to update that ref after the render is committed.

During rendering, ref.current still contains the value from the previous render, so I return it. After the render, the effect stores the current value into ref.current. On the next render, that stored value becomes the previous value.

usePrevious works because useRef persists a mutable value across renders, while useEffect updates that ref after the current render commits; therefore, during the next render, ref.current still contains the previous render's value.
```js
function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}


function Counter() {
  const [count, setCount] = useState(0);

  const previousCount = usePrevious(count);

  return (
    <div>
      <h2>Current: {count}</h2>
      <h2>Previous: {previousCount}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```


# What is useDebounce?
useDebounce is a custom React Hook that delays updating a value until the user has stopped changing it for a specified amount of time.

# What is debouncing?

Debouncing delays execution until a specified period has passed without another trigger. In React, a useDebounce hook commonly uses useState, useEffect, setTimeout, and cleanup with clearTimeout to delay a value update.

#  Why use debounce in search?

To prevent an API request for every keystroke. The API call happens only after the user pauses typing for the specified delay.

# Why do we use clearTimeout?

To cancel the timer created for the previous value. Otherwise, multiple timers would eventually execute.
```js

import { useEffect, useState } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

function SearchBox() {
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);
   useEffect(() => {
    if (!debouncedSearch) return;

    async function fetchUsers() {
      const response = await fetch(
        `/api/users?search=${debouncedSearch}`
      );

      const data = await response.json();

      console.log(data);
    }

    fetchUsers();
  }, [debouncedSearch]);

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <p>Typed: {search}</p>

      <p>Debounced: {debouncedSearch}</p>
    </div>
  );
}
```

clearTimeout is required because every time the input value changes, the effect creates a new timer. If we don't cancel the previous timer, all previously scheduled callbacks will eventually execute, causing multiple state updates or API calls. The cleanup function cancels the previous timer before React runs the effect again. Therefore, only the timer associated with the latest value remains active after the user stops typing.



#  useFetch Hook custom hook
useFetch is a custom hook that encapsulates API-fetching logic so multiple components can reuse the same behavior.

# How would you implement a useFetch custom hook, and how would you prevent race conditions?
I would create a custom hook that maintains data, loading, and error using useState. I would perform the API request inside useEffect, because fetching is a side effect and shouldn't happen during rendering.

I would put the URL in the effect's dependency array so that changing the URL triggers a new request.

To prevent an old request from affecting the UI after the URL changes or the component unmounts, I would create an AbortController inside the effect and pass its signal to fetch. The cleanup function calls controller.abort().

I would also handle AbortError separately so that intentional request cancellation isn't treated as an application error.

For manual refetching, I can maintain a refresh counter and include it in the effect dependencies. Calling refetch increments that counter, causing the effect to execute again.
```js
import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [refreshIndex, setRefreshIndex] = useState(0);

  const refetch = useCallback(() => {
        setRefreshIndex(prev => prev + 1);
    }, []);

    useEffect(() => {
      // const controller = new AbortController();
        fetch(url)
            .then(res => res.json())
            .then(result => {
                setData(result);
            })
            .catch(err => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url,refreshIndex]);

    return {
        data,
        loading,
        error,
        refetch
    };
}


// usage
function Users() {
    const {
        data,
        loading,
        error,
        refetch
    } = useFetch("/api/users");

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return (
            <div>
                <p>{error.message}</p>
                <button onClick={refetch}>
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div>
            <button onClick={refetch}>
                Refresh
            </button>

            {data?.map(user => (
                <p key={user.id}>
                    {user.name}
                </p>
            ))}
        </div>
    );
}
```

# How would you implement a useLocalStorage custom hook?
useLocalStorage is a custom hook that synchronizes React state with browser localStorage. On initialization, I use a lazy useState initializer to read the existing value from localStorage. Since localStorage stores strings, I use JSON.parse() to convert the stored string back into a JavaScript value, and I wrap parsing in try...catch so malformed storage doesn't crash the component. Then I use useEffect to synchronize localStorage whenever the state or key changes, using JSON.stringify() before writing. Finally, I return [value, setValue], matching the useState API.

```js
import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);

    if (storedValue !== null) {
      return JSON.parse(storedValue);
    }

    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(
      key,
      JSON.stringify(value)
    );
  }, [key, value]);

  return [value, setValue];
}

function App() {
  const [name, setName] = useLocalStorage(
    "name",
    "Priti"
  );

  return (
    <div>
      <h1>Hello {name}</h1>

      <button onClick={() => setName("Vipin")}>
        Change Name
      </button>
    </div>
  );
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

# What is createContext() and what is the purpose of its default value?
React.createContext() creates a Context object that allows data to be shared with components in a subtree without explicitly passing props through every intermediate component.

The value is normally supplied by a matching Context Provider. The defaultValue passed to createContext() is only used when a component consumes that context and there is no matching Provider above it in the component tree.

If a Provider exists, React uses the Provider's value, even if that value is undefined or null.

The default value is particularly useful for providing a fallback and for testing consumers in isolation.

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

#  How does React Context Provider know which components need to re-render when the Context value changes?

A Context Provider associates a value with a Context for a subtree. When a component calls useContext(Context), React records that the component depends on that Context. When the Provider's value changes by identity, React can propagate the Context update through the component tree and schedule the dependent consumers for update. Therefore, consumers subscribed to that Context can re-render when the Provider value changes.


# What is useContext?

useContext lets a component read a value from React Context without manually passing props through every intermediate component.
```js
const ThemeContext = createContext("light");

function Button() {
  const theme = useContext(ThemeContext);

  return <button className={theme}>Click</button>;
}

```

# What is the difference between Context API and useContext?
Context API is the overall mechanism for sharing values through a React component tree without passing props through every intermediate component. createContext creates the context, a Provider supplies the value, and useContext allows a functional component to read and subscribe to that context. useContext itself doesn't create or manage the state; it consumes the value provided by the nearest matching Provider. When the context value changes, components consuming that context can re-render.


# Why does a component re-render when a Context value changes, even if it only uses one property of the context?
A component that calls useContext subscribes to that context. When the Provider's value changes, React schedules the consuming component for an update. React doesn't automatically track which individual properties of the context value the component reads. So if the context contains {user, theme} and only theme changes, a component consuming the context can still re-render even if it only uses user. To reduce unnecessary re-renders, we can split the context into multiple contexts, stabilize the provider value with useMemo when appropriate, or use a context-selector pattern.
```js
import {
  createContext,
  useContext,
  useMemo,
  useState
} from "react";

const AppContext = createContext();

function App() {
  const [user, setUser] = useState({
    name: "Priti"
  });

  const [theme, setTheme] = useState("dark");

  const value = useMemo(() => {
    return {
      user,
      theme
    };
  }, [user, theme]);

  return (
    <AppContext.Provider value={value}>
      <Profile />
      <ThemeButton />
    </AppContext.Provider>
  );
}
```

Context re-renders happen because useContext makes a component dependent on the context value; when the Provider's value changes, React schedules its consumers for updates, without automatically selecting only the properties each consumer reads.

# State Lifting in React
If two or more components need to share the same state, move that state to their closest common parent and pass the state down through props and updates up through callback functions.
       Parent
        /      \
  Child A  Child B

  State lifting is the process of moving shared state from child components to their closest common ancestor. We do this when multiple components need to read or modify the same piece of data. The common parent becomes the single source of truth, passes the current state down through props, and passes callback functions down so children can request state updates. When the parent updates the state using setState, React schedules a re-render and the updated value flows back down to the children.

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
# Why not use index as key?
An index represents the item's position, not its identity. If items are inserted, deleted, filtered, or reordered, the indexes can change. React may then associate an existing component with a different data item, which can cause incorrect state preservation and unnecessary DOM updates. Therefore, stable unique IDs from the data are preferred.
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

# Why are keys important in React lists, and why should we avoid using array index as a key?
Keys give React a stable identity for each element in a list. During reconciliation, React uses keys to match elements from the previous render with elements in the next render, allowing it to determine which items should be reused, inserted, removed, or moved.

Using the array index as a key is safe only when the list is effectively static and items are never reordered, inserted, or removed in ways that change positions. For dynamic lists, index keys can cause React to associate an existing component instance and its state with a different item, resulting in bugs such as state appearing to move between list items.

Therefore, when possible, we should use a stable, unique identifier from the data, such as user.id.


# Why are keys important in React?
Keys provide stable identity to elements in a React list. During reconciliation, React uses the key, together with the element type, to determine which existing Fiber/component corresponds to each new element. This allows React to reuse existing components, update changed items, and insert or remove only what is necessary instead of treating items as entirely new. Stable keys are especially important when list items are inserted, deleted, or reordered because component state is associated with component identity. Using array indexes as keys can cause state or DOM state to become associated with the wrong item when the list changes.

# Why not use index as key?
An index represents the item's position, not its identity. If items are inserted, deleted, filtered, or reordered, the indexes can change. React may then associate an existing component with a different data item, which can cause incorrect state preservation and unnecessary DOM updates. Therefore, stable unique IDs from the data are preferred.


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

# When would you use Context vs Redux/Zustand?
I would use Context for relatively stable global data that needs to be accessed by many components, such as theme, locale, or authenticated-user information. Context is mainly a mechanism for passing data through the component tree without prop drilling.

If I have complex application state, frequent updates, or many independent pieces of state where components should subscribe selectively, I would consider Redux or Zustand. These libraries provide store-based state management and selectors, allowing components to subscribe to specific pieces of state and potentially avoid unnecessary re-renders.

I wouldn't choose Redux or Zustand simply because the state is global. The decision depends on the complexity, update frequency, debugging requirements, and subscription patterns.



# What is React Hook Form?
React Hook Form (RHF) is a library for handling forms in React.
Instead of putting every input value into React state, React Hook Form primarily keeps input values in the DOM and accesses them through refs.
Traditional controlled form:
```js
const [name, setName] = useState("");

<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

# # Why is React Hook Form more performant than controlled forms?
React Hook Form is generally more performant because it primarily uses uncontrolled inputs and refs rather than storing every input value in React state. In a traditional controlled form, every onChange updates React state, which can cause component re-renders on every keystroke. React Hook Form lets the DOM maintain input values and uses refs plus its internal form store to track fields and perform validation. As a result, ordinary typing doesn't require the entire form component tree to re-render. React Hook Form still causes renders when subscribed form state, such as errors or other relevant metadata, changes, but it minimizes unnecessary rendering compared with a fully controlled approach.

useForm() creates the form-management system.
```js
import { useForm } from "react-hook-form";

function App() {
  const {
    register,  // register() connects the DOM input to React Hook Form.
    handleSubmit,
    formState: { errors }
  } = useForm();

  // ...
  <input {...register("username")} />
}
```
```js
import { useForm } from "react-hook-form";

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Name */}
      <input
        {...register("name", {
          required: "Name is required",
          minLength: {
            value: 3,
            message: "Name must be at least 3 characters"
          }
        })}
        placeholder="Name"
      />

      {errors.name && (
        <p>{errors.name.message}</p>
      )}

      {/* Email */}
      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email"
          }
        })}
        placeholder="Email"
      />

      {errors.email && (
        <p>{errors.email.message}</p>
      )}

      {/* Password */}
      <input
        type="password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters"
          }
        })}
        placeholder="Password"
      />

      {errors.password && (
        <p>{errors.password.message}</p>
      )}

      <button type="submit">
        Register
      </button>
    </form>
  );
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
# How does React's reconciliation algorithm work, and why does it use keys?
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
<div className="old">
  Hello
</div>
// update  to this 👇
<div className="new">
  Hello
</div>

// Both are div 
// So React conceptually says: It does not need to recreate the <div>
Old: div
New: div
       ↓
Same type
       ↓
Reuse existing DOM/Fiber
       ↓
Update className




// Different Type → Replace
// OLD TREE
<div>
  Hello
</div>
// Replace to this update 👇 
<span>
  Hello
</span>

// REACT SEES:
Old type = div
New type = span
        ↓
Different type
        ↓
Unmount(delete) old tree
        ↓
Create new tree



// Lists → Keys Identify Identity
// OLD TREE
[
  <li key="a">Apple</li>,
  <li key="b">Banana</li>
]
// New Tree
[
  <li key="b">Banana</li>,
  <li key="a">Apple</li>
]
// The order changed.
// Because React has keys:

// "a" → same logical item
// "b" → same logical item

// React can preserve their identity while moving them.


function App({ loggedIn }) {
  return (
    <h1>
      {loggedIn ? "Welcome" : "Please Login"}
    </h1>
  );
}

// initial render : loggedIn= false
// Later: loggedIn =true
// React gets welcom

// OLD                    NEW

// <h1>                   <h1>
//  Please Login            Welcome
// </h1>                  </h1>

//        ↓

// Same type: h1
//        ↓
// Reuse h1
//        ↓
// Update text

// Same element type generally means React can reuse the existing node/Fiber and reconcile its props and children.
// Old DOM <h1>
//      ↓
// Keep it
//      ↓
// Change textContent


// Different Types
function App({ showDiv }) {
  return showDiv ? (
    <div>
      Hello
    </div>
  ) : (
    <span>
      Hello
    </span>
  );
}
// Initial:
 showDiv = true
//  Tree:
  <div>Hello</div>
//  Later: 👇
showDiv = false

// Tree:
<span>Hello</span>

// OLD              NEW

// div              span
//  |                 |
// Hello             Hello

// Types differ:  div !== span
// THEREFORE:👇

// Unmount <div>
//        ↓
// Remove old subtree
//        ↓
// Create <span>
//        ↓
// Mount <span>


// Initially:
          
                    New Element
                             |
        ┌─────────┴─────────┐
        |                                        |
    Same Type                Different Type
        |                                       |
    Reuse node               Destroy old
        |                                      |
    Update props            Create new
        |
    Check children
        |
    Keys help
```

```js
function Input() {
  const [value, setValue] = useState("");

  return <input value={value} onChange={e => setValue(e.target.value)} />;
}
// If the component's identity is replaced because of a different type/position/key, React may create a new component instance/Fiber and its state is not preserved.

// This is why understanding reconciliation helps explain seemingly mysterious React state resets.
```

React reconciliation is the process of comparing the previous React element tree with the newly rendered tree to determine the minimum set of changes needed for the UI.

React uses heuristics to make this practical at roughly O(n), rather than performing an expensive general-purpose tree comparison.

First, if the element types are the same, React generally reuses the existing Fiber/DOM node and reconciles its props and children.

If the element types are different, React treats them as different trees, unmounts the old subtree, and creates a new one.

For lists, React uses the key to identify the identity of each child across renders. Stable keys allow React to match old and new children even when their positions change.

Using array indexes as keys can cause incorrect component identity when items are inserted, removed, or reordered, potentially causing local state to appear on the wrong item.

So the key idea is: same type enables reuse, different type causes replacement, and stable keys preserve identity in lists.


# Why is using array index as a key sometimes bad?
Because an array index represents position, not identity. If the list is reordered, inserted into, or deleted from, the same index can refer to a different item. React may then reuse a component's existing Fiber and state for a different item. A stable unique identifier such as a database ID is generally better.

# What does JSX compile into?
JSX is syntactic sugar for creating React Elements. For example, <h1>Hello</h1> is conceptually transformed into React.createElement("h1", null, "Hello") in the classic JSX transform. React.createElement() returns a lightweight React Element object containing information such as its type, props, key, and ref. React uses these element descriptions as part of its rendering and reconciliation process to determine what changes need to be committed to the actual DOM.
```js
const element = (
    <div className="box">
        <h1>Hello</h1>
    </div>
);

// React.createElement() doesn't directly create a DOM node. It creates a React Element description
// INTO:
const element = React.createElement(
    "div",
    { className: "box" },
    React.createElement(
        "h1",
        null,
        "Hello"
    )
);

// component vs string
function Welcome() {
    return <h1>Hello</h1>;
}

const element = <Welcome />;
// INTO
React.createElement(
    Welcome,// component 
    null
);

// key and ref
<li key={user.id}>
    {user.name}
</li>
// INTO
React.createElement(
    "li",
    {
        key: user.id
    },
    user.name
);

// props.children
<Button>
    Hello/                           /content
</Button>
// means the content becomes children.
React.createElement(
    Button,
    null,
    "Hello"  //content
);

function Button(props) {
    console.log(props.children);

    return <button>{props.children}</button>;
}
```
# Explain React.createElement.
React.createElement() is an API that creates a React Element, which is a lightweight description of what the UI should look like. In the classic JSX transform, JSX such as <h1>Hello</h1> becomes React.createElement('h1', null, 'Hello'). The resulting object contains information such as the element type and props, including children. It does not directly create a DOM node; React later uses these element descriptions during reconciliation and commits the necessary changes to the actual DOM. Modern React can use the automatic JSX runtime, so JSX doesn't necessarily compile literally to React.createElement(), but the underlying element-description model remains.

# Why can't you use if directly inside JSX, and how do you conditionally render elements in React?
JSX expressions inside {} must evaluate to a JavaScript value. if and for are JavaScript statements, not expressions, so they cannot be placed directly inside JSX. For conditional rendering, I can use JavaScript expressions such as the ternary operator for if/else cases and && for rendering something only when a condition is truthy. If the logic is more complex, I move the if statement outside the JSX, usually before the return, and store the resulting JSX in a variable or use an early return.

JSX expressions are JavaScript expressions embedded inside {} that are evaluated during rendering, while conditional rendering uses expression-based constructs like && and ?:; statement-level control flow such as if and for must be handled outside the JSX expression.

# Expression vs Statement
An expression produces a value. 
```js
<h1>{10 + 20}</h1>
<h1>{user.name}</h1>
<h1>{isLoggedIn ? "Logout" : "Login"}</h1>

10+20 =  produce 30
user.name
isLoggedIn ? "Logout" : "Login"   
count > 0  produce true
```
A statement performs an action/control-flow operation.
```js
if (condition) {
}
for (...) {
}
const x = 10;
```
# Conditional Rendering
React doesn't have a special JSX if syntax.

Instead, we use normal JavaScript expressions.

The three most important patterns are:

1. &&       → render something conditionally
2. ? :      → choose between two things
3. if       → move logic outside JSX

```js
function App() {
    const isLoggedIn = false;
    const name = "Priti";

    return (
        <div>
            {isLoggedIn
                ? <h1>Welcome {name}</h1>
                : <h1>Please login</h1>
            }
        </div>
    );
}


// move the if before return. if want to use if else 
function App() {
    const isLoggedIn = true;

    let content;

    if (isLoggedIn) {
        content = <h1>Welcome</h1>;
    } else {
        content = <h1>Please login</h1>;
    }

    return (
        <div>
            {content}
        </div>
    );
}

// null undefined and false in jsx 
function App() {
    return (
        <div>
            {false}
            {null}
            {undefined}
        </div>
    );
}
// These don't produce visible text.

// That's why this works:

{isLoggedIn && <Dashboard />}


// Function Calls Inside JSX 
// function calls are expression too
function getGreeting(name) {
    return `Hello ${name}`;
}

function App() {
    return (
        <h1>
            {getGreeting("Priti")}
        </h1>
    );
}
```

# React Fiber
React Fiber is React's reconciliation architecture that represents work as small units called Fibers, allowing React to prioritize, pause, resume, and discard rendering work before committing changes to the DOM.


React Fiber is React's reconciliation architecture introduced in React 16. It represents rendering work as individual units called Fibers. Each Fiber contains information about a component or element, including its type, props, state, relationships to other Fibers, and work that needs to be committed.

The main purpose of Fiber was to make reconciliation more flexible and schedulable. Instead of treating rendering as one large uninterrupted operation, React can break work into smaller units, prioritize important updates, pause or abandon work, and resume it later.

This is particularly important for modern concurrent features such as transitions and Suspense.

Fiber also separates the render phase from the commit phase. The render phase calculates what should change and can be interrupted, while the commit phase applies the final changes to the DOM and other host environments.

Fiber doesn't create multiple JavaScript threads. It provides a data structure and scheduling architecture that lets React cooperatively manage rendering work.


# Why was this necessary?
Because large synchronous rendering work could block the main thread and make applications feel unresponsive. Fiber allows React to prioritize work and yield between units of rendering work, improving responsiveness

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

# What exactly is a Fiber?
A Fiber is essentially a JavaScript object representing a React component/element's work and information.
```js
const fiber = {
    type: UserList,
    key: "users",

    pendingProps: {},
    memoizedProps: {},

    memoizedState: {},

    child: null,
    sibling: null,
    return: null,

    alternate: null,

    flags: 0
};
```

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




# What is Component Composition?
Component composition means building a complex UI by combining smaller components instead of creating one huge component or relying on inheritance.
```js
function Layout({ sidebar, content }) {
    return (
        <div className="layout">
            <aside>
                {sidebar}
            </aside>

            <main>
                {content}
            </main>
        </div>
    );
}

function Sidebar() {
    return <nav>Menu</nav>;
}

function Dashboard() {
    return <h1>Dashboard</h1>;
}

function App() {
    return (
        <Layout
            sidebar={<Sidebar />}
            content={<Dashboard />}
        />
    );
}
```
# Why does React favor composition over inheritance? Explain with an example.
React favors composition because components can be combined through props and children, which makes them more flexible and reusable than inheritance-based designs. Instead of creating a subclass that inherits behavior from another component, we can create a reusable component that accepts content or behavior from its parent.
```js
function Card({ children }) {
    return <div className="card">{children}</div>;
}
```
Then different callers can compose it with different children:
```js
<Card>
    <Profile />
</Card>

<Card>
    <Product />
</Card>
```
The Card component doesn't need to know about Profile or Product. The parent decides what goes inside it.

This produces loosely coupled, reusable components and avoids the rigid hierarchy that inheritance can create.

React prefers composition because we can build reusable components by passing behavior and UI through props and children instead of creating rigid inheritance hierarchies."





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

#  What is the Render Props Pattern and why is it useful?"
The Render Props Pattern is a React component pattern where:

A component receives a function as a prop and calls that function to decide what UI should be rendered.


Render Props is a React component pattern where a component receives a function as a prop and calls that function with some internal state or data. The function returns the UI that should be rendered. This allows us to separate reusable behavior from presentation. The component owns the logic, while the consumer controls how that logic is rendered. A common example is a mouse tracker that manages mouse coordinates and passes them to a render function. Children-as-a-function is a common variant of the same pattern.
```js
<Component render={(data) => <UI data={data} />} />
```
render is simply a JavaScript function stored inside a prop.

```js
function Counter({ render }) {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      {render(count, setCount)}
    </div>
  );
}

// Consumer:/
function App() {
  return (
    <Counter
      render={(count, setCount) => (
        <>
          <h1>Count: {count}</h1>

          <button onClick={() => setCount(count + 1)}>
            Increment
          </button>
        </>
      )}
    />
  );
}
```

# What is Nullish Coalescing Operator
 (?? )vs ? : — Ternary Operator  and || 

?? returns the right-hand value only when the left-hand value is null or undefined.
```js
const name = null;
console.log(name ?? "Guest");
// Guest
console.log(0 ?? 100);       // 0
console.log(false ?? true);  // false
console.log("" ?? "Hello");  // ""
```
|| returns the right-hand value when the left-hand value is falsy.

```js
const age = 0;
console.log(age || 18);
// 18
console.log(0 || 18); // 18
console.log(0 ?? 18); // 0
```
The ternary operator is a shorthand for an if...else condition.
```js
condition ? valueIfTrue : valueIfFalse
const age = 20;
const result = age >= 18
  ? "Adult"
  : "Minor";
console.log(result);
// Adult
```



# Compound Components

Compound Components are a group of components that are designed to work together, where the parent owns the shared state and the children access that state implicitly—commonly through React Context.
```js
<Tabs>
  <Tabs.List>
    <Tabs.Tab />
    <Tabs.Tab />
  </Tabs.List>

  <Tabs.Panel />
  <Tabs.Panel />
</Tabs>
```
Instead of passing activeTab, setActiveTab, etc. manually through every level, the parent provides the shared state through Context.

First understand the problem

Suppose we want to build tabs.

Without a compound-component pattern:
```js

function App() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <>
      <Tab
        active={activeTab === "profile"}
        onClick={() => setActiveTab("profile")}
      />

      <Tab
        active={activeTab === "settings"}
        onClick={() => setActiveTab("settings")}
      />

      {activeTab === "profile" && <Profile />}
      {activeTab === "settings" && <Settings />}
    </>
  );
}
```
This works.

But imagine:

Tabs
 ├── Header
 │    └── Tab
 │
 └── Content
      └── Panel

Now you may have to pass:

activeTab
setActiveTab
tabId
isActive
...

through multiple components.

That's prop drilling.


# What are Compound Components in React, and how do they work internally?
Compound Components are a React component pattern where multiple related components work together as a single API. The parent component owns shared state and provides that state and related actions to its child components, commonly through React Context. The child components consume the context rather than receiving every piece of state through explicit props.

For example, in a Tabs component, Tabs can maintain activeTab, while Tabs.Trigger reads activeTab and calls setActiveTab, and Tabs.Content reads activeTab to determine whether it should render.

Internally, the parent creates a Context Provider containing something like { activeTab, setActiveTab }. Descendants call useContext() to access that value. When the state changes, the parent updates its state, the context value may change, and React updates the relevant consumers.

The pattern improves component API design because consumers can compose the pieces declaratively without manually passing shared state through every intermediate component.

Compound Components solve this by creating an implicit communication channel using Context.

The parent owns the state:
```js
const [activeTab, setActiveTab] = useState("profile");
```
Then it provides:
```js
<TabsContext.Provider value={{
  activeTab,
  setActiveTab
}}>
```
Children consume it:
```js
const { activeTab, setActiveTab } = useContext(TabsContext);
```

```js
import { createContext, useContext, useState } from "react";

const TabsContext = createContext(null);

function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
}

function Tab({ id, children }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);

  const isActive = activeTab === id;

  return (
    <button
      onClick={() => setActiveTab(id)}
      style={{
        fontWeight: isActive ? "bold" : "normal"
      }}
    >
      {children}
    </button>
  );
}

function Panel({ id, children }) {
  const { activeTab } = useContext(TabsContext);

  if (activeTab !== id) {
    return null;
  }

  return <div>{children}</div>;
}

function App() {
  return (
    <Tabs>
      <Tab id="profile">Profile</Tab>
      <Tab id="settings">Settings</Tab>

      <Panel id="profile">
        Profile content
      </Panel>

      <Panel id="settings">
        Settings content
      </Panel>
    </Tabs>
  );
}
```

```js
import {
  createContext,
  useContext,
  useState
} from "react";

const TabsContext = createContext(null);

function Tabs({ defaultValue, children }) {
  const [activeValue, setActiveValue] = useState(defaultValue);

  const value = {
    activeValue,
    setActiveValue
  };

  return (
    <TabsContext.Provider value={value}>
      {children}
    </TabsContext.Provider>
  );
}

function TabsList({ children }) {
  return (
    <div role="tablist">
      {children}
    </div>
  );
}

function TabsTrigger({ value, children }) {
  const { activeValue, setActiveValue } =
    useContext(TabsContext);

  const active = activeValue === value;

  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={() => setActiveValue(value)}
    >
      {children}
    </button>
  );
}

function TabsContent({ value, children }) {
  const { activeValue } =
    useContext(TabsContext);

  if (activeValue !== value) {
    return null;
  }

  return (
    <div role="tabpanel">
      {children}
    </div>
  );
}

// Compound component API
// ctually properties attached to the Tabs function object:  That's plain JavaScript.
Tabs.List = TabsList;
Tabs.Trigger = TabsTrigger;
Tabs.Content = TabsContent;

export default Tabs;

// usage
function App() {
  return (
    <Tabs defaultValue="profile">

      <Tabs.List>

        <Tabs.Trigger value="profile">
          Profile
        </Tabs.Trigger>

        <Tabs.Trigger value="settings">
          Settings
        </Tabs.Trigger>

      </Tabs.List>

      <Tabs.Content value="profile">
        Welcome to your profile.
      </Tabs.Content>

      <Tabs.Content value="settings">
        Change your settings here.
      </Tabs.Content>

    </Tabs>
  );
}
```


# Component Pattern: Parent Controls Child

#  What is a controlled component in React, and how is it different from an uncontrolled component?
A controlled component is a component whose value or state is managed by React, typically through props such as value and onChange. The parent component owns the state and passes the current value to the child. When the user interacts with the component, the child calls the callback, and the parent updates the state.

An uncontrolled component manages its state internally, usually through the DOM for native form elements, and React provides an initial value through defaultValue.

Controlled components provide a single source of truth and make validation, synchronization, and conditional behavior easier, while uncontrolled components can be simpler when we don't need to track every change in React state.

```js
function TextInput({
  value,
  onChange,
  placeholder
}) {
  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

function App() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  return (
    <div>
      <TextInput
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter email"
      />

      <p>Email: {email}</p>
    </div>
  );
}
```


# What is Container/Presentational Pattern
# What is the Container/Presentational pattern in React, and why would you use it?

The Container/Presentational pattern separates application logic from UI rendering. A container component is responsible for things such as state management, data fetching, effects, and event handlers, while a presentational component receives data and callbacks through props and focuses primarily on rendering the UI.

This improves separation of concerns, testability, readability, and reusability. The presentational component can often be treated like a pure function of its props.

In modern React, custom hooks have reduced the need for dedicated container components because hooks allow us to extract stateful and side-effect logic without introducing another component. However, the underlying separation between behavior and presentation is still a useful design principle.


Container Component
       │
       │ data + callbacks
       ▼
Presentational Component
       │
       ▼
      UI
  
This is a React Component Pattern used to separate what the component does from what the component looks like.

A Container is responsible for the application's behavior/data.

Typically it handles:

useState
useEffect
API calls
event handlers
data transformation
business logic
passing data to child components

Think:

Container = "How does it work?"

```js
function UserContainer() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return <UserList users={users} />;
}
```
Presentational Component

The presentational component focuses on rendering.

It receives information through props:
```js
function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```
It doesn't need to know:

where users came from
which API was called
how data was fetched

It simply says:

"Given these props, this is what the UI should look like."

This matches the broader React principle that rendering should be pure: same input → same output, without side effects during rendering. Your uploaded notes emphasize this same separation between rendering and side effects such as fetch(), timers, DOM manipulation, etc


# How does route-based code splitting work in React?
Route-based code splitting divides an application's JavaScript into separate chunks based on routes or pages. Instead of putting all route components into the initial JavaScript bundle, we use dynamic import() with React.lazy() so that a route's component is loaded asynchronously when that route is needed.

import() returns a Promise, and the bundler uses that dynamic import as a code-splitting boundary to create a separate chunk. When React renders a lazy component and its code isn't available yet, Suspense displays a fallback UI. Once the chunk is downloaded and the Promise resolves, React can render the component.

This reduces the initial JavaScript payload and improves initial loading performance, especially for large applications where users don't visit every route.

One-line version:

Route-based code splitting = dynamically load each route's JavaScript only when that route is needed, using import() + React.lazy() + Suspense.

```js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading page...</div>}>

                <Routes>

                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/about"
                        element={<About />}
                    />

                    <Route
                        path="/dashboard"
                        element={<Dashboard />}
                    />

                </Routes>

            </Suspense>
        </BrowserRouter>
    );
}

export default App;

```

# How does Suspense work for data fetching internally?
Suspense provides a mechanism for React to pause rendering of a subtree when some required asynchronous work isn't ready. A Suspense-enabled data source can throw a pending Promise during render. React catches that suspension and renders the nearest Suspense boundary's fallback. When the Promise resolves, React schedules/retries the suspended work, and the data source can then return the resolved data instead of throwing. Suspense itself doesn't fetch or cache data; the data-fetching library or framework integrates with this mechanism.
```js
import { Suspense } from "react";

function Profile() {
    const profile = profileResource.read();

    return (
        <div>
            <h2>{profile.name}</h2>
        </div>
    );
}

function Posts() {
    const posts = postsResource.read();

    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}

function App() {
    return (
        <Suspense fallback={<p>Loading page...</p>}>
            <Profile />
            <Posts />
        </Suspense>
    );
}
```


# What is Redux ?
React-Redux is a tool that helps you manage the state (data) of your React app in one central place. This makes your app easier to maintain and debug as it grows.

It is based on three fundamental principles:

Single Source of Truth: All app data lives in the store.
State is Read-Only: You can’t change data directly; you send an action to request a change.
Changes with Pure Functions: Reducers take the current state and an action, and return the updated state.

# What is Redux  Components
1. Store
The store is a central place that holds all the app’s data. It’s the only place where the data can be changed.
```js
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer
  }
});
```
2. State
State is the actual data stored inside the Redux store.
```js
{
  user: {
    name: "Priti"
  },
  cart: {
    items: []
  }
}
```
3. Actions
An action is a simple JavaScript object that tells Redux what change to make. It must have a type and can optionally include a payload with extra information.
```js
{
  type: "cart/add",
  payload: product
}
```
4. Reducers
A reducer is a pure function that decides how the state changes when an action is received. It takes the current state and an action, and returns a new state.
```js
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    }
  }
});
```
6. Dispatch
Dispatch is used to send an action to the Redux store. This triggers the reducer to update the state.
```js
store.dispatch(addToCart(product));
```
6. Selectors
A selector is a function that is used to get specific data from the Redux store.
```js
const cart = useSelector(
  state => state.cart
);
```
7. Provider
The Provider component makes the Redux store available to all React components in the app.
```js
import { Provider } from 'react-redux';

<Provider store={store}>
    <App />
</Provider>;
```


# What are the three principles of Redux, and why are they important?
Redux follows three core principles. First, single source of truth, meaning the application's state is centralized in a single store, which makes the state easier to inspect and debug.

Second, state is read-only, meaning components don't directly modify Redux state. Instead, they dispatch actions describing what happened.

Third, changes are made through pure reducer functions. A reducer receives the previous state and an action and calculates the next state without causing side effects.

These principles make state changes predictable and traceable. Because changes happen through dispatched actions and reducers, Redux can support powerful debugging techniques such as action history and time-travel debugging.

Redux Toolkit follows these same principles while reducing boilerplate. For example, createSlice generates action creators and reducers, while Immer allows mutation-style syntax that still produces immutable state updates.
store.getState();

# What is createSlice and how does it work?
createSlice is a Redux Toolkit API that simplifies Redux state management by generating action creators and a reducer from a single configuration object containing a slice name, initial state, and reducer functions.

For each reducer defined inside createSlice, Redux Toolkit automatically generates an action creator and an action type based on the slice name and reducer name.

For example, a reducer named increment inside a slice named counter generates an action type such as counter/increment.

Redux Toolkit also uses Immer internally, so inside reducers we can write mutation-like code such as state.count++. Immer works with a draft state and produces a new immutable state behind the scenes.

Finally, slice.actions gives us the generated action creators, while slice.reducer gives us the reducer that we register in the Redux store.
```js
const counterSlice = createSlice({
    name: "counter",

    initialState: {
        count: 0
    },

    reducers: {
        increment(state) {
            state.count += 1;
        }
    }
});
```
Redux Toolkit automatically generates:

```js
counterSlice.actions.increment

// and:

counterSlice.reducer
```


# What does createSlice() actually return?
```js
const counterSlice = createSlice({
    name: "counter",

    initialState: {
        count: 0
    },

    reducers: {
        increment(state) {
            state.count += 1;
        },

        decrement(state) {
            state.count -= 1;
        }
    }
});
```
The returned object conceptually contains:
```js
{
    name: "counter",

    reducer: function reducer(...) {},

    actions: {
        increment: function actionCreator() {},
        decrement: function actionCreator() {}
    },

    reducerPath: "counter",

    caseReducers: {
        increment: ...,
        decrement: ...
    }
}
```


#  createAsyncThunk
createAsyncThunk wraps an async operation and automatically generates pending, fulfilled, and rejected actions, which we handle in extraReducers to keep loading, data, and error state synchronized.

createAsyncThunk is Redux Toolkit's helper for handling asynchronous logic such as:

API calls
Fetching users
Login requests
Creating/updating data
Deleting records

Its biggest benefit is that it automatically generates three lifecycle actions:

pending
   ↓
fulfilled / rejected


# What problem does createAsyncThunk solve?
Without createAsyncThunk, you might manually write:
```js
dispatch({ type: "USERS_REQUEST" });

try {
    const response = await fetch("/api/users");

    dispatch({
        type: "USERS_SUCCESS",
        payload: await response.json()
    });
} catch (error) {
    dispatch({
        type: "USERS_FAILURE",
        payload: error.message
    });
}
// That's repetitive.

// You have to manually manage:
```
createAsyncThunk gives you this lifecycle automatically.

```js
const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async () => {
        const response = await fetch("/api/users");

        return await response.json();
    }
);

```

Redux Toolkit automatically creates:

fetchUsers.pending
fetchUsers.fulfilled
fetchUsers.rejected


# What does "thunk" actually mean?
A normal Redux action is an object:

{
    type: "users/fetch"
}

A thunk is essentially a function that can be dispatched.


```js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",

    async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();

        return data;
    }
);

const usersSlice = createSlice({
    name: "users",

    initialState: {
        data: [],
        loading: false,
        error: null
    },

    reducers: {},

    extraReducers: (builder) => {

        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })

            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default usersSlice.reducer;
```


```js
import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
    "auth/login",

    async (credentials) => {

        const response = await fetch(
            "https://example.com/api/login",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(credentials)
            }
        );

        if (!response.ok) {
            throw new Error("Login failed");
        }

        return await response.json();
    }
);
//

dispatch(
    loginUser({
        email: "test@gmail.com",
        password: "123456"
    })
);

// slice 
const authSlice = createSlice({
    name: "auth",

    initialState: {
        user: null,
        loading: false,
        error: null
    },

    reducers: {
        logout(state) {
            state.user = null;
        }
    },

    extraReducers: (builder) => {

        builder.addCase(
            loginUser.pending,
            (state) => {
                state.loading = true;
                state.error = null;
            }
        );

        builder.addCase(
            loginUser.fulfilled,
            (state, action) => {
                state.loading = false;
                state.user = action.payload;
            }
        );

        builder.addCase(
            loginUser.rejected,
            (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            }
        );
    }
});
```



```js
import {
    configureStore,
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";


// Async operation
const fetchUsers = createAsyncThunk(
    "users/fetchUsers",

    async (_, thunkAPI) => {

        try {

            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

            if (!response.ok) {
                throw new Error("Failed to fetch users");
            }

            return await response.json();

        } catch (error) {

            return thunkAPI.rejectWithValue(
                error.message
            );
        }
    }
);


// Slice
const usersSlice = createSlice({
    name: "users",

    initialState: {
        users: [],
        loading: false,
        error: null
    },

    reducers: {},

    extraReducers: (builder) => {

        builder

            .addCase(
                fetchUsers.pending,
                (state) => {

                    state.loading = true;
                    state.error = null;
                }
            )

            .addCase(
                fetchUsers.fulfilled,
                (state, action) => {

                    state.loading = false;
                    state.users = action.payload;
                }
            )

            .addCase(
                fetchUsers.rejected,
                (state, action) => {

                    state.loading = false;
                    state.error = action.payload;
                }
            );
    }
});


const store = configureStore({
    reducer: {
        users: usersSlice.reducer
    }
});


// Somewhere in React
store.dispatch(fetchUsers());
```



# How do useSelector and useDispatch work internally?"
useSelector allows a React component to subscribe to the Redux store and select a specific portion of the state. React-Redux keeps track of the selected value and, when the store updates, compares the previous selected value with the new selected value. By default, the comparison is based on reference equality using Object.is. If the selected value changes, the component is scheduled to re-render; otherwise it can skip the render.

useDispatch returns the store's dispatch function. When we call dispatch(action), Redux sends the action through the reducer logic. The reducers calculate the next state, Redux updates the store, and subscribers are notified. useSelector then determines whether the selected data changed.

```js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",

    initialState: {
        value: 0
    },

    reducers: {
        increment(state) {
            state.value += 1;
        },

        decrement(state) {
            state.value -= 1;
        }
    }
});

export const {
    increment,
    decrement
} = counterSlice.actions;

export default counterSlice.reducer;



// component 
import { useSelector, useDispatch } from "react-redux";
import {
    increment,
    decrement
} from "./counterSlice";

function Counter() {

    const count = useSelector(
        state => state.counter.value
    );

    const dispatch = useDispatch();

    return (
        <div>
            <h1>{count}</h1>

            <button
                onClick={() => dispatch(increment())}
            >
                +
            </button>

            <button
                onClick={() => dispatch(decrement())}
            >
                -
            </button>
        </div>
    );
}

export default Counter;
```


# RTK Query
RTK Query is Redux Toolkit's server-state solution that uses createApi to define API endpoints and automatically manages fetching, caching, subscriptions, loading/error states, and tag-based cache invalidation through generated React hooks.

RTK Query is not the same thing as Redux itself. It is a data-fetching and caching solution built on top of Redux Toolkit.
It uses Redux internally to store API data, loading status, errors, cache metadata, subscriptions, etc

Without RTK Query, you might manually write:
```js
const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

useEffect(() => {
    fetch("/api/posts")
        .then(res => res.json())
        .then(data => setPosts(data))
        .catch(err => setError(err))
        .finally(() => setLoading(false));
}, []);
```

You have to manage:

loading
error
data
fetching
caching
refetching
duplicate requests
stale data
updating cache after mutations

RTK Query handles much of this for you.

```js
const {
    data,
    isLoading,
    isError,
    error
} = useGetPostsQuery();
```

createApi()
     ↓
Define endpoints
     ↓
Generate hooks
     ↓
Components call hooks
     ↓
RTK Query manages server state

```js
const api = createApi({
    reducerPath: "api",

    baseQuery: fetchBaseQuery({
        baseUrl: "https://example.com/api"
    }),

    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => "/posts"
        })
    })
});
```

RTK Query can then generate:
```js
useGetPostsQuery()

So:

const { data, isLoading, error } = useGetPostsQuery();
```

# Query vs Mutation
A query is normally used for reading/fetching data.
```js
getPosts: builder.query({
    query: () => "/posts"
})
// this genrated hook 
useGetPostsQuery()
```

A mutation is normally used when the server data changes.

```js

createPost: builder.mutation({
    query: (newPost) => ({
        url: "/posts",
        method: "POST",
        body: newPost
    })
})

// genrated hook
useCreatePostMutation()

// Mutation hooks return a trigger function.
const [createPost] = useCreatePostMutation();

createPost({
    title: "Hello"
});



// component 



export const {
    useGetPostsQuery
} = api;


function Posts() {

    const {
        data,
        isLoading,
        isError,
        error
    } = useGetPostsQuery();

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error occurred</p>;
    }

    return (
        <ul>
            {data.map(post => (
                <li key={post.id}>
                    {post.title}
                </li>
            ))}
        </ul>
    );
}
```
Configure Redux Store
RTK Query doesn't automatically work just because createApi() exists.

You need to add the API reducer:

```js
import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware)
});

```
api.reducer
    ↓
Stores RTK Query state

api.middleware
    ↓
Handles RTK Query behavior/lifecycle


# Query ,Mutation , chache

```js
export const api = createApi({
    reducerPath: "api",

    baseQuery: fetchBaseQuery({
        baseUrl: "/api"
    }),

    tagTypes: ["Posts"],

    endpoints: (builder) => ({

        getPosts: builder.query({
            query: () => "/posts",

            providesTags: ["Posts"]
        }),

        createPost: builder.mutation({
            query: (post) => ({
                url: "/posts",
                method: "POST",
                body: post
            }),

            invalidatesTags: ["Posts"]
        })
    })
});

export const {
    useGetPostsQuery,
    useCreatePostMutation
} = api;

// component 
function Posts() {

    const {
        data: posts = [],
        isLoading
    } = useGetPostsQuery();

    const [createPost, {
        isLoading: isCreating
    }] = useCreatePostMutation();

    const handleCreate = async () => {

        await createPost({
            title: "New Post",
            body: "Hello RTK Query"
        });
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <button
                onClick={handleCreate}
                disabled={isCreating}
            >
                Create Post
            </button>

            {posts.map(post => (
                <div key={post.id}>
                    {post.title}
                </div>
            ))}
        </>
    );
}
```
The second component can use the existing cached data rather than blindly creating another request.


# useGetUsersQuery() fetch data every time the component renders?"
No.
The JavaScript function/hook is invoked during rendering, but RTK Query maintains the query's state and cache in Redux.


# What is RTK Query and how does it work?
RTK Query is a data-fetching and caching solution included in Redux Toolkit. It allows us to define API endpoints using createApi, and it automatically generates hooks for queries and mutations.

For queries, RTK Query manages fetching, loading, error states, caching, subscriptions, and refetching. For mutations, it provides trigger functions for creating, updating, or deleting server data.

RTK Query stores its API state in the Redux store and uses middleware to manage request lifecycles and cache behavior. It also supports tag-based cache invalidation, where queries provide tags and mutations invalidate those tags, allowing related cached data to be refreshed automatically.

This reduces the amount of boilerplate compared with manually combining useEffect, useState, fetch/axios, loading state, error state, and cache management.

# providesTags vs invalidatesTags
```js
// Query
getPosts: builder.query({
    query: () => "/posts",
    providesTags: ["Posts"]
})
```
Meaning:
"This cached data represents Posts."
```js
// Mutation
createPost: builder.mutation({
    query: (post) => ({
        url: "/posts",
        method: "POST",
        body: post
    }),

    invalidatesTags: ["Posts"]
})
```
Meaning:

"The Posts data may now be outdated."

# Why use configureStore() instead of Redux's createStore()?
configureStore() reduces Redux boilerplate and provides sensible defaults such as middleware configuration, thunk support, DevTools integration, and development-time checks. It is the recommended way to configure a Redux store when using Redux Toolkit.

# What does configureStore() do in Redux Toolkit?
configureStore() creates and configures the Redux store. It accepts a reducer or an object of slice reducers, combines multiple reducers when an object is provided, and sets up commonly needed middleware such as thunk by default. It also enables Redux DevTools integration. The keys in the reducer object determine the shape of the Redux state. For example, reducer: { posts: postsReducer } means the Redux state will have a posts property managed by postsReducer.
```js
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer
  }
});
```
Then React connects to it:
```js
import { Provider } from "react-redux";

<Provider store={store}>
  <App />
</Provider>
```
component usage
```js
import { useSelector, useDispatch } from "react-redux";

function Posts() {
  const posts = useSelector(state => state.posts);

  const dispatch = useDispatch();

  return (
    <button
      onClick={() =>
        dispatch(
          postsSlice.actions.addPost({
            id: 1,
            title: "Redux"
          })
        )
      }
    >
      Add Post
    </button>
  );
}
```


# React Router v6
BrowserRouter, Routes & Route — React Router v6
What problem does React Router solve?

Suppose your application has:

/
/about
/users
/users/42
/settings

Without a router, you might manually inspect:

window.location.pathname

and write:
```js
if (pathname === "/") {
   // Home
} else if (pathname === "/about") {
   // About
}
```
That's obviously not scalable.

React Router gives you a declarative way to say:
```js
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/users/:id" element={<UserPage />} />
```
You're essentially saying:

"When the URL matches this pattern, render this React element."


# What is BrowserRouter?
```js
<BrowserRouter>
   <App />
</BrowserRouter>
```
BrowserRouter connects React Router to the browser's History API.

The browser provides APIs such as:
```js
window.history.pushState()
window.history.replaceState()
window.addEventListener("popstate", ...)
```
These allow the URL to change without performing a traditional full-page navigation.

When you click:
<Link to="/about">About</Link>

React Router can effectively cause the URL to become:   /about

without the browser doing a complete document reload.


# Routes
Routes is responsible for looking at the current location and selecting the best matching route.
```js
<Routes>
   <Route path="/" element={<Home />} />
   <Route path="/about" element={<About />} />
   <Route path="/users/:id" element={<User />} />
</Routes>
```
If URL is:  /users/42

React Router determines that:   /users/:id  matches.

So:<User />  gets rendered.


# Route
A route describes:   URL pattern → React element

<Route
   path="/about"
   element={<About />}
/>

Meaning:

If URL matches /about
        ↓
render <About />

# Dynamic Routes — :id
```js
import { useParams } from "react-router-dom";

function UserPage() {
   const { id } = useParams();

   return <h1>User ID: {id}</h1>;
}

<Route
   path="/users/:id"
   element={<UserPage />}
/>
/users/1
/users/42
/users/999
```

# What is the difference between BrowserRouter, Routes, and Route in React Router v6?"
BrowserRouter provides the routing context and integrates React Router with the browser's History API, allowing client-side navigation and URL management.

Routes looks at the current URL and determines the best matching route from its child Route components.

Route defines a URL pattern and the React element that should be rendered when that pattern matches.

In React Router v6, Routes replaces the v5 Switch and uses best-match ranking. Also, the element prop expects a React element such as <UserPage />, not the component reference UserPage.


BrowserRouter manages the browser-based routing context using the History API.

Routes finds the best matching Route for the current location.

Route maps a path pattern to a React element, and in v6 element receives JSX such as <UserPage />, not the component reference itself.


# What is useNavigate()?
useNavigate is a React Router v6 hook used for programmatic navigation. It returns a navigate function that can navigate to a specific path, move through browser history, or replace the current history entry. For example, navigate('/dashboard') navigates to the dashboard, navigate(-1) goes back one history entry, and navigate('/dashboard', { replace: true }) replaces the current history entry. It replaced the commonly used useHistory API from React Router v5. Internally, the hook gets navigation capabilities from the Router context and updates the application's location, which causes React Router to match and render the appropriate route.

useNavigate() is a React Router v6 hook that gives you a function for navigating programmatically.
Instead of relying on:
```js
<Link to="/dashboard">Dashboard</Link>
```
you can do:
```js
const navigate = useNavigate();

navigate("/dashboard");
```

navigate() has two important forms
Form 1 — Navigate to a path
```js
navigate("/dashboard");
```
You can also pass options:
```js
navigate("/dashboard", {
    replace: true//replace: true replaces the current history entry instead of pushing a new one.
});
```
Form 2 — Navigate through history
```js
navigate(-1);
```
means:

Go back one history entry.

Similarly:
```js
navigate(1);
```
means:

Go forward one history entry.


Without replace
/login
   ↓
/dashboard

Browser history contains both.

Press Back:

/dashboard
    ↓ Back
/login

That may be undesirable after login.


With replace: true
/login
   ↓
/dashboard

But conceptually the history entry becomes:

/dashboard

instead of:

/login

So pressing Back won't simply return to the login page.


# navigate() vs window.location

# Why not simply use window.location.href?
```js
window.location.href = "/dashboard";

navigate("/dashboard");
```
window.location      Browser-level navigation.   It can cause a full document navigation/reload.


# What is useNavigate() in React Router v6, and how is it different from useHistory() in React Router v5?
useNavigate() is a React Router v6 hook that returns a function used for programmatic navigation. We can use it to navigate to a specific path, move backward or forward in history, and optionally replace the current history entry.

For example, navigate("/dashboard") navigates to a route, navigate(-1) moves one step backward in history, and navigate("/dashboard", { replace: true }) replaces the current history entry.

In React Router v5, programmatic navigation was commonly handled using the useHistory() hook and methods such as history.push() and history.goBack(). React Router v6 replaced this API with the simpler navigate() function.
```js
// v5
const history = useHistory();

history.push("/dashboard");

history.goBack();
//
// v6
const navigate = useNavigate();

navigate("/dashboard");

navigate(-1);
```

# Passing State During Navigation
navigate() can also pass navigation state.
```js
navigate("/profile", {
    state: {
        userId: 123
    }
});
```
Then another component can access that state through useLocation()
```js
import { useLocation } from "react-router-dom";

function Profile() {
    const location = useLocation();

    console.log(location.state);

    return <h1>Profile</h1>;
}
```


# What is the difference between useParams() and useLocation() in React Router v6?
useParams() is used to access dynamic parameters defined in the route path, such as :id. For example, if the route is /users/:id and the URL is /users/42, useParams() returns { id: "42" }.

useLocation() provides information about the current URL location, including pathname, search, hash, state, and key. For example, for /users/42?tab=profile#posts, location.pathname is /users/42, location.search is ?tab=profile, and location.hash is #posts.

Both hooks must be used inside a Router because they consume routing context provided by React Router.

```js
import {
    BrowserRouter,
    Routes,
    Route,
    useParams,
    useLocation
} from "react-router-dom";

function Product() {
    const { id } = useParams();
    const location = useLocation();

    return (
        <div>
            <h1>Product</h1>

            <p>ID: {id}</p>

            <p>Path: {location.pathname}</p>

            <p>Search: {location.search}</p>

            <p>Hash: {location.hash}</p>
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/products/:id"
                    element={<Product />}
                />
            </Routes>
        </BrowserRouter>
    );
}
```

if we have query param :
{
    id: "42",
    category: "mobile"
}
```js
const location = useLocation();

const params = new URLSearchParams(location.search);//    This is a native JavaScript Web API.

const category = params.get("category");

location.pathname
location.search
location.hash
location.state
location.key


const url = "?name=priti&age=25";

const params = new URLSearchParams(url); //This is a native JavaScript Web API.

console.log(params.get("name"));//priti
```

useLocation().state
React Router can also carry state during navigation.
```js
navigate("/profile", {
    state: {
        from: "dashboard"
    }
});
const location = useLocation();

console.log(location.state);
```


# Nested Routes & <Outlet /> — React Router v6
The parent route owns the shared layout, and <Outlet /> is the placeholder where the matched child route gets rendered.

<Outlet /> is not an ordinary React component that magically knows what to render.

It acts as a placeholder connected to React Router's routing context.

# What is <Outlet /> in React Router v6, and how does it work with nested routes?
<Outlet /> is a placeholder component provided by React Router v6 that renders the element of the currently matched child route. When routes are nested, the parent route renders the shared layout, such as a navbar or sidebar, and places <Outlet /> where the child route's UI should appear. React Router matches the current URL against the route hierarchy and provides the corresponding child element through the router context to <Outlet />. This allows shared layouts to remain around different child pages without duplicating the layout code.

```js
function DashboardLayout() {
    return (
        <>
            <Navbar />
            <Sidebar />

            {/* React Router inserts matched child here */}
            <Outlet />
        </>
    );
}

const routeTree = {
    path: "/dashboard",
    element: DashboardLayout,
    children: [
        {
            path: "profile",
            element: Profile
        },
        {
            path: "settings",
            element: Settings
        }
    ]
};

// or 

import {
    BrowserRouter,
    Routes,
    Route,
    Outlet
} from "react-router-dom";

function Home() {
    return <h2>Home</h2>;
}

function Profile() {
    return <h2>Profile</h2>;
}

function Settings() {
    return <h2>Settings</h2>;
}

function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>

            <Outlet />
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/dashboard" element={<Dashboard />}>

                    <Route
                        path="profile"
                        element={<Profile />}
                    />

                    <Route
                        path="settings"
                        element={<Settings />}
                    />

                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;
```

Why Child Paths Don't Start With /
The child path:

profile

is relative to:

/dashboard

Therefore:

/dashboard + /profile

becomes:

/dashboard/profile



# What is a Protected Route?
A Protected Route is a route that should only be accessible when the user is authenticated.

# How would you implement a protected route in React Router v6?
I would create a wrapper component that checks the authentication state before rendering the protected component. If the user is authenticated, I render the children. If the user is not authenticated, I return React Router v6's <Navigate> component to redirect them to the login page.

I would use the replace prop so the unauthorized protected route isn't left in the browser history, preventing the user from simply pressing Back to return to that route.

In a real application, I would also handle the loading state while authentication is being determined, because user === null could initially mean that authentication hasn't finished checking rather than that the user is definitely logged out.
```js

function ProtectedRoute({ children }) {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
// The "protection" comes from conditional rendering + React Router navigation.   if user = null;

// App.js
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
```


# React Router v6 — <Link> & <NavLink>

# What is <Link>?
<Link> is React Router's replacement for a normal <a> tag when you want client-side navigation. <Link> provides client-side navigation, while <a> performs normal browser navigation.

```js
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
```
Because <a> normally asks the browser to navigate to a new document.

<Link> lets React Router handle the navigation inside your SPA.


# What is <NavLink>?
<NavLink> is basically a specialized version of <Link>.

Its special feature:

It knows whether the link's route is currently active.

```js
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}
```

When you're at:

/about

the About link is considered active.

This is useful for navigation menus.

Active class with <NavLink>

You can use a function for className.
```js
<NavLink
  to="/about"
  className={({ isActive }) =>
    isActive ? "active" : ""
  }
>
  About
</NavLink>
`
```

The function receives:

{
  isActive,
  isPending
}

# What is the difference between <Link> and <NavLink> in React Router?
<Link> is used for client-side navigation in React Router without causing a full page reload. It updates the application's location so React Router can render the matching route.

<NavLink> provides the same navigation behavior but additionally knows whether its target route is currently active. It exposes isActive, which can be used to conditionally apply classes or styles. For the root route /, the end prop can be used when we want the link to be active only for an exact ending match rather than matching descendant paths.






# React + TypeScript
With TypeScript

We describe the shape of that object:

```js
interface Props {
  name: string;
  age?: number;
}

function Card({ name, age }: Props) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
    </div>
  );
}
```
TypeScript does NOT exist at runtime
Suppose you write:
```js
interface Props {
  name: string;
  age?: number;
}

function Card({ name, age }: Props) {
  return <h1>{name}</h1>;
}
```
TypeScript uses the interface during development/type-checking.

After compilation/transpilation, the type information disappears.

Conceptually, JavaScript becomes:
```js
function Card({ name, age }) {
  return <h1>{name}</h1>;
}
```
There is no Props interface at runtime.

So:

TypeScript
     ↓
Checks your code
     ↓
Compile / transpile
     ↓
JavaScript
     ↓
Browser

The browser doesn't know what an interface is.





# What Does : Props Actually Mean?

Type annotation
: Props
means:

"The object being destructured must satisfy the Props type."


```js
interface Props {
  name: string;
  age?: number;
  onSelect: (name: string) => void;
}

function UserCard({ name, age, onSelect }: Props) {
  return (
    <div>
      <h2>{name}</h2>

      {age !== undefined && <p>Age: {age}</p>}

      <button onClick={() => onSelect(name)}>
        Select
      </button>
    </div>
  );
}

function App() {
  const handleSelect = (name: string) => {
    console.log("Selected:", name);
  };

  return (
    <UserCard
      name="Priti"
      age={25}
      onSelect={handleSelect}
    />
  );
}
```

# interface vs type
# Why Prefer interface for Component Props?
Prefer interface for component props because it supports declaration merging.
```js
interface User {
  name: string;
}

interface User {
  age: number;
}

```
TypeScript merges them conceptually into:
```js
interface User {
  name: string;
  age: number;
}
```
This is called declaration merging.

A type alias doesn't work the same way:
```js
type User = {
  name: string;
};

type User = {
  age: number;
};
```
❌ Duplicate identifier.

So for ordinary React component props: use interface


# How do you type props in a React functional component using TypeScript?
I define the expected shape of the component props using an interface or type, and then use that type as the parameter annotation of the functional component. For example, interface Props { name: string; age?: number } followed by function Card({ name, age }: Props). TypeScript checks that the parent passes the correct prop types at compile time. Optional properties are represented with ?, so age?: number means the property may be omitted and is effectively number | undefined. The type information is erased when TypeScript is compiled to JavaScript, so interfaces don't exist at runtime."

# Does React use the interface at runtime?
No. TypeScript interfaces are compile-time only. React receives a normal JavaScript props object at runtime. The interface is used by TypeScript to catch incorrect props during development and then gets erased from the generated JavaScript


# When should you explicitly type useState, and when can TypeScript infer the type?
TypeScript can usually infer the state type from the initial value, so explicit typing isn't necessary for straightforward values such as useState(0), useState(""), or useState(false).

However, explicit generics are useful when the initial value doesn't fully describe the eventual state type, such as nullable objects, empty arrays, or complex state.

For example, if a user is initially unavailable, I would write useState<User | null>(null) because the state can later contain either a User or null. For an empty array whose elements will later be users, I would use useState<User[]>([]) so TypeScript knows the intended element type.

The generic provides compile-time type safety; it doesn't change how React stores or updates state at runtime.
```js
type Form = {
  username: string;
  password: string;
};
// Inference
const [count, setCount] = useState(0);
// Explicit union
const [user, setUser] = useState<User | null>(null);
// Explicit array type
const [users, setUsers] = useState<User[]>([]);

const [names, setNames] = useState<string[]>([]);


const [form, setForm] = useState<Form>({
  username: "",
  password: ""
});
// union 
const [status, setStatus] =
  useState<"idle" | "loading" | "success" | "error">("idle");
```




# What is the difference between useRef and useState, and why doesn't changing ref.current cause a re-render?"

useState and useRef both preserve values across renders, but they serve different purposes. Updating state using its setter schedules a React re-render, while changing ref.current directly does not trigger a re-render. A ref is a persistent mutable container, conceptually { current: value }, whose object identity is preserved across renders. Refs are commonly used for accessing DOM elements or storing mutable values that don't need to participate in rendering, such as timer IDs or previous values.

useRef gives you a persistent object whose .current value survives renders, but changing .current does not trigger a re-render.

```js
const inputRef = useRef<HTMLInputElement>(null);
const countRef = useRef<number>(0);
```



```js
<input id="username" />

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
};


const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
};

const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
) => {
    if (e.key === "Enter") {
        console.log("Enter pressed");
    }
};

React.ChangeEvent<HTMLInputElement>
React.FormEvent<HTMLFormElement>
React.MouseEvent<HTMLButtonElement>
React.ChangeEvent<HTMLInputElement>
React.FormEvent<HTMLFormElement>
React.MouseEvent<HTMLButtonElement>
React.MouseEvent<HTMLDivElement>
React.KeyboardEvent<HTMLInputElement>
React.FocusEvent<HTMLInputElement>
React.ChangeEvent<HTMLSelectElement>
React.ChangeEvent<HTMLInputElement>
React.ChangeEvent<HTMLTextAreaElement>
```


```js
import { useState } from "react";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setEmail(e.currentTarget.value);
    };

    const handlePasswordChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPassword(e.currentTarget.value);
    };

    const handleSubmit = (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        console.log({
            email,
            password
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={handleEmailChange}
            />

            <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
            />

            <button type="submit">
                Login
            </button>
        </form>
    );
}
```


Event	                                                    Type
Input change	                              React.ChangeEvent<HTMLInputElement>
Form submit	                                React.FormEvent<HTMLFormElement>
Button click	                                React.MouseEvent<HTMLButtonElement>
Mouse enter	                                React.MouseEvent<HTMLDivElement>
Keyboard event	                          React.KeyboardEvent<HTMLInputElement>
Focus	                                          React.FocusEvent<HTMLInputElement>
Select change	                              React.ChangeEvent<HTMLSelectElement>
Checkbox change	                        React.ChangeEvent<HTMLInputElement>
Textarea change	                           React.ChangeEvent<HTMLTextAreaElement>


# What is the difference between event.target and event.currentTarget in React?
event.target refers to the actual element where the event originated, while event.currentTarget refers to the element whose event handler is currently handling the event.

Because events can bubble from child elements to parent elements, these can be different.
```js
function App() {
    const handleClick = (
        e: React.MouseEvent<HTMLButtonElement>
    ) => {
        console.log(e.target);
        console.log(e.currentTarget);
    };

    return (
        <button onClick={handleClick}>
            <span>Click</span>
        </button>
    );
}
```
If the user clicks the <span>:

event.target
    ↓
<span>

event.currentTarget
    ↓
<button>
target tells us where the event started, while currentTarget tells us which element owns the currently executing handler.

For TypeScript, currentTarget is often especially useful because its type is associated with the generic element specified in the event type.


Stopping Event Bubbling
```js
const handleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement>
) => {
    e.stopPropagation();

    console.log("Button");
};
```

# How do you type event handlers in React with TypeScript?"

"I use React's event types with the appropriate DOM element as the generic parameter. For example, an input change handler uses React.ChangeEvent<HTMLInputElement>, a form submission uses React.FormEvent<HTMLFormElement>, and a button click uses React.MouseEvent<HTMLButtonElement>. This gives TypeScript knowledge of the event and the element involved, allowing safe access to properties such as currentTarget.value. I also distinguish target from currentTarget: target is where the event originated, while currentTarget is the element whose handler is currently executing."


# What are generic components in React + TypeScript, and why would you use them?
Generic components are reusable React components whose props are parameterized by a TypeScript type variable such as T. Instead of creating separate components for each data type, we define one component that can work with different types while preserving type safety.

For example, a generic List<T> can accept T[] and a renderItem callback receiving T. When we pass User[], TypeScript infers T as User; when we pass Product[], it infers T as Product.

Generics are primarily a compile-time TypeScript feature. They don't exist as generic runtime objects in JavaScript. After TypeScript compilation, the runtime component is essentially an ordinary JavaScript function.

The main benefit is reusability + type safety, because the type of items and the argument of renderItem remain connected.
```js
function List<T>({
  items,
  renderItem
}: {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}) {
  // ...
}
```
The key is that T represents the type of the items, and TypeScript can usually infer T from items.

# What problem do Generic Components solve?
Without generics, you might make separate components:
```js
function UserList({ users }: { users: User[] }) {
  // ...
}

function ProductList({ products }: { products: Product[] }) {
  // ...
}

function NumberList({ numbers }: { numbers: number[] }) {
  // ...
}
```
That's repetitive.

We want one component:

List<User>
List<Product>
List<number>

The component's implementation stays the same, but the data type changes.

That's exactly what generics provide.

First understand T

Think of:  <T>

as a placeholder for a type.

For example:
```js

function identity<T>(value: T): T {
  return value;
}
```

```js
import React from "react";

type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};

function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}

const users = [
  { id: 1, name: "Priti" },
  { id: 2, name: "Vipin" }
];

<List
  items={users}
  renderItem={(user) => <span>{user.name}</span>}
/>
```






#  . Generic Constraints
```js
type HasId = {
  id: number;
};

function printId<T extends HasId>(item: T) {
  console.log(item.id);
}

printId({
  id: 1,
  name: "Priti"
});
// works.

// Because the object has at least:

// id: number
```


```js
type SelectProps<T> = {
  options: T[];
  getLabel: (option: T) => string;
  onChange: (option: T) => void;
};

function Select<T>({
  options,
  getLabel,
  onChange
}: SelectProps<T>) {
  return (
    <select>
      {options.map((option, index) => (
        <option key={index}>
          {getLabel(option)}
        </option>
      ))}
    </select>
  );
}



// usage
type User = {
  id: number;
  name: string;
};

const users: User[] = [
  { id: 1, name: "Priti" },
  { id: 2, name: "Rahul" }
];


<Select
  options={users}
  getLabel={(user) => user.name}
  onChange={(user) => {
    console.log(user.id);
  }}
/>
```

# React.FC vs Function Declarations

React.FC used to be convenient because children was implicitly included in its props type in older React typings. With React 18+, children is not implicitly included, so React.FC provides less benefit. Explicitly typed function declarations are generally clearer.

# What is the difference between React.FC and a normal function declaration in TypeScript?
React.FC is a TypeScript type that describes a React function component. It can provide some additional typing around the component, but it isn't a different runtime mechanism. After TypeScript compilation, both approaches result in ordinary JavaScript functions that React can render.

Historically, React.FC implicitly included children through React's TypeScript definitions, but that behavior was removed in the React 18 typings. Therefore, if a component accepts children, we should explicitly add children?: React.ReactNode to its props.

In modern React TypeScript code, I generally prefer explicitly typed function parameters, and when useful, an explicit return type such as JSX.Element | null, because the props and return behavior are more obvious.

Style A — React.FC
```js
import React from "react";

type ButtonProps = {
  text: string;
};

// FC means FunctionComponent
// React.FC<Props>  this variable is a React function component whose props have type Props."
const Button: React.FC<ButtonProps> = ({ text }) => {
  return <button>{text}</button>;
};

```

Style B — Function declaration
```js
type ButtonProps = {
  text: string;
};

function Button({ text }: ButtonProps): JSX.Element {
  return <button>{text}</button>;
}
```
Both create a normal JavaScript function at runtime.

The major difference is how TypeScript describes and checks that function.


```js

Suppose we want:

<Card title="Profile">
  <p>Hello</p>
</Card>

// explicit Define:
type CardProps = {
  title: string;
  children?: React.ReactNode;//  explicit 
};
const Card: React.FC<CardProps> = ({ title, children }) => {
  return <div>{children}</div>;
};
// Both approaches provide prop type checking.


// children can contain things such as:

// string
// number
// JSX
// array of JSX
// null

// because we're using:

// React.ReactNode
```

# Why React.ReactNode for children?
JSX.Element

Represents a JSX element-like value returned by a component.

For example:
```js
const element: JSX.Element = <div>Hello</div>;
```
```js
React.ReactNode

Much broader:

type Example = React.ReactNode;

It can represent renderable things such as:
"Hello"
42
<div />
null
undefined
[<div />, <span />]

So for children, you usually want:
children?: React.ReactNode;

not:

children?: JSX.Element;

```