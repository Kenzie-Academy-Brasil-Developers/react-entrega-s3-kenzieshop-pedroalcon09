import { createContext, useState } from "react";
import estoque from "./estoque";

export const CatalogueContext = createContext([]);

export function CatalogueProvider({ children }) {
  /* Como nesse exercicio so precisamos adicionar e remover do carrinho,
    esse provider so define o state para o estoque pre definido e retorna o context */
  const [catalogue, setCatalogue] = useState(estoque);

  return (
    <CatalogueContext.Provider value={{ catalogue }}>
      {children}
    </CatalogueContext.Provider>
  );
}
