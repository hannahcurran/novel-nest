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
            const newBookData = { ...newWantBook, user: user._id };
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

    async function handleDeleteBook(bookId) {
        try {
            await wantBookAPI.deleteWantBook(bookId);
            setWantBooks(wantBooks.filter(book => book._id !== bookId));
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    }

    useEffect(() => {
        getWantBook()
    }, [])

    return (
        <>
            <h1>Want To Read</h1> 

            <ul className="wantBooks-container">
                {wantBooks.map((wantBook, idx) => (
                    <WantBookCard key={wantBook._id} wantBook={wantBook} 
                        onDelete={handleDeleteBook} />
                        
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
