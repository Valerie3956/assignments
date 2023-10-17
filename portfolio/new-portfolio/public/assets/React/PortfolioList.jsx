import React from "react";

export default function PortfolioList(props){
    return(
        <div>
            <h2>Project Name: {props.name}</h2>
            <h2>Framework: {props.framework}</h2>
<img src = {props.img1} width = "200px"></img>
<img src = {props.img2} width = "200px"></img>
<img src = {props.img3} width = "200px"></img>
<a href = {props.link}>Link</a>
        </div>
    )
}