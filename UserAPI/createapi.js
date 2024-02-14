const http = require("http");
const fsf = require("fs");
const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/") {
        res.end('hello from the home side');
    }
    else if (req.url === "/about") {
        res.end('hello from the about side');
    }
    else if (req.url === "/getdata") {
        fsf.readFile("api.json", "utf-8", (err, data) => {
            res.end(data);
        })
    }
    else {
        //writeHead matlab ema aapde header set karie chie ema first parameter che te
        //error code che ane second parameter che te content type che
        //content type json hoy to ema application.json lakhvanu
        res.writeHead(404, { "Content-type": "text/html" });
        res.end("<h1>404 Page does not exist</h1>");
    }

});
server.listen(8000, "127.0.0.1", () => {
    console.log("listing from port number 8000");
});