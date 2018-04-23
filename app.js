var express = require('express');

var app = express();

var PORT = process.argv[2];

app.get('/', function (req, res) {
  console.log('Here');
  res.send('Hello World!' + '\n');
});

app.listen(PORT, function () {
  console.log('Example app listening on port 3000!');
});