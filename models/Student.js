const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    class:{ type: Number}
})

// We will use this Student model to perform database operations
const Student = mongoose.model("Student", studentSchema);
module.exports = Student;