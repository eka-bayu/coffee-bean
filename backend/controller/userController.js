const userModel = require("../models/userModel");
const userSchema = require("../schemas/userSchema");

// Sign-up handler
const signUp = async (req, res) => {
  // Validate user input using Joi schema
  const { error } = userSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if the user already exists
  const existingUser = await userModel.findUserByEmail(req.body.email);
  if (existingUser) return res.status(400).send("Email already in use.");

  // Create new user
  try {
    await userModel.createUser(req.body);
    res.status(201).send("User registered successfully");
  } catch (err) {
    res.status(500).send("Error registering user");
  }
};

module.exports = { signUp };
