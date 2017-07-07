var express = require('express'),
    app = express();

app.use(express.static('D:/home/site/wwwroot/src/tabor-o2o-admin/Public/'));


app.set('port', process.env.PORT || 1338);

var server = app.listen(1338, function() {
  console.log('Listening on port %d', server.address().port);
});