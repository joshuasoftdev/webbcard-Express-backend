const Profile = require("../models/profile");

const fetchProfiles = async (req, res) => {
  // get all profiles
  const profiles = await Profile.find();
  res.json({ profiles });
};

const fetchProfile = async (req, res) => {
  // get the id from the request
  const profileId = req.params.id;

  // get the profile with this id
  const profile = await Profile.findById(profileId);

  // respond with it
  res.json({ profile });
};

const createProfile = async (req, res) => {
  // get the sent in data from the request body
  const { title, body } = req.body;

  // create a new profile with it
  const profile = await Profile.create({
    title,
    body,
  });
  // respond with the created profile
  res.json({ profile });
};

const updateProfile = async (req, res) => {
  // get the id from the request
  const profileId = req.params.id;

  // get the sent in data from the request body
  const { title, body } = req.body;
  // find the profile with this id and update it's title and body
  await Profile.findByIdAndUpdate(profileId, {
    title,
    body,
  });

  const profile = await Profile.findById(profileId);
  // respond with the updated profile
  res.json({ profile });
};

const deleteProfile = async (req, res) => {
  // get the id from the request
  const profileId = req.params.id;

  // delete the profile with this id
  await Profile.deleteOne({ id: profileId });

  // respond with a message
  res.json({ success: "Profile deleted" });
};

module.exports = {
  fetchProfiles,
  fetchProfile,
  createProfile,
  updateProfile,
  deleteProfile,
};
