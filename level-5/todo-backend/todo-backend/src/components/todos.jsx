import React, {useState} from "react"
import AddTodoForm from "./AddTodo"



export default function Todos(props){

const [editToggle, setEditToggle] = useState(false)

    return(

    <div>
        { !editToggle ?
        <>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <button onClick = {() => props.handleClick(props._id)}>deleteTodo</button>
        <button onClick = {() => setEditToggle(prevToggle => !prevToggle)}>editTodo</button>
        </>
        
        :
        <>
        <AddTodoForm 
        name = {props.name}
        description = {props.description}
        image Url = {props.imageUrl}
        btnText = "submit edit"
        submit = {props.editTodo}
        _id = {props._id}
        />
        <button onClick = {() => setEditToggle(prevToggle => !prevToggle)}>close</button>
        </>
    }
    </div>
    )
}