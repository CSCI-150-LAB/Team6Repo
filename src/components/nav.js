import React from 'react';
import '.././App.css';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';



function navbar(){
    return(
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="home">AuthenticChef</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="usersignup">Sign up</Nav.Link>
            <Nav.Link href="howitworks">How It Works</Nav.Link>
            <Nav.Link href="signin">Sign in</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

    );
}
export default navbar;