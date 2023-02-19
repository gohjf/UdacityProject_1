import Book from "./Book";
import PropTypes from "prop-types";

const Bookshelf = ({books, shelfTitle, shelf, updateBook}) => {

const bookShelf = books.filter((book) => book.shelf === shelf)

    return(
<       div className="bookshelf">
            <h2 className="bookshelf-title">{shelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                {bookShelf.map((book)=>{
                    return <Book key={book.id} 
                    book = {book} 
                    shelf = {shelf}
                    updateBook = {updateBook}/>
                    })}
                </ol>
            </div>
        </div>
    )
}

Bookshelf.propTypes = {
    books : PropTypes.array.isRequired,
    shelfTitle : PropTypes.object.isRequired,
}

export default Bookshelf;
