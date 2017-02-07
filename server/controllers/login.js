var passport = require("passport");

module.exports = function(req,res) {
  passport.authenticate("local",function(err,user,info){
    var token;
    if(err) {
      res.status(404).json(err);
      return;
    }
    if(user) {
      token=user.generatejwt();
      res.status(200).json({"token":token});
      return;
    }
    else {
      res.status(401).json(info);
    }
  })(req,res);
};
