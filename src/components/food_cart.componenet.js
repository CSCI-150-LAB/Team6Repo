import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ".././App.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//import { getPrice } from "../actions/cartActions";

const FoodItems = props => (
  <tr>
    <td>{props.fooditem.chefname}</td>
    <td>{props.fooditem.foodname}</td>
    <td>{props.fooditem.description}</td>
    <td>${props.fooditem.price}</td>
    <td>
      <a href="#" onClick={() => { props.deleteFoodItem(props.fooditem._id) }}>delete</a>
    </td>
  </tr>
)

class foodCart  extends Component{

    constructor(props){ 
        super(props); 
        
        this.deleteFoodItem = this.deleteFoodItem.bind(this);
        this.state ={
          userCart: '',
          fooditems:[],
          price: 0,
          foodlist:[]
        }
    }

    componentDidMount(){
      console.log(this.props.auth);
      axios.get("http://localhost:5000/foodcart/getcart/"+ this.props.auth.user.id,{username:this.props.auth.user.name}).then(response =>{
        this.setState({userCart:response.data});
        this.setState({fooditems:response.data.foodItems});
        console.log(response.data);
        if(response.data.foodItems.length>0){
          var temp = 0;
          for(var i = 0; i < response.data.foodItems.length; i++){
            temp = response.data.foodItems[i].price + temp;
          }
          this.setState({price:temp});
        }
      });
    }
    deleteFoodItem(foodID){

    }
    onSubmit= e => {  
        e.preventDefault(); 
        console.log(e.value);
    };

  foodList() {
    return this.state.fooditems.map(currentfood => {
      return <FoodItems fooditem={currentfood} key={currentfood._id} deleteFoodItem = {this.deleteFoodItem}/>;
    })
  }
  doPrice(){

  }

  render() {
    return (
      <div>
        <h3>Welcom to your shopping cart, {this.props.auth.user.username}</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Chefname</th>
              <th>Food Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.foodList()}
          </tbody>
        </table>
        <h2>Price: {this.state.price}</h2>
      </div>
    );
  }
}

foodCart.propTypes = {
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps)(foodCart);
  
