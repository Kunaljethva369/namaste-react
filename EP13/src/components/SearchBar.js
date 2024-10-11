import React,{ useState } from 'react'

function SearchBar({ resturantData,setfilteredRestaurant }) {

    const [searchText,setSearchText] = useState("");
    const [isChecked,setIsChecked] = useState(false);

    const handleSearch = () => {
        const searchTextLower = searchText.toLowerCase();
        const searchedResturant = resturantData.filter((ele) => {
            return ele.info.name.toLowerCase().includes(searchTextLower)
        });
        setfilteredRestaurant(searchedResturant);
    }

    const handleTop = () => {
        setIsChecked(!isChecked);
        if (!isChecked) {
            const maxRating = Math.max(...resturantData.map((ele) => ele.info.avgRating));

            const topRestaurant = resturantData.filter((ele) => ele.info.avgRating === maxRating);

            setfilteredRestaurant(topRestaurant);
        } else {
            setfilteredRestaurant(resturantData);
        }

    }

    return (
        <div className="search-container">
            <input type="text" placeholder="Search our favourite" className="input-search" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
            <label className="checkbox-label">
                <input type="checkbox" className="styled-checkbox" style={{ cursor: "pointer" }} checked={isChecked} onChange={handleTop} />
                <span className="custom-checkbox"></span>
                top restaurant
            </label>
        </div>
    )
}

export default SearchBar;