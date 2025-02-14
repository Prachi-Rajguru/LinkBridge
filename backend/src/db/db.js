const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  experience: [String],
  education: [String],
});

module.exports = {
  user: mongoose.model("User", userSchema),
};