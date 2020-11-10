import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "./components/nav.js"; 
import CreateSeller from "./components/create-seller.component";

import HowitWorks from "./components/howitworks"; 
import Profile from "./components/profile";
import Footer from "./components/Footer";
import Register from "./components/register/register"; 
import Login from "./components/login/login";

//future features
//import Join from "./components/Join";
//import Chat from "./components/Chat";

import Meals from './components/meals';
import Carousel from './components/carousel';


function App() {
  return (
    
    <Router>
        <Nav />
        <br/>
        <Route path = "/home" exact component = {Carousel} /> 
        <Route path = "/home" exact component = {Meals} />
        <Route path = "/" exact component = {Carousel} /> 
        <Route path = "/" exact component = {Meals} />
        

        <Route path = "/createSeller" component = {CreateSeller} />  
        <Route path = "/howitworks" exact component = {HowitWorks} />
        
        <Route exact path="/register" component={Register} />

        <Route exact path="/login" component={Login} />
        <Route path = "/profile" exact component = {Profile} />
        <Footer/>
 
    </Router>
   
  );
}

export default App;