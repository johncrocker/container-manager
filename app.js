var express = require('express');
var config = require('config');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var handlebars = require('express-handlebars');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());

app.engine('hbs',
	handlebars.engine({extname: '.hbs',
	defaultLayout: 'layout',
	viewsDir: path.join(__dirname, "views"),
	layoutsDir: path.join(__dirname, "views", "layouts"),
	partialsDir: path.join(__dirname, "views", "partials")
	}));
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
