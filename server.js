var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;
process.env.PWD = process.cwd();

app.use(express.static(path.join(process.env.PWD, 'dist')));

app.get('/*', function(req, res){
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(port);

console.log('Listening on port '+port);
