// Import mongoose
const mongoose = require("mongoose")

// Schema
const userModel = mongoose.Schema(
    {
         id: Number,
         email: String,
         password: String ,
         role: { type: String, enum: ["admin", "user"]}  
    }
)

module.exports = mongoose.model("User" , userModel)