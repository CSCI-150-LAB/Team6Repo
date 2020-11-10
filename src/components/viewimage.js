import React, { Component } from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Button from 'react-bootstrap/Button'

import '../App.css'

export default class ImageView extends Component{
    constructor(props){
        super(props);

        this.state = {
            images: [],
            name : "",
            price: 0,
            productImage: ""
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/fooditems/')
          .then(response => {
            this.setState({ images: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }

    render() {
        return (
            <h1>
                hello this is a test.
            </h1>
        )
      }
}