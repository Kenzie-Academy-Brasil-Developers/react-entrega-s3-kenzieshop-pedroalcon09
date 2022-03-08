import StyledVitrine from "./style.js";
import CardVitrine from "../CardVitrine/index";
import { useContext } from "react";

import { CatalogueContext } from "../../providers/catalogue";

function Vitrine() {
  const { catalogue } = useContext(CatalogueContext);

  return (
    <StyledVitrine>
      <ul>
        {catalogue.map((product) => {
          return <CardVitrine key={product.id} product={product} />;
        })}
      </ul>
    </StyledVitrine>
  );
}

export default Vitrine;
