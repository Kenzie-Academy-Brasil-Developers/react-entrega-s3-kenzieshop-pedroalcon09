import StyledCardVitrine from "./style";
import { useDispatch } from "react-redux";
import { addToCartThunk } from "../../store/modules/cart/thunk";

function CardVitrine({ product }) {
  const { name, band, price, img, year, id } = product;

  const dispatch = useDispatch();

  return (
    <li key={id}>
      <StyledCardVitrine>
        <div className="img-container">
          <img src={img} alt={name} />
        </div>
        <h3>{name}</h3>
        <h5>{band}</h5>
        <h6>{year}</h6>
        <span>R$ {price.toString().replace(".", ",")}</span>
        <button
          onClick={() => {
            dispatch(addToCartThunk(product));
          }}
        >
          Adicionar ao carrinho
        </button>
      </StyledCardVitrine>
    </li>
  );
}

export default CardVitrine;
