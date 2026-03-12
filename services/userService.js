const userModel = require("../models/userModel");


function loginUser(email){
  return userModel.findOne(email);
}

function listUsers(){
  return userModel.find();
}

module.exports = {
  loginUser,
  listUsers
};
