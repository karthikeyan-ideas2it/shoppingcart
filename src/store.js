import { configureStore } from '@reduxjs/toolkit';
import CartItemReducer from '../src/Reducer/CartItemReducer';


const store = configureStore({
  reducer: {
    cartitms: CartItemReducer
  },
});

export default store;