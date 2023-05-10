const path = require("path");
require('dotenv').config(path.join(__dirname, '../.env')); // .env is in different folder
const { MongoClient } = require('mongodb');
const { MONGO_URL } = process.env;

const client = new MongoClient(MONGO_URL);

async function run() {
  try {
    await client.connect();
    console.log("Connected to DB.");
    const collection = client.db("demo-db").collection("User");

    // Resetting collection
    const dropResult = await collection.drop();
    console.log("dropResult =", dropResult);

    // Inserting example users
    const newUsers = [];
    for (let i = 1; i <= 5; i++) {
      newUsers.push({ username: `User${i}`, email: `user${i}@gmail.com` });
    }
    const insertManyResult = await collection.insertMany(newUsers);
    console.log("insertManyResult =", insertManyResult);

    // Looking up one user with and without matching filters (projection documents)
    const findOneFail = await collection.findOne({ name: "User1" });
    const findOneSuccess = await collection.findOne({ username: "User1" });
    console.log("findOneFail =", findOneFail);
    console.log("findOneSuccess =", findOneSuccess);

    // Updating a user
    const updateOneResult = await collection.updateOne({ username: "User1" }, { $set: { email: "updated email" } });
    console.log("updateOneResult =", updateOneResult);

    // -----------------------------------------------------------------------------
    // Projection (filtering fields)

    // Looking up all users and getting their emails
    const findProjectInclude = await collection.find().project({ email: 1 }).toArray();
    console.log("findProjectInclude =", findProjectInclude);

    // Looking up all users and excluding their emails
    const findProjectExclude = await collection.find().project({ email: 0 }).toArray();
    console.log("findProjectExclude =", findProjectExclude);

    //? What if I had a typo in my object properties? usrname
    const insertOneTypo = await collection.insertOne({ usrname: `UserTypo`, email: `usertypo@gmail.com` });
    console.log("insertOneTypo =", insertOneTypo);
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
