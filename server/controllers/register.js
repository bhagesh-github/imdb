var passport = require("passport");
var mongoose = require("mongoose");
var User = require("../models/index").adminusers;


module.exports = function(req,res) {
    var user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.setpassword(req.body.password);
    user.save(function(err){
      if(err) {
        return res.send(err);
      }
      else {
        var token;
        token = user.generatejwt();
        res.json({
          "token":token
        });
      }
    });
};
