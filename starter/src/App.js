import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import BooksList from "./BookList.js";
import SearchList from "./SearchList";
import * as BooksAPI from "./BooksAPI.js";

function App() {
  
  const [books, setBooks] = useState([]);

  const getAllBooks  = async () => {
    const result = await BooksAPI.getAll();
    setBooks(result);
  }

  useEffect(() => {
    getAllBooks();
  }, []);

  const updateBook = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    getAllBooks();
  }
  
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <BooksList books={books}
            updateBook = {updateBook}
            />
          }
        />
        <Route
          path="/search"
          element={
            <SearchList books={books}
            updateBook = {updateBook}
            />
          }
        />
    </Routes>
    </div>
  );
}

export default App;
