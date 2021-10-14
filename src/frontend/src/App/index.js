/**
 * Here we put all root config, such as routing
 * If necessary, styles from the libraries should be put here as well
 */

import React from "react";

// styles
import "@duik/it/dist/styles.css";
import "@duik/icon/dist/styles.css";
import "@animated-burgers/burger-squeeze/dist/styles.css";
import "./app.module.scss";

import { UiContext } from "../@context";

import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { Buildings } from "../Buildings";
import { Analytics } from "../Analytics";
import { AppDirectory } from "../AppDirectory";
import { Tutorials } from "../Tutorials";
import { Knowledge } from "../Knowledge";
import { CartPage } from "../CartPage";

// import { Socialio } from 'Socialio';
import { useMenuVisibility } from "../@utils";
import {
  AuthenticationSignUpPage,
  AuthenticationSignInPage
} from "../@components";
import { Home } from "../Home";
import { ProductPage } from "../ProductPage";

import Navigator from "./Navigator";

const RootRoute = props => {
  const uiContext = React.useContext(UiContext);

  React.useEffect(() => {
    // on route change, we hide the menus
    uiContext.menu.handleClose();
    uiContext.filter.handleClose();
  }, [props.location.pathname]); // eslint-disable-line

  return (
    <>
      <Navigator />
      <Switch>
        <Route path="/analytics" component={Analytics} />
        <Route path="/buildings" component={Buildings} />
        <Route path="/tutorials" component={Tutorials} />
        <Route path="/knowledge" component={Knowledge} />
        {/*} <Route path="/social" component={Socialio} /> */}
        <Route path="/sign-up" component={AuthenticationSignUpPage} />
        <Route path="/sign-in" component={AuthenticationSignInPage} />
        <Route path="/home" component={Home} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/cart/:id?" component={CartPage} />
        <Route path="/info" component={AppDirectory} />
        <Redirect to="/home" />
      </Switch>
    </>
  );
};

const Application = () => {
  const menu = useMenuVisibility(false);
  const filter = useMenuVisibility(false);

  const contextValue = {
    menu,
    filter
  };

  return (
    <UiContext.Provider value={contextValue}>
      <BrowserRouter>
        <Route path="/" component={RootRoute} />
      </BrowserRouter>
    </UiContext.Provider>
  );
};

export default Application;
