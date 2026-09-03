/** @format */

import { useRef } from "react";

function Timer() {
  const timerRef = useRef(null);

  function startTimer() {
    timerRef.current = setTimeout(() => {
      console.log("Timer finished");
    }, 2000);
  }

  function cancelTimer() {
    clearTimeout(timerRef.current);
  }

  return (
    <div>
      <button onClick={startTimer}>Start</button>

      <button onClick={cancelTimer}>Cancel</button>
    </div>
  );
}

export default  Timer