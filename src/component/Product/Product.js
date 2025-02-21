import React, {useContext,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { useCart } from '../../CartContext';

import CustomuseCart  from '../../Custom/CustomuseCart';

import { useItemCart } from '../../Context/CartItemContext';

import Modal from '../Modal/Modal';




const trimDescription = (text, maxLength = 50) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  };

const Product = React.memo(({ product }) => {

 // const { addToCart } = useCart();

 const [showModal, setShowModal] = useState(false);

  const { state,dispatch } = useItemCart();


  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
  };
  
  const productDetails = () => {
    console.log("hi");
    setShowModal(true); // Close the modal
  };

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product});
  };

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4 ">
    <div className="card">
      <img src={product.image} alt={product.name} className="card-img-top img-fluid" 
       style={{ maxWidth: '110px', height: '100px' }} 
       />
      <div className="card-body"  style={{ height: '195px' }} >
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{trimDescription(product.description)}</p>
        <p><strong>Price: </strong>${product.price}</p>
      </div>
      <button className="remove-item" onClick={productDetails}>Details</button><br/>
      <button className="remove-item" onClick={() => addToCart(product)}>Add to cart</button>
    </div>
    {showModal && (
        <Modal product={product} onClose={handleCloseModal} />
      )}
  </div>
  );
}, (prevProps, nextProps) => {
  // Only re-render if the id, name, price, or quantity changes
  return prevProps.product.id === nextProps.product.id &&
         prevProps.product.name === nextProps.product.name &&
         prevProps.product.price === nextProps.product.price &&
         prevProps.product.quantity === nextProps.product.quantity;
});

export default Product;