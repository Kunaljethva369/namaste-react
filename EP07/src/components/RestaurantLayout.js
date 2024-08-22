import React,{ useState } from 'react';
import RestaurantMenu from './RestaurantHeader/RestaurantMenu';
import Deals from '../components/Deals/Deals';
import Menu from '../components/Menu/Menu';

function RestaurantLayout() {

    const [individualRestaurant,setIndividualRestaurant] = useState();

    return (
        <>
            <RestaurantMenu individualRestaurant={individualRestaurant} setIndividualRestaurant={setIndividualRestaurant} />
            <Deals individualRestaurant={individualRestaurant} />
            <Menu individualRestaurant={individualRestaurant} />
        </>
    )
}

export default RestaurantLayout;