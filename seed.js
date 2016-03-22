var mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/marketExchange')
var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});
db.once('open', function() {
  console.log('Mongoose connection successful for marketExchange.');
});

var User = require('./model/users.js');
var Item = require('./model/items.js');
var Comment = require('./model/comment.js');

var user1 = new User({
  username: 'Dumbledore',
  password: 'cashmoney',
  money: '100000',
  collectedItems: ['Bernie Botts Jelly Beans', 'Phoenix Feather Wand']
})

user1.save(function(err){
  console.log(user1.username+ ' saved')
  if (err) {throw err};
});


var user2 = new User({
  username: 'Neo',
  password: 'matrix',
  money: '75000',
  collectedItems: ['Kung Fu', 'Trenchcoat', 'Sunglasses']
});

user2.save(function(err){
  console.log(user2.username+ ' saved')
  if (err) {throw err};
});

var user3 = new User ({
  username: 'Kurt',
  password: 'nirvana',
  money: '30000',
  collectedItems: ['Lefty guitar', 'Grungy clothing']
})

user3.save(function(err){
  console.log(user3.username+ ' saved')
  if (err) {throw err};
});
  