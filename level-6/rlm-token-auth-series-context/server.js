const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const {expressjwt} = require('express-jwt')


app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(
  process.env.MONGO_URL,
  () => console.log('Connected to the DB')
  )
  

  app.use('/auth', require('./routes/authRouter'))
  app.use('/level6', expressjwt({secret:process.env.SECRET, algorithms: ["HS256"]}))
  app.use('/level6/todo', require('./routes/todoRouter.js'))
  
  app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
      res.status(err.status)
    }
    return res.send({errMsg: err.message})
  })


app.listen(9000, () => {
  console.log(`Server is running on local port 9000`)
})