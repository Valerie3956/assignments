import React from "react"


export default function ColorComponent(props){
        let style = {backgroundColor: `${props.color}`}
    return(
        <div className = "square" style = {style}>
            <button className = "button" onClick = {props.handleClick} >CLICK ME!!!</button>
        </div>
        )
    }