import React, { useState,useReducer } from 'react';
import './CheckOut.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../Context/CartItemContext';
import orderSummaryReducer from '../OrderSummaryReducer';

const CheckOut = ({ state, dispatch }) => {
    
  const { userState, userDispatch } = useUser();
  
  const [formData, setFormData] = useState({ name: '', address: '', payment: '' });
  const [userName, setUserName] = useState(userState.user ? userState.user.name : '');
  const [email, setEmail] = useState(userState.user ? userState.user.email : '');
  const [address, setaddress] = useState(userState.user ? userState.user.address : '');

  
  const setUserDetails = () => {
    userDispatch({
        type: 'SET_USER',
        payload: { name: userName, email: email,address:address },
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserDetails();
  
  };

const navigate = useNavigate();
  const OrderSummary = () => {
   navigate(`/OrderSummary`);
  };

  return (
    <div className="form-container">
      <h2>Delivery Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label htmlFor="email">Name</label>
          <input type="text" name="Name" value={userName} onChange={(e) => setUserName(e.target.value)}  required />
        </div>
        <div className="form-group">
        <label htmlFor="email">Email</label>
          <input type="text" name="Email" value={email}   onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
        <label htmlFor="email">Address</label>
          <input type="text" name="address" value={address} onChange={(e) => setaddress(e.target.value)} required />
        </div>
        <button type="submit" className="submit-button" onClick={OrderSummary}>Confirm Order</button>
      </form>
    </div>
  );
};

export default CheckOut;