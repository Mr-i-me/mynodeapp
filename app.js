var express = require('express');
var app = express();
var db = require('./database.js');
var UserController = require('./controllers/UserController');
app.use('/contracts', UserController);
module.exports = app;
