import React from 'react';
import '.././App.css';

import Carousel from 'react-bootstrap/Carousel';
/*
import Slide1 from "../imagesForMain/img1.jpg"
*/
import video1 from "./videos/video1.mp4"
import video2 from "./videos/video2.mp4"
import video3 from "./videos/video3.mp4"

import Slide2 from "../imagesForMain/img2.jpg"
import Slide3 from "../imagesForMain/img3.jpg"


function carousel(){
    return(
        <Carousel>
            <Carousel.Item>
                
            <video width="2500" height="600" controls autoPlay muted loop>
                <source src={video1} type="video/mp4"></source>
            </video>

                <Carousel.Caption>
                <h3 className="carousel-text"><span>Experience the diversity of India through amazing homemade food with locals! </span></h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <video width="2500" height="600" controls autoPlay muted loop>
                <source src={video2} type="video/mp4"></source>
            </video>

                <Carousel.Caption>
                <h3 className="carousel-text"><span>Experience the diversity of Italy through amazing homemade food with locals!</span></h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <video width="2500" height="600" controls autoPlay muted loop>
                <source src={video3} type="video/mp4"></source>
            </video>

                <Carousel.Caption>
                <h3 className="carousel-text"><span>Experience the diversity of Middle East through amazing homemade food! </span></h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
}
export default carousel;