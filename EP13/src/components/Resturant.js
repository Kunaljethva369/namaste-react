import React from 'react';
import RestaurantCard from "./ResturantCard";

function Resturant(resturantData) {
    return (
        <>
            {
                resturantData?.resturantData?.map((resturant) => (
                    <RestaurantCard key={resturant.info.id} resData={resturant} />
                ))
            }
        </>
    )
}

export default Resturant;