import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//Components
import Home from "./pages/home/home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
