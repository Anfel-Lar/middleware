const userModel = require("../models/userModel");


function loginUser(email){
  return users.find(email);
}

function listUsers(){
  return users;
}

module.exports = {
  loginUser,
  listUsers
};
