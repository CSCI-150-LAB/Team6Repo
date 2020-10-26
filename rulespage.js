import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import "./rulespage.css"

const Example = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
        <h3><u class="text-success"> To Do's</u></h3>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            <li><a style={{ color: 'green' }} >Buyer</a></li>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            <li><a style={{ color: 'green' }} >Seller</a></li>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <h3>Authentic Cook Do's and Don'ts</h3>
              <p  class="text-center">
              The chefs that cook the food you wish to eat work extremely hard to serve you their authentic meals.
              Our job here at Authentic Cook is to ensure an exceptional eating experience you, the buyer. We hope that 
              our tips and suggestions listed below help create that.
              </p>
              <h5>Food Ordering</h5>
              <ul>
              <li>Request any extra condiments or utensils prior to completing the order.</li>
              <li>Inform the chef on any food allergies.</li>
              <li>Review your order before completing the checkout process.</li>
              </ul>
              <h5>Food Pick Up</h5>
              <ul>
              <li>Be on time to pick up the food.</li>
              <li>Inform the chef when you are there to pick up the food.</li>
              </ul>
              <h5>Delivery</h5>
              <ul>
              <li>Be aware of when the chef arrives to drop of your food.</li>
              <li>Tips can/will be accepted in person.</li>
              </ul>
              <h5>Host Review</h5>
              <ul>
              <li>Leave a review to let us and the chefs know how we are doing. Your reviews help us to improve our services
                to create a better experience for you.
              </li>
              </ul>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
            <h3>Authentic Cook Do's and Don'ts</h3>
              <p  class="text-center">
              As a chef that is presenting food to strangers, we know it can be a difficult task.
              The goal is to create a positive experience for you and the customers. Here are a few guiding tips to help 
              you succeed in generating the best cullinary experience.
              </p>
              <h5>Food Ordering</h5>
              <ul>
              <li>Be sure to carefully review the extra requests of the order such as any additional condiments or
                food allergies.
              </li>
              <li>Do not cook the food to early which will result in a cold meal.</li>
              </ul>
              <h5>Food Pick Up</h5>
              <ul>
              <li>Have the food ready at the requested pick up time that is found on the order.</li>
              <li>Inform the buyer that the food in ready for pick up.</li>
              </ul>
              <h5>Delivery</h5>
              <ul>
              <li>Inform the buyer you are at there home to deliver the food.</li>
              <li>Tips can/will be accepted in person but do not ask the buyer for a tip.</li>
              </ul>
              <h5>Host Review</h5>
              <ul>
              <li>Carefully read the reviews to improve the growth of your business.</li>
              </ul>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
      
    </div>
  );
}


export default Example;