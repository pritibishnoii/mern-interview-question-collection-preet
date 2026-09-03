/** @format */

import { useEffect, useRef, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const previousCount = useRef(null);
   const countRef = useRef(0);

   function handleClick() {
     countRef.current++;
        console.log("Inside handler:", countRef.current);
   }
    console.log("Render:", countRef.current);

  useEffect(() => {
    previousCount.current = count;
  }, [count]);

  return (
    <div>
      <p>Current: {count}</p>

      <p>Previous: {previousCount.current}</p>

      <button onClick={() => setCount(count + 1)}>Increment</button>

      <div>
        <p>{countRef.current}</p>

        <button onClick={handleClick}>Increment</button>
      </div>
    </div>
  );
}

export default Counter;