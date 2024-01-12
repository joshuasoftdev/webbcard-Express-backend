//Load dontenv variables
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// import mongoose
const mongoose = require("mongoose");

async function connectToDb() {
  try {
    // connect to database
    await mongoose.connect(process.env.DB_URL);
    console.log("Connecting to database...");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectToDb;
