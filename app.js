
/**
 * Module dependencies.
 */
var express  = require('express');
var connect = require('connect');
var app      = express();
 morgan      = require('morgan');
// Configuration
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
//app.use(express.json());  
app.use(connect.urlencoded());

// Routes

require('./routes/routes.js')(app);

var port     = process.env.PORT || 8080;
app.listen(port);

console.log('The App runs on port ' + port);
