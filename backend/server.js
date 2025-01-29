// server.js

const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json()); // To parse JSON request bodies
app.use(cors()); // Enable cross-origin resource sharing

// Create a SQLite database and table if not already created
const db = new sqlite3.Database("./users.db", (err) => {
  if (err) {
    console.error("Error opening database:", err);
  } else {
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    )`);
  }
});

// POST /register route handler
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  // Simple validation
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Insert user data into the database
  const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  db.run(query, [name, email, password], function (err) {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res.status(201).json({ message: "Registration successful!" });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
