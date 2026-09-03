import {useEffect, useRef, useState} from "react"
import Box from './components/Box';
import Timer from "./components/Timer";
import Counter from './components/Counter';
import Input from './components/Input';

  const options = {
    steps: 1,
  };

function App () {
  const [ count, setCount ] = useState(0)
  const sectionRef = useRef(null)
  const nameRef = useRef(null)

  const  [value,setValue]= useLocalStorage("them","light")

  function handleScrollByRef () {
     sectionRef.current.scrollIntoView({
       behavior: "smooth",
     });
  }

  function increaseCount () {
    setCount(count + 1);

  }

useEffect(() => {
  console.log("Start");

  return () => {
    console.log("Cleanup");
  };
}, []);

  // useEffect(() => {
  //   document.title=`Count: ${count}`
  // }, [count])

// If the object doesn't need to change:could be moved outside the component:
  // const options = {
  //   steps:1
  // }

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     console.log(count)
  //   }, 1000);

    // return () => {
    //   clearInterval(id)
    // }
  // }, [])

  // useEffect(() => {
  //   console.log("useEffect Runs ...")
  // },[options])

  return (
    <>
      <div>
        <nav
          style={{width: "100%", height: "12vh", backgroundColor: "orange"}}
        >
          <ul
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}>
            <li>Home </li>
            <li>About</li>
            <li>Contact </li>
            <li>
              <button>Dark/light</button>{" "}
            </li>
          </ul>
        </nav>
        <div
          className={``}

          style={{
            border: "3px solid green",
            width: "300px",
            padding: "12px",
            margin: "auto 20px",
          }}>
          name:
          <Input ref={nameRef} />
        </div>

        <div
          onClick={handleScrollByRef}
          style={{
            cursor: "pointer",
            padding: "20px",
            border: "2px solid red",
            width: "200px",
          }}>
          Go To Section
        </div>

        <Timer />
        <Counter />

        <div style={{ height: "1000px" }}>
          <h1>hi there...👋</h1>
          <h3>{count}</h3>
          <button onClick={increaseCount}>Add</button>
        </div>

        <div ref={sectionRef}>
          Target Section
          {/* <div ref={(node) => {
          console.log(node)
        }} */}
          Target Section
        </div>
        <Box />
      </div>
    </>
  );
}

export  default App

// import { useState } from "react";
import useLocalStorage from './components/useLocalStorage';


// function App() {
//   const [node, setNode] = useState(null);

//   return (
//     <div>
//       <input
//         ref={(element) => {
//           setNode(element);
//         }}
//       />

//       <p>{node ? "Input exists" : "Input does not exist"}</p>
//     </div>
//   );
// }
// export default App;