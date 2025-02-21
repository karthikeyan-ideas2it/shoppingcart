import React from "react"


const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const UPDATE_QUANTITY = "UPDATE_QUANTITY";
const GET_CARTITEM_DETAILS = "GET_CARTITEM_DETAILS";
const CLEAR_CARTITEM_DETAILS = "CLEAR_CARTITEM_DETAILS";


const CartItemReducer=(state,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            const existingItem = state.cartItems.find((item)=> item.id===action.payload.id);
            if(existingItem){
                return{
                    ...state,
                    cartItems:state.cartItems.map(
                      (item)=> item.id===action.payload.id? {...item,quantity:item.quantity+1}:item
                    )
                };
            }
            else{
                return{
                    ...state,
                    cartItems:[...state.cartItems,{...action.payload, quantity: 1}]
                };
            }
        case REMOVE_FROM_CART:
                return {
                  ...state,
                  cartItems: state.cartItems.filter((item) => item.id !== action.payload.id),
                };
        case UPDATE_QUANTITY:
                return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                    item.id === action.payload.id
                    ? { ...item, quantity: action.payload.quantity }
                    : item
                ),
            };
        case GET_CARTITEM_DETAILS:
                return {
                    ...state,
                    cartItems: state.cartItems,
                };
        case CLEAR_CARTITEM_DETAILS:
                    return {
                        ...state,
                        cartItems: [],
                    };
  
      default:
        return state;
    }
}

export default CartItemReducer;
