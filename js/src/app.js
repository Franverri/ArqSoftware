const express = require('express');

const app = express();

var PORT = process.argv[2];


app.get('/', (req, res) => {
  res.send("Hi, I'm root node");
});

// Start server
app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});



