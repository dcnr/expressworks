'use strict';

const express = require('express');
const app = express();

const port = process.argv[2];
const body = process.argv[3];

app.use(express.static(body)).listen(port);