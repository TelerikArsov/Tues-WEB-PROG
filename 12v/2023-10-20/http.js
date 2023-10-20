const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);
  if (req.url === "/") {
    res.write("Home");
  } else if (req.url === "/about") {
    res.write("About");
  } else {
    res.statusCode = 404;
    res.write("Not found");
  }
  res.end();
});

server.listen(1234);
