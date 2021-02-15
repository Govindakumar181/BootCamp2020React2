import React from 'react';

import logo from './logo.svg';
import './App.css';

import Dinner from './dinner.js';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello Good Evening!!!</h2>
        <Dinner Dish="Biryani" SweetDish="Gajjar ja Halwa" />
        <hr/>
        <Dinner Dish="Karahi" SweetDish="Ice Cream" />
      </div>
    </div>
  );
}

export default App;
