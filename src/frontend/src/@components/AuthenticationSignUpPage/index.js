import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthenticationSignUpForm } from '../../@components';

export const AuthenticationSignUpPage = props => {
    /*
    const {
    match: { path, url }
    } = props;
    */
    return (
        <>
            <Switch>
                <Route path={`/sign-up`} component={AuthenticationSignUpForm} />
                <Redirect to={`/sign-up`} />
            </Switch>
        </>
    );
};

export default AuthenticationSignUpPage;
