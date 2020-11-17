import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ".././App.css";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Food1 from "../imagesForMain/cards/1.jpeg";
/*
const Fooditem = props =>(
  <tr>
    <td>{props.food.chefname}</td>
    <td>{props.food.foodname}</td>
    <td>{props.food.description}</td>
    <td>{props.food.price}</td>
    <td>
    <img src = {"/uploads/" + props.food.chefname + "_" + props.food.foodname + props.food._id} alt = ""/>
    </td>
    <td>
      <Link to={"/edit/"+props.food._id}>View</Link>
    </td>
  </tr>
)
*/
const Fooditem = props =>(
  <tr>
    <td>{props.food.chefname}</td>
    <td>{props.food.foodname}</td>
    <td>{props.food.description}</td>
    <td>{props.food.price}</td>
    <td>
    <img src = {"/uploads/" + props.food.chefname + "_" + props.food.foodname + props.food._id} alt = ""/>
    </td>
    <td>
      <Link to={"/edit/"+props.food._id}>View</Link>
    </td>
  </tr>
)

const Test = props =>(
    <Col>
      <Card style={{ width: "40rem" }} className="first-col">
        <Card.Img variant="top" src= {"/uploads/" + props.food.chefname + "_" + props.food.foodname + "undefined." + props.food.productImageType} />
        <Card.Body>
          <Card.Title>{props.food.foodname}</Card.Title>
          <Card.Text>
            Chef: {props.food.chefname}
            <br />
            description: {props.food.description} 
            <br/>
            Price: $ {props.food.price}
          </Card.Text>
          <Button variant="success">Add to cart</Button>
        </Card.Body>
      </Card>
    </Col>
)

export default class CreateSearchQuery  extends Component{
    
    constructor(props){
        super(props);

        this.onCreateSearch = this.onCreateSearch.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            search : '',
            fooditems: [],
            trash : '',
            trash2: '',
            trash3: ''
        }

    }
    
    onCreateSearch(e){
        this.setState({
        search: e.target.value
        })
    }
    
    componentDidMount(){
      axios.get("http://localhost:5000/searchfood/").then(response =>{
          if(response.data.length >= 0){
            this.setState({fooditems: response.data})
          }
          else{
            console.log("NOTHING");
          }
          this.foodList();
      });
      
    }
    debugpurp = e =>{
      console.log(this.state.fooditems);
    }

    foodList() {
      if(this.state.fooditems.length >0){
        console.log(this.state.fooditems.length);
        console.log("/uploads/" + this.state.fooditems[0].chefname + "_" + this.state.fooditems[0].foodname + "undefined" + this.state.fooditems[0].productImageType);

        const dispFI = this.state.fooditems.map(currentfood => {
          return <Test food={currentfood} key={currentfood._id}/>;
        })
        this.setState({trash: dispFI});   
      }
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
          this.foodList();
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
            <br/>
            <br/>
            {this.state.trash}
            <br />
          </div>
        )
      }
    }