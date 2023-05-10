exports.other_route1_get = (req, res) => {
  res.status(200).json(`Hello, this is ${req.originalUrl}.`);
};

// Query strings/parameters
exports.other_route2_query = (req, res) => {
  console.log("GET /route2, req.originalUrl =", req.originalUrl);
  console.log("req.query =", req.query);
  res.status(200).json(`Hello, this is ${req.originalUrl}.`);
};

// Route parameters
exports.other_route3_params = (req, res) => {
  console.log("GET /route3/:userId, req.originalUrl =", req.originalUrl);
  console.log("req.params =", req.params);
  res.status(200).json(`Hello, this is ${req.originalUrl}.`);
};