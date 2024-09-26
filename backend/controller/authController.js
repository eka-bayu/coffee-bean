const nodemailer = require("nodemailer");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const knex = require("knex")(require("../knexfile").development);

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to generate a random token for password reset
const generateToken = () => {
  return crypto.randomBytes(32).toString("hex");
};

const sendPasswordResetEmail = async (to, resetPasswordUrl) => {
  const mailOptions = {
    from: '"Coffee Bean Support" <no-reply@coffeebeans.com>',
    to: to,
    subject: "Password Reset Request",
    text: `Please click the following link to reset your password: ${resetPasswordUrl}`,
    html: `<p>Please click the following link to reset your password:</p><a href="${resetPasswordUrl}">${resetPasswordUrl}</a>`,
  };

  const info = await transporter.sendMail(mailOptions);
  console.log(`Message sent: ${info.messageId}`);
};

// Forgot password function
const forgotPassword = async (req, res) => {
  const { email } = req.body;
  const token = generateToken();
  const tokenExpiryDate = new Date(Date.now() + 3600000);

  try {
    // Store the reset token and expiry in the database
    await knex("users").where("email", email).update({
      reset_token: token,
      token_expiry: tokenExpiryDate,
    });

    console.log(`Reset token for user ${email}:`, token);

    // Send email logic here
    await sendPasswordResetEmail(
      email,
      `http://localhost:3000/reset-password/${token}`
    );

    res.status(200).json({ message: "Password reset email sent." });
  } catch (error) {
    console.error("Error updating reset token:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

// Inside getUserEmailByToken function
const getUserEmailByToken = async (token) => {
  console.log("Token received:", token);
  try {
    const user = await knex("users").where("reset_token", token).first();
    if (!user) {
      throw new Error("User not found or token invalid");
    }
    return user.email;
  } catch (error) {
    console.error("Error fetching user email:", error.message);
    throw error;
  }
};

// Reset password function
const resetPassword = async (req, res) => {
  console.log("Request body:", req.body);
  const { email, token, newPassword } = req.body;

  if (!email || !token || !newPassword) {
    return res
      .status(400)
      .json({ message: "Email, token, and new password are required." });
  }

  try {
    // Fetch the user by email and reset token
    const user = await knex("users")
      .where({ email, reset_token: token })
      .first();
    console.log("Fetched user:", user);

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token." });
    }

    // Check if the token has expired
    if (user.token_expiry < Date.now()) {
      return res.status(400).json({ message: "Token has expired." });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password in the database
    await knex("users").where({ email }).update({
      password: hashedPassword,
      reset_token: null,
      token_expiry: null,
    });

    res.status(200).json({ message: "Password reset successful." });
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = {
  forgotPassword,
  sendPasswordResetEmail,
  resetPassword,
  getUserEmailByToken,
};
