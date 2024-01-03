// npm i express mongoose 
const express = require("express");
const mongoose = require("mongoose");
const StudentRoutes = require("./routes/StudentRoutes")

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Listening");
});

app.listen(4000, () => {
    console.log("Connected");
});

// // connecting to db you can move this in another file
mongoose
    .connect()
    .then(() => {
        app.listen(3000, () => {
            console.log("Connected");
        });
    })
    .catch((err) => {
        console.log(err);
    });

// Use the name of the router file and specify the url
app.use("/api", StudentRoutes)

