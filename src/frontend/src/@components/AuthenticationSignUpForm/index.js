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

import * as images from '../../@exampleAssets';
import cls from './authentication-signup-form.module.scss';

import { HomeTopBar, AuthenticationCard, AuthenticationCardContainer } from '../../@components'

export const AuthenticationSignUpForm = () => (
    <>
        <HomeTopBar />
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
                                    <TextField label="Name" name="firstname" />
                                </FormGroup>
                                <FormGroup>
                                    <TextField label="Lastname" name="lastname" />
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
                        <AuthenticationCardContainer>
                            <AuthenticationCard isSelected>
                                <Icon>wallet</Icon>
                                <p>Shopper</p>
                            </AuthenticationCard>
                            <AuthenticationCard>
                                <Icon>trending_up</Icon>
                                <p>Business</p>
                            </AuthenticationCard>
                            <AuthenticationCard>
                                <Icon>rocket</Icon>
                                <p>Influencer</p>
                            </AuthenticationCard>
                        </AuthenticationCardContainer>
                        <Button Component={Link} success block to="/social">
                            Sign Up
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
                Already on FeelGuuds? Let us take you to <Link to="/sign-in">Sign In!</Link>
            </p>
        </div>
    </>
);

export default AuthenticationSignUpForm;
