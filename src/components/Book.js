import React from 'react';
import ShelfChanger from './ShelfChanger';

const Book = ({
  title = '',
  id = '',
  authors = [],
  imageLinks = {},
  shelf = 'none',
  handleShelfChange = () => {},
}) => {
  return (
    <div className='book'>
      <div className='book-top'>
        <div
          className='book-cover'
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${imageLinks.smallThumbnail}")`,
          }}
        />

        <ShelfChanger
          shelf={shelf}
          handleShelfChange={(s) => handleShelfChange({ s, b: { id } })}
        />
      </div>
      <div className='book-title'>{title}</div>
      <div className='book-authors'>{authors.join(', ')}</div>
    </div>
  );
};
export default Book;
