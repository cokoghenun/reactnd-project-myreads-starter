import React, { useState } from 'react';

const ShelfChanger = ({ shelf = '', handleShelfChange = () => {} }) => {
  const [value, setValue] = useState(shelf);

  const handleChange = ({ target }) => {
    setValue(target.value);
    handleShelfChange(target.value);
  };

  return (
    <div className='book-shelf-changer'>
      <select defaultValue={value} onChange={handleChange}>
        <option value='move' disabled>
          Move to...
        </option>
        <option value='currentlyReading'>Currently Reading</option>
        <option value='wantToRead'>Want to Read</option>
        <option value='read'>Read</option>
        <option value='none'>None</option>
      </select>
    </div>
  );
};

export default ShelfChanger;
