//app.js

//modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

//Config express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Controller
require('./route.js')(app);

//Init server
app.listen(8080, function(){
    console.log("Magic happens on port: 8080");
});
