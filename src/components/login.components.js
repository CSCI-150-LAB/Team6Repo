import React, { Component } from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Button from 'react-bootstrap/Button'

import '../App.css'

export default class Login  extends Component{
    
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
  
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username : '',
            password : ''
        }
    }
    
    onChangeUsername(e){
        this.setState({
        username: e.target.value
        })
    }
    onChangePassword(e){
      this.setState({
      password: e.target.value
      })
    }
    onSubmit(e){
        e.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password,
        }

        console.log(user);
    }

    render() {
        return (
            <Form onSubmit = {this.onSubmit} className="sign-up-form">
            <h1>
              <span className="font-weight-bold"> AuthenticChef</span> 
            </h1>
            <h2 className = "text-center"> Login </h2>
            <FormGroup>
              <Label>Username </Label>
              <Input type = "username" placeholder = "Enter username" onChange = {this.onChangeUsername} />
            </FormGroup>
            <FormGroup>
              <Label>Password </Label>
              <Input type = "password" placeholder = "Enter password" onChange = {this.onChangePassword}/>
            </FormGroup>
            <Button className="btn-block" variant="outline-success" type = "submit"> {'Login'} </Button> 
          </Form>
        )
      }
}