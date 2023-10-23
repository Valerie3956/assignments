const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty')





bountyRouter.get("/", (req, res, next) => {
Bounty.find((err, bounty) => {
  if(err){
    res.status(500)
    return next(err)
  }
  return res.status(200).send(bounty)
})
})

bountyRouter.post("/", (req, res, next) => {
const newBounty = new Bounty(req.body)
newBounty.save((err, savedBounty) => {
  if(err){
    res.status(500)
    return next(err)
  }
  return res.status(201).send(savedBounty)
})
})

bountyRouter.delete("/:bountyId", (req, res, next) => {
Bounty.findOneAndDelete({_id: req.params.bountyId}, (err, deletedBounty) => {
  if(err){
    res.status(500)
    return next(err)
  }
  return res.status(200).send(`Successfully deleted bounty ${deletedBounty} from the database`)
})
})


bountyRouter.put("/:bountyId", (req, res, next) => {
Bounty.findByIdAndUpdate({_id:req.params.bountyId}, req.body, {new:true}, (err, updatedBounty) => {
  if(err){
    res.status(500)
    return next(err)
  }
  return res.status(200).send(updatedBounty)
})
})



module.exports = bountyRouter