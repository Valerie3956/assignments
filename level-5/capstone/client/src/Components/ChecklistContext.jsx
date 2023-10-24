import React, { useState } from "react"
import axios from "axios"


const ChecklistContext = React.createContext()


function ChecklistContextProvider(props) {

    const [checklistItem, setChecklistItem] = React.useState([
        {
            item: "Wake up early",
            _id: 1
        },
        {
            item: "Exercise or stretch",
            _id: 2
        },
        {
            item: "Take a shower",
            _id: 3
        },
        {
            item: "Eat a healthy breakfast",
            _id: 4
        },
        {
            item: "Meditate or practice mindfulness",
            _id: 5
        },
        {
            item: "Plan your day ahead",
            _id: 6
        }
    ])

    //checklist form

    const [formData, setFormData] = React.useState({
        item: "",
        _id : 7
    })

    function handleChange(event) {
        const { name, value } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        // submit(formData, props._id)
        setInput(init)
    }

    //get checklist items
    // axios.get(/checklist)
    // .then(res => setChecklistItem(res.data))
    // .catch(err => err.response.data.errMsg)

    //add item

    function addItem(newItem) {
        setChecklistItem(prevItems => [...prevItems, newItem])
    }

    //edit item

    const [editToggle, setEditToggle] = useState(false)

    function editItem() {
        console.log("editing an item")
    }

    function toggle(){
        setEditToggle(...prevToggle => !prevToggle)
        console.log(editToggle)
    }

    return (
        <ChecklistContext.Provider
            value={{
                handleChange,
                handleSubmit,
                formData,
                checklistItem,
                addItem,
                editItem,
                editToggle,
                toggle
                // submit
            }}

        >
            {props.children}
        </ChecklistContext.Provider>
    )
}

export { ChecklistContext, ChecklistContextProvider }