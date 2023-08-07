
// useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.
// This is not what we want. There are several ways to control when side effects run.
// We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.
import React from "react";
import { useState, useEffect } from "react";

function Hook_useEffect_SetTimeOut_withEmptyArray() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
//   }, [count]); // <- add empty brackets here
  }, []); // <- add empty brackets here
  
  return <h1>I've rendered {count} times!</h1>;
}

export default Hook_useEffect_SetTimeOut_withEmptyArray;

