var express = require("express");
var router = express.Router();

const items = [
  { id: 1, name: "Computer" },
  { id: 2, name: "Laptop" },
  { id: 3, name: "Mouse" },
  { id: 4, name: "Keyboard" },
  { id: 5, name: "Headphones" },
];

const basket = [];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { items, basket });
});

router.post("/addItem", function (req, res, next) {
  const { id } = req.body;
  const item = items.find((item) => item.id == id);
  basket.push(item);
  res.redirect("/");
});

module.exports = router;
