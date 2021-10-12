import React from 'react';

import { Dropdown } from '@duik/it';

import DisplayComponent from './DisplayComponent';

const TopBarUserDropdown = ({ className, children, user, imgUrl, ...rest }) => (
  <Dropdown ButtonComponent={DisplayComponent} buttonProps={user} {...rest}>
    {children}
  </Dropdown>
);

TopBarUserDropdown.defaultProps = {
  className: null,
  children: null,
  imgUrl: null
};

export default TopBarUserDropdown;
