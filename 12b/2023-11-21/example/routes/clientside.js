var express = require("express");
const { getPosts, createPost, getPostById } = require("../lib/database");
var router = express.Router();

/* GET home page. */
router.get("/*", async function (req, res, next) {
  // const posts = await getPosts();
  res.render("clientside", { title: "Posts" });
});

module.exports = router;
