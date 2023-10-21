const express = require('express')
const app = express()
// const {v4:uuidv4} = require("uuid")
const morgan = require('morgan')
const mongoose = require('mongoose')
// require('dotenv').config()


app.use(express.json())
app.use(morgan('dev'))

app.use("/todos", require("./routes/todoRouter"))

mongoose.connect("mongodb+srv://Valerie3956:FphOvqo4ajJ3gYEL@cluster0.vapwqs6.mongodb.net/todos?retryWrites=true&w=majority", () => console.log('connected to database'))

//post


//error handling middleware
app.use((err, req, res, next) => {
console.log(err)
return res.send({errMsg: err.message})
})

app.listen(9000, () => console.log("the server is running on port 9000"))
