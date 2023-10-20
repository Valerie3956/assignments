const express = require("express")
const app = express()
const morgan = require("morgan")





app.use(express.json())
app.use(morgan('dev'))


app.use("/bounty", require("./routes/bountyRouter.js"))




app.listen(6600, () => console.log("execute Port 6600"))