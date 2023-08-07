// Update State
// To update our state, we use our state updater function.
// We should never directly update state. Ex: color = "red" is not allowed.
import React from "react";
import { useState } from "react";

function Hook_useState_Update_State() {
  const [color, setColor] = useState("red");
  const [Name, setName] = useState("Color group");

  return (
    <>
      <h1>The {Name} of my favorite color is {color}!</h1>
      Using a button to update the state:
      <button
      // Using a button to update the state:
      type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
      // Using a button to update the state:
      type="button"
        onClick={() => setName("Color Type")}
      >Blue</button>
    </>
  )
}

export default Hook_useState_Update_State;