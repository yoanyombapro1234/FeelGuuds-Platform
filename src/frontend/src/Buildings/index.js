import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import SignUp from "./SignUp";
import Dashboard from "./Dashboard";

export const Buildings = props => {
  const {
    match: { path, url }
  } = props;

  // return (
  //   <div>Hello</div>
  // )

  return (
    <Switch>
      <Route path={`${path}/sign-up`} component={SignUp} />
      <Route path={`${path}`} component={Dashboard} />
      <Redirect to={`${url}/sign-up`} />
    </Switch>
  );
};

export default Buildings;
