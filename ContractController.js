var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Contract = require('../models/Contract');
module.exports = router;

// Create Contract
router.post('/', function (req, res) {
    Contract.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        },
        function (err, contract) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
           res.status(200).send(contract);
        });
});


// Get all Contracts
router.get('/', function (req, res) {
    Contract.find({}, function (err, contracts) {
        if (err) return res.status(500).send("There was a problem finding the contracts.");
        res.status(200).send(contracts);
    });
});
// Get contract by Id
router.get('/:id', function (req, res) {
    Contract.findById(req.params.id, function (err, contract) {
        if (err) return res.status(500).send("There was a problem finding the contract.");
        if (!contract) return res.status(404).send("No contract found.");
res.status(200).send(contract);
    });
});
// Delete contract
router.delete('/:id', function (req, res) {
    Contract.findByIdAndRemove(req.params.id, function (err, contract) {
        if (err) return res.status(500).send("There was a problem deleting the contract.");
res.status(200).send("Contract "+ contract.name +" was deleted.");
    });
});
// Update contract by id
router.put('/:id', function (req, res) {
    Contract.findByIdAndUpdate(req.params.id, req.body, {new: true},
function (err, contract) {
        if (err) return res.status(500).send("There was a problem updating the contract.");
res.status(200).send(contract);
    });
});
module.exports = router;
