import React from "react";
import { useState } from "react";


export default function InputState(){

    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');


    if(status === 'success'){
        return <h1>That's Right!!!</h1>
    }

    async function handleSubmit(e){
        e.preventDefault();
        setStatus('submitting');
        try{
            await submitForm(answer);
            setStatus('success');
        } catch (err){
            setStatus('typing');
            setError(err);
        }
    }

    function handleTextAreaChange(e){
        setAnswer(e.target.value);
    }

    return (
        // this handleSubmit is a 
        <div style={{background:'yellow', height:'900px', display:"flex", justifyContent:"center", paddingTop:"150px"}}>
    
            <form onSubmit={handleSubmit}>

                <textarea
                style={{width:"150%"}}
                value={answer}
                onChange={handleTextAreaChange}
                />

                <br/>
                <br/>

                <button style={{width:"150%"}} className="btn-lg btn-danger"
                 disabled={answer.length === 0 || 
                    status === 'submitting'}>
                    SUBMIT NOW!
                </button >
                {error !==null &&
                <p className="Error">
                    {error.message}
                </p>}
            
            </form>
        
        </div>
    )
}

    function submitForm(answer){
   // Pretend it's hitting the network.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let shouldError = answer.toLowerCase() !== 'chris';
                if(shouldError){
                    reject(new Error('Good guess, but  wrong answer! Try again!'));
                }else{
                    resolve();
                }
            }, 1000);
        });
    }
