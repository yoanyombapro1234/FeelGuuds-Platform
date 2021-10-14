import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./Home";
import DocumentationPage from "./DocumentationPage";

export const Knowledge = () => {
  return (
    <Switch>
      <Route component={Home} exact path="/knowledge" strict />
      <Route component={DocumentationPage} exact path="/knowledge/doc" strict />
      <Redirect to="/knowledge" />
    </Switch>
  );
};
