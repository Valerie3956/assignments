import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(props){

const {logout} = props

    return(
        <div className = "navbar">
            <div>
            <Link to="/profile" className = "link">
            <h2>Profile</h2>
                    </Link>
                    <Link to="/public" className = "link">
            <h2>Public</h2>
                    </Link>
            <Link to="/" className = "link">
            <h2 onClick = {logout}>Logout</h2>
            </Link>
            </div>
        </div>
    )
}