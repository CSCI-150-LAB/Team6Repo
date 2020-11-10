import React, { Component } from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Button from 'react-bootstrap/Button'

import '../App.css'

export default class signUpUser  extends Component{
    
    constructor(props){ // creates empty user so that we can change it 
        super(props);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeRole = this.onChangeRole.bind(this);
  
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            password : '',
            name     : '',
            email    : '',
            role     : ''
        }
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
    onChangeRole(e){
      this.setState({
        role: e.target.value
      })
    }
    onSubmit(e){
        e.preventDefault();

        const user = {
            name: this.state.name,
            password: this.state.password,
            email:    this.state.email,
        }

        console.log(user);
        if(this.state.role === "buyer"){
          axios.post('http://localhost:5000/users/add',user)
              .then(res =>{
                console.log(res.data)
                if(res.data === "User added!"){
                  window.location = '/usercreated';
                }
                else{
                  window.location = '/usernotcreated';
                }
              
              });
        }
        else if(this.state.role === "seller"){
          axios.post('http://localhost:5000/seller/add',user)
          .then(res => console.log(res.data)).then();
        }
        
        //window.location = '/usercreated';
    }

    render() {
        return (
          <div>
            <Form onSubmit = {this.onSubmit} className="sign-up-form">
            <h1>
              <span className="font-weight-bold"> AuthenticChef</span> 
            </h1>
            <h2 className = "text-center"> Signup: User </h2>
            <FormGroup>
              <Label>Name </Label>
              <Input type = "name" placeholder = "Your Full Name" onChange = {this.onChangeName}/>
            </FormGroup>
            <FormGroup>
              <Label>Password </Label>
              <Input type = "password" placeholder = "Choose a password" onChange = {this.onChangePassword}/>
            </FormGroup>
            <FormGroup>
              <Label>Email </Label>
              <Input type = "email" placeholder = "Your email" onChange = {this.onChangeEmail}/>
            </FormGroup>
            <Button className="btn-block" variant="outline-success" type = "submit"> {'Sign Up'} </Button> 
            <div class="form-group">
						<label for="role">Role</label>
						<select name="role" id="role" onChange= {this.onChangeRole} >
							<option value="buyer" >buyer</option>
							<option value="seller" >seller</option>
						</select>
					</div>
            <div className = "text-center">
              or Signup using your social account
            </div>
          </Form>
            
          </div>
          
        )
      }
}