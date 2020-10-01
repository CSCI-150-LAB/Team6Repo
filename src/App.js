import React from 'react';
import './App.css';
import Nav from './components/nav';
import Home from './components/home';
import HowItWorks from './components/howitworks';
import Signup from './components/signup';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path = "/home" from component = {Home} />
        <Route path = "/howitworks" from component = {HowItWorks} />
        <Route path = "/signup" from component = {Signup} />
      </div>
    </Router>
    
    
  );
}

export default App;
