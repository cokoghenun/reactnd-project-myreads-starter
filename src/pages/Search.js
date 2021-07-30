import { search } from '../BooksAPI';
import Book from '../components/Book';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Search = ({ books, handleShelfChange }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTxt, setSearchTxt] = useState('');

  useEffect(() => {
    const throttle = setTimeout(async () => {
      setSearchResults([]);
      if (searchTxt) {
        const res = await search(searchTxt);
        if (res?.length) {
          setSearchResults(
            res.map((r) => {
              r.shelf = books.find((b) => b.id === r.id)?.shelf;
              return r;
            })
          );
        }
      }
    }, 1000);

    return () => clearTimeout(throttle);
  }, [books, searchTxt]);

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
            onChange={({ target }) => setSearchTxt(target.value)}
          />
        </div>
      </div>
      <div className='search-books-results'>
        <ol className='books-grid'>
          {searchResults.map((b, i) => (
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
