import React from 'react';
import './App.css';

import { Form, FormGroup, Label, Input }
  from 'reactstrap';

import Button from 'react-bootstrap/Button'

function App() {
  return (
    <Form className="sign-up-form">
      <h1>
        <span className="font-weight-bold"> AuthenticChef</span> 
      </h1>
      <h2 className = "text-center"> Signup: User </h2>
      <FormGroup>
        <Label>Name </Label>
        <Input type = "name" placeholder = "Your Full Name" />
      </FormGroup>
      <FormGroup>
        <Label>Username </Label>
        <Input type = "username" placeholder = "Choose a username" />
      </FormGroup>
      <FormGroup>
        <Label>Password </Label>
        <Input type = "password" placeholder = "Choose a password" />
      </FormGroup>
      <FormGroup>
        <Label>Email </Label>
        <Input type = "email" placeholder = "Your email" />
      </FormGroup>
      <Button className="btn-block" variant="outline-success"> {'Sign Up'} </Button> 
      <div className = "text-center">
        or Signup using your social account
      </div>

    </Form>
  );
}

export default App;
