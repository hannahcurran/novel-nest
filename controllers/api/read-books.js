// const jwt = require('jsonwebtoken');
const Book = require('../../models/book');

async function addReadBook(req, res) {
    try {
        const newReadBook = await Book.create({ ...req.body, status: 'read' });
        res.json(newReadBook);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding read book' });
    }
}

async function getReadBook(req, res) {
    try {
        const getReadBook = await Book.find({ user: req.user._id }).exec();
        res.json(getReadBook);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching read books' });
    }
}

async function deleteReadBook(req, res) {
    try {
        const bookId = req.params.bookId;
        await Book.findByIdAndDelete(bookId);
        res.json({ message: 'Book deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting book' });
    }
}

module.exports = { addReadBook, getReadBook, deleteReadBook };
