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
        </div>
    );
};

export default Header;