import { useState } from 'react'
import React from "react"
import Badge from "./Components/Badge"

function App() {

  const [formData, setFormData] = React.useState({
    fName: "",
    lName: "",
    email: "",
    plOfBirth: "",
    phone: "",
    favFood: "",
    bio: ""
  })

  const [badgeArr, setBadgeArr] = React.useState([])
  const [disabled, setDisabled] = React.useState(true)



  function handleChange(event) {
    const { name, value } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }

    })
    event.target.value !== "" ? setDisabled(false): setDisabled(true)
  }

  function handleSubmit(event) {
    event.preventDefault()
    badgeArr.push(formData)
    setFormData({
      fName: "",
      lName: "",
      email: "",
      plOfBirth: "",
      phone: "",
      favFood: "",
      bio: ""
    })
    setDisabled(true)
  }

  const badge = badgeArr.map(x => {
    return <Badge 
    fName = {x.fName}
    lName = {x.lName}
    email = {x.email}
    plOfBirth = {x.plOfBirth}
    phone = {x.phone}
    favFood = {x.favFood}
    bio = {x.bio}
    />
  })


  return (
    <div>
      <div className="form--wrap">
        <form onSubmit={handleSubmit} className="form">
          <input
            className="input"
            type="text"
            required minLength="3"
            placeholder="First Name"
            onChange={handleChange}
            name="fName"
            value={formData.fName}
          />
          <input
            className="input"
            type="text"
            required minLength="3"
            placeholder="Last Name"
            onChange={handleChange}
            name="lName"
            value={formData.lName}
          />
          <input
            className="input"
            type="email"
            required minLength="3"
            placeholder="email"
            onChange={handleChange}
            name="email"
            value={formData.email}
          />
          <input
            className="input"
            type="text"
            required minLength="3"
            placeholder="Place of Birth"
            onChange={handleChange}
            name="plOfBirth"
            value={formData.plOfBirth}
          />
          <input
            className="input"
            type="tel"
            pattern="[0-9]{10}"
            placeholder="Phone"
            onChange={handleChange}
            name="phone"
            value={formData.phone}
          />
          <input
            className="input"
            type="text"
            required minLength="3"
            placeholder="Favorite Food"
            onChange={handleChange}
            name="favFood"
            value={formData.favFood}
          />
          <textarea
            className="textarea"
            required minLength="3"
            placeholder="Tell us about yourself"
            onChange={handleChange}
            name="bio"
            value={formData.bio}
          />
          <button className="button" disabled={disabled} >SUBMIT</button>
        </form>
      </div>
      {badge}
    </div>
  )
}

export default App
