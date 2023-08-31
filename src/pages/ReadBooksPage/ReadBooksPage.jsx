// // import { useLocation } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
// import ReadBookCard from "../../components/ReadBookCard/ReadBookCard";
// import * as readBookAPI from "../../utilities/read-book-api";
// import "./ReadBooksPage.css";
// import '../App/App.css';
// // import {Box} from '@chakra-ui/react';

// // import {
// //     Editable,
// //     EditableInput,
// //     EditableTextarea,
// //     EditablePreview,
// // } from '@chakra-ui/react'


// export default function ReadBooksPage({ user }) {
//     // const location = useLocation();
//     // const queryParams = new URLSearchParams(location.search);
//     // const [finishedBooks, setFinishedBooks] = useState([]);
//     const [review, setReview] = useState('');
//     const [readBooks, setReadBooks] = useState([]);
//     const [newReadBook, setNewReadBook] = useState({
//         title: '',
//         author: '',
//         user: user,
//         isFavorite: false
//     });
//     const [editingReview, setEditingReview] = useState(null);

//     function handleChange(evt) {
//         setNewReadBook({ ...newReadBook, [evt.target.name]: evt.target.value });
//     }

//     function handleReviewChange(evt) {
//         setReview(evt.target.value);
//     }

//     async function handleNewRead(evt) {
//         evt.preventDefault();
//         try {
//             const newBookData = { ...newReadBook, user: user._id, status: 'read', review: review };
//             const addedBook = await readBookAPI.addReadBook(newBookData);
//             setReadBooks([...readBooks, addedBook]);
//             setNewReadBook({ title: '', author: '', review: '' });
//             setReview('');
//         } catch (error) {
//             console.error('Error adding book:', error);
//         }
//     }

//     async function getReadBook() {
//         try {
//             const allReadBooks = await readBookAPI.getReadBook(user._id);
//             setReadBooks(allReadBooks);
//         } catch (error) {
//             console.error('Error fetching books:', error);
//         }
//     }

//     async function handleDeleteBook(readBookId) {
//         try {
//             await readBookAPI.deleteReadBook(readBookId);
//             setReadBooks(readBooks.filter(readBook => readBook._id !== readBookId));
//         } catch (error) {
//             console.error('Error deleting book:', error);
//         }
//     }

//     function handleEdit(review) {
//         setEditingReview(review);
//     }

//     async function handleSaveEdit(reviewId, newReviewContent) {
//         try {
//             await readBookAPI.updateReview(reviewId, newReviewContent);
//             setReadBooks(prevReadBooks =>
//                 prevReadBooks.map(book => {
//                     if (book._id === reviewId) {
//                         return { ...book, review: newReviewContent };
//                     }
//                     return book;
//                 })
//             );

//             setEditingReview(null);
//         } catch (error) {
//             console.error('Error updating review:', error);
//         }
//     }

//     async function handleToggleFavorite(bookId) {
//         try {
//             const updatedBook = await readBookAPI.toggleFavoriteStatus(bookId);
//             setReadBooks(prevReadBooks =>
//                 prevReadBooks.map(book => (book._id === bookId ? updatedBook : book))
//             );
//         } catch (error) {
//             console.error('Error toggling favorite status:', error);
//         }
//     }

//     useEffect(() => {
//         getReadBook()
//     }, [])

//     const readBooksToShow = readBooks.filter(book => book.status === 'read');

//     return (

//         <>
//             <h2>Read Books & Reviews</h2>

//             <form className="readBookForm">

//                 <div className="input-container">
//                     <input
//                         type="text"
//                         placeholder="Title"
//                         name="title"
//                         value={newReadBook.title}
//                         onChange={handleChange}
//                     />
//                     <input
//                         type="text"
//                         placeholder="Author"
//                         name="author"
//                         value={newReadBook.author}
//                         onChange={handleChange}
//                     />

//                     <input
//                         type="text"
//                         placeholder="Write a Review..."
//                         name="review"
//                         value={newReadBook.review}
//                         onChange={handleReviewChange}
//                     />

//                     <div className='submit-btn'>
//                         <button type="submit" onClick={handleNewRead}>Add</button>
//                     </div>

//                     {editingReview && (
//                         <div>
//                             <input
//                                 type="text"
//                                 value={editingReview.review}
//                                 onChange={evt => setEditingReview({ ...editingReview, review: evt.target.value })}
//                             />

