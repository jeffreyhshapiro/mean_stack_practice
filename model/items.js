var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
  name: String,
  description: String,
  cost: {type: Number, min: 0},
  sold: Boolean,
  itemOwner: {type: Schema.Types.ObjectId, ref: 'User'},
  comment: {type: Schema.Types.ObjectId, ref: 'Comment'}
});

var Item = mongoose.model('Item', itemSchema)
module.exports = Item;