import { useState } from 'react'
import React from "react"
import Meme from "./Components/Meme.jsx"


export default function App() {

  const [images, setImages] = React.useState([])
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    image: ""
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
    memeList.push(meme)
    setMeme({
      topText: "",
      bottomText: "",
      image: ""
    })
  }

  const memes = (memeList.map(x => {
    return <Meme 
    topText = {x.topText}
    bottomText = {x.bottomText}
    image = {x.image}
    id = {memeList.indexOf(x)}
    handleEdit = {console.log("edit")}
    handleDelete = {console.log("delete")}
    />
  }))


  return (
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
        <h2 className = "meme--text top">{meme.topText}</h2>
        <h2 className = "meme--text bottom">{meme.bottomText}</h2>
      </div>
      {memes}
    </div>
  )
}


