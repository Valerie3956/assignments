const express = require('express')
const userRouter = express.Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')
// require('dotenv').config()

//signup

userRouter.post("/signup", (req, res, next) => {
    //check to see if user already exists
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(user){
            res.status(403)
            return next(new Error("This username is already taken"))
        }
        //create new user
        const newUser = new User(req.body)
        newUser.save((err, savedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            //give token
            const token = jwt.sign(savedUser.toObject(), process.env.SECRET)
            return res.status(201).send({token, user:savedUser})
        })
    })
})


//login

userRouter.post("/login", (req, res, next) => {
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
if(err){
    res.status(500)
    return next(err)
}
//check to make sure user exists
if(!user){
    res.status(403)
    return next(new Error("Username or Password Incorrect"))
}
//check to see if passwords match
if(req.body.password !== user.password){
    res.status(403)
    return next(new Error("Username or Password Incorrect"))
}
//give token
const token = jwt.sign(user.toObject(), process.env.SECRET)
return res.status(200).send({token, user})
    })
})


module.exports = userRouter