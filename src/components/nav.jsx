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
    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.state = {
      role: "", 
      errors: {},
      search: ""
    };
  }

static propTypes = { 
  auth: PropTypes.object.isRequired
}

onChangeSearch(e){
  this.setState({search: e.target.value});
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
         <Nav.Link href="http://localhost:3000/tstupload" hidden = {this.state.role === "buyer"}>Add a dish</Nav.Link>
        <Nav.Link href="http://localhost:3000/landingPage">Profile</Nav.Link>
        <Nav.Link href="http://localhost:3000/myfoodcart">Cart</Nav.Link>
        <Nav.Link href="http://localhost:3000/maindishes">Dishes</Nav.Link>
        <NavDropdown title="Help" id="collasible-nav-dropdown">
            <NavDropdown.Item href="http://localhost:3000/howitworks">How It Works</NavDropdown.Item>
            <NavDropdown.Item href="http://localhost:3000/contactus">Contacts us</NavDropdown.Item>
          </NavDropdown>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Find Dishes or Chefs"
            className="mr-sm-2"
            onChange = {this.onChangeSearch}
          />
          <Button href={this.state.search? "http://localhost:3000/testsearch/" + this.state.search: "http://localhost:3000/testsearch"} variant="outline-success">Search</Button>
          <Nav.Link href="testsearch"></Nav.Link>
        </Form>
      
        </Nav>
     </Fragment>
    )
    
    const guestLink = ( //guest roles 
      <Fragment>
         <Nav className="ml-auto">
          <Nav.Link href="http://localhost:3000/register">Register</Nav.Link>
          <Nav.Link href="http://localhost:3000/login">Login</Nav.Link>
          <Nav.Link href="http://localhost:3000/maindishes">Dishes</Nav.Link>
          <NavDropdown title="Help" id="collasible-nav-dropdown">
            <NavDropdown.Item href="http://localhost:3000/howitworks">How It Works</NavDropdown.Item>
            <NavDropdown.Item href="http://localhost:3000/contactus">Contacts us</NavDropdown.Item>
          </NavDropdown>
          <Form inline>
          <FormControl
            type="text"
            placeholder="Find Dishes or Chefs"
            className="mr-sm-2"
            onChange = {this.onChangeSearch}
            onKeyPress
          />
          <Button href={this.state.search? "http://localhost:3000/testsearch/" + this.state.search: "http://localhost:3000/testsearch"} variant="outline-success">Search</Button>
          <Nav.Link href="testsearch"></Nav.Link>
        </Form>

          </Nav>
      </Fragment>
    )


    
    return(
    <Navbar className="navcolor" expand="lg">
      <Navbar.Brand href= "http://localhost:3000/home">
      <img
        src={Logo}
        width="30%"
        
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


