import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

function Panel({title, message}){
    const [isActive, setIsActive] = useState(false);
    return(
    <section className="accordion-body accordion-item">
        <h3>{title}</h3>
        {
            isActive 
            ? 
            <p>{message}</p> 
            :
            <button onClick={() => setIsActive(true)}>
                Show
            </button>
        }
        
    </section>
    );    
}


function Accordion(){
    return(
        <>
            <h2>
                NIIT Institution
            </h2>
            <Panel title="Semester-1" message="Semester-1 has resumed!"/>
            <Panel title="Semester-2" message="Semester-2 has resumed!"/>
            <Panel title="Semester-3" message="Semester-3 has resumed!"/>
            <Panel title="Semester-4" message="Semester-4 has resumed!"/>
            
        </>
    )
}

export default function SharingStateBtwComponents_Ex1(){
    return    <Accordion/>
}