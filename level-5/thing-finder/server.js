const express = require('express')
const app = express()




app.use(express.json())

app.use("/items", require("./routes/itemsRouter"))



app.listen(9000, () => console.log('the server is running on port 9000'))