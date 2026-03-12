// import userModel
const userModel = require("../models/userModel");

// Create user
function createUser(data){
  return userModel.create(data)
}

// login
function loginUser(email){
  return userModel.findOne({ email: email });
}


// get all users
function listUsers(){
  return userModel.find();
}

module.exports = {
  createUser ,
  loginUser,
  listUsers
};
