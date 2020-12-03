import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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

import PropTypes from "prop-types";
import { connect } from "react-redux";
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

class meals extends Component {
  constructor(props){
    super(props);
    this.addToCart = this.addToCart.bind(this);

    this.state = {
        fooditems: [],
        trash : '',
        trash2: '',
        trash3: ''
    }
  }
  componentDidMount(){
    axios.get("http://localhost:5000/searchfood/dishespage").then(response =>{
        if(response.data.length >= 0){
          this.setState({fooditems: response.data})
        }
        else{
          console.log("NOTHING");
        }
        this.foodList();
    });  
  }
    
    addToCart(foodID){
      const userID = this.props.auth.user.id;
      if(this.props.auth.isAuthenticated){
        console.log("THIS FAR");
        axios.post("http://localhost:5000/foodcart/addtocart/"+ userID,{fooditem:foodID}).then(response =>{
          console.log("ADDED!");
        });
      }
      else{
        alert("REGISTER YOU NUMnUTS. LOL JK.");
      }
    }
    foodList() {
      console.log("fooditems.length = " + this.state.fooditems.length)
      if(this.state.fooditems.length >0){
        console.log(this.state.fooditems);
        const fi3 = [];
        const fi2 = [];
        const fi1 = [];
        var fc3 = 0;
        var fc2 = 0;
        var fc1 = 0;
        for(var i = 0; i <this.state.fooditems.length; i++){
          if((i+1)%3 == 0){
            fi3[fc3] = this.state.fooditems[i];
            fc3 = fc3+1;
          }
          else if((i+1)%2 == 0){
            fi2[fc2] = this.state.fooditems[i];
            fc2 = fc2+1;
          }
          else{
            fi1[fc1] = this.state.fooditems[i];
            fc1 = fc1+1;
          }
        }
        const dispFI = fi1.map(currentfood => {
          return <Test food={currentfood} key={currentfood._id} addToCart = {this.addToCart}/>;
        })
        this.setState({trash: dispFI});
  
        const dispFI2 = fi2.map(currentfood => {
          return <Test food={currentfood} key = {currentfood._id} addToCart = {this.addToCart}/>
        })
        this.setState({trash2: dispFI2});
  
        const dispFI3 = fi3.map(currentfood => {
          return <Test food={currentfood} key = {currentfood._id} addToCart = {this.addToCart}/>
        })
        this.setState({trash3: dispFI3});
      }
      else{
        this.setState({trash: []});
        this.setState({trash2: []});
        this.setState({trash3: []});
      }
    }

  render() {
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
              {this.state.fooditems.length > 0 && this.state.trash}
              {this.state.fooditems.length > 1 && this.state.trash2}
              {this.state.fooditems.length > 2 && this.state.trash3}
        </Row>
        
      </>
    );
  }
}
meals.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps
)(meals);