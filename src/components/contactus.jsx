import React from "react";

import { Form, FormGroup, Label, Input } from "reactstrap";

import Button from "react-bootstrap/Button";

function ContactUs() {
  return (
    <Form className="sign-up-form">
      <h2 className="text-center"> Contact us</h2>
      <FormGroup>
        <Label>Name </Label>
        <Input type="name" placeholder="Your Full Name" />
      </FormGroup>
      <FormGroup>
        <Label>Email </Label>
        <Input type="email" placeholder="Your email" />
      </FormGroup>
      <FormGroup>
        <Label>Mobile Number </Label>
        <Input type="phone" placeholder="Your mobile number" />
      </FormGroup>
      <FormGroup>
        <Label>Subject</Label>
        <Input as="textarea" rows={3} />
      </FormGroup>
      <FormGroup>
        <Label for="message">Your message</Label>
        <Input type="textarea" name="text" id="message" />
      </FormGroup>
      <Button className="btn-block" variant="outline-success">
        {"Submit"}
      </Button>
    </Form>
  );
}
export default ContactUs;