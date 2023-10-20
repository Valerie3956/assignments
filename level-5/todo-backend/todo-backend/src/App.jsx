import { useState, useEffect } from 'react'
import Todos from "./components/todos"
import axios from "axios"
import AddTodoForm from './components/AddTodo'


function App() {
  const [todos, setTodos] = useState([])

  function getTodos(){
    axios.get("/todos")
    .then(res => setTodos(res.data))
    .catch(err => console.log(err))

  }

  function addTodo(newTodo){
    axios.post("/todos", newTodo)
    .then(res => {
      setTodos(prevTodos =>
        [...prevTodos, res.data])
    })
    .catch(err => console.log(err))
  }

  function deleteTodo(id){
    axios.delete(`/todos/${id}`, id)
    .then(res => {
      setTodos(prevTodos => prevTodos.filter(x => x._id !== id))
    })
    .catch(err => console.log(err))
  }

  function editTodo(updates, id){
    axios.put(`/todos/${id}`, updates)
    .then(res => {
      setTodos(prevTodos => prevTodos.map(x => x._id !== id ? x : res.data))
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <div>
      {todos.map(todo => <Todos {...todo} key = {todo._id} handleClick = {deleteTodo} editTodo = {editTodo}/>)}
      <AddTodoForm submit = {addTodo} btnText = "add Todo" key = {Math.floor(Math.random * 10)}/>
    </div>
  )
}

export default App
