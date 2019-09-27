var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  // res.write("The date and time are currently: " + dt.myDateTime());
  res.write("Work");
  res.end();
}).listen(9001);


const sqlite3 = require('sqlite3')
