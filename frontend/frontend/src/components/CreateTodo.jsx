import { useState } from "react"

export function CreateTodo(){

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    let count = 1;

    return(<div>
        Title
        &nbsp;
        <input style={{padding: "10px"}} type='text' placeholder='title' onChange={function (e){
            const titlee = e.target.value
            setTitle(titlee)
        }}></input>
        &nbsp;
        Description 
        &nbsp;
        <input style={{padding: "10px"}} type='text' placeholder='description' onChange={function (e){
            const desc = e.target.value
            setDescription(desc)}}></input>
&nbsp;
        <button
        onClick={()=>{
            fetch("http://localhost:3001/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description : description,
                    id: count++
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