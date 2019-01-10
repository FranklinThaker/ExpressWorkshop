const express = require('express');
const app = express();
port = process.argv[2];
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended:false}));

app.post('/form', function(req,res){
    res.send(req.body.str.split('').reverse().join(''))
}).listen(port);
