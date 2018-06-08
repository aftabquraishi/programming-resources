const mongoose = require('mongoose');
const schema = mongoose.Schema;
const AlbumSchema = require('./album');

const ArtistSchema = new schema({
    name: String,
    age: Number,
    yearsActive: Number,
    image: String,
    genre: String,
    website: String,
    netWorth: Number,
    labelName: String,
    retired: Boolean,
    albums: [AlbumSchema]
});

const Artist = mongoose.model('artist', ArtistSchema);

module.exports = Artist;