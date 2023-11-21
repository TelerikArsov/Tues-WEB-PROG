var express = require("express");
const { getPosts, createPost, getPostById } = require("../lib/database");
var router = express.Router();

/* GET home page. */
router.get("/getPosts", async function (req, res, next) {
  res.json(await getPosts());
});

router.get("/getPost", async function (req, res, next) {
  const id = req.query.id;
  res.json(await getPostById(id));
});

module.exports = router;
