import { useEffect } from 'react';
import './CartItem.css';
import EmptyCart from '../EmptyCart/EmptyCart';
import { useDispatch,useSelector } from 'react-redux';
import { addItem,removeItem,updateGrandTotal } from '../../Slice/cartSlice';
import { clearCart } from "../../Slice/cartSlice";
import Checkout from "../Checkout/Checkout";

const CartItem = () => {
  const Item = useSelector((store) => store.cart.items);
  const grandTotal = useSelector((store) => store.cart.grandTotal);
  const dispatch = useDispatch();
  useEffect(() => {
    const total = Item.reduce((sum,item) => {
      const itemPrice = item[0]?.card?.info?.price || item[0]?.card?.info?.defaultPrice;
      return sum + (itemPrice / 100) * (item.quantity || 1);
    },0);

    dispatch(updateGrandTotal(total));
  },[Item,dispatch]);


  return (
    <div className="cart-container">
      {
        Item.length > 0 ?
          <>
            <div className='your-cart-container'>
              <h3 className='your-cart'>Your Cart</h3>
              <button onClick={() => dispatch(clearCart())}>Clear Car</button>
            </div>
            {Item.map(function (ele) {
              return (
                <div className="cart-item" key={ele.id}>
                  {
                    ele[0]?.card?.info?.imageId == undefined ?
                      <img
                        src={`https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg`}
                        alt="Mens Casual Premium Slim Fit T-Shirts"
                        className="product-image"
                      />
                      :
                      <img
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${ele[0]?.card?.info?.imageId}`}
                        alt="Mens Casual Premium Slim Fit T-Shirts"
                        className="product-image"
                      />
                  }
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
            <Checkout />
          </>
          : <EmptyCart />
      }
    </div>
  );
};

export default CartItem;
