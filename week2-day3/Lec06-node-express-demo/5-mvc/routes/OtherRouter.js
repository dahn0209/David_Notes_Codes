const router = require("express").Router();
const OtherController = require("../controllers/OtherController");

router.get('/route1', OtherController.other_route1_get);
router.get('/route2', OtherController.other_route2_query);
router.get('/route3/:userId', OtherController.other_route3_params);

module.exports = router;