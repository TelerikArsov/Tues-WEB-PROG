var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: req.cookies.preference });
});

router.post("/", function (req, res, next) {
  res.cookie("preference", req.body.preference);
  res.redirect("/");
});

module.exports = router;
