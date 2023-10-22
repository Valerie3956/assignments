const express = require("express")
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))
app.use("/store", require("./routes/storeRouter"))
mongoose.connect("mongodb+srv://Valerie3956:FphOvqo4ajJ3gYEL@cluster0.vapwqs6.mongodb.net/store?retryWrites=true&w=majority", () => console.log('connected to database'))



app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
    })

app.listen (9000, () => console.log('the server is running on port 9000'))