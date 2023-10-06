const WebSocketServer = require("websocket").server;
const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer(function (request, response) {
  console.log(new Date() + " Received request for " + request.url);
  const uri = url.parse(request.url).pathname;
  console.log(uri);
  if (uri == "/") {
    fs.readFile("./index.html", function (err, data) {
      if (err) {
        response.statusCode = 404;
        return response.end(
          "File not found or you made an invalid request."
        );
      }

      const mediaType = "text/html";

      response.setHeader("Content-Type", mediaType);
      response.end(data);
    });
  } else {
    response.statusCode = 404;
    response.end();
  }
});
server.listen(8080, function () {
  console.log(new Date() + " Server is listening on port 8080");
});
const websocket = new WebSocketServer({
  httpServer: server,
});
websocket.on("request", (request) => {
  connection = request.accept(null, request.origin);
  connection.on("open", () => {
    console.log("Opened!!!");
    sendevery5seconds();
  });
  connection.on("close", () => console.log("CLOSED!!!"));
  connection.on("message", (message) => {
    console.log(`Received message ${message.utf8Data}`);
    connection.send(`got your message: ${message.utf8Data}`);
  });

  //use connection.send to send stuff to the client
});

function sendevery5seconds() {
  connection.send(`Message ${Math.random()}`);

  setTimeout(sendevery5seconds, 5000);
}
