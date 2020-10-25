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
<<<<<<< Updated upstream
import SignIn from "./components/signin";
=======
import Footer from "./components/Footer";
import imageUpload from "./components/image-upload.components"
import FileUpload from './components/image-upload.components';
>>>>>>> Stashed changes

function App() {
  //const [loginUsername,setLoginUsername] = useState("");
  return (
    <Router>
        <Nav />
        <br/>
        <Route path = "/home" exact component = {home} /> 
<<<<<<< Updated upstream
        <Route path = "/" exact component = {home} />
=======
        <Route path = "/home" exact component = {Footer} /> 
        {/* <Route path ="/" exact component = {ExercisesList} />  NOT USED ANYMORE :)*/}
        <Route path = "/imageUpload" exact component = {FileUpload} />
>>>>>>> Stashed changes
        <Route path = "/createSeller" component = {CreateSeller} />  
        <Route path = "/howitworks" exact component = {HowitWorks} />
        <Route path = "/usersignup" component = {SignUpUser} />
        <Route path = "/signin" component = {SignIn} />
    </Router>
  );
}
/*  <Route path = "/signin" exact component = {SignIn} /> */
export default App;