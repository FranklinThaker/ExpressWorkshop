port = process.argv[2];
file = process.argv[3];
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(file || path.join(__dirname, 'public'))).listen(port);
