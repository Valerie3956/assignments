const mongoose = require('mongoose')
const Schema = mongoose.Schema


// todo blueprint

const todoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
})



module.exports = mongoose.model("Todo", todoSchema)



// "name": "Learn Classical Guitar",
// "description": "Embark on a musical journey by learning to play classical guitar melodies. Practice scales, chords, and timeless compositions.",
// "imageUrl": "http://www.example.com/guitar.jpg",
// "completed": false,