const app = require('./server');

// Make server start listening for requests
const port = 3000;
app.listen(port, () => {
  console.log(`Server is up on port ${port}: http://localhost:${port}`);
});

