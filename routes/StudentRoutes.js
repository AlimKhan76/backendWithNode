const app = require("express");
const { createStudent } = require("../controllers/createStudent");
const router= app.Router();

// the url and the controller
// the url now is api/create
router.post("/create",createStudent)

module.exports=router