var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

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



var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var until = webdriver.until;
var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys('comida');
driver.findElement(By.name('btnG')).click();

driver.wait(until.elementLocated(By.className('rc')),3000);


driver.findElements(By.css("h3.r")).then(function(elements){
	console.log('Resultados: '+elements.length);
	for(let i=0; i< elements.length; i++){
		ele_h3=elements[i];
		ele_h3.findElement(By.css("a")).getText().then(function(text){console.log(text)});
	}
});

// driver.quit();

module.exports = app;
