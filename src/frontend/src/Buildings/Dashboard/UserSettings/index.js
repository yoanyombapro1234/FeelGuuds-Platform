import React from 'react';
import { NavLink } from 'react-router-dom';

/* eslint-disable max-len */

import {
  Widget,
  WidgetContent,
  WidgetContainer,
  Select,
  Divider,
  NavLink as NavLinkKit,
  NavSection,
  FormGroupContainer,
  FormGroup,
  TextField,
  Button,
  Checkbox,
  ContainerVertical,
  ScrollArea,
  Progress
} from '@duik/it';

import TopBar from './components/TopBar';
import cls from './buildings-user.module.scss';

import optionsCountries from './assets/optionsCountries';
import optionsCities from './assets/optionsCities';

import ImgUserProfile from './assets/profilePic.jpg';

const links = [
  {
    text: 'Account Settings',
    to: '/settings'
  },
  {
    text: 'Teams',
    to: '/teams'
  },
  {
    text: 'Password',
    to: '/password'
  },
  {
    text: 'Invoices',
    to: '/invoices'
  },
  {
    text: 'Integrations',
    to: '/integrations'
  },
  {
    text: 'Privacy',
    to: '/privacy'
  }
];

const BuildingsDashboard = () => {
  const [optionCountry, setOptionCountry] = React.useState(optionsCountries[0]);
  const [optionCity, setOptionCity] = React.useState(optionsCities[0]);

  const onClickCountry = option => setOptionCountry(option);
  const onClickCity = option => setOptionCity(option);

  return (
    <ContainerVertical>
      <TopBar
        rightEl={
          <div className={cls['buildings-user-progress-container']}>
            <p>Profile Completeness: 70%</p>
            <Progress className={cls['buildings-user-progress']} fill={0.7} />
          </div>
        }
      />
      <ScrollArea>
        <div className={cls['buildings-user-layout']}>
          <WidgetContainer className={cls['buildings-user-sub-nav']}>
            <Widget>
              <div
                className={cls['buildings-user-profile-pic']}
                style={{ backgroundImage: `url("${ImgUserProfile}")` }}
              />
              <WidgetContent className={cls['buildings-user-meta']}>
                <h2>Ethel Harvey</h2>
                <p>
                  {'Caracas, Venezuela'}
                  <br />
                  {'Your time: 4:32 PM (GMT-4)'}
                </p>
              </WidgetContent>
              <Divider />
              <div className={cls['buildings-user-menu']}>
                <NavSection>
                  {links.map(link => (
                    <NavLinkKit
                      key={link.to}
                      Component={NavLink}
                      to={`/buildings/user${link.to}`}
                    >
                      {link.text}
                    </NavLinkKit>
                  ))}
                </NavSection>
              </div>
            </Widget>
          </WidgetContainer>
          <WidgetContainer>
            <Widget>
              <WidgetContent>
                <h3>Basic Profile</h3>
                <p>This information can be edited from your profile page.</p>
              </WidgetContent>
              <Divider />
              <form onSubmit={() => {}}>
                <WidgetContent>
                  <FormGroupContainer>
                    <FormGroupContainer horizontal>
                      <FormGroup>
                        <TextField
                          defaultValue="Ethel"
                          label="First Name"
                          name="first_name"
                        />
                      </FormGroup>
                      <FormGroup>
                        <TextField
                          defaultValue="Harvey"
                          label="Last Name"
                          name="last_name"
                        />
                      </FormGroup>
                    </FormGroupContainer>
                    <FormGroupContainer horizontal>
                      <FormGroup>
                        <TextField
                          defaultValue="ethel.harvey@janlosert.com"
                          label="Email Address"
                          name="email"
                        />
                      </FormGroup>
                      <FormGroup>
                        <TextField
                          label="Phone Number"
                          name="phone"
                          placeholder="+1-000-000-0000"
                        />
                      </FormGroup>
                    </FormGroupContainer>
                    <FormGroupContainer horizontal>
                      <FormGroup>
                        <Select
                          block
                          label="Country"
                          activeOption={optionCountry}
                          options={optionsCountries}
                          onOptionClick={onClickCountry}
                          placeholder="Action"
                          position="bottomRight"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Select
                          block
                          label="City"
                          options={optionsCities}
                          onOptionClick={onClickCity}
                          activeOption={optionCity}
                          placeholder="Action"
                          position="bottomRight"
                        />
                      </FormGroup>
                    </FormGroupContainer>
                  </FormGroupContainer>
                </WidgetContent>
                <WidgetContent>
                  <Button success>Save Settings</Button>
                </WidgetContent>
              </form>
            </Widget>
            <Widget>
              <WidgetContent>
                <h3>Notifications</h3>
                <p>
                  Receive notifications, requests to write a review, pricing
                  notices, and other reminders related to your activities on
                  Building platform.
                </p>
              </WidgetContent>
              <form onSubmit={() => {}}>
                <Divider />
                <WidgetContent>
                  <FormGroupContainer horizontal>
                    <FormGroupContainer>
                      <h4>Promotions</h4>
                      <Checkbox
                        defaultChecked
                        label="Email"
                        name="[promotions]email"
                      />
                      <Checkbox
                        description="For your mobile or tablet device"
                        label="Push Notifications"
                        name="[promotions]push"
                      />
                      <Checkbox label="Text Messages" name="[promotions]text" />
                      <Checkbox label="Phone Calls" name="[promotions]phone" />
                    </FormGroupContainer>
                    <FormGroupContainer>
                      <h4>Messages</h4>
                      <Checkbox label="Email" name="[messages]email" />
                      <Checkbox
                        defaultChecked
                        description="For your mobile or tablet device"
                        label="Push Notifications"
                        name="[messages]push"
                      />
                      <Checkbox label="Text Messages" name="[messages]text" />
                    </FormGroupContainer>
                  </FormGroupContainer>
                </WidgetContent>
                <WidgetContent>
                  <Button transparent>Save Settings</Button>
                </WidgetContent>
              </form>
            </Widget>
          </WidgetContainer>
        </div>
      </ScrollArea>
    </ContainerVertical>
  );
};

export default BuildingsDashboard;
