import React from 'react';
import './MenuAccordion.css';
import RestaurantHeader from './RestaurantHeader';

function Menu({ individualRestaurant }) {
    let mobdesk = 0;
    window.innerWidth < 767 ? mobdesk = 5 : mobdesk = 4;
    const menu = individualRestaurant?.data?.cards[mobdesk]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((ele) => {
        if (ele?.card?.card?.['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") {
            return ele;
        }
    });

    return (
        <>
            <h2 className='menucenter'>Menu</h2>
            <div className="menu-accordion">
                {
                    menu.map((category)=>(
                        <RestaurantHeader key={category?.card?.card?.title} category={category}/>
                    ))
                }
            </div>
        </>
    );
}

export default Menu;