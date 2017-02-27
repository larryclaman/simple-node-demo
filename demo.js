var os = require('os');
var hostname = os.hostname();
var ip = require('ip');  // npm install ip
$port = '80';

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

var d = new Date();

$result = "<html><body>Hello World!" + "<p>This is host " + hostname + " on " + ip.address();
$result = $result + "<p>The time is " + d.toString();
$result = $result + "</body></html>";
res.end($result);

}).listen($port);
console.log('server running on port ' + $port);
