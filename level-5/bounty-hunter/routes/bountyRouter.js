const express = require('express')
const bountyRouter = express.Router()
const {v4:uuidv4} = require("uuid")



const bounties = [
    {
      firstName: 'Dengar',
      lastName: 'Fett',
      living: true,
      bountyAmount: 50000,
      type: 'Sith',
      _id: uuidv4()
    },
    {
      firstName: 'Boba',
      lastName: 'Fett',
      living: true,
      bountyAmount: 100000,
      type: 'Sith',
      _id: uuidv4()
    },
    {
      firstName: 'Cad',
      lastName: 'Bane',
      living: true,
      bountyAmount: 75000,
      type: 'Sith',
      _id: uuidv4()
    },
    {
      firstName: 'Aurra',
      lastName: 'Sing',
      living: true,
      bountyAmount: 60000,
      type: 'Sith',
      _id: uuidv4()
    },
    {
      firstName: 'Asajj',
      lastName: 'Ventress',
      living: true,
      bountyAmount: 90000,
      type: 'Sith',
      _id: uuidv4()
    }
  ]


bountyRouter.get("/", (req, res) => {
    res.send(bounties)
})

bountyRouter.post("/", (req, res) => {
    req.body._id = uuidv4()
    bounties.push(req.body)
    console.log(bounties)
})

bountyRouter.delete("/:bountyId", (req, res) => {

// const filteredBounties = bounties.filter(bounty => bounty._id !== req.params.bountyId)
// res.send(filteredBounties)

const bountyId = req.params.bountyId
const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
bounties.splice(bountyIndex, 1)
res.send("successfully deleted bounty")
})


bountyRouter.put("/:bountyId", (req, res) => {
const bountyId = req.params.bountyId
const updateBounty = req.body
const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
const updatedBounty = Object.assign(bounties[bountyIndex], updateBounty)
res.send(updatedBounty)
})



module.exports = bountyRouter