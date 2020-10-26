import React, { Component } from "react";
//import "./reviews.css"
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import ratings from "./ratings"

export default class reviews extends Component {
    render() {
        return (
            <form>
                <a href="#" class="m-5"  aria-pressed="true"></a>
                <h3>Leave a Review</h3>

                <div className="form-group col-md-3">
                    <label>Name of the chef you would like to review</label>
                    <input type="chef" className="form-control"/>
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
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <a href="#" class="btn btn-outline-dark btn-sm" role="button" aria-pressed="true">Submit Review</a>
                <a href="#" class="m-5"  aria-pressed="true"></a>
                <a href="#" class="m-5"  aria-pressed="true"></a>
                <a href="#" class="m-5"  aria-pressed="true"></a>
               
            </form>
        );
    }
}