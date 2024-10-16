import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../Slice/cartSlice';

function ItemList({ data }) {
    const dispatch = useDispatch();

    const handleAdd = (ele) => {
        const AddedItem = data.filter((el)=>{
            if(el?.card?.info.id == ele){
                return el;
            }
        })
        dispatch(addItem(AddedItem));
    }
    return (
        <div>
            {
                data.map(function (ele) {
                    return (
                        <div className="accordion-content" key={ele?.card?.info?.id}>
                            <div className="menu-item">
                                <div className="item-info">
                                    <h4 className="item-name">{ele?.card?.info.name}</h4>
                                    <p className="item-price">
                                        ₹{ele?.card?.info.price ? Math.round((ele?.card?.info.price / 100)) : Math.round((ele?.card?.info.defaultPrice / 100))}
                                        <span className="discount"></span>
                                    </p>
                                    <div className="item-rating">
                                        <span className="rating-star">
                                            {ele?.card?.info.ratings?.aggregatedRating?.rating ? `★ ${ele?.card?.info.ratings?.aggregatedRating?.rating}` : 'N/A'}
                                        </span>
                                        <span className="rating-count">
                                            {ele?.card?.info.ratings?.aggregatedRating?.ratingCountV2 ? `(${ele?.card?.info.ratings?.aggregatedRating?.ratingCountV2})` : ''}
                                        </span>
                                    </div>
                                    <p className="item-description">
                                        {ele?.card?.info.description}
                                    </p>
                                </div>
                                <div className="item-actions">
                                    {
                                        ele?.card?.info.imageId ? <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${ele?.card?.info.imageId}`} alt={ele?.card?.info.name} className="item-image" /> : ''
                                    }
                                    <button className="add-button" onClick={() => handleAdd(ele?.card?.info.id)}>ADD</button>
                                    {ele?.card?.info.isCustomisable && <p className="customisable-text">Customisable</p>}
                                </div>
                            </div>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ItemList;