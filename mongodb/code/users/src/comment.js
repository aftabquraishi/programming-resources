const mongoose = require('mongoose');
const schema = mongoose.Schema;

const CommentSchema = new schema({
    content: String,
    user: {
        type: schema.Types.ObjectId,
        ref: 'user'
    }
});

const Comment = mongoose.model('comment', CommentSchema);

module.exports = Comment;