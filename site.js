var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/Public'));

app.use(express.static('D:/home/site/wwwroot/src/tabor-o2o-admin/Public/'));



var port= process.env.PORT || 1338;

var server = app.listen(port, function() {
  console.log('Listening on port %d', server.address().port);
});