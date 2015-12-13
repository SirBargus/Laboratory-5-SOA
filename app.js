//app.js
var path = require('path')
    express = require('express');

var app = express();

require('route.js')(app);

app.listen(8080, function() {
      console.log('listening');
});
