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
import cls from './buildings-signup.module.scss';

import LoginCard from './components/Card';
import LoginCardContainer from './components/CardContainer';

const BuildingsSignUp = () => (
  <div className={cls['page-signup-wrapper']}>
    <Widget className={cls['signup-widget-wrapper']}>
      <div className={cls['signup-content']}>
        <WidgetContent className={cls['signup-content-left']}>
          <h2>Create Your Account</h2>
          <p className={cls['signup-description']}>
            Get started with with us and support the causes you love!
          </p>
          <FormGroupContainer>
            <FormGroupContainer horizontal>
              <FormGroup>
                <TextField label="Name" name="name" />
              </FormGroup>
              <FormGroup>
                <TextField label="Surname" name="surname" />
              </FormGroup>
            </FormGroupContainer>

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

          {/* <UikDivider margin /> */}
          <br />
          <h3 className={cls['signup-headline']}>Account Type</h3>
          <LoginCardContainer>
            <LoginCard isSelected>
              <Icon>wallet</Icon>
              <p>Shopper</p>
            </LoginCard>
            <LoginCard>
              <Icon>trending_up</Icon>
              <p>Business</p>
            </LoginCard>
            <LoginCard>
              <Icon>rocket</Icon>
              <p>Merchant</p>
            </LoginCard>
          </LoginCardContainer>

          <Button Component={Link} success block to="/social">
            Sign Up
          </Button>
        </WidgetContent>
        <div className={cls['signup-content-right']}>
          <h3 className={cls['signup-headline']}>
            <Icon mr>building</Icon> Operation Cares Act
          </h3>
          <p className={cls['signup-description']}>
            Supporting the causes you care for just got easier!
          </p>
          <Avatar imgUrl={images.a11} name="Yoan Yomba - Welcome!" sm />
        </div>
      </div>
    </Widget>
    <p>
      Already on Operation Cares Act? Let us take you to <a href="/signin"> Sign In!</a>
    </p>
  </div>
);

export default BuildingsSignUp;
