const mongo = require("mongoose")


mongo.connect("mongodb+srv://hadi-rasool:Hsquare%401444@hadi-database.zo37f.mongodb.net/?retryWrites=true&w=majority&appName=hadi-database")


const todoSchema = mongo.Schema({
    title: String,
    description : String,
    completed: Boolean
})

const todoDb = mongo.model("todos", todoSchema)

module.exports= {
    todoDb : todoDb
}