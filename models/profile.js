const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  title: String,
  body: String,
  bio: String,
  facebook: String,
  instagram: String,
  twitter: String,
  personalWebsite: String,
  profileImage: String,
  callme: String,
  name: String,
  age: Number,
  breed: String,
});
const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
