// Libraries
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./Home";

import { ContainerVertical, ContainerHorizontal } from "@duik/it";

// components
import Header from "./components/Header";
import TopBarMobile from "./components/TopBarMobile";
import Navigation from "./components/Navigation";
import NavigationMobile from "./components/NavigationMobile";

export const Analytics = () => {
  return (
    <ContainerHorizontal>
      <Navigation />
      <ContainerVertical>
        <TopBarMobile />
        <NavigationMobile />
        <Header />
        <Switch>
          <Route component={Home} exact path="/analytics" strict />
          <Redirect to="/analytics" />
        </Switch>
      </ContainerVertical>
    </ContainerHorizontal>
  );
};

export default Analytics;
