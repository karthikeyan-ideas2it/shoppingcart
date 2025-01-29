import React, { useState } from 'react';
import './ShoppingCart.scss';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 20.00, quantity: 1, image: 'https://designmodo.static.domains/shopping-cart/item-3.png' },
    { id: 2, name: 'Product 2', price: 35.00, quantity: 1, image: 'https://designmodo.static.domains/shopping-cart/item-1.png' },
]);

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>Price: ${item.price.toFixed(2)}</p>
              <div className="quantity">
                <label>Quantity: </label>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                />
              </div>
            </div>
            <button className="remove-item" onClick={() => handleRemoveItem(item.id)}>Remove</button>
            
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <p>Total Items: {cartItems.length}</p>
        <p>Total Price: ${calculateTotalPrice()}</p>
        <button className="checkout-btn">Checkout</button>
        <button className="btn-secondary" >Reset</button>
      </div>
    </div>
  );
};

export default ShoppingCart;