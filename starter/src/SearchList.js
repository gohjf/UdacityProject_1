import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI.js";

const SearchList = ({Query}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [listBook, setListBook] = useState([]);

  const updateQuery = (searchQuery) => {
    setSearchQuery(searchQuery.trim());
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
            {listBook.map((bookList) => (
                <li>
                  <div className="book">
                    <div className="book-top">
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 193,
                          backgroundImage: `url(${bookList.imageLinks.smallThumbnail})`,
                        }}
                      ></div>
                      <div className="book-shelf-changer">
                        <select>
                          <option value="none" disabled>
                            Move to...
                          </option>
                          <option value="currentlyReading">
                            Currently Reading
                          </option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{bookList.title}</div>
                    <div className="book-authors">{bookList.authors}</div>
                  </div>
                </li>
              ))
            }
            </ol>
          </div>
        </div>
    );
}

export default SearchList;
