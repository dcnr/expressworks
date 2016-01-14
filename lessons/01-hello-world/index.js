'use strict';

const app = require('express')();
const port = process.argv[2];

app
  .get('/home', (req, res) => {
    res.end('Hello World!');
  })
  .listen(port);
