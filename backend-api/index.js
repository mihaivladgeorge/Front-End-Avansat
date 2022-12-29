const express  = require("express");
const mongoose = require("mongoose");
const dotenv   = require("dotenv");

const app = express();
dotenv.config();

mongoose.connect(
    process.env.MONGODB_URL
    )
    .then(() => console.log("Database connected succesfully..."))
    .catch((err) => {
        console.log(err);
    });

app.get("/api/test", () => {
    console.log("Test success")
})

app.listen(3000, ()=>{
    console.log("Node backend server running...");
})