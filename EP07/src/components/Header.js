import React from "react";
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;