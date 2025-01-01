import { useEffect, useState } from 'react'

import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
// import './App.css'

function App() {
  const [todos, setTodos] = useState([])

useEffect( ()=>{
  fetch("http://localhost:3001/todos").then(async function (res){
    const todosJson = await res.json()
    setTodos(todosJson.todos)
  })}, [todos])

  return (
    <div>
      <CreateTodo ></CreateTodo> 
      <br></br>
      <br></br>
      <Todos todos={todos}></Todos>
    </div>
  )
}



export default App
