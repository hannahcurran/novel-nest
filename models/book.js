const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = require('mongodb');

const bookSchema = new Schema({
    title:{ type: String, required: true},
    author:{ type: String, required: true},
    // finished: {type: Boolean},
    status: { type: String, enum: ['currently reading', 'want to read' ,'read'], required: true }, 
    user: { type: ObjectId, required: true },
    review: {type: String},
    isFavorite: { type: Boolean, default: false },
    progress: { type: Number, default: 0, min: 0, max: 100 }
 
});

module.exports = mongoose.model('Book', bookSchema);