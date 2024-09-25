const nodemailer = require("nodemailer");
const crypto = require("crypto");
const User = require("../models/userModel");
const { getUserByEmail } = require("../models/userModel");
const knex = require("knex")(require("../knexfile").development);

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "shanelle.balistreri18@ethereal.email",
    pass: "nCkkhyBpqd26uGuTdk",
  },
});

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

const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    // Log the incoming email request
    console.log("Forgot password request received for email:", email);

    // Generate token and expiry time
    const resetToken = crypto.randomBytes(32).toString("hex");
    const tokenExpiry = Date.now() + 3600000; // Token valid for 1 hour

    // Here you can log or store the resetToken and tokenExpiry in memory for later verification
    console.log("Generated reset token:", resetToken);
    console.log("Token expiry time:", new Date(tokenExpiry).toISOString());

    // Send email with the reset token
    const resetUrl = `http://localhost:3000/reset-password/${resetToken}`;
    await transporter.sendMail({
      from: '"Coffee Beans" <no-reply@coffeebeans.com>',
      to: email,
      subject: "Reset Password",
      html: `<p>Click the link below to reset your password:</p><a href="${resetUrl}">Reset Password</a>
      <p>with your token ${resetToken}</p>`,
    });

    res.status(200).json({ message: "Reset password email sent" });
  } catch (error) {
    console.error("Error in forgotPassword:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const resetPassword = async (req, res) => {
  console.log("Request body:", req.body);
  const { email, token, newPassword } = req.body;

  // Check if any of the values are undefined
  if (!email || !token || !newPassword) {
    return res
      .status(400)
      .json({ message: "Email, token, and new password are required." });
  }

  try {
    // Fetch the user by email
    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Verify the reset token and expiry
    if (user.reset_token !== token || user.token_expiry < Date.now()) {
      return res.status(400).json({ message: "Invalid or expired token." });
    }

    // Hash the new password
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

module.exports = { forgotPassword, sendPasswordResetEmail, resetPassword };
