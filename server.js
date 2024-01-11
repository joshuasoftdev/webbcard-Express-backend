//Load dontenv variables
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Import dependencies
const express = require("express");
const connectToDb = require("./config/connectToDb");

// create express app
const app = express();

// connect to database
connectToDb();

// routing
app.get("/", (req, res) => {
  res.json({ Hello: "World" });
});
// start server
app.listen(process.env.PORT);
