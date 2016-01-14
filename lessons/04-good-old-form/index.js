'use strict';

const app = require('express')();
const bodyParser = require('body-parser');
const port = process.argv[2];

app
  .use(bodyParser.urlencoded({
    extended: false
  }))
  .post('/form', (req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(req.body.str.split('').reverse().join(''));
  })
  .listen(port);
