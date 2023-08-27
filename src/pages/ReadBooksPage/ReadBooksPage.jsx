// import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ReadBookCard from "../../components/ReadBookCard/ReadBookCard";
import * as readBookAPI from "../../utilities/read-book-api";

export default function ReadBooksPage({ user }) {
    // const location = useLocation();
    // const queryParams = new URLSearchParams(location.search);
    // const [finishedBooks, setFinishedBooks] = useState([]);
    const [review, setReview] = useState('');
    const [readBooks, setReadBooks] = useState([]);
    const [newReadBook, setNewReadBook] = useState({
        title: '',
        author: '',
        user: user
    });

    function handleChange(evt) {
        setNewReadBook({ ...newReadBook, [evt.target.name]: evt.target.value });
    }

    function handleReviewChange(evt) {
        setReview(evt.target.value);
    }

    async function handleNewRead(evt) {
        evt.preventDefault();
        try {
            const newBookData = { ...newReadBook, user: user._id, status: 'read', review: review };
            const addedBook = await readBookAPI.addReadBook(newBookData);
            setReadBooks([...readBooks, addedBook]);
            setNewReadBook({ title: '', author: '', review: ''});
            setReview('');
        } catch (error) {
            console.error('Error adding book:', error);
        }
    }

    async function getReadBook() {
        const allReadBooks = await readBookAPI.getReadBook();
        setReadBooks(allReadBooks);

    }

    async function handleDeleteBook(readBookId) {
        try {
            await readBookAPI.deleteReadBook(readBookId);
            setReadBooks(readBooks.filter(readBook => readBook._id !== readBookId));
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    }

    useEffect(() => {
        getReadBook()
    }, [])

    const readBooksToShow = readBooks.filter(book => book.status === 'read');

    return (


        // <div> <h2>Read Book Details</h2>
        //     <p>Title: </p>
        //     <p>Author: </p>
        //     <p>Review:</p>

        // </div>

        <>
            <h2>Read Books & Reviews</h2>

            <ul className="readBooks-container">
                {readBooksToShow.map((readBook, idx) => (
                    <ReadBookCard key={readBook._id} readBook={readBook} onDelete={handleDeleteBook} />

                ))}
            </ul>
            <form className="readBookForm">

                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Title"
                        name="title"
                        value={newReadBook.title}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Author"
                        name="author"
                        value={newReadBook.author}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        placeholder="Review"
                        name="review"
                        value={newReadBook.review}
                        onChange={handleReviewChange}
                    />
                    <div className='submit-btn'>
                        <button type="submit" onClick={handleNewRead}>Add</button>
                    </div>




                </div>
            </form>

        </>
    );
}
