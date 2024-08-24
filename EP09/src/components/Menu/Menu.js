import React,{ useState } from 'react';
import './MenuAccordion.css';
import { useDispatch } from 'react-redux'
import { addItem } from '../../Slice/cartSlice';
import RestaurantHeader from './RestaurantHeader';

function Menu({ individualRestaurant }) {
    const menu = individualRestaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((ele) => {
        if (ele?.card?.card?.['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") {
            return ele;
        }
    });


    return (
        <>
            <h2 className='menucenter'>Menu</h2>
            <div className="menu-accordion">
                {
                    menu.map((category) => (
                        <RestaurantHeader category={category} />
                    ))
                }
            </div>
        </>
    );
}

export default Menu;