port = process.argv[2];
const express = require('express');
const encrypt = require('crypto');
const app = express();

app.put('/message/:id', function(req,res){
    res.send(encrypt.createHash('sha1')
                    .update(new Date().toDateString() + req.params.id)
                    .digest('hex'));
}).listen(port);
