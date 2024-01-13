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

app.get("/profile", async (req, res) => {
  // get all profiles
  const profiles = await Profile.find();
  res.json({ profiles: profiles });
});

app.get("/profile/:id", async (req, res) => {
  // get the id from the request
  const profileId = req.params.id;

  // get the profile with this id
  const profile = await Profile.findById(profileId);

  // respond with it
  res.json({ profile: profile });
});

app.post("/profile", async (req, res) => {
  // get the sent in data from the request body
  const { title, body } = req.body;

  // create a new profile with it
  const profile = await Profile.create({
    title: title,
    body: body,
  });
  // respond with the created profile
  res.json({ profiles: profile });
});

app.put("/profile/:id", async (req, res) => {
  // get the id from the request
  const profileId = req.params.id;

  // get the sent in data from the request body
  const title = req.body.title;
  const body = req.body.body;

  // find the profile with this id and update it's title and body
  await Profile.findByIdAndUpdate(profileId, {
    title: title,
    body: body,
  });

  const profile = await Profile.findById(profileId);
  // respond with the updated profile
  res.json({ profile: profile });
});

app.delete("/profile/:id", async (req, res) => {
  // get the id from the request
  const profileId = req.params.id;

  // delete the profile with this id
  await Profile.findByIdAndDelete(profileId);

  // respond with a message
  res.json({ message: "Profile deleted" });
});

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
