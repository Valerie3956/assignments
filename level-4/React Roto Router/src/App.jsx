import { useState } from 'react'
import Footer from './Components/Footer'
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Services from "./Components/Services"
import { Routes, Route } from 'react-router-dom';

function App() {


  return (
<div>
<Navbar />

<Routes>

  <Route path = "/" element = {<Home />} />
<Route path = "/about" element = {<About />} />
<Route path = "/services" element = {<Services />} />

</Routes>

  <Footer />
</div>
  )
}

export default App
