/*
import Slide1 from "./images/img1.jpg";
import Slide2 from "./images/img2.jpg";
import Slide3 from "./images/img3.jpg";
*/
import video1 from "./videos/video1.mp4"
import React from 'react';
import '.././App.css';


import Carousel from 'react-bootstrap/Carousel';


//import Jumbotron from 'react-bootstrap/Jumbotron';
//import Button from 'react-bootstrap/Button';

function home(){
    return( 
        <Carousel>
             
            <Carousel.Item>
                <video ref = "vid1" src = {video1} type= "video/mp4">
                </video>
                <Carousel.Caption>
                <h1>Indian Food</h1>
                <h3>Experience the diversity of India through amazing homemade food with locals!</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 custom-img"
                src={Slide2}
                alt="Italian Food"
                />

                <Carousel.Caption>
                <h1>Italian Food</h1>
                <h3>Experience the diversity of Italy through amazing homemade food with locals!</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 custom-img"
                src="./images/img3.jpg"
                alt="Middle Eastern Food"
                />

                <Carousel.Caption>
                <h1>Middle Eastern</h1>
                <h3>Experience the diversity of Saudi Arabia through amazing homemade food with locals!</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        
    );
}
export default home;