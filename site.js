var express = require('express'), app = express();

app.use(express.static(__dirname + '/Public'));

var port= process.env.PORT || 10011;

var server = app.listen(port, function() {
  console.log('Listening on port %d', server.address().port);
});
