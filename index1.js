var http = require("http");
http
  .createServer(function (req, res) {
    res.write("Created a Node JS server using HTTP module.");
    res.end();
  })
  .listen("8080");
