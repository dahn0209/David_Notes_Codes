const router = require("express").Router();
const IndexController = require("../controllers/IndexController");

router.get('/', IndexController.index_get);
router.post('/', IndexController.index_post);

module.exports = router;