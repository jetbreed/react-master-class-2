import React, { useState } from "react";

// Synced Inputs
export default function InputStateDataBinding(){
    const [text, setText] = useState('');

    function handleChange(e){
        setText(e.target.value);
    }

    return(
        <div className="App">
            
            <Input
                label='First Input '
                value={text}
                onChange={(e)=>setText(e.target.value)}
            />
            <br/>
            <br/>
            <Input
                label='Second Input'
                value={text}
                onChange={handleChange}
            />
        </div>
    )
}


function Input({label, value, onChange}){
    return(
        <label>
            {label}
            {' '}
            <input 
                value={value}
                onChange={onChange}
            />
        </label>
    )
}