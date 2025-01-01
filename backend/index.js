const express = require("express")
const { createTodo, updateTodo } = require("./types")
const { todoDb } = require("./db")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())

app.post("/todo", async (req,res)=>{
    const todoBody = req.body
    const parsedBody = createTodo.safeParse(todoBody)
    if(!parsedBody.success){
        res.status(411).json({
            msg:"wrong inputs"
        })
        return
    }
    await todoDb.create({
        title : todoBody.title,
        description : todoBody.description,
        completed: false
    })

    res.json({
        msg: "todo created"
    })
})

app.get("/todos", async (req,res)=>{
    const allTodos = await todoDb.find({})
    res.json({
        todos: allTodos 
    })
})

app.put("/mark", async (req,res)=>{
    const markTodo= req.body
    const parsedMark = updateTodo.safeParse(markTodo)
    if(!parsedMark.success){
        res.status(411).json({
            msg : "wrong input"
        })
        return
    }

    await todoDb.update({
        _id: req.body.id
    }, {completed: true})

    res.json({
        msg: "todo marked as done"
    })

})

app.listen(3001, () => {
    console.log("listening on port 3001")
})