const express = require('express');
const mongoose = require('mongoose');
const db = require('./database.js');
const bodyParser = require('body-parser');

// Setup express app
let app = express();

//Connect to mongodb
mongoose.connect('mongodb://localhost/user');

//Set mongoose Promise
mongoose.Promise = global.Promise;

//Static file Middleware
// app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Body-parser Middleware


//Set route Middleware
app.use('/api', require('./routes/api'));

//Error handling Middleware
app.use(function (err, req, res, next) {
  res.status(422).send({
    error: err.message
  });
});

//Listen for connection on port
// app.listen(process.env.PORT || 3000, function() {
//   console.log('Server listening for connection');
// });



