import React from "react"

export default function Badge(props){
    return(
        <div className = "badge--wrap">
        <div className = "badge">
            <h3 className = "badge--title">Badge:</h3>
            <div className = "badge--content">
            <h3>Name: {props.fName} {props.lName}</h3>
            <h3>Phone: {props.phone}</h3>
            <h3>Place of Birth: {props.plOfBirth}</h3>
            <h3>Favorite food: {props.favFood}</h3>
            <h3>Email: {props.email}</h3>
            <p>{props.bio}</p>
            </div>
        </div>
        </div>
    )
}