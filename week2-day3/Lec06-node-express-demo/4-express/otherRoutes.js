const router = require("express").Router();

router.get('/route1', (req, res) => {
  console.log('this route1 works!!')
  res.status(200).json(`Hello, this is ${req.originalUrl}.`);
});

// Query strings/parameters
router.get('/route2', (req, res) => {
  console.log("GET /route2, req.originalUrl =", req.originalUrl);
  console.log("req.query =", req.query);
  res.status(200).json(`Hello, this is ${req.originalUrl}.`);
});

// Route parameters
router.get('/route3/:userId', (req, res) => {
  console.log("GET /route3/:userId, req.originalUrl =", req.originalUrl);
  console.log("req.params =", req.params);
  res.status(200).json(`Hello, this is ${req.originalUrl}.`);
});

module.exports = router;