import CardCart from "../CardCart/index";
import StyledCartList from "./style.js";
import CartResume from "../CartResume";
import { FaCompactDisc } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

function CartList() {
  const { cart } = useContext(CartContext);

  if (cart.length > 0) {
    return (
      <StyledCartList>
        <ul>
          {cart.map((product) => {
            return <CardCart key={product.id} product={product} />;
          })}
        </ul>
        <CartResume />
      </StyledCartList>
    );
  } else {
    return (
      <StyledCartList>
        <div className="empty-cart">
          <h1>Adicione algo ao seu carrinho...</h1>

          <span className="disc-icon">
            <FaCompactDisc />
          </span>
        </div>
      </StyledCartList>
    );
  }
}

export default CartList;
