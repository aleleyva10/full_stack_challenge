var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// uses
router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(bodyParser.json());


mongoose.connect('localhost:27017/employeeInfo');

// employee Schema
var employeeSchema = new mongoose.Schema({
  name: String,
  position: String,
  income: Number
}); // end Schema


//employee Model
var employeeModel = mongoose.model('employeeModel', employeeSchema);

router.get('/', function(req, res) {
  console.log('employee get route hit');
  employeeModel.find().then(function(response) {
    res.send(response);
  }); // end find
}); // end get router


router.post('/', function(req, res) {
  console.log('employee post route hit:', req.body);

  var employeeToAdd = {
    name: req.body.name,
    position: req.body.position,
    income: req.body.income
  };
  var newEmployee = employeeModel(employeeToAdd);
  newEmployee.save();
  res.send('Hello');
}); // end post router


router.delete('/:id', function(req, res) {
  var id = req.params.id;
  employeeModel.remove({
    _id: id
  }).then(function() {
    res.sendStatus(200);
  });
}); // end delete router



module.exports = router;
