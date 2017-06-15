let http = require("http");

let server = http.createServer((req, res) => {
    res.setHeader("Content-type", "text/html");
    res.end("<h1>Hello World</h1>");
});

server.listen(1234, "localhost", ()=>console.log("Server started, listning on port: " + 1234));
