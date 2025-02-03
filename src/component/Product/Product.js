import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from '../../CartContext';

const trimDescription = (text, maxLength = 50) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  };

const Product = ({ product }) => {

  const { addToCart } = useCart();

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4 ">
    <div className="card">
      <img src={product.image} alt={product.name} className="card-img-top img-fluid" 
       style={{ maxWidth: '110px', height: 'auto' }} // You can fix the size here
       />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{trimDescription(product.description)}</p>
        <p><strong>Price: </strong>${product.price}</p>
      </div>
      <button className="remove-item" onClick={() => addToCart(product)}>Addto cart</button>
    </div>
  </div>
  );
};

export default Product;