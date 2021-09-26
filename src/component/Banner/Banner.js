import React from 'react';
import './Banner.css';
import banner from '../../images/slider.jpg'


// Banner image and banner text
const Banner = () => {
    return (
        <div className="banner">
            <img src={banner} alt="Snow" height="600"></img>
            <div className="centered">
                <h1>Bangladesh is a land of River And vally of Green Carpet.</h1>
                <h3>Travel  Bangladesh With : 100000 Tk</h3>
            </div>
        </div>
    );
};

export default Banner;