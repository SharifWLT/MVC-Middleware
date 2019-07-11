var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');

var colorRouter = require('./routes/color');


var app = express();
const port = 3000

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', colorRouter);

// 1. Use Express.router to group your two routes in one "/color" router
// 2. What happens when the user did not define a query.color parameter, 
    // your code should not break

// error message
app.use(function(req, res, next) {
  console.log('WHOA' + req.query);
  if (req.query.color) {
    console.log("query parameter color available");
    next();
  } else {
    console.log("Error: Missing query parameter color");
    res.status(500).send("Error: Missing query parameter color");
  }
  next();
 });
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
  res.json('error');
});



app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, () => console.log("Server started on port: " + port))
