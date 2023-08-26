import sendRequest from "./send-request";
const BASE_URL = '/api/want-book';



export async function addWantBook(newWantBook){

    return sendRequest(`${BASE_URL}/addWantBook`, 'POST', newWantBook);
}

export async function getWantBook(){

    return sendRequest(`${BASE_URL}/getWantBook`)
}

export async function deleteWantBook(bookId) {
    return sendRequest(`${BASE_URL}/deleteWantBook/${bookId}`, 'DELETE');
}

