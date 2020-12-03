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

class CreateSearchQuery  extends Component{
    
    constructor(props){
        super(props);

        this.onCreateSearch = this.onCreateSearch.bind(this);
        this.addToCart = this.addToCart.bind(this);
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
    
    componentDidMount(){
      console.log(this);
      this.setState({search: this.props.match.params.search});
      axios.get("http://localhost:5000/searchfood/name", {params: {description:this.props.match.params.search}}).then(response =>{
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
      console.log(this);
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
      }).catch(err =>{
        console.log(err + "NOGO");
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
            <button onClick= {this.debugpurp} hidden = {false}>testing</button>
            <br/>
            <br/>
            
            <Row>
              {this.state.fooditems.length > 0 && this.state.trash}
              {this.state.fooditems.length > 1 && this.state.trash2}
              {this.state.fooditems.length > 2 && this.state.trash3}
            </Row>
            
            <br />
          </div>
        )
      }
    }
    CreateSearchQuery.propTypes = {
      auth: PropTypes.object.isRequired
    };
    const mapStateToProps = state => ({
      auth: state.auth
    });
    export default connect(
      mapStateToProps)(CreateSearchQuery);