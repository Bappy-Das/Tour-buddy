import React from 'react';
import './Banner.css';
import banner from '../../images/slider.jpg'

const Banner = () => {
    return (
        <div className="banner">
            <img src={banner} alt="Snow" height="600"></img>
            <div class="centered">
                <h1>Bangladesh is a land of River, vally of Green Carpet and Sanctuary Mangrove forest</h1>
            </div>
        </div>
    );
};

export default Banner;