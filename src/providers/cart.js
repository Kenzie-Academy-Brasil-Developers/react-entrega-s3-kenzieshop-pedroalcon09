//Primeiro importamos o createContext e o useState
import { createContext, useState } from "react";

//Depois criamos o contexto do cart
export const CartContext = createContext([]);

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

//Entao criamos o provider em si
export function CartProvider({ children }) {
  //Primeiro criamos o state para armazenar o cart
  const [cart, setCart] = useState(initialState);

  //Agora criamos as funcoes de add e remover
  function addToCart(product) {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  function removeFromCart(product) {
    const updatedCart = cart.filter((item) => {
      return item.id !== product.id;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  //E por fim definimos a forma de retorno do provider
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
