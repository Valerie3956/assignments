import { useState } from 'react'
import React from "react"
import ColorComponent from "./Components/ColorComponent.jsx"

// const [color, setColor] = React.useState("blue")

const [count, setCount] = React.useState(0)

function click(event){
  setCount(count => count + 1)
  console.log(count)
}

function App() {

  return (
    <div>
<ColorComponent 
// color = {color}
handleClick = {click}
/>
<button className = "button" onClick = {click} >CLICK ME!!!</button>
</div>
  )
}

export default App
