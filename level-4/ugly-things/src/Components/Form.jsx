import React, {useContext} from "react"
import {ContextStore} from '../ContextStore'

export default function Form(props) {

const {handleChange, handleSubmit, title, description, imgUrl} = useContext(ContextStore)

    return (
        <>
            <form onSubmit = {handleSubmit} className = "form">
                <div className = "inputs">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={handleChange}
                    name="title"
                    />
                <input
                    type="text"
                    placeholder="img URL"
                    value={imgUrl}
                    onChange={handleChange}
                    name="imgUrl"
                    />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={handleChange}
                    name="description"
                    />
                    </div>
                <button>SUBMIT</button>
            </form>
        </>
    )
}