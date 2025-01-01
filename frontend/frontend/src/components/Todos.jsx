import { useState } from "react"
export function Todos({todos}) {
    const [mark, setMark] = useState(false)

 return  <div>
   
        {todos.map((todo, index) => (
            <div key={index}>
                <span>Title: &nbsp;  {todo.title} || </span>
                &nbsp;&nbsp;&nbsp;
                <span>Description: &nbsp; {todo.description}  ||</span>
                &nbsp;&nbsp;&nbsp;
                <button onClick={() => setMark(!mark)}>
                    {!mark ? "mark as done" : "done"}
                </button>
            </div>
        ))}
    </div>
}
