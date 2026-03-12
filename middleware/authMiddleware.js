const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET

function authenticate(req,res,next){

  const header = req.headers.authorization;

  if(!header){
    return res.status(401).send("Token required");
  }

  const token = header.split(" ")[1];

  try{

    const decoded = jwt.verify(token,SECRET);

    req.user = decoded;

    next();

  }catch(err){

    res.status(403).send("Invalid token");

  }
}

module.exports = authenticate;
