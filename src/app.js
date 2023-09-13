var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
const methodOverride = require('method-override')

const indexRouter = require('./routes/index');
const api_users_router = require('./routes/users_router');
const api_support_router = require('./routes/support_router');
const api_transactions_router = require('./routes/transactions_router');
const api_category_router = require('./routes/category_router');
const api_goals_router = require('./routes/goals_router');
const api_budgets_router = require('./routes/budgets_router');
const api_linked_accounts_router = require('./routes/linked_accounts_router');
const api_settings_router = require('./routes/settings_router');
const authentication_router = require('./routes/authentication_router');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'))
app.use(cors());

app.use('/', indexRouter);
app.use('/users', api_users_router);
app.use('/support', api_support_router);
app.use('/transactions', api_transactions_router);
app.use('/category', api_category_router);
app.use('/goals', api_goals_router);
app.use('/budgets', api_budgets_router);
app.use('/linked.accounts', api_linked_accounts_router);
app.use('/settings', api_settings_router);
app.use('/user', authentication_router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
