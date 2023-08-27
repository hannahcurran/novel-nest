import sendRequest from "./send-request";
const BASE_URL = '/api/read-book';

export async function addReadBook(newReadBook){
    const bookData = { ...newReadBook, status: 'read' }; // Set the status

    return sendRequest(`${BASE_URL}/addReadBook`, 'POST', bookData);
}

export async function getReadBook(){

    return sendRequest(`${BASE_URL}/getReadBook`)
}

export async function deleteReadBook(bookId) {
    return sendRequest(`${BASE_URL}/deleteReadBook/${bookId}`, 'DELETE');
}
