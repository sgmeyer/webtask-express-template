var express = require('express');
var bodyParser = require('body-parser');

var home  = require('./controllers/home.js');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', [home]);

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(err.status || 500).send("Oh no!  This is pretty embarrassing").end();
});

module.exports = app;
