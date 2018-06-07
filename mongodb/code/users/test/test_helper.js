const mongoose = require('mongoose');

before((done) => {
    mongoose.connect('mongodb://localhost/users_test');
    mongoose.connection
    .once('open', () => { done(); })
    .on('error', (error) => {
        console.warn('Warning', error);
    });
});

beforeEach((done) => {
    const { users, blogposts, comments } = mongoose.connection.collections;

    users.drop(() => {
        blogposts.drop(() => {
            comments.drop(() => {
                done();
            });
        });
    });
});