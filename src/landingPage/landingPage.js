import React, { Component, useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../components/actions/authActions";
import "../App.css";
import Button from "react-bootstrap/Button";
import { Row, Col } from "reactstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
//import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

class landingPage extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
    window.location = "/home";
  };
  render() {
    const { user } = this.props.auth;
    return (
      <div className="footerfix">
          <Row>
            <Col xs={6} md={6}>
              <h4 className="text-center">
                <b>Welcome, </b>
                {user.name.split(" ")[0]}. You are now logged in.
                <br />
                {user.email}
              </h4>
            </Col>
            <Col xs={2} md={2}>
            <Nav className="ml-auto">
                <Nav.Link className="already" href="profile">View {user.role} Profile</Nav.Link>
              </Nav>
            </Col>
            <Col xs={1} md={1} margin-right="50px">
              <Button
                className="btn-block text-center"
                variant="outline-success"
                type="submit"
                onClick={this.onLogoutClick}
              >
                {"Logout"}{" "}
              </Button>
            </Col>
            
            
          </Row>
      </div>
    );
  }
}
landingPage.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({ auth: state.auth });
export default connect(mapStateToProps, { logoutUser })(landingPage);
