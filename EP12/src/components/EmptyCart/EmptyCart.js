import React from "react";
import "./EmptyCart.css";
import NoCartImg from '../../../assets/nocart.png';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
    return (
        <div className="cart-container">
            <div className="cart-content">
                <div className="cart-empty-image">
                    {/* Placeholder for an image or SVG */}
                    <img
                        src={NoCartImg} // Replace this with the image path
                        alt="Empty cart"
                    />
                </div>
                <h2>Your cart is empty</h2>
                <p>
                    You can go to the home page to view more restaurants.
                </p>
                <button className="cart-button"><Link to="/">See Restaurants Near You</Link></button>
            </div>
        </div>
    );
};

export default EmptyCart;
