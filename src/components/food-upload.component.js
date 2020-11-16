import React, { Component } from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Button from 'react-bootstrap/Button'
import PropTypes from "prop-types";
import { connect } from "react-redux";

import '../App.css'

class FoodUpload extends Component{
    constructor(props){
        super(props);

        this.onChangeChefName = this.onChangeChefName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeEthnicity = this.onChangeEthnicity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            chefname : "",
            foodname:"",
            userId: "",
            description: "",
            ethnicity: "",
            price: 0,
            productImage: "" // location
        }
    }

    componentDidMount(){ 
      const {user} = this.props.auth;
      this.setState({chefname: user.name});
    }
    
    onChangeChefName(e){
        this.setState({
        chefname: e.target.value
        })
    }
    
    displayName = () => {
      console.log(this.state.name);
    }
    
    onChangePrice(e){
      this.setState({
      price: e.target.value
      })
    }
    onChangeDescription(e){
      this.setState({
      description: e.target.value
      })
    }
    onChangeEthnicity(e){
      this.setState({
      ethnicity: e.target.value
      })
    }
    fileSelectedHandler(e) {
        this.setState({
            productImage: e.target.files[0]
        })
    }
    onChange = e => {
      this.setState({[e.target.id]: e.target.value})
    }
    // this is for local uploads. (e.g. randy's phone)
    fileUploadHandler = () =>{
        const newFoodItem = new FormData();
        newFoodItem.append("chefname",this.state.chefname);
        newFoodItem.append("price",this.state.price);
        newFoodItem.append("foodname",this.state.foodname);
        newFoodItem.append("productImage",this.state.productImage,this.state.productImage.name);
        newFoodItem.append("description",this.state.description);
        newFoodItem.append("ethnicity",this.state.ethnicity); 
        console.log(newFoodItem);
        axios.post('http://10.0.0.253:5000/fooditems/add', newFoodItem).then(res => {
            console.log(res.data)})
        
    }
    onSubmit(e){
      const newFoodItem = new FormData();
      newFoodItem.append("chefname",this.state.chefname);
      newFoodItem.append("price",this.state.price);
      newFoodItem.append("foodname",this.state.foodname);
      newFoodItem.append("productImage",this.state.productImage,this.state.productImage.name);
      newFoodItem.append("description",this.state.description);
      newFoodItem.append("ethnicity",this.state.ethnicity);
      console.log(newFoodItem);
      axios.post('http://localhost:5000/fooditems/add', newFoodItem).then(res => {
          console.log(res.data)});

      
    }
    
    render() {
     // const { user } = this.props.auth;
        return (
            /*
            <div>
                <input type = "file" onChange = {this.fileSelectedHandler}/>
                <button onClick={this.fileUploadHandler}>Upload Handle</button>
            </div>*/
            <Form>
            <h1>
              <span className="font-weight-bold"> Image Upload Testing</span> 
            </h1>
            <FormGroup>
              <Label>Chef Name </Label>
              <h3>
                {this.state.chefname.split(" ")[0]}
              </h3>
            </FormGroup>
            <FormGroup>
              <Label>Price </Label>
              <Input type = "Number" placeholder = "Price" onChange = {this.onChangePrice}/>
            </FormGroup>
            <FormGroup>
              <Label>Food Name </Label>
              <Input type = "text" placeholder = "Name of Dish" id = "foodname" value = {this.state.foodname} onChange = {this.onChange}/>
            </FormGroup>
            <FormGroup>
              <Label>Description </Label>
              <Input type = "description" placeholder = "description of dish" onChange = {this.onChangeDescription}/>
            </FormGroup>
            <FormGroup>
            <Label>ethnicity </Label>
              <Input type = "ethnicity" placeholder = "ethnicity" onChange = {this.onChangeEthnicity}/>
            </FormGroup>
            <FormGroup>
              <Label>File </Label>
              <Input type = "file" className="form-control-file" onChange = {this.fileSelectedHandler}/>
            </FormGroup>
            <Button type = "upload" className="btn-block" variant="outline-success" onClick = {this.onSubmit}> {'Upload'} </Button> 
          </Form>
        )
      }
}

FoodUpload.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps)(FoodUpload);