import React from "react"

export default function Form() {
    return (
        <>
            <form onSubmit = "TBD" className = "form">
                <div className = "inputs">
                <input
                    type="text"
                    placeholder="Title"
                    value="TBD"
                    onChange="TBD"
                    name="title"
                    />
                <input
                    type="text"
                    placeholder="img URL"
                    value="TBD"
                    onChange="TBD"
                    name="imgURL"
                    />
                <input
                    type="text"
                    placeholder="Description"
                    value="TBD"
                    onChange="TBD"
                    name="description"
                    />
                    </div>
                <button>SUBMIT</button>
            </form>
        </>
    )
}