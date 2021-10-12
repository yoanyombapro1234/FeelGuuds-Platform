import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@duik/icon';
import {
  Avatar,
  Button,
  TextField,
  Widget,
  WidgetContent,
  FormGroupContainer,
  FormGroup
} from '@duik/it';

import * as images from '@exampleAssets';
import cls from './authentication-signup.module.scss';
import {HomeTopBar} from '@components'

export const AuthenticationSignInForm = () => (
	<>
	<HomeTopBar />
  <div className={cls['page-signup-wrapper']}>
    <Widget className={cls['signup-widget-wrapper']}>
      <div className={cls['signup-content']}>
        <WidgetContent className={cls['signup-content-left']}>
          <h2>Log Into Your Account</h2>
					<br />
					<br />
          <FormGroupContainer>
            <FormGroup>
              <TextField
                label="E-mail address"
                name="email"
                placeholder="your@email.com"
              />
            </FormGroup>
            <FormGroup>
              <TextField
                label="Password"
                name="password"
                placeholder="·····"
                type="password"
              />
            </FormGroup>
          </FormGroupContainer>
					<br />
          <Button Component={Link} success block to="/social">
            Sign In
          </Button>
        </WidgetContent>
        <div className={cls['signup-content-right']}>
          <h3 className={cls['signup-headline']}>
            <Icon mr>building</Icon> FeelGuuds
          </h3>
          <p className={cls['signup-description']}>
            Supporting the causes you care for just got easier!
          </p>
          <Avatar imgUrl={images.a11} name="Yoan Yomba - Welcome!" sm />
        </div>
      </div>
    </Widget>
    <p>
			Not Already on FeelGuuds? Let us take you to <Link to="/sign-up">Sign Up!</Link>
    </p>
  </div>
	</>
);

export default AuthenticationSignInForm;
