var express = require("express");
const { getPosts, createPost, getPostById } = require("../lib/database");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  const posts = await getPosts();
  res.render("index", { title: "Posts", posts });
});

router.post("/", async function (req, res, next) {
  const { title, content } = req.body;
  await createPost(content, title);
  res.redirect("/");
});

router.get("/post/:id", async function (req, res, next) {
  const post = await getPostById(req.params.id);
  res.render("post", post);
});

router.get("/something2", async function (req, res, next) {
  res.send("Something in index router");
});

module.exports = router;
