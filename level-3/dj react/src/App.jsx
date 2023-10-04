import { useState } from 'react'
import React from "react"
import Square from "./Components/Square"
import Small from "./Components/Small"
import Party from "./Components/Party"
import Professional from "./Components/Professional"
import BigTime from "./Components/BigTime"
import Great from "./Components/Great"
import sound from "./Components/sound.wav"

export default function App() {
  const [colors, setColors] = React.useState(["black", "black", "black", "black"])

  function smallTime() {
    setColors(arr => {
      return arr.map(x => ( x === "black" ? "white" : "black" )
      )
    })
  }

  function party(){
    setColors(arr => {
      return arr.map((x, index) =>(index === 0 || index === 1 ? "purple" : x))
    })
  }

  function professional(id){
    setColors(arr => {
      return arr.map((x, index) => (index === id? "blue" : x))
    })
  }

  function bigTime(id){
    setColors(arr => {
      return arr.map((x, index) => (index === id? "orange" : x))
    })
  }

  const squares = colors.map((value, index) => {
    return (
      <Square 
      color={value}
      id = {index} 
      />
    )
  })

  function great(){
return (
  new Audio(sound).play()
)
  }

  return (
    <div>
      {squares}
      <Small handleClick={smallTime} />
      <Party handleClick = {party}/>
      <Professional handleClick = {professional}/>
      <BigTime handleClick = {bigTime}/>
      <Great handleClick = {great}/>
    </div>
  )
}


