import { CgEnter, CgShoppingCart } from "react-icons/cg";
import { useHistory } from "react-router-dom";
import StyledHeader from "./style";
import { SiDiscogs } from "react-icons/si";

function Header() {
  const history = useHistory();

  return (
    <StyledHeader>
      <h1
        onClick={() => {
          history.push("/");
        }}
      >
        <i>
          <SiDiscogs />
        </i>
        DiscoKenzie
      </h1>

      <div className="header-buttons">
        <button
          onClick={() => {
            history.push("/cart");
          }}
          className="button-carrinho"
        >
          <CgShoppingCart className="cart-icon" />
          <p>Carrinho</p>
        </button>
        <button className="button-entrar">
          <CgEnter />
          Entrar
        </button>
      </div>
    </StyledHeader>
  );
}

export default Header;
