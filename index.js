const express = require('express');

const mongoose = require('mongoose');

// Setup express app
let app = express();

var db = require('./database.js');

//Connect to mongodb
mongoose.connect('mongodb://localhost/user');

//Set mongoose Promise
mongoose.Promise = global.Promise;

//Static file Middleware
app.use(express.static('public'));

//Body-parser Middleware


//Set route Middleware
app.use('/api', require('./Routes/api'));

//Error handling Middleware
app.use(function (err, req, res, next) {
  res.status(422).send({
    error: err.message
  });
});

//Listen for connection on port
app.listen(process.env.PORT || 3000, function() {
  console.log('Server listening for connection');
});

