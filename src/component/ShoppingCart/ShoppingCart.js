import React, { useContext, useEffect, useState,useMemo } from 'react';
import './ShoppingCart.scss';
import { useCart } from '../../CartContext';
import { useNavigate } from 'react-router-dom';
import CheckOut from '../CheckOut/CheckOut';
import { CartItemContext } from '../../Context/CartItemContext';
import { useItemCart } from '../../Context/CartItemContext';

const ShoppingCart = () => {

  const [isCheckout, setIsCheckout] = useState(false);

 // const { cart, removeFromCart } = useCart();

  const navigate = useNavigate();

  const gotoCheckOut = () => {
    console.log("test");
    setIsCheckout(true);
    navigate(`/CheckOut`);
  };
  const  {state,dispatch} =useItemCart();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
   
    setCartItems(state.cartItems);
    console.log(state.cartItems);
  },[state.cartItems]);
 

const removeitemFromCart = (id) => {
  dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
};

const updateQuantity = (id, quantity) => {
  dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
};

const handleRemoveItem = (id) => {
  setCartItems(cartItems.filter(item => item.id !== id));
};

const handleQuantityChange = (id, newQuantity) => {
  setCartItems(cartItems.map(item =>
    item.id === id ? { ...item, quantity: newQuantity } : item
  ));
};


const calculateTotalPrice = () => {
  return  cartItems.reduce((acc, item) => acc + item.price * item.quantity , 0).toFixed(2);
}
const TotalItems=()=>{
  return  cartItems.reduce((acc, item) => acc +  item.quantity , 0);
}

const handleResetCart = () => {
  dispatch({ type: "CLEAR_CARTITEM_DETAILS"});
};
  return (
    <div className="cart-container">
      {cartItems.length === 0 ? (
         <h6>Your Shopping Cart is Empty</h6>
      ) : (
      <div className="cart-items">
        {cartItems.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="item-details">
              <h3>{item.title}</h3>
              <p>Price: ${item.price.toFixed(2)}</p>
              <div className="quantity">
                <label>Quantity: </label>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                /> <button className="remove-item"  onClick={() => removeitemFromCart(item.id)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>)}
      <div className="cart-summary">
        {cartItems.length > 0 && !isCheckout && (
          <div>
              <p>Total Items: {TotalItems()}</p>
              <p>Total Price: ${calculateTotalPrice()}</p>
              <div className="row">
                  <div className="col-6">
                    <button className="checkout-btn"  onClick={gotoCheckOut}>Checkout</button>
                  </div>
                  <div className="col-6">
                    <button className="checkout-btn" onClick={handleResetCart} >Reset</button>
                  </div>
              </div>
          </div>
       
      )}
      </div>
    </div>
  );
};

export default ShoppingCart;