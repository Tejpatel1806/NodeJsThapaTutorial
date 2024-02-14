//The http.createServer() method includes request and response parameters which is supplied by Node.js
//The request object can be used to get information about the current HTTP request
//eg.url,request header,any data
//the response object can be used to send  a response for a current HTTP request
const http = require("http");
const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/") {
        res.end('hello from the home side');
    }
    else if (req.url === "/about") {
        res.end('hello from the about side');
    }
    else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.end("<h1>404 Page does not exist</h1>");
    }

});

server.listen(8000, "127.0.0.1", () => {
    console.log("listing from port number 8000");
});