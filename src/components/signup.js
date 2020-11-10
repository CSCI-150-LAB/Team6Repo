import React, { Component } from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Button from 'react-bootstrap/Button'

import '../App.css'

export default class SignUpUser  extends Component{
    
    constructor(props){
        super(props);
  
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username : '',
            password : '',
            password2: '',
            name     : '',
            email    : '',
            address  : '',
            errors   : {}
        }
    }
    
    componentWillReceiveProps(nextProps) {
      if (nextProps.errors) {
        this.setState({
          errors: nextProps.errors
        });
      }
    }

    onChange = e => {
      this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit(e){
        e.preventDefault();

        const newUser = {
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2,
            name:     this.state.name,
            email:    this.state.email,
            address:  this.state.address
        }

        console.log(newUser);

        //this.props.registerUser(user, this.props.history); 
        axios.post('http://localhost:5000/users/add',newUser)
            .then(res => console.log(res.data));
        this.setState({
            username: '',
            password: '',
            password2:'',
            name:   '',
            email: '',
            address: ''
        })
        //window.location = '/usernotcreated';
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
              <Input type = "name" placeholder = "Your Full Name" id = "name" value = {this.state.name} onChange = {this.onChange}/>
            </FormGroup>
            <FormGroup>
              <Label>Username </Label>
              <Input type = "username" placeholder = "Choose a username" id = "username" value = {this.state.username} onChange = {this.onChange} />
            </FormGroup>
            <FormGroup>
              <Label>Password </Label>
              <Input type = "password" placeholder = "Choose a password" id = "password" value = {this.state.password} onChange = {this.onChange}/>
            </FormGroup>
            <FormGroup>
              <Label>Password2 </Label>
              <Input type = "password" placeholder = "Choose a password" id = "password2" value = {this.state.password2} onChange = {this.onChange}/>
            </FormGroup>
            <FormGroup>
              <Label>Email </Label>
              <Input type = "email" placeholder = "Your email" id = "email" value = {this.state.email} onChange = {this.onChange}/>
            </FormGroup>
            <FormGroup>
              <Label>Address </Label>
              <Input type = "address" placeholder = "Your address" id = "address" value = {this.state.address} onChange = {this.onChange}/>
            </FormGroup>
            <Button className="btn-block" variant="outline-success" type = "submit"> {'Sign Up'} </Button> 
            <div className = "text-center">
              or Signup using your social account
            </div>
          </Form>
        )
      }
}