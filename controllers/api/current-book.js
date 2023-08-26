const jwt = require('jsonwebtoken');
const Book = require('../../models/book');

async function addCurrentBook(req, res) {
    try {
        const newCurrentBook = await Book.create(req.body);
        res.json(newCurrentBook);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding current book' });
    }
}

async function getCurrentBook(req, res) {
    try {
        const getCurrentBook = await Book.find({ user: req.user._id }).exec();
        res.json(getCurrentBook);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching current books' });
    }
}

module.exports = { addCurrentBook, getCurrentBook };
