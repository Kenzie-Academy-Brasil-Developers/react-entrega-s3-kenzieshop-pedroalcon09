import StyledCardCart from "./style.js";
import { FaTrash } from "react-icons/fa";
import { removeFromCartThunk } from "../../store/modules/cart/thunk.js";
import { useDispatch } from "react-redux";

function CardCart({ product }) {
  const { name, band, price, img, id } = product;

  const dispatch = useDispatch();

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
              dispatch(removeFromCartThunk(product));
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
