import CardCart from "../CardCart/index";
import StyledCartList from "./style.js";
import CartResume from "../CartResume";
import { FaCompactDisc } from "react-icons/fa";
import { useSelector } from "react-redux";

function CartList() {
  const cart = useSelector((state) => state.cart);
  /* 
  const carrinho = useSelector((state) => state.cart);

  console.log(carrinho, "CARRINHO NO CART LIST"); */

  if (cart.length > 0) {
    return (
      <StyledCartList>
        {/* <div className="header-cart">
          <h2 className="produto">Produto</h2>
          <h2 className="preco">Preco</h2>
        </div> */}
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
