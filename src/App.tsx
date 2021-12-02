import React from "react";
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";

import { Home } from "./pages/Home";
import { Header } from "./components/Header"
import { Pokemon } from "./pages/Pokemon";
const BASE_URL = import.meta.env.VITE_PUBLIC_URL as string

function App() {
  return (
    <>
      <Header />
        <BrowserRouter basename={BASE_URL}>
          <HashRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/pokemon" component={Pokemon} />
            </Switch>
          </HashRouter>
      </BrowserRouter>
    </>
  );
}

export default App;
