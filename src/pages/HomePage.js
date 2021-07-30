import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAll } from '../BooksAPI';
import Book from '../components/Book';

const HomePage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getAll();
      console.log(res);
      setBooks(res);
    })();
  }, []);
  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        <div>
          <div className='bookshelf'>
            <h2 className='bookshelf-title'>Currently Reading</h2>
            <div className='bookshelf-books'>
              <ol className='books-grid'>
                {books
                  .filter((b) => b.shelf === 'currentlyReading')
                  .map((b) => (
                    <li>
                      <Book {...b} />
                    </li>
                  ))}
              </ol>
            </div>
          </div>
          <div className='bookshelf'>
            <h2 className='bookshelf-title'>Want to Read</h2>
            <div className='bookshelf-books'>
              <ol className='books-grid'>
                {books
                  .filter((b) => b.shelf === 'wantToRead')
                  .map((b) => (
                    <li>
                      <Book {...b} />
                    </li>
                  ))}
              </ol>
            </div>
          </div>
          <div className='bookshelf'>
            <h2 className='bookshelf-title'>Read</h2>
            <div className='bookshelf-books'>
              <ol className='books-grid'>
                {books
                  .filter((b) => b.shelf === 'read')
                  .map((b) => (
                    <li>
                      <Book {...b} />
                    </li>
                  ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className='open-search'>
        <Link to='/search'>
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
