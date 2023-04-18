const express = require("express");
const router = express();
const {
  signupUser,
  loginUser,
  searchUser,
  changePassword,
} = require("../controllers/user.Controllers");
const requireAuth = require("../middlewares/requireAuth");

// signup router
router.post("/signup", signupUser);

// login router
router.post("/login", loginUser);

// change password
router.post("/change-password", requireAuth, changePassword);

// search
router.get("/search", searchUser);

module.exports = router;
