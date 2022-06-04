import React from 'react';
import './Header.css';
import siteLogo from '../../../src/logo.svg.png'
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className="logo">
                <img src={siteLogo}/>
            </div>
            <div className="navbar">
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/Shop'>Shop</NavLink></li>
                    <li><NavLink to='/Cart'>Cart</NavLink></li>
                    <li><NavLink to='/About'>About</NavLink></li>
                    <li><NavLink to='/Privicey'>Privicey</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;