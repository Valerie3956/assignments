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

todoRouter.delete("/:todoId", (req, res) => {
    const id = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === id)
    todos.splice(todoIndex, 1)
    res.send("successfully deleted todo")
})

//put

todoRouter.put("/:todoId", (req, res) => {
    const id = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === id)
    const todoUpdate = req.body
    const updatedTodo = Object.assign(todos[todoIndex], todoUpdate)
    res.send(updatedTodo)
})


module.exports = todoRouter