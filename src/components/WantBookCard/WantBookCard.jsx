import React from 'react';

export default function WantBookCard({ wantBook, onDelete }) {
    return (
        <div className="want-book-card">
            <p>Title: {wantBook.title}</p>
            <p>Author: {wantBook.author}</p>
            <button onClick={() => onDelete(wantBook._id)}>Delete</button>
        </div>
    )
}





