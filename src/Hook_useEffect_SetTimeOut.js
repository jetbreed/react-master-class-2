import React from "react";
import { useState, useEffect } from "react";

function Hook_useEffect_SetTimeOut() {
  // hOOK USESTATE INSTANTIATION
  const [count, setCount] = useState(1000);

  useEffect(() => {
    setTimeout(() => {
      // setCount((count) => count - 1);
      setCount((count) => count + 1);
      // if(count < 995)
      // {
      //   alert("Time Up!!!");
      // }
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}

export default Hook_useEffect_SetTimeOut;



