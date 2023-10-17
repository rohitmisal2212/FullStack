var express = require("express")
var router = express.Router();
const Employee = require("../models/employee.model")


router.post("/addEmployee", async (req, res) => {

    try {
        const employee = new Employee(req.body)
        await employee.save()
        res.status(200).send(employee)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get("/getEmployee", async (req, res) => {
    try {
        const employeeList = await Employee.find()
        res.send(employeeList)
    } catch (e) {
        res.status(500).send("internal servar error")
    }
})

router.delete("/deleteEmployee", async (req, res) => {

    try {
        const id = req.body
        // Todo.deleteMany({ title: "do coding practices in all the dimension" })
        // res.json({ messge: "todo deleted succesfully" })

    } catch (e) {
        console.error(e)
        res.status(500).send("coud not deleted find todo")
    }
})

module.exports = router