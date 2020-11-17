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
      <div className="row">
        <div className="col s12">
          <Row>
            <Col xs={10} md={10}>
              <h4 className="text-center">
                <b>Welcome, </b>
                {user.name.split(" ")[0]} to your
                <b> {user.role} </b>
                Profile
                <br />
                {user.email}
              </h4>
            </Col>
            <Col xs={1} md={1}>
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
          <Row>
            <Col>
              <Nav className="ml-auto">
                <Nav.Link href="profile">Profile</Nav.Link>
                <Nav.Link href="orders">Orders</Nav.Link>
              </Nav>
            </Col>
          </Row>
        </div>
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
