import React from "react";


export default function ReadBookCard({ readBook, onDelete, onEdit, onToggleFavorite }) {
    //add edit/ update function in { } above this line
    return (
        <div className="read-book-card">
            <p>Title: {readBook.title}</p>
            <p>Author: {readBook.author}</p>
            <p>Review:{readBook.review}</p>
            <div className="favorite-icon" onClick={onToggleFavorite}>
            <button onClick={onToggleFavorite}>
                {readBook.isFavorite ? <span>❤️</span> : <span>🤍</span>}
            </button>
            </div><button onClick={() => onEdit(readBook)}>Edit Review</button>
            <button onClick={() => onDelete(readBook._id)}>Delete</button>
        </div>
    )
}







