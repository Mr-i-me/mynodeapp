const express = require('express');
const User = require('../models/model');

let router = express.Router();

//Add user to DB
router.post('/users', function (req, res, next) {
  User.create(req.body).then(function (data) {
    res.send(data);
  }).catch(next);
});

//Update data in the DB
router.put('/users/:id', function (req, res, next) {
  User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
    User.findOne({ _id: req.params.id }).then(function (user) {
      res.send(user);
    });
    res.send(user);
  });
});

//Delete data in the DB
router.delete('/users/:id', function (req, res, next) {
  User.findByIdAndRemove({_id: req.params.id }).then(function (user) {
    res.send(user);
  });
});

//Export module to access it in other module
module.exports = router;
