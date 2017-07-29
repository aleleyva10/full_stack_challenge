// requires
var express = require('express');
var app = express();
var index = require('./modules/routes/index');
var employee = require('./modules/routes/employee');

// uses
app.use(express.static('public'));
app.use('/', index);
app.use('/employee', employee);

//globals
var port = process.env.PORT || 4000;


// spin up the server
app.listen(port, function(){
  console.log('server up on port:', port);
}); // end server spin up
