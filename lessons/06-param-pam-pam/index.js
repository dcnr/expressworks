'use strict';

const crypto = require('crypto');
const express = require('express');
const app = express();

const port = process.argv[2];


app.put('/message/:id', (req, res) => {
  const hash = crypto
    .createHash('sha1')
    .update(new Date().toDateString() + req.params.id)
    .digest('hex');

  res.send(hash);
});

app.listen(port);
