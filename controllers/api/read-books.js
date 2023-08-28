// const jwt = require('jsonwebtoken');
const Book = require('../../models/book');
module.exports = { addReadBook, getReadBook, deleteReadBook, updateReview, getReadBookWithFavoriteStatus, toggleFavoriteStatus  };

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

async function updateReview(req, res) {
    const bookId = req.params.bookId;
    const newReview = req.body.review;

    try {
        const updatedBook = await Book.findByIdAndUpdate(
            bookId,
            { $set: { review: newReview } },
            { new: true }
        );
        res.json(updatedBook);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating review' });
    }
}


async function getReadBookWithFavoriteStatus(req, res){
    try {
        const userId = req.params.userId;
        const books = await Book.find({ user: userId });
        // determine the favorite status for each book
        // and attach it to the book objects before sending the response
        const booksWithFavoriteStatus = books.map(book => ({
            ...book.toObject(),
            isFavorite: false 
        }));
        res.json(booksWithFavoriteStatus);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching read books with favorite status' });
    }
};

async function toggleFavoriteStatus (req, res){
    try {
        const bookId = req.params.bookId;
        const book = await Book.findById(bookId);
        book.isFavorite = !book.isFavorite;
        await book.save();
        res.json(book);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error toggling favorite status' });
    }
};







