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
                    individualRestaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.slice(2).map((ele,outerIndex) => {
                        const isAccordionOpen = openAccordions[outerIndex];
                        return (
                            <div key={`accordion-section-${outerIndex}`}>
                                {ele?.card?.card?.itemCards?.length > 0 && (
                                    <>
                                        <div className="accordion-header" onClick={() => toggleAccordion(outerIndex)}>
                                            <h3 className="section-title">{ele.card.card.title} ({ele.card.card.itemCards?.length})</h3>
                                            <span className="toggle-icon">{isAccordionOpen ? '▲' : '▼'}</span>
                                        </div>
                                    </>
                                )}

                                {isAccordionOpen && ele?.card?.card?.itemCards?.map((item,innerIndex) => (
                                    <div key={`menu-item-${outerIndex}-${innerIndex}`} className="accordion-content">
                                        <div className="menu-item">
                                            <div className="item-info">
                                                <h4 className="item-name">{item?.card?.info?.name}</h4>
                                                <p className="item-price">
                                                    ₹{item?.card?.info?.price ? (item?.card?.info?.price / 100) : (item?.card?.info?.defaultPrice / 100)}
                                                    <span className="discount"></span>
                                                </p>
                                                <div className="item-rating">
                                                    <span className="rating-star">
                                                        {item?.card?.info?.ratings?.aggregatedRating?.rating ? `★ ${item?.card?.info?.ratings?.aggregatedRating?.rating}` : 'N/A'}
                                                    </span>
                                                    <span className="rating-count">
                                                        {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2 ? `(${item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})` : ''}
                                                    </span>
                                                </div>
                                                <p className="item-description">
                                                    {item?.card?.info?.description}
                                                </p>
                                            </div>
                                            <div className="item-actions">
                                                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item?.card?.info?.imageId}`} alt={item?.card?.info?.name} className="item-image" />
                                                <button className="add-button">ADD</button>
                                                {item?.card?.info?.isCustomisable && <p className="customisable-text">Customisable</p>}
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                ))}
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
}

export default Menu;