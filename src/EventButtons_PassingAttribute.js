import React from "react";

function Football2() {
//   const shoot = (a) => {
//     alert(a);
//   }
const buttonValues = {
    value1:"Goal1", 
    value2:"Goal2", 
    value3:"Goal3", 
    value4:"Goal4"
}

function shoot(a)
{
    alert(a);
}


  return (
    <>
        <button onClick={() => shoot(buttonValues.value1)}>
            Take the shot!
        </button>
        <button onClick={() => shoot(buttonValues.value2)}>
            Take the shot!
        </button>
        <button onClick={() => shoot(buttonValues.value3)}>
            Take the shot!
        </button>
        <button onClick={() => shoot(buttonValues.value4)}>
            Take the shot!
        </button>
    </>
  );
}

export default Football2;
