import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { ContainerVertical, ContainerHorizontal } from '@duik/it';

import PageAnimations from './Animations';

import Filters from './components/Filters';
import TopBar from './components/TopBar';
import NavigationLeft from './components/NavigationLeft';

export const Tutorials = () => (
  <ContainerVertical>
    <TopBar />
    <NavigationLeft />
    <ContainerHorizontal>
      <Filters />
      <Switch>
        <Route
          component={PageAnimations}
          exact
          path="/tutorials/animations"
          strict
        />
        <Redirect to="/tutorials/animations" />
      </Switch>
    </ContainerHorizontal>
  </ContainerVertical>
);

export default Tutorials;
