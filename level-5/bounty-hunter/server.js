const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require('mongoose')
require('dotenv').config()
const URL = process.env.MONGO_URL


app.use(express.json())
app.use(morgan('dev'))


app.use("/bounty", require("./routes/bountyRouter.js"))
mongoose.connect(URL, () => console.log('connected to database'))


app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(6600, () => console.log("execute Port 6600"))