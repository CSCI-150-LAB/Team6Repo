import React, { Component } from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Button from 'react-bootstrap/Button'

import '../App.css'

export default class Login  extends Component{
    
    constructor(props){
        super(props);
  
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
          email: "",
          password: "",
          errors: {}
        };
    }
    
    onChange = e => {
      this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit(e){
        e.preventDefault();

        const user = {
            email: this.state.email,
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
              <Label>Email </Label>
              <Input type = "email" placeholder = "Enter email" id = "email" value = {this.state.email} onChange = {this.onChange} />
            </FormGroup>
            <FormGroup>
              <Label>Password </Label>
              <Input type = "password" placeholder = "Enter password" id = "password" value = {this.state.password} onChange = {this.onChange}/>
            </FormGroup>
            <Button className="btn-block" variant="outline-success" type = "submit"> {'Login'} </Button> 
          </Form>
        )
      }
}