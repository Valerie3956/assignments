import { useState } from 'react'
import React from "react"
import Name from "./Components/Name.jsx"

// create state and set it to an empty array
// create form, when submitted pushes the new data to state
// create component that maps through state and displays each string as an H1






export default function App() {



const [formData, setFormData] = React.useState({
  name : ""
})

const [namesArr, setNamesArr] = React.useState([])

function handleChange(event){
  const {name, value} = event.target
  setFormData(prevFormData => {
    return {
      ...prevFormData,
      [name] : value
    }
  })
}

function handleSubmit(event){
  event.preventDefault()
  namesArr.push(formData)
  setFormData({name : ""})


}

const nameComponent = namesArr.map(x => {
  return <Name name = {x.name} />
})

  return (
    <>
   <form className = "form" id = "form" onSubmit = {handleSubmit}>
    <input 
    className = "input"
    type = "text"
    placeholder = "type name here"
    name = "name"
    value = {formData.name}
    onChange = {handleChange}
    />
    <button className = "button">SUBMIT</button>
   </form>
   {nameComponent}
   </>
  )
}

