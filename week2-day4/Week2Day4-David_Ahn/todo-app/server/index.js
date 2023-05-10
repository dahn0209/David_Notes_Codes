const express = require('express');
const fs = require('fs/promises');
let bodyParser = require("body-parser");
const app = express();


// Applying middleware
const path = require('path');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.json()); // parse requests with JSON payload/body
app.use('/public', express.static(path.join(__dirname, '/public'))); // serve static files


// Template engine configuration
// app.set("views", path.join(__dirname, "/views")); // where template files are located
app.set("view engine", "ejs"); // default engine, dont need to specify .ejs extension

// Route handling for HTTP requests

const listtoDo=[
  { 'number': '1',
    "title":"Clean Up",
    "description":"clean up the room",
    "status": "In Progress",
    "priority": "Low"
},
{ 'number': '2',
  "title":"Eat",
"description":"eat steak",
"status": "Completed",
"priority": "High"
},
{ 'number': '3',
  "title":"Sleep",
"description":"Sleep forver",
"status": "In Progress",
"priority": "High"
}
];
app.get('/', async(req, res,next) => {
 try{
  console.log('get /')
  const getListToDo=await listtoDo; 
  res.render("index",{data:{
    getListToDo:getListToDo}})
 }catch(error){
  next(error)
 }


});
app.post('/', async (req, res, next) => {
  try{
    const getListToDo=await listtoDo; 
    console.log("POST /, req.body =", req.body);
    let newTask=await { 
    number:listtoDo.id,
    title:req.body.newTask,
    description: req.body.description,
    status:'In Progress',
  };
  listtoDo.push(newTask)
  res.redirect('/')
  }catch(error){
    res.status(500).json({ message: "Error create" })
    next(error)
  }
});


app.put('/update', async (req, res, next) => {
  try{
    const eachId=await parseInt(req.params.id);

    const updateToDo=await {
      title:req.body.title,
      description: req.body.description,
      status:'Completed',
      priority:req.body.priority,
}

    listtoDo[eachId]=updateToDo

    res.redirect('/')


   
  }catch(error){
    res.status(500).json({ message: "Error create" })
    next(error)
  }
});
//////I have quesetios about delete 
app.post('/delete', async (req, res, next) => {
  try{
    const eachId=await parseInt(req.params.id);
    console.log('eachID in delete',eachId)
    await listtoDo.splice(eachId,1)
   res.redirect('/')
  }catch(error){
    res.status(500).json({ message: "Error create" })
    next(error)
  }
});




// Importing other routes
// const otherRoutes = require('./otherRoutes');
// const { Console } = require('console');
// app.use('/', otherRoutes);

// Catch-all route for unsupported paths
app.all('*', (req, res) => {
  res.status(400).json({ error: "InvalidURI", description: `The URI ${req.url} is not valid.` });
});

// Make server start listening for requests
const port = 3000;
app.listen(port, () => {
  console.log(`Server is up on port ${port}: http://localhost:${port}`);
});




