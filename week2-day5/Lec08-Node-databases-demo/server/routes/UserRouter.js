const router = require("express").Router();
const UserController = require("../controllers/UserController");

router.get('/posts', UserController.get_userPosts);
router.get('/profile/:uid', UserController.get_profile);
router.post('/register', UserController.post_register);
router.patch('/updateProfile', UserController.patch_updateProfile);

module.exports = router;