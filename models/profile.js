const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  title: String,
  body: String,
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
