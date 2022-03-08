import Routes from "./routes/index";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./style/global";
import "react-toastify/dist/ReactToastify.css";
import { CatalogueProvider } from "./providers/catalogue";
import { CartProvider } from "./providers/cart";

function App() {
  return (
    <>
      <CatalogueProvider>
        <CartProvider>
          <GlobalStyle />
          <ToastContainer />
          <Routes />
        </CartProvider>
      </CatalogueProvider>
    </>
  );
}

export default App;
