'use strict';

const app = require('express')();

const port = process.argv[2];
const jade = process.argv[3];


app
  .set('views', jade)
  .set('view engine', 'jade')
  .get('/home', (req, res) => {
    res.render('index', {date: new Date().toDateString()});

  }).listen(port);