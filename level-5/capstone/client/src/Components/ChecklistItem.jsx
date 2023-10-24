import React, {useContext, useState} from "react"
import {ChecklistContext} from "./ChecklistContext"

export default function ChecklistItem(props){

    const [editFormToggle, setEditFormToggle] = useState(false)

    const {editToggle} = useContext(ChecklistContext)

    return(
<div>
{editFormToggle? <ChecklistForm submit = {editItem}/> :<h4 key={props.item}>{props.item}</h4>}
            {editToggle && <button className = "editButton" onClick = {() => {setEditFormToggle(prevToggle => !prevToggle)}}></button> }
            {editToggle && <button className = "editButton">Delete</button>}
</div>
    )
}