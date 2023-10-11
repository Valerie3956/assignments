import { useState } from 'react'
import Dicebox from "./Components/Dicebox.jsx"
import Footer from "./Components/Footer.jsx"
import Header from "./Components/Header.jsx"
import { ThemeContextProvider } from './Components/ThemeContext.jsx'


export default function App() {
  return (
    <div>
      <ThemeContextProvider>
      <Header />
      <Dicebox />
      <Footer />
      </ThemeContextProvider>
    </div>
  )
}

