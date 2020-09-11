import React from 'react';
import './App.css';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import ListAuctionsComponent from './components/auctions/ListAuctionsComponent';
import HeaderComponent from './components/header/HeaderComponent';
import HomePage from './HomePage';
import CarAd from './components/carAd/CarAd';
import ResultView from './components/resultView/ResultView';


function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/form" component={CarAd} exact />
          <Route path="/search" component={ResultView} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
