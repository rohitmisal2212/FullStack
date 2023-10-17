const mongoose = require("mongoose")


const todoSchema = new mongoose.Schema({

    title: String,
    description: String,
    completed: String
})

const Todo = mongoose.model("Todo", todoSchema)

module.exports = Todo