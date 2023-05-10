const User = require("../models/User");

exports.get_userPosts = async (req, res) => {
  try {
    // get data from database
    const user = await User.findOne().populate("posts");
    console.log(user);
    res.render('home', user);
  } catch (e) {
    console.error(e);
  }
};
exports.get_profile = (req, res) => {
  res.render('profile', { uid: req.params.uid });
};
exports.post_register = async (req, res) => {
  try {
    // do some data validation
    const user = await User.create(req.body);
    console.log("post_register success: ", user);
    res.status(201).json({ message: "Account was successfully registered." });
  } catch (e) {
    console.log(e);
  }
};
exports.patch_updateProfile = (req, res) => { };