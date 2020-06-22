const http = require('http');
const os = require('os');

console.log("Kubia server is starting...");

http.createServer((req, res) => {
    console.log("Received the request from " + req.connection.remoteAddress);

    res.writeHead(200);
    res.end("You've hit " + os.hostname() + "\n")
}).listen(8080);
