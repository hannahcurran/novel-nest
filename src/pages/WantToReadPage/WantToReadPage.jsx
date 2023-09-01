import React, { useState, useEffect } from 'react';
import WantBookCard from "../../components/WantBookCard/WantBookCard";
import * as wantBookAPI from "../../utilities/want-book-api";
import './WantToReadPage.css';
import '../App/App.css';
import NNwanttoread from '../../Images/NNwanttoread.png';

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
        <main className='main'>
            <>
            <header className='want-to-read-header'><img src={NNwanttoread} style={{ width: '70%' }}/></header>


                <form className="wantToReadForm">

                    <div className="input-container">
                    <h3>What will you read next?</h3>
                    <br />
                        <input
                            type="text"
                            placeholder="Title"
                            name="title"
                            value={newWantBook.title}
                            onChange={handleChange}
                        />
                        <br />
                        <br />
                        <input
                            type="text"
                            placeholder="Author"
                            name="author"
                            value={newWantBook.author}
                            onChange={handleChange}
                        />
                         <br />
                         <br />
                        <div >
                            <button type="submit" onClick={handleNewWant} className='add-to-list-btn'>Add To List</button>
                        </div>
                    </div>
                </form>

            </>
            <ul className="wantBooks-container">
                {wantBooksToShow.map((wantBook, idx) => (
                    <WantBookCard key={wantBook._id} wantBook={wantBook} onDelete={handleDeleteBook} />


                ))}

            </ul>
        </main>
    );
}

