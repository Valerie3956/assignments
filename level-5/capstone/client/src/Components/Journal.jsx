import React, {useState} from "react";
import { Link } from "react-router-dom"


export default function Journal(){

    const [entry, setEntry] = React.useState(0)

    return(
        <div className = "main">
            <form>
                <input type = "date"></input>
                <input type = "textarea"></input>
                <button>Submit Journal Entry</button>
            </form>
            <Link to="/journal/entries" >
            <button className = "button">  View past journal entries</button>
                </Link>
            <div className = "navButtons">
                <Link to="/" >
                <button className = "button">Home</button>
                </Link>
            <Link to="/meditation" >
                <button className = "button">Meditate</button>
                </Link>
                <Link to="/checklist" >
                <button className = "button">Checklist</button>
                </Link>
            </div>
        </div>
    )
}