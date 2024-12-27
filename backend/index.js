const express = require("express")
const { createTodo, updateTodo } = require("./types")

const app = express()

app.use(express.json())


app.post("/todo", (req,res)=>{
    const todoBody = req.body
    const parsedBody = createTodo.safeParse(todoBody)
    if(!parsedBody.success){
        res.status(411).json({
            msg:"wrong inputs"
        })
        return
    }
})

app.get("/todos", (req,res)=>{
    //
})

app.put("/mark", (req,res)=>{
    const markTodo= req.body
    const parsedMark = updateTodo.safeParse(markTodo)
    if(!parsedMark.success){
        res.status(411).json({
            msg : "wrong input"
        })
        return
    }
    
})


app.listen(3000)