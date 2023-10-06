import { useState } from 'react'
import React from "react"
import ColorComponent from "./Components/ColorComponent.jsx"
// const axios = require("axios");




function App() {
  
  const [color, setColor] = React.useState("blue")
  const [count, setCount] = React.useState(0)
  
  function click(event){
    setCount(count => count + 1)
    console.log(count)
  }

React.useEffect(() => {
  axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
  .then(response => setColor(`#${response.data.new_color}`))
  console.log(color)
},[count])

  return (
    <div>
<ColorComponent 
color = {color}
handleClick = {click}
/>
{/* <button className = "button" onClick = {click} >CLICK ME!!!</button> */}
</div>
  )
}

export default App