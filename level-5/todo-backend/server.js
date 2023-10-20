const express = require('express')
const app = express()
const {v4:uuidv4} = require("uuid")
const morgan = require('morgan')

const todos = [
    {
        "name": "Explore Ancient Ruins",
        "description": "Embark on an adventure to explore mysterious ancient ruins hidden deep within the jungle. Uncover secrets lost to time.",
        "imageUrl": "http://www.example.com/ruins.jpg",
        "completed": false,
        "_id": uuidv4()
    },
    {
        "name": "Write Sci-Fi Short Story",
        "description": "Craft an imaginative sci-fi short story about intergalactic travel, sentient AI, and the future of humanity. Let creativity soar!",
        "imageUrl": "http://www.example.com/scifi.jpg",
        "completed": false,
        "_id": uuidv4()
    },
    {
        "name": "Master Gourmet Cooking",
        "description": "Experiment with exotic ingredients, learn culinary techniques, and create mouthwatering dishes that delight the senses. Become a gourmet chef!",
        "imageUrl": "http://www.example.com/cooking.jpg",
        "completed": false,
        "_id": uuidv4()
    },
    {
        "name": "Paint a Surreal Landscape",
        "description": "Channel your inner artist and paint a surreal landscape inspired by dreams and imagination. Use vibrant colors and bold strokes.",
        "imageUrl": "http://www.example.com/painting.jpg",
        "completed": false,
        "_id": uuidv4()
    },
    {
        "name": "Learn Classical Guitar",
        "description": "Embark on a musical journey by learning to play classical guitar melodies. Practice scales, chords, and timeless compositions.",
        "imageUrl": "http://www.example.com/guitar.jpg",
        "completed": false,
        "_id": uuidv4()
    },
    {
        "name": "Start Astrophotography Project",
        "description": "Capture the beauty of the night sky by venturing into astrophotography. Photograph stars, galaxies, and celestial events. Explore the universe!",
        "imageUrl": "http://www.example.com/astrophotography.jpg",
        "completed": false,
        "_id": uuidv4()
    },
    {
        "name": "Create Virtual Reality Game",
        "description": "Dive into the world of game development and create an immersive virtual reality game. Design interactive environments and thrilling gameplay.",
        "imageUrl": "http://www.example.com/vrgame.jpg",
        "completed": false,
        "_id": uuidv4()
    }
]

app.use(express.json())
app.use(morgan('dev'))

//post

app.post("/todos/", (req, res) => {
    req.body._id = uuidv4()
    todos.push(req.body)
    res.send(req.body)
})

//get all

app.get("/todos/", (req, res) => {
    res.send(todos)
})

//get one

app.get("/todos/:todoId", (req, res) => {
    const id = req.params.todoId
    const todo = todos.find(x => x._id === id)
    res.send(todo)
})

//delete

app.delete("/todos/:todoId", (req, res) => {
    const id = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === id)
    todos.splice(todoIndex, 1)
    res.send("successfully deleted todo")
})

//put

app.put("/todos/:todoId", (req, res) => {
    const id = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === id)
    const todoUpdate = req.body
    Object.assign(todos[todoIndex], todoUpdate)
})



app.listen(9000, () => console.log("the server is running on port 9000"))
