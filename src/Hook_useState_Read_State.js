import React from "react";
//This is the useState Hook importation
import { useState } from "react";

function Hook_useState_Read_State() {
// Initialize state at the top of the function component by DESTRUCTURING >>>
// useState accepts an initial state and returns two values:
// The current state.
// A function that updates the state.
// The first value, color, is our current state.
// The second value, setColor, is the function that is used to update our state.
// These names are variables that can be named anything you would like.
// Lastly, the initial state can be set to an empty string: useState("")
  const [color, setColor] = useState("green");

// READ STATE
// We can now include and read our state anywhere in our component.
  return <h1>My favorite color is {color}!</h1>
}

export default Hook_useState_Read_State;


/*
    Class FavoriteColor
    {
        String newColor;
        public String setColor(color)
        {
            this.newColor =  color;
        }
    }


*/