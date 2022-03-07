import Routes from "./routes/index";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./style/global";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Routes />
    </>
  );
}

export default App;
