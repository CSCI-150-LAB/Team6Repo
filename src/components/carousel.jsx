import React from 'react';
import '.././App.css';

import Carousel from 'react-bootstrap/Carousel';

import Slide1 from "./images/img1.jpg";
import Slide2 from "./images/img2.jpg";
import Slide3 from "./images/img3.jpg";

function carousel(){
    return(
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100 custom-img"
                src={Slide1}
                alt="Indian Food"
                />
                <Carousel.Caption>
                <h3 className="carousel-text"><span>Experience the diversity of India through amazing homemade food with locals! </span></h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 custom-img"
                src={Slide2}
                alt="Italian Food"
                />

                <Carousel.Caption>
                <h3 className="carousel-text"><span>Experience the diversity of Italy through amazing homemade food with locals!</span></h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 custom-img"
                src={Slide3}
                alt="Middle Eastern Food"
                />

                <Carousel.Caption>
                <h3 className="carousel-text"><span>Experience the diversity of Middle East through amazing homemade food! </span></h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
}
export default carousel;