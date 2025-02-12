const mongoose = require('mongoose');

//defining mongo schemas
const adminSchema = new mongoose.Schema({
  username: String,
  password: String
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

module.exports = {
  user: mongoose.model("User", userSchema),
};