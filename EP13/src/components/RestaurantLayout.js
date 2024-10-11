import React,{ useState,useEffect } from 'react';
import RestaurantMenu from './RestaurantMenu/RestaurantMenu';
import Deals from './Deals/Deals';
import Menu from './Menu/Menu';
import RestaurantShimmer from './RestaurantShimmer/RestaurantShimmer';

function RestaurantLayout() {
    const [individualRestaurant,setIndividualRestaurant] = useState();
    
    useEffect(() => {
        const url = window.location.href;
        const regex = /[/&]resid=([^&]*)/;
        const match = url.match(regex);
        const resid = match ? match[1] : null;
        fetchRestaurant(resid);
    },[]);

    let mobdesk = 0;
    window.innerWidth < 767 ? mobdesk = 5 : mobdesk = 4;
    const fetchRestaurant = async (resId) => {
        // const data = await fetch(`https://proxy.cors.sh/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
        const response = await data.json();
        setIndividualRestaurant(response);
    }

    return (
        <>
            {
                individualRestaurant?.data?.cards[mobdesk]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.length > 0 ?
                    <>
                        <RestaurantMenu individualRestaurant={individualRestaurant} setIndividualRestaurant={setIndividualRestaurant} />
                        <Deals individualRestaurant={individualRestaurant} />
                        <Menu individualRestaurant={individualRestaurant} />
                    </> : <RestaurantShimmer />
            }
        </>
    )
}

export default RestaurantLayout;