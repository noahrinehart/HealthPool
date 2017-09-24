#!/usr/bin/env nodejs
var express = require('express');

var app = express();

const port = 8080;

app.use(express.static(__dirname));

app.listen(port, () => {
  console.log('Listening on ' + port);
});
