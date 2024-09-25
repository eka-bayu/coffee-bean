const express = require("express");
const {
  forgotPassword,
  resetPassword,
} = require("../controller/authController");
const router = express.Router();

// Route to Forgot Password
router.post("/forgot-password", forgotPassword);

// Route for Password Reset
router.post("/reset-password", resetPassword);

module.exports = router;
