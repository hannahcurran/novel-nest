import React, { useState, useEffect } from 'react';
import CurrentBookCard from '../../components/CurrentBookCard/CurrentBookCard';
import * as currentBookAPI from "../../utilities/current-book-api";
import './CurrentlyReadingPage.css';
// import { updateCurrentBookStatus } from "../../utilities/current-book-api";
import { Grid, GridItem, Container } from '@chakra-ui/react';
import NavBar from '../../components/NavBar/NavBar';
// import '../App/App.css';
import { dailyStreak } from '../../components/LoginForm/LoginForm';
import NNcurrentlyreading from '../../Images/NNcurrentlyreading.png';



export default function CurrentlyReadingPage({ user }) {
    const [currentlyReadingBooks, setCurrentlyReadingBooks] = useState([]);
    // const [dailyStreak, setDailyStreak] = useState(user.streak || '1 day! ')
    // const [finishedBooks, setFinishedBooks] = useState([]);
    const [newCurrentBook, setNewCurrentBook] = useState({
        title: '',
        author: '',
        user: user
    });

    function handleChange(evt) {
        setNewCurrentBook({ ...newCurrentBook, [evt.target.name]: evt.target.value });
    }

    async function handleNewCurrent(evt) {
        evt.preventDefault();
        try {
            const newBookData = { ...newCurrentBook, user: user._id };
            const addedBook = await currentBookAPI.addCurrentBook(newBookData);
            setCurrentlyReadingBooks([...currentlyReadingBooks, addedBook]);
            setNewCurrentBook({ title: '', author: '' });
        } catch (error) {
            console.error('Error adding current book:', error);
        }
    }


    async function getCurrentBook() {
        const allCurrentBooks = await currentBookAPI.getCurrentBook();
        setCurrentlyReadingBooks(allCurrentBooks);

    }

    async function handleDeleteBook(currentBookId) {
        try {
            await currentBookAPI.deleteCurrentBook(currentBookId);
            setCurrentlyReadingBooks(currentlyReadingBooks.filter(book => book._id !== currentBookId));
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    }

    // async function handleFinished(bookId) {
    //     try {
    //         const finishedBook = currentBooks.find(book => book._id === bookId);
    //         await currentBookAPI.updateCurrentBookStatus(bookId, 'finished');
    //         setFinishedBooks([...finishedBooks, finishedBook]);
    //         setCurrentBooks(currentBooks.filter(book => book._id !== bookId));
    //     } catch (error) {
    //         console.error('Error marking book as finished:', error);
    //     }
    // }



    useEffect(() => {
        getCurrentBook()
    }, [])

    const currentlyReadingBooksToShow = currentlyReadingBooks.filter(book => book.status === 'currently reading');
    return (
        <body className="body">
            
   
        <>
        <header className='currently-reading-header'><img src={NNcurrentlyreading} /></header>
            {/* <h1>Hi there, {user.name}</h1> */}
         <br />
         {/* <h2>Your Daily Streak: {user.dailyStreak}</h2> */}
         <br />
            {/* <h2>Your Current Books:</h2> */}
         
                     <ul className="currentBooks-container">
                {currentlyReadingBooksToShow.map((currentBook, idx) => (
                    <CurrentBookCard key={currentBook._id} currentBook={currentBook}
                        onDelete={handleDeleteBook} />
                    //add onFinished={handleFinished} 
                ))}
            
            <form className="currentlyReadingForm">
                <h3>Any others?</h3>

                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Title"
                        name="title"
                        value={newCurrentBook.title}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Author"
                        name="author"
                        value={newCurrentBook.author}
                        onChange={handleChange}
                    />
                    <div>
                        <button type="submit" onClick={handleNewCurrent} className='add-to-list-btn'>Add To List</button>
                    </div>
                </div>
            </form>
            </ul>
            
        </>
        </body>
    );

}



