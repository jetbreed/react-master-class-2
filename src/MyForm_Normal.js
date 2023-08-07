import React from 'react';

function MyForm_Normal() {
    return (
      <div style={{height:"900px", backgroundColor:"blue"}}>
        <form style={{display:"flex", alignContent:"center", flexDirection:"column", paddingTop:"150px", color: "#fff"}}>
          <label>Enter your name: 
            <input type="text" />
          </label>
        </form>
      </div>
    )
  }
  
  export default MyForm_Normal;