import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ".././App.css";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


import Food1 from "../imagesForMain/cards/1.jpeg";
import { TableCell } from 'admin-bro';

const Fooditem = props =>(
  <tr>
    <td>{props.food.chefname}</td>
    <td>{props.food.foodname}</td>
    <td>{props.food.description}</td>
    <td>{props.food.price}</td>
    <img src = {"/uploads/" + props.food.chefname + "_" + props.food.foodname + props.food._id} alt = ""/>
    <td>
      <Link to={"/edit/"+props.exercise._id}>View</Link>
    </td>
  </tr>
)

export default class CreateSearchQuery  extends Component{
    
    constructor(props){
        super(props);

        this.onCreateSearch = this.onCreateSearch.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            search : '',
            fooditems: []
        }

    }
    
    onCreateSearch(e){
        this.setState({
        search: e.target.value
        })
    }
    /*
    componentDidMount(){
      axios.get("http://localhost:5000/searchfood/name",{params:{"description":"fried rice"}}).then(response =>{
          if(response.data.length >= 0){
            this.setState({fooditems: response.data})
          }
          else{
            console.log("NOTHING");
          }
      });
    }
    */
    debugpurp = e =>{
      console.log(this.state.fooditems);
    }

    foodList() {
      return this.state.fooditems.map(currentfood => {
        return <Fooditem food={currentfood} key={currentfood._id}/>;
      })
    }
    onSubmit(e){
        e.preventDefault();

        const foodsearch = {description : this.state.search};
        console.log(foodsearch);
        axios.get("http://localhost:5000/searchfood/name",{params:foodsearch}).then(response =>{
          if(response.data.length >= 0){
            this.setState({fooditems: response.data})
          }
          else{
            console.log("NOTHING");
          }
      });
    }

    render() {
        return (
          <div>
            <h3>Food Search</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>search: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.search}
                    onChange={this.onCreateSearch}
                    />
              </div>
              <div className="form-group">
                <input type="submit" value="Create food_search
                " className="btn btn-primary" />
              </div>
            </form>
            <button onClick= {this.debugpurp}>testing</button>
            <div>
        <h3>Searched Results:</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Chefname</th>
              <th>Food Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.foodList() }
          </tbody>
        </table>
      </div>
          </div>
        )
      }
    }