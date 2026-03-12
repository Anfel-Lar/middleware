// import jwt / bcrypt / userService
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userService = require("../services/userService");

const SECRET = process.env.JWT_SECRET

async function register(req , res) {
  const {email ,password,role} = req.body

  //hash password
  const hashedPassword = await bcrypt.hash(password,10)

  const user = await userService.createUser({email, password:hashedPassword , role})

  res.json(user)
}

async function login(req,res){

  const {email,password} = req.body;

  const user = await userService.loginUser(email);

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

async function getUsers(req,res){

  const users =await userService.listUsers();

  res.json(users);
}

module.exports = {
  register ,
  login,
  getUsers
};
