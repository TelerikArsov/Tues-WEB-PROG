const express = require("express");
const bodyParser = require("body-parser");
const Handlebars = require("hbs");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const middleware = (req, res, next) => {
  console.log("Middleware called", req.method, req.url);
  req.customProperty = {
    foo: "bar",
  };
  next();
};

app.use(middleware);

// middleware
const homeHandler = (req, res) => {
  res.send(`
    <html>
      <head>
      </head>
      <body>
        <form method="POST" action="/">
          <input type="text" name="username" />
          <input type="submit" />
        </form>
      </body>
    </html> 
  `);
};

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
const template = Handlebars.compile("Welcome to the website, {{name}}");

app.get("/", homeHandler);
app.post("/", (req, res) => {
  console.log("POST1 CALLED");
  res.send(template({ name: req.body.username }));
});

app.get("/about", (req, res) => {
  res.send("About" + req.customProperty.foo);
});

app.listen(1234);
