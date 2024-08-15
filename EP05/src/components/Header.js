import React from "react";
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <nav>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Cart</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;