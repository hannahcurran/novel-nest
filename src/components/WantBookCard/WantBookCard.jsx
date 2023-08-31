import React from 'react';

export default function WantBookCard({ wantBook, onDelete }) {
    return (
        <div className="want-book-card">
            <p className="book-title">Title:</p> <p>{wantBook.title}</p>
            <br />
            <p className="book-author">Author:</p> <p> {wantBook.author}</p>
            <button onClick={() => onDelete(wantBook._id)} className="want-book-submit-btn">Remove</button>
        </div>
    )
}





