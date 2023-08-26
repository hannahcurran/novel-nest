// export default function CurrentBookCard({currentBook}){
//     return(
//         <div>
//             {currentBook.title} {currentBook.author}
//         </div>
       
//     )
    
// }


export default function CurrentBookCard({ currentBook }) {
    return (
        <div className="current-book-card">
            <p>Title: {currentBook.title}</p>
            <p>Author: {currentBook.author}</p>
            {/* <button>Finished!</button> */}
            <button type="button" class="btn btn-secondary btn-sm">Finished!</button>
        </div>
    );
}