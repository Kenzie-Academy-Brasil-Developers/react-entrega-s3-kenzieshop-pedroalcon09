import StyledCardCart from "./style.js";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

function CardCart({ product }) {
  const { name, band, price, img, id } = product;

  const { removeFromCart } = useContext(CartContext);

  return (
    <li key={id}>
      <StyledCardCart>
        <div className="img-container">
          <img src={img} alt={name} />
        </div>
        <div className="info-container">
          <h3>
            {name} - {band}
          </h3>
          <span>R$ {price.toString().replace(".", ",")}</span>
          <button
            onClick={() => {
              removeFromCart(product);
              toast.success("Produto removido com sucesso!");
            }}
          >
            <FaTrash />
          </button>
        </div>
      </StyledCardCart>
    </li>
  );
}

export default CardCart;
