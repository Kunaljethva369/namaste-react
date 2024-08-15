import React from "react";
import ReactDOM from 'react-dom/client';
import logo from './assets/logo.png';
import starImg from './assets/rating.png';
import './index.css';
import data from './data.json';

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

const RestaurantCard = (data) => {
    return (
        <>
            {
                data.resObj.map((el,ind) => {
                    return (
                        <div className="card" key={el.info.id}>
                            <div className="foodImg">
                                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${el.info.cloudinaryImageId}`} alt="food-image" />
                            </div>
                            <p>{el.info.name}</p>
                            <div className="rating-container">
                                <img src={starImg} alt="rating-image" />
                                <h4>{el.info.avgRating}</h4>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}


const Body = () => {
    return (
        <>
            <div className="main">
                <div className="search-container">
                    <input type="text" placeholder="Search our favourite" />
                    <button>Search</button>
                </div>
                <div className="card-container">
                    <RestaurantCard resObj={data} />
                </div>
            </div>
        </>
    )
}

const AppLayout = () => {
    return (
        <div className="app-layout">
            <Header />
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);