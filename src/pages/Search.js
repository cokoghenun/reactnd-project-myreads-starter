import React, { useState } from 'react';
import { search, update } from '../BooksAPI';

import { Link } from 'react-router-dom';
import Book from '../components/Book';

const Search = () => {
  const [books, setBooks] = useState([]);
  const [searchTxt, setSearchTxt] = useState('');

  const handleShelfChange = async ({ b, s }) => {
    setBooks(
      books.map((i) => {
        if (i.id === b.id) i.shelf = s;
        return i;
      })
    );
    await update(b, s);
  };

  const handleSearchChange = async ({ target: { value } }) => {
    setSearchTxt(value);
    // console.log(value);
    if (value) {
      const res = await search(value);
      if (res?.length) {
        console.log(res);
        setBooks(res);
      } else {
        setBooks([]);
      }
    } else {
      setBooks([]);
    }
  };

  // useState(() => {
  //   console.log(searchTxt);
  // }, [searchTxt]);

  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link to='/'>
          <button className='close-search'>Close</button>
        </Link>
        <div className='search-books-input-wrapper'>
          {/*
          NOTES: The search from BooksAPI is limited to a particular set of search terms.
          You can find these search terms here:
          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
          you don't find a specific author or title. Every search is limited by search terms.
        */}
          <input
            type='text'
            placeholder='Search by title or author'
            value={searchTxt}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className='search-books-results'>
        <ol className='books-grid'>
          {books.map((b, i) => (
            <li key={'c' + i}>
              <Book {...b} handleShelfChange={handleShelfChange} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Search;
