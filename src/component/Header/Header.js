import React from 'react';
import logo from '../../images/logo1.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            {/* <h1>Tour Buddies</h1> */}
            <div>
                <img src={logo} alt="" />
            </div>
            <nav>
                <a href="/">Home</a>
                <a href="/">Tour Packages</a>
                <a href="/">Bangladesh Blog</a>
                <a href="/">Services</a>
                <a href="/">Contact Us</a>

            </nav>
        </div>
    );
};

export default Header;