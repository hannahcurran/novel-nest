import sendRequest from "./send-request";
const BASE_URL = '/api/want-book';



export async function addWantBook(newWantBook){
    const bookData = { ...newWantBook, status: 'want to read' }; // Set the status

    return sendRequest(`${BASE_URL}/addWantBook`, 'POST', bookData);
}

export async function getWantBook(){

    return sendRequest(`${BASE_URL}/getWantBook`)
}

export async function deleteWantBook(bookId) {
    return sendRequest(`${BASE_URL}/deleteWantBook/${bookId}`, 'DELETE');
}

