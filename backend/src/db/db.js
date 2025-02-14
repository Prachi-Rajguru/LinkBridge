const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  experience: [Object],
  education: [Object],
});

const postSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  category: String,
  author: String,
  likes: Number,
  comments: Number,
  createdAt: Date,
  updatedAt: Date,
});

module.exports = {
  user: mongoose.model("User", userSchema),
  post: mongoose.model("Post", postSchema),
};