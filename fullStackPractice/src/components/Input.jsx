/** @format */

import { forwardRef } from "react";
const Input = forwardRef((props, ref) => {
      console.log(props.name);
      console.log(ref);
  return <input ref={ref} />;
});

export default Input;
