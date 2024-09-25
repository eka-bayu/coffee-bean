const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "shanelle.balistreri18@ethereal.email",
    pass: "nCkkhyBpqd26uGuTdk",
  },
});

const sendPasswordResetEmail = async (to, resetToken) => {
  try {
    const mailOptions = {
      from: '"Coffee Bean Support" <no-reply@coffeebeans.com>',
      to: to,
      subject: "Password Reset Request",
      text: `Please use the following token to reset your password: ${resetToken}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`Message sent: ${info.messageId}`);
  } catch (error) {
    console.error("Error sending email: ", error);
  }
};

module.exports = { sendPasswordResetEmail };
