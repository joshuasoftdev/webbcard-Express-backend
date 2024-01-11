//Load dontenv variables
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Import dependencies
const express = require("express");
const connectToDb = require("./config/connectToDb");
const Profile = require("./models/profile");

// create express app
const app = express();

//configure express app
app.use(express.json());

// connect to database
connectToDb();

// routing
app.get("/", (req, res) => {
  res.json({ Hello: "World" });
});

app.post("/profile", (req, res) => {
  // get the sent in data from the request body
  const title = req.body.title;
  const body = req.body.body;

  // create a new profile with it
  const profile = new Profile({
    title: title,
    body: body,
  });
  // respond with the created profile
});

// start server
app.listen(process.env.PORT);
