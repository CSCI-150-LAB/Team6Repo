import React, { Component } from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Button from 'react-bootstrap/Button'

import '../App.css'

export default class SignUpUser  extends Component{
    
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
  
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username : '',
            password : '',
            name     : '',
            email    : '',
            address  : ''
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
    onChangeName(e){
      this.setState({
      name: e.target.value
      })
    }
    onChangeEmail(e){
      this.setState({
      email: e.target.value
      })
    }
    onChangeAddress(e){
      this.setState({
      address: e.target.value
      })
    }
    onSubmit(e){
        e.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password,
            name:     this.state.name,
            email:    this.state.email,
            address:  this.state.address
        }

        console.log(user);
        
        axios.post('http://localhost:5000/users/add',user)
            .then(res => console.log(res.data));
        this.setState({
            username: '',
            password: '',
            name:   '',
            email: '',
            address: ''
        })
        
        //window.location = '/usercreated';
    }

    render() {
        return (
            <Form onSubmit = {this.onSubmit} className="sign-up-form">
            <h1>
              <span className="font-weight-bold"> AuthenticChef</span> 
            </h1>
            <h2 className = "text-center"> Signup: User </h2>
            <FormGroup>
              <Label>Name </Label>
              <Input type = "name" placeholder = "Your Full Name" onChange = {this.onChangeName} />
            </FormGroup>
            <FormGroup>
              <Label>Username </Label>
              <Input type = "username" placeholder = "Choose a username" onChange = {this.onChangeUsername} />
            </FormGroup>
            <FormGroup>
              <Label>Password </Label>
              <Input type = "password" placeholder = "Choose a password" onChange = {this.onChangePassword} />
            </FormGroup>
            <FormGroup>
              <Label>Email </Label>
              <Input type = "email" placeholder = "Your email"  onChange = {this.onChangeEmail}/>
            </FormGroup>
            <FormGroup>
              <Label>Address </Label>
              <Input type = "address" placeholder = "Your address" onChange = {this.onChangeAddress} />
            </FormGroup>
            <Button className="btn-block" variant="outline-success" type = "submit"> {'Sign Up'} </Button> 
            <div className = "text-center">
              or Signup using your social account
            </div>
          </Form>
        )
      }
}