import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../components/actions/authActions";
import "../App.css";
import Button from "react-bootstrap/Button";
import { Row, Col } from "reactstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
//import defaultProfilePic from "../imagesForMain/profilepic.png";
import UserDP from "../imagesForMain/profilepic.png";
// import { Table, Badge } from "reactstrap";

class landingPage extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
    window.location = "/home";
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div style={{ height: "75vh" }} className="container form-fix">
        <Row>
          <Col>
            <span>
              <img className="userdp" src={UserDP} alt="Ronaldo" />
            </span>
          </Col>

          <Col xs={6} md={6}>
            <h4 className="text-center">
              <b>Welcome, </b> {user.name.split(" ")[0]}. You are now logged in.
            </h4>
          </Col>
          <Col xs={2} md={2}>
            <Nav className="ml-auto">
              <Nav.Link className="already" href="profile">
                View {user.role} Profile
              </Nav.Link>
            </Nav>
          </Col>
          <Col xs={1} md={1} margin-right="50px">
            <Button
              className="btn-lg text-center"
              variant="outline-success"
              type="submit"
              onClick={this.onLogoutClick}
            >
              {"Logout "}{" "}
            </Button>
          </Col>
        </Row>
        <Row className="align-items-start p-2 my-details rounded">
          <Col>
          <h3 className = "font-details">
          <b>Role: </b> {user.role}
        </h3>
        <h3>
          <b>Address: </b> {user.address}
        </h3>
        <h3>
          <b>Phone Number: </b> {user.phone_number}
        </h3>
        <h3>
          <b>Email: </b> {user.email}
        </h3>
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
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(landingPage);
