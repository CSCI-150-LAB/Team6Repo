import React from "react";
import ".././App.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

//import Image from "react-bootstrap/Image";
import Logo from "../images/logo.png";

function navbar() {
  return (
    <Navbar className="navcolor" expand="lg">
      <Navbar.Brand href="home">
      <img
        src={Logo}
        width="100"
        height="100"
        className="d-inline-block align-top"
        alt="AuthenticChef"
      />
    </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="signup">Register or Log in</Nav.Link>
          <Nav.Link href="howitworks">How It Works</Nav.Link>
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
