import React from "react";
import { useNavigate } from 'react-router-dom';
import starImg from '../../assets/rating.png';

const RestaurantCard = (resData) => {

    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/restaurant/resid=${resData.resData.info.id}`);
    };

    return (
        <>
            <div className="card" key={resData.resData.info.id} onClick={handleCardClick}>
                <div className="foodImg">
                    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.resData.info.cloudinaryImageId}`} alt="food-image" />
                </div>
                <p>{resData.resData.info.name}</p>
                <div className="rating-container">
                    <img src={starImg} alt="rating-image" />
                    <h4>{resData.resData.info.avgRating}</h4>
                </div>
            </div>
        </>
    )
}

export default RestaurantCard;