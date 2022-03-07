import { addToCart, removeFromCart } from "./actions";
import { toast } from "react-toastify";

export function addToCartThunk(product) {
  return (dispatch, getState) => {
    const { cart } = getState();

    if (
      !cart.find((elem) => {
        return elem.id === product.id;
      })
    ) {
      const updatedCart = [...cart, product];

      dispatch(addToCart(updatedCart));

      localStorage.setItem("cart", JSON.stringify(updatedCart));

      toast.success("Produto adicionado com sucesso!");
    }
  };
}

export function removeFromCartThunk(product) {
  return (dispatch) => {
    const cart = JSON.parse(localStorage.getItem("cart"));

    const updatedCart = cart.filter((elem) => {
      return elem.id !== product.id;
    });

    dispatch(removeFromCart(updatedCart));

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    toast.success("Produto removido com sucesso!");
  };
}
