import React from 'react';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import "./Form1_useState_Style.css";

function Submitting_Form() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  return (
    <form
    style={{
      backgroundColor: "blue",
      height: "1000px",
      paddingTop: "200px",
      color:'#fff',
    }} 
    onSubmit={handleSubmit}>
    
      <label>Enter your name:
          <br></br>
        <input 
        style={{
          width: "400px",
          height: "50px",
          padding: "20px",
        }}
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br/>
      <br/>
      <div style={{display:"flex", alignContent:"center", flexDirection:"column", }}> 
        <input type="submit" />
      </div>
    </form>
  )
}


export default Submitting_Form