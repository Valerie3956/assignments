const express = require('express')
const todoRouter = express.Router()
const Todo = require("../models/todo")

todoRouter.post("/", (req, res, next) => {
const newTodo = new Todo(req.body)
newTodo.save((err, savedTodo) => {
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(201).send(savedTodo)
})
})

//get all

todoRouter.get("/", (req, res, next) => {
Todo.find((err, todo) => {
if(err){
    res.status(500)
    return next(err)
}
return res.status(200).send(todo)
})
})

//get one

todoRouter.get("/:todoId", (req, res, next) => {
    const id = req.params.todoId
    const todo = todos.find(x => x._id === id)
    if(!todo){
const error = new Error("the item was not found")
return next(error)
    }
    res.send(todo)
})

//delete

todoRouter.delete("/:todoId", (req, res, next) => {
Todo.findOneAndDelete({_id: req.params.todoId}, (err, deletedItem) => {
if(err){
    res.status(500)
    return next(err)
}
return res.status(200).send(`Successfully deleted item ${deletedItem.name} from the database`)
})
})

//put

todoRouter.put("/:todoId", (req, res, next) => {
Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true}, (err,  updatedTodo) => {
if(err){
    res.status(500)
    return next(err)
}
return res.status(200).send(updatedTodo)
})
})


module.exports = todoRouter