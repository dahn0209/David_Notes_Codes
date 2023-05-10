const path = require("path");
require('dotenv').config(path.join(__dirname, '../.env')); // .env is in different folder
const mongoose = require('mongoose');
const { MONGO_URL } = process.env;

const Schema = mongoose.Schema;

// -----------------------------------------------------------------------------
// One to one: user and profile
const UserSchema1 = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  profile: {
    picture: String,
    karma: Number,
    birthday: Date
  }
});

// -----------------------------------------------------------------------------
// One to many: user and posts
const UserSchema2 = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  posts: [{
    id: String,
    title: String,
    body: String,
    postDate: Date,
    upvotes: Number,
    downvotes: Number,
  }]
});

// -----------------------------------------------------------------------------
// Many to many: users and forums
const UserSchema3 = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  forums: [{
    name: String,
    members: [{
      username: String,
      email: String
    }]
  }]
});