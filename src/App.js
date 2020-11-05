import React from 'react';
import './App.css';
import Nav from './components/nav';
import Carousel from './components/carousel';
import Meals from './components/meals';
import HowItWorks from './components/howitworks';
import Signup from './components/signup';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function AuthenticChef() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path = "/home" from component = {Carousel} />
        <Route path = "/home" from component = {Meals} />
        <Route path = "/howitworks" from component = {HowItWorks} />
        <Route path = "/signup" from component = {Signup} />
        <Footer />
      </div>
    </Router>
    
    
  );
}

export default AuthenticChef;
