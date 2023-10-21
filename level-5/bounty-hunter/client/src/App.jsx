import { useState, useEffect } from 'react'
import Header from "./Components/Header"
import BountyForm from './Components/BountyForm'
import axios from "axios"
import Bounty from './Components/Bounty'

function App() {
const [bounties, setBounties] = useState([])

//get all bounties

function getBounties(){
axios.get("/bounty")
.then(res => setBounties(res.data))
.catch(err => console.log(err))
}

useEffect(() => {
  getBounties()
}, [])

//post bounty

function addBounty(newBounty){
axios.post("/bounty", newBounty)
.then(res => {
  setBounties(prevBounties => [...prevBounties, newBounty])
})
}

//delete bounty

function deleteBounty(id){
  axios.delete(`/bounty/${id}`)
  .then(res => {
   const updatedBounties = bounties.filter(bounty => bounty._id !== id)
setBounties(updatedBounties)
  })
  .catch(err => console.log(err))
}

//edit bounty
function editBounty(edits, id){
  axios.put(`/bounty/${id}`, edits)
  .then(res => {
    setBounties(prevBounties => prevBounties.map(bounty => bounty._id === id? bounty : res.data))
  })
  .catch(err => console.log(err))
}

  return (
  <div>
<Header />
<div className = "display">
<BountyForm submit = {addBounty} btnText = "add bounty" />
</div>
{bounties.map(bounty => <Bounty {...bounty} key = {bounty._id} handleDelete = {deleteBounty} editBounty = {editBounty}/>)}
  </div>
  )
}

export default App
