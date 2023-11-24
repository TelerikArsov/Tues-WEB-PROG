var express = require("express");
const { getPosts, createPost, getPostById } = require("../lib/database");
const { create } = require("hbs");
var router = express.Router();

/* GET home page. */
router.get("/*", async function (req, res, next) {
  res.render("clientside");
});

router.post("/getPosts", async function (req, res, next) {
  const posts = await getPosts();
  res.json(posts);
});

router.post("/createPost", async function (req, res, next) {
  const { title, content } = req.body;
  const posts = await createPost(title, content);
  res.end();
});

router.post("/getPostById", async function (req, res, next) {
  const { id } = req.body;
  res.json(await getPostById(id));
});

module.exports = router;
