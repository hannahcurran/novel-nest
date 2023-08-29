import React from "react";
// import { chakra, ChakraBaseProvider } from "@chakra-ui/react";
import { Box, Stack, VStack, Editable, EditableInput, EditableTextarea, EditablePreview, ButtonGroup, IconButton, useEditableControls } from '@chakra-ui/react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/accordion';


export default function ReadBookCard({ readBook, onDelete, onEdit, onToggleFavorite, handleSaveEdit }) {
        return (
        <div className="read-book-card">
            <p>Title: {readBook.title}</p>
            <p>Author: {readBook.author}</p>
            <Accordion allowMultiple>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                <p>Review</p>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Editable defaultValue={readBook.review}>
                        <button onClick={() => handleSaveEdit(readBook.review)}>
                                Save
                            </button>
                            <EditablePreview />
                            <EditableTextarea />
                        </Editable>
                        <button onClick={() => onEdit(readBook)}>Edit Review</button>
                        {/* <button onClick={() => handleSaveEdit(editingReview._id, editingReview.review)}>
                                Save
                            </button> */}
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>

            <div className="favorite-icon" onClick={onToggleFavorite}>
                <button onClick={onToggleFavorite}>
                    {readBook.isFavorite ? <span>❤️</span> : <span>🤍</span>}
                </button>
            </div>
            <div>
                <button onClick={() => onDelete(readBook._id)}>Delete</button>
            </div>
        </div>
    )
}










