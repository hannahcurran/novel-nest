import React, { useState } from 'react';
import '../../pages/CurrentlyReadingPage/CurrentlyReadingPage.css';
import { Box, Stack, VStack, Container, CircularProgress, CircularProgressLabel, Flex, Button } from '@chakra-ui/react';

export default function CurrentBookCard({ currentBook, onDelete, onFinished }) {
    const [progress, setProgress] = useState(currentBook.progress || 0);

    const handleProgressClick = () => {
        if (progress < 100) {
            setProgress(prevProgress => prevProgress + 5);
        } else {
            onFinished(currentBook._id);
        }
    };

    // const handleProgressClick = async () => {
    //     let newProgress = progress;
    
    //     if (progress < 100) {
    //         newProgress += 5;
    //     } else {
    //         onFinished(currentBook._id);
    //         return; // If book is finished, no need to continue with progress update
    //     }
    
    //     // Update state with new progress value
    //     setProgress(newProgress);
    
    //     // Call the parent component's function to update progress in backend
    //     if (onUpdateProgress) {
    //         await onUpdateProgress(currentBook._id, newProgress, currentBook.status);
    //     }
    // };

    return (
        <div>
            <Container>
                {currentBook.status !== 'finished' ? (
                    <>
                        <Box className='currently-reading-display-card'>
                            <p className="book-title">Title:</p><p>{currentBook.title}</p>
                            <p className="book-author">Author: </p> <p>{currentBook.author}</p>
                            <br />
                            <p className="progress-tracker-title">Progress:</p>
                            <Flex direction="column" mt={4} mb={4}>
                                <CircularProgress
                                    value={progress}
                                    color="#f70776"
                                    onClick={handleProgressClick}
                                    size="80px"
                                    margin="auto"
                                    className="progress-tracker"
                                >
                                    <CircularProgressLabel className="progress-finished-alert">
                                        {progress === 100 ? 'Finished!' : `${progress}%`}
                                    </CircularProgressLabel>
                                </CircularProgress>
                                <Button className='current-book-submit-btn' onClick={() => onDelete(currentBook._id)} mt={4} alignSelf="flex-end" >Remove</Button >
                            </Flex>
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
