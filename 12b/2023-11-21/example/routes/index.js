var express = require("express");
const { getPosts, createPost, getPostById } = require("../lib/database");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  const posts = await getPosts();
  res.render("index", { title: "Posts", posts });
});

router.get("/post/:id", async function (req, res, next) {
  const id = req.params.id;
  const post = await getPostById(id);
  res.render("post", post);
});

router.post("/", async function (req, res, next) {
  const { title, content } = req.body;
  await createPost(title, content);
  res.redirect("/");
});

module.exports = router;
