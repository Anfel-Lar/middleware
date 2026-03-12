// import exprss / router / userController /authenticate /authorize
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authenticate = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");



router.post("/login", userController.login);
router.post("/register", userController.register);
router.get(
  "/users",
  authenticate,
  authorize("admin"),
  userController.getUsers
);

module.exports = router;
