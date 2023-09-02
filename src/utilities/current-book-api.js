import sendRequest from "./send-request";
const BASE_URL = '/api/current-book';

export async function addCurrentBook(newCurrentBook){
    const bookData = { ...newCurrentBook, status: 'currently reading' }; // Set the status

    return sendRequest(`${BASE_URL}/addCurrentBook`, 'POST', bookData);
}

export async function getCurrentBook(){

    return sendRequest(`${BASE_URL}/getCurrentBook`)
}

export async function deleteCurrentBook(bookId) {
    return sendRequest(`${BASE_URL}/deleteCurrentBook/${bookId}`, 'DELETE');
}

export async function updateBookProgress(bookId, progressData) {
    return sendRequest(`${BASE_URL}/updateBookProgress/${bookId}`, 'PUT', progressData);
}
