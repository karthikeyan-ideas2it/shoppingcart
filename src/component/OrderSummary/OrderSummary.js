import React, { useReducer,useEffect ,useState} from 'react';
import orderSummaryReducer from '../OrderSummaryReducer';
import { useItemCart } from '../../Context/CartItemContext';
import CartItemReducer from '../../Reducer/CartItemReducer';
//import { useSelector, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';

import { useUser } from '../../Context/CartItemContext';

import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {

const  {state,dispatch} =useItemCart();
const { userState, userDispatch } = useUser();

const navigate = useNavigate();

  const Back = () => {
    userDispatch({
        type: 'CLEAR_USER'
      });

      dispatch({ type: "CLEAR_CARTITEM_DETAILS"});

   navigate(`/`);
  };



  return (
    <div>
      <h1>Order Summary</h1>
       <div>
       <h2>Product Details</h2>
       {state.cartItems.map(item => (
          <div className="cart-item" key={item.id}>
            <div className="item-details">
              <p>{item.title}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
                <div className="quantity">
                <p>Quantity: {item.quantity}</p>
                </div>
            </div>
          </div>
        ))}
    </div>
    <div>
    <h2>User Details</h2>
      {userState.user ? (
        <div>
          <p>Name: {userState.user.name}</p>
          <p>Email: {userState.user.email}</p>
          <p>Address: {userState.user.address}</p>
          
        </div>
      ) : (
        <p>No user details set.</p>
      )}
    </div>
    <button type="submit" className="submit-button" onClick={Back}>Back to Home</button>
    </div>
  );
};

export default OrderSummary;