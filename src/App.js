import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import Home from './routes/Home';
import Search from './routes/Search';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/search' component={Search} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
