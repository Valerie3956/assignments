import React from "react"
import {useNavigate} from 'react-router-dom';

export default function About(){

    const navigate = useNavigate()

    return(

    <div className = "about">
        <h2>About me</h2>
        <p>I know nothing about plumbing but here is a software meme that sort of relates to plumbing I found online so I could add an image to this website!</p>
     <img src = "plumbing.png" width = "300px"></img>
     <ul className = "nav">
     <li><button onClick = {() => navigate("/")}>Home</button></li>
        <li><button onClick = {() => navigate("/services")}>Services</button></li>
     </ul>
    </div>
    )
}