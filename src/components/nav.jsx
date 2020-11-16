import React, { Component, Fragment } from 'react';
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



class navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      role: "", 
      errors: {}
    };
  }

static propTypes = { 
  auth: PropTypes.object.isRequired
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
    const { isAuthenticated } = this.props.auth; 

    const userLink = ( // user roles
      <Fragment>
         <Nav className="ml-auto">
         <Nav.Link href="tstupload" hidden = {this.state.role === "buyer"}>Upload Image</Nav.Link>
        <Nav.Link href="landingPage">Profile</Nav.Link>
        <Nav.Link href="maindishes">Dishes</Nav.Link>
        <NavDropdown title="Help" id="collasible-nav-dropdown">
            <NavDropdown.Item href="howitworks">How It Works</NavDropdown.Item>
            <NavDropdown.Item href="contactus">Contacts us</NavDropdown.Item>
          </NavDropdown>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Find Dishes or Chefs"
            className="mr-sm-2"
          />
          <Button href="testsearch" variant="outline-success">Search</Button>
          <Nav.Link href="testsearch"></Nav.Link>
        </Form>
      
        </Nav>
     </Fragment>
    )
    
    const guestLink = ( //guest roles 
      <Fragment>
         <Nav className="ml-auto">
          <Nav.Link href="register">Register</Nav.Link>
          <Nav.Link href="login">Login</Nav.Link>
          <Nav.Link href="maindishes">Dishes</Nav.Link>
          <NavDropdown title="Help" id="collasible-nav-dropdown">
            <NavDropdown.Item href="howitworks">How It Works</NavDropdown.Item>
            <NavDropdown.Item href="contactus">Contacts us</NavDropdown.Item>
          </NavDropdown>
          <Form inline>
          <FormControl
            type="text"
            placeholder="Find Dishes or Chefs"
            className="mr-sm-2"
          />
          <Button href="testsearch" variant="outline-success">Search</Button>
          <Nav.Link href="testsearch"></Nav.Link>
        </Form>

          </Nav>
      </Fragment>
    )


    
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
    
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        </Nav>
        {isAuthenticated ? userLink : guestLink}
      </Navbar.Collapse>
    </Navbar>
    )
  };
}

navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors, 
  role: state.role
});
export default connect(mapStateToProps)(navbar);


