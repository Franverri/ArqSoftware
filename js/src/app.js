const express = require('express');

function sleep(time, callback) {
    var stop = new Date().getTime();
    while(new Date().getTime() < stop + time) {
        ;
    }
    callback();
}

const app = express();

var PORT = process.argv[2];


app.get('/', (req, res) => {
  res.send("Hi, I'm root node");
});

app.get('/sleep', (req, res) => {
  sleep(5000, function() {
     res.send("Node Sleep Test");
  })
});

app.get('/cycle', (req, res) => {
  var i = 0;
  while (i < 100000000) {
    i++;
  }
  res.send("Node Cycle Test");
});

// Start server
app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});



