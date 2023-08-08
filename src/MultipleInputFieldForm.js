import React from 'react';
import { useState } from 'react';

function MultipleInputFieldForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form style={{
      background:'blue',
      height:"1000px",
      color:"#fff",
      fontWeight:"700",
      paddingTop:"200px",
    }} onSubmit={handleSubmit}>
      <label>
        
      <input 
        placeholder='Enter your name:'
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <br></br>
      <br></br>
      <label>
        
        <input placeholder='Enter your age:'
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <br></br>
        <br></br>
        <div style={{
          display:"flex",
          justifyContent:"center",
        }}>
          <input type="submit" />
        </div>
    </form>
  )
}

export default MultipleInputFieldForm; 