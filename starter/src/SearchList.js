import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI.js";
import Books from "./Book.js";

const SearchList = ({updateBook}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [listBook, setListBook] = useState([]);

  const updateQuery = (searchQuery) => {
    setSearchQuery(searchQuery);
  };

  const getSearchResult  = async (searchQuery) => {
    const result = await BooksAPI.search(searchQuery, 5);

    if (result){
      if (result.error){
          setListBook([]);
      }
      else{
        setListBook(result); 
      } 
    }
  }
  
  useEffect(() => {
    if (searchQuery.length > 0){
      getSearchResult(searchQuery);
    }
    else{
      setListBook([]);
    }
  }, [searchQuery]);

    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search">
            Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={searchQuery}
                onChange={(event) => updateQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
            {listBook.map((book)=>{
                    return <Books 
                    key={book.id} 
                    book = {book} 
                    shelf = {book.shelf}
                    updateBook = {updateBook}/>
                    })}
            </ol>
          </div>
        </div>
    );
}

export default SearchList;
