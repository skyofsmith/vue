var http = require('http');
var url = require('url');
var util = require('util');

var server = http.createServer(function(req, resp) {
   resp.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
   resp.end('hello');
   console.log(url.URL());
});

server.listen(8080)