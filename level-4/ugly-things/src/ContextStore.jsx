import React, {useState} from "react"
import axios from "axios"
import Ugly from "./Components/Ugly"
import Form from "./Components/Form"


const ContextStore = React.createContext()

function ContextStoreProvider(props){

//states
//form ugly thing
//ugly things array

const [formData, setFormData] = React.useState({
    title: "",
    description: "",
    imgUrl: ""
})

const [thingsArr, setThingsArr] = React.useState([{
    title: "",
    description: "",
    imgUrl: "",
    id: ""
}])

const [count, setCount] = React.useState(0)

//functions
//set array of ugly things

React.useEffect(() => {
    axios.get("https://api.vschool.io/ValerieSmith/thing")
    .then(response => {
        setThingsArr(response.data.map( x => {return{
        title : x.title,
        description: x.description,
        imgUrl : x.imgUrl,
        id: x._id
        
    }
}
)
)
})
    .catch(err => console.log(err))
console.log("useEffect ran")
console.log(thingsArr)
}, [count] )

//map over array of ugly things (or put this in display.jsx?)





    const ugly = (thingsArr.map(x => {
        return <Ugly 
        title = {x.title}
        description = {x.description}
        imgUrl = {x.imgUrl}
        key = {x.id}
        id = {x.id}
        handleDelete = {handleDelete}
        handleEdit = {handleEdit}
        />
    }))




//gather formData



function handleChange(event){
    const {name, value} = event.target
    setFormData(prevFormData => {
        return{
            ...prevFormData,
            [name]: value
        }
    }    
    )
}
const title = formData.title
const description = formData.description
const imgUrl = formData.imgUrl

//submit formData which pushes ugly thing to API



function handleSubmit(event){
    event.preventDefault()

//send the info to API
        axios.post("https://api.vschool.io/ValerieSmith/thing", formData)
        .then(response => {
            setCount(count => count + 1)
        })
        .catch(err => console.log(err))
        



//reset form

    setFormData({
        title: "",
        description: "",
        imgUrl: ""
    })
}
console.log(count)

//edit function

function handleEdit(id){
    console.log("edited")
    }

//delete function

function handleDelete(id){
console.log(id)
    axios.delete(`https://api.vschool.io/ValerieSmith/thing/${id}`)
    .then(response => {
        setCount(count => count + 1)
    })
    .catch(err => console.log(err))


}

//stuff that gets sent as my context provider
    return(
        <ContextStore.Provider
        value = {{
            ugly,
            title,
            description,
            imgUrl,
            handleSubmit,
            handleChange,
            handleDelete
            // toggleTheme : toggleTheme
        }}
        >
        {props.children}
        </ContextStore.Provider>
    )
}

export {ContextStore, ContextStoreProvider}