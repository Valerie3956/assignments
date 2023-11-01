import { useState, useContext } from 'react'
import Navbar from './components/navbar'
import Auth from './components/auth'
import Profile from './components/profile'
import Public from './components/public'
import { Routes, Route, Navigate} from 'react-router-dom'
import {UserContext} from "./context/userContext"

function App() {

  const {token, logout} = useContext(UserContext)
  return (
<>
<Navbar logout = {logout}/>

<Routes >
  <Route 
  path = "/"
  element = {token ? <Navigate to ="/profile" /> : <Auth />}
  />

  <Route 
    path = "/profile"
    element = {<Profile />}/>

<Route 
    path = "/public"
    element = {<Public />}/>
</Routes>


</>
  )
}

export default App
