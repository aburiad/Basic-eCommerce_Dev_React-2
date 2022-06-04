import React from 'react';
import './Header.css';
import siteLogo from '../../../src/logo.svg.png'
const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className="logo">
                <img src={siteLogo}/>
            </div>
            <div className="navbar">
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/Shop'>Shop</a></li>
                    <li><a href='/Order'>Order</a></li>
                    <li><a href='/About'>About</a></li>
                    <li><a href='/Privicey'>Privicey</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;