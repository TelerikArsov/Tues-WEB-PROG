var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    name: "Pesho",
    comments: [
      {
        name: "pesho",
        content: "asdfsadf",
      },
      {
        name: "gosho",
        content: "sadfasfd",
      },
    ],
  });
});

module.exports = router;
