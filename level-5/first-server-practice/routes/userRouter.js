const express = require("express")
const userRouter = express.Router()
const { v4: uuidv4 } = require('uuid')


const users = [{ name: "Valerie", age: "33", isAlive: true, _id: uuidv4() },
{ name: "Rick", age: "33", isAlive: true, _id: uuidv4() },
{ name: "Rebecca", age: "5", isAlive: false, _id: uuidv4() },
{ name: "Roy", age: "3", isAlive: true, _id: uuidv4() },
{ name: "Claire", age: "3", isAlive: true, _id: uuidv4() },
{ name: "Logan", age: "1", isAlive: false, _id: uuidv4() }]



userRouter.route("/")
.get((req, res) => {
    res.send(users)
})
.post((req, res) => {
    users.push(req.body)
    console.log(users)
})

userRouter.get("/search/age", (req, res) => {
    const age = req.query.age
    // console.log(status)
    const filteredUsers = users.filter(user => user.age === age)
    res.send(filteredUsers)
})


module.exports = userRouter