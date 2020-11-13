import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

//import Image from "react-bootstrap/Image";
import Logo from "../imagesForMain/logov1.3.png";
import { render } from "@testing-library/react";


class navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      role: "", 
      errors: {}
    };
  }


componentDidMount() { 
  
  if (this.props.auth.isAuthenticated) {
    const { user } = this.props.auth; 
    this.setState({role: user.role}); 
  }
  else{
    this.setState({role:"guest"});
  }

}

  render() {
    return(
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
    <Nav.Link href="tstupload" hidden = {this.state.role == "buyer"}>Upload Image</Nav.Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="register" hidden = {this.state.role == "buyer" || this.state.role == "seller"}>Register</Nav.Link>
          <Nav.Link href="login" hidden = {this.state.role == "buyer" || this.state.role == "seller"}>Login</Nav.Link>
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
    )
  };
}

navbar.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors, 
  role: state.role
});
export default connect(
  mapStateToProps,
)(navbar);


