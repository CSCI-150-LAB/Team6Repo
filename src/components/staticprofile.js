import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./staticprofile.css"


export default class staticprofile extends Component {
    render() {
        return (
            <div>
                <img class="rounded-circle" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/435311/React--daily-ui-006.jpg"></img>
                <div className="heading-box">
                <form class="form-inline">
                    <h1>Jane Donuts</h1>
                    <button type="submit" class="btn btn-success mb-2">Edit</button>
                </form>
                    <div class="form-group mx-sm-3 mb-2">
                    <h3>American Cuisine Chef   |   Fresno, Ca</h3>
                    </div>
                    <button type="submit" class="btn btn-success btn-sm btn-block">Edit</button>

                    {/*<form class="form-inline">
                    <div class="form-group mx-sm-3 mb-2">
                        <label for="staticEmail2" class="sr-only">Email</label>
                        <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="Email:"></input>  
                    </div>
                    <div class="form-group mx-sm-3 mb-2">
                        <label for="inputPassword2" class="sr-only">Password</label>
                        <input type="password" class="form-control-plaintext" id="inputPassword2" placeholder="janedonuts@gmail.com"></input>
                    </div>
                    <button type="submit" class="btn btn-success mb-2">Edit</button>
        </form>*/}
                    <h4  style={{ color: '#0c9e06' }}>Check out my menu!</h4>
                    <div class="row row-cols-1 row-cols-md-3">

                    <div class="col mb-4">
                        <div class="card border-success col mb-4">
                        <img class="card-img-top" src="..." alt="Food Item"></img>
                        <div class="card-body">
                            <div class="form-group">
                            <div className="form-group">
                                <label>Meal Name</label>
                                <p>...</p>
                            </div>
                                <label for="exampleFormControlTextarea1">Meal Description</label>
                                <p>...</p>
                                <button type="submit" class="btn btn-secondary btn-sm btn-block">Edit</button>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="col mb-4">
                        <div class="card border-success col mb-4">
                        <img class="card-img-top" src="..." alt = "Food Item"></img>
                        <div class="card-body">
                            <div class="form-group">
                            <div className="form-group">
                                <label>Meal Name</label>
                                <p>...</p>
                            </div>
                                <label for="exampleFormControlTextarea1">Meal Description</label>
                                <p>...</p>
                                <button type="submit" class="btn btn-secondary btn-sm btn-block">Edit</button>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="col mb-4">
                        <div class="card border-success col mb-4">
                        <img class="card-img-top" src="..." alt="Food Item"></img>
                        <div class="card-body">
                            <div class="form-group">
                            <div className="form-group">
                                <label>Meal Name</label>
                                <p>...</p>
                            </div>
                                <label for="exampleFormControlTextarea1">Meal Description</label>
                                <p>...</p>
                                <button type="submit" class="btn btn-secondary btn-sm btn-block">Edit</button>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="col mb-4">
                        <div class="card border-success col mb-4">
                        <img class="card-img-top" src="..." alt="Food Item"></img>
                        <div class="card-body">
                            <div class="form-group">
                            <div className="form-group">
                                <label>Meal Name</label>
                                <p>...</p>
                            </div>
                                <label for="exampleFormControlTextarea1">Meal Description</label>
                                <p>...</p>
                                <button type="submit" class="btn btn-secondary btn-sm btn-block">Edit</button>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="col mb-4">
                        <div class="card border-success col mb-4"> 
                        <img class="card-img-top" src="..." alt="Food Item"></img>
                        <div class="card-body">
                            <div class="form-group">
                            <div className="form-group">
                                <label>Meal Name</label>
                                <p>...</p>
                            </div>
                                <label for="exampleFormControlTextarea1">Meal Description</label>
                                <p>...</p>
                                <button type="submit" class="btn btn-secondary btn-sm btn-block">Edit</button>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="col mb-4">
                        <div class="card border-success col mb-4">
                        <img class="card-img-top" src="..." alt="Food Item"></img>
                        <div class="card-body">
                            <div class="form-group">
                            <div className="form-group">
                                <label>Meal Name</label>
                                <p>...</p>
                            </div>
                                <label for="exampleFormControlTextarea1">Meal Description</label>
                                <p>...</p>
                                <button type="submit" class="btn btn-secondary btn-sm btn-block">Edit</button>
                            </div>
                        </div>
                        </div>

                    </div>
            
                    
            
                </div>
                </div>
                
               <div>
                    <h4>Reviews:</h4>
                    <label for="user">User: johnny123</label>
                    <p>The sugar donuts from Jane were amazing! I also tried the maple donuts which just as good if
                        not better!!! 10/10!
                    </p>
                    <button type="submit" class="btn btn-secondary btn-sm btn-block">Leave a Review</button>
               </div>

            </div>
        );
    }
}