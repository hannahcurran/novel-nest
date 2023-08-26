// const jwt = require('jsonwebtoken');
const Book = require('../../models/book');

async function addWantBook(req, res) {
    try {
        const newWantBook = await Book.create(req.body);
        res.json(newWantBook);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding current book' });
    }
}

async function getWantBook(req, res) {
    try {
        const getWantBook = await Book.find({ user: req.user._id }).exec();
        res.json(getWantBook);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching current books' });
    }
}

async function deleteWantBook(req, res) {
    try {
        const bookId = req.params.bookId;
        await Book.findByIdAndDelete(bookId);
        res.json({ message: 'Book deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting book' });
    }
}

module.exports = { addWantBook, getWantBook, deleteWantBook };
