import React, { useState } from 'react'
import axios from "axios"
import Search from "./Components/Search"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Cook from "./Components/Cook"
import Favorites from "./Components/Favorites"
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
<div>
<Header />

<Routes>

<Route path = "/" element = {<Search />}/>
<Route path = "cook" element = {<Cook />}/>
<Route path = "favorites" element = {<Favorites />}/>

</Routes>

<Footer />
</div>
  )
}

export default App
