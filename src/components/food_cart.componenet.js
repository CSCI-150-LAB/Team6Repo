import React, { Component } from 'react';
import axios from 'axios';
import ".././App.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {PayPalButton} from "react-paypal-button-v2"; 


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
          tax: 0,
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
          const currentPrice = temp;
          var tax = (temp * 0.07);
          tax = Math.floor(tax * 100) / 100; 
          const newPrice = currentPrice + tax; 
          this.setState({tax:tax});
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
        <h3>Welcome to your shopping cart, {this.props.auth.user.name}</h3>
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
        <h2>Price: ${this.state.price}</h2>
        <h2>Tax: ${this.state.tax}</h2>
        <h2>Total Price: ${this.state.price + this.state.tax}</h2>

        <PayPalButton 
          amount = {this.state.price + this.state.tax}
          onSuccess={(details, data) =>{
            alert("Transaction completed by " + this.props.auth.user.name);

            
          }}
        />


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
  
