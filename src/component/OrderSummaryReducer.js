import React from 'react';

const initialOrderSummaryState = {
    orderId: null,
    orderStatus: 'pending', 
    totalPrice: 0,
    itemsCount: 0,
    name:'',
    Address:'',
    payment:'Cash'
  };
// Initial state and reducer function
  
const orderSummaryReducer = (state, action) => {
  switch (action.type) {
    case 'UDATE_ALL_DETAILS':
      return {
        ...state,
        initialOrderSummaryState: action.payload
      };
      case 'DISPLAY_ORDER_DETAILS':
        return {
            ...state,
            initialOrderSummaryState:state.initialOrderSummaryState,
          };
    default:
      return state;
  }
};

export default orderSummaryReducer;