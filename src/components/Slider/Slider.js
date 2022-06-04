import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import firstSlide from '../../assets/bksh.jpg';
import secondtSlide from '../../assets/iphone.jpg';
import thirdSlide from '../../assets/gadeget.jpg';

const Slider = () => {
    return (
        <div>
            <Carousel autoPlay infiniteLoop>
                <div>
                    <img src={firstSlide} />
                </div>
                <div>
                    <img src={secondtSlide} />
                </div>
                <div>
                    <img src={thirdSlide} />
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;