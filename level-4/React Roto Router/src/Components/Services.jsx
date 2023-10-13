import React from "react"
import {useNavigate} from 'react-router-dom';

export default function Services(){

    const navigate = useNavigate()

    return(

    <div className = "services">
        <h2>Services</h2>
        <p>You have come to the wrong place for any plumbing relate need but here are some people I can text for you</p>
<ul>
    <li>My husband</li>
    <li>My dad</li>
    <li>My father in law (actually he should be the first one on the list he's REALLY good)</li>
    <li>Really... I can plunge a toilet but that's about it I'm afraid!</li>
</ul>
     <ul className = "nav">
        <li><button onClick = {() => navigate("/")}>Home</button></li>
        <li><button onClick = {() => navigate("/about")}>About</button></li>
     </ul>
    </div>
    )
}