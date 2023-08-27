import React, { useState, useEffect } from 'react';
import CurrentBookCard from '../CurrentBookCard/CurrentBookCard';
import * as currentBookAPI from "../../utilities/current-book-api";
// import { updateCurrentBookStatus } from "../../utilities/current-book-api";


export default function CurrentlyReadingPage({ user }) {
    const [currentlyReadingBooks, setCurrentlyReadingBooks] = useState([]); 
    // const [finishedBooks, setFinishedBooks] = useState([]);
    const [newCurrentBook, setNewCurrentBook] = useState({
        title: '',
        author: '',
        user: user
    });

    function handleChange(evt) {
        setNewCurrentBook({ ...newCurrentBook, [evt.target.name]: evt.target.value });
    }

    async function handleNewCurrent(evt) {
        evt.preventDefault();
        try {
            const newBookData = { ...newCurrentBook, user: user._id };
            const addedBook = await currentBookAPI.addCurrentBook(newBookData);
            setCurrentlyReadingBooks([...currentlyReadingBooks, addedBook]);
            setNewCurrentBook({ title: '', author: '' });
        } catch (error) {
            console.error('Error adding current book:', error);
        }
    }


    async function getCurrentBook() {
        const allCurrentBooks = await currentBookAPI.getCurrentBook();
        setCurrentlyReadingBooks(allCurrentBooks);

    }

    async function handleDeleteBook(currentBookId) {
        try {
            await currentBookAPI.deleteCurrentBook(currentBookId);
            setCurrentlyReadingBooks(currentlyReadingBooks.filter(book => book._id !== currentBookId));
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    }

    // async function handleFinished(bookId) {
    //     try {
    //         const finishedBook = currentBooks.find(book => book._id === bookId);
    //         await currentBookAPI.updateCurrentBookStatus(bookId, 'finished');
    //         setFinishedBooks([...finishedBooks, finishedBook]);
    //         setCurrentBooks(currentBooks.filter(book => book._id !== bookId));
    //     } catch (error) {
    //         console.error('Error marking book as finished:', error);
    //     }
    // }
    


    useEffect(() => {
        getCurrentBook()
    }, [])

     const currentlyReadingBooksToShow = currentlyReadingBooks.filter(book => book.status === 'currently reading');
    return (
        <>
        <h1>Hi there, {user.name}!</h1>
            <h2>Your Current Reading List</h2>

            <ul className="currentBooks-container">
                {currentlyReadingBooksToShow.map((currentBook, idx) => (
                    <CurrentBookCard key={currentBook._id} currentBook={currentBook} 
                        onDelete={handleDeleteBook} />
                        //add onFinished={handleFinished} 
                ))}
            </ul>
            <form className="currentlyReadingForm">

                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Title"
                        name="title"
                        value={newCurrentBook.title}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Author"
                        name="author"
                        value={newCurrentBook.author}
                        onChange={handleChange}
                    />
                    <div className='submit-btn'>
                        <button type="submit" onClick={handleNewCurrent}>Add To List</button>
                    </div>




                </div>
            </form>

        </>

    );
}
