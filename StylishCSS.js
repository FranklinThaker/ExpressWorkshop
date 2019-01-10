port = process.argv[2];
dir = process.argv[3];
const stylus = require('stylus');
const express = require('express');
const app = express();

app.use(stylus.middleware(dir));
app.use(express.static(dir)).listen(port);
