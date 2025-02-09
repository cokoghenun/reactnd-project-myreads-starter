import './App.css';
import Home from './pages/Home';
import Search from './pages/Search';
import { getAll, update } from './BooksAPI';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  const [books, setBooks] = useState([]);

  const handleShelfChange = async ({ b, s }) => {
    setBooks(
      books.map((i) => {
        if (i.id === b.id) i.shelf = s;
        return i;
      })
    );
    await update(b, s);
  };

  useEffect(
    () => {
      (async () => {
        setBooks(await getAll());
      })();
    },
    [setBooks]
  );

  return (
    <div className='app'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home
              books={books}
              handleShelfChange={handleShelfChange}
            />
          </Route>
          <Route path='/search'>
            <Search
              books={books}
              handleShelfChange={handleShelfChange}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
