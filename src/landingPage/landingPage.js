import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../components/actions/authActions";
import "../App.css";
import { Form, FormGroup, Container, Row, Col } from "reactstrap";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import UserDP from "../imagesForMain/ronaldo.jpg"
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
              <h4 class="text-center">
              <b>Welcome, </b>
                {user.name.split(" ")[0]}{" "} to your 
    <b>{' '} {user.role}{' '}</b>
                 Profile
                <br />
                {user.email}
                
              </h4>
              <span>
              <img
                className="userdp"
                src= {UserDP} 
                alt="Ronaldo"
                />
              </span>
            </Col>
            <Col xs={1} md={1}>
            <Button
              className="btn-block"
              variant="outline-success"
              type="submit"
              onClick={this.onLogoutClick}
            >
              {"Logout"}{" "}
            </Button>
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
