import React from 'react';
import LoginContainer from './components/login/LoginContainer';
import CurrencyRateContainer from './components/currencyRate/CurrencyRateContainer.js';
import './App.css';
import  { Route } from 'react-router-dom';
import CredentialsContainer from './components/credentials/CredentialsContainer';

const App =() => {
  return (
    <div className="App">
      <header className="App-header">
        <div><CredentialsContainer/></div>
        <Route exact path='/' render = { () => <LoginContainer />}/>  
        <Route path='/currencyRate' render = { () => <CurrencyRateContainer />}/>
      </header>
    </div>
  );
}

export default App;