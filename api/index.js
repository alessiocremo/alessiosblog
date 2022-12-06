const express = require ("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose") 
const authRoute = require("./routes/auth")

dotenv.config();
app.use(express.json())


const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URL, {}).then(console.log("Connected to MONGO")).catch((err) => console.log(err));

app.use("/api/auth", authRoute)

app.listen("5000", () => {
    console.log("Backend is running");
})