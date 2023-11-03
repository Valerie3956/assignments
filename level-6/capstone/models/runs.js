const mongoose = require('mongoose')
const Schema = mongoose.Schema


const runSchema = new Schema ({
    distance:{
        type: Number,
        required: true
    },
    time:{
        type: String,
        requi: true
    },
    pace:{
        type: String,
        requi: true
    },
    dateCreated:{
        type: Date,
        default: Date.now
    },
    user:
    {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
})




module.exports = mongoose.model("Run", runSchema)