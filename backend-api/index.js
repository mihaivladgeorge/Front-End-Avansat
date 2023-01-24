const express   = require("express");
const mongoose  = require("mongoose");
const dotenv    = require("dotenv");
const userRoute = require("./routes/user")

const app = express();
dotenv.config();

mongoose.connect(
    process.env.MONGODB_URL
    )
    .then(() => console.log("Database connected succesfully..."))
    .catch((err) => {
        console.log(err);
    });

app.use(express.json());
app.use("/api/users", userRoute);

app.listen(3000, ()=>{
    console.log("Node backend server running...");
})