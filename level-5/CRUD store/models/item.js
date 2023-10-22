const mongoose = require('mongoose')
const Schema = mongoose.Schema



const itemSchema = new Schema({
    item: {
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }

})


module.exports = mongoose.model('Item', itemSchema)