var express = require('express');
var fs = require('fs');

var app = express.createServer();

var file = fs.readFileSync('index.html').toString();

app.get('/', function(request, response) {
  response.send(file);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
