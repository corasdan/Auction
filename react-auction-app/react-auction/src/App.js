import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListAuctionsComponent from './components/auctions/ListAuctionsComponent';
import HeaderComponent from './components/header/HeaderComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className="App">
        <ListAuctionsComponent />
      </div>
    </div>

  );
}

export default App;
