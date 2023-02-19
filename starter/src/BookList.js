import { Link } from "react-router-dom";
import Bookshelf from "./BookShelf";
import PropTypes from "prop-types";

//This method will take in Books as Props
const BooksList = ({books, updateBook}) => {

return (
<div className="list-books">
            <Bookshelf 
              books={books} 
              shelfTitle="Currently Reading"
              shelf="currentlyReading"
              updateBook = {updateBook}>
            </Bookshelf>
            <Bookshelf 
              books={books} 
              shelfTitle="Want To Read"
              shelf="wantToRead"
              updateBook = {updateBook}>
            </Bookshelf>
            <Bookshelf 
              books={books} 
              shelfTitle="Read"
              shelf="read"
              updateBook = {updateBook}>
            </Bookshelf>
          <div className="open-search">
            <Link to="/search" className="search-books">
            Search
          </Link>
          </div>
        </div>

);
}

BooksList.propTypes = {
  books : PropTypes.array.isRequired,
};

export default BooksList;
