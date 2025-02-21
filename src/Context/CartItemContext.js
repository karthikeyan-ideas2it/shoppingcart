import React, {createContext,useReducer,useContext} from "react";
import CartItemReducer from "../Reducer/CartItemReducer";
import userReducer from "../Reducer/userReducer";

 export const CartItemContext = createContext();

 
 const UserContext = createContext();

// Initial state of the cart
const initialCartState  = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0
};  

const initialUserDetailsState = { 
  userDetails:[] 
};

export const useItemCart = () => {
  return useContext(CartItemContext);
};

export const useUser = () =>{
return useContext(UserContext);
} 

 export const CartItemProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, initialUserDetailsState);
    const [state, dispatch] = useReducer(CartItemReducer, initialCartState);
    return (
      <CartItemContext.Provider value={{ state, dispatch }}>
         <UserContext.Provider value={{ userState, userDispatch }}>
         {children}
         </UserContext.Provider>
      </CartItemContext.Provider>
    );
  };

