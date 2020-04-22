import React from "react";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./Containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./Containers/Checkout/Checkout";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout>
        {/*<Route path="/" exact component={BurgerBuilder} /> 
        <Route path="/checkout" component={Checkout} />
        The above method is also an option, but im using Switch and change the "/" route in order, so it wont be always rendered as a prefix standard*/}
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/" exact component={BurgerBuilder} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
