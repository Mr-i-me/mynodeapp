var express = require('express');
var app = express();
var db = require('./database.js');
var ContractController = require('./controllers/ContractController');
app.use('/contracts', ContractController);
module.exports = app;
