import React, { useState } from "react"
import { imageList } from "./data"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function StateComponentMemory()
{
    
    const [index, setIndex] = useState(0);    

    let hasPrev = index > 0;
    let hasNext = index < imageList.length - 1;

    function handlePrevClick() {
        if (hasPrev) {
        setIndex(index - 1);
        }
    }


    function handleNextClick() {
        if (hasNext) {
          setIndex(index + 1);
        }
    }
    
    let portrait = imageList[index];
    
    return(
        <>
        <div className="App">
            <div>
                <br/>
                <br/>
                <br/>
                {/* <button onClick={handleClick}>
                Next ({index + 1} of {imageList.length})
                </button> */}

                <button
                    onClick={handlePrevClick}
                    disabled={!hasPrev}
                >
                    Previous ({index + 1} of {imageList.length})
                </button>
                <button
                    onClick={handleNextClick}
                    disabled={!hasNext}
                >
                    Next ({index + 1} of {imageList.length})
                </button>
                <br/>
                <br/>
                 
            </div>
            <img className="img-thumbnail rounded-circle"
                src={portrait.image}
                width='100px'
                height='120px'
            />
                <br/>
                <br/>

             <p>
                Full Name: {portrait.FirstName} {portrait.LastName}
                <br>
                </br>
                Gender: {portrait.Gender}
                <br></br>
                Position: {portrait.Position}
            </p>
        </div>
        </>
    )

}

