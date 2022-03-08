import StyledCardVitrine from "./style";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";
import { toast } from "react-toastify";

function CardVitrine({ product }) {
  const { name, band, price, img, year, id } = product;

  const { addToCart } = useContext(CartContext);

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
            addToCart(product);
            toast.success("Produto adicionado com sucesso!");
          }}
        >
          Adicionar ao carrinho
        </button>
      </StyledCardVitrine>
    </li>
  );
}

export default CardVitrine;
