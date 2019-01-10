port = process.argv[2];
const express = require('express');
const app = express();

app.get('/search', function(req,res){
    res.send(req.query);
}).listen(port);
