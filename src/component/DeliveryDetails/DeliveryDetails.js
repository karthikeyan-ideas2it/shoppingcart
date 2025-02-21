import React, { useState } from 'react';

const name = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        Address1: '',
        city: '',
        pincode:''
      });
    
      // State for validation errors
      const [errors, setErrors] = useState({
        name: '',
        Address1: '',
        city: '',
        pincode:''
      });

      const validateForm = () => {
        const errors = {};
        if (!formData.name) {
          errors.name = 'Item name is required';
        }
        if (!formData.Address1 || isNaN(formData.Address1)) {
          errors.Address1 = 'Address Required';
        }
        if (!formData.pincode || isNaN(formData.pincode)) {
          errors.quantity = 'pincode must be a valid number';
        }
        setErrors(errors);
        return Object.keys(errors).length === 0; // returns true if no errors
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          setCartItems([
            ...cartItems,
            {
              id: Date.now(),
              name: formData.name,
              price: parseFloat(formData.price),
              quantity: parseInt(formData.quantity),
            },
          ]);
          setFormData({ name: '', price: '', quantity: '' }); // Reset form fields
        }
      };

  return (
    <div>
      
    </div>
  )
};

export default name;
