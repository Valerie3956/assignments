import React, {useContext} from "react"
import {ChecklistContext} from "./ChecklistContext"

export default function ChecklistForm(props){

    const {handleSubmit, handleChange, formData} = useContext(ChecklistContext)

    return(
        <form onSubmit = {handleSubmit}>
            <input className = "checklistInput" type = "text" name = "item" id = "item" value = {formData.item} onChange = {handleChange}></input>
            <button className = "button">submit</button>
        </form>
    )
}