import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class HomeProslider extends Component {
    render() {
        return (
            <Carousel>
                <div>                
                    <img src="assets/images/pro-1.png" alt="pro" />
                    <p className="legend">Ford ecosport 2017</p>
                </div>
                <div>
                <img src="assets/images/pro-1.png" alt="pro" />
                    <p className="legend">Ford ecosport 2012</p>
                </div>
                <div>
                <img src="assets/images/pro-1.png" alt="pro" />
                    <p className="legend">Ford ecosport 2013</p>
                </div>
            </Carousel>
        );
    }
}

export default HomeProslider;