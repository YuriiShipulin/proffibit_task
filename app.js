var express = require('express');
var logger = require('morgan');
var path = require('path');
var cons = require('consolidate');
var html = require('html');
var routes = require('./routes/index');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var process = require('./config/development');

mongoose.connect(process.env.DB_HOST, process.env.DB_NAME, process.env.DB_PORT);

var app = express();

// view engine setup
app.engine('html', cons.underscore);
app.set('view engine', 'html');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.send(err)
    });
}

module.exports = app;




