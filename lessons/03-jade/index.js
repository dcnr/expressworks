'use strict';

const app = require('express')();
const path = require('path');

const port = process.argv[2];

app
  .set('views', path.join(__dirname, 'templates'))
  .set('view engine', 'jade')
  .get('/home', (req, res) => {

    res.render('index', {
      date: new Date().toDateString()
    });

  })
  .listen(port);
