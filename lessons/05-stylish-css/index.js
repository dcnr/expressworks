'use strict';

const express = require('express');
const app = express();
const stylus = require('stylus');

const port = process.argv[2];


app
  .use(stylus.middleware(__dirname))
  .use('/', express.static(__dirname))
  .listen(port);
