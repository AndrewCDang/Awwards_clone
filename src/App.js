import logo from './logo.svg';
import Nav from './nav.js';
import Header from './header';
import Misc from './misc';
import './App.css';
import React, { useState } from 'react';


function App() {
  const [featured, featuredState] = useState([
    { imgUrl: "site-day.jpeg"},
    { imgUrl: "featured-2.jpeg"},
    { imgUrl: "featured-3.jpeg"},
    { imgUrl: "featured-4.jpeg"},
  ]);

  return (
    <div className="app">
      <Nav featured={featured} />
      <Header/>
      <Misc/>
      <div className='background'></div>
    </div>
  );
}

export default App;
