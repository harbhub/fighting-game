var fs = require('fs');

var server = require('http').createServer(function (req, res) {
  res.writeHead(200, {'content-type': 'text/html'});
  fs.createReadStream('index.html').pipe(res);
});


server.listen(8080);
