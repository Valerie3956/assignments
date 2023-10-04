import React from "react"

export default function Die(props){
    return(
        <div className = "dice--container">
        <h1 className = "number" onClick = {props.handleClick}>{props.die1}</h1>
        <h1 className = "number" onClick = {props.handleClick}>{props.die2}</h1>
        <h1 className = "number" onClick = {props.handleClick}>{props.die3}</h1>
        <h1 className = "number" onClick = {props.handleClick}>{props.die4}</h1>
        <h1 className = "number" onClick = {props.handleClick}>{props.die5}</h1>
        <h1 className = "number" onClick = {props.handleClick}>{props.die6}</h1>
        </div>
    )
}