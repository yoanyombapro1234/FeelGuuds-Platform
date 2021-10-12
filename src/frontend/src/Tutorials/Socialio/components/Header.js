import * as React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@duik/icon';

import {
  TopBar,
  TopBarSection,
  DropdownItem,
  // TopBarMenuDivider,
  TopBarTitle,
  TextField
} from '@duik/it';

import * as images from '@exampleAssets';

import TopBarUserDropwdown from './TopBarUserDropdown';

import cls from './social-header.module.scss';

const SocialHeader = () => (
  <TopBar>
    <TopBarSection>
      <TopBarSection>
        <TopBarTitle>
          <Icon>stats</Icon>
          Operation Cares Act
        </TopBarTitle>
        {/* <TopBarMenuDivider /> */}
      </TopBarSection>
      <TopBarSection className={cls.searchbarWrapper}>
        <TextField
          clear
          leftEl={<Icon>search_left</Icon>}
          placeholder="Search..."
        />
      </TopBarSection>
    </TopBarSection>
    <TopBarSection>
      <Icon className={cls['social-top-bar-icon']}>globe_network</Icon>
      <TopBarUserDropwdown imgUrl={images.a18}>
        <DropdownItem Component={Link} to="/social/profile">
          Profile
        </DropdownItem>
        <DropdownItem>Account Settings</DropdownItem>
        <DropdownItem>Logout</DropdownItem>
      </TopBarUserDropwdown>
    </TopBarSection>
  </TopBar>
);

export default SocialHeader;
