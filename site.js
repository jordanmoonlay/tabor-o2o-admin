var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/Public'));

app.get('/', function(req, res) {
  res.send('Hello World')
})

app.set('port', process.env.PORT || 1338);

var server = app.listen(1338, function() {
  console.log('Listening on port %d', server.address().port);
});