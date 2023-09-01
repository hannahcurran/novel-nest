import React from 'react';
import '../../pages/CurrentlyReadingPage/CurrentlyReadingPage.css';
import { Box, Stack, VStack, Container} from '@chakra-ui/react';

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
        <div >
            <Container>
            {currentBook.status !== 'finished' ? (
                <>
                    <Box className='currently-reading-display-card'>
                        <p className="book-title">Title:</p><p>{currentBook.title}</p>
                        <p className="book-author">Author: </p> <p>{currentBook.author}</p>
                        <button onClick={() => onFinished(currentBook._id)} className='current-book-submit-btn'>I've Finished This Book!</button>
                        <button onClick={() => onDelete(currentBook._id)} className='current-book-submit-btn'>Remove</button>
                    </Box>
                </>
            ) : (
                <>
                    <p>Title: {currentBook.title}</p>
                    <p>Author: {currentBook.author}</p>
                    <p>Book Finished</p>
                </>
            )}
            </Container>
        </div>

    );
}
