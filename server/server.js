const express = require('express');
const path = require('path');
const db = require('../database/index.js');

const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

app.get('/1', (req, res) => {
  const gameId = parseInt(req.params.gameId);

  const handleRequest = function(err, data) {
    if (err) {
      res.status(500).send();
    } else {
      res.status(201).send(data);
    }
  }
  db.getGame(gameId, handleRequest);
});
