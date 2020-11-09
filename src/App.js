import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//import Navbar from "./components/navbar.component.js";
import Nav from "./components/nav.jsx"; 
//import ExercisesList from "./components/exercises-list.component";
//import CreateExercise from "./components/create-exercise.component";
//import EditExercises from "./components/edit-exercise.component";
import CreateSeller from "./components/create-seller.component";
import home from "./components/home"
import HowitWorks from "./components/howitworks"; 
import SignUpUser from "./components/signup"; 
import Meals from "./components/meals.jsx"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
        <Nav />
        <br/>
        <Route path = "/home" exact component = {home} /> 
        <Route path = "/home" from exact component = {Meals} />
        <Route path = "/" from exact component = {home} />
        <Route path = "/" from exact component = {Meals} />
        
        
        {/* <Route path ="/" exact component = {ExercisesList} />  NOT USED ANYMORE :)*/}
        <Route path = "/createSeller" component = {CreateSeller} />  
        <Route path = "/howitworks" exact component = {HowitWorks} />
        <Route path = "/signup" component = {SignUpUser} />
        
        <Footer />
    </Router>

  );
}

export default App;