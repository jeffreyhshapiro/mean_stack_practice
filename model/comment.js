var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
  comment: String,
  itemOwner: {type: Schema.Types.ObjectId, ref: 'User'}
});

var Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment;