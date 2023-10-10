import { useState } from 'react'
import React from "react"
import Styling from "./Components/Styling"
import Preview from "./Components/Preview"
import Form from "./Components/Form"

export default function App() {

const [gradientInput, setGradientInput] = React.useState({
  color1 : "#f12711",
  color2 : "#f5af19",
  angle : 45

})

function handleChange(event){
  const {name, value} = event.target 
  setGradientInput(prevInput => {
    return{
      ...prevInput,
      [name] : value
    }
  })
}



  return (
    <>
<h1>CSS Gradient Code Generator</h1>
<div className = "container">
<Styling>
<Form 
handleChange = {handleChange}
color1Value = {gradientInput.color1}
color2Value = {gradientInput.color2}
angleValue = {gradientInput.angle}
/>
</Styling>
<Styling>
<Preview 
gradient = {`linearGradient(${gradientInput.angle}deg, ${gradientInput.color1}, ${gradientInput.color2})`}
color1 = {gradientInput.color1}
color2 = {gradientInput.color2}
angle = {gradientInput.angle}
/>
</Styling>
</div>
    </>
  )
}

