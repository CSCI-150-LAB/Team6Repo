import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
//import authservice from "../services/auth-service";


class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
onChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  };




onSubmit(e) {
    e.preventDefault();
const userData = {
      email: this.state.email,
      password: this.state.password
    };
console.log(userData);

axios.post('http://localhost:5000/routes/users/login', userData)
    .then(res =>{ 
      /*
      console.log(res.data)
        if (res.data.success){
          window.location = '/home';
        }
        */
        return JSON.parse(localStorage.getItem('user'));;
      }
    ).catch(err =>{
      alert('wrong email and password combination. Do it again xd');
    })
  };






render() {
    const { errors } = this.state;
return (
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            <Link to="/home" className="btn-flat waves-effect">
              <i className="material-icons left"></i> Back to
              home page 
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Login</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;