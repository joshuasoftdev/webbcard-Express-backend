//Load dontenv variables
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Import dependencies
const express = require("express");
const connectToDb = require("./config/connectToDb");
const profilesController = require("./controllers/profilesControllers");

// create express app
const app = express();

//configure express app
app.use(express.json());

// connect to database
connectToDb();

// routing
app.get("/profile", profilesController.fetchProfiles);
app.get("/profile/:id", profilesController.fetchProfile);
app.post("/profile", profilesController.createProfile);
app.put("/profile/:id", profilesController.updateProfile);
app.delete("/profile/:id", profilesController.deleteProfile);

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
