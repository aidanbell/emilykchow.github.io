var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var indexRouter = require("./routes/index");
var groceryItemRouter = require("./routes/groceryItems");
var groceryListRouter = require("./routes/groceryLists");
var apiRouter = require("./routes/api");

var app = express();

var db = mongoose.connect("mongodb://localhost/groceryDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/grocery", groceryItemRouter);
app.use("/grocerylist", groceryListRouter);
app.use("/", indexRouter);
app.use("/api", apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

//create views for new grocery item and grocery list. in those figure out how im going to be posting the forms, stock and name
//add in the delete function
//add in edit page
//implement to add to grocery item
