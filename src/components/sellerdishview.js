import React, { Component } from 'react';
import axios from 'axios';
import ".././App.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';


const FoodItems = props => (
  <tr>
    <td>{props.fooditem.foodname}</td>
    <td>{props.fooditem.description}</td>
    <td>${props.fooditem.price}</td>
    <td>
    <Link to={"http://localhost:3000/fooditem/edit/"+props.fooditem._id}>edit</Link>|<Button onClick={() => { props.deleteFoodItem(props.fooditem._id) }}>delete</Button>
    </td>
  </tr>
)

class sellerDishes  extends Component{

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
      axios.get("http://localhost:5000/fooditems/seller/"+this.props.auth.user.name).then(response =>{
        this.setState({fooditems:response.data});
        console.log(response.data);
      });
    }
    
    deleteFoodItem(foodID){
      
      axios.delete("http://localhost:5000/fooditems/"+foodID).then(response =>{
        console.log(response);
      });
      this.setState({
        fooditems: this.state.fooditems.filter(el => el._id !== foodID)
      })
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

  refreshPage() { 
    window.location.reload(true); 
  }
 
  render() {
    return (
      <div>
        <h3>Welcome to your food uploads, {this.props.auth.user.name}</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
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
      </div>
      
    );
  }
}

sellerDishes.propTypes = {
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps)(sellerDishes);
  
