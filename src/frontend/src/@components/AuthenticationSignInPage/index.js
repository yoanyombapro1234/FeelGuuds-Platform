import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthenticationSignInForm } from '../../@components';

export const AuthenticationSignInPage = props => {
    /*
  const {
    match: { path, url }
  } = props;
    */

    // return (
    //   <div>Hello</div>
    // )

    return (
        <>
            <Switch>
                <Route path={`/sign-in`} component={AuthenticationSignInForm} />
                <Redirect to={`/sign-in`} />
            </Switch>
        </>
    );
};

export default AuthenticationSignInPage;
