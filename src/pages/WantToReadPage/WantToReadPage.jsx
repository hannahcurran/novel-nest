import React, { useState, useEffect } from 'react';
import WantBookCard from '../WantBookCard/WantBookCard';
import * as wantBookAPI from "../../utilities/want-book-api";

export default function WantToReadPage({ user }) {
    const [wantBooks, setWantBooks] = useState([]);
    const [newWantBook, setNewWantBook] = useState({
        title: '',
        author: '',
        user: user
    });

    function handleChange(evt) {
        setNewWantBook({ ...newWantBook, [evt.target.name]: evt.target.value });
    }

    async function handleNewWant(evt) {
        evt.preventDefault();
        try {
            const newBookData = { ...newWantBook, user: user._id, status: 'want to read' };
            const addedBook = await wantBookAPI.addWantBook(newBookData);
            setWantBooks([...wantBooks, addedBook]);
            setNewWantBook({ title: '', author: '' });
        } catch (error) {
            console.error('Error adding book:', error);
        }
    }


    async function getWantBook() {
        const allWantBooks = await wantBookAPI.getWantBook();
        setWantBooks(allWantBooks);

    }

    async function handleDeleteBook(wantBookId) {
        try {
            await wantBookAPI.deleteWantBook(wantBookId);
            setWantBooks(wantBooks.filter(wantBook => wantBook._id !== wantBookId));
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    }

    useEffect(() => {
        getWantBook()
    }, [])

    const wantBooksToShow = wantBooks.filter(book => book.status === 'want to read');

    return (
        <>
            <h2>Want To Read</h2>

            <ul className="wantBooks-container">
                {wantBooksToShow.map((wantBook, idx) => (
                    <WantBookCard key={wantBook._id} wantBook={wantBook} onDelete={handleDeleteBook} />

                ))}
            </ul>
            <form className="wantToReadForm">

                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Title"
                        name="title"
                        value={newWantBook.title}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Author"
                        name="author"
                        value={newWantBook.author}
                        onChange={handleChange}
                    />
                    <div className='submit-btn'>
                        <button type="submit" onClick={handleNewWant}>Add To List</button>
                    </div>




                </div>
            </form>

        </>

    );
}

