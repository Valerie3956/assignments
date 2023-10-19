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


bountyRouter.route("/")
.get((req, res) => {
    res.send(bounties)
})
.post((req, res) => {
    req.body._id = uuidv4()
    bounties.push(req.body)
    console.log(bounties)
})
// .delete((req, res) => {

// })
// .put((req, res) => {

// })



module.exports = bountyRouter