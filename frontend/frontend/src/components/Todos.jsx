import { useState } from "react"
export function Todos({todos}) {
    const [mark, setMark] = useState(false)

 return  <div>
   
        {todos.map((todo)=>{
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button onClick={()=>{
                    setMark(true)
                }}
                >{!mark ? "mark as done"  :  "done"}</button>
            </div>
        })}
    </div>
}