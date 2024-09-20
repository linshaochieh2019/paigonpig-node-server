const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const cors = require("cors");

// Router
const indexRouter = require("./routes/index");

// Middleware
app.use(express.json());

// Configure CORS to allow requests from your Angular app
app.use(
  cors({
    origin: ["https://paigonpig.web.app", "http://localhost:4200", "http://localhost", "http://34.120.172.224"],
  })
);

// Routes
app.use("/", indexRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
