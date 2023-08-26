const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = require('mongodb');

const bookSchema = new Schema({
    title:{ type: String, required: true},
    author:{ type: String, required: true},
    finished: {type: Boolean},
    user: { type: ObjectId, required: true }
});

module.exports = mongoose.model('Book', bookSchema);