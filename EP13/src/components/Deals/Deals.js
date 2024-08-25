import React from 'react';
import './Deals.css';

function Deals({individualRestaurant}) {
  return (
    <div className="deals-container">
      <h3 className="deals-title">Deals for you</h3>
      <div className="deals-list">
        {
          individualRestaurant?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers?.map((ele) => {
            return (
              <div className="deal-card" key={ele?.info?.restId}>
                <div className="deal-icon">
                  <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/${ele?.info?.offerLogo}`}/>
                </div>
                <div className="deal-content">
                  <p className="deal-title">{ele?.info?.header}</p>
                  <p className="deal-subtitle">{ele?.info?.description}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Deals