const express = require("express");
const app = express();
const port = 5000;

// Middleware
app.use(express.json());

// Route dasar
app.get("/", (req, res) => {
  res.send("Hello from Express.js Backend!");
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
