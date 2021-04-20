import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import "./styles/styles.scss";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Project1, Project2, Project3, Project4 } from "./pages/Project";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <AnimatePresence>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projet-1" component={Project1} />
          <Route path="/projet-2" component={Project2} />
          <Route path="/projet-3" component={Project3} />
          <Route path="/projet-4" component={Project4} />
          <Route path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </AnimatePresence>
  );
};

export default App;
