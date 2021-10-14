/* eslint-disable max-len */
import React from "react";
import classnames from "classnames";
import { Route, Switch, Redirect } from "react-router-dom";

import { ContainerVertical, ContainerHorizontal } from "@duik/it";

import { UiContext } from "../../@context";

import Navigation from "./components/Navigation";
import cls from "./buildings.module.scss";

// // pages
import PageBuildings from "./Buildings";
import PageDashboard from "./Dashboard";
import PagePerformance from "./Performance";
import PageConversations from "./Conversations";
import PageUserSettings from "./UserSettings";
import PageUsers from "./Users";

const BuildingsDashboard = () => {
  const uiContext = React.useContext(UiContext);
  return (
    <ContainerHorizontal>
      <Navigation
        className={classnames(cls.buildingsMenuAnimate, {
          [cls.buildingsMenuOpen]: uiContext.menu.isVisible
        })}
      />
      <ContainerVertical
        className={classnames(cls.buildingsMenuAnimate, {
          [cls.buildingsMenuOpen]: uiContext.menu.isVisible
        })}
      >
        <Switch>
          <Route component={PageBuildings} path="/buildings/listing" />
          <Route
            component={PageDashboard}
            exact
            path="/buildings/dashboard"
            strict
          />

          <Route
            component={PageConversations}
            path="/buildings/conversations/:conversation_id"
          />

          <Route
            component={PageConversations}
            path="/buildings/conversations"
          />

          <Route component={PageUsers} path="/buildings/users/:user_id" />
          <Route component={PageUsers} path="/buildings/users" />
          <Route component={PageUserSettings} path="/buildings/user/settings" />
          <Route component={PagePerformance} path="/buildings/performance" />
          <Redirect to="/buildings/dashboard" />
        </Switch>
      </ContainerVertical>
    </ContainerHorizontal>
  );
};

export default BuildingsDashboard;
