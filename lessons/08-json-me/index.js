'use strict';

const express = require('express');
const app = express();
const fs = require('fs');

const port = process.argv[2];


app.get('/books', (req, res) => {
  fs.readFile(process.argv[3], (err, data) => {
    if (err) {
      return err;
    }

    const parsed_data = JSON.parse(data);

    res.json(parsed_data);
  });
});

app.listen(port, 'localhost');
