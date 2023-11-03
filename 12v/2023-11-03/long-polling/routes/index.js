var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { messages });
});

const messages = [];
let currentId = 0;
router.post("/", function (req, res, next) {
  const { name, content } = req.body;
  const message = { name, content, id: currentId++ };
  messages.push(message);
  waitForNewMessageResolves.forEach((resolve) => resolve(message));
  res.render("index", { messages });
});

router.get("/api/messages", function (req, res, next) {
  res.json(messages);
});

router.get("/api/getNextMessage", async function (req, res, next) {
  const message = await waitForNewMessage();
  res.json(message);
});

const waitForNewMessageResolves = [];
function waitForNewMessage() {
  return new Promise((resolve) => {
    waitForNewMessageResolves.push(resolve);
  });
}

module.exports = router;
