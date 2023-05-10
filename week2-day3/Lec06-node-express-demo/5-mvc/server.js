const express = require('express');
const app = express();

// Applying middleware
const path = require('path');
app.use('/', express.json()); // parse requests with JSON payload/body
app.use('/public', express.static(path.join(__dirname, '/public'))); // serve static files

// Importing other routes
const routes = require('./routes');
app.use('/', routes.IndexRouter);
app.use('/other', routes.OtherRouter);

// Catch-all route for unsupported paths
app.all('*', (req, res) => {
  res.status(400).json({ error: "InvalidURI", description: `The URI ${req.url} is not valid.` });
});

module.exports = app;