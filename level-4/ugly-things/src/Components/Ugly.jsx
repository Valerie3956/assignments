import React from "react"


export default function Ugly(props){


    
    return(
        <div className = "ugly">
            <img src = {props.imgUrl}></img>
            <div className = "ugly--text">
            <h3>{props.title}</h3>
            <h4>{props.description}</h4>
            </div>
            <div className = "ugly--buttons">
            <button onClick = {() => props.handleEdit(props.id)}>EDIT</button>
            <button onClick = {() => props.handleDelete(props.id)}>DELETE</button>
            </div>
            

        </div>
    )
}