import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';


export default function SharingStateBtwComponents_Ex2(){
    const [activeIndex, setActiveIndex] = useState(0);
    return(
        <>
            <Panel 
            title='OCR 8, Rapture Night!!!' 
            children='We are going for a Crusade!!!' 
            isActive={activeIndex === 0} 
            onShow={()=> setActiveIndex(0)}/>
            
            <Panel 
            title='OCR 9, Heavens Day!!!' 
            children='We are going Paradise!!!' 
            isActive={activeIndex === 1} 
            onShow={()=> setActiveIndex(1)}/>
        </>
    );
}


function Panel({title, children, isActive, onShow}){
    return(
        <section className="accordion-body accordion-item">
            
            {/* Ternary Operator */}
            {/* condition ? option1 : option2 */}
            {title}
            {
            isActive 
            ?
            <>
                <h3>{title}</h3>
                <span>{children}</span>
             </>
            :
             <button onClick={onShow}>
                Button
             </button>
            }
        </section>
    );
}
