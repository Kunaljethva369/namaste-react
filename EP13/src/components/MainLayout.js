import React,{ useEffect,useState } from "react";
import Resturant from "./Resturant";
import Shimmer from "./Shimmer";
import useOnlineStatus from '../utils/useOnlineStatus';
import SearchBar from "./searchBar";

const MainLayout = () => {
    const [resturantData,setResturantData] = useState([]);
    const [filteredRestaurant,setfilteredRestaurant] = useState([]);
    const [loading,setLoading] = useState(false);
    const [showError,setShowError] = useState(false);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await fetch('https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true');
            // const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true');
            const response = await data.json();
            let mobdesk = 0;
            window.innerWidth < 767 ? mobdesk = 2 : mobdesk = 1;
            setResturantData(response?.data?.cards[mobdesk]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setfilteredRestaurant(response?.data?.cards[mobdesk]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setLoading(false);
        }
        catch (err) {
            setLoading(false);
            setShowError(true);
        }
    }

    const checkIfUserIsOnline = useOnlineStatus();

    return (
        <>
            {
                checkIfUserIsOnline ? <div className="main">
                    <SearchBar resturantData={resturantData} setfilteredRestaurant={setfilteredRestaurant} />
                    <div className="card-container">
                        {
                            loading ? <Shimmer /> : <Resturant resturantData={filteredRestaurant} />
                        }

                    </div>
                    {
                        showError ?
                            <>
                                <h2 className="error">Network Error, please try again</h2>
                            </> : ''
                    }
                </div> : <h1 style={{ textAlign: "center",paddingTop: "150px" }}>Looks like your are not connect to Internet</h1>
            }
        </>
    )
}

export default MainLayout;