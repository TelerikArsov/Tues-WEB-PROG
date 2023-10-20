const net = require("net");

const server = net.createServer((socket) => {
  socket.write("HTTP/1.1 200 OK\r\n");
  // headers
  socket.write("\r\n");
  socket.write("Hello world");
  socket.end();
});

server.listen(1234);
