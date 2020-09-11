import React from 'react';
import './App.css';
import ListAuctionsComponent from './components/auctions/ListAuctionsComponent';
import HeaderComponent from './components/header/HeaderComponent';

const HomePage = () => {
    return (
        <div className="App">
          <HeaderComponent />
          <div>
            <ListAuctionsComponent />
          </div>
        </div>
    
      );
};

export default HomePage;