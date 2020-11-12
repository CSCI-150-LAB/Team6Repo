import React from "react";
import ".././App.css";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Food1 from "../imagesForMain/cards/1.jpeg";
import Food2 from "../imagesForMain/cards/2.png";
import Food3 from "../imagesForMain/cards/3.png";
import Food4 from "../imagesForMain/cards/4.jpg";
import Food5 from "../imagesForMain/cards/5.jpg";



function meals() {
  return (
    <>
      <br />
      <h1 className="text-center">
        <b>Dishes</b>
      </h1>
      <h3 className="text-center">
        Food experience with locals
      </h3>
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
        <Card style={{ width: "18rem" }} className="first-col">
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
        <Card style={{ width: "18rem" }} className="first-col">
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
        <Card style={{ width: "18rem" }} className="first-col">
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
        <Card style={{ width: "18rem" }} className="first-col">
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
        <Card style={{ width: "18rem" }} className="first-col">
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
    </>
  );
}
export default meals;