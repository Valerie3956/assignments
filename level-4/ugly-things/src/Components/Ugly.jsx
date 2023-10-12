import React from "react"

export default function Ugly(){
    return(
        <div className = "ugly">
            <img src = "https://www.myidealhome.us/wp-content/uploads/2017/08/ugliest.jpg"></img>
            <div className = "ugly--text">
            <h3>I am an ugly title</h3>
            <h4>I am an ugly description</h4>
            </div>
            <div className = "ugly--buttons">
            <button>EDIT</button>
            <button>DELETE</button>
            </div>

        </div>
    )
}