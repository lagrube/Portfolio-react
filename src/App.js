import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import "./styles/styles.scss";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import {
  Project1,
  Project2,
  Project3,
  Project4,
  Project5,
} from "./pages/Project";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <AnimatePresence>
      <BrowserRouter>
        <Switch>
          <Route path="/portfolio-deploy" exact component={Home} />
          <Route path="/portfolio-deploy/projet-1" component={Project1} />
          <Route path="/portfolio-deploy/projet-2" component={Project2} />
          <Route path="/portfolio-deploy/projet-3" component={Project3} />
          <Route path="/portfolio-deploy/projet-4" component={Project4} />
          <Route path="/portfolio-deploy/projet-5" component={Project5} />
          <Route path="/portfolio-deploy/contact" component={Contact} />
          <Redirect to="/portfolio-deploy" />
        </Switch>
      </BrowserRouter>
    </AnimatePresence>
  );
};

export default App;
