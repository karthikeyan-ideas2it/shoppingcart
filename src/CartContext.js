import React, {createContext,useContext,useState} from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
  
    // Add item to the cart
    const addToCart = (product) => {
        console.log(product);
      setCart((prevCart) => [...prevCart, product]);
    };
  
    // Remove item from the cart
    const removeFromCart = (productId) => {
      setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
    };
  
    return (
      <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
        {children}
      </CartContext.Provider>
    );
  };
