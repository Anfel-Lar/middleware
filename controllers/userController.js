const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userService = require("../services/userService");

const SECRET = process.env.JWT_SECRET

async function login(req,res){

  const {email,password} = req.body;

  const user = userService.loginUser(email);

  if(!user){
    return res.status(401).send("Invalid email");
  }

  const valid = await bcrypt.compare(password,user.password);

  if(!valid){
    return res.status(401).send("Invalid password");
  }

  const token = jwt.sign(
    {id:user.id,role:user.role},
    SECRET,
    {expiresIn:"1h"}
  );

  res.json({token});
}

function getUsers(req,res){

  const users = userService.listUsers();

  res.json(users);
}

module.exports = {
  login,
  getUsers
};
