import StyledVitrine from "./style.js";
import CardVitrine from "../CardVitrine/index";
import { useSelector } from "react-redux";

function Vitrine() {
  const estoque = useSelector((state) => state.products);

  return (
    <StyledVitrine>
      <ul>
        {estoque.map((product) => {
          return <CardVitrine key={product.id} product={product} />;
        })}
      </ul>
    </StyledVitrine>
  );
}

export default Vitrine;
