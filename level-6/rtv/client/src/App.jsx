import { useState, useContext } from 'react'
import Navbar from './components/navbar'
import Auth from './components/auth'
import Profile from './components/profile'
import Public from './components/public'
import { Routes, Route, Navigate} from 'react-router-dom'
import {UserContext} from "./context/userContext"
import ProtectedRoute from './components/protectedRoute'

function App() {

  const {token, logout} = useContext(UserContext)
  return (
<>
{ token && <Navbar logout = {logout}/> }

<Routes >

  <Route 
  path = "/"
  element = {token ? <Navigate to ="/profile" /> : <Auth />}
  />


  <Route 
    path = "/profile"
    element = { <ProtectedRoute token = {token} redirectTo = "/">
    <Profile />
    </ProtectedRoute> }/>



<Route 
    path = "/public"
    element = {<ProtectedRoute token = {token} redirectTo = "/">
    <Public />
    </ProtectedRoute>}/>


</Routes>


</>
  )
}

export default App
