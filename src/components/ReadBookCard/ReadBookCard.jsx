// import React from "react";
// // import { chakra, ChakraBaseProvider } from "@chakra-ui/react";
// import { Box, Stack, VStack, Editable, EditableInput, EditableTextarea, EditablePreview, ButtonGroup, IconButton, useEditableControls } from '@chakra-ui/react';
// import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/accordion';


// export default function ReadBookCard({ readBook, onDelete, onEdit, onToggleFavorite, handleSaveEdit }) {
//         return (
//         <div className="read-book-card">
//             <p>Title: {readBook.title}</p>
//             <p>Author: {readBook.author}</p>
//             <Accordion allowMultiple>
//                 <AccordionItem>
//                     <h2>
//                         <AccordionButton>
//                             <Box as="span" flex='1' textAlign='left'>
//                                 <p>Review</p>
//                             </Box>
//                             <AccordionIcon />
//                         </AccordionButton>
//                     </h2>
//                     <AccordionPanel pb={4}>
//                         <Editable defaultValue={readBook.review}>


//                             <EditablePreview />
//                             <EditableTextarea />

//                         </Editable>
//                         <br />
//                         <button onClick={() => onEdit(readBook)}>Edit</button>
//                         <br /> <br />
//                         <button onClick={() => handleSaveEdit(readBook.review)}>Save</button>

//                     </AccordionPanel>
//                 </AccordionItem>
//             </Accordion>

//             <div className="favorite-icon" onClick={onToggleFavorite}>
//                 <button onClick={onToggleFavorite}>
//                     {readBook.isFavorite ? <span>❤️</span> : <span>🤍</span>}
//                 </button>
//             </div>
//             <div>
//                 <button onClick={() => onDelete(readBook._id)}>Delete</button>
//             </div>
//         </div>
//     )
// }




import React, { useState } from "react";
// import { chakra, ChakraBaseProvider } from "@chakra-ui/react";
import { Box, Stack, VStack, Editable, EditableInput, EditableTextarea, EditablePreview, ButtonGroup, IconButton, useEditableControls } from '@chakra-ui/react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/accordion';


export default function ReadBookCard({ readBook, onDelete, onEdit, onToggleFavorite, handleSaveEdit }) {
    const [editedReview, setEditedReview] = useState(readBook.review)
    return (
        <div className="read-book-card">
            <p className="book-title">Title:</p> <p>{readBook.title}</p>
            <br />
            <p className="book-author">Author:</p> <p> {readBook.author}</p>


            <Accordion allowMultiple>
    <Box w="100%" maxWidth="315px">
        <AccordionItem >
            <h2>
                <AccordionButton w="100%">
                    <Box as="span" flex='4' textAlign='left'>
                        <p className="review-title">Your Review...</p>
                    </Box>
                    <AccordionIcon color={"gray"} />
                </AccordionButton>
            </h2>

            <AccordionPanel w="100%" >
                <Editable value={editedReview} onChange={(value) => setEditedReview(value)} w="100%" >
                    <EditablePreview w="100%" h="100%" />
                    <EditableTextarea minH="500px" w="100%" resize="vertical" />
                </Editable>
                <br />
                <button onClick={() => handleSaveEdit(readBook._id, editedReview)} className="readbook-submit-btn">&nbsp;&nbsp;&nbsp;Save&nbsp;&nbsp;&nbsp;</button>
            </AccordionPanel>
        </AccordionItem>
    </Box>
</Accordion>

<div className="favorite-icon" onClick={onToggleFavorite}>
    <button onClick={onToggleFavorite}>
        {readBook.isFavorite ? <span className="favorite-text" >🖤 &nbsp; it's a favourite! </span> : <span>♡ favourite?</span>}
    </button>
</div>

<div>
    <br />
    <button onClick={() => onDelete(readBook._id)} className="readbook-submit-btn">Delete This Book & Review</button>
</div>
</div>
)
}