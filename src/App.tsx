import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Routes, Route, Link} from 'react-router-dom';

import './scss/main.scss';

import Page01 from './pages/Page01';
import Page02 from './pages/Page02';
import Page03 from './pages/Page03';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="/">main</Link></li>
        <li>
          <Link to="/page01">page01</Link>
          
        </li>
        <li><Link to="/page02">page02</Link></li>
        <li><Link to="/page03">page03</Link></li>
      </ul>
      <Routes>
        <Route path='/' element={ < Main /> } />
        <Route path='/page01' element={ < Page01 /> } />
        <Route path='/page02' element={ < Page02 /> } />
        <Route path='/page03' element={ < Page03 /> } />
      </Routes>
    </div>
  );
}

export default App;
