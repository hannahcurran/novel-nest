import React from 'react';
import '../../pages/CurrentlyReadingPage/CurrentlyReadingPage.css';

// export default function CurrentBookCard({ currentBook, handleDeleteBook }) {
//     return (
//         <div className="current-book-card">
//             <p>Title: {currentBook.title}</p>
//             <p>Author: {currentBook.author}</p>
//             <button onClick={() => handleDeleteBook(currentBook._id)}>Delete</button>

//         </div>
//     );
// }




// import React from 'react';

// export default function CurrentBookCard({ currentBook, onDelete, onFinished }) {
//     return (
//         <div className="current-book-card">
//             <p>Title: {currentBook.title}</p>
//             <p>Author: {currentBook.author}</p>
//             <button onClick={() => onFinished(currentBook)}>Finished</button>


//             <button onClick={() => onDelete(currentBook._id)}>Delete</button>
//         </div>
//     );
// }


// export default function CurrentBookCard({ currentBook, onDelete, onFinished }) {
//     return (
//         <div className="current-book-card">
//             <p>Title: {currentBook.title}</p>
//             <p>Author: {currentBook.author}</p>
//             {currentBook.status !== 'finished' && (
//                 <button onClick={() => onFinished(currentBook._id)}>Finished</button>
//             )}
//             <button onClick={() => onDelete(currentBook._id)}>Delete</button>
//         </div>
//     );
// }



export default function CurrentBookCard({ currentBook, onDelete, onFinished }) {
    return (
        <div className="current-book-card">
            {currentBook.status !== 'finished' ? (
                <>
                    <p>Title: {currentBook.title}</p>
                    <p>Author: {currentBook.author}</p>
                    <button onClick={() => onFinished(currentBook._id)}>Finished</button>
                    <button onClick={() => onDelete(currentBook._id)}>Delete</button>
                </>
            ) : (
                <>
                    <p>Title: {currentBook.title}</p>
                    <p>Author: {currentBook.author}</p>
                    <p>Book Finished</p>
                </>
            )}
        </div>
    );
}
