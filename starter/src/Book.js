//Book View
import PropTypes from "prop-types";

const Books = (books) => {

    return (
        <div>
            {console.log(books.book)};
        </div>
        // <div className="book">
        //     <div className="book-top"
        //         <div
        //             className="book-cover"
        //             style={{
        //                 width: 128,
        //                 height: 193,
        //                 backgroundImage:
        //                 `url(${books.imageLinks.smallThumbnail})`,
        //             }}
        //         ></div>
        //         <div className="book-shelf-changer">
        //         </div>
        //     </div>
        //     <div className="book-title">{books.title}</div>
        //     <div className="book-authors">{books.authors}</div>
        // </div>
    )
}

Books.propTypes = {
    books: PropTypes.array.isRequired,
}

export default Books;
