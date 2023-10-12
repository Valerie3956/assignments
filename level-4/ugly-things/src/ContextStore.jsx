import React, {useState} from "react"
import axios from "axios"
import Ugly from "./Components/Ugly"


const ContextStore = React.createContext()

function ContextStoreProvider(props){

//states
//form ugly thing
//ugly things array

const [thingsArr, setThingsArr] = React.useState([{
    title: "",
    description: "",
    imgUrl: "",
    id: ""
}])

//functions
//set array of ugly things

React.useEffect(() => {
    axios.get("https://api.vschool.io/ValerieSmith/thing")
    .then(response => setThingsArr(response.data.map( x => {return{
        title : x.title,
        description: x.description,
        imgUrl : x.imgUrl,
        id: x._id
    }})))
    .catch(err => console.log(err))
}, [] )

//map over array of ugly things (or put this in display.jsx?)

const ugly = (thingsArr.map(x => {
    return <Ugly 
    title = {x.title}
    description = {x.description}
    imgUrl = {x.imgUrl}
    key = {x.id}
    id = {x.id}
    />
}))

//gather formData
//submit formData which pushes ugly thing to API
//edit function
//delete function

    return(
        <ContextStore.Provider
        value = {{
            ugly
            // toggleTheme : toggleTheme
        }}
        >
        {props.children}
        </ContextStore.Provider>
    )
}

export {ContextStore, ContextStoreProvider}