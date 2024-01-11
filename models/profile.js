const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});
const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