//                             <button onClick={() => handleSaveEdit(editingReview._id, editingReview.review)}>
//                                 Save
//                             </button>
//                             <button onClick={() => setEditingReview(null)}>Cancel</button>


//                         </div>
//                     )}

//                 </div>
//             </form>

//             <ul className="readBooks-container">
//                 {readBooksToShow.map((readBook, idx) => (
//                     <ReadBookCard key={readBook._id}
//                         readBook={readBook}
//                         onDelete={handleDeleteBook}
//                         onEdit={handleEdit}
//                         onToggleFavorite={() => handleToggleFavorite(readBook._id)} />

//                 ))}
//             </ul>


//         </>

//     );
// }












// import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ReadBookCard from "../../components/ReadBookCard/ReadBookCard";
import * as readBookAPI from "../../utilities/read-book-api";
import "./ReadBooksPage.css";
import '../App/App.css';
// import {Box} from '@chakra-ui/react';

import {
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
} from '@chakra-ui/react'


export default function ReadBooksPage({ user }) {
    // const location = useLocation();
    // const queryParams = new URLSearchParams(location.search);
    // const [finishedBooks, setFinishedBooks] = useState([]);
    const [review, setReview] = useState('');
    const [readBooks, setReadBooks] = useState([]);
    const [newReadBook, setNewReadBook] = useState({
        title: '',
        author: '',
        user: user,
        isFavorite: false
    });
    const [editingReview, setEditingReview] = useState(null);

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
            setNewReadBook({ title: '', author: '', review: '' });
            setReview('');
        } catch (error) {
            console.error('Error adding book:', error);
        }
    }

    async function getReadBook() {
        try {
            const allReadBooks = await readBookAPI.getReadBook(user._id);
            setReadBooks(allReadBooks);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    }

    async function handleDeleteBook(readBookId) {
        try {
            await readBookAPI.deleteReadBook(readBookId);
            setReadBooks(readBooks.filter(readBook => readBook._id !== readBookId));
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    }

    function handleEdit(review) {
        setEditingReview(review);
    }

    async function handleSaveEdit(reviewId, newReviewContent) {
        try {
            await readBookAPI.updateReview(reviewId, newReviewContent);
            setReadBooks(prevReadBooks =>
                prevReadBooks.map(book => {
                    if (book._id === reviewId) {
                        return { ...book, review: newReviewContent };
                    }
                    return book;
                })
            );

            setEditingReview(null);
        } catch (error) {
            console.error('Error updating review:', error);
        }
    }

    async function handleToggleFavorite(bookId) {
        try {
            const updatedBook = await readBookAPI.toggleFavoriteStatus(bookId);
            setReadBooks(prevReadBooks =>
                prevReadBooks.map(book => (book._id === bookId ? updatedBook : book))
            );
        } catch (error) {
            console.error('Error toggling favorite status:', error);
        }
    }

    useEffect(() => {
        getReadBook()
    }, [])

    const readBooksToShow = readBooks.filter(book => book.status === 'read');

    return (

        <>
            <h2>Read Books & Reviews</h2>

            <form className="readBookForm">
                <div className="readbooks-input-container">
                    <h3>Finished your book?</h3>
                    <h5>Don't forget to leave a review...</h5>
                    <br />
                    <input
                        type="text"
                        placeholder="Title"
                        name="title"
                        value={newReadBook.title}
                        onChange={handleChange}
                    />
                    <br />
                    <br />
                    <input
                        type="text"
                        placeholder="Author"
                        name="author"
                        value={newReadBook.author}
                        onChange={handleChange}
                    />
                    <br />
                    <br />
                    <input
                        type="text"
                        placeholder="What did you think?"
                        name="review"
                        value={newReadBook.review}
                        onChange={handleReviewChange}
                    />
                    <br />
                    <br />
                    
                        <button type="submit" onClick={handleNewRead} className='read-review-add-btn'>Add</button>
            





                    {editingReview && (
                        <div>
                            <input
                                type="text"
                                value={editingReview.review}
                                onChange={evt => setEditingReview({ ...editingReview, review: evt.target.value })}
                            />

                            <button onClick={() => handleSaveEdit(editingReview._id, editingReview.review)}>
                                Save
                            </button>
                            <button onClick={() => setEditingReview(null)}>Cancel</button>


                        </div>
                    )}

                </div>
            </form>

            <ul className="readBooks-container">
                {readBooksToShow.map((readBook, idx) => (
                    <ReadBookCard key={readBook._id}
                        readBook={readBook}
                        onDelete={handleDeleteBook}
                        onEdit={handleEdit}
                        onToggleFavorite={() => handleToggleFavorite(readBook._id)} />

                ))}
            </ul>


        </>

    );
}













// import {
//     Box,
//     Container,
//     Heading,
//     Text,
//     Stack,
//     SimpleGrid,
//     Icon,
//     HStack,
//     VStack,
// } from '@chakra-ui/react';
// // import { CheckIcon } from '@chakra-ui/icons';
// import ReadBookCard from "../../components/ReadBookCard/ReadBookCard";
// import * as readBookAPI from "../../utilities/read-book-api";
// import '../App/App.css';

// export default function ReadBooksPage({ user }) {
//     const [review, setReview] = useState('');
//     const [readBooks, setReadBooks] = useState([]);
//     const [newReadBook, setNewReadBook] = useState({
//         title: '',
//         author: '',
//         user: user,
//         isFavorite: false
//     });
//     const [editingReview, setEditingReview] = useState(null);

//     // Rest of your functions and useEffects...


//     function handleChange(evt) {
//         setNewReadBook({ ...newReadBook, [evt.target.name]: evt.target.value });
//     }

//     function handleReviewChange(evt) {
//         setReview(evt.target.value);
//     }

//     async function handleNewRead(evt) {
//         evt.preventDefault();
//         try {
//             const newBookData = { ...newReadBook, user: user._id, status: 'read', review: review };
//             const addedBook = await readBookAPI.addReadBook(newBookData);
//             setReadBooks([...readBooks, addedBook]);
//             setNewReadBook({ title: '', author: '', review: '' });
//             setReview('');
//         } catch (error) {
//             console.error('Error adding book:', error);
//         }
//     }

//     async function getReadBook() {
//         try {
//             const allReadBooks = await readBookAPI.getReadBookWithFavoriteStatus(user._id);
//             setReadBooks(allReadBooks);
//         } catch (error) {
//             console.error('Error fetching books:', error);
//         }
//     }

//     async function handleDeleteBook(readBookId) {
//         try {
//             await readBookAPI.deleteReadBook(readBookId);
//             setReadBooks(readBooks.filter(readBook => readBook._id !== readBookId));
//         } catch (error) {
//             console.error('Error deleting book:', error);
//         }
//     }

//     function handleEdit(review) {
//         setEditingReview(review);
//     }

//     async function handleSaveEdit(reviewId, newReviewContent) {
//         try {
//             await readBookAPI.updateReview(reviewId, newReviewContent);
//             setReadBooks(prevReadBooks =>
//                 prevReadBooks.map(book => {
//                     if (book._id === reviewId) {
//                         return { ...book, review: newReviewContent };
//                     }
//                     return book;
//                 })
//             );

//             setEditingReview(null);
//         } catch (error) {
//             console.error('Error updating review:', error);
//         }
//     }

//     async function handleToggleFavorite(bookId) {
//         try {
//             const updatedBook = await readBookAPI.toggleFavoriteStatus(bookId);
//             setReadBooks(prevReadBooks =>
//                 prevReadBooks.map(book => (book._id === bookId ? updatedBook : book))
//             );
//         } catch (error) {
//             console.error('Error toggling favorite status:', error);
//         }
//     }

//     useEffect(() => {
//         getReadBook()
//     }, [])

//     const readBooksToShow = readBooks.filter(book => book.status === 'read');


//     return (
//         <Box p={4}>
//             <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
//                 <Heading fontSize={'3xl'}>Read Books & Reviews</Heading>
//                 {/* Rest of the text here */}
//             </Stack>

//             <Container maxW={'6xl'} mt={10}>
//                 <form className="readBookForm">
//                     {/* Rest of your form inputs */}
//                 </form>

//                 <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
//                     {readBooksToShow.map((readBook, idx) => (
//                         <ReadBookCard
//                             key={readBook._id}
//                             readBook={readBook}
//                             onDelete={handleDeleteBook}
//                             onEdit={handleEdit}
//                             onToggleFavorite={() => handleToggleFavorite(readBook._id)}
//                         />
//                     ))}
//                 </SimpleGrid>
//             </Container>
//         </Box>
//     );
// }


