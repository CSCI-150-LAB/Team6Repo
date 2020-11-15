import React, { Component } from "react";
//import "./reviews.css"
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import ratings from "./ratings"
import axios from 'axios';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Button from 'react-bootstrap/Button'
import { connect } from "react-redux";
import PropTypes from "prop-types";

class reviews extends Component {
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
    
    componentDidMount(){ 
        const { user } = this.props.auth; 
        this.setState = ({username: user.name})
    }
    onChangeUsername(){
        
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
                    <h3></h3>
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

reviews.propTypes = {
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps)(reviews);
  
