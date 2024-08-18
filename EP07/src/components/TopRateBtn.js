import React from "react";

const TopRateBtn = (data,setresturantData) => {
    console.log(setresturantData);
    const handleTopData = ()=>{
        data?.resObj?.map(function(el){
            if(el.info.avgRating > 4.5){
                data.setresturantData(el);
            }
        })
    }
    return <button style={{marginTop:"20px"}} onClick={handleTopData}>Top Rated</button>
}

export default TopRateBtn