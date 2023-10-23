const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require('mongoose')




app.use(express.json())
app.use(morgan('dev'))


app.use("/bounty", require("./routes/bountyRouter.js"))
mongoose.connect("mongodb+srv://Valerie3956:[...]@cluster0.vapwqs6.mongodb.net/bounties?retryWrites=true&w=majority", () => console.log('connected to database'))


app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(6600, () => console.log("execute Port 6600"))