import { ADD_CART, RMV_CART } from "./actionTypes";

export function addToCart(product) {
  return { type: ADD_CART, product };
}

export function removeFromCart(product) {
  return { type: RMV_CART, product };
}
