import React from 'react';
import "./Footer.css";
import Button from "react-bootstrap/Button";
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";




const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="form-group subs">
                    <label>Enter your email to recieve updates </label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="subbtn"><Button href="#" variant="outline-light">Subscribe</Button></div>
                
                <hr/>
                <div className="row">
                    {/* column1 */}
                    <div className="col">
                        <h4>Authentic Chef</h4>
                        <ul className="list-unstyled"> 
                        “One cannot think well, love well, sleep well, 
                        if one has not dined well.” -Virginia Woolf
                        </ul>
                    </div>
                    {/* column2 */}
                    <div className="col">
                        <ul className="list-unstyled">
                            <li><a href="ourstory" style={{ color: 'white' }} >Our Story</a></li>
                            <li><a href="howitworks" style={{ color: 'white' }}>How it Works</a></li>
                            <li><a href="privacypolicy" style={{ color: 'white' }}>Privacy Policy</a></li>
                        </ul>
                    </div>
                    {/* column3 */}
                    <div className="col">
                        <ul className="list-unstyled">
                            <li><a href="contactus" style={{ color: 'white' }}>Contact Us</a></li>
                            <li><a href="rulespage" style={{ color: 'white' }}>Do's and Don'ts</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm" style={{ color: 'white' }}>
                        &copy;{new Date().getFullYear()} Authentic Chef INC | All rights reserved
                    </p>
                </div>


            </div>
        </div>
    )

}
export default Footer;
