import React from "react";


export default function ReadBookCard({ readBook, onDelete }) {
    //add edit/ update function in { } above this line
    return (
        <div className="read-book-card">
            <p>Title: {readBook.title}</p>
            <p>Author: {readBook.author}</p>
            <p>Review:{readBook.review}</p>
            <button onClick={() => onDelete(readBook._id)}>Delete</button>
        </div>
    )
}






