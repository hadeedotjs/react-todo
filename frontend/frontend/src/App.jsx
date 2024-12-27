import { useState } from 'react'

import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
// import './App.css'

function App() {
  

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={
        [{
          title: "gym",
          description: "go to gym",
          completed: true
        }]
      }></Todos>
    </div>
  )
}



export default App
