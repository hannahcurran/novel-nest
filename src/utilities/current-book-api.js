import sendRequest from "./send-request";
const BASE_URL = '/api/current-book';

export async function addCurrentBook(newCurrentBook){

    return sendRequest(`${BASE_URL}/addCurrentBook`, 'POST', newCurrentBook);
}

export async function getCurrentBook(){

    return sendRequest(`${BASE_URL}/getCurrentBook`)
}