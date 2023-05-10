const router = require("express").Router();
const UserController = require("../controllers/UserController");

router.get('/profile/:uid', UserController.get_profile);
router.post('/register', UserController.post_register);
router.patch('/updateProfile', UserController.patch_updateProfile);

module.exports = router;