import React, { useState } from "react";

export default function NumberCountBinding(){
    const counter = <Counter/>
    return(
        <div className="App">
            <br/>
            <br/>
            <br/>
            {counter}
            <br/>
            <br/>
            <br/>
            {counter}
        </div>
    );
}

function Counter(){
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = 'counter';

    if (hover) {

        className= 'hover'
        
    }

    return (
        <div className={className} style={{
            border:'1px solid', borderRadius:'5px', 
            marginLeft:'5px'
        }}
            
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
            
        > 

            <h1>{score}</h1>
            <button onClick={() => setScore(score + 1)}>
                Add One
            </button>

        </div>
    )
}