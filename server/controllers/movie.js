var mongoose = require("mongoose");
var Movie = require("../models/index").movie;

module.exports = function(req,res) {
  var movie = new Movie();
  movie.name = req.body.name;
  movie.tagline = req.body.tagline;
  movie.plot = req.body.plot;
  movie.synopsis = req.body.synopsis;
  movie.keywords = req.body.keywords;
  movie.save(function(err){
    if(err) {
      return res.send(err);
    }
  });
};
