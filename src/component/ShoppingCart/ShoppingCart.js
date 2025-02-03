import React, { useState } from 'react';
import './ShoppingCart.scss';
import { useCart } from '../../CartContext';

const ShoppingCart = () => {
  const { cart, removeFromCart } = useCart();

  
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 20.00, quantity: 1, image: 'https://designmodo.static.domains/shopping-cart/item-3.png' },
    { id: 2, name: 'Product 2', price: 35.00, quantity: 1, image: 'https://designmodo.static.domains/shopping-cart/item-1.png' },
]);

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    console.log()
    setCartItems(cart.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const calculateTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price , 0).toFixed(2);
  };

  const handleResetCart = () => {
    setCartItems([]); // Set the cart items to an empty array
  };
  return (
    <div className="cart-container">
      {cart.length === 0 ? (
         <h1>Your Shopping Cart is Empty</h1>
      ) : (
      <div className="cart-items">
        {cart.map(item => (
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
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                />
              </div>
              <button className="remove-item"  onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>)}
      <div className="cart-summary">
        <p>Total Items: {cart.length}</p>
        <p>Total Price: ${calculateTotalPrice()}</p>
        <button className="checkout-btn">Checkout</button>
        <button className="btn-secondary" onClick={handleResetCart} >Reset</button>
      </div>
    </div>
  );
};

export default ShoppingCart;