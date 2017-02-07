var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var methodOverride = require("method-override");
var _ = require("lodash");
var router  = require("./routes");
var passport = require("passport");
require("./models/index");
require("./config/passport");
var app = new express();
/*var Mongoose = require('mongoose').Mongoose;

var instance1 = new Mongoose();
instance1.connect('foo');

var instance2 = new Mongoose();
instance2.connect('bar');*/

var url = "mongodb://localhost:27017/imdb";
//cors
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,UPDATE");
  res.header("Access-Control-Allow-Headers", "Content-type");
  next();
});
//middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(methodOverride("X-HTTP-Method-Override"));

//database connect
mongoose.Promise = global.Promise;
mongoose.connect(url);
mongoose.connection.once("open",function(){
  app.config = require("./config/passport");
  app.use(passport.initialize());
  app.use("/",router);
  console.log("Listening to port 3000....");
  app.listen(3000);
});
