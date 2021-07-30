import React from 'react';
import { Link } from 'react-router-dom';
import Book from '../components/Book';

const Home = ({ books, handleShelfChange }) => {
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
                  .map((b, i) => (
                    <li key={'c' + i}>
                      <Book {...b} handleShelfChange={handleShelfChange} />
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
                  .map((b, i) => (
                    <li key={'w' + i}>
                      <Book {...b} handleShelfChange={handleShelfChange} />
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
                  .map((b, i) => (
                    <li key={'r' + i}>
                      <Book {...b} handleShelfChange={handleShelfChange} />
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

export default Home;
