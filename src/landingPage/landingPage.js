import React, { Component, useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../components/actions/authActions";
import "../App.css";
import defaultProfilePic from "../imagesForMain/profilepic.png"; 

class landingPage extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
    window.location = '/home';
  };
  
render() {
    const { user } = this.props.auth;
return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there, </b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                <span style={{ fontFamily: "monospace" }}></span>
              </p>
            </h4>
            <h4>
            <b>Your role is: </b> {user.role}
            <p className="flow-text grey-text text-darken-1">
                <span style={{ fontFamily: "monospace" }}></span>
              </p>
            </h4>
            <h4>
            <b>Address: </b> {user.address}
            <p className="flow-text grey-text text-darken-1">
                <span style={{ fontFamily: "monospace" }}></span>
              </p>
            </h4>
            <h4>
            <b>Phone Number: </b> {user.phone_number}
            <p className="flow-text grey-text text-darken-1">
                <span style={{ fontFamily: "monospace" }}></span>
              </p>
            </h4>
            <h4>
            <b>Email: </b> {user.email}
            <p className="flow-text grey-text text-darken-1">
                <span style={{ fontFamily: "monospace" }}></span>
              </p>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}   
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}
landingPage.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(landingPage);