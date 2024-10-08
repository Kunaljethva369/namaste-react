import React,{ useEffect,useState } from "react";
import Resturant from "./Resturant";
import Shimmer from "./Shimmer";

const MainLayout = () => {
    const [resturantData,setResturantData] = useState([]);
    const [filteredRestaurant,setfilteredRestaurant] = useState([]);
    const [loading,setLoading] = useState(false);
    const [searchText,setSearchText] = useState("");
    const handleTop = () => {
        const topResturrant = resturantData.filter((ele) => {
            if (ele.info.avgRating > 4.4) {
                return ele;
            };
        });
        setfilteredRestaurant(topResturrant);
    }

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        setLoading(true);
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const response = await data.json();
        setResturantData(response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setLoading(false);
    }



    const handleSearch = () => {
        const searchTextLower = searchText.toLowerCase();
        const searchedResturant = resturantData.filter((ele) => {
           return ele.info.name.toLowerCase().includes(searchTextLower)
        });
        setfilteredRestaurant(searchedResturant);
    }

    return (
        <>
            <div className="main">
                <div className="search-container">
                    <input type="text" placeholder="Search our favourite" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button onClick={handleSearch}>Search</button>
                    <button style={{ cursor: "pointer" }} onClick={handleTop}>Top Rated</button>
                </div>
                <div className="card-container">
                    {
                        loading ? <Shimmer /> : <Resturant resturantData={filteredRestaurant} />
                    }
                </div>
            </div>
        </>
    )
}

export default MainLayout;