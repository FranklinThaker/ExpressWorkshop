port = process.argv[2];

const express = require('express');
const app = express();
app.get('/home', function(req,res){
    res.end("Hello World!");
}).listen(port);