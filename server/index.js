let express = require('express');
let request = require('request');
let path = require('path');

//server is supposed to handle a get request to it
// when it receives a request, it sends requests to all of the services it needs to contact

const PORT = 4000;

let app = express();

app.use(express.json());

app.use('/:songid', express.static(path.join(__dirname, '../')));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
