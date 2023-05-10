const path = require("path");
require('dotenv').config(path.join(__dirname, '../.env')); // .env is in different folder
const mongoose = require('mongoose');
const { MONGO_URL } = process.env;

async function run() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to DB.");

    // Define your schema
    const Schema = mongoose.Schema;
    const UserSchema = new Schema({
      username: { type: String, required: true },
      email: { type: String, required: true },
    });

    // Create a model connected to the User
    const User = mongoose.model("User", UserSchema, "User");

    // Resetting User
    const dropResult = await User.collection.drop();
    console.log("dropResult =", dropResult);

    // Inserting a user (use the model to create documents): create == new + save
    const userCreateResult = await User.create({ username: `createUser`, email: `createuser@gmail.com` });
    console.log("userCreateResult =", userCreateResult);

    const newUserResult = await new User({ username: `newUser`, email: `newuser@gmail.com` }).save();
    console.log("newUserResult =", newUserResult);

    // Other CRUD operations follow a similar style. Refer to the API.
    // Inserting example users
    const newUsers = [];
    for (let i = 1; i <= 5; i++) {
      newUsers.push({ username: `User${i}`, email: `user${i}@gmail.com` });
    }
    const insertManyResult = await User.insertMany(newUsers);
    console.log("insertManyResult =", insertManyResult);

    // -----------------------------------------------------------------------------
    // Projection (filtering fields)
    // string projection, projection argument, .select() query

    // Looking up all users and getting their emails
    const findProjectInclude = await User.find({}, 'email');
    // const findProjectInclude = await User.find({}, { email: 1 });
    // const findProjectInclude = await User.find({}).select('email');
    console.log("findProjectInclude =", findProjectInclude);

    // Looking up all users and excluding their emails
    const findProjectExclude = await User.find({}, '-email');
    // const findProjectExclude = await User.find({}, { email: 0 });
    // const findProjectExclude = await User.find({}).select('-email');
    console.log("findProjectExclude =", findProjectExclude);

    //? What if I had a typo in my object properties? usrname
    // const createTypo = await User.create({ usrname: `UserTypo`, email: `usertypo@gmail.com` });
    // console.log("createTypo =", createTypo);
  } catch (err) {
    console.log(err);
  } finally {
    await mongoose.connection.close();
  }
}

run().catch(console.dir);
