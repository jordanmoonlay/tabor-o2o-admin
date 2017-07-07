var express = require('express'),
    app = express();



// app.use(express.static(__dirname + '/Public'));
app.use(express.static('./Public'));

app.get('/index.html', function(req, res) {
  res.send('index.html')
})

var server = app.listen(1338, function() {
  console.log('Listening on port %d', server.address().port);
});