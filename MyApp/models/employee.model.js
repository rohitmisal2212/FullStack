const mongoose = require("mongoose")


const employeeSchema = new mongoose.Schema({
    EmpId: String,
    Name: String,
    Company: String,
    Position: String,
})

const Employee = mongoose.model("Employee", employeeSchema)

module.exports = Employee