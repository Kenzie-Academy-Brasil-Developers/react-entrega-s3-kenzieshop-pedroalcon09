import { Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Vitrine from "../components/Vitrine";
import CartList from "../components/CartList";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Header />
        <Vitrine />
      </Route>
      <Route exact path="/cart">
        <Header />
        <CartList />
      </Route>
    </Switch>
  );
}

export default Routes;
