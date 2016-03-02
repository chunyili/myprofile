var path = require('path');
var express = require('express');

var app = express();

app.use(express.static("dist"));

app.listen(18320, function() {
  console.log('listening');
});
