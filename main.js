  
var express = require('express'); // import the express framework
var app = express();

var jsonMessage = '{"status":"true","message":"hello node.js"}';

// this callback will respond with the message string
// "hello" is the API method to be called

app.get('/hello', function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
   // Send the response body as hardcoded json containing message
   res.end(jsonMessage);
  })

var server = app.listen(8080, function () {

  var port = server.address().port

  console.log("Node app listening at http://127.0.0.1:%s", port)

})
