const express = require('express');
const app = express();
file = process.argv[3];
port = process.argv[2];
path = require('path');

app.get('/home', function(req,res){
    app.set('views', file);
    app.set('view engine', 'pug');
    res.render('index', {date: new Date().toDateString()});

}).listen(port);