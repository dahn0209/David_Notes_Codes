const express = require('express');
const app = express();

// Applying middleware
const path = require('path');
app.use('/', express.json()); // parse requests with JSON payload/body
app.use('/public', express.static(path.join(__dirname, '/public'))); // serve static files

// Route handling for HTTP requests
app.get('/', (req, res) => {
    console.log('get /')
  res.status(200).json(`Hello, this is ${req.url}. inside`);
});
app.post('/', (req, res) => {
  console.log("POST /, req.body =", req.body);
  res.status(200).json(`Hello, this is the body ${req.url}.`);
});

// Importing other routes
const otherRoutes = require('./otherRoutes');
app.use('/todo', otherRoutes);

// Catch-all route for unsupported paths
app.all('*', (req, res) => {
  res.status(400).json({ error: "InvalidURI", description: `The URI ${req.url} is not valid.` });
});

// Make server start listening for requests
const port = 3000;
app.listen(port, () => {
  console.log(`Server is up on port ${port}: http://localhost:${port}`);
});




