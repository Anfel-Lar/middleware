const express = require("express");

const userRoutes = require("./routes/userRoutes");

const app = express();
require("dotenv").config()

const PORT = process.env.PORT

app.use(express.json());

app.use("/api", userRoutes);

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`);
});
