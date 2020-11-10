import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//import Navbar from "./components/navbar.component.js";
import Nav from "./components/nav.js"; 
//import ExercisesList from "./components/exercises-list.component";
//import CreateExercise from "./components/create-exercise.component";
//import EditExercises from "./components/edit-exercise.component";
import CreateSeller from "./components/create-seller.component";
import home from "./components/home"
import HowitWorks from "./components/howitworks"; 
import SignUpUser from "./components/signup"; 
import Footer from "./components/Footer";
//import imageUpload from "./components/image-upload.components"
import reviews from './components/foodreview.component';
import UserCreated from './components/usercreated'
import UserNotCreated from './components/usernotcreated'
import ImageUpload from './components/imageupload.component.js';
import Login from './components/login.components.js';
import meals from'./components/meals.jsx'
import ImageView from './components/viewimage.js';
function App() {
  //const [loginUsername,setLoginUsername] = useState("");
  return (
    <Router>
        <Nav />
        <br/>
        <Route path = "/home" exact component = {home} /> 
        <Route path = "/home" exact component = {meals} />
        <Route path = "/" exact component = {home} /> 
        <Route path = "/" exact component = {meals} />
        <Route path = "/review" component = {reviews} />
        <Route path = "/createSeller" component = {CreateSeller} />  
        <Route path = "/howitworks" exact component = {HowitWorks} />
        <Route path = "/signup" exact component = {SignUpUser} /> 
        <Route path = "/usercreated" exact component = {UserCreated} />
        <Route path = "/usernotcreated" exact component = {UserNotCreated} />
        <Route path = "/login" exact component = {Login} />
        <Route path = "/tstupload" exact component = {ImageUpload} />
        <Route path = "/tstview" exact component = {ImageView}/>
        <Footer  />
    </Router>
  );
}
/*  <Route path = "/signin" exact component = {SignIn} /> */
export default App;