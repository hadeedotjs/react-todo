const mongo = require("mongoose")
require('dotenv').config();
const { MONGO_URL: mongoUrl } = process.env;

mongo.connect(mongoUrl)

const todoSchema = mongo.Schema({
    title: String,
    description : String,
    completed: Boolean
})

const todoDb = mongo.model("todos", todoSchema)

module.exports= {
    todoDb : todoDb
}