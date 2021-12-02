import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { Header } from "./components/Header"
import { Pokemon } from "./pages/Pokemon";


function App() {
  return (
    <>
      <Header />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pokemon" component={Pokemon} />
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
