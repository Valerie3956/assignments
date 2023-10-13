import React from "react"
import {Link} from "react-router-dom"

export default function Navbar(){
    return(

    <div className = "navbar">
        <h3>Some awesome plumbing company name</h3>
     <ul className = "nav">
        <Link to = "/" className = "link">
        <li className = "navItems">Home</li>
        </Link>
        <Link to = "about" className = "link">
        <li className = "navItems">About</li>
        </Link>
        <Link to = "services" className = "link">
        <li className = "navItems">Services</li>
        </Link>
     </ul>
    </div>
    )
}