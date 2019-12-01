import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Hero from "../pages/Hero";
import Battle from "../pages/Battle";
import Results from "../pages/Results";

export default () => (
  <Switch>
    <Route path="/heroes/:id" component={Hero} />
    <Route path="/battle" component={Battle} />
    <Route path="/results" component={Results} />
    <Route path="/" component={Home} />
  </Switch>
);
