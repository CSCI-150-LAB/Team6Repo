import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import jwt_decode from "jwt-decode";
import setAuthToken from "./components/ultilities/setAuthenicatedToken";
import { setCurrentUser, logoutUser } from "./components/actions/authActions";

import Nav from "./components/nav.jsx"; 
import CreateSeller from "./components/create-seller.component";

import HowitWorks from "./components/howitworks"; 
import Footer from "./components/Footer";
import Register from "./components/register/register"; 
import Login from "./components/login/login";
import PrivateRoute from "./privateRoutes/privateRoute";
import landingPage from "./landingPage/landingPage"
import contactus from "./components/contactus"; 
import MainDishes from "./components/maindishes"; 


//future features
//import Join from "./components/Join";
//import Chat from "./components/Chat";

import Meals from './components/meals';
import Carousel from './components/carousel';

import { Provider } from "react-redux";
import store from "./components/store/store";


/*

Before we start our application, we want to check that the user is logged in. What we have to do is: 
1. check if there exists a token
2. set the authentication token IF there exists a token
3. Decode the JWT so that we can obtain the payload (ID and Name)
4. Set the current user based off that decoded token
5. Set an expiriation time for that token.  

*/

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decodedToken = jwt_decode(token);
  store.dispatch(setCurrentUser(decodedToken));
  const exoirationTime = Date.now() / 1000; 
  
  if (decodedToken.exp < exoirationTime) {
    store.dispatch(logoutUser());         // Logout user and redirect them to the login screen. 
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
        <Route path = "/contactus" exact component = {contactus} />
        <Route path = "/maindishes" exact component = {MainDishes} />

        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/landingPage" component={landingPage} />
        

        <Footer/>
 
    </Router>
    </Provider>
  );
}

export default App;