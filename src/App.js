import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//Components
import Home from "./pages/home/home";
import ProductsDetails from "./pages/productsDetails/productsDetails";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/details/:id" component={ProductsDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
