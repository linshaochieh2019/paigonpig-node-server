const express = require("express");
const router = express.Router();
const packageJson = require('../package.json'); // Import package.json
const db = require("../db");

// Entry point
router.get("/", (req, res) => {
  const data = {
    message: "Hello World!",
    timestamp: new Date().toISOString(), // Add a timestamp for demonstration
  };
  res.json(data); // Send JSON data
});

// Return node server package version
router.get("/version", (req, res) => {
  const data = {
    version: packageJson.version,
  };
  res.json(data);
});

module.exports = router;
