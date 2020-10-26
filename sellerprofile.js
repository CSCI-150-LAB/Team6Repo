import imageupload from  "./imageupload"
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class sellerprofile extends Component {
    render() {
        return (
            <form>
                <h3>Edit Profile</h3>
                <div className="auth-wrapper">
                    <div className="container">
                    <Switch>
                        <Route exact path='/' component={imageupload} />
                        <Route path="/" component={imageupload} />
                    </Switch>
                    </div>
                </div>

                <div className="form-group">
                    <label>First Name</label>
                    <input type="first namer" className="form-control" />
                </div>

                <div className="form-group">
                    <label>Last Name</label>
                    <input type="last name" className="form-control" />
                </div>

                <div className="form-group">
                    <label>City</label>
                    <input type="City" className="form-control" />
                </div>

                <div className="form-group">
                    <label>State</label>
                    <input type="state" className="form-control" />
                </div>

                <div className="form-group">
                    <label>Zip Code</label>
                    <input type="zip code" className="form-control" />
                </div>

                <p className="meals text-left">Meals</p>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                    <label class="form-check-label" for="inlineCheckbox1">Healthy</label>
                </div>
                    <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                    <label class="form-check-label" for="inlineCheckbox2">Breakfast</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3"></input>
                    <label class="form-check-label" for="inlineCheckbox3">American</label>
                </div>
                    <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="option4"></input>
                    <label class="form-check-label" for="inlineCheckbox4">Chinese</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox5" value="option5"></input>
                    <label class="form-check-label" for="inlineCheckbox5">Indian</label>
                </div>
                    <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox6" value="option6"></input>
                    <label class="form-check-label" for="inlineCheckbox6">Mexican</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox7" value="option7"></input>
                    <label class="form-check-label" for="inlineCheckbox7">Japanese</label>
                </div>
                    <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox8" value="option8"></input>
                    <label class="form-check-label" for="inlineCheckbox8">Mediterranian</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox9" value="option9"></input>
                    <label class="form-check-label" for="inlineCheckbox1">Thai</label>
                </div>
                    <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox10" value="option10"></input>
                    <label class="form-check-label" for="inlineCheckbox10">Italian</label>
                </div>

                
                <div class="row row-cols-1 row-cols-md-3">
                    <div class="col mb-4">
                        <div class="card">
                        <div className="auth-wrapper">
                            <div className="container">
                            <Switch>
                                <Route exact path='/' component={imageupload} />
                                <Route path="/" component={imageupload} />
                            </Switch>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                            <div className="form-group">
                                <label>Meal Name</label>
                                <input type="meal" className="form-control" />
                            </div>
                                <label for="exampleFormControlTextarea1">Meal Description</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card">
                        <div className="auth-wrapper">
                            <div className="container">
                            <Switch>
                                <Route exact path='/' component={imageupload} />
                                <Route path="/" component={imageupload} />
                            </Switch>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                            <div className="form-group">
                                <label>Meal Name</label>
                                <input type="meal" className="form-control" />
                            </div>
                                <label for="exampleFormControlTextarea1">Meal Description</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card">
                        <div className="auth-wrapper">
                            <div className="container">
                            <Switch>
                                <Route exact path='/' component={imageupload} />
                                <Route path="/" component={imageupload} />
                            </Switch>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                            <div className="form-group">
                                <label>Meal Name</label>
                                <input type="meal" className="form-control" />
                            </div>
                                <label for="exampleFormControlTextarea1">Meal Description</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card">
                        <div className="auth-wrapper">
                            <div className="container">
                            <Switch>
                                <Route exact path='/' component={imageupload} />
                                <Route path="/" component={imageupload} />
                            </Switch>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                            <div className="form-group">
                                <label>Meal Name</label>
                                <input type="meal" className="form-control" />
                            </div>
                                <label for="exampleFormControlTextarea1">Meal Description</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card">
                        <div className="auth-wrapper">
                            <div className="container">
                            <Switch>
                                <Route exact path='/' component={imageupload} />
                                <Route path="/" component={imageupload} />
                            </Switch>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                            <div className="form-group">
                                <label>Meal Name</label>
                                <input type="meal" className="form-control" />
                            </div>
                                <label for="exampleFormControlTextarea1">Meal Description</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card">
                        <div className="auth-wrapper">
                            <div className="container">
                            <Switch>
                                <Route exact path='/' component={imageupload} />
                                <Route path="/" component={imageupload} />
                            </Switch>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                            <div className="form-group">
                                <label>Meal Name</label>
                                <input type="meal" className="form-control" />
                            </div>
                                <label for="exampleFormControlTextarea1">Meal Description</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card">
                        <div className="auth-wrapper">
                            <div className="container">
                            <Switch>
                                <Route exact path='/' component={imageupload} />
                                <Route path="/" component={imageupload} />
                            </Switch>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                            <div className="form-group">
                                <label>Meal Name</label>
                                <input type="meal" className="form-control" />
                            </div>
                                <label for="exampleFormControlTextarea1">Meal Description</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card">
                        <div className="auth-wrapper">
                            <div className="container">
                            <Switch>
                                <Route exact path='/' component={imageupload} />
                                <Route path="/" component={imageupload} />
                            </Switch>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                            <div className="form-group">
                                <label>Meal Name</label>
                                <input type="meal" className="form-control" />
                            </div>
                                <label for="exampleFormControlTextarea1">Meal Description</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card">
                        <div className="auth-wrapper">
                            <div className="container">
                            <Switch>
                                <Route exact path='/' component={imageupload} />
                                <Route path="/" component={imageupload} />
                            </Switch>
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <div class="form-group">
                            <div className="form-group">
                                <label>Meal Name</label>
                                <input type="meal" className="form-control" />
                            </div>
                                <label for="exampleFormControlTextarea1">Meal Description</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            
                <a href="#" class="btn btn-outline-dark btn-block" role="button" aria-pressed="true">Submit</a>
            
            </form>
        );
    }
}