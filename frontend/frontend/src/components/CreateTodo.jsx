import { useState } from "react"

export function CreateTodo(){

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    return(<div>
        <input type='text' placeholder='title' onChange={function (e){
            const titlee = e.target.value
            setTitle(titlee)
        }}></input>
        
         <br/>

        <input type='text' placeholder='description' onChange={function (e){
            const desc = e.target.value
            setDescription(desc)}}></input> <br/>

        <button
        onClick={()=>{
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description : description
                }),
                headers:{
                    "content-Type" : "application/json"
                }})
                .then(async (res)=>{
                    const json = await res.json()
                    alert("todo added ")
                })
            
        }}> Add todo</button>
        </div>
    )
}