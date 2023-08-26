
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function ReadBooksPage() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    // const [finishedBooks, setFinishedBooks] = useState([]);


    // const bookId = queryParams.get('id');
    const bookTitle = queryParams.get('title');
    const bookAuthor = queryParams.get('author');

    return (
        //         <div>
        //             
        //             <ReadBooksPage finishedBooks={finishedBooks} />
        //             <ul>
        //     {finishedBooks.map(book => (
        //         <li key={book._id}>
        //             <p>Title: {book.title}</p>
        //             <p>Author: {book.author}</p>
        //         </li>
        //     ))}
        // </ul>



        //         </div>

        <div> <h1>Read Book Details</h1>
            <p>Title: </p>
            <p>Author: </p>

        </div>
    );
}
