let express = require('express');
let requestPromise = require('request-promise');
let path = require('path');

const PORT = 4000;

let app = express();

app.use(express.json());

app.use('/:songid', express.static(path.join(__dirname, '../')));

app.get('/songs/:songid', (req, res) => {
  const songId = req.params.songid;
  const options = {
    uri: `http://localhost:5000/${songId}`,
    json: true
  };

  requestPromise(options)
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.end(error);
    });
});

app.post('/songs', (req, res) => {
  const options = {
    method: 'POST',
    body: req.body,
    uri: `http://localhost:5000/songs`,
    json: true
  };

  requestPromise(options)
    .then(response => {
      res.status(200);
      res.end();
    })
    .catch(error => {
      res.status(500);
      res.end();
      throw error;
    })
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
