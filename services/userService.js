const userModel = require("../models/userModel");

function loginUser(email){
  return userModel.findUserByEmail(email);
}

function listUsers(){
  return userModel.getAllUsers();
}

module.exports = {
  loginUser,
  listUsers
};
