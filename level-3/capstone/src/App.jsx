import { useState } from 'react'
import React from "react"
import Meme from "./Components/Meme.jsx"


export default function App() {

  const [images, setImages] = React.useState([])
  const [count, setCount] = React.useState(0)
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    image: "./placeholder.jpg",
    id: count,
    toggle: false
  })
  const [memeList, setMemeList] = React.useState([])

  React.useEffect(() => {
    axios.get("https://api.imgflip.com/get_memes")
      .then(response => setImages(response.data.data.memes))
      .catch(err => console.log(err))
  }, [])


  function generateImage(event) {
    const random = Math.floor(Math.random() * images.length)
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        image: images[random].url
      }
    }
    )
  }

  function handleChange(event) {
    const { name, value } = event.target
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: value
      }
    }
    )
  }

  function submitMeme(event) {
    event.preventDefault()
    const newMeme = {
      topText: meme.topText,
      bottomText: meme.bottomText,
      image: meme.image,
      id: count,
      toggle: false
    }
    setMemeList([...memeList, newMeme])
    setCount(count => count + 1)
    setMeme({
      topText: "",
      bottomText: "",
      image: "./placeholder.jpg",
      id: count,
      toggle: false
    })
  }

  const memes = (memeList.map(x => {
    return <Meme
      key={x.id}
      topText={x.topText}
      bottomText={x.bottomText}
      image={x.image}
      id={x.id}
      submitEdit={edit}
      handleDelete={del}
      toggle = {x.toggle}
      handleToggle = {toggle}
      generateNewImage = {generateEditedImage}
      handleEditForm = {editText}
    />
  }))

  //delete button

  function del(id) {
    const newMemeList = memeList.filter(arr => arr.id !== id)
    setMemeList(newMemeList)
  }

//edit button creates new form

function toggle(id){
  setMemeList(prevMemeList => {
    const newMemesArr = []
    for (let i = 0; i < prevMemeList.length; i++){
      const prevMeme = prevMemeList[i]
      if (prevMeme.id === id){
        const newMeme = {
          ...prevMeme,
          toggle: !prevMeme.toggle
        }
        newMemesArr.push(newMeme)} else {
          newMemesArr.push(prevMeme)
        }
      }
      return newMemesArr
  })
}

//behind the scenes for EDIT

function generateEditedImage(id){
  const random = Math.floor(Math.random() * images.length)
    setMemeList(prevMemeList => {
      const newMemesArr = []
      for (let i = 0; i < prevMemeList.length; i++){
        const prevMeme = prevMemeList[i]
        if (prevMeme.id === id){
          const newMeme = {
            ...prevMeme,
            image: images[random].url
          }
          newMemesArr.push(newMeme)} else {
            newMemesArr.push(prevMeme)
          }
        }
        return newMemesArr
    })
}

function editText(event, id){
  setMemeList(prevMemeList => {
    const { name, value } = event.target
    const newMemesArr = []
    for (let i = 0; i < prevMemeList.length; i++){
      const prevMeme = prevMemeList[i]
      if (prevMeme.id === id){
        const newMeme = {
          ...prevMeme,
          [name]: value
        }
        newMemesArr.push(newMeme)} else {
          newMemesArr.push(prevMeme)
        }
      }
      return newMemesArr
  })
}

  function edit(event, id) {
    event.preventDefault()
    setMemeList(prevMemeList => {
    const newMemesArr = []
    for (let i = 0; i < prevMemeList.length; i++){
      const prevMeme = prevMemeList[i]
      if (prevMeme.id === id){
        const newMeme = {
          ...prevMeme,
          toggle: false
        }
        newMemesArr.push(newMeme)} else {
          newMemesArr.push(prevMeme)
        }
      }
      return newMemesArr
  })
}

//the actual stuff rendered
  return (
    <>
      <div className="main">
        <div className="wrap">
          <button className="button" onClick={generateImage}>Get New Image</button>
          <form className="form" onSubmit={submitMeme}>
            <input
              type="text"
              value={meme.topText}
              name="topText"
              placeholder="Top Text"
              className="input"
              onChange={handleChange}
            ></input>
            <input
              type="text"
              value={meme.bottomText}
              name="bottomText"
              placeholder="Bottom Text"
              className="input"
              onChange={handleChange}
            ></input>
            <button>SUBMIT MEME</button>
          </form>
        </div>
        <div className="meme">
          <img src={meme.image} className="image" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </div>
      {memes}
    </>
  )
}


