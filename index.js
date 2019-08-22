const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Setup express app
const app = express();

var db = require('./database.js');

var Contract = require('./models/Contract');
var ContractController = require('./controllers/ContractController');
app.use('/contracts', ContractController);
module.exports = app;
