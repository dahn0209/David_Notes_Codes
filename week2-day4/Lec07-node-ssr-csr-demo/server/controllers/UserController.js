exports.get_profile = (req, res) => {
  res.render('profile', { uid: req.params.uid });
};
exports.post_register = (req, res) => { };
exports.patch_updateProfile = (req, res) => { };