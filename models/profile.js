const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  title: String,
  body: String,
  name: String,
  email: String,
  phone: String,
  address: String,
  website: String,
  linkedin: String,
  github: String,
  twitter: String,
  facebook: String,
  instagram: String,
  youtube: String,
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
