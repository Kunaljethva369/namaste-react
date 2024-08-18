import React,{ useState } from 'react';
import './MenuAccordion.css';

function Menu({ individualRestaurant }) {
    console.log(individualRestaurant);
    const [openAccordions,setOpenAccordions] = useState([true,true]);

    const toggleAccordion = (index) => {
        setOpenAccordions((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <>
            <h2 className='menucenter'>Menu</h2>
            <div className="menu-accordion">
                {
                    individualRestaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.slice(2).map((ele,index) => {
                        return (
                            <>
                                <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                                    <h3 className="section-title">{ele.card.card.title} ({ele.card.card.itemCards?.length})</h3>
                                    <span className="toggle-icon">{openAccordions[index] ? '▲' : '▼'}</span>
                                </div>
                                {
                                    ele?.card?.card?.itemCards?.map((ele,index) => {
                                        return (
                                            <>
                                                {
                                                    openAccordions[index] && (
                                                        <div className="accordion-content">
                                                            <div className="menu-item">
                                                                <div className="item-info">
                                                                    <h4 className="item-name">{ele?.card?.info?.name}</h4>
                                                                    <p className="item-price">₹{ele?.card?.info.price / 100} <span className="discount"></span></p>
                                                                    <div className="item-rating">
                                                                        <span className="rating-star">{ele?.card?.info?.ratings?.aggregatedRating?.rating ? `★ ${ele?.card?.info?.ratings?.aggregatedRating?.rating}` : ele?.card?.info?.ratings?.aggregatedRating?.ratin}</span>
                                                                        <span className="rating-count">{ele?.card?.info?.ratings?.aggregatedRating?.ratingCountV2 ? `(${ele?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})` : ele?.card?.info?.ratings?.aggregatedRating?.ratingCountV2}</span>
                                                                    </div>
                                                                    <p className="item-description">
                                                                        {ele?.card?.info?.description}
                                                                    </p>
                                                                </div>
                                                                <div className="item-actions">
                                                                    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${ele?.card?.info?.imageId}`} alt="Crispy Chicken Burger" className="item-image" />
                                                                    <button className="add-button">ADD</button>
                                                                    <p className="customisable-text">Customisable</p>
                                                                </div>
                                                            </div>
                                                            <hr />
                                                        </div>
                                                    )
                                                }
                                            </>
                                        )
                                    })
                                }
                            </>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Menu;