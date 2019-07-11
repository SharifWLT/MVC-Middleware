var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');
var convert = require('color-convert');
var fs = require("fs");


var app = express();
<<<<<<< HEAD
const port = 3000
=======


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
>>>>>>> 5b86171380b04a7c9934b59298bb5d3c5d2a2c0d

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use Express.router to group your two routes in one "/color" router
// What happens when the user did not define a query.color parameter, 
    // your code should not break

app.get('/color/1', function(req,res){
  const {query} = req
  res.json({ message: "Color 1 is" + query.color})
})

app.get("/color/2", function(req,res){
  const {query} = req
  res.json({ message: "Color 2 is" + query.color})
})

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

<<<<<<< HEAD
app.listen(port, () => console.log("Server started on port: " + port))
=======
 // MyLogger
app.use(
  function(req, res, next) {
    console.log("Request URL:", req.originalUrl);
    next();
  },
  function(req, res, next) {
    console.log("Request Type:", req.method);
    next();
  }
);


module.exports = app;
>>>>>>> 5b86171380b04a7c9934b59298bb5d3c5d2a2c0d
