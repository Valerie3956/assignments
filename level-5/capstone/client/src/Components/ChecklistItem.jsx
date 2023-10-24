import React, {useContext, useState} from "react"
import {ChecklistContext} from "./ChecklistContext"
import ChecklistForm from "./ChecklistForm"

export default function ChecklistItem(props){

    const [editFormToggle, setEditFormToggle] = useState(false)

    const {editToggle, editItem, deleteItem} = useContext(ChecklistContext)

    return(
<div>
{editFormToggle? <ChecklistForm item = {props.item} submit = {editItem} _id = {props.id}/> :<h4 key={props.id}>{props.item}</h4>}
            {editToggle && (editFormToggle? <button className = "editButton" onClick = {() => {setEditFormToggle(prevToggle => !prevToggle)}}>Close</button>
            :
            <button className = "editButton" onClick = {() => {setEditFormToggle(prevToggle => !prevToggle)}}>Edit</button>
            )} 
            {editToggle && <button className = "editButton" onClick = {() => {deleteItem(props.id)}}>Delete</button>}
</div>
    )
}