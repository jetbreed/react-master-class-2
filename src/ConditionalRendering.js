import React from "react";

function Steering(props)
{
    return <p>
        A steering is a {props.type} tool for navgating a car!
    </p>
}

function Tyres(props)
{
    return (
    <>
    <p>These are basically 
        <span style={{color:props.color, fontSize:50}}>
            {props.wheel.wheelNumber}</span> wheels
    that helps 
    the car to move!</p>
    </>
    )
}

function CarT()
{
    const varWheelNumber = {WheelNumber:"4", color:"red"};
    return(
        <>
            <p>Let's talk about Cars!!!</p>
            <Steering type="left"/>
            <Tyres wheel={varWheelNumber} color={varWheelNumber.color}/>
        </>
    )
}

export default CarT;