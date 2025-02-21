import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss'; 

// Modal component
const Modal = ({ product, onClose }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
      <div className="card">
      <img src={product.image} alt={product.name} className="card-img-top img-fluid" 
       style={{ maxWidth: '110px', height: '100px' }} 
       />
      <div className="card-body"  style={{ height: '195px' }} >
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p><strong>Price: </strong>${product.price}</p>
      </div>
    </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById('modal-root') // Targeting a different DOM node
  );
};

export default Modal;