import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { Header } from "./components/Header"
import { Pokemon } from "./pages/Pokemon";
import { Button } from "./components/Button";

function App() {
  return (
    <>
      <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pokemon" component={Pokemon} />
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
