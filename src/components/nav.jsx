import React from "react";
import ".././App.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

//import Image from "react-bootstrap/Image";
import Logo from "../imagesForMain/logov1.3.png";

function navbar() {
  return (
    <Navbar className="navcolor" expand="lg">
      <Navbar.Brand href="home">
      <img
        src={Logo}
        width="25%px"
        height="5%"
        margin="0 100px"
        className="d-inline-block align-top"
        alt="AuthenticChef"
      />
    </Navbar.Brand>
     <Nav.Link href="tstupload">Upload Image</Nav.Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="register">Register</Nav.Link>
          <Nav.Link href="login">Login</Nav.Link>
          <Nav.Link href="maindishes">Dishes</Nav.Link>
          <Nav.Link href="landingPage">Profile</Nav.Link>
          <NavDropdown title="Help" id="collasible-nav-dropdown">
            <NavDropdown.Item href="howitworks">How It Works</NavDropdown.Item>
            <NavDropdown.Item href="contactus">Contacts us</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Find Dishes or Chefs"
            className="mr-sm-2"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default navbar;
