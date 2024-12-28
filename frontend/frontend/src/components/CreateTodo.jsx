import { useState } from "react"

export function CreateTodo(){

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    return(<div>
        <input type='text' placeholder='title' onChange={function (e){
            const value = e.target.value
            setTitle(value)
        }}></input>
        
         <br/>

        <input type='text' placeholder='description' onChange={function (e){
            const value = e.target.value
            setDescription(value)}}></input> <br/>

        <button
        onClick={()=>{
            fetch("http://localhost:3000/todos", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description : description
                }),
                headers:{
                    "contentType" : "application/json"
                }
                .then(async (res)=>{
                    const json = await res.json()
                    alert("todo added ")
                })
            })
        }}> Add todo</button>
        </div>
    )
}