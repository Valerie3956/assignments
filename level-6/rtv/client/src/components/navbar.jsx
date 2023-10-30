import React from 'react'


export default function Navbar(props){

const {logout} = props

    return(
        <div className = "navbar">
            <div>
            <h2>Profile</h2>
            <h2>Public</h2>
            <h2 onClick = {logout}>Logout</h2>
            </div>
        </div>
    )
}