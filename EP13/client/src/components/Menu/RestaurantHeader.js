import React,{ useState } from 'react'
import ItemList from './ItemList';

function RestaurantHeader({ category }) {
    const [showItem,setShowItem] = useState(true);

    return (
        <div className='accordian-container'>
            <div className='accordion-header' onClick={() => setShowItem(!showItem)}>
                <h3 className="section-title">{category?.card?.card?.title} ({category?.card?.card?.itemCards?.length})</h3>
                <span className="toggle-icon">{showItem ? '▲' : '▼'}</span>
            </div>
            {showItem && <ItemList data={category?.card?.card?.itemCards} />}   
        </div>
    )
}

export default RestaurantHeader;