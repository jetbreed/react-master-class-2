import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import './Form1_useState_Style.css';

export default function Form_Submission(){

    const [name, setName] = useState("");
    // const [name, setName] = useState1();

    const handleSubmit = (e)=> {
        e.preventDefault();
        alert(`The name you entered was: ${name}`)
    }

    return(
        <div style=
    {{
            backgroundColor:'blue',
            height:'1000px',
            paddingTop:'200px'
        }}
        >

        <form className="App" onSubmit={handleSubmit} >
            <label>
                <input style=
                {{
                    width:'400px', 
                    height:'50px',
                    padding:'20px'
                }}
                    placeholder="Enter Name"
                    type="text"
                    value={name}
                    onChange={(event)=> setName(event.target.value)}
                />
            </label>
            <br/>
            <div id="input">
            <input type="submit" value='SUBMIT'/>
            </div>
        </form>
        </div>
    )

}