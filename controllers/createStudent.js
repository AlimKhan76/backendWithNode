const Student = require("../models/Student")

exports.createStudent = async (req, res) => {
    // write the code to save to the database
    try {

        const response = await Student.create(req.body)

        console.log(response)
        res.send(response)


    }
    catch (err) {
        console.log(err)
        res.send(err)
    }



}