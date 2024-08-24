import React from 'react';
import './CartItem.css';
import EmptyCart from '../EmptyCart/EmptyCart';
import { useDispatch,useSelector } from 'react-redux';
import { addItem,removeItem } from '../../Slice/cartSlice';

const CartItem = () => {
  const Item = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const grandTotal = Item?.reduce((total, item) => {
    const itemPrice = item[0]?.card?.info?.price || item[0]?.card?.info?.defaultPrice;
    return total + (itemPrice / 100) * (item.quantity || 1);
  }, 0);
  return (
    <div className="cart-container">
      {
        Item.length > 0 ?
          <>
            {Item.map(function (ele) {
              return (
                <div className="cart-item">
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${ele[0]?.card?.info?.imageId}`}
                    alt="Mens Casual Premium Slim Fit T-Shirts"
                    className="product-image"
                  />
                  <span className="product-name">{ele[0]?.card?.info?.name}</span>
                  <span className="product-price">₹{ele[0]?.card?.info?.price ? (ele[0]?.card?.info?.price / 100) : (ele[0]?.card?.info?.defaultPrice / 100)}</span>
                  <div className="quantity-control">
                    <button className="quantity-btn" onClick={() => { dispatch(removeItem(ele[0]?.card?.info?.id)) }}>-</button>
                    <span className="quantity">{ele.quantity}</span>
                    <button className="quantity-btn" onClick={() => { dispatch(addItem(ele)) }}>+</button>
                  </div>
                  <span className="product-total">₹{ele[0]?.card?.info?.price ? ((ele[0]?.card?.info?.price / 100) * ele?.quantity) : ((ele[0]?.card?.info?.defaultPrice / 100) * ele?.quantity)}</span>
                </div>
              )
            })}
            <div className="cart-total">
              <span>Grand Total:-  ₹{grandTotal.toFixed(2)}</span>
            </div>
          </>
          : <EmptyCart />
      }
    </div>
  );
};

export default CartItem;
