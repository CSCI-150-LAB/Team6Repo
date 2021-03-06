import axios from 'axios';
import React, {Component } from "react";
import ".././App.css";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Food1 from "../imagesForMain/cards/1.jpeg";
import Food2 from "../imagesForMain/cards/2.png";
import Food3 from "../imagesForMain/cards/3.png";
import Food4 from "../imagesForMain/cards/4.jpg";
import Food5 from "../imagesForMain/cards/5.jpg";


const Test = props =>(
  <Col>
    <Card style={{ width: "30rem" }} className="first-col">
      <Card.Img variant="top" width = "300" height = "300" src= {"/uploads/" + props.food.chefname + "_" + props.food.foodname + "undefined." + props.food.productImageType} />
      <Card.Body>
        <Card.Title>{props.food.foodname}</Card.Title>
        <Card.Text>
          Chef: {props.food.chefname}
          <br />
          description: {props.food.description} 
          <br/>
          Price: $ {props.food.price}
        </Card.Text>
        <Button variant="success" onClick = {() => { alert("Item added to cart"); props.addToCart(props.food._id);}}>Add to cart</Button>
      </Card.Body>
    </Card>
  </Col>
)
    

function MainDishes() {
    return (
      <>
        <br />
        <h1 className="text-center">
          <b>Popular Dishes</b>
        </h1>
        <h3 className="text-center">Food experience with locals</h3>
        <hr className="hrline" />
        <br />

        <Row>
          <Col>
            <Card style={{ width: "18rem" }} className="first-col">
              <Card.Img variant="top" src={Food1} />
              <Card.Body>
                <Card.Title>BUTTERNUT SQUASH CURRY</Card.Title>
                <Card.Text>
                  Chef: Alex <br />
                  Location: Fresno CA <br />
                  Price: $25
                </Card.Text>
                <Button variant="success">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Food2} />
              <Card.Body>
                <Card.Title>CALIFORNIA ‘FRIED’ CHICKEN SANDWICH</Card.Title>
                <Card.Text>
                  Chef: Randy <br />
                  Location: Fresno CA <br />
                  Price: $30
                </Card.Text>
                <Button variant="success">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Food3} />
              <Card.Body>
                <Card.Title>BUTTERNUT SQUASH CURRY</Card.Title>
                <Card.Text>
                  Chef: Megan <br />
                  Location: Fresno CA <br />
                  Price: $30
                </Card.Text>
                <Button variant="success">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Food4} />
              <Card.Body>
                <Card.Title>
                  JERK <br />
                  CHICKEN{" "}
                </Card.Title>
                <Card.Text>
                  Chef: Kory <br />
                  Location: Fresno CA <br />
                  Price: $35
                </Card.Text>
                <Button variant="success">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Card style={{ width: "18rem" }} className="first-col">
              <Card.Img variant="top" src={Food5} />
              <Card.Body>
                <Card.Title>SPICY SHAWARMA CHICKEN WRAP</Card.Title>
                <Card.Text>
                  Chef: Naren <br />
                  Location: Fresno CA <br />
                  Price: $25
                </Card.Text>
                <Button variant="success">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Food1} />
              <Card.Body>
                <Card.Title>BUTTERNUT SQUASH CURRY</Card.Title>
                <Card.Text>
                  Chef: Alex <br />
                  Location: Fresno CA <br />
                  Price: $25
                </Card.Text>
                <Button variant="success">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Food2} />
              <Card.Body>
                <Card.Title>CALIFORNIA ‘FRIED’ CHICKEN SANDWICH</Card.Title>
                <Card.Text>
                  Chef: Randy <br />
                  Location: Fresno CA <br />
                  Price: $30
                </Card.Text>
                <Button variant="success">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Food3} />
              <Card.Body>
                <Card.Title>BUTTERNUT SQUASH CURRY</Card.Title>
                <Card.Text>
                  Chef: Megan <br />
                  Location: Fresno CA <br />
                  Price: $30
                </Card.Text>
                <Button variant="success">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Card style={{ width: "18rem" }} className="first-col">
              <Card.Img variant="top" src={Food1} />
              <Card.Body>
                <Card.Title>BUTTERNUT SQUASH CURRY</Card.Title>
                <Card.Text>
                  Chef: Alex <br />
                  Location: Fresno CA <br />
                  Price: $25
                </Card.Text>
                <Button variant="success">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Food2} />
              <Card.Body>
                <Card.Title>CALIFORNIA ‘FRIED’ CHICKEN SANDWICH</Card.Title>
                <Card.Text>
                  Chef: Randy <br />
                  Location: Fresno CA <br />
                  Price: $30
                </Card.Text>
                <Button variant="success">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Food3} />
              <Card.Body>
                <Card.Title>BUTTERNUT SQUASH CURRY</Card.Title>
                <Card.Text>
                  Chef: Megan <br />
                  Location: Fresno CA <br />
                  Price: $30
                </Card.Text>
                <Button variant="success">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Food4} />
              <Card.Body>
                <Card.Title>
                  JERK <br />
                  CHICKEN{" "}
                </Card.Title>
                <Card.Text>
                  Chef: Kory <br />
                  Location: Fresno CA <br />
                  Price: $35
                </Card.Text>
                <Button variant="success">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Card style={{ width: "18rem" }} className="first-col">
              <Card.Img variant="top" src={Food5} />
              <Card.Body>
                <Card.Title>SPICY SHAWARMA CHICKEN WRAP</Card.Title>
                <Card.Text>
                  Chef: Naren <br />
                  Location: Fresno CA <br />
                  Price: $25
                </Card.Text>
                <Button variant="success">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Food1} />
              <Card.Body>
                <Card.Title>BUTTERNUT SQUASH CURRY</Card.Title>
                <Card.Text>
                  Chef: Alex <br />
                  Location: Fresno CA <br />
                  Price: $25
                </Card.Text>
                <Button variant="success">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Food2} />
              <Card.Body>
                <Card.Title>CALIFORNIA ‘FRIED’ CHICKEN SANDWICH</Card.Title>
                <Card.Text>
                  Chef: Randy <br />
                  Location: Fresno CA <br />
                  Price: $30
                </Card.Text>
                <Button variant="success">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Food3} />
              <Card.Body>
                <Card.Title>BUTTERNUT SQUASH CURRY</Card.Title>
                <Card.Text>
                  Chef: Megan <br />
                  Location: Fresno CA <br />
                  Price: $30
                </Card.Text>
                <Button variant="success">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <br />
            <div className="text-center">
              <Button variant="success">View All</Button>
            </div>
            <br />
          </Col>
        </Row>
      </>
    );
  }
  export default MainDishes;
/*
MainDishes.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps
)(MainDishes);
*/