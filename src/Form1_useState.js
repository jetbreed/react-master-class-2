// This is called "Hook"
import { useState } from "react";
import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import "./Form1_useState_Style.css";

export default function Form1_useState() {
    // This is a destructured useSate("") array
    // Your hook or useState  must come first in the lines of your code.  
  const [name, setName] = useState("");

  // function userDefined_useState(){
  //     return ['Christian','Aziz','Destiny','Life'];
  // }
  // const [name1, name2, name3, name4] = userDefined_useState();

  // userDefined_useState[0] = name1;
  // userDefined_useState[1] = name2;
  // userDefined_useState[2] = name3;
  // userDefined_useState[3] = name4;

  // console.log(name1);
  // console.log(name2);
  // console.log(name3);
  // console.log(name4);

  return (
    <div
      style={{
        backgroundColor: "blue",
        height: "1000px",
        paddingTop: "200px",
      }}
    >
      <form>
        <label>
          <input
            style={{
              width: "400px",
              height: "50px",
              padding: "20px",
            }}
            placeholder="Enter Name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
      </form>
    </div>
  );
}
