const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  username: String,
  password: String
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
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