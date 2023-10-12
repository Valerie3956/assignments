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
            <button>EDIT</button>
            <button>DELETE</button>
            </div>
            

        </div>
    )
}