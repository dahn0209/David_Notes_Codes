const path = require("path");
require('dotenv').config(path.join(__dirname, '../.env')); // .env is in different folder
const mongoose = require('mongoose');
const { MONGO_URL } = process.env;

const Schema = mongoose.Schema;
const refType = Schema.Types.ObjectId;

// Define your schemas
const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  profile: { type: refType, ref: "Profile" }
});

const ProfileSchema = new Schema({
  picture: String,
  karma: Number,
  birthday: Date
});
// -----------------------------------------------------------------------------
// One to one: user and profile

async function runOneToOne() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to DB.");

    // Define your schemas
    const UserSchema = new Schema({
      username: { type: String, required: true },
      email: { type: String, required: true },
      profile: { type: refType, ref: "Profile" }
    });

    const ProfileSchema = new Schema({
      picture: String,
      karma: Number,
      birthday: Date
    });

    // Create your models
    const User = mongoose.model("User", UserSchema, "User");
    const Profile = mongoose.model("Profile", ProfileSchema, "Profile");

    await Promise.all([User.collection.drop(), Profile.collection.drop()]);

    // Create a user
    const createUser = await User.create({ username: "user1", email: "user1@gmail.com" });
    console.log("createUser =", createUser);
    // Create a profile
    const createProfile = await Profile.create({ picture: "picture" });
    // Update the user reference using the profile's ID
    const updatedUser = await User.findByIdAndUpdate(createUser._id, { profile: createProfile._id }, { new: true });
    console.log("updatedUser =", updatedUser);

    //? How do I get all user data with their profiles?
    const allUsers = await User.find().populate("profile");
    console.log("allUsers =", allUsers);

  } catch (err) {
    console.log(err);
  } finally {
    await mongoose.connection.close();
  }
}

runOneToOne().catch(console.dir);

// -----------------------------------------------------------------------------
// One to many: user and posts

async function runOneToMany() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to DB.");

    // Define your schemas
    const UserSchema = new Schema({
      username: { type: String, required: true },
      email: { type: String, required: true },
      posts: [{ type: refType, ref: "Post" }]
    });

    // Optional: post ref -> user 
    const PostSchema = new Schema({
      title: String,
      body: String,
      postDate: Date,
      upvotes: Number,
      downvotes: Number,
      // originalPoster: { type: refType, ref: "User" }
    });

    // Create your models
    const User = mongoose.model("User", UserSchema, "User");
    const Post = mongoose.model("Post", PostSchema, "Post");

    await Promise.all([User.collection.drop(), Post.collection.drop()]);

    // Create a user
    const createUser = await User.create({ username: "user1", email: "user1@gmail.com" });
    console.log("createUser =", createUser);
    // Create many posts
    const posts = [];
    for (let i = 1; i <= 5; i++) {
      posts.push({ title: `Post${i}` });
    }
    const insertManyPosts = await Post.insertMany(posts);
    console.log("insertManyPosts =", insertManyPosts);
    const postIds = insertManyPosts.map((post) => post._id);

    // Update the user reference to a list of post IDs
    const updatedUser = await User.findByIdAndUpdate(createUser._id, { posts: postIds }, { new: true });
    console.log("updatedUser =", updatedUser);

  } catch (err) {
    console.log(err);
  } finally {
    await mongoose.connection.close();
  }
}

// runOneToMany().catch(console.dir);

// -----------------------------------------------------------------------------
// Many to many: users and forums

async function runManyToMany() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to DB.");

    // Define your schemas
    const UserSchema = new Schema({
      username: { type: String, required: true },
      email: { type: String, required: true },
      forums: [{ type: refType, ref: "Forum" }]
    });

    const ForumSchema = new Schema({
      name: String,
      members: [{ type: refType, ref: "User" }]
    });

    await Promise.all([User.collection.drop(), Forum.collection.drop()]);

    // Create your models
    const User = mongoose.model("User", UserSchema, "User");
    const Forum = mongoose.model("Forum", ForumSchema, "Forum");

    /* 
    todo: This is not implemented.
    Create many users
    Create many forums
    Update the forum references to a list of user IDs
    Update the user references to a list of forum IDs
    */
  } catch (err) {
    console.log(err);
  } finally {
    await mongoose.connection.close();
  }
}

// runManyToMany().catch(console.dir);