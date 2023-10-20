import React, {useState} from "react"
import { v4 as uuidv4 } from 'uuid';



export default function AddTodoForm(props){

const [inputs, setInputs] = React.useState({
    name: props.name || "",
    description: props.description || "",
    imageUrl: props.imageUrl || "",
    completed: props.completed || false,
    _id: props._id || uuidv4()
})

function handleChange(event){
const {name, value} = event.target 
setInputs(prevInputs => (
    {
        ...prevInputs,
        [name]: value
    }
))
}

function handleSubmit(event){
    // event.preventDefault()
    props.submit(inputs, props._id)
    setInputs({
        name: props.name || "",
        description: props.description || "",
        imageUrl: props.imageUrl || "",
        completed: props.completed || false,
        _id: props._id || uuidv4()
    })
}

    return(
        <form onSubmit = {handleSubmit}>
            <input type = "text" name = "name" value = {inputs.name} onChange = {handleChange} placeholder = "Name"/>
            <input type = "text" name = "description" value = {inputs.description} onChange = {handleChange} placeholder = "Description"/>
            <input type = "text" name = "imageUrl" value = {inputs.imageUrl} onChange = {handleChange} placeholder = "Image URL"/>
            <button>{props.btnText}</button>
        </form>
    )
}