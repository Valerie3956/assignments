import React from "react"

export default function Die(props){
    return(
        <div className = "dice--container">
        <h1 className = "number" onClick = {() => props.handleClick(props.id)}>{props.number}</h1>
        </div>
    )
}