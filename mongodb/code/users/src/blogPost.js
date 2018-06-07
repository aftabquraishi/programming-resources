const mongoose = require('mongoose');
const schema = mongoose.Schema;

const BlogPostSchema = new schema({
    title: String,
    content: String,
    comments: [{
        type: schema.Types.ObjectId,
        ref: 'comment'
    }]
});

const BlogPost = mongoose.model('blogPost', BlogPostSchema);

module.exports = BlogPost;