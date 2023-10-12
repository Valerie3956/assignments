import React from "react"


export default function Ugly(props){


    
    return(
        <div className = "ugly">
            <img src = {props.imgUrl}></img>
            <div className = "ugly--text">
            <h3>{props.title}</h3>
            <h4>{props.description}</h4>
            </div>
            <div className = "ugly--buttons">
            {props.editForm === false && <button onClick = {() => props.toggleForm(props.id)}>EDIT</button>}
            <button onClick = {() => props.handleDelete(props.id)}>DELETE</button>
            {props.editForm && 
                    <>
                    <form onSubmit = {(event) => props.submitEdit(event, props.id)} className = "edit--form">
                        <div className = "edit--inputs">
                        <input
                            type="text"
                            placeholder="Title"
                            value={props.title}
                            onChange={(event) => props.handleEdit(event, props.id)}
                            name="title"
                            />
                        <input
                            type="text"
                            placeholder="img URL"
                            value={props.imgUrl}
                            onChange={(event) => props.handleEdit(event, props.id)}
                            name="imgUrl"
                            />
                        <input
                            type="text"
                            placeholder="Description"
                            value={props.description}
                            onChange={(event) => props.handleEdit(event, props.id)}
                            name="description"
                            />
                            </div>
                        <button>SUBMIT EDIT</button>
                    </form>
                </>
            }
            </div>
            

        </div>
    )
}