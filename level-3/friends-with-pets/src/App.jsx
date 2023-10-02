import { useState } from 'react'
import FriendsList from "./Components/FriendsList.jsx"
import Header from "./Components/Header.jsx"
import Footer from "./Components/Footer.jsx"

export default function App() {
  return (
   <div className = "friends--container">
    <Header />
    <FriendsList />
    <Footer />
   </div>
  )
}


