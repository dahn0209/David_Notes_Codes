exports.index_get = (req, res) => {
  res.status(200).json(`Hello, this is ${req.url}.`);
};

exports.index_post = (req, res) => {
  console.log("POST /, req.body =", req.body);
  res.status(200).json(`Hello, this is ${req.url}.`);
}; 