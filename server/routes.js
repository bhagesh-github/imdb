var express = require("express");
var router = express.Router();

router.route("/register")
      .post(require("./controllers/register"));
router.route("/login")
      .post(require("./controllers/login"));
router.route("/movie")
      .post(require("./controllers/movie"));

module.exports = router;
