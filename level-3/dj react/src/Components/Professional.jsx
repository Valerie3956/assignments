import React from "react"

export default function Professional(props){
    return(
        <>
    <button onClick = {() => props.handleClick(2)}>professional dj</button>
    <button onClick = {() => props.handleClick(3)}>professional dj</button>
    </>
    )
}