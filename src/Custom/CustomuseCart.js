import React,{useContext,createContext} from "react"

import { CartItemContext } from "../Context/CartItemContext";

const CustomuseCart = () => {
    return useContext(CartItemContext);
};

export default CustomuseCart;
