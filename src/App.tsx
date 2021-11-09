import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { Pokemon } from "./pages/Pokemon";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pokemon" component={Pokemon} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
