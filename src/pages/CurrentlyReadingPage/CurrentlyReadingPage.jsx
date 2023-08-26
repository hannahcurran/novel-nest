import React, { useState, useEffect } from 'react';
import CurrentBookCard from '../CurrentBookCard/CurrentBookCard';
import * as currentBookAPI from "../../utilities/current-book-api";

export default function CurrentlyReadingPage({ user }) {
    const [currentBooks, setCurrentBooks] = useState([]);
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
            setCurrentBooks([...currentBooks, addedBook]);
            setNewCurrentBook({ title: '', author: '' });
        } catch (error) {
            console.error('Error adding current book:', error);
        }
    }


    async function getCurrentBook() {
        const allCurrentBooks = await currentBookAPI.getCurrentBook();
        setCurrentBooks(allCurrentBooks);

    }



    useEffect(() => {
        getCurrentBook()
    }, [])

    return (
        <>
            <h1>Current Reading List</h1>
            <form className="currentlyReadingForm">

                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Book Title"
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
                        <button type="submit" onClick={handleNewCurrent}>Add Book</button>
                    </div>



                    <ul className="currentBooks-container">
                        {currentBooks.map((currentBook, idx) => (
                            <CurrentBookCard key={currentBook._id} currentBook={currentBook} />
                        ))}
                    </ul>
                </div>
            </form>

        </>

    );
}
