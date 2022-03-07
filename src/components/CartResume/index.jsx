import { FaShoppingBag } from "react-icons/fa";
import StyledCartResume from "./style.js";
import { useSelector } from "react-redux";

function CartResume() {
  const cart = useSelector((state) => state.cart);

  if (cart.length > 0) {
    return (
      <StyledCartResume>
        <h1>Resumo do pedido</h1>
        <div className="info-prod">
          <section>{cart.length} Produtos</section>
          <span>
            R$
            {cart.length > 1
              ? cart
                  .reduce((acc, curr, index) => {
                    if (index === 1) {
                      return acc.price + curr.price;
                    } else {
                      return acc + curr.price;
                    }
                  })
                  .toString()
                  .replace(".", ",")
              : cart[0].price.toString().replace(".", ",")}
          </span>
        </div>
        <button>FINALIZAR O PEDIDO</button>
      </StyledCartResume>
    );
  } else {
    return (
      <StyledCartResume>
        <h1>Carrinho Vazio</h1>
        <div className="info-prod">
          <section>Nenhum produto</section>
          <FaShoppingBag />
        </div>
      </StyledCartResume>
    );
  }
}

export default CartResume;
