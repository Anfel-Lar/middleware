const users = [
  {
    id: 1,
    email: "admin@test.com",
    password: "$2b$10$examplehash",
    role: "admin"
  }
];

function findUserByEmail(email){
  return users.find(u => u.email === email);
}

function getAllUsers(){
  return users;
}

module.exports = {
  findUserByEmail,
  getAllUsers
};
