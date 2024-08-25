import React from "react";
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const cartItem = useSelector((store) => store.cart.items.reduce((total,item) => total + (item.quantity || 0),0))
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to="/cart">Cart<span className="cart-count">{cartItem}</span></Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;