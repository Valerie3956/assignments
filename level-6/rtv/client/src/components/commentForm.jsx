import React, { useState } from 'react'

// const initInputs = {
//   comment: ""
// }

export default function CommentForm(props){
//   const [inputs, setInputs] = useState(initInputs)

const {handleChange, handleSubmit, btnText, toggle, inputs} = props

//   function handleChange(e){
//     const {name, value} = e.target
//     setInputs(prevInputs => ({
//         ...prevInputs,
//       [name]: value
//     }))
//   }

//   function handleSubmit(e){
//     e.preventDefault()
//     addComment(inputs)
//     setInputs(initInputs)
//   }

//   const { comment } = inputs
  return (
    <div>

    <form className = "form" 
    onSubmit={(e) => {
      e.preventDefault()
      handleSubmit()
    }}
    >
      <input 
        type="text" 
        name="content" 
        value={inputs} 
        onChange={handleChange} 
        placeholder="comment"/>
      <button className = "button">{btnText}</button>
    </form>
    <button className = "button" onClick = {toggle}>Close</button>
        </div>
  )
}