import React, { Component } from "react";
//import "./reviews.css"
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import ratings from "./ratings"
import axios from 'axios';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Button from 'react-bootstrap/Button'

export default class reviews extends Component {
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeReview = this.onChangeReview.bind(this);
  
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username : '',
            review : ''
        }
    }
    
    onChangeUsername(e){
        this.setState({
        username: e.target.value
        })
    }
    onChangeReview(e){
      this.setState({
      review: e.target.value
      })
    }

    onSubmit(e){
        e.preventDefault();

        const review = {
            username: this.state.username,
            review: this.state.review
        }

        console.log(review);

        axios.post('http://localhost:5000/foodreviews/add',review)
            .then(res => console.log(res.data));
        this.setState({
            username: '',
            review : ''
        })
        //window.location = '/usercreated';
    }

    render() {
        return (
            <form onSubmit = {this.onSubmit}>
                <a href="#" class="m-5"  aria-pressed="true"></a>
                <h3>Leave a Review</h3>

                <div className="form-group col-md-3">
                    <label>Name of the chef you would like to review</label>
                    <input type="username" className="form-control" onChange = {this.onChangeUsername}/>
                </div>

                {/*<div className="auth-wrapper">
                    <div className="container">
                    <Switch>
                        <Route exact path='/' component={ratings} />
                        <Route path="/" component={ratings} />
                    </Switch>
                    </div>
                </div>*/}

                <div class="form-group col-md-10">
                    <label for="exampleFormControlTextarea1">Review</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange = {this.onChangeReview}></textarea>
                </div>

                <Button className="btn-block" variant="outline-success" type = "submit">Submit Review</Button>
               
            </form>
        );
    }
}