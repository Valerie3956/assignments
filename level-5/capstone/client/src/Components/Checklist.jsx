import React, {useState} from "react";
import ChecklistForm from "./ChecklistForm";
import { Link } from "react-router-dom"

export default function Checklist(){

    const [items, setItem] = React.useState([])

    return(
        <div className = "main">
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className = "navButtons">
            <Link to="/" >
                <button className = "button">Home</button>
                </Link>
            <Link to="/journal" >
                <button className = "button">Journal</button>
                </Link>
                <Link to="/meditation" >
                <button className = "button">Meditate</button>
                </Link>
                </div>
        </div>
    )
}