// get dependencies
const express = require('express');
const bodyParser = require('body-parser');

const app = express();


// parse requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// default route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to ZeptoBook Product app"});
});

//Connecting Node and MongoDB
const mongoose = require('mongoose');
require('./product.routes.js')(app);  //Add route file here

mongoose.connect('mongodb://localhost:27017/ProductsDB', {useNewUrlParser: true,useUnifiedTopology: true}, (err) => {
if (!err) {
console.log('Successfully Established Connection with MongoDB')
}
else {
console.log('Failed to Establish Connection with MongoDB with Error: '+ err)
}
});
//Enable CORS for all HTTP methods
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// listen on port 3000
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});