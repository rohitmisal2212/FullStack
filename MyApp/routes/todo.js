var express = require("express")
var router = express.Router();
let Todo = require("../models/todo.model")

// router.get("/getTodosList", function (req, res, next) {
//     res.send("getTodosList")
// })
// router.get("/getTodosList", async (req, res) => {

//     const todos = await Todo.find()
//     res.send(todos)
// })

router.post("/addTodo", async (req, res) => {
    try {
        const todo = new Todo(req.body)
        await todo.save()
        res.status(200).send(todo)

    } catch (e) {
        res.status(400).send(e)
    }
})

router.get("/getTodoList", async (req, res) => {
    try {
        const todoList = await Todo.find()
        res.status(200).send(todoList)

    } catch (e) {
        console.error(e)
        res.status(500).send("internal servar")
    }
})


router.put("/updateTodo", async (req, res) => {
    try {
        const filter = { title: "coding practice" };
        const update = {
            $set: {
                title: "do coding practices in all the dimension"
            }
        }
        await Todo.updateMany(filter, update)

        res.json({ messge: "todo updated succesfully" })

    } catch (e) {
        console.error(e)
        res.status(500).send("coud not find todo")
    }
})

router.delete("/deleteTodo", async (req, res) => {
    try {
        Todo.deleteMany({ title: "do coding practices in all the dimension" })
        res.json({ messge: "todo deleted succesfully" })

    } catch (e) {
        console.error(e)
        res.status(500).send("coud not deleted find todo")
    }
})

module.exports = router