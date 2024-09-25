const knex = require("knex")(require("../knexfile").development);
const bcrypt = require("bcrypt");

// Function to create a new user
const createUser = async ({ username, email, password, phone }) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await knex("users")
      .insert({
        username,
        email,
        password: hashedPassword,
        phone,
      })
      .returning("*");
    return newUser; // Return the new user
  } catch (error) {
    console.error("Error creating user:", error.message);
    throw new Error("Error creating user: " + error.message);
  }
};

// Function to find a user by email
const findUserByEmail = async (email) => {
  try {
    const user = await knex("users").where({ email }).first();
    return user; // Return the user if found
  } catch (error) {
    console.error("Database query error:", error.message);
    throw new Error("Error fetching user by email: " + error.message);
  }
};

const getUserByEmail = async (email) => {
  console.log("Searching for user with email:", email); // Log the email
  try {
    const user = await findUserByEmail(email);
    return user;
  } catch (error) {
    console.error("Database query error:", error);
    throw new Error("Error fetching user by email");
  }
};

module.exports = {
  createUser,
  findUserByEmail,
  getUserByEmail,
};
