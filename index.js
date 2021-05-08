var http = require('http');

http.createServer(function (req, res) {
    console.log("Request Received!");
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080);

