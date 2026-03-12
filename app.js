// import express / dotenv / mongoose /userRoutes
const express = require("express");
require("dotenv").config()
const mongoose = require("mongoose")
const userRoutes = require("./routes/userRoutes");

// create server
const app = express();

// get PORT and mongoURL from .env
const PORT = process.env.PORT
const mongoURL = process.env.MONGO_URI

//convert request to obj
app.use(express.json());


// Connect To MongoDB
mongoose.connect(mongoURL)
.then(()=>{
    console.log("mongoose connected")
})
.catch((error)=>{
    console.log("Error" + error)
})


app.use("/api", userRoutes);
app.post("/api" , )


//listen to server
app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`);
});
