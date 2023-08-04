// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

 let serverInfo ={}
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

 //Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
app.use(express.json())

// Setup Server
 const port = 8000;

 const server = app.listen(port, listening);
 function listening(){
  console.log(`the server is runniiiiing on localhost: ${port}`);
 };
 

 app.post('/saveInfo', (req, res)=>{
    serverInfo= req.body
     res.json({msg: 'done' })
 })
 app.get('/getInfo', (req, res)=>{
     res.json(serverInfo)
    })