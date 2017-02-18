var static = require('node-static');
var http = require('http');

var fileServer = new static.Server('./public');

http.createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response, function (err, result) {
            if (err) {
                console.error("Error serving " + request.url + " - " + err.message);
                response.writeHead(err.status, err.headers);
                response.end();
            }
        });
    }).resume();
}).listen(3000);