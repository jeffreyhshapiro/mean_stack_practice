var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var PORT = 3000;
var app = express();
var seed = require('./seed.js')

app.get('/', function(req, res){
  res.sendFile(process.cwd()+ '/views/html/index.html');
})

app.listen(PORT, function(){
  console.log('listening on port '+PORT)
});