import React, {useState} from 'react'

function SearchBar({resturantData,setfilteredRestaurant}) {

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
            const topResturrant = resturantData.filter((ele) => {
                if (ele.info.avgRating > 4.4) {
                    return ele;
                };
            });
            setfilteredRestaurant(topResturrant);
        }
        else {
            setfilteredRestaurant(resturantData);
        }
    }

    return (
        <div className="pb-5 flex">
            <input type="text" placeholder="Search our favourite" className="w-full border-solid" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
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