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

app.post("/profile", async (req, res) => {
  // get the sent in data from the request body
  const title = req.body.title;
  const body = req.body.body;

  // create a new profile with it
  const profile = await Profile.create({
    title: title,
    body: body,
  });
  // respond with the created profile
  res.json({ profile: profile });
});

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
