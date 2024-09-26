const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig.development);
const { createUser, getUserByEmail } = require("./models/userModel");
const {
  forgotPassword,
  resetPassword,
} = require("./controller/authController");
const authRoutes = require("./routes/authRoutes");
const jwt = require("jsonwebtoken");
const {
  createOrder,
  getOrderById,
  getAllOrders,
} = require("./models/orderModel");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const getUserEmailByToken = async (token) => {
  console.log("Token received:", token);
  if (!token) {
    throw new Error("Token is required");
  }

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

// Route for getting user email by token
app.get("/api/auth/get-email/:token", async (req, res) => {
  try {
    const email = await getUserEmailByToken(req.params.token);
    res.status(200).json({ email });
  } catch (error) {
    console.error("Error fetching user email:", error.message);
    res.status(400).json({ message: error.message });
  }
});

// Using routes for authentication
app.use("/api/auth", authRoutes);

// API for forgot password
app.post("/api/auth/forgot-password", forgotPassword);

// API for reset password
app.post("/api/auth/reset-password", async (req, res) => {
  try {
    await resetPassword(req, res);
  } catch (error) {
    console.error("Error in POST /api/auth/reset-password:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Sign up user
app.post("/api/signup", async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;
    const user = await createUser({ username, email, password, phone });
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error("Error creating user:", error);
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
});

// Login user
app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Search users by email
    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Password verivication
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Creating a JWT token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Return the token to the user
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Create order
app.post("/api/order", async (req, res) => {
  try {
    console.log(req.body);
    await createOrder(req.body);
    res.status(201).json({ message: "Order created" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating order", error });
  }
});

// Get all order
app.get("/api/order", async (req, res) => {
  try {
    const orders = await getAllOrders();
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching orders", error });
  }
});

// Get order by ID
app.get("/api/order/:id", async (req, res) => {
  try {
    const order = await getOrderById(req.params.id);
    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching order", error });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
