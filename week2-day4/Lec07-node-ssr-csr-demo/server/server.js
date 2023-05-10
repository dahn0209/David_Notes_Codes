const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs/promises');
const routes = require('./routes');

// Applying middleware
app.use('/', express.json()); // parse requests with JSON payload/body
app.use('/public', express.static(path.join(__dirname, '/public'))); // serve static files

// Template engine configuration
app.set("views", path.join(__dirname, "/views")); // where template files are located
app.set("view engine", "ejs"); // default engine, dont need to specify .ejs extension

// Importing other routes
app.use('/user', routes.UserRouter);
app.use('/posts', routes.PostRouter);

app.get('/', (req, res) => { 
  
  res.render("home"); 
  console.log('userRoutes',routes.UserRouter)

});

app.get('/news/:uid', async (req, res) => {
  try {
    const { [req.params.uid]: user } = JSON.parse(String(await fs.readFile(path.join(__dirname, '/storage/users.json'))));
    console.log("user =", user);

    res.render('home', user);
  } catch (e) {
    console.error(e);
  }
});



// Catch-all route for unsupported paths
app.all('*', (req, res) => {
  res.status(400).json({ error: "InvalidURI", description: `The URI ${req.url} is not valid.` });
});

module.exports = app;