port = process.argv[2];
let MainData;
const fs = require('fs');
const express = require('express');
const app = express();

app.get('/books', function(req,res){
    file = process.argv[3];
    fs.readFile(file , function(err,data){
            if(err) return res.send("Error in reading file");
            MainData = JSON.parse(data);
            res.json(MainData);
    });
    
    
}).listen(port);
