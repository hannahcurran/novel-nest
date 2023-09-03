// const jwt = require('jsonwebtoken');
const Book = require('../../models/book');

async function addCurrentBook(req, res) {
    try {
        const newCurrentBook = await Book.create({ ...req.body, status: 'currently reading' });
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

async function deleteCurrentBook(req, res) {
    try {
        const bookId = req.params.bookId;
        await Book.findByIdAndDelete(bookId);
        res.json({ message: 'Book deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting book' });
    }
}

async function updateBookProgress(req, res) {
    try {
        const bookId = req.params.bookId;
        const { progress, status } = req.body; 

        const updatedBook = await Book.findByIdAndUpdate(bookId, { progress, status }, { new: true });
        res.json(updatedBook);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating book progress' });
    }
}

module.exports = { addCurrentBook, getCurrentBook, deleteCurrentBook, updateBookProgress }; 



// exports.updateBook = async (req, res) => {
//     const bookId = req.params.id;
//     const updatedFields = req.body;

//     try {
//         const book = await Book.findByIdAndUpdate(bookId, updatedFields, { new: true });
//         res.json(book);
//     } catch (error) {
//         res.status(400).json({ error: 'Failed to update the book' });
//     }
// };