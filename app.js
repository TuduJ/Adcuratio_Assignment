const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');


const indexRoutes = require('./routes/index');
const usersRoutes = require('./routes/users');
const loginRoutes = require('./routes/login');

const app = express();



const User = require('./models/user');
const Data = require('./models/data');

const sessionConfig = {
	secret: 'blablablah',
	// resave: false,
	// saveUninitialized: true,
	// cookie:{
	// 	httpOnly: true,
	// 	expire: Date.now() + 1000 * 60 * 60,
	// 	maxAge: 1000 * 60 * 60
	// }
}

app.use(session(sessionConfig))

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
	console.log("DB Connected...");
})
.catch(err => {
	console.log(err);
})


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use('/', indexRoutes);
app.use('/users', usersRoutes);
app.use('/login', loginRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(process.env.PORT || 3000, () => console.log('App Running.....'));

module.exports = app;
