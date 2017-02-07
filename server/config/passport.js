var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var mongoose = require("mongoose");
var User = require("../models/index").adminusers;

passport.use(new LocalStrategy({
  usernameField:"email"
},function(username,password,done){
  User.findOne({email:username},function(err,user){
    if(err) return done(err);
    if(!user) {
      return done(null,false,{message:"User not found"});
    }
    if(!user.validpassword(password)) {
      return done(null,false,{message:"Password is wrong"});
    }
    return done(null,user);
  });
}));
