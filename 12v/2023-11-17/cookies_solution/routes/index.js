var express = require("express");
var router = express.Router();

const items = [
  { id: 1, name: "Computer" },
  { id: 2, name: "Laptop" },
  { id: 3, name: "Mouse" },
  { id: 4, name: "Keyboard" },
  { id: 5, name: "Headphones" },
];

const baskets = {};

/* GET home page. */
router.get("/", function (req, res, next) {
  if (!req.cookies.sessId) {
    res.cookie("sessId", Math.random().toString());
  }

  res.render("index", { items, basket: baskets[req.cookies.sessId] });
});

router.post("/addItem", function (req, res, next) {
  const { id } = req.body;
  const sessId = req.cookies.sessId;
  const item = items.find((item) => item.id == id);
  if (!baskets[sessId]) {
    baskets[sessId] = [];
  }
  baskets[sessId].push(item);
  res.redirect("/");
});

module.exports = router;
