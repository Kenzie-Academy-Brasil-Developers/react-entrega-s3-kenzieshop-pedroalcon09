import { ADD_CART, RMV_CART } from "./actionTypes";

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CART:
      return action.product;

    case RMV_CART:
      return action.product;
    default:
      return state;
  }
}

export default cartReducer;
