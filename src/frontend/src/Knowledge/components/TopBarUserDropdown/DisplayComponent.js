import React from 'react';
import classnames from 'classnames';
import Icon from '@duik/icon';
import { Avatar } from '@duik/it';

import cls from './header-user-dropdown.module.scss';

const TopBarUserButton = ({
  className,
  children,
  imgUrl,
  name,
  handleOpen,
  handleClose,
  handleToggle,
  isOpen,
  setOpenState,
  ...rest
}) => (
  <span
    role="button"
    onClick={handleOpen}
    className={classnames(cls['top-bar-user-dropdown'], className)}
    {...rest}
  >
    <Avatar imgUrl={imgUrl} name={name} />
    <Icon className={cls['top-bar-user-dropdown-arrow']}>arrow_dropdown</Icon>
  </span>
);

TopBarUserButton.defaultProps = {
  className: null,
  children: null,
  imgUrl: null,
  name: null
};

export default TopBarUserButton;
