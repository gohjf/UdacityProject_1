//Book View
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const Books = ( {book, shelf, updateBook} ) => {

	const [currentShelf, setCurrentShelf] = useState(shelf);
	const [hasValueUpdated, setUpdatedValue] = useState(false);
    
	const changeBookShelf = (event) => {
		setCurrentShelf(event.target.value);
		setUpdatedValue(true);
	}

	useEffect(() => {
		if(hasValueUpdated){
			updateBook(book, currentShelf)
		}
	  }, [book, currentShelf]);


    return (

        <div className="book">
			<div className="book-top">
				<div
					className="book-cover"
					style={{
						width: 128,
						height: 188,
						backgroundImage: 
                        `url(${book.imageLinks ? book.imageLinks.smallThumbnail : ""})`,
					}}></div>
					<div className="book-shelf-changer">
					<select value={shelf} onChange={changeBookShelf}>
                          <option value="none" disabled> Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
					</div>
			</div>         
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors && book.authors.join(", ")}</div> 
        </div>
    );
};

Books.propTypes = {
    books: PropTypes.array.isRequired,
}

export default Books;
