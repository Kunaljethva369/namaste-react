import React,{ useEffect,useState } from "react";
import data from '../data.json';
import RestaurantCard from "./ResturantCard";

const MainLayout = () => {
    const [resturantData,setResturantData] = useState(data);
    const handleTop = () => {
        const topResturrant = resturantData.filter((ele) => {
            if (ele.info.avgRating > 4.4) {
                return ele;
            };
        })
        setResturantData(topResturrant);
    }

    return (
        <>
            <div className="main">
                <div className="search-container">
                    <input type="text" placeholder="Search our favourite" />
                    <button>Search</button>
                </div>
                <button style={{ marginTop: "20px",cursor: "p" }} onClick={handleTop}>Top Rated</button>
                <div className="card-container">
                    {
                        resturantData?.map((resturant) => (
                            <RestaurantCard key={resturant.info.id} resData={resturant} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default MainLayout;