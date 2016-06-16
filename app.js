var http = require('http');
var s = http.createServer(function (req, res) {
    // comment
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
    console.log("1");
});
s.listen(8000);
console.log('Server running!');
//# sourceMappingURL=app.js.map