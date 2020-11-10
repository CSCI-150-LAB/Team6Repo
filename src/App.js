import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import jwt_decode from "jwt-decode";
import setAuthToken from "./components/ultilities/setAuthenicatedToken";
import { setCurrentUser, logoutUser } from "./components/actions/authActions";

import Nav from "./components/nav.js"; 
import CreateSeller from "./components/create-seller.component";

import HowitWorks from "./components/howitworks"; 
import Footer from "./components/Footer";
import Register from "./components/register/register"; 
import Login from "./components/login/login";
import privateRoute from "./privateRoutes/privateRoute";
import landingPage from "./landingPage/landingPage"

//future features
//import Join from "./components/Join";
//import Chat from "./components/Chat";

import Meals from './components/meals';
import Carousel from './components/carousel';

import { Provider } from "react-redux";
import store from "./components/store/store";


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {
  return (
    <Provider store={store}>
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
        
        
              <Route exact path="/landingPage" component={landingPage} />
            

        <Footer/>
 
    </Router>
    </Provider>
  );
}

export default App;