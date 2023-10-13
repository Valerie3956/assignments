import React from "react"
import {useNavigate} from 'react-router-dom'; 

export default function Home(){

    const navigate = useNavigate()

    return(

    <div className = "home">
        <h2>HOME PAGE</h2>
        <p>You will find some more buttons here to help navigate between pages because this is the point of the exercise, correct?</p>
     <ul className = "nav">
        <li><button onClick = {() => navigate("/about")}>About</button></li>
        <li><button onClick = {() => navigate("/services")}>Services</button></li>
     </ul>
    </div>
    )
}