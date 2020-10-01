import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Food from "../images/img1.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";


function HowitWorks(){
    return(
    <div id="howitworks">
      <div className="howitworks">
        <h1 className="pt-3 text-center font-details pb-3">How it works</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="food justify-content-end" alt="Food" src={Food} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
               <b>Step 1: Register with us!</b>
                <br />Create an account with us by signing up using your email ID or social media accounts.
                <br />
                <Col className="d-flex justify-content-center flex-wrap">             
                  <div>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        Register here
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
               <b>Step 1: Register with us!</b>
                <br />Create an account with us by signing up using your email ID or social media accounts.
                <br />
                <Col className="d-flex justify-content-center flex-wrap">             
                  <div>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        Register here
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="food justify-content-end" alt="Food" src={Food} thumbnail fluid />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};


export default HowitWorks;