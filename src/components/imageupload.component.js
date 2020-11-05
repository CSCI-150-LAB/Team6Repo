import React, { Component } from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Button from 'react-bootstrap/Button'

import '../App.css'

export default class ImageUpload extends Component{
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name : "",
            price: 0,
            productImage: ""
        }
    }
    
    onChangeName(e){
        this.setState({
        name: e.target.value
        })
    }
    onChangePrice(e){
      this.setState({
      price: e.target.value
      })
    }
    fileSelectedHandler(e) {
        this.setState({
            productImage: e.target.files[0]
        })
    }
    fileUploadHandler = () =>{
        const newFoodItem = new FormData();
        newFoodItem.append("name",this.state.name);
        newFoodItem.append("price",this.state.price);
        newFoodItem.append("productImage",this.state.productImage,this.state.productImage.name);
        console.log(newFoodItem);
        axios.post('http://10.0.0.253:5000/fooditems/add', newFoodItem).then(res => {
            console.log(res.data)})
        
    }
    onSubmit(e){
      const newFoodItem = new FormData();
      newFoodItem.append("name",this.state.name);
      newFoodItem.append("price",this.state.price);
      newFoodItem.append("productImage",this.state.productImage,this.state.productImage.name);
      console.log(newFoodItem);
      axios.post('http://localhost:5000/fooditems/add', newFoodItem).then(res => {
          console.log(res.data)});
    }
    render() {
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
              <Label>Name </Label>
              <Input type = "name" placeholder = "Your Full Name" onChange = {this.onChangeName}/>
            </FormGroup>
            <FormGroup>
              <Label>Price </Label>
              <Input type = "Number" placeholder = "Price" onChange = {this.onChangePrice}/>
            </FormGroup>
            <FormGroup>
              <Label>File </Label>
              <Input type = "file" className="form-control-file" onChange = {this.fileSelectedHandler}/>
            </FormGroup>
            <Button type = "upload" className="btn-block" variant="outline-success" onClick = {this.fileUploadHandler}> {'Upload'} </Button> 
          </Form>
        )
      }
}