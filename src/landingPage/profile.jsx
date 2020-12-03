import "../App.css";
import React from 'react';
//import UserDP from "../imagesForMain/ronaldo.jpg";
import { Row, Col, Table, Badge } from "reactstrap";

render() {
  const { user } = this.props.auth;

const Example = () => {
    return (
      <div>
          <Row>
            <Col>
            <span>
                <img className="userdp" /*src={UserDP}*/ alt="Ronaldo" />
              </span>
            </Col>
            <Col>
            
            </Col>
          </Row>
          <Row>
            <Col>
            <h4 className="text-center">Orders</h4>
            <br />
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Order No.</th>
                    <th>Order Rating</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>2139873</td>
                    <td>★★★★★</td>
                    <td><Badge href="#" color="success">Completed</Badge></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>3823789</td>
                    <td>★★★★</td>
                    <td><Badge href="#" color="warning">In Progress</Badge></td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>3283949</td>
                    <td>★★★★★</td>
                    <td><Badge href="#" color="primary">Ready for Pickup</Badge></td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
      </div>
      
    );
  };

  
  export default Example;
