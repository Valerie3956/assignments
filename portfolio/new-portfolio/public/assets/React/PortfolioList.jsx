import React from "react";


export default function PortfolioList(props){



    return(
        <div className = "portfolio">
            <h3>Project Name: {props.name}</h3>
            <p>Framework: {props.framework}</p>
<a href = {props.link} className = "github">See on Github</a>
<div>
<img src = {props.img1} className = "portfolio--image" ></img>
<img src = {props.img2} className = "portfolio--image" ></img>
<img src = {props.img3} className = "portfolio--image" ></img>
</div>
        </div>
    )
}