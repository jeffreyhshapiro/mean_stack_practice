var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var PORT = 3000;
var app = express();
var seed = require('./seed.js')
var User = require('./model/users.js')

app.use(express.static('views'));
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res){
  res.sendFile(process.cwd()+ '/views/html/index.html');
})

app.post('/login', function(req, res){
  var username = req.body.username
  var password = req.body.password
  User.find(username, function(err, result){
    for (var i = 0; i < result.length; i++) {
      if (username === result[i].username && password === result[i].password) {
        console.log('auth match')
      };
    };
  })
})

app.listen(PORT, function(){
  console.log('listening on port '+PORT)
});